import { SemanticObject } from "./SemanticObject.js";
import { VocabularyLoader } from "./VocabularyLoader.js";
import { JsonLdSerializer } from "./JsonLdSerializer.js";
import jsonld from "jsonld";
import bundledContextV200 from "../context/context_2.0.0.js";
import { Address } from "../models/Address.js";
import { Agent } from "../models/Agent.js";
import { AllergenCharacteristic } from "../models/AllergenCharacteristic.js";
import { AsPlannedConsumptionFlow } from "../models/AsPlannedConsumptionFlow.js";
import { AsPlannedLocalConsumptionFlow } from "../models/AsPlannedLocalConsumptionFlow.js";
import { AsPlannedLocalProductionFlow } from "../models/AsPlannedLocalProductionFlow.js";
import { AsPlannedLocalTransformation } from "../models/AsPlannedLocalTransformation.js";
import { AsPlannedProductionFlow } from "../models/AsPlannedProductionFlow.js";
import { AsPlannedTransformation } from "../models/AsPlannedTransformation.js";
import { AsRealizedConsumptionFlow } from "../models/AsRealizedConsumptionFlow.js";
import { AsRealizedProductionFlow } from "../models/AsRealizedProductionFlow.js";
import { AsRealizedTransformation } from "../models/AsRealizedTransformation.js";
import { Brand } from "../models/Brand.js";
import { Catalog } from "../models/Catalog.js";
import { CatalogItem } from "../models/CatalogItem.js";
import { Certfication } from "../models/Certfication.js";
import { Collection } from "../models/Collection.js";
import { Concept } from "../models/Concept.js";
import { ConceptScheme } from "../models/ConceptScheme.js";
import { ConsumptionFlow } from "../models/ConsumptionFlow.js";
import { Coordination } from "../models/Coordination.js";
import { CustomerCategory } from "../models/CustomerCategory.js";
import { DitributedRepresentation } from "../models/DitributedRepresentation.js";
import { DefinedProduct } from "../models/DefinedProduct.js";
import { DeliveryOption } from "../models/DeliveryOption.js";
import { DeliveryStep } from "../models/DeliveryStep.js";
import { Enterprise } from "../models/Enterprise.js";
import { Feature } from "../models/Feature.js";
import { FunctionalProduct } from "../models/FunctionalProduct.js";
import { Geometry } from "../models/Geometry.js";
import { HowSubject } from "../models/HowSubject.js";
import { Individual } from "../models/Individual.js";
import { Ingredient } from "../models/Ingredient.js";
import { LabellingCharacteristic } from "../models/LabellingCharacteristic.js";
import { Length } from "../models/Length.js";
import { LocalizedProduct } from "../models/LocalizedProduct.js";
import { NutrientCharacteristic } from "../models/NutrientCharacteristic.js";
import { Offer } from "../models/Offer.js";
import { OpeningHoursSpecification } from "../models/OpeningHoursSpecification.js";
import { Order } from "../models/Order.js";
import { OrderLine } from "../models/OrderLine.js";
import { Organization } from "../models/Organization.js";
import { PaymentMethod } from "../models/PaymentMethod.js";
import { Person } from "../models/Person.js";
import { PhoneNumber } from "../models/PhoneNumber.js";
import { PhysicalCharacteristic } from "../models/PhysicalCharacteristic.js";
import { PhysicalPlace } from "../models/PhysicalPlace.js";
import { PhysicalProduct } from "../models/PhysicalProduct.js";
import { PickUpStep } from "../models/PickUpStep.js";
import { PickupOption } from "../models/PickupOption.js";
import { Place } from "../models/Place.js";
import { Platform } from "../models/Platform.js";
import { Point } from "../models/Point.js";
import { Polygon } from "../models/Polygon.js";
import { Price } from "../models/Price.js";
import { ProductBatch } from "../models/ProductBatch.js";
import { ProductOption } from "../models/ProductOption.js";
import { ProductOptionValue } from "../models/ProductOptionValue.js";
import { ProductionFlow } from "../models/ProductionFlow.js";
import { Properties } from "../models/Properties.js";
import { QuantitativeValue } from "../models/QuantitativeValue.js";
import { RealStock } from "../models/RealStock.js";
import { RepresentationPivot } from "../models/RepresentationPivot.js";
import { RepresentedThing } from "../models/RepresentedThing.js";
import { Route } from "../models/Route.js";
import { SaleSession } from "../models/SaleSession.js";
import { Shipment } from "../models/Shipment.js";
import { ShippingOption } from "../models/ShippingOption.js";
import { SocialMedia } from "../models/SocialMedia.js";
import { Step } from "../models/Step.js";
import { Stock } from "../models/Stock.js";
import { SuppliedProduct } from "../models/SuppliedProduct.js";
import { TechnicalProduct } from "../models/TechnicalProduct.js";
import { Temperature } from "../models/Temperature.js";
import { TemplateSaleSession } from "../models/TemplateSaleSession.js";
import { TheoriticalStock } from "../models/TheoriticalStock.js";
import { Transaction } from "../models/Transaction.js";
import { Transformation } from "../models/Transformation.js";
import { ValueRECUR } from "../models/ValueRECUR.js";
import { Variant } from "../models/Variant.js";
import { VariantCaracteristic } from "../models/VariantCaracteristic.js";
import { Vehicle } from "../models/Vehicle.js";
import { Vevent } from "../models/Vevent.js";
import { VirtualPlace } from "../models/VirtualPlace.js";
import { Volume } from "../models/Volume.js";
import { Weight } from "../models/Weight.js";
import { WhatSubject } from "../models/WhatSubject.js";
import { WhereSubject } from "../models/WhereSubject.js";
import { WhoSubject } from "../models/WhoSubject.js";
import type { AddressParams } from "../models/Address.js";
import type { AgentParams } from "../models/Agent.js";
import type { AllergenCharacteristicParams } from "../models/AllergenCharacteristic.js";
import type { AsPlannedConsumptionFlowParams } from "../models/AsPlannedConsumptionFlow.js";
import type { AsPlannedLocalConsumptionFlowParams } from "../models/AsPlannedLocalConsumptionFlow.js";
import type { AsPlannedLocalProductionFlowParams } from "../models/AsPlannedLocalProductionFlow.js";
import type { AsPlannedLocalTransformationParams } from "../models/AsPlannedLocalTransformation.js";
import type { AsPlannedProductionFlowParams } from "../models/AsPlannedProductionFlow.js";
import type { AsPlannedTransformationParams } from "../models/AsPlannedTransformation.js";
import type { AsRealizedConsumptionFlowParams } from "../models/AsRealizedConsumptionFlow.js";
import type { AsRealizedProductionFlowParams } from "../models/AsRealizedProductionFlow.js";
import type { AsRealizedTransformationParams } from "../models/AsRealizedTransformation.js";
import type { BrandParams } from "../models/Brand.js";
import type { CatalogParams } from "../models/Catalog.js";
import type { CatalogItemParams } from "../models/CatalogItem.js";
import type { CertficationParams } from "../models/Certfication.js";
import type { CollectionParams } from "../models/Collection.js";
import type { ConceptParams } from "../models/Concept.js";
import type { ConceptSchemeParams } from "../models/ConceptScheme.js";
import type { ConsumptionFlowParams } from "../models/ConsumptionFlow.js";
import type { CoordinationParams } from "../models/Coordination.js";
import type { CustomerCategoryParams } from "../models/CustomerCategory.js";
import type { DitributedRepresentationParams } from "../models/DitributedRepresentation.js";
import type { DefinedProductParams } from "../models/DefinedProduct.js";
import type { DeliveryOptionParams } from "../models/DeliveryOption.js";
import type { DeliveryStepParams } from "../models/DeliveryStep.js";
import type { EnterpriseParams } from "../models/Enterprise.js";
import type { FeatureParams } from "../models/Feature.js";
import type { FunctionalProductParams } from "../models/FunctionalProduct.js";
import type { GeometryParams } from "../models/Geometry.js";
import type { HowSubjectParams } from "../models/HowSubject.js";
import type { IndividualParams } from "../models/Individual.js";
import type { IngredientParams } from "../models/Ingredient.js";
import type { LabellingCharacteristicParams } from "../models/LabellingCharacteristic.js";
import type { LengthParams } from "../models/Length.js";
import type { LocalizedProductParams } from "../models/LocalizedProduct.js";
import type { NutrientCharacteristicParams } from "../models/NutrientCharacteristic.js";
import type { OfferParams } from "../models/Offer.js";
import type { OpeningHoursSpecificationParams } from "../models/OpeningHoursSpecification.js";
import type { OrderParams } from "../models/Order.js";
import type { OrderLineParams } from "../models/OrderLine.js";
import type { OrganizationParams } from "../models/Organization.js";
import type { PaymentMethodParams } from "../models/PaymentMethod.js";
import type { PersonParams } from "../models/Person.js";
import type { PhoneNumberParams } from "../models/PhoneNumber.js";
import type { PhysicalCharacteristicParams } from "../models/PhysicalCharacteristic.js";
import type { PhysicalPlaceParams } from "../models/PhysicalPlace.js";
import type { PhysicalProductParams } from "../models/PhysicalProduct.js";
import type { PickUpStepParams } from "../models/PickUpStep.js";
import type { PickupOptionParams } from "../models/PickupOption.js";
import type { PlaceParams } from "../models/Place.js";
import type { PlatformParams } from "../models/Platform.js";
import type { PointParams } from "../models/Point.js";
import type { PolygonParams } from "../models/Polygon.js";
import type { PriceParams } from "../models/Price.js";
import type { ProductBatchParams } from "../models/ProductBatch.js";
import type { ProductOptionParams } from "../models/ProductOption.js";
import type { ProductOptionValueParams } from "../models/ProductOptionValue.js";
import type { ProductionFlowParams } from "../models/ProductionFlow.js";
import type { PropertiesParams } from "../models/Properties.js";
import type { QuantitativeValueParams } from "../models/QuantitativeValue.js";
import type { RealStockParams } from "../models/RealStock.js";
import type { RepresentationPivotParams } from "../models/RepresentationPivot.js";
import type { RepresentedThingParams } from "../models/RepresentedThing.js";
import type { RouteParams } from "../models/Route.js";
import type { SaleSessionParams } from "../models/SaleSession.js";
import type { ShipmentParams } from "../models/Shipment.js";
import type { ShippingOptionParams } from "../models/ShippingOption.js";
import type { SocialMediaParams } from "../models/SocialMedia.js";
import type { StepParams } from "../models/Step.js";
import type { StockParams } from "../models/Stock.js";
import type { SuppliedProductParams } from "../models/SuppliedProduct.js";
import type { TechnicalProductParams } from "../models/TechnicalProduct.js";
import type { TemperatureParams } from "../models/Temperature.js";
import type { TemplateSaleSessionParams } from "../models/TemplateSaleSession.js";
import type { TheoriticalStockParams } from "../models/TheoriticalStock.js";
import type { TransactionParams } from "../models/Transaction.js";
import type { TransformationParams } from "../models/Transformation.js";
import type { ValueRECURParams } from "../models/ValueRECUR.js";
import type { VariantParams } from "../models/Variant.js";
import type { VariantCaracteristicParams } from "../models/VariantCaracteristic.js";
import type { VehicleParams } from "../models/Vehicle.js";
import type { VeventParams } from "../models/Vevent.js";
import type { VirtualPlaceParams } from "../models/VirtualPlace.js";
import type { VolumeParams } from "../models/Volume.js";
import type { WeightParams } from "../models/Weight.js";
import type { WhatSubjectParams } from "../models/WhatSubject.js";
import type { WhereSubjectParams } from "../models/WhereSubject.js";
import type { WhoSubjectParams } from "../models/WhoSubject.js";

