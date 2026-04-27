# frozen_string_literal: true

require "yaml"
require "fileutils"
require "json"

module DFCLinkMLConnector
  module Generators
    class LinkMLCodegen
      DFC_CONTEXT = "http://static.datafoodconsortium.org/ontologies/context.json"

      def self.generate(linkml_path, output_dir)
        new(linkml_path, output_dir).generate
      end

      def initialize(linkml_path, output_dir)
        @linkml_path = linkml_path
        @output_dir = output_dir
        @schema = load_schema
      end

      def generate
        puts "Generating connector classes from LinkML..."
        generate_defined_product
        generate_connector_singleton
        generate_model_classes
        generate_vocabulary_json
        puts "Generation complete to: #{@output_dir}"
        true
      end

      private

      def load_schema
        YAML.safe_load(File.read(@linkml_path), permitted_classes: [], permitted_symbols: [], filename: @linkml_path)
      end

      def classes
        @schema["classes"] || {}
      end

      def enums
        @schema["enums"] || {}
      end

      def slots
        @schema["slots"] || {}
      end

      def superclass_for(class_name)
        class_def = classes[class_name]
        return "RepresentedThing" unless class_def
        superclass = class_def["is_a"]
        map_superclass(superclass)
      end

      def map_superclass(linkml_superclass)
        mapping = {
          "Where_Subject" => "RepresentedThing",
          "Who_Subject" => "RepresentedThing",
          "What_Subject" => "RepresentedThing",
          "How_Subject" => "RepresentedThing",
          "DFC_BusinessOntology_Relation" => "RepresentedThing",
          "DFC_BusinessOntology_Characteristic" => "RepresentedThing",
          "DFC_BusinessOntology_Subject" => "RepresentedThing",
          "RepresentedThing" => "RepresentedThing"
        }
        mapping[linkml_superclass] || "RepresentedThing"
      end

      def semantic_type(class_name)
        "dfc-b:#{class_name}"
      end

      def filename_from_class(name)
        name.gsub("_", "-").downcase
      end

      def generate_defined_product
        content = <<~CONTENT
# frozen_string_literal: true

module DFCLinkMLConnector
  module Connector
    class RepresentedThing
      attr_reader :semantic_id
      attr_accessor :semantic_type

      def initialize(semantic_id = nil, **attributes)
        @semantic_id = semantic_id || "urn:uuid:#{SecureRandom.uuid}"
        @attributes = attributes
        @semantic_type = self.class.name.demodulize
      end

      def ==(other)
        other.is_a?(RepresentedThing) && other.semantic_id == @semantic_id
      end

      def hash
        @semantic_id.hash
      end

      def to_semantic
        result = { "@id" => @semantic_id, "@type" => @semantic_type }
        @attributes.each do |key, value|
          next if value.nil?
          prefix_key = "dfc-b#{key.to_s.split('_').map(&:capitalize).join}"
          result[prefix_key] = serialize_value(value)
        end
        result
      end

      private

      def serialize_value(val)
        case val
        when RepresentedThing
          val.to_semantic
        when Array
          val.map { |v| serialize_value(v) }
        else
          val
        end
      end
    end
  end
end
CONTENT

        File.write(File.join(@output_dir, "defined_product.rb"), content)
      end

      def generate_connector_singleton
        content = <<~CONTENT
# frozen_string_literal: true

require "singleton"
require "ostruct"

module DFCLinkMLConnector
  module Connector
    class Connector
      include Singleton

      DFC_CONTEXT_URL = "#{DFC_CONTEXT}"

      attr_accessor :context

      def initialize
        @facets = nil
        @measures = nil
        @product_types = nil
        @context = DFC_CONTEXT_URL
      end

      def instance
        self
      end

      def loadFacets(json)
        @facets = build_vocabulary(json, "FACETS")
      end

      def loadMeasures(json)
        @measures = build_vocabulary(json, "MEASURES")
      end

      def loadProductTypes(json)
        @product_types = build_vocabulary(json, "PRODUCT_TYPES")
      end

      def FACETS
        @facets
      end

      def MEASURES
        @measures
      end

      def PRODUCT_TYPES
        @product_types
      end

      def export(*objects)
        graph = objects.map { |obj| obj.respond_to?(:to_semantic) ? obj.to_semantic : obj }
        
        if graph.length == 1
          result = graph.first.dup
          result["@context"] = @context
          result
        else
          { "@context" => @context, "@graph" => graph }
        end
      end

      private

      def build_vocabulary(json, name)
        return nil unless json.is_a?(Hash)
        
        vocab = OpenStruct.new
        return vocab unless json["@graph"]
        
        json["@graph"].each do |item|
          next unless item["@type"] == "skos:Concept"
          
          id = item["@id"] || ""
          segments = id.split(":").last.to_s.split("/").reject(&:empty?)
          next if segments.empty?
          
          category = segments[0]
          value = segments[1] || segments.last
          
          container = vocab
          category.to_s.split("_").each do |part|
            unless container.respond_to?(part.to_sym)
              container.define_singleton_method(part.to_sym) { OpenStruct.new }
              container.define_singleton_method("#{part}=".to_sym) { |v| @inner = v }
            end
            container = container.send(part.to_sym)
          end
          
          container.define_singleton_method(value.to_sym) { item }
        end
        
        vocab
      end
    end
  end
end
CONTENT

        File.write(File.join(@output_dir, "connector.rb"), content)
      end

      def generate_model_classes
        classes.keys.sort.each do |name|
          next if name.include?("_")
          generate_class(name, classes[name])
        end
      end

      def generate_class(name, definition)
        super = superclass_for(name)
        type = semantic_type(name)
        
        content = <<~CONTENT
# frozen_string_literal: true

module DFCLinkMLConnector
  module Connector
    class #{name} < #{super}
      SEMANTIC_TYPE = "#{type}"

      def initialize(semantic_id = nil, **kwargs)
        super(semantic_id, **kwargs)
        @semantic_type = "#{type}"
      end
    end
  end
end
CONTENT

        file_path = File.join(@output_dir, "#{filename_from_class(name)}.rb")
        File.write(file_path, content)
      end

      def generate_vocabulary_json
        vocab_dir = File.join(@output_dir, "..", "vocabularies")
        FileUtils.mkdir_p(vocab_dir)
        
        enums.each do |name, definition|
          generate_enum_json(name, definition, vocab_dir)
        end
      end

      def generate_enum_json(name, definition, vocab_dir)
        pv = definition["permissible_values"] || {}
        concepts = pv.map do |key, val|
          {
            "@id" => val["meaning"] || "dfc-f:#{key}",
            "@type" => "skos:Concept",
            "skos:prefLabel" => val["description"] || key,
            "skos:definition" => val["description"] || key
          }
        end

        json = {
          "@context" => "http://www.w3.org/2004/02/skos/core#",
          "@graph" => concepts
        }

        File.write(File.join(vocab_dir, "#{name.downcase}.json"), JSON.pretty_generate(json))
      end
    end
  end
end