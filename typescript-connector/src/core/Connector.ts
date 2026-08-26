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
    this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
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
    return this;
  }

  loadMeasures(jsonData: Record<string, unknown>): this {
    this.vocabLoader.load("Measure", jsonData);
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    return this;
  }

  loadProductTypes(jsonData: Record<string, unknown>): this {
    this.vocabLoader.load("ProductType", jsonData);
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
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
    return this;
  }

  async loadMeasuresFromUrl(): Promise<this> {
    await this.vocabLoader.loadFromUrl("measures");
    this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
    return this;
  }

  async loadProductTypesFromUrl(): Promise<this> {
    await this.vocabLoader.loadFromUrl("productTypes");
    this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
    return this;
  }

  async export(...objects: SemanticObject[]): Promise<string> {
    let context: Record<string, unknown> | undefined;
    try {
      context = await this.getContext();
    } catch {
      // Context fetch failed — export without compaction
      return JSON.stringify(new JsonLdSerializer(undefined).serialize(...objects), null, 2);
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


  createAddress(semanticId: string, params?: AddressParams): Address {
    return new Address(semanticId, params);
  }

  createAgent(semanticId: string, params?: AgentParams): Agent {
    return new Agent(semanticId, params);
  }

  createAllergenCharacteristic(semanticId: string, params?: AllergenCharacteristicParams): AllergenCharacteristic {
    return new AllergenCharacteristic(semanticId, params);
  }

  createAsPlannedConsumptionFlow(semanticId: string, params?: AsPlannedConsumptionFlowParams): AsPlannedConsumptionFlow {
    return new AsPlannedConsumptionFlow(semanticId, params);
  }

  createAsPlannedLocalConsumptionFlow(semanticId: string, params?: AsPlannedLocalConsumptionFlowParams): AsPlannedLocalConsumptionFlow {
    return new AsPlannedLocalConsumptionFlow(semanticId, params);
  }

  createAsPlannedLocalProductionFlow(semanticId: string, params?: AsPlannedLocalProductionFlowParams): AsPlannedLocalProductionFlow {
    return new AsPlannedLocalProductionFlow(semanticId, params);
  }

  createAsPlannedLocalTransformation(semanticId: string, params?: AsPlannedLocalTransformationParams): AsPlannedLocalTransformation {
    return new AsPlannedLocalTransformation(semanticId, params);
  }

  createAsPlannedProductionFlow(semanticId: string, params?: AsPlannedProductionFlowParams): AsPlannedProductionFlow {
    return new AsPlannedProductionFlow(semanticId, params);
  }

  createAsPlannedTransformation(semanticId: string, params?: AsPlannedTransformationParams): AsPlannedTransformation {
    return new AsPlannedTransformation(semanticId, params);
  }

  createAsRealizedConsumptionFlow(semanticId: string, params?: AsRealizedConsumptionFlowParams): AsRealizedConsumptionFlow {
    return new AsRealizedConsumptionFlow(semanticId, params);
  }

  createAsRealizedProductionFlow(semanticId: string, params?: AsRealizedProductionFlowParams): AsRealizedProductionFlow {
    return new AsRealizedProductionFlow(semanticId, params);
  }

  createAsRealizedTransformation(semanticId: string, params?: AsRealizedTransformationParams): AsRealizedTransformation {
    return new AsRealizedTransformation(semanticId, params);
  }

  createBrand(semanticId: string, params?: BrandParams): Brand {
    return new Brand(semanticId, params);
  }

  createCatalog(semanticId: string, params?: CatalogParams): Catalog {
    return new Catalog(semanticId, params);
  }

  createCatalogItem(semanticId: string, params?: CatalogItemParams): CatalogItem {
    return new CatalogItem(semanticId, params);
  }

  createCertfication(semanticId: string, params?: CertficationParams): Certfication {
    return new Certfication(semanticId, params);
  }

  createCollection(semanticId: string, params?: CollectionParams): Collection {
    return new Collection(semanticId, params);
  }

  createConcept(semanticId: string, params?: ConceptParams): Concept {
    return new Concept(semanticId, params);
  }

  createConceptScheme(semanticId: string, params?: ConceptSchemeParams): ConceptScheme {
    return new ConceptScheme(semanticId, params);
  }

  createConsumptionFlow(semanticId: string, params?: ConsumptionFlowParams): ConsumptionFlow {
    return new ConsumptionFlow(semanticId, params);
  }

  createCoordination(semanticId: string, params?: CoordinationParams): Coordination {
    return new Coordination(semanticId, params);
  }

  createCustomerCategory(semanticId: string, params?: CustomerCategoryParams): CustomerCategory {
    return new CustomerCategory(semanticId, params);
  }

  createDitributedRepresentation(semanticId: string, params?: DitributedRepresentationParams): DitributedRepresentation {
    return new DitributedRepresentation(semanticId, params);
  }

  createDefinedProduct(semanticId: string, params?: DefinedProductParams): DefinedProduct {
    return new DefinedProduct(semanticId, params);
  }

  createDeliveryOption(semanticId: string, params?: DeliveryOptionParams): DeliveryOption {
    return new DeliveryOption(semanticId, params);
  }

  createDeliveryStep(semanticId: string, params?: DeliveryStepParams): DeliveryStep {
    return new DeliveryStep(semanticId, params);
  }

  createEnterprise(semanticId: string, params?: EnterpriseParams): Enterprise {
    return new Enterprise(semanticId, params);
  }

  createFeature(semanticId: string, params?: FeatureParams): Feature {
    return new Feature(semanticId, params);
  }

  createFunctionalProduct(semanticId: string, params?: FunctionalProductParams): FunctionalProduct {
    return new FunctionalProduct(semanticId, params);
  }

  createGeometry(semanticId: string, params?: GeometryParams): Geometry {
    return new Geometry(semanticId, params);
  }

  createHowSubject(semanticId: string, params?: HowSubjectParams): HowSubject {
    return new HowSubject(semanticId, params);
  }

  createIndividual(semanticId: string, params?: IndividualParams): Individual {
    return new Individual(semanticId, params);
  }

  createIngredient(semanticId: string, params?: IngredientParams): Ingredient {
    return new Ingredient(semanticId, params);
  }

  createLabellingCharacteristic(semanticId: string, params?: LabellingCharacteristicParams): LabellingCharacteristic {
    return new LabellingCharacteristic(semanticId, params);
  }

  createLength(semanticId: string, params?: LengthParams): Length {
    return new Length(semanticId, params);
  }

  createLocalizedProduct(semanticId: string, params?: LocalizedProductParams): LocalizedProduct {
    return new LocalizedProduct(semanticId, params);
  }

  createNutrientCharacteristic(semanticId: string, params?: NutrientCharacteristicParams): NutrientCharacteristic {
    return new NutrientCharacteristic(semanticId, params);
  }

  createOffer(semanticId: string, params?: OfferParams): Offer {
    return new Offer(semanticId, params);
  }

  createOpeningHoursSpecification(semanticId: string, params?: OpeningHoursSpecificationParams): OpeningHoursSpecification {
    return new OpeningHoursSpecification(semanticId, params);
  }

  createOrder(semanticId: string, params?: OrderParams): Order {
    return new Order(semanticId, params);
  }

  createOrderLine(semanticId: string, params?: OrderLineParams): OrderLine {
    return new OrderLine(semanticId, params);
  }

  createOrganization(semanticId: string, params?: OrganizationParams): Organization {
    return new Organization(semanticId, params);
  }

  createPaymentMethod(semanticId: string, params?: PaymentMethodParams): PaymentMethod {
    return new PaymentMethod(semanticId, params);
  }

  createPerson(semanticId: string, params?: PersonParams): Person {
    return new Person(semanticId, params);
  }

  createPhoneNumber(semanticId: string, params?: PhoneNumberParams): PhoneNumber {
    return new PhoneNumber(semanticId, params);
  }

  createPhysicalCharacteristic(semanticId: string, params?: PhysicalCharacteristicParams): PhysicalCharacteristic {
    return new PhysicalCharacteristic(semanticId, params);
  }

  createPhysicalPlace(semanticId: string, params?: PhysicalPlaceParams): PhysicalPlace {
    return new PhysicalPlace(semanticId, params);
  }

  createPhysicalProduct(semanticId: string, params?: PhysicalProductParams): PhysicalProduct {
    return new PhysicalProduct(semanticId, params);
  }

  createPickUpStep(semanticId: string, params?: PickUpStepParams): PickUpStep {
    return new PickUpStep(semanticId, params);
  }

  createPickupOption(semanticId: string, params?: PickupOptionParams): PickupOption {
    return new PickupOption(semanticId, params);
  }

  createPlace(semanticId: string, params?: PlaceParams): Place {
    return new Place(semanticId, params);
  }

  createPlatform(semanticId: string, params?: PlatformParams): Platform {
    return new Platform(semanticId, params);
  }

  createPoint(semanticId: string, params?: PointParams): Point {
    return new Point(semanticId, params);
  }

  createPolygon(semanticId: string, params?: PolygonParams): Polygon {
    return new Polygon(semanticId, params);
  }

  createPrice(semanticId: string, params?: PriceParams): Price {
    return new Price(semanticId, params);
  }

  createProductBatch(semanticId: string, params?: ProductBatchParams): ProductBatch {
    return new ProductBatch(semanticId, params);
  }

  createProductOption(semanticId: string, params?: ProductOptionParams): ProductOption {
    return new ProductOption(semanticId, params);
  }

  createProductOptionValue(semanticId: string, params?: ProductOptionValueParams): ProductOptionValue {
    return new ProductOptionValue(semanticId, params);
  }

  createProductionFlow(semanticId: string, params?: ProductionFlowParams): ProductionFlow {
    return new ProductionFlow(semanticId, params);
  }

  createProperties(semanticId: string, params?: PropertiesParams): Properties {
    return new Properties(semanticId, params);
  }

  createQuantitativeValue(semanticId: string, params?: QuantitativeValueParams): QuantitativeValue {
    return new QuantitativeValue(semanticId, params);
  }

  createRealStock(semanticId: string, params?: RealStockParams): RealStock {
    return new RealStock(semanticId, params);
  }

  createRepresentationPivot(semanticId: string, params?: RepresentationPivotParams): RepresentationPivot {
    return new RepresentationPivot(semanticId, params);
  }

  createRepresentedThing(semanticId: string, params?: RepresentedThingParams): RepresentedThing {
    return new RepresentedThing(semanticId, params);
  }

  createRoute(semanticId: string, params?: RouteParams): Route {
    return new Route(semanticId, params);
  }

  createSaleSession(semanticId: string, params?: SaleSessionParams): SaleSession {
    return new SaleSession(semanticId, params);
  }

  createShipment(semanticId: string, params?: ShipmentParams): Shipment {
    return new Shipment(semanticId, params);
  }

  createShippingOption(semanticId: string, params?: ShippingOptionParams): ShippingOption {
    return new ShippingOption(semanticId, params);
  }

  createSocialMedia(semanticId: string, params?: SocialMediaParams): SocialMedia {
    return new SocialMedia(semanticId, params);
  }

  createStep(semanticId: string, params?: StepParams): Step {
    return new Step(semanticId, params);
  }

  createStock(semanticId: string, params?: StockParams): Stock {
    return new Stock(semanticId, params);
  }

  createSuppliedProduct(semanticId: string, params?: SuppliedProductParams): SuppliedProduct {
    return new SuppliedProduct(semanticId, params);
  }

  createTechnicalProduct(semanticId: string, params?: TechnicalProductParams): TechnicalProduct {
    return new TechnicalProduct(semanticId, params);
  }

  createTemperature(semanticId: string, params?: TemperatureParams): Temperature {
    return new Temperature(semanticId, params);
  }

  createTemplateSaleSession(semanticId: string, params?: TemplateSaleSessionParams): TemplateSaleSession {
    return new TemplateSaleSession(semanticId, params);
  }

  createTheoriticalStock(semanticId: string, params?: TheoriticalStockParams): TheoriticalStock {
    return new TheoriticalStock(semanticId, params);
  }

  createTransaction(semanticId: string, params?: TransactionParams): Transaction {
    return new Transaction(semanticId, params);
  }

  createTransformation(semanticId: string, params?: TransformationParams): Transformation {
    return new Transformation(semanticId, params);
  }

  createValueRECUR(semanticId: string, params?: ValueRECURParams): ValueRECUR {
    return new ValueRECUR(semanticId, params);
  }

  createVariant(semanticId: string, params?: VariantParams): Variant {
    return new Variant(semanticId, params);
  }

  createVariantCaracteristic(semanticId: string, params?: VariantCaracteristicParams): VariantCaracteristic {
    return new VariantCaracteristic(semanticId, params);
  }

  createVehicle(semanticId: string, params?: VehicleParams): Vehicle {
    return new Vehicle(semanticId, params);
  }

  createVevent(semanticId: string, params?: VeventParams): Vevent {
    return new Vevent(semanticId, params);
  }

  createVirtualPlace(semanticId: string, params?: VirtualPlaceParams): VirtualPlace {
    return new VirtualPlace(semanticId, params);
  }

  createVolume(semanticId: string, params?: VolumeParams): Volume {
    return new Volume(semanticId, params);
  }

  createWeight(semanticId: string, params?: WeightParams): Weight {
    return new Weight(semanticId, params);
  }

  createWhatSubject(semanticId: string, params?: WhatSubjectParams): WhatSubject {
    return new WhatSubject(semanticId, params);
  }

  createWhereSubject(semanticId: string, params?: WhereSubjectParams): WhereSubject {
    return new WhereSubject(semanticId, params);
  }

  createWhoSubject(semanticId: string, params?: WhoSubjectParams): WhoSubject {
    return new WhoSubject(semanticId, params);
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