export class Connector {
  static readonly ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
  static readonly TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";

  static readonly PREDICATE_MAP: Record<string, string> = {
    "dfc-b:DFC_BusinessOntology_ObjectProperty": "dFCBusinessOntologyObjectProperty",
    "dfc-b:DFC_Interface_Property": "dFCInterfaceProperty",
    "dfc-b:DFC_TechnicalOntology_ObjectProperty": "dFCTechnicalOntologyObjectProperty",
    "dfc-b:Image": "image",
    "dfc-b:URL": "url",
    "dfc-b:VATnumber": "vatNumber",
    "dfc-b:VATrate": "vatRate",
    "dfc-b:VATstatus": "vatStatus",
    "dfc-b:accessibilityInfo": "accessibilityInfo",
    "dfc-b:addressOf": "addressOf",
    "dfc-b:affiliatedTo": "affiliatedTo",
    "dfc-b:affiliates": "affiliates",
    "dfc-b:allergenCharacteristicOf": "allergenCharacteristicOf",
    "dfc-b:arrivalDate": "arrivalDate",
    "dfc-b:availabilityDate": "availabilityDate",
    "dfc-b:availabilityTime": "availabilityTime",
    "dfc-b:basedAt": "basedAt",
    "dfc-b:batchNumber": "batchNumber",
    "dfc-b:belongsTo": "belongsTo",
    "dfc-b:bestBeforeDate": "bestBeforeDate",
    "dfc-b:brand": "brand",
    "dfc-b:brandOf": "brandOf",
    "dfc-b:certiferReference": "certiferReference",
    "dfc-b:certificateOf": "certificateOf",
    "dfc-b:certificationScore": "certificationScore",
    "dfc-b:certifies": "certifies",
    "dfc-b:characteristicOf": "characteristicOf",
    "dfc-b:city": "city",
    "dfc-b:claim": "claim",
    "dfc-b:claimOf": "claimOf",
    "dfc-b:closes": "closes",
    "dfc-b:composedOf": "composedOf",
    "dfc-b:composes": "composes",
    "dfc-b:concernedBy": "concernedBy",
    "dfc-b:concerns": "concerns",
    "dfc-b:constituedBy": "constituedBy",
    "dfc-b:constitutes": "constitutes",
    "dfc-b:consumedBy": "consumedBy",
    "dfc-b:consumes": "consumes",
    "dfc-b:containerInformationOf": "containerInformationOf",
    "dfc-b:coordinatedBy": "coordinatedBy",
    "dfc-b:cost": "cost",
    "dfc-b:country": "country",
    "dfc-b:countryCode": "countryCode",
    "dfc-b:date": "date",
    "dfc-b:definedBy": "definedBy",
    "dfc-b:defines": "defines",
    "dfc-b:deliveredAt": "deliveredAt",
    "dfc-b:delivery": "delivery",
    "dfc-b:deliveryCondition": "deliveryCondition",
    "dfc-b:deliveryConstraint": "deliveryConstraint",
    "dfc-b:description": "description",
    "dfc-b:discount": "discount",
    "dfc-b:duration": "duration",
    "dfc-b:email": "email",
    "dfc-b:endDate": "endDate",
    "dfc-b:endsAt": "endsAt",
    "dfc-b:enterpriseID": "enterpriseId",
    "dfc-b:expiryDate": "expiryDate",
    "dfc-b:extraAvailabilityTime": "extraAvailabilityTime",
    "dfc-b:extraDeliveryCondition": "extraDeliveryCondition",
    "dfc-b:facetOf": "facetOf",
    "dfc-b:familyName": "familyName",
    "dfc-b:fee": "fee",
    "dfc-b:firstName": "firstName",
    "dfc-b:from": "from",
    "dfc-b:frozen": "frozen",
    "dfc-b:fulfills": "fulfills",
    "dfc-b:geographicalOriginOf": "geographicalOriginOf",
    "dfc-b:hasAddress": "hasAddress",
    "dfc-b:hasAllergenCharacteristic": "hasAllergenCharacteristic",
    "dfc-b:hasAllergenDimension": "hasAllergenDimension",
    "dfc-b:hasBrand": "hasBrand",
    "dfc-b:hasCertification": "hasCertification",
    "dfc-b:hasCharacteristic": "hasCharacteristic",
    "dfc-b:hasClaim": "hasClaim",
    "dfc-b:hasContainerInformation": "hasContainerInformation",
    "dfc-b:hasCountry": "hasCountry",
    "dfc-b:hasDimension": "hasDimension",
    "dfc-b:hasFacet": "hasFacet",
    "dfc-b:hasFulfilmentStatus": "hasFulfilmentStatus",
    "dfc-b:hasGeoJsonFeature": "hasGeoJsonFeature",
    "dfc-b:hasGeographicalOrigin": "hasGeographicalOrigin",
    "dfc-b:hasIngredient": "hasIngredient",
    "dfc-b:hasInput": "hasInput",
    "dfc-b:hasLabellingCharacteristic": "hasLabellingCharacteristic",
    "dfc-b:hasLabellingDimension": "hasLabellingDimension",
    "dfc-b:hasMainContact": "hasMainContact",
    "dfc-b:hasMember": "hasMember",
    "dfc-b:hasNatureOrigin": "hasNatureOrigin",
    "dfc-b:hasNutrientCharacteristic": "hasNutrientCharacteristic",
    "dfc-b:hasNutrientDimension": "hasNutrientDimension",
    "dfc-b:hasObject": "hasObject",
    "dfc-b:hasOffer": "hasOffer",
    "dfc-b:hasOption": "hasOption",
    "dfc-b:hasOrderStatus": "hasOrderStatus",
    "dfc-b:hasOutput": "hasOutput",
    "dfc-b:hasPart": "hasPart",
    "dfc-b:hasPartOrigin": "hasPartOrigin",
    "dfc-b:hasPaymentMethod": "hasPaymentMethod",
    "dfc-b:hasPaymentStatus": "hasPaymentStatus",
    "dfc-b:hasPercentageOfAlcoholByVolume": "hasPercentageOfAlcoholByVolume",
    "dfc-b:hasPhoneNumber": "hasPhoneNumber",
    "dfc-b:hasPhysicalCharacteristic": "hasPhysicalCharacteristic",
    "dfc-b:hasPhysicalDimension": "hasPhysicalDimension",
    "dfc-b:hasPrice": "hasPrice",
    "dfc-b:hasProductOption": "hasProductOption",
    "dfc-b:hasProductOptionValue": "hasProductOptionValue",
    "dfc-b:hasQuantity": "hasQuantity",
    "dfc-b:hasReference": "hasReference",
    "dfc-b:hasReferenceProductOption": "hasReferenceProductOption",
    "dfc-b:hasReferenceProductOptionValue": "hasReferenceProductOptionValue",
    "dfc-b:hasSocialMedia": "hasSocialMedia",
    "dfc-b:hasStatus": "hasStatus",
    "dfc-b:hasStep": "hasStep",
    "dfc-b:hasTemperature": "hasTemperature",
    "dfc-b:hasTemplateSaleSession": "hasTemplateSaleSession",
    "dfc-b:hasTransformationType": "hasTransformationType",
    "dfc-b:hasType": "hasType",
    "dfc-b:hasUnit": "hasUnit",
    "dfc-b:hasVariant": "hasVariant",
    "dfc-b:hasVariantCaracteristic": "hasVariantCaracteristic",
    "dfc-b:holds": "holds",
    "dfc-b:hostedAt": "hostedAt",
    "dfc-b:hosts": "hosts",
    "dfc-b:identifiedBy": "identifiedBy",
    "dfc-b:identifies": "identifies",
    "dfc-b:industrializedBy": "industrializedBy",
    "dfc-b:industrializes": "industrializes",
    "dfc-b:inputOf": "inputOf",
    "dfc-b:invoiceNumber": "invoiceNumber",
    "dfc-b:isAvailableDuring": "isAvailableDuring",
    "dfc-b:isCertifiedBy": "isCertifiedBy",
    "dfc-b:isFulfilledBy": "isFulfilledBy",
    "dfc-b:isIngredientOf": "isIngredientOf",
    "dfc-b:isMemberOf": "isMemberOf",
    "dfc-b:isOpenDuring": "isOpenDuring",
    "dfc-b:isPriceOf": "isPriceOf",
    "dfc-b:isShippedIn": "isShippedIn",
    "dfc-b:isStepOf": "isStepOf",
    "dfc-b:isTemperatureOf": "isTemperatureOf",
    "dfc-b:isTemplateSaleSessionOf": "isTemplateSaleSessionOf",
    "dfc-b:isVariantOf": "isVariantOf",
    "dfc-b:labellingCharacteristicOf": "labellingCharacteristicOf",
    "dfc-b:latitude": "latitude",
    "dfc-b:lifetime": "lifetime",
    "dfc-b:listedIn": "listedIn",
    "dfc-b:lists": "lists",
    "dfc-b:localizedBy": "localizedBy",
    "dfc-b:localizes": "localizes",
    "dfc-b:logo": "logo",
    "dfc-b:longitude": "longitude",
    "dfc-b:mainContactOf": "mainContactOf",
    "dfc-b:maintainedBy": "maintainedBy",
    "dfc-b:maintains": "maintains",
    "dfc-b:managedBy": "managedBy",
    "dfc-b:manages": "manages",
    "dfc-b:marginPercent": "marginPercent",
    "dfc-b:maxValue": "maxValue",
    "dfc-b:minValue": "minValue",
    "dfc-b:name": "name",
    "dfc-b:natureOriginOf": "natureOriginOf",
    "dfc-b:nutrientCharacteristicOf": "nutrientCharacteristicOf",
    "dfc-b:objectOf": "objectOf",
    "dfc-b:offeredThrough": "offeredThrough",
    "dfc-b:offers": "offers",
    "dfc-b:offersTo": "offersTo",
    "dfc-b:operatorId": "operatorId",
    "dfc-b:optionOf": "optionOf",
    "dfc-b:orderNumber": "orderNumber",
    "dfc-b:orderedBy": "orderedBy",
    "dfc-b:orders": "orders",
    "dfc-b:outputOf": "outputOf",
    "dfc-b:ownedBy": "ownedBy",
    "dfc-b:owns": "owns",
    "dfc-b:paidWith": "paidWith",
    "dfc-b:partOf": "partOf",
    "dfc-b:partOriginOf": "partOriginOf",
    "dfc-b:paymentMethodProvider": "paymentMethodProvider",
    "dfc-b:paymentMethodType": "paymentMethodType",
    "dfc-b:phoneNumber": "phoneNumber",
    "dfc-b:phoneNumberOf": "phoneNumberOf",
    "dfc-b:physicalCharacteristicOf": "physicalCharacteristicOf",
    "dfc-b:physicalCharacteristics": "physicalCharacteristics",
    "dfc-b:pickUp": "pickUp",
    "dfc-b:pickedUpAt": "pickedUpAt",
    "dfc-b:postcode": "postcode",
    "dfc-b:processOf": "processOf",
    "dfc-b:producedBy": "producedBy",
    "dfc-b:produces": "produces",
    "dfc-b:productionDate": "productionDate",
    "dfc-b:proposedBy": "proposedBy",
    "dfc-b:proposes": "proposes",
    "dfc-b:quantity": "quantity",
    "dfc-b:referenceOf": "referenceOf",
    "dfc-b:referencedBy": "referencedBy",
    "dfc-b:references": "references",
    "dfc-b:refersTo": "refersTo",
    "dfc-b:refrigerated": "refrigerated",
    "dfc-b:region": "region",
    "dfc-b:representedBy": "representedBy",
    "dfc-b:represents": "represents",
    "dfc-b:requestedBy": "requestedBy",
    "dfc-b:requests": "requests",
    "dfc-b:satisfiedBy": "satisfiedBy",
    "dfc-b:satisfies": "satisfies",
    "dfc-b:selectedBy": "selectedBy",
    "dfc-b:selects": "selects",
    "dfc-b:sells": "sells",
    "dfc-b:ships": "ships",
    "dfc-b:sku": "sku",
    "dfc-b:socialMediaOf": "socialMediaOf",
    "dfc-b:soldBy": "soldBy",
    "dfc-b:specificCondition": "specificCondition",
    "dfc-b:startDate": "startDate",
    "dfc-b:startsAt": "startsAt",
    "dfc-b:stockLimitation": "stockLimitation",
    "dfc-b:storedIn": "storedIn",
    "dfc-b:stores": "stores",
    "dfc-b:street": "street",
    "dfc-b:suppliedBy": "suppliedBy",
    "dfc-b:supplies": "supplies",
    "dfc-b:suppliesTo": "suppliesTo",
    "dfc-b:to": "to",
    "dfc-b:totalTheoriticalStock": "totalTheoriticalStock",
    "dfc-b:tracedBy": "tracedBy",
    "dfc-b:traces": "traces",
    "dfc-b:transformedBy": "transformedBy",
    "dfc-b:transforms": "transforms",
    "dfc-b:transportedBy": "transportedBy",
    "dfc-b:transports": "transports",
    "dfc-b:typeOf": "typeOf",
    "dfc-b:useVehicle": "useVehicle",
    "dfc-b:usedInRoute": "usedInRoute",
    "dfc-b:uses": "uses",
    "dfc-b:value": "value",
    "dfc-b:websitePage": "websitePage",
    "dfc-t:hasPivot": "hasPivot",
    "dfc-t:hostedBy": "hostedBy",
    "dfc-t:represent": "represent",
    "http://www.w3.org/2002/12/cal/icaltzd#byday": "byday",
    "http://www.w3.org/2002/12/cal/icaltzd#bymonth": "bymonth",
    "http://www.w3.org/2002/12/cal/icaltzd#dtend": "dtend",
    "http://www.w3.org/2002/12/cal/icaltzd#dtstart": "dtstart",
    "http://www.w3.org/2002/12/cal/icaltzd#freq": "freq",
    "http://www.w3.org/2002/12/cal/icaltzd#interval": "interval",
    "http://www.w3.org/2002/12/cal/icaltzd#rrule": "rrule",
    "https://purl.org/geojson/vocab#coordinates": "coordinates",
    "https://purl.org/geojson/vocab#geometry": "geometry",
    "https://purl.org/geojson/vocab#properties": "properties",
    "https://schema.org/dayOfWeek": "dayOfWeek",
    "https://schema.org/opens": "opens",
    "skos:broader": "broader",
    "skos:inScheme": "inScheme",
    "skos:narrower": "narrower",
  };

