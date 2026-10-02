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
/**
 * Properties the ontology requires, per semantic type.
 *
 * Every entry comes from an `rdfs:subClassOf` restriction with
 * `minimum_cardinality 1` -- all 42 DFC restrictions are singletons.
 * Keyed by the semantic type and holding TS property names.
 * Generated from the schema; do not edit.
 */
const REQUIRED_SLOTS = {
    "dfc-b:AsPlannedConsumptionFlow": ["consumes", "inputOf"],
    "dfc-b:AsPlannedLocalConsumptionFlow": ["consumes", "inputOf"],
    "dfc-b:AsPlannedLocalProductionFlow": ["outputOf", "produces"],
    "dfc-b:AsPlannedLocalTransformation": ["transformedBy"],
    "dfc-b:AsPlannedProductionFlow": ["outputOf", "produces"],
    "dfc-b:AsRealizedConsumptionFlow": ["consumes", "inputOf"],
    "dfc-b:AsRealizedProductionFlow": ["outputOf", "produces"],
    "dfc-b:Catalog": ["maintainedBy"],
    "dfc-b:CatalogItem": ["listedIn", "managedBy", "references"],
    "dfc-b:ConsumptionFlow": ["consumes", "inputOf"],
    "dfc-b:Coordination": ["coordinatedBy", "hasObject"],
    "dfc-b:CustomerCategory": ["definedBy"],
    "dfc-b:DefinedProduct": ["lifetime"],
    "dfc-b:DeliveryOption": ["refersTo"],
    "dfc-b:FunctionalProduct": ["lifetime", "requestedBy"],
    "dfc-b:Length": ["value"],
    "dfc-b:Offer": ["offers", "offersTo"],
    "dfc-b:Order": ["belongsTo", "orderedBy", "selects", "uses"],
    "dfc-b:OrderLine": ["concerns", "partOf"],
    "dfc-b:Organization": ["hasMainContact"],
    "dfc-b:PaymentMethod": ["paymentMethodProvider", "paymentMethodType"],
    "dfc-b:PhysicalPlace": ["hasAddress"],
    "dfc-b:PickupOption": ["uses"],
    "dfc-b:Price": ["value"],
    "dfc-b:ProductionFlow": ["outputOf", "produces"],
    "dfc-b:QuantitativeValue": ["value"],
    "dfc-b:RealStock": ["availabilityDate", "constitutes", "identifiedBy", "storedIn"],
    "dfc-b:Stock": ["availabilityDate"],
    "dfc-b:SuppliedProduct": ["lifetime", "suppliedBy", "totalTheoriticalStock"],
    "dfc-b:TechnicalProduct": ["lifetime", "proposedBy"],
    "dfc-b:Temperature": ["value"],
    "dfc-b:TheoriticalStock": ["availabilityDate", "constitutes", "localizedBy"],
    "dfc-b:Transaction": ["from", "to"],
    "dfc-b:Variant": ["lifetime"],
    "dfc-b:VariantCaracteristic": ["hasProductOption", "hasProductOptionValue"],
    "dfc-b:Volume": ["value"],
    "dfc-b:Weight": ["value"],
};
/**
 * Slot, property and predicate for every required slot.
 * Generated from the schema; do not edit.
 */
const REQUIRED_SLOT_DATA = {
    "availabilityDate": { slot: "availability_date", predicate: "dfc-b:availabilityDate" },
    "belongsTo": { slot: "belongs_to", predicate: "dfc-b:belongsTo" },
    "concerns": { slot: "concerns", predicate: "dfc-b:concerns" },
    "constitutes": { slot: "constitutes", predicate: "dfc-b:constitutes" },
    "consumes": { slot: "consumes", predicate: "dfc-b:consumes" },
    "coordinatedBy": { slot: "coordinated_by", predicate: "dfc-b:coordinatedBy" },
    "definedBy": { slot: "defined_by", predicate: "dfc-b:definedBy" },
    "from": { slot: "from", predicate: "dfc-b:from" },
    "hasAddress": { slot: "has_address", predicate: "dfc-b:hasAddress" },
    "hasMainContact": { slot: "has_main_contact", predicate: "dfc-b:hasMainContact" },
    "hasObject": { slot: "has_object", predicate: "dfc-b:hasObject" },
    "hasProductOption": { slot: "has_product_option", predicate: "dfc-b:hasProductOption" },
    "hasProductOptionValue": { slot: "has_product_option_value", predicate: "dfc-b:hasProductOptionValue" },
    "identifiedBy": { slot: "identified_by", predicate: "dfc-b:identifiedBy" },
    "inputOf": { slot: "input_of", predicate: "dfc-b:inputOf" },
    "lifetime": { slot: "lifetime", predicate: "dfc-b:lifetime" },
    "listedIn": { slot: "listed_in", predicate: "dfc-b:listedIn" },
    "localizedBy": { slot: "localized_by", predicate: "dfc-b:localizedBy" },
    "maintainedBy": { slot: "maintained_by", predicate: "dfc-b:maintainedBy" },
    "managedBy": { slot: "managed_by", predicate: "dfc-b:managedBy" },
    "offers": { slot: "offers", predicate: "dfc-b:offers" },
    "offersTo": { slot: "offers_to", predicate: "dfc-b:offersTo" },
    "orderedBy": { slot: "ordered_by", predicate: "dfc-b:orderedBy" },
    "outputOf": { slot: "output_of", predicate: "dfc-b:outputOf" },
    "partOf": { slot: "part_of", predicate: "dfc-b:partOf" },
    "paymentMethodProvider": { slot: "payment_method_provider", predicate: "dfc-b:paymentMethodProvider" },
    "paymentMethodType": { slot: "payment_method_type", predicate: "dfc-b:paymentMethodType" },
    "produces": { slot: "produces", predicate: "dfc-b:produces" },
    "proposedBy": { slot: "proposed_by", predicate: "dfc-b:proposedBy" },
    "references": { slot: "references", predicate: "dfc-b:references" },
    "refersTo": { slot: "refers_to", predicate: "dfc-b:refersTo" },
    "requestedBy": { slot: "requested_by", predicate: "dfc-b:requestedBy" },
    "selects": { slot: "selects", predicate: "dfc-b:selects" },
    "storedIn": { slot: "stored_in", predicate: "dfc-b:storedIn" },
    "suppliedBy": { slot: "supplied_by", predicate: "dfc-b:suppliedBy" },
    "to": { slot: "to", predicate: "dfc-b:to" },
    "totalTheoriticalStock": { slot: "total_theoritical_stock", predicate: "dfc-b:totalTheoriticalStock" },
    "transformedBy": { slot: "transformed_by", predicate: "dfc-b:transformedBy" },
    "uses": { slot: "uses", predicate: "dfc-b:uses" },
    "value": { slot: "value", predicate: "dfc-b:value" },
};
/**
 * Entry point for reading and writing DFC data.
 *
 * A `Connector` creates DFC model objects, exports them to JSON-LD, and
 * imports JSON-LD back into model objects. It carries the ontology and
 * taxonomy versions and owns the controlled-vocabulary loading, so the
 * bundled v2.0.0 data is available offline with no network access.
 *
 * Every DFC class has a `createX` factory. Factories accept either the
 * positional form `createX(semanticId, params)` or the object form
 * `createX({ semanticId, ...params })`, so code written against the
 * original DFC connectors migrates with minimal edits.
 *
 * @example
 * ```ts
 * const c = new Connector();
 *
 * const org = c.createOrganization("https://example.com/org/1", {
 *   name: "Acme Farms",
 * });
 *
 * const jsonld = await c.export(org);
 * const [back] = c.import(jsonld);
 * ```
 */
