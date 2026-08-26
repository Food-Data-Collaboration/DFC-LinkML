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
export class Connector {
    static ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
    static TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";
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
    static TYPE_ALIASES = {
        "dfc-b:Enterprise": "dfc-b:Organization",
    };
    static defaultContextUrl = "https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json";
    static getDefaultContextUrl() {
        return Connector.defaultContextUrl;
    }
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
    constructor(params = {}) {
        this.ontologyVersion = params.ontologyVersion ?? "2.0.0";
        this.taxonomyVersion = params.taxonomyVersion ?? "2.0.0";
        this.vocabLoader = new VocabularyLoader(this.taxonomyVersion, this.ontologyVersion);
        this.loadBundledTaxonomies();
    }
    loadBundledTaxonomies() {
        this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
        this.otherVocabularies.set("Scope", this.buildNestedHash(this.vocabLoader.vocabulary("Scope")));
        this.otherVocabularies.set("VocabularyTerm", this.buildNestedHash(this.vocabLoader.vocabulary("VocabularyTerm")));
        return this;
    }
    get contextUrl() {
        return `${Connector.ONTOLOGY_BASE_URL}/v${this.ontologyVersion}/context/context_${this.ontologyVersion}.json`;
    }
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
    loadFacets(jsonData) {
        this.vocabLoader.load("Facet", jsonData);
        this.facets = this.buildNestedHash(this.vocabLoader.vocabulary("Facet"));
        return this;
    }
    loadMeasures(jsonData) {
        this.vocabLoader.load("Measure", jsonData);
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        return this;
    }
    loadProductTypes(jsonData) {
        this.vocabLoader.load("ProductType", jsonData);
        this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
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
        return this;
    }
    async loadMeasuresFromUrl() {
        await this.vocabLoader.loadFromUrl("measures");
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        return this;
    }
    async loadProductTypesFromUrl() {
        await this.vocabLoader.loadFromUrl("productTypes");
        this.productTypes = this.buildNestedHash(this.vocabLoader.vocabulary("ProductType"));
        return this;
    }
    async export(...objects) {
        let context;
        try {
            context = await this.getContext();
        }
        catch {
            // Context fetch failed — export without compaction
            return JSON.stringify(new JsonLdSerializer(undefined).serialize(...objects), null, 2);
        }
        const expanded = new JsonLdSerializer(context).serialize(...objects);
        const compacted = await jsonld.compact(expanded, context);
        const output = compacted;
        output["@context"] = this.contextUrl;
        return JSON.stringify(output, null, 2);
    }
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
    createAddress(semanticId, params) {
        return new Address(semanticId, params);
    }
    createAgent(semanticId, params) {
        return new Agent(semanticId, params);
    }
    createAllergenCharacteristic(semanticId, params) {
        return new AllergenCharacteristic(semanticId, params);
    }
    createAsPlannedConsumptionFlow(semanticId, params) {
        return new AsPlannedConsumptionFlow(semanticId, params);
    }
    createAsPlannedLocalConsumptionFlow(semanticId, params) {
        return new AsPlannedLocalConsumptionFlow(semanticId, params);
    }
    createAsPlannedLocalProductionFlow(semanticId, params) {
        return new AsPlannedLocalProductionFlow(semanticId, params);
    }
    createAsPlannedLocalTransformation(semanticId, params) {
        return new AsPlannedLocalTransformation(semanticId, params);
    }
    createAsPlannedProductionFlow(semanticId, params) {
        return new AsPlannedProductionFlow(semanticId, params);
    }
    createAsPlannedTransformation(semanticId, params) {
        return new AsPlannedTransformation(semanticId, params);
    }
    createAsRealizedConsumptionFlow(semanticId, params) {
        return new AsRealizedConsumptionFlow(semanticId, params);
    }
    createAsRealizedProductionFlow(semanticId, params) {
        return new AsRealizedProductionFlow(semanticId, params);
    }
    createAsRealizedTransformation(semanticId, params) {
        return new AsRealizedTransformation(semanticId, params);
    }
    createBrand(semanticId, params) {
        return new Brand(semanticId, params);
    }
    createCatalog(semanticId, params) {
        return new Catalog(semanticId, params);
    }
    createCatalogItem(semanticId, params) {
        return new CatalogItem(semanticId, params);
    }
    createCertfication(semanticId, params) {
        return new Certfication(semanticId, params);
    }
    createCollection(semanticId, params) {
        return new Collection(semanticId, params);
    }
    createConcept(semanticId, params) {
        return new Concept(semanticId, params);
    }
    createConceptScheme(semanticId, params) {
        return new ConceptScheme(semanticId, params);
    }
    createConsumptionFlow(semanticId, params) {
        return new ConsumptionFlow(semanticId, params);
    }
    createCoordination(semanticId, params) {
        return new Coordination(semanticId, params);
    }
    createCustomerCategory(semanticId, params) {
        return new CustomerCategory(semanticId, params);
    }
    createDitributedRepresentation(semanticId, params) {
        return new DitributedRepresentation(semanticId, params);
    }
    createDefinedProduct(semanticId, params) {
        return new DefinedProduct(semanticId, params);
    }
    createDeliveryOption(semanticId, params) {
        return new DeliveryOption(semanticId, params);
    }
    createDeliveryStep(semanticId, params) {
        return new DeliveryStep(semanticId, params);
    }
    createEnterprise(semanticId, params) {
        return new Enterprise(semanticId, params);
    }
    createFeature(semanticId, params) {
        return new Feature(semanticId, params);
    }
    createFunctionalProduct(semanticId, params) {
        return new FunctionalProduct(semanticId, params);
    }
    createGeometry(semanticId, params) {
        return new Geometry(semanticId, params);
    }
    createHowSubject(semanticId, params) {
        return new HowSubject(semanticId, params);
    }
    createIndividual(semanticId, params) {
        return new Individual(semanticId, params);
    }
    createIngredient(semanticId, params) {
        return new Ingredient(semanticId, params);
    }
    createLabellingCharacteristic(semanticId, params) {
        return new LabellingCharacteristic(semanticId, params);
    }
    createLength(semanticId, params) {
        return new Length(semanticId, params);
    }
    createLocalizedProduct(semanticId, params) {
        return new LocalizedProduct(semanticId, params);
    }
    createNutrientCharacteristic(semanticId, params) {
        return new NutrientCharacteristic(semanticId, params);
    }
    createOffer(semanticId, params) {
        return new Offer(semanticId, params);
    }
    createOpeningHoursSpecification(semanticId, params) {
        return new OpeningHoursSpecification(semanticId, params);
    }
    createOrder(semanticId, params) {
        return new Order(semanticId, params);
    }
    createOrderLine(semanticId, params) {
        return new OrderLine(semanticId, params);
    }
    createOrganization(semanticId, params) {
        return new Organization(semanticId, params);
    }
    createPaymentMethod(semanticId, params) {
        return new PaymentMethod(semanticId, params);
    }
    createPerson(semanticId, params) {
        return new Person(semanticId, params);
    }
    createPhoneNumber(semanticId, params) {
        return new PhoneNumber(semanticId, params);
    }
    createPhysicalCharacteristic(semanticId, params) {
        return new PhysicalCharacteristic(semanticId, params);
    }
    createPhysicalPlace(semanticId, params) {
        return new PhysicalPlace(semanticId, params);
    }
    createPhysicalProduct(semanticId, params) {
        return new PhysicalProduct(semanticId, params);
    }
    createPickUpStep(semanticId, params) {
        return new PickUpStep(semanticId, params);
    }
    createPickupOption(semanticId, params) {
        return new PickupOption(semanticId, params);
    }
    createPlace(semanticId, params) {
        return new Place(semanticId, params);
    }
    createPlatform(semanticId, params) {
        return new Platform(semanticId, params);
    }
    createPoint(semanticId, params) {
        return new Point(semanticId, params);
    }
    createPolygon(semanticId, params) {
        return new Polygon(semanticId, params);
    }
    createPrice(semanticId, params) {
        return new Price(semanticId, params);
    }
    createProductBatch(semanticId, params) {
        return new ProductBatch(semanticId, params);
    }
    createProductOption(semanticId, params) {
        return new ProductOption(semanticId, params);
    }
    createProductOptionValue(semanticId, params) {
        return new ProductOptionValue(semanticId, params);
    }
    createProductionFlow(semanticId, params) {
        return new ProductionFlow(semanticId, params);
    }
    createProperties(semanticId, params) {
        return new Properties(semanticId, params);
    }
    createQuantitativeValue(semanticId, params) {
        return new QuantitativeValue(semanticId, params);
    }
    createRealStock(semanticId, params) {
        return new RealStock(semanticId, params);
    }
    createRepresentationPivot(semanticId, params) {
        return new RepresentationPivot(semanticId, params);
    }
    createRepresentedThing(semanticId, params) {
        return new RepresentedThing(semanticId, params);
    }
    createRoute(semanticId, params) {
        return new Route(semanticId, params);
    }
    createSaleSession(semanticId, params) {
        return new SaleSession(semanticId, params);
    }
    createShipment(semanticId, params) {
        return new Shipment(semanticId, params);
    }
    createShippingOption(semanticId, params) {
        return new ShippingOption(semanticId, params);
    }
    createSocialMedia(semanticId, params) {
        return new SocialMedia(semanticId, params);
    }
    createStep(semanticId, params) {
        return new Step(semanticId, params);
    }
    createStock(semanticId, params) {
        return new Stock(semanticId, params);
    }
    createSuppliedProduct(semanticId, params) {
        return new SuppliedProduct(semanticId, params);
    }
    createTechnicalProduct(semanticId, params) {
        return new TechnicalProduct(semanticId, params);
    }
    createTemperature(semanticId, params) {
        return new Temperature(semanticId, params);
    }
    createTemplateSaleSession(semanticId, params) {
        return new TemplateSaleSession(semanticId, params);
    }
    createTheoriticalStock(semanticId, params) {
        return new TheoriticalStock(semanticId, params);
    }
    createTransaction(semanticId, params) {
        return new Transaction(semanticId, params);
    }
    createTransformation(semanticId, params) {
        return new Transformation(semanticId, params);
    }
    createValueRECUR(semanticId, params) {
        return new ValueRECUR(semanticId, params);
    }
    createVariant(semanticId, params) {
        return new Variant(semanticId, params);
    }
    createVariantCaracteristic(semanticId, params) {
        return new VariantCaracteristic(semanticId, params);
    }
    createVehicle(semanticId, params) {
        return new Vehicle(semanticId, params);
    }
    createVevent(semanticId, params) {
        return new Vevent(semanticId, params);
    }
    createVirtualPlace(semanticId, params) {
        return new VirtualPlace(semanticId, params);
    }
    createVolume(semanticId, params) {
        return new Volume(semanticId, params);
    }
    createWeight(semanticId, params) {
        return new Weight(semanticId, params);
    }
    createWhatSubject(semanticId, params) {
        return new WhatSubject(semanticId, params);
    }
    createWhereSubject(semanticId, params) {
        return new WhereSubject(semanticId, params);
    }
    createWhoSubject(semanticId, params) {
        return new WhoSubject(semanticId, params);
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