  static readonly TYPE_ALIASES: Record<string, string> = {
    "dfc-b:Enterprise": "dfc-b:Organization",
  };

  private static defaultContextUrl: string = "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json";

  static getDefaultContextUrl(): string {
    return Connector.defaultContextUrl;
  }

  static setDefaultContextUrl(url: string): void {
    Connector.defaultContextUrl = url;
  }

  readonly ontologyVersion: string;
  readonly taxonomyVersion: string;
  readonly vocabLoader: VocabularyLoader;
  private contextCache: Record<string, unknown> | null = null;
  private facets: Record<string, unknown> = {};
  private measures: Record<string, unknown> = {};
  private productTypes: Record<string, unknown> = {};
  private otherVocabularies = new Map<string, Record<string, unknown>>();

  // Bundled v2.0.0 taxonomies are loaded unconditionally by design — the
  // connector ships only that version offline. Callers requesting a different
  // taxonomyVersion must override via load* methods.
  constructor(params: { ontologyVersion?: string; taxonomyVersion?: string } = {}) {
    this.ontologyVersion = params.ontologyVersion ?? "2.0.0";
    this.taxonomyVersion = params.taxonomyVersion ?? "2.0.0";
    this.vocabLoader = new VocabularyLoader(this.taxonomyVersion, this.ontologyVersion);
    this.loadBundledTaxonomies();
  }