export class Connector {
    static ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
    static TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";
    /** Maps each original DFC predicate to the property name used here. */
    static PREDICATE_MAP = {
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
    /**
     * Maps legacy DFC type predicates onto their current names.
     *
     * DFC v2.0 renamed `Enterprise` to `Organization`; documents using the old
     * name still import cleanly.
     */
    static TYPE_ALIASES = {
        "dfc-b:Enterprise": "dfc-b:Organization",
    };
    static defaultContextUrl = "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json";
    /** The `@context` URL used when none is supplied on export. */
    static getDefaultContextUrl() {
        return Connector.defaultContextUrl;
    }
    /** Overrides the default `@context` URL for this process. */
    static setDefaultContextUrl(url) {
        Connector.defaultContextUrl = url;
    }
    ontologyVersion;
    taxonomyVersion;
    vocabLoader;
    contextCache = null;
    facets = {};
    measures = {};
    productTypes = {};
    otherVocabularies = new Map();
    // Bundled v2.0.0 taxonomies are loaded unconditionally by design — the
    // connector ships only that version offline. Callers requesting a different
    // taxonomyVersion must override via load* methods.
    constructor(params = {}) {
        this.ontologyVersion = params.ontologyVersion ?? "2.0.0";
        this.taxonomyVersion = params.taxonomyVersion ?? "2.0.0";
        this.vocabLoader = new VocabularyLoader(this.taxonomyVersion, this.ontologyVersion);
        this.loadBundledTaxonomies();
    }
    loadBundledTaxonomies() {
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
    /** The `@context` URL for this connector's ontology version. */
    get contextUrl() {
        return `${Connector.ONTOLOGY_BASE_URL}/v${this.ontologyVersion}/context/context_${this.ontologyVersion}.json`;
    }
    /**
     * The JSON-LD context used for compaction.
     *
     * Prefers the context bundled with the package, so this resolves without
     * network access for the default ontology version.
     */
    async getContext() {
        if (!this.contextCache) {
            const bundled = this.loadBundledContext();
            if (bundled) {
                this.contextCache = bundled;
            }
            else {
                this.contextCache = await this.fetchContext();
            }
        }
        return this.contextCache;
    }
    // Returns the JSON-LD context shipped with the connector for the current
    // ontology version, or null so the caller falls back to the network.
    loadBundledContext() {
        if (this.ontologyVersion === "2.0.0") {
            return bundledContextV200;
        }
        return null;
    }
    /** Replaces the `Facet` vocabulary from SKOS JSON-LD data. */
    loadFacets(jsonData) {
        this.vocabLoader.load("Facet", jsonData);
        this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
        this.otherVocabularies.set("Facet", this.facets);
        return this;
    }
    /** Replaces the `Measure` vocabulary from SKOS JSON-LD data. */
    loadMeasures(jsonData) {
        this.vocabLoader.load("Measure", jsonData);
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        this.otherVocabularies.set("Measure", this.measures);
        return this;
    }
    /** Replaces the `ProductType` vocabulary from SKOS JSON-LD data. */
    loadProductTypes(jsonData) {
        this.vocabLoader.load("ProductType", jsonData);
        this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
        this.otherVocabularies.set("ProductType", this.productTypes);
        return this;
    }
    loadVocabulary(name, jsonData) {
        this.vocabLoader.load(name, jsonData);
        this.otherVocabularies.set(name, this.buildNestedHash(this.vocabLoader.vocabulary(name)));
        return this;
    }
    async loadFacetsFromUrl() {
        await this.vocabLoader.loadFromUrl("facets");
        this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
        this.otherVocabularies.set("Facet", this.facets);
        return this;
    }
    async loadMeasuresFromUrl() {
        await this.vocabLoader.loadFromUrl("measures");
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        this.otherVocabularies.set("Measure", this.measures);
        return this;
    }
    async loadProductTypesFromUrl() {
        await this.vocabLoader.loadFromUrl("productTypes");
        this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
        this.otherVocabularies.set("ProductType", this.productTypes);
        return this;
    }
    /**
     * Serializes objects to a compacted JSON-LD document.
     *
     * Predicates are emitted in their original short form (`dfc-b:name`, not
     * `dfc-b:Class:snake_case`) and `@context` is written as a URL string, so
     * output stays compact and directly comparable with the original DFC
     * connectors. One object produces a bare node; several produce a `@graph`.
     *
     * @param objects The objects to serialize. All reachable objects should be
     *   passed so references resolve.
     * @returns A pretty-printed JSON-LD string.
     */
    async export(...objects) {
        let context;
        try {
            context = await this.getContext();
        }
        catch {
            // Context fetch failed — export without compaction, but keep the
            // context URL so CURIE predicates stay expandable.
            const fallback = new JsonLdSerializer(undefined).serialize(...objects);
            fallback["@context"] = this.contextUrl;
            return JSON.stringify(fallback, null, 2);
        }
        const expanded = new JsonLdSerializer(context).serialize(...objects);
        const compacted = await jsonld.compact(expanded, context);
        const output = compacted;
        output["@context"] = this.contextUrl;
        return JSON.stringify(output, null, 2);
    }
    /**
     * Reads a JSON-LD document into DFC model objects.
     *
     * Accepts either a JSON string or an already-parsed document, in any
     * `@graph` form. Legacy type names are mapped through
     * {@link Connector.TYPE_ALIASES} and predicates through
     * {@link Connector.PREDICATE_MAP}, so data written against the original
     * DFC connectors loads without rewriting. The shape of each property is
     * preserved: a single reference stays a scalar.
     *
     * @returns The decoded objects, always an array, even for one entry.
     */
    import(jsonLdData) {
        const data = typeof jsonLdData === "string" ? JSON.parse(jsonLdData) : jsonLdData;
        const entries = Array.isArray(data)
            ? data
            : data["@graph"] || [data];
        const objectsById = new Map();
        const instances = [];
        for (const entry of entries) {
            const semanticId = entry["@id"];
            const rawType = entry["@type"];
            const semanticType = Array.isArray(rawType)
                ? rawType.find((t) => typeof t === "string" && !t.startsWith("@"))
                : rawType;
            if (!semanticId || !semanticType)
                continue;
            const Klass = SemanticObject.typeRegistry.get(Connector.TYPE_ALIASES[semanticType] ?? semanticType);
            if (!Klass)
                continue;
            const entryParams = {};
            for (const [key, value] of Object.entries(entry)) {
                if (key.startsWith("@"))
                    continue;
                const propName = this.predicateToPropName(key);
                entryParams[propName] = value;
            }
            const obj = new Klass(semanticId, entryParams);
            objectsById.set(semanticId, obj);
            instances.push(obj);
        }
        for (const entry of entries) {
            const semanticId = entry["@id"];
            if (!semanticId)
                continue;
            const obj = objectsById.get(semanticId);
            if (!obj)
                continue;
            for (const [key, value] of Object.entries(entry)) {
                if (key.startsWith("@"))
                    continue;
                const propName = this.predicateToPropName(key);
                if (!(propName in obj))
                    continue;
                if (Array.isArray(value)) {
                    obj[propName] = value.map((v) => this.resolveReference(v, objectsById));
                }
                else if (typeof value === "object" && value !== null && "@id" in value) {
                    obj[propName] = this.resolveReference(value, objectsById);
                }
                else if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {
                    obj[propName] = objectsById.get(value) || value;
                }
            }
        }
        return instances;
    }
    resolveReference(value, objectsById) {
        if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/") || value.startsWith("_:"))) {
            return objectsById.get(value) || value;
        }
        if (typeof value === "object" && value !== null && "@id" in value) {
            return objectsById.get(value["@id"]) || value;
        }
        return value;
    }
    get facet() {
        return this.otherVocabularies.get("Facet") || this.vocabLoader.vocabulary("Facet");
    }
    get measure() {
        return this.otherVocabularies.get("Measure") || this.vocabLoader.vocabulary("Measure");
    }
    get product_type() {
        return this.otherVocabularies.get("ProductType") || this.vocabLoader.vocabulary("ProductType");
    }
    get scope() {
        return this.otherVocabularies.get("Scope") || this.vocabLoader.vocabulary("Scope");
    }
    get vocabulary_term() {
        return this.otherVocabularies.get("VocabularyTerm") || this.vocabLoader.vocabulary("VocabularyTerm");
    }
    /**
     * Creates a {@link Address}.
     *
     * Serialized as `@type: dfc-b:Address`. Class hierarchy:
     * `Where_Subject` -> `Address`. Properties: city, country, latitude,
     * longitude, postcode, region, street, addressOf, hasCountry.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAddress(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Address(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Address(semanticId, rest);
    }
    /**
     * Creates a {@link Agent}.
     *
     * Serialized as `@type: dfc-b:Agent`. Class hierarchy: `Who_Subject` ->
     * `Agent`. Properties: email, logo, websitePage, affiliatedTo,
     * hasAddress, hasPhoneNumber, hasSocialMedia, isMemberOf, orders, owns,
     * requests, sells.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAgent(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Agent(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Agent(semanticId, rest);
    }
    /**
     * Creates a {@link AllergenCharacteristic}.
     *
     * Serialized as `@type: dfc-b:AllergenCharacteristic`. Properties:
     * allergenCharacteristicOf, hasAllergenDimension, date, description,
     * name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAllergenCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AllergenCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AllergenCharacteristic(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedConsumptionFlow}.
     *
     * Serialized as `@type: dfc-b:AsPlannedConsumptionFlow`. Class
     * hierarchy: `ConsumptionFlow` -> `AsPlannedConsumptionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedConsumptionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedLocalConsumptionFlow}.
     *
     * Serialized as `@type: dfc-b:AsPlannedLocalConsumptionFlow`. Class
     * hierarchy: `ConsumptionFlow` -> `AsPlannedLocalConsumptionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedLocalConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalConsumptionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedLocalProductionFlow}.
     *
     * Serialized as `@type: dfc-b:AsPlannedLocalProductionFlow`. Class
     * hierarchy: `ProductionFlow` -> `AsPlannedLocalProductionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedLocalProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalProductionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedLocalTransformation}.
     *
     * Serialized as `@type: dfc-b:AsPlannedLocalTransformation`. Class
     * hierarchy: `How_Subject` -> `Transformation` ->
     * `AsPlannedLocalTransformation`. Properties: cost, endDate, startDate,
     * hasInput, hasOutput, transformedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedLocalTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalTransformation(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedProductionFlow}.
     *
     * Serialized as `@type: dfc-b:AsPlannedProductionFlow`. Class
     * hierarchy: `ProductionFlow` -> `AsPlannedProductionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedProductionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsPlannedTransformation}.
     *
     * Serialized as `@type: dfc-b:AsPlannedTransformation`. Class
     * hierarchy: `How_Subject` -> `Transformation` ->
     * `AsPlannedTransformation`. Properties: hasInput, hasOutput,
     * hasTransformationType.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsPlannedTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedTransformation(semanticId, rest);
    }
    /**
     * Creates a {@link AsRealizedConsumptionFlow}.
     *
     * Serialized as `@type: dfc-b:AsRealizedConsumptionFlow`. Class
     * hierarchy: `ConsumptionFlow` -> `AsRealizedConsumptionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsRealizedConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedConsumptionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsRealizedProductionFlow}.
     *
     * Serialized as `@type: dfc-b:AsRealizedProductionFlow`. Class
     * hierarchy: `ProductionFlow` -> `AsRealizedProductionFlow`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsRealizedProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedProductionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link AsRealizedTransformation}.
     *
     * Serialized as `@type: dfc-b:AsRealizedTransformation`. Class
     * hierarchy: `How_Subject` -> `Transformation` ->
     * `AsRealizedTransformation`. Properties: cost, endDate, startDate,
     * hasInput, hasOutput.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createAsRealizedTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedTransformation(semanticId, rest);
    }
    /**
     * Creates a {@link Brand}.
     *
     * Serialized as `@type: dfc-b:Brand`. Class hierarchy: `What_Subject`
     * -> `Brand`. Properties: brandOf, ownedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createBrand(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Brand(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Brand(semanticId, rest);
    }
    /**
     * Creates a {@link Catalog}.
     *
     * Serialized as `@type: dfc-b:Catalog`. Class hierarchy:
     * `Where_Subject` -> `Catalog`. Properties: endDate, startDate, lists,
     * maintainedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCatalog(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Catalog(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Catalog(semanticId, rest);
    }
    /**
     * Creates a {@link CatalogItem}.
     *
     * Serialized as `@type: dfc-b:CatalogItem`. Properties:
     * extraAvailabilityTime, extraDeliveryCondition, sku, stockLimitation,
     * listedIn, managedBy, offeredThrough, references, date, description,
     * name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCatalogItem(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new CatalogItem(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new CatalogItem(semanticId, rest);
    }
    /**
     * Creates a {@link Certfication}.
     *
     * Serialized as `@type: dfc-b:Certfication`. Class hierarchy:
     * `What_Subject` -> `Certfication`. Properties: certiferReference,
     * certificationScore, operatorId, certifies.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCertfication(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Certfication(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Certfication(semanticId, rest);
    }
    /**
     * Creates a {@link Collection}.
     *
     * Serialized as `@type: dfc-b:Collection`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCollection(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Collection(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Collection(semanticId, rest);
    }
    /**
     * Creates a {@link Concept}.
     *
     * Serialized as `@type: dfc-b:Concept`. Properties: certificateOf,
     * claimOf, containerInformationOf, geographicalOriginOf,
     * natureOriginOf, partOriginOf, typeOf, date, description, name,
     * characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createConcept(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Concept(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Concept(semanticId, rest);
    }
    /**
     * Creates a {@link ConceptScheme}.
     *
     * Serialized as `@type: dfc-b:ConceptScheme`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createConceptScheme(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ConceptScheme(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ConceptScheme(semanticId, rest);
    }
    /**
     * Creates a {@link ConsumptionFlow}.
     *
     * Serialized as `@type: dfc-b:ConsumptionFlow`. Properties: quantity,
     * consumes, hasQuantity, inputOf, date, description, name,
     * characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ConsumptionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link Coordination}.
     *
     * Serialized as `@type: dfc-b:Coordination`. Properties: marginPercent,
     * coordinatedBy, hasObject, date, description, name, characteristicOf,
     * hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCoordination(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Coordination(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Coordination(semanticId, rest);
    }
    /**
     * Creates a {@link CustomerCategory}.
     *
     * Serialized as `@type: dfc-b:CustomerCategory`. Class hierarchy:
     * `Who_Subject` -> `CustomerCategory`. Properties: definedBy,
     * hasMember, hasOffer.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createCustomerCategory(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new CustomerCategory(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new CustomerCategory(semanticId, rest);
    }
    /**
     * Creates a {@link DitributedRepresentation}.
     *
     * Serialized as `@type: dfc-b:DFC_DitributedRepresentation`.
     * Properties: date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createDitributedRepresentation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DitributedRepresentation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DitributedRepresentation(semanticId, rest);
    }
    /**
     * Creates a {@link DefinedProduct}.
     *
     * Serialized as `@type: dfc-b:DefinedProduct`. Class hierarchy:
     * `What_Subject` -> `DefinedProduct`. Properties: image, url, brand,
     * claim, hasPercentageOfAlcoholByVolume, lifetime,
     * physicalCharacteristics, quantity, specificCondition, composes,
     * consumedBy, hasAllergenCharacteristic, hasBrand, hasCertification,
     * hasCharacteristic, hasClaim, hasContainerInformation,
     * hasGeographicalOrigin, hasIngredient, hasLabellingCharacteristic,
     * hasNatureOrigin, hasNutrientCharacteristic, hasPartOrigin,
     * hasPhysicalCharacteristic, hasQuantity, hasReferenceProductOption,
     * hasType, hasUnit, hasVariant, processOf, referencedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createDefinedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DefinedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DefinedProduct(semanticId, rest);
    }
    /**
     * Creates a {@link DeliveryOption}.
     *
     * Serialized as `@type: dfc-b:DeliveryOption`. Class hierarchy:
     * `How_Subject` -> `ShippingOption` -> `DeliveryOption`. Properties:
     * accessibilityInfo, deliveryConstraint, deliveredAt, refersTo, uses.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createDeliveryOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DeliveryOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DeliveryOption(semanticId, rest);
    }
    /**
     * Creates a {@link DeliveryStep}.
     *
     * Serialized as `@type: dfc-b:DeliveryStep`. Class hierarchy:
     * `Where_Subject` -> `Step` -> `DeliveryStep`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createDeliveryStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DeliveryStep(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DeliveryStep(semanticId, rest);
    }
    /**
     * Creates a {@link Enterprise}.
     *
     * Serialized as `@type: dfc-b:Enterprise`. Class hierarchy:
     * `Who_Subject` -> `Agent` -> `Organization` -> `Enterprise`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createEnterprise(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Enterprise(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Enterprise(semanticId, rest);
    }
    /**
     * Creates a {@link Feature}.
     *
     * Serialized as `@type: dfc-b:Feature`. Properties: geometry,
     * properties, date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createFeature(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Feature(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Feature(semanticId, rest);
    }
    /**
     * Creates a {@link FunctionalProduct}.
     *
     * Serialized as `@type: dfc-b:FunctionalProduct`. Class hierarchy:
     * `What_Subject` -> `DefinedProduct` -> `FunctionalProduct`.
     * Properties: requestedBy, satisfiedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createFunctionalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new FunctionalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new FunctionalProduct(semanticId, rest);
    }
    /**
     * Creates a {@link Geometry}.
     *
     * Serialized as `@type: dfc-b:Geometry`. Properties: coordinates, date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createGeometry(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Geometry(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Geometry(semanticId, rest);
    }
    /**
     * Creates a {@link HowSubject}.
     *
     * Serialized as `@type: dfc-b:How_Subject`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createHowSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new HowSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new HowSubject(semanticId, rest);
    }
    /**
     * Creates a {@link Individual}.
     *
     * Serialized as `@type: dfc-b:Individual`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createIndividual(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Individual(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Individual(semanticId, rest);
    }
    /**
     * Creates a {@link Ingredient}.
     *
     * Serialized as `@type: dfc-b:Ingredient`. Class hierarchy:
     * `What_Subject` -> `Ingredient`. Properties: composedOf, hasQuantity,
     * isIngredientOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createIngredient(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Ingredient(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Ingredient(semanticId, rest);
    }
    /**
     * Creates a {@link LabellingCharacteristic}.
     *
     * Serialized as `@type: dfc-b:LabellingCharacteristic`. Properties:
     * hasLabellingDimension, labellingCharacteristicOf, date, description,
     * name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createLabellingCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new LabellingCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new LabellingCharacteristic(semanticId, rest);
    }
    /**
     * Creates a {@link Length}.
     *
     * Serialized as `@type: dfc-b:Length`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue` -> `Length`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createLength(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Length(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Length(semanticId, rest);
    }
    /**
     * Creates a {@link LocalizedProduct}.
     *
     * Serialized as `@type: dfc-b:LocalizedProduct`. Class hierarchy:
     * `What_Subject` -> `LocalizedProduct`. Properties: image, cost,
     * quantity, constituedBy, consumedBy, hasQuantity, hasReference,
     * producedBy, representedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createLocalizedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new LocalizedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new LocalizedProduct(semanticId, rest);
    }
    /**
     * Creates a {@link NutrientCharacteristic}.
     *
     * Serialized as `@type: dfc-b:NutrientCharacteristic`. Properties:
     * hasNutrientDimension, nutrientCharacteristicOf, date, description,
     * name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createNutrientCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new NutrientCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new NutrientCharacteristic(semanticId, rest);
    }
    /**
     * Creates a {@link Offer}.
     *
     * Serialized as `@type: dfc-b:Offer`. Properties: discount,
     * stockLimitation, concernedBy, hasPrice, listedIn, offers, offersTo,
     * date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createOffer(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Offer(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Offer(semanticId, rest);
    }
    /**
     * Creates a {@link OpeningHoursSpecification}.
     *
     * Serialized as `@type: dfc-b:OpeningHoursSpecification`. Properties:
     * dayOfWeek, opens, closes, date, description, name, characteristicOf,
     * hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createOpeningHoursSpecification(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new OpeningHoursSpecification(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new OpeningHoursSpecification(semanticId, rest);
    }
    /**
     * Creates a {@link Order}.
     *
     * Serialized as `@type: dfc-b:Order`. Properties: discount,
     * orderNumber, belongsTo, hasFulfilmentStatus, hasOrderStatus, hasPart,
     * hasPaymentMethod, hasPaymentStatus, orderedBy, selects, soldBy, uses,
     * date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createOrder(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Order(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Order(semanticId, rest);
    }
    /**
     * Creates a {@link OrderLine}.
     *
     * Serialized as `@type: dfc-b:OrderLine`. Properties: discount,
     * quantity, concerns, hasPrice, hasQuantity, isFulfilledBy, partOf,
     * date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createOrderLine(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new OrderLine(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new OrderLine(semanticId, rest);
    }
    /**
     * Creates a {@link Organization}.
     *
     * Serialized as `@type: dfc-b:Organization`. Class hierarchy:
     * `Who_Subject` -> `Agent` -> `Organization`. Properties: vatNumber,
     * vatStatus, enterpriseId, affiliates, defines, hasMainContact,
     * hasTemplateSaleSession, isCertifiedBy, maintains, manages, proposes,
     * supplies, transforms.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createOrganization(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Organization(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Organization(semanticId, rest);
    }
    /**
     * Creates a {@link PaymentMethod}.
     *
     * Serialized as `@type: dfc-b:PaymentMethod`. Class hierarchy:
     * `How_Subject` -> `PaymentMethod`. Properties: paymentMethodProvider,
     * paymentMethodType, hasPrice, paidWith.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPaymentMethod(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PaymentMethod(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PaymentMethod(semanticId, rest);
    }
    /**
     * Creates a {@link Person}.
     *
     * Serialized as `@type: dfc-b:Person`. Class hierarchy: `Who_Subject`
     * -> `Agent` -> `Person`. Properties: familyName, firstName,
     * mainContactOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPerson(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Person(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Person(semanticId, rest);
    }
    /**
     * Creates a {@link PhoneNumber}.
     *
     * Serialized as `@type: dfc-b:PhoneNumber`. Class hierarchy:
     * `What_Subject` -> `PhoneNumber`. Properties: countryCode,
     * phoneNumber, phoneNumberOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPhoneNumber(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhoneNumber(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhoneNumber(semanticId, rest);
    }
    /**
     * Creates a {@link PhysicalCharacteristic}.
     *
     * Serialized as `@type: dfc-b:PhysicalCharacteristic`. Properties:
     * hasPhysicalDimension, physicalCharacteristicOf, date, description,
     * name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPhysicalCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalCharacteristic(semanticId, rest);
    }
    /**
     * Creates a {@link PhysicalPlace}.
     *
     * Serialized as `@type: dfc-b:PhysicalPlace`. Class hierarchy:
     * `Where_Subject` -> `Place` -> `PhysicalPlace`. Properties:
     * hasAddress, hasGeoJsonFeature, hasMainContact, hasPhoneNumber,
     * isOpenDuring, localizes, stores.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPhysicalPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalPlace(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalPlace(semanticId, rest);
    }
    /**
     * Creates a {@link PhysicalProduct}.
     *
     * Serialized as `@type: dfc-b:PhysicalProduct`. Class hierarchy:
     * `What_Subject` -> `PhysicalProduct`. Properties: image, quantity,
     * concernedBy, constituedBy, consumedBy, fulfills, hasQuantity,
     * ownedBy, producedBy, represents, tracedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPhysicalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalProduct(semanticId, rest);
    }
    /**
     * Creates a {@link PickUpStep}.
     *
     * Serialized as `@type: dfc-b:PickUpStep`. Class hierarchy:
     * `Where_Subject` -> `Step` -> `PickUpStep`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPickUpStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PickUpStep(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PickUpStep(semanticId, rest);
    }
    /**
     * Creates a {@link PickupOption}.
     *
     * Serialized as `@type: dfc-b:PickupOption`. Class hierarchy:
     * `How_Subject` -> `ShippingOption` -> `PickupOption`. Properties:
     * pickedUpAt, uses.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPickupOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PickupOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PickupOption(semanticId, rest);
    }
    /**
     * Creates a {@link Place}.
     *
     * Serialized as `@type: dfc-b:Place`. Class hierarchy: `Where_Subject`
     * -> `Place`. Properties: hosts.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Place(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Place(semanticId, rest);
    }
    /**
     * Creates a {@link Platform}.
     *
     * Serialized as `@type: dfc-b:Platform`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `Platform`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPlatform(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Platform(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Platform(semanticId, rest);
    }
    /**
     * Creates a {@link Point}.
     *
     * Serialized as `@type: dfc-b:Point`. Class hierarchy: `Geometry` ->
     * `Point`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPoint(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Point(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Point(semanticId, rest);
    }
    /**
     * Creates a {@link Polygon}.
     *
     * Serialized as `@type: dfc-b:Polygon`. Class hierarchy: `Geometry` ->
     * `Polygon`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPolygon(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Polygon(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Polygon(semanticId, rest);
    }
    /**
     * Creates a {@link Price}.
     *
     * Serialized as `@type: dfc-b:Price`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue` -> `Price`. Properties: vatRate, isPriceOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createPrice(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Price(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Price(semanticId, rest);
    }
    /**
     * Creates a {@link ProductBatch}.
     *
     * Serialized as `@type: dfc-b:ProductBatch`. Class hierarchy:
     * `What_Subject` -> `ProductBatch`. Properties: batchNumber,
     * bestBeforeDate, expiryDate, productionDate, identifies, traces.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createProductBatch(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductBatch(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductBatch(semanticId, rest);
    }
    /**
     * Creates a {@link ProductOption}.
     *
     * Serialized as `@type: dfc-b:ProductOption`. Class hierarchy:
     * `What_Subject` -> `ProductOption`. Properties:
     * hasReferenceProductOptionValue.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createProductOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductOption(semanticId, rest);
    }
    /**
     * Creates a {@link ProductOptionValue}.
     *
     * Serialized as `@type: dfc-b:ProductOptionValue`. Class hierarchy:
     * `What_Subject` -> `ProductOptionValue`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createProductOptionValue(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductOptionValue(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductOptionValue(semanticId, rest);
    }
    /**
     * Creates a {@link ProductionFlow}.
     *
     * Serialized as `@type: dfc-b:ProductionFlow`. Properties: quantity,
     * hasQuantity, outputOf, produces, date, description, name,
     * characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductionFlow(semanticId, rest);
    }
    /**
     * Creates a {@link Properties}.
     *
     * Serialized as `@type: dfc-b:Properties`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createProperties(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Properties(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Properties(semanticId, rest);
    }
    /**
     * Creates a {@link QuantitativeValue}.
     *
     * Serialized as `@type: dfc-b:QuantitativeValue`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue`. Properties: value, hasUnit.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createQuantitativeValue(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new QuantitativeValue(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new QuantitativeValue(semanticId, rest);
    }
    /**
     * Creates a {@link RealStock}.
     *
     * Serialized as `@type: dfc-b:RealStock`. Class hierarchy: `Stock` ->
     * `RealStock`. Properties: constitutes, identifiedBy, storedIn.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createRealStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RealStock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RealStock(semanticId, rest);
    }
    /**
     * Creates a {@link RepresentationPivot}.
     *
     * Serialized as `@type: dfc-b:RepresentationPivot`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentationPivot`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createRepresentationPivot(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RepresentationPivot(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RepresentationPivot(semanticId, rest);
    }
    /**
     * Creates a {@link RepresentedThing}.
     *
     * Serialized as `@type: dfc-b:RepresentedThing`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createRepresentedThing(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RepresentedThing(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RepresentedThing(semanticId, rest);
    }
    /**
     * Creates a {@link Route}.
     *
     * Serialized as `@type: dfc-b:Route`. Class hierarchy: `Where_Subject`
     * -> `Route`. Properties: hasGeoJsonFeature, hasStep, useVehicle.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createRoute(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Route(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Route(semanticId, rest);
    }
    /**
     * Creates a {@link SaleSession}.
     *
     * Serialized as `@type: dfc-b:SaleSession`. Properties: endDate,
     * quantity, startDate, hasOption, hasQuantity, holds, hostedAt, lists,
     * objectOf, date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createSaleSession(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SaleSession(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SaleSession(semanticId, rest);
    }
    /**
     * Creates a {@link Shipment}.
     *
     * Serialized as `@type: dfc-b:Shipment`. Properties: endDate,
     * startDate, endsAt, isShippedIn, startsAt, transports, date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createShipment(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Shipment(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Shipment(semanticId, rest);
    }
    /**
     * Creates a {@link ShippingOption}.
     *
     * Serialized as `@type: dfc-b:ShippingOption`. Class hierarchy:
     * `How_Subject` -> `ShippingOption`. Properties: endDate, fee,
     * quantity, startDate, hasQuantity, optionOf, selectedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createShippingOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ShippingOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ShippingOption(semanticId, rest);
    }
    /**
     * Creates a {@link SocialMedia}.
     *
     * Serialized as `@type: dfc-b:SocialMedia`. Class hierarchy:
     * `What_Subject` -> `SocialMedia`. Properties: websitePage,
     * socialMediaOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createSocialMedia(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SocialMedia(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SocialMedia(semanticId, rest);
    }
    /**
     * Creates a {@link Step}.
     *
     * Serialized as `@type: dfc-b:Step`. Class hierarchy: `Where_Subject`
     * -> `Step`. Properties: arrivalDate, duration, delivery, isStepOf,
     * pickUp.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Step(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Step(semanticId, rest);
    }
    /**
     * Creates a {@link Stock}.
     *
     * Serialized as `@type: dfc-b:Stock`. Properties: availabilityDate,
     * quantity, hasQuantity, transportedBy, date, description, name,
     * characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Stock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Stock(semanticId, rest);
    }
    /**
     * Creates a {@link SuppliedProduct}.
     *
     * Serialized as `@type: dfc-b:SuppliedProduct`. Class hierarchy:
     * `What_Subject` -> `DefinedProduct` -> `SuppliedProduct`. Properties:
     * availabilityTime, deliveryCondition, frozen, refrigerated,
     * totalTheoriticalStock, hasTemperature, industrializes, producedBy,
     * referenceOf, suppliedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createSuppliedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SuppliedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SuppliedProduct(semanticId, rest);
    }
    /**
     * Creates a {@link TechnicalProduct}.
     *
     * Serialized as `@type: dfc-b:TechnicalProduct`. Class hierarchy:
     * `What_Subject` -> `DefinedProduct` -> `TechnicalProduct`. Properties:
     * industrializedBy, proposedBy, satisfies.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTechnicalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TechnicalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TechnicalProduct(semanticId, rest);
    }
    /**
     * Creates a {@link Temperature}.
     *
     * Serialized as `@type: dfc-b:Temperature`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue` -> `Temperature`. Properties: isTemperatureOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTemperature(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Temperature(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Temperature(semanticId, rest);
    }
    /**
     * Creates a {@link TemplateSaleSession}.
     *
     * Serialized as `@type: dfc-b:TemplateSaleSession`. Properties:
     * hostedAt, isTemplateSaleSessionOf, date, description, name,
     * characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTemplateSaleSession(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TemplateSaleSession(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TemplateSaleSession(semanticId, rest);
    }
    /**
     * Creates a {@link TheoriticalStock}.
     *
     * Serialized as `@type: dfc-b:TheoriticalStock`. Class hierarchy:
     * `Stock` -> `TheoriticalStock`. Properties: constitutes, localizedBy.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTheoriticalStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TheoriticalStock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TheoriticalStock(semanticId, rest);
    }
    /**
     * Creates a {@link Transaction}.
     *
     * Serialized as `@type: dfc-b:Transaction`. Class hierarchy:
     * `How_Subject` -> `Transaction`. Properties: invoiceNumber, quantity,
     * concerns, from, hasPrice, hasQuantity, to.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTransaction(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Transaction(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Transaction(semanticId, rest);
    }
    /**
     * Creates a {@link Transformation}.
     *
     * Serialized as `@type: dfc-b:Transformation`. Class hierarchy:
     * `How_Subject` -> `Transformation`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Transformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Transformation(semanticId, rest);
    }
    /**
     * Creates a {@link ValueRECUR}.
     *
     * Serialized as `@type: dfc-b:Value_RECUR`. Properties: byday, bymonth,
     * freq, interval, date, description, name, characteristicOf,
     * hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createValueRECUR(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ValueRECUR(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ValueRECUR(semanticId, rest);
    }
    /**
     * Creates a {@link Variant}.
     *
     * Serialized as `@type: dfc-b:Variant`. Class hierarchy: `What_Subject`
     * -> `DefinedProduct` -> `Variant`. Properties:
     * hasVariantCaracteristic, isVariantOf.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVariant(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Variant(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Variant(semanticId, rest);
    }
    /**
     * Creates a {@link VariantCaracteristic}.
     *
     * Serialized as `@type: dfc-b:VariantCaracteristic`. Class hierarchy:
     * `What_Subject` -> `VariantCaracteristic`. Properties:
     * hasProductOption, hasProductOptionValue.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVariantCaracteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new VariantCaracteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new VariantCaracteristic(semanticId, rest);
    }
    /**
     * Creates a {@link Vehicle}.
     *
     * Serialized as `@type: dfc-b:Vehicle`. Class hierarchy: `What_Subject`
     * -> `Vehicle`. Properties: frozen, refrigerated, basedAt, hasQuantity,
     * isAvailableDuring, ships, usedInRoute.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVehicle(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Vehicle(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Vehicle(semanticId, rest);
    }
    /**
     * Creates a {@link Vevent}.
     *
     * Serialized as `@type: dfc-b:Vevent`. Properties: dtend, dtstart,
     * rrule, date, description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVevent(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Vevent(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Vevent(semanticId, rest);
    }
    /**
     * Creates a {@link VirtualPlace}.
     *
     * Serialized as `@type: dfc-b:VirtualPlace`. Class hierarchy:
     * `Where_Subject` -> `Place` -> `VirtualPlace`. Properties: url,
     * websitePage.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVirtualPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new VirtualPlace(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new VirtualPlace(semanticId, rest);
    }
    /**
     * Creates a {@link Volume}.
     *
     * Serialized as `@type: dfc-b:Volume`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue` -> `Volume`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createVolume(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Volume(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Volume(semanticId, rest);
    }
    /**
     * Creates a {@link Weight}.
     *
     * Serialized as `@type: dfc-b:Weight`. Class hierarchy:
     * `DFC_DitributedRepresentation` -> `RepresentedThing` ->
     * `QuantitativeValue` -> `Weight`.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createWeight(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Weight(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Weight(semanticId, rest);
    }
    /**
     * Creates a {@link WhatSubject}.
     *
     * Serialized as `@type: dfc-b:What_Subject`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createWhatSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhatSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhatSubject(semanticId, rest);
    }
    /**
     * Creates a {@link WhereSubject}.
     *
     * Serialized as `@type: dfc-b:Where_Subject`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createWhereSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhereSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhereSubject(semanticId, rest);
    }
    /**
     * Creates a {@link WhoSubject}.
     *
     * Serialized as `@type: dfc-b:Who_Subject`. Properties: date,
     * description, name, characteristicOf, hasDimension.
     *
     * @param semanticIdOrArgs The object's identity, or an object whose
     *   `semanticId` is the identity and whose other keys are the parameters.
     * @param params Properties for the object, when passing the identity first.
     */
    createWhoSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhoSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhoSubject(semanticId, rest);
    }
    /**
     * Reports properties the ontology requires and this object does not carry.
     *
     * Deliberately not a constructor check. A data-plane connector has to accept
     * partially built objects -- you set the identifier first and fill in the
     * rest later -- and several DFC restrictions are heavy enough that enforcing
     * them would make ordinary documents unusable (every `Organization` would
     * need a `hasMainContact`, every `SuppliedProduct` a `totalTheoriticalStock`).
     * `docs/concepts/cardinality.md` explains where the constraint data comes
     * from and why it is opt-in.
     *
     * @param objects One or more objects to check.
     * @returns One entry per missing required property, empty when all are present.
     */
    validate(...objects) {
        const issues = [];
        for (const object of objects) {
            const required = REQUIRED_SLOTS[object.semanticType] ?? [];
            for (const property of required) {
                const spec = REQUIRED_SLOT_DATA[property];
                const value = object[property];
                if (value === undefined || value === null) {
                    issues.push({
                        semanticId: object.semanticId,
                        semanticType: object.semanticType,
                        slot: spec.slot,
                        predicate: spec.predicate,
                    });
                }
            }
        }
        return issues;
    }
    async fetchContext() {
        const response = await fetch(this.contextUrl, {
            headers: { "dfc-version": this.ontologyVersion },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch context from ${this.contextUrl}: ${response.status}`);
        }
        return await response.json();
    }
    buildNestedHash(concepts) {
        const result = {};
        for (const [key, concept] of Object.entries(concepts)) {
            const parts = key.split(/[_\s]+/);
            let current = result;
            for (let i = 0; i < parts.length; i++) {
                const normalized = parts[i].toLowerCase().replace(/[^a-z0-9]/g, "_");
                if (i === parts.length - 1) {
                    current[normalized] = concept;
                }
                else {
                    current[normalized] = current[normalized] || {};
                    current = current[normalized];
                }
            }
        }
        return result;
    }
    predicateToPropName(predicate) {
        const mapped = Connector.PREDICATE_MAP[predicate];
        if (mapped !== undefined)
            return mapped;
        // Fallback: extract the local name from any CURIE or URI
        let name = predicate;
        const hashIndex = name.lastIndexOf("#");
        if (hashIndex !== -1) {
            name = name.slice(hashIndex + 1);
        }
        else {
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
