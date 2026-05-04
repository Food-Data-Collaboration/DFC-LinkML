# frozen_string_literal: true

# Base class for all DFC semantic objects.
# Mimics the VirtualAssembly::Semantizer::SemanticObject interface
# from the reference connector-ruby implementation.
class SemanticObject
  attr_accessor :semanticId
  attr_accessor :semanticType

  def initialize(semanticId)
    @semanticId = semanticId
    @semanticType = nil
    @semanticProperties = {}
  end

  def registerSemanticProperty(predicate, &getter)
    prop = SemanticProperty.new(predicate, &getter)
    @semanticProperties[predicate] = prop
    prop
  end

  def semantic_property_value(predicate)
    prop = @semanticProperties[predicate]
    prop&.getter&.call
  end

  def to_jsonld
    result = {
      "@context" => "http://static.datafoodconsortium.org/ontologies/context.json",
      "@id" => @semanticId,
      "@type" => @semanticType,
    }

    @semanticProperties.each do |predicate, prop|
      value = prop.getter.call
      next if value.nil?

      if value.is_a?(Array)
        next if value.empty?
        if value.first.is_a?(SemanticObject)
          result[predicate] = value.map { |v| v.semanticId }
        else
          result[predicate] = value
        end
      elsif value.is_a?(SemanticObject)
        result[predicate] = value.semanticId
      elsif value.is_a?(Numeric)
        result[predicate] = value
      else
        result[predicate] = value.to_s
      end
    end

    result
  end

  def to_json
    JSON.generate(to_jsonld)
  end

  class SemanticProperty
    attr_accessor :predicate
    attr_accessor :getter
    attr_accessor :valueSetter

    def initialize(predicate, &getter)
      @predicate = predicate
      @getter = getter
    end
  end
end