  loadBundledTaxonomies(): this {
    this.vocabLoader.loadBundled();
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("Facet", this.facets);
    this.otherVocabularies.set("Measure", this.measures);
    this.otherVocabularies.set("ProductType", this.productTypes);
    this.otherVocabularies.set("Scope", this.buildNestedHash(this.vocabLoader.vocabulary("Scope")));
    this.otherVocabularies.set("VocabularyTerm", this.buildNestedHash(this.vocabLoader.vocabulary("VocabularyTerm")));
    return this;
  }

  get contextUrl(): string {
    return `${Connector.ONTOLOGY_BASE_URL}/v${this.ontologyVersion}/context/context_${this.ontologyVersion}.json`;
  }

  async getContext(): Promise<Record<string, unknown>> {
    if (!this.contextCache) {
      const bundled = this.loadBundledContext();
      if (bundled) {
        this.contextCache = bundled;
      } else {
        this.contextCache = await this.fetchContext();
      }
    }
    return this.contextCache;
  }

  // Returns the JSON-LD context shipped with the connector for the current
  // ontology version, or null so the caller falls back to the network.
  loadBundledContext(): Record<string, unknown> | null {
    if (this.ontologyVersion === "2.0.0") {
      return bundledContextV200 as unknown as Record<string, unknown>;
    }
    return null;
  }

  loadFacets(jsonData: Record<string, unknown>): this {
    this.vocabLoader.load("Facet", jsonData);
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.otherVocabularies.set("Facet", this.facets);
    return this;
  }

  loadMeasures(jsonData: Record<string, unknown>): this {
    this.vocabLoader.load("Measure", jsonData);
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.otherVocabularies.set("Measure", this.measures);
    return this;
  }

  loadProductTypes(jsonData: Record<string, unknown>): this {
    this.vocabLoader.load("ProductType", jsonData);
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("ProductType", this.productTypes);
    return this;
  }

  loadVocabulary(name: string, jsonData: Record<string, unknown>): this {
    this.vocabLoader.load(name, jsonData);
    this.otherVocabularies.set(name, this.buildNestedHash(this.vocabLoader.vocabulary(name)));
    return this;
  }

  async loadFacetsFromUrl(): Promise<this> {
    await this.vocabLoader.loadFromUrl("facets");
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.otherVocabularies.set("Facet", this.facets);
    return this;
  }

  async loadMeasuresFromUrl(): Promise<this> {
    await this.vocabLoader.loadFromUrl("measures");
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.otherVocabularies.set("Measure", this.measures);
    return this;
  }

  async loadProductTypesFromUrl(): Promise<this> {
    await this.vocabLoader.loadFromUrl("productTypes");
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    this.otherVocabularies.set("ProductType", this.productTypes);
    return this;
  }

  async export(...objects: SemanticObject[]): Promise<string> {
    let context: Record<string, unknown> | undefined;
    try {
      context = await this.getContext();
    } catch {
      // Context fetch failed — export without compaction, but keep the
      // context URL so CURIE predicates stay expandable.
      const fallback = new JsonLdSerializer(undefined).serialize(...objects) as Record<string, unknown>;
      fallback["@context"] = this.contextUrl;
      return JSON.stringify(fallback, null, 2);
    }
    const expanded: Record<string, unknown> = new JsonLdSerializer(context).serialize(...objects) as Record<string, unknown>;
    const compacted = await (jsonld.compact(expanded, context as any) as unknown as Promise<Record<string, unknown>>);
    const output = compacted as Record<string, unknown>;
    output["@context"] = this.contextUrl;
    return JSON.stringify(output, null, 2);
  }

  import(jsonLdData: string | Record<string, unknown>): SemanticObject[] {
    const data = typeof jsonLdData === "string" ? JSON.parse(jsonLdData) : jsonLdData;

    const entries: Array<Record<string, unknown>> = Array.isArray(data)
      ? data
      : (data["@graph"] as Array<Record<string, unknown>>) || [data];

    const objectsById = new Map<string, SemanticObject>();
    const instances: SemanticObject[] = [];

    for (const entry of entries) {
      const semanticId = entry["@id"] as string | undefined;
      const rawType = entry["@type"];
      const semanticType = Array.isArray(rawType)
        ? (rawType.find((t: unknown) => typeof t === "string" && !t.startsWith("@")) as string | undefined)
        : (rawType as string | undefined);
      if (!semanticId || !semanticType) continue;

      const Klass = SemanticObject.typeRegistry.get(
        Connector.TYPE_ALIASES[semanticType] ?? semanticType
      ) as
        new (semanticId: string, params?: Record<string, unknown>) => SemanticObject;
      if (!Klass) continue;

      const entryParams: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(entry)) {
        if (key.startsWith("@")) continue;
        const propName = this.predicateToPropName(key);
        entryParams[propName] = value;
      }

      const obj = new Klass(semanticId, entryParams) as SemanticObject;
      objectsById.set(semanticId, obj);
      instances.push(obj);
    }

    for (const entry of entries) {
      const semanticId = entry["@id"] as string | undefined;
      if (!semanticId) continue;
      const obj = objectsById.get(semanticId);
      if (!obj) continue;

      for (const [key, value] of Object.entries(entry)) {
        if (key.startsWith("@")) continue;
        const propName = this.predicateToPropName(key);
        if (!(propName in obj)) continue;

        if (Array.isArray(value)) {
          (obj as unknown as Record<string, unknown>)[propName] = value.map((v: unknown) =>
            this.resolveReference(v, objectsById)
          );
        } else if (typeof value === "object" && value !== null && "@id" in value) {
          (obj as unknown as Record<string, unknown>)[propName] = this.resolveReference(value, objectsById);
        } else if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {
          (obj as unknown as Record<string, unknown>)[propName] = objectsById.get(value) || value;
        }
      }
    }

