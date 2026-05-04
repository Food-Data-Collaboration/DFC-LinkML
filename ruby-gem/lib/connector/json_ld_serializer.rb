# frozen_string_literal: true

require 'json'

# Serializes DFC semantic objects to JSON-LD.
class JsonLdSerializer
  def serialize(*objects)
    result = {
      "@context" => "http://static.datafoodconsortium.org/ontologies/context.json",
    }

    if objects.length == 1
      obj = objects.first
      return _serialize_object(obj)
    end

    graph = []
    objects.each do |obj|
      graph << _serialize_object(obj)
    end
    result["@graph"] = graph
    result
  end

  def to_json(*objects)
    JSON.pretty_generate(serialize(*objects))
  end

  private

  def _serialize_object(obj)
    result = {
      "@id" => obj.semanticId,
      "@type" => obj.semanticType,
    }

    obj.instance_variables.each do |ivar|
      next if ivar == :@semanticId || ivar == :@semanticType || ivar == :@semanticProperties
      value = obj.instance_variable_get(ivar)
      next if value.nil?

      name = ivar.to_s.sub(/^@/, '')

      if value.is_a?(Array)
        next if value.empty?
        if value.first.is_a?(SemanticObject)
          result["dfc-b:#{name}"] = value.map { |v| v.semanticId }
        else
          result["dfc-b:#{name}"] = value
        end
      elsif value.is_a?(SemanticObject)
        result["dfc-b:#{name}"] = value.semanticId
      elsif value.is_a?(Numeric)
        result["dfc-b:#{name}"] = value
      else
        result["dfc-b:#{name}"] = value.to_s
      end
    end

    result
  end
end
