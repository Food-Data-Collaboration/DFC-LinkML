# frozen_string_literal: true

# Class from DFC Business Ontology: #SuppliedProduct
require_relative '../semantic_object'
require_relative 'defined_product'


class SuppliedProduct < DefinedProduct
  SEMANTIC_TYPE = "dfc-b:SuppliedProduct".freeze

  # @return [String]
  attr_accessor :best_before_date

  # @return [String]
  attr_accessor :delivery_condition

  # @return [String]
  attr_accessor :expiry_date

  # @return [String]
  attr_accessor :extra_delivery_condition

  # @return [String]
  attr_accessor :frozen

  # @return [String]
  attr_accessor :production_date

  # @return [String]
  attr_accessor :refrigerated

  # @return [String]
  attr_accessor :total_theoritical_stock

  # @return [Temperature]
  attr_accessor :temperature

  # @param semanticId [String]
  # @param bestBeforeDate: nil, deliveryCondition: nil, expiryDate: nil, extraDeliveryCondition: nil, frozen: nil, productionDate: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil
  def initialize(semanticId, bestBeforeDate: nil, deliveryCondition: nil, expiryDate: nil, extraDeliveryCondition: nil, frozen: nil, productionDate: nil, refrigerated: nil, totalTheoriticalStock: nil, temperature: nil)
    super(semanticId)
    @best_before_date = bestBeforeDate
    @delivery_condition = deliveryCondition
    @expiry_date = expiryDate
    @extra_delivery_condition = extraDeliveryCondition
    @frozen = frozen
    @production_date = productionDate
    @refrigerated = refrigerated
    @total_theoritical_stock = totalTheoriticalStock
    @temperature = temperature
    self.semanticType = "dfc-b:SuppliedProduct"
    registerSemanticProperty("dfc-b:SuppliedProduct:bestBeforeDate", &method("best_before_date")).valueSetter = method("best_before_date=")
    registerSemanticProperty("dfc-b:SuppliedProduct:deliveryCondition", &method("delivery_condition")).valueSetter = method("delivery_condition=")
    registerSemanticProperty("dfc-b:SuppliedProduct:expiryDate", &method("expiry_date")).valueSetter = method("expiry_date=")
    registerSemanticProperty("dfc-b:SuppliedProduct:extraDeliveryCondition", &method("extra_delivery_condition")).valueSetter = method("extra_delivery_condition=")
    registerSemanticProperty("dfc-b:SuppliedProduct:frozen", &method("frozen")).valueSetter = method("frozen=")
    registerSemanticProperty("dfc-b:SuppliedProduct:productionDate", &method("production_date")).valueSetter = method("production_date=")
    registerSemanticProperty("dfc-b:SuppliedProduct:refrigerated", &method("refrigerated")).valueSetter = method("refrigerated=")
    registerSemanticProperty("dfc-b:SuppliedProduct:totalTheoriticalStock", &method("total_theoritical_stock")).valueSetter = method("total_theoritical_stock=")
    registerSemanticProperty("dfc-b:SuppliedProduct:hasTemperature", &method("temperature")).valueSetter = method("temperature=")
  end

end