    return instances;
  }

  private resolveReference(value: unknown, objectsById: Map<string, SemanticObject>): unknown {
    if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {
      return objectsById.get(value) || value;
    }
    if (typeof value === "object" && value !== null && "@id" in value) {
      return objectsById.get((value as Record<string, unknown>)["@id"] as string) || value;
    }
    return value;
  }


  get facet(): Record<string, unknown> {
    return this.otherVocabularies.get("Facet") || this.vocabLoader.vocabulary("Facet");
  }

  get measure(): Record<string, unknown> {
    return this.otherVocabularies.get("Measure") || this.vocabLoader.vocabulary("Measure");
  }

  get product_type(): Record<string, unknown> {
    return this.otherVocabularies.get("ProductType") || this.vocabLoader.vocabulary("ProductType");
  }

  get scope(): Record<string, unknown> {
    return this.otherVocabularies.get("Scope") || this.vocabLoader.vocabulary("Scope");
  }

  get vocabulary_term(): Record<string, unknown> {
    return this.otherVocabularies.get("VocabularyTerm") || this.vocabLoader.vocabulary("VocabularyTerm");
  }


  createAddress(
    semanticIdOrArgs: string | ({ semanticId: string } & AddressParams),
    params?: AddressParams,
  ): Address {
    if (typeof semanticIdOrArgs === "string") {
      return new Address(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Address(semanticId, rest as AddressParams);
  }

  createAgent(
    semanticIdOrArgs: string | ({ semanticId: string } & AgentParams),
    params?: AgentParams,
  ): Agent {
    if (typeof semanticIdOrArgs === "string") {
      return new Agent(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Agent(semanticId, rest as AgentParams);
  }

  createAllergenCharacteristic(
    semanticIdOrArgs: string | ({ semanticId: string } & AllergenCharacteristicParams),
    params?: AllergenCharacteristicParams,
  ): AllergenCharacteristic {
    if (typeof semanticIdOrArgs === "string") {
      return new AllergenCharacteristic(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AllergenCharacteristic(semanticId, rest as AllergenCharacteristicParams);
  }

  createAsPlannedConsumptionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedConsumptionFlowParams),
    params?: AsPlannedConsumptionFlowParams,
  ): AsPlannedConsumptionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedConsumptionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedConsumptionFlow(semanticId, rest as AsPlannedConsumptionFlowParams);
  }

  createAsPlannedLocalConsumptionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedLocalConsumptionFlowParams),
    params?: AsPlannedLocalConsumptionFlowParams,
  ): AsPlannedLocalConsumptionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedLocalConsumptionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedLocalConsumptionFlow(semanticId, rest as AsPlannedLocalConsumptionFlowParams);
  }

  createAsPlannedLocalProductionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedLocalProductionFlowParams),
    params?: AsPlannedLocalProductionFlowParams,
  ): AsPlannedLocalProductionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedLocalProductionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedLocalProductionFlow(semanticId, rest as AsPlannedLocalProductionFlowParams);
  }

  createAsPlannedLocalTransformation(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedLocalTransformationParams),
    params?: AsPlannedLocalTransformationParams,
  ): AsPlannedLocalTransformation {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedLocalTransformation(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedLocalTransformation(semanticId, rest as AsPlannedLocalTransformationParams);
  }

  createAsPlannedProductionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedProductionFlowParams),
    params?: AsPlannedProductionFlowParams,
  ): AsPlannedProductionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedProductionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedProductionFlow(semanticId, rest as AsPlannedProductionFlowParams);
  }

  createAsPlannedTransformation(
    semanticIdOrArgs: string | ({ semanticId: string } & AsPlannedTransformationParams),
    params?: AsPlannedTransformationParams,
  ): AsPlannedTransformation {
    if (typeof semanticIdOrArgs === "string") {
      return new AsPlannedTransformation(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsPlannedTransformation(semanticId, rest as AsPlannedTransformationParams);
  }

  createAsRealizedConsumptionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsRealizedConsumptionFlowParams),
    params?: AsRealizedConsumptionFlowParams,
  ): AsRealizedConsumptionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsRealizedConsumptionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsRealizedConsumptionFlow(semanticId, rest as AsRealizedConsumptionFlowParams);
  }

  createAsRealizedProductionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & AsRealizedProductionFlowParams),
    params?: AsRealizedProductionFlowParams,
  ): AsRealizedProductionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new AsRealizedProductionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsRealizedProductionFlow(semanticId, rest as AsRealizedProductionFlowParams);
  }

  createAsRealizedTransformation(
    semanticIdOrArgs: string | ({ semanticId: string } & AsRealizedTransformationParams),
    params?: AsRealizedTransformationParams,
  ): AsRealizedTransformation {
    if (typeof semanticIdOrArgs === "string") {
      return new AsRealizedTransformation(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new AsRealizedTransformation(semanticId, rest as AsRealizedTransformationParams);
  }

  createBrand(
    semanticIdOrArgs: string | ({ semanticId: string } & BrandParams),
    params?: BrandParams,
  ): Brand {
    if (typeof semanticIdOrArgs === "string") {
      return new Brand(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Brand(semanticId, rest as BrandParams);
  }

  createCatalog(
    semanticIdOrArgs: string | ({ semanticId: string } & CatalogParams),
    params?: CatalogParams,
  ): Catalog {
    if (typeof semanticIdOrArgs === "string") {
      return new Catalog(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Catalog(semanticId, rest as CatalogParams);
  }

  createCatalogItem(
    semanticIdOrArgs: string | ({ semanticId: string } & CatalogItemParams),
    params?: CatalogItemParams,
  ): CatalogItem {
    if (typeof semanticIdOrArgs === "string") {
      return new CatalogItem(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new CatalogItem(semanticId, rest as CatalogItemParams);
  }

  createCertfication(
    semanticIdOrArgs: string | ({ semanticId: string } & CertficationParams),
    params?: CertficationParams,
  ): Certfication {
    if (typeof semanticIdOrArgs === "string") {
      return new Certfication(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Certfication(semanticId, rest as CertficationParams);
  }

  createCollection(
    semanticIdOrArgs: string | ({ semanticId: string } & CollectionParams),
    params?: CollectionParams,
  ): Collection {
    if (typeof semanticIdOrArgs === "string") {
      return new Collection(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Collection(semanticId, rest as CollectionParams);
  }

  createConcept(
    semanticIdOrArgs: string | ({ semanticId: string } & ConceptParams),
    params?: ConceptParams,
  ): Concept {
    if (typeof semanticIdOrArgs === "string") {
      return new Concept(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Concept(semanticId, rest as ConceptParams);
  }

  createConceptScheme(
    semanticIdOrArgs: string | ({ semanticId: string } & ConceptSchemeParams),
    params?: ConceptSchemeParams,
  ): ConceptScheme {
    if (typeof semanticIdOrArgs === "string") {
      return new ConceptScheme(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ConceptScheme(semanticId, rest as ConceptSchemeParams);
  }

  createConsumptionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & ConsumptionFlowParams),
    params?: ConsumptionFlowParams,
  ): ConsumptionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new ConsumptionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ConsumptionFlow(semanticId, rest as ConsumptionFlowParams);
  }

  createCoordination(
    semanticIdOrArgs: string | ({ semanticId: string } & CoordinationParams),
    params?: CoordinationParams,
  ): Coordination {
    if (typeof semanticIdOrArgs === "string") {
      return new Coordination(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Coordination(semanticId, rest as CoordinationParams);
  }

  createCustomerCategory(
    semanticIdOrArgs: string | ({ semanticId: string } & CustomerCategoryParams),
    params?: CustomerCategoryParams,
  ): CustomerCategory {
    if (typeof semanticIdOrArgs === "string") {
      return new CustomerCategory(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new CustomerCategory(semanticId, rest as CustomerCategoryParams);
  }

  createDitributedRepresentation(
    semanticIdOrArgs: string | ({ semanticId: string } & DitributedRepresentationParams),
    params?: DitributedRepresentationParams,
  ): DitributedRepresentation {
    if (typeof semanticIdOrArgs === "string") {
      return new DitributedRepresentation(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new DitributedRepresentation(semanticId, rest as DitributedRepresentationParams);
  }

  createDefinedProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & DefinedProductParams),
    params?: DefinedProductParams,
  ): DefinedProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new DefinedProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new DefinedProduct(semanticId, rest as DefinedProductParams);
  }

  createDeliveryOption(
    semanticIdOrArgs: string | ({ semanticId: string } & DeliveryOptionParams),
    params?: DeliveryOptionParams,
  ): DeliveryOption {
    if (typeof semanticIdOrArgs === "string") {
      return new DeliveryOption(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new DeliveryOption(semanticId, rest as DeliveryOptionParams);
  }

  createDeliveryStep(
    semanticIdOrArgs: string | ({ semanticId: string } & DeliveryStepParams),
    params?: DeliveryStepParams,
  ): DeliveryStep {
    if (typeof semanticIdOrArgs === "string") {
      return new DeliveryStep(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new DeliveryStep(semanticId, rest as DeliveryStepParams);
  }

  createEnterprise(
    semanticIdOrArgs: string | ({ semanticId: string } & EnterpriseParams),
    params?: EnterpriseParams,
  ): Enterprise {
    if (typeof semanticIdOrArgs === "string") {
      return new Enterprise(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Enterprise(semanticId, rest as EnterpriseParams);
  }

  createFeature(
    semanticIdOrArgs: string | ({ semanticId: string } & FeatureParams),
    params?: FeatureParams,
  ): Feature {
    if (typeof semanticIdOrArgs === "string") {
      return new Feature(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Feature(semanticId, rest as FeatureParams);
  }

  createFunctionalProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & FunctionalProductParams),
    params?: FunctionalProductParams,
  ): FunctionalProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new FunctionalProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new FunctionalProduct(semanticId, rest as FunctionalProductParams);
  }

  createGeometry(
    semanticIdOrArgs: string | ({ semanticId: string } & GeometryParams),
    params?: GeometryParams,
  ): Geometry {
    if (typeof semanticIdOrArgs === "string") {
      return new Geometry(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Geometry(semanticId, rest as GeometryParams);
  }

  createHowSubject(
    semanticIdOrArgs: string | ({ semanticId: string } & HowSubjectParams),
    params?: HowSubjectParams,
  ): HowSubject {
    if (typeof semanticIdOrArgs === "string") {
      return new HowSubject(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new HowSubject(semanticId, rest as HowSubjectParams);
  }

  createIndividual(
    semanticIdOrArgs: string | ({ semanticId: string } & IndividualParams),
    params?: IndividualParams,
  ): Individual {
    if (typeof semanticIdOrArgs === "string") {
      return new Individual(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Individual(semanticId, rest as IndividualParams);
  }

  createIngredient(
    semanticIdOrArgs: string | ({ semanticId: string } & IngredientParams),
    params?: IngredientParams,
  ): Ingredient {
    if (typeof semanticIdOrArgs === "string") {
      return new Ingredient(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Ingredient(semanticId, rest as IngredientParams);
  }

  createLabellingCharacteristic(
    semanticIdOrArgs: string | ({ semanticId: string } & LabellingCharacteristicParams),
    params?: LabellingCharacteristicParams,
  ): LabellingCharacteristic {
    if (typeof semanticIdOrArgs === "string") {
      return new LabellingCharacteristic(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new LabellingCharacteristic(semanticId, rest as LabellingCharacteristicParams);
  }

  createLength(
    semanticIdOrArgs: string | ({ semanticId: string } & LengthParams),
    params?: LengthParams,
  ): Length {
    if (typeof semanticIdOrArgs === "string") {
      return new Length(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Length(semanticId, rest as LengthParams);
  }

  createLocalizedProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & LocalizedProductParams),
    params?: LocalizedProductParams,
  ): LocalizedProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new LocalizedProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new LocalizedProduct(semanticId, rest as LocalizedProductParams);
  }

  createNutrientCharacteristic(
    semanticIdOrArgs: string | ({ semanticId: string } & NutrientCharacteristicParams),
    params?: NutrientCharacteristicParams,
  ): NutrientCharacteristic {
    if (typeof semanticIdOrArgs === "string") {
      return new NutrientCharacteristic(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new NutrientCharacteristic(semanticId, rest as NutrientCharacteristicParams);
  }

  createOffer(
    semanticIdOrArgs: string | ({ semanticId: string } & OfferParams),
    params?: OfferParams,
  ): Offer {
    if (typeof semanticIdOrArgs === "string") {
      return new Offer(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Offer(semanticId, rest as OfferParams);
  }

  createOpeningHoursSpecification(
    semanticIdOrArgs: string | ({ semanticId: string } & OpeningHoursSpecificationParams),
    params?: OpeningHoursSpecificationParams,
  ): OpeningHoursSpecification {
    if (typeof semanticIdOrArgs === "string") {
      return new OpeningHoursSpecification(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new OpeningHoursSpecification(semanticId, rest as OpeningHoursSpecificationParams);
  }

  createOrder(
    semanticIdOrArgs: string | ({ semanticId: string } & OrderParams),
    params?: OrderParams,
  ): Order {
    if (typeof semanticIdOrArgs === "string") {
      return new Order(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Order(semanticId, rest as OrderParams);
  }

  createOrderLine(
    semanticIdOrArgs: string | ({ semanticId: string } & OrderLineParams),
    params?: OrderLineParams,
  ): OrderLine {
    if (typeof semanticIdOrArgs === "string") {
      return new OrderLine(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new OrderLine(semanticId, rest as OrderLineParams);
  }

  createOrganization(
    semanticIdOrArgs: string | ({ semanticId: string } & OrganizationParams),
    params?: OrganizationParams,
  ): Organization {
    if (typeof semanticIdOrArgs === "string") {
      return new Organization(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Organization(semanticId, rest as OrganizationParams);
  }

  createPaymentMethod(
    semanticIdOrArgs: string | ({ semanticId: string } & PaymentMethodParams),
    params?: PaymentMethodParams,
  ): PaymentMethod {
    if (typeof semanticIdOrArgs === "string") {
      return new PaymentMethod(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PaymentMethod(semanticId, rest as PaymentMethodParams);
  }

  createPerson(
    semanticIdOrArgs: string | ({ semanticId: string } & PersonParams),
    params?: PersonParams,
  ): Person {
    if (typeof semanticIdOrArgs === "string") {
      return new Person(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Person(semanticId, rest as PersonParams);
  }

  createPhoneNumber(
    semanticIdOrArgs: string | ({ semanticId: string } & PhoneNumberParams),
    params?: PhoneNumberParams,
  ): PhoneNumber {
    if (typeof semanticIdOrArgs === "string") {
      return new PhoneNumber(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PhoneNumber(semanticId, rest as PhoneNumberParams);
  }

  createPhysicalCharacteristic(
    semanticIdOrArgs: string | ({ semanticId: string } & PhysicalCharacteristicParams),
    params?: PhysicalCharacteristicParams,
  ): PhysicalCharacteristic {
    if (typeof semanticIdOrArgs === "string") {
      return new PhysicalCharacteristic(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PhysicalCharacteristic(semanticId, rest as PhysicalCharacteristicParams);
  }

  createPhysicalPlace(
    semanticIdOrArgs: string | ({ semanticId: string } & PhysicalPlaceParams),
    params?: PhysicalPlaceParams,
  ): PhysicalPlace {
    if (typeof semanticIdOrArgs === "string") {
      return new PhysicalPlace(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PhysicalPlace(semanticId, rest as PhysicalPlaceParams);
  }

  createPhysicalProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & PhysicalProductParams),
    params?: PhysicalProductParams,
  ): PhysicalProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new PhysicalProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PhysicalProduct(semanticId, rest as PhysicalProductParams);
  }

  createPickUpStep(
    semanticIdOrArgs: string | ({ semanticId: string } & PickUpStepParams),
    params?: PickUpStepParams,
  ): PickUpStep {
    if (typeof semanticIdOrArgs === "string") {
      return new PickUpStep(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PickUpStep(semanticId, rest as PickUpStepParams);
  }

  createPickupOption(
    semanticIdOrArgs: string | ({ semanticId: string } & PickupOptionParams),
    params?: PickupOptionParams,
  ): PickupOption {
    if (typeof semanticIdOrArgs === "string") {
      return new PickupOption(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new PickupOption(semanticId, rest as PickupOptionParams);
  }

  createPlace(
    semanticIdOrArgs: string | ({ semanticId: string } & PlaceParams),
    params?: PlaceParams,
  ): Place {
    if (typeof semanticIdOrArgs === "string") {
      return new Place(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Place(semanticId, rest as PlaceParams);
  }

  createPlatform(
    semanticIdOrArgs: string | ({ semanticId: string } & PlatformParams),
    params?: PlatformParams,
  ): Platform {
    if (typeof semanticIdOrArgs === "string") {
      return new Platform(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Platform(semanticId, rest as PlatformParams);
  }

  createPoint(
    semanticIdOrArgs: string | ({ semanticId: string } & PointParams),
    params?: PointParams,
  ): Point {
    if (typeof semanticIdOrArgs === "string") {
      return new Point(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Point(semanticId, rest as PointParams);
  }

  createPolygon(
    semanticIdOrArgs: string | ({ semanticId: string } & PolygonParams),
    params?: PolygonParams,
  ): Polygon {
    if (typeof semanticIdOrArgs === "string") {
      return new Polygon(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Polygon(semanticId, rest as PolygonParams);
  }

  createPrice(
    semanticIdOrArgs: string | ({ semanticId: string } & PriceParams),
    params?: PriceParams,
  ): Price {
    if (typeof semanticIdOrArgs === "string") {
      return new Price(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Price(semanticId, rest as PriceParams);
  }

  createProductBatch(
    semanticIdOrArgs: string | ({ semanticId: string } & ProductBatchParams),
    params?: ProductBatchParams,
  ): ProductBatch {
    if (typeof semanticIdOrArgs === "string") {
      return new ProductBatch(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ProductBatch(semanticId, rest as ProductBatchParams);
  }

  createProductOption(
    semanticIdOrArgs: string | ({ semanticId: string } & ProductOptionParams),
    params?: ProductOptionParams,
  ): ProductOption {
    if (typeof semanticIdOrArgs === "string") {
      return new ProductOption(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ProductOption(semanticId, rest as ProductOptionParams);
  }

  createProductOptionValue(
    semanticIdOrArgs: string | ({ semanticId: string } & ProductOptionValueParams),
    params?: ProductOptionValueParams,
  ): ProductOptionValue {
    if (typeof semanticIdOrArgs === "string") {
      return new ProductOptionValue(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ProductOptionValue(semanticId, rest as ProductOptionValueParams);
  }

  createProductionFlow(
    semanticIdOrArgs: string | ({ semanticId: string } & ProductionFlowParams),
    params?: ProductionFlowParams,
  ): ProductionFlow {
    if (typeof semanticIdOrArgs === "string") {
      return new ProductionFlow(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ProductionFlow(semanticId, rest as ProductionFlowParams);
  }

  createProperties(
    semanticIdOrArgs: string | ({ semanticId: string } & PropertiesParams),
    params?: PropertiesParams,
  ): Properties {
    if (typeof semanticIdOrArgs === "string") {
      return new Properties(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Properties(semanticId, rest as PropertiesParams);
  }

  createQuantitativeValue(
    semanticIdOrArgs: string | ({ semanticId: string } & QuantitativeValueParams),
    params?: QuantitativeValueParams,
  ): QuantitativeValue {
    if (typeof semanticIdOrArgs === "string") {
      return new QuantitativeValue(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new QuantitativeValue(semanticId, rest as QuantitativeValueParams);
  }

  createRealStock(
    semanticIdOrArgs: string | ({ semanticId: string } & RealStockParams),
    params?: RealStockParams,
  ): RealStock {
    if (typeof semanticIdOrArgs === "string") {
      return new RealStock(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new RealStock(semanticId, rest as RealStockParams);
  }

  createRepresentationPivot(
    semanticIdOrArgs: string | ({ semanticId: string } & RepresentationPivotParams),
    params?: RepresentationPivotParams,
  ): RepresentationPivot {
    if (typeof semanticIdOrArgs === "string") {
      return new RepresentationPivot(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new RepresentationPivot(semanticId, rest as RepresentationPivotParams);
  }

  createRepresentedThing(
    semanticIdOrArgs: string | ({ semanticId: string } & RepresentedThingParams),
    params?: RepresentedThingParams,
  ): RepresentedThing {
    if (typeof semanticIdOrArgs === "string") {
      return new RepresentedThing(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new RepresentedThing(semanticId, rest as RepresentedThingParams);
  }

  createRoute(
    semanticIdOrArgs: string | ({ semanticId: string } & RouteParams),
    params?: RouteParams,
  ): Route {
    if (typeof semanticIdOrArgs === "string") {
      return new Route(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Route(semanticId, rest as RouteParams);
  }

  createSaleSession(
    semanticIdOrArgs: string | ({ semanticId: string } & SaleSessionParams),
    params?: SaleSessionParams,
  ): SaleSession {
    if (typeof semanticIdOrArgs === "string") {
      return new SaleSession(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new SaleSession(semanticId, rest as SaleSessionParams);
  }

  createShipment(
    semanticIdOrArgs: string | ({ semanticId: string } & ShipmentParams),
    params?: ShipmentParams,
  ): Shipment {
    if (typeof semanticIdOrArgs === "string") {
      return new Shipment(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Shipment(semanticId, rest as ShipmentParams);
  }

  createShippingOption(
    semanticIdOrArgs: string | ({ semanticId: string } & ShippingOptionParams),
    params?: ShippingOptionParams,
  ): ShippingOption {
    if (typeof semanticIdOrArgs === "string") {
      return new ShippingOption(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ShippingOption(semanticId, rest as ShippingOptionParams);
  }

  createSocialMedia(
    semanticIdOrArgs: string | ({ semanticId: string } & SocialMediaParams),
    params?: SocialMediaParams,
  ): SocialMedia {
    if (typeof semanticIdOrArgs === "string") {
      return new SocialMedia(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new SocialMedia(semanticId, rest as SocialMediaParams);
  }

  createStep(
    semanticIdOrArgs: string | ({ semanticId: string } & StepParams),
    params?: StepParams,
  ): Step {
    if (typeof semanticIdOrArgs === "string") {
      return new Step(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Step(semanticId, rest as StepParams);
  }

  createStock(
    semanticIdOrArgs: string | ({ semanticId: string } & StockParams),
    params?: StockParams,
  ): Stock {
    if (typeof semanticIdOrArgs === "string") {
      return new Stock(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Stock(semanticId, rest as StockParams);
  }

  createSuppliedProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & SuppliedProductParams),
    params?: SuppliedProductParams,
  ): SuppliedProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new SuppliedProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new SuppliedProduct(semanticId, rest as SuppliedProductParams);
  }

  createTechnicalProduct(
    semanticIdOrArgs: string | ({ semanticId: string } & TechnicalProductParams),
    params?: TechnicalProductParams,
  ): TechnicalProduct {
    if (typeof semanticIdOrArgs === "string") {
      return new TechnicalProduct(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new TechnicalProduct(semanticId, rest as TechnicalProductParams);
  }

  createTemperature(
    semanticIdOrArgs: string | ({ semanticId: string } & TemperatureParams),
    params?: TemperatureParams,
  ): Temperature {
    if (typeof semanticIdOrArgs === "string") {
      return new Temperature(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Temperature(semanticId, rest as TemperatureParams);
  }

  createTemplateSaleSession(
    semanticIdOrArgs: string | ({ semanticId: string } & TemplateSaleSessionParams),
    params?: TemplateSaleSessionParams,
  ): TemplateSaleSession {
    if (typeof semanticIdOrArgs === "string") {
      return new TemplateSaleSession(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new TemplateSaleSession(semanticId, rest as TemplateSaleSessionParams);
  }

  createTheoriticalStock(
    semanticIdOrArgs: string | ({ semanticId: string } & TheoriticalStockParams),
    params?: TheoriticalStockParams,
  ): TheoriticalStock {
    if (typeof semanticIdOrArgs === "string") {
      return new TheoriticalStock(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new TheoriticalStock(semanticId, rest as TheoriticalStockParams);
  }

  createTransaction(
    semanticIdOrArgs: string | ({ semanticId: string } & TransactionParams),
    params?: TransactionParams,
  ): Transaction {
    if (typeof semanticIdOrArgs === "string") {
      return new Transaction(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Transaction(semanticId, rest as TransactionParams);
  }

  createTransformation(
    semanticIdOrArgs: string | ({ semanticId: string } & TransformationParams),
    params?: TransformationParams,
  ): Transformation {
    if (typeof semanticIdOrArgs === "string") {
      return new Transformation(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Transformation(semanticId, rest as TransformationParams);
  }

  createValueRECUR(
    semanticIdOrArgs: string | ({ semanticId: string } & ValueRECURParams),
    params?: ValueRECURParams,
  ): ValueRECUR {
    if (typeof semanticIdOrArgs === "string") {
      return new ValueRECUR(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new ValueRECUR(semanticId, rest as ValueRECURParams);
  }

  createVariant(
    semanticIdOrArgs: string | ({ semanticId: string } & VariantParams),
    params?: VariantParams,
  ): Variant {
    if (typeof semanticIdOrArgs === "string") {
      return new Variant(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Variant(semanticId, rest as VariantParams);
  }

  createVariantCaracteristic(
    semanticIdOrArgs: string | ({ semanticId: string } & VariantCaracteristicParams),
    params?: VariantCaracteristicParams,
  ): VariantCaracteristic {
    if (typeof semanticIdOrArgs === "string") {
      return new VariantCaracteristic(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new VariantCaracteristic(semanticId, rest as VariantCaracteristicParams);
  }

  createVehicle(
    semanticIdOrArgs: string | ({ semanticId: string } & VehicleParams),
    params?: VehicleParams,
  ): Vehicle {
    if (typeof semanticIdOrArgs === "string") {
      return new Vehicle(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Vehicle(semanticId, rest as VehicleParams);
  }

  createVevent(
    semanticIdOrArgs: string | ({ semanticId: string } & VeventParams),
    params?: VeventParams,
  ): Vevent {
    if (typeof semanticIdOrArgs === "string") {
      return new Vevent(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Vevent(semanticId, rest as VeventParams);
  }

  createVirtualPlace(
    semanticIdOrArgs: string | ({ semanticId: string } & VirtualPlaceParams),
    params?: VirtualPlaceParams,
  ): VirtualPlace {
    if (typeof semanticIdOrArgs === "string") {
      return new VirtualPlace(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new VirtualPlace(semanticId, rest as VirtualPlaceParams);
  }

  createVolume(
    semanticIdOrArgs: string | ({ semanticId: string } & VolumeParams),
    params?: VolumeParams,
  ): Volume {
    if (typeof semanticIdOrArgs === "string") {
      return new Volume(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Volume(semanticId, rest as VolumeParams);
  }

  createWeight(
    semanticIdOrArgs: string | ({ semanticId: string } & WeightParams),
    params?: WeightParams,
  ): Weight {
    if (typeof semanticIdOrArgs === "string") {
      return new Weight(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new Weight(semanticId, rest as WeightParams);
  }

  createWhatSubject(
    semanticIdOrArgs: string | ({ semanticId: string } & WhatSubjectParams),
    params?: WhatSubjectParams,
  ): WhatSubject {
    if (typeof semanticIdOrArgs === "string") {
      return new WhatSubject(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new WhatSubject(semanticId, rest as WhatSubjectParams);
  }

  createWhereSubject(
    semanticIdOrArgs: string | ({ semanticId: string } & WhereSubjectParams),
    params?: WhereSubjectParams,
  ): WhereSubject {
    if (typeof semanticIdOrArgs === "string") {
      return new WhereSubject(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new WhereSubject(semanticId, rest as WhereSubjectParams);
  }

  createWhoSubject(
    semanticIdOrArgs: string | ({ semanticId: string } & WhoSubjectParams),
    params?: WhoSubjectParams,
  ): WhoSubject {
    if (typeof semanticIdOrArgs === "string") {
      return new WhoSubject(semanticIdOrArgs, params);
    }
    const { semanticId, ...rest } = semanticIdOrArgs;
    return new WhoSubject(semanticId, rest as WhoSubjectParams);
  }

  private async fetchContext(): Promise<Record<string, unknown>> {
    const response = await fetch(this.contextUrl, {
      headers: { "dfc-version": this.ontologyVersion },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch context from ${this.contextUrl}: ${response.status}`);
    }
    return await response.json() as Record<string, unknown>;
  }

  private buildNestedHash(concepts: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const [key, concept] of Object.entries(concepts)) {
      const parts = key.split(/[_\s]+/);
      let current = result;
      for (let i = 0; i < parts.length; i++) {
        const normalized = parts[i].toLowerCase().replace(/[^a-z0-9]/g, "_");
        if (i === parts.length - 1) {
          current[normalized] = concept;
        } else {
          (current[normalized] as Record<string, unknown>) = (current[normalized] as Record<string, unknown>) || {};
          current = current[normalized] as Record<string, unknown>;
        }
      }
    }
    return result;
  }

  private predicateToPropName(predicate: string): string {
    const mapped = Connector.PREDICATE_MAP[predicate];
    if (mapped !== undefined) return mapped;
    // Fallback: extract the local name from any CURIE or URI
    let name = predicate;
    const hashIndex = name.lastIndexOf("#");
    if (hashIndex !== -1) {
      name = name.slice(hashIndex + 1);
    } else {
      const colonIndex = name.lastIndexOf(":");
      if (colonIndex !== -1) {
        name = name.slice(colonIndex + 1);
      }
    }
    name = name.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
    name = name.charAt(0).toLowerCase() + name.slice(1);
    return name;
  }
}
