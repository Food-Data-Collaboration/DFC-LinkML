# frozen_string_literal: true

module DFCLinkMLConnector
  module Vocabulary
    class Loader
      def self.load_facets(filepath)
        JSON.parse(File.read(filepath))
      end

      def self.load_measures(filepath)
        JSON.parse(File.read(filepath))
      end

      def self.load_product_types(filepath)
        JSON.parse(File.read(filepath))
      end
    end
  end
end