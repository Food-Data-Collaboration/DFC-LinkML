# frozen_string_literal: true

require 'json'
require 'net/http'
require 'uri'
require_relative 'vocabulary_loader'
require_relative 'json_ld_serializer'
require_relative 'semantic_object'

module DfcLinkmlConnector
  module Core
    # Main connector for DFC data interchange.
    # Instantiate with specific ontology/taxonomy versions.
    #
    #   connector = Connector.new(ontology_version: "2.0.0", taxonomy_version: "2.0.0")
    #   connector.import(json_ld_string)
    #   connector.export(some_object)
    class Connector
      ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology".freeze
      TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies".freeze
      BUNDLED_CONTEXT_DIR = File.expand_path("../../contexts", __dir__).freeze

      PREDICATE_MAP = {
      "http://www.w3.org/2002/12/cal/icaltzd#byday" => "byday",
      "http://www.w3.org/2002/12/cal/icaltzd#bymonth" => "bymonth",
      "http://www.w3.org/2002/12/cal/icaltzd#dtend" => "dtend",
      "http://www.w3.org/2002/12/cal/icaltzd#dtstart" => "dtstart",
      "http://www.w3.org/2002/12/cal/icaltzd#freq" => "freq",
      "http://www.w3.org/2002/12/cal/icaltzd#interval" => "interval",
      "https://purl.org/geojson/vocab#coordinates" => "coordinates",
      "https://schema.org/dayOfWeek" => "day_of_week",
      "https://schema.org/opens" => "opens",
      "dfc-b:Image" => "image",
      "dfc-b:URL" => "url",
      "dfc-b:VATnumber" => "vat_number",
      "dfc-b:VATrate" => "vat_rate",
      "dfc-b:VATstatus" => "vat_status",
      "dfc-b:accessibilityInfo" => "accessibility_info",
      "dfc-b:arrivalDate" => "arrival_date",
      "dfc-b:availabilityDate" => "availability_date",
      "dfc-b:availabilityTime" => "availability_time",
      "dfc-b:batchNumber" => "batch_number",
      "dfc-b:bestBeforeDate" => "best_before_date",
      "dfc-b:brand" => "brand",
      "dfc-b:certiferReference" => "certifer_reference",
      "dfc-b:certificationScore" => "certification_score",
      "dfc-b:city" => "city",
      "dfc-b:claim" => "claim",
      "dfc-b:closes" => "closes",
      "dfc-b:cost" => "cost",
      "dfc-b:country" => "country",
      "dfc-b:countryCode" => "country_code",
      "dfc-b:date" => "date",
      "dfc-b:deliveryCondition" => "delivery_condition",
      "dfc-b:deliveryConstraint" => "delivery_constraint",
      "dfc-b:description" => "description",
      "dfc-b:discount" => "discount",
      "dfc-b:duration" => "duration",
      "dfc-b:email" => "email",
      "dfc-b:endDate" => "end_date",
      "dfc-b:enterpriseID" => "enterprise_id",
      "dfc-b:expiryDate" => "expiry_date",
      "dfc-b:extraAvailabilityTime" => "extra_availability_time",
      "dfc-b:extraDeliveryCondition" => "extra_delivery_condition",
      "dfc-b:familyName" => "family_name",
      "dfc-b:fee" => "fee",
      "dfc-b:firstName" => "first_name",
      "dfc-b:frozen" => "frozen",
      "dfc-b:hasPercentageOfAlcoholByVolume" => "percentage_of_alcohol_by_volume",
      "dfc-b:invoiceNumber" => "invoice_number",
      "dfc-b:latitude" => "latitude",
      "dfc-b:lifetime" => "lifetime",
      "dfc-b:logo" => "logo",
      "dfc-b:longitude" => "longitude",
      "dfc-b:marginPercent" => "margin_percent",
      "dfc-b:maxValue" => "max_value",
      "dfc-b:minValue" => "min_value",
      "dfc-b:name" => "name",
      "dfc-b:operatorId" => "operator_id",
      "dfc-b:orderNumber" => "order_number",
      "dfc-b:paymentMethodProvider" => "payment_method_provider",
      "dfc-b:paymentMethodType" => "payment_method_type",
      "dfc-b:phoneNumber" => "phone_number",
      "dfc-b:physicalCharacteristics" => "physical_characteristics",
      "dfc-b:postcode" => "postcode",
      "dfc-b:productionDate" => "production_date",
      "dfc-b:quantity" => "quantity",
      "dfc-b:refrigerated" => "refrigerated",
      "dfc-b:region" => "region",
      "dfc-b:sku" => "sku",
      "dfc-b:specificCondition" => "specific_condition",
      "dfc-b:startDate" => "start_date",
      "dfc-b:stockLimitation" => "stock_limitation",
      "dfc-b:street" => "street",
      "dfc-b:totalTheoriticalStock" => "total_theoritical_stock",
      "dfc-b:value" => "value",
      "dfc-b:websitePage" => "website_page",
      "http://www.w3.org/2002/12/cal/icaltzd#rrule" => "rrule",
      "skos:broader" => "broader",
      "skos:inScheme" => "in_scheme",
      "skos:narrower" => "narrower",
      "https://purl.org/geojson/vocab#geometry" => "geometry",
      "https://purl.org/geojson/vocab#properties" => "properties",
      "dfc-b:DFC_BusinessOntology_ObjectProperty" => "d_f_c__business_ontology__object_property",
      "dfc-b:DFC_Interface_Property" => "d_f_c__interface__property",
      "dfc-b:addressOf" => "address_of",
      "dfc-b:affiliatedTo" => "affiliated_to",
      "dfc-b:affiliates" => "affiliates",
      "dfc-b:allergenCharacteristicOf" => "allergen_characteristic_of",
      "dfc-b:basedAt" => "based_at",
      "dfc-b:belongsTo" => "belongs_to",
      "dfc-b:brandOf" => "brand_of",
      "dfc-b:certificateOf" => "certificate_of",
      "dfc-b:certifies" => "certifies",
      "dfc-b:characteristicOf" => "characteristic_of",
      "dfc-b:claimOf" => "claim_of",
      "dfc-b:composedOf" => "composed_of",
      "dfc-b:composes" => "composes",
      "dfc-b:concernedBy" => "concerned_by",
      "dfc-b:concerns" => "concerns",
      "dfc-b:constituedBy" => "constitued_by",
      "dfc-b:constitutes" => "constitutes",
      "dfc-b:consumedBy" => "consumed_by",
      "dfc-b:consumes" => "consumes",
      "dfc-b:containerInformationOf" => "container_information_of",
      "dfc-b:coordinatedBy" => "coordinated_by",
      "dfc-b:definedBy" => "defined_by",
      "dfc-b:defines" => "defines",
      "dfc-b:deliveredAt" => "delivered_at",
      "dfc-b:delivery" => "delivery",
      "dfc-b:endsAt" => "ends_at",
      "dfc-b:facetOf" => "facet_of",
      "dfc-b:from" => "from",
      "dfc-b:fulfills" => "fulfills",
      "dfc-b:geographicalOriginOf" => "geographical_origin_of",
      "dfc-b:hasAddress" => "address",
      "dfc-b:hasAllergenCharacteristic" => "allergen_characteristic",
      "dfc-b:hasAllergenDimension" => "allergen_dimension",
      "dfc-b:hasBrand" => "brand",
      "dfc-b:hasCertification" => "certification",
      "dfc-b:hasCharacteristic" => "characteristic",
      "dfc-b:hasClaim" => "claim",
      "dfc-b:hasContainerInformation" => "container_information",
      "dfc-b:hasCountry" => "country",
      "dfc-b:hasDimension" => "dimension",
      "dfc-b:hasFacet" => "facet",
      "dfc-b:hasFulfilmentStatus" => "fulfilment_status",
      "dfc-b:hasGeoJsonFeature" => "geo_json_feature",
      "dfc-b:hasGeographicalOrigin" => "geographical_origin",
      "dfc-b:hasIngredient" => "ingredient",
      "dfc-b:hasInput" => "input",
      "dfc-b:hasLabellingCharacteristic" => "labelling_characteristic",
      "dfc-b:hasLabellingDimension" => "labelling_dimension",
      "dfc-b:hasMainContact" => "main_contact",
      "dfc-b:hasMember" => "member",
      "dfc-b:hasNatureOrigin" => "nature_origin",
      "dfc-b:hasNutrientCharacteristic" => "nutrient_characteristic",
      "dfc-b:hasNutrientDimension" => "nutrient_dimension",
      "dfc-b:hasObject" => "object",
      "dfc-b:hasOffer" => "offer",
      "dfc-b:hasOption" => "option",
      "dfc-b:hasOrderStatus" => "order_status",
      "dfc-b:hasOutput" => "output",
      "dfc-b:hasPart" => "part",
      "dfc-b:hasPartOrigin" => "part_origin",
      "dfc-b:hasPaymentMethod" => "payment_method",
      "dfc-b:hasPaymentStatus" => "payment_status",
      "dfc-b:hasPhoneNumber" => "phone_number",
      "dfc-b:hasPhysicalCharacteristic" => "physical_characteristic",
      "dfc-b:hasPhysicalDimension" => "physical_dimension",
      "dfc-b:hasPrice" => "price",
      "dfc-b:hasProductOption" => "product_option",
      "dfc-b:hasProductOptionValue" => "product_option_value",
      "dfc-b:hasQuantity" => "quantity",
      "dfc-b:hasReference" => "reference",
      "dfc-b:hasReferenceProductOption" => "reference_product_option",
      "dfc-b:hasReferenceProductOptionValue" => "reference_product_option_value",
      "dfc-b:hasSocialMedia" => "social_media",
      "dfc-b:hasStatus" => "status",
      "dfc-b:hasStep" => "step",
      "dfc-b:hasTemperature" => "temperature",
      "dfc-b:hasTemplateSaleSession" => "template_sale_session",
      "dfc-b:hasTransformationType" => "transformation_type",
      "dfc-b:hasType" => "type",
      "dfc-b:hasUnit" => "unit",
      "dfc-b:hasVariant" => "variant",
      "dfc-b:hasVariantCaracteristic" => "variant_caracteristic",
      "dfc-b:holds" => "holds",
      "dfc-b:hostedAt" => "hosted_at",
      "dfc-b:hosts" => "hosts",
      "dfc-b:identifiedBy" => "identified_by",
      "dfc-b:identifies" => "identifies",
      "dfc-b:industrializedBy" => "industrialized_by",
      "dfc-b:industrializes" => "industrializes",
      "dfc-b:inputOf" => "input_of",
      "dfc-b:isAvailableDuring" => "is_available_during",
      "dfc-b:isCertifiedBy" => "is_certified_by",
      "dfc-b:isFulfilledBy" => "is_fulfilled_by",
      "dfc-b:isIngredientOf" => "is_ingredient_of",
      "dfc-b:isMemberOf" => "is_member_of",
      "dfc-b:isOpenDuring" => "is_open_during",
      "dfc-b:isPriceOf" => "is_price_of",
      "dfc-b:isShippedIn" => "is_shipped_in",
      "dfc-b:isStepOf" => "is_step_of",
      "dfc-b:isTemperatureOf" => "is_temperature_of",
      "dfc-b:isTemplateSaleSessionOf" => "is_template_sale_session_of",
      "dfc-b:isVariantOf" => "is_variant_of",
      "dfc-b:labellingCharacteristicOf" => "labelling_characteristic_of",
      "dfc-b:listedIn" => "listed_in",
      "dfc-b:lists" => "lists",
      "dfc-b:localizedBy" => "localized_by",
      "dfc-b:localizes" => "localizes",
      "dfc-b:mainContactOf" => "main_contact_of",
      "dfc-b:maintainedBy" => "maintained_by",
      "dfc-b:maintains" => "maintains",
      "dfc-b:managedBy" => "managed_by",
      "dfc-b:manages" => "manages",
      "dfc-b:natureOriginOf" => "nature_origin_of",
      "dfc-b:nutrientCharacteristicOf" => "nutrient_characteristic_of",
      "dfc-b:objectOf" => "object_of",
      "dfc-b:offeredThrough" => "offered_through",
      "dfc-b:offers" => "offers",
      "dfc-b:offersTo" => "offers_to",
      "dfc-b:optionOf" => "option_of",
      "dfc-b:orderedBy" => "ordered_by",
      "dfc-b:orders" => "orders",
      "dfc-b:outputOf" => "output_of",
      "dfc-b:ownedBy" => "owned_by",
      "dfc-b:owns" => "owns",
      "dfc-b:paidWith" => "paid_with",
      "dfc-b:partOf" => "part_of",
      "dfc-b:partOriginOf" => "part_origin_of",
      "dfc-b:phoneNumberOf" => "phone_number_of",
      "dfc-b:physicalCharacteristicOf" => "physical_characteristic_of",
      "dfc-b:pickUp" => "pick_up",
      "dfc-b:pickedUpAt" => "picked_up_at",
      "dfc-b:processOf" => "process_of",
      "dfc-b:producedBy" => "produced_by",
      "dfc-b:produces" => "produces",
      "dfc-b:proposedBy" => "proposed_by",
      "dfc-b:proposes" => "proposes",
      "dfc-b:referenceOf" => "reference_of",
      "dfc-b:referencedBy" => "referenced_by",
      "dfc-b:references" => "references",
      "dfc-b:refersTo" => "refers_to",
      "dfc-b:representedBy" => "represented_by",
      "dfc-b:represents" => "represents",
      "dfc-b:requestedBy" => "requested_by",
      "dfc-b:requests" => "requests",
      "dfc-b:satisfiedBy" => "satisfied_by",
      "dfc-b:satisfies" => "satisfies",
      "dfc-b:selectedBy" => "selected_by",
      "dfc-b:selects" => "selects",
      "dfc-b:sells" => "sells",
      "dfc-b:ships" => "ships",
      "dfc-b:socialMediaOf" => "social_media_of",
      "dfc-b:soldBy" => "sold_by",
      "dfc-b:startsAt" => "starts_at",
      "dfc-b:storedIn" => "stored_in",
      "dfc-b:stores" => "stores",
      "dfc-b:suppliedBy" => "supplied_by",
      "dfc-b:supplies" => "supplies",
      "dfc-b:suppliesTo" => "supplies_to",
      "dfc-b:to" => "to",
      "dfc-b:tracedBy" => "traced_by",
      "dfc-b:traces" => "traces",
      "dfc-b:transformedBy" => "transformed_by",
      "dfc-b:transforms" => "transforms",
      "dfc-b:transportedBy" => "transported_by",
      "dfc-b:transports" => "transports",
      "dfc-b:typeOf" => "type_of",
      "dfc-b:useVehicle" => "use_vehicle",
      "dfc-b:usedInRoute" => "used_in_route",
      "dfc-b:uses" => "uses",
      "dfc-b:DFC_TechnicalOntology_ObjectProperty" => "d_f_c__technical_ontology__object_property",
      "dfc-t:hasPivot" => "pivot",
      "dfc-t:hostedBy" => "hosted_by",
      "dfc-t:represent" => "represent",
      }.freeze

      class << self
        def default_context_url
          @default_context_url ||= "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json"
        end

        def default_context_url=(url)
          @default_context_url = url
        end
      end

      attr_reader :ontology_version, :taxonomy_version, :vocab_loader

      def initialize(ontology_version: "2.0.0", taxonomy_version: "2.0.0")
        @ontology_version = ontology_version
        @taxonomy_version = taxonomy_version
        @vocab_loader = VocabularyLoader.new(taxonomy_version: taxonomy_version, ontology_version: ontology_version)
        @context = nil
        @facets = {}
        @measures = {}
        @product_types = {}
        @other_vocabularies = {}
        load_bundled_taxonomies
      end

      # Loads the taxonomies shipped with the gem (ruby-gem/vocabularies),
      # falling back to network fetches only when the bundled files are absent.
      def load_bundled_taxonomies
        load_facets(_bundled_json("Facet")) if _bundled_json("Facet")
        load_measures(_bundled_json("Measure")) if _bundled_json("Measure")
        load_product_types(_bundled_json("ProductType")) if _bundled_json("ProductType")
        load_vocabulary("Scope", _bundled_json("Scope")) if _bundled_json("Scope")
        load_vocabulary("VocabularyTerm", _bundled_json("VocabularyTerm")) if _bundled_json("VocabularyTerm")
        self
      end

      def context_url
        "#{ONTOLOGY_BASE_URL}/v#{@ontology_version}/context/context_#{@ontology_version}.json"
      end

      def context
        @context ||= _bundled_context || _fetch_context
      end

      # Loads the JSON-LD context shipped with the gem (ruby-gem/contexts).
      # Returns nil if no bundled context matches the requested version, so the
      # caller falls back to fetching it from the network.
      def bundled_context
        _bundled_context
      end

      def load_facets(json_data)
        @vocab_loader.load("Facet", json_data)
        @facets = _build_nested_hash(@vocab_loader.vocabulary("Facet"))
        self
      end

      def load_measures(json_data)
        @vocab_loader.load("Measure", json_data)
        @measures = _build_nested_hash(@vocab_loader.vocabulary("Measure"))
        self
      end

      def load_product_types(json_data)
        @vocab_loader.load("ProductType", json_data)
        @product_types = _build_nested_hash(@vocab_loader.vocabulary("ProductType"))
        self
      end

      def load_vocabulary(name, json_data)
        @vocab_loader.load(name, json_data)
        @other_vocabularies[name] = _build_nested_hash(@vocab_loader.vocabulary(name))
        self
      end

      def load_facets_from_url
        load_facets(_fetch_taxonomy_json("facets"))
      end

      def load_measures_from_url
        load_measures(_fetch_taxonomy_json("measures"))
      end

      def load_product_types_from_url
        load_product_types(_fetch_taxonomy_json("productTypes"))
      end

      def export(*objects)
        serializer = JsonLdSerializer.new(_safe_context, context_url)
        serializer.to_json(*objects)
      end

      # Import JSON-LD data and return SemanticObject instances.
      # Resolves @id references within the same document (shallow).
      def import(json_ld_data)
        data = json_ld_data.is_a?(String) ? JSON.parse(json_ld_data) : json_ld_data

        entries = data.is_a?(Array) ? data : (data["@graph"] || [data])

        objects_by_id = {}
        instances = []

        entries.each do |entry|
          semantic_id = entry["@id"]
          semantic_type = entry["@type"]
          next unless semantic_id && semantic_type

          klass = SemanticObject.type_registry[semantic_type]
          next unless klass

          obj = klass.new(semantic_id)
          objects_by_id[semantic_id] = obj
          instances << obj
        end

        entries.each do |entry|
          semantic_id = entry["@id"]
          obj = objects_by_id[semantic_id]
          next unless obj

          entry.each do |key, value|
            next if key.start_with?("@")
            prop_name = _predicate_to_prop_name(key)
            next unless obj.respond_to?(:"#{prop_name}=")

            if value.is_a?(Array)
              resolved = value.map do |v|
                v.is_a?(String) && v.start_with?("http", "/") ? (objects_by_id[v] || v) : v
              end
              obj.send(:"#{prop_name}=", resolved)
            elsif value.is_a?(String) && (value.start_with?("http") || value.start_with?("/"))
              obj.send(:"#{prop_name}=", objects_by_id[value] || value)
            else
              obj.send(:"#{prop_name}=", value)
            end
          end
        end

        instances.length == 1 ? instances.first : instances
      end

      def facet
        @other_vocabularies["Facet"] || @vocab_loader.vocabulary("Facet")
      end

      def measure
        @other_vocabularies["Measure"] || @vocab_loader.vocabulary("Measure")
      end

      def product_type
        @other_vocabularies["ProductType"] || @vocab_loader.vocabulary("ProductType")
      end

      def scope
        @other_vocabularies["Scope"] || @vocab_loader.vocabulary("Scope")
      end

      def vocabulary_term
        @other_vocabularies["VocabularyTerm"] || @vocab_loader.vocabulary("VocabularyTerm")
      end
      private

      def _bundled_context
        file = "context_#{@ontology_version}.json"
        path = File.join(BUNDLED_CONTEXT_DIR, file)
        return nil unless File.exist?(path)
        JSON.parse(File.read(path))
      end

      def _bundled_json(name)
        file = VocabularyLoader::BUNDLED_FILES[name]
        return nil unless file
        path = File.join(VocabularyLoader::BUNDLED_DIR, file)
        File.exist?(path) ? JSON.parse(File.read(path)) : nil
      end

      def _safe_context
        context
      rescue => e
        warn "Warning: could not load JSON-LD context (#{e.message}); exporting without compaction."
        nil
      end

      def _fetch_context
        uri = URI(context_url)
        response = _http_get_follow_redirects(uri)
        raise "Failed to fetch context from #{context_url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      rescue => e
        raise "Failed to load JSON-LD context: #{e.message}"
      end

      def _http_get_follow_redirects(uri, limit = 5)
        raise "Too many redirects fetching #{uri}" if limit.zero?
        request = Net::HTTP::Get.new(uri)
        request["dfc-version"] = @ontology_version
        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") { |http| http.request(request) }
        if response.is_a?(Net::HTTPRedirection) && response["location"]
          redirect_uri = URI.join(uri.to_s, response["location"])
          return _http_get_follow_redirects(redirect_uri, limit - 1)
        end
        response
      end

      def _fetch_taxonomy_json(name)
        url = "#{TAXONOMY_BASE_URL}/v#{@taxonomy_version}/#{name}.json"
        uri = URI(url)
        request = Net::HTTP::Get.new(uri)
        request["dfc-version"] = @ontology_version
        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == "https") { |http| http.request(request) }
        raise "Failed to fetch taxonomy from #{url}: #{response.code}" unless response.is_a?(Net::HTTPSuccess)
        JSON.parse(response.body)
      end

      def _build_nested_hash(concepts)
        result = {}
        concepts.each do |key, concept|
          parts = key.split(/[_\s]+/)
          current = result
          parts.each_with_index do |part, i|
            normalized = part.downcase.gsub(/[^a-z0-9]/, "_")
            if i == parts.length - 1
              current[normalized] = concept
            else
              current[normalized] ||= {}
              current = current[normalized]
            end
          end
        end
        result
      end

      def _predicate_to_prop_name(predicate)
        return PREDICATE_MAP[predicate] if PREDICATE_MAP.key?(predicate)

        name = predicate.dup
        if name.include?("#")
          name = name[(name.rindex("#") + 1)..-1]
        else
          colon_index = name.rindex(":")
          name = name[(colon_index + 1)..-1] if colon_index
        end
        if name.start_with?("has")
          name = name[3..-1]
        end
        name = name.gsub(/([A-Z])/, "_\\1").downcase
        name.sub!(/^_/, "")
        name
      end
    end
  end
end
