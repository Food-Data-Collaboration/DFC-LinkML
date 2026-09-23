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
        this.otherVocabularies.set("Facet", this.facets);
        return this;
    }
    loadMeasures(jsonData) {
        this.vocabLoader.load("Measure", jsonData);
        this.measures = this.buildNestedHash(this.vocabLoader.vocabulary("Measure"));
        this.otherVocabularies.set("Measure", this.measures);
        return this;
    }
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
    createAddress(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Address(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Address(semanticId, rest);
    }
    createAgent(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Agent(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Agent(semanticId, rest);
    }
    createAllergenCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AllergenCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AllergenCharacteristic(semanticId, rest);
    }
    createAsPlannedConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedConsumptionFlow(semanticId, rest);
    }
    createAsPlannedLocalConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalConsumptionFlow(semanticId, rest);
    }
    createAsPlannedLocalProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalProductionFlow(semanticId, rest);
    }
    createAsPlannedLocalTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedLocalTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedLocalTransformation(semanticId, rest);
    }
    createAsPlannedProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedProductionFlow(semanticId, rest);
    }
    createAsPlannedTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsPlannedTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsPlannedTransformation(semanticId, rest);
    }
    createAsRealizedConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedConsumptionFlow(semanticId, rest);
    }
    createAsRealizedProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedProductionFlow(semanticId, rest);
    }
    createAsRealizedTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new AsRealizedTransformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new AsRealizedTransformation(semanticId, rest);
    }
    createBrand(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Brand(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Brand(semanticId, rest);
    }
    createCatalog(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Catalog(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Catalog(semanticId, rest);
    }
    createCatalogItem(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new CatalogItem(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new CatalogItem(semanticId, rest);
    }
    createCertfication(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Certfication(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Certfication(semanticId, rest);
    }
    createCollection(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Collection(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Collection(semanticId, rest);
    }
    createConcept(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Concept(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Concept(semanticId, rest);
    }
    createConceptScheme(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ConceptScheme(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ConceptScheme(semanticId, rest);
    }
    createConsumptionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ConsumptionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ConsumptionFlow(semanticId, rest);
    }
    createCoordination(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Coordination(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Coordination(semanticId, rest);
    }
    createCustomerCategory(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new CustomerCategory(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new CustomerCategory(semanticId, rest);
    }
    createDitributedRepresentation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DitributedRepresentation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DitributedRepresentation(semanticId, rest);
    }
    createDefinedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DefinedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DefinedProduct(semanticId, rest);
    }
    createDeliveryOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DeliveryOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DeliveryOption(semanticId, rest);
    }
    createDeliveryStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new DeliveryStep(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new DeliveryStep(semanticId, rest);
    }
    createEnterprise(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Enterprise(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Enterprise(semanticId, rest);
    }
    createFeature(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Feature(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Feature(semanticId, rest);
    }
    createFunctionalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new FunctionalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new FunctionalProduct(semanticId, rest);
    }
    createGeometry(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Geometry(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Geometry(semanticId, rest);
    }
    createHowSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new HowSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new HowSubject(semanticId, rest);
    }
    createIndividual(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Individual(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Individual(semanticId, rest);
    }
    createIngredient(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Ingredient(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Ingredient(semanticId, rest);
    }
    createLabellingCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new LabellingCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new LabellingCharacteristic(semanticId, rest);
    }
    createLength(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Length(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Length(semanticId, rest);
    }
    createLocalizedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new LocalizedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new LocalizedProduct(semanticId, rest);
    }
    createNutrientCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new NutrientCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new NutrientCharacteristic(semanticId, rest);
    }
    createOffer(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Offer(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Offer(semanticId, rest);
    }
    createOpeningHoursSpecification(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new OpeningHoursSpecification(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new OpeningHoursSpecification(semanticId, rest);
    }
    createOrder(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Order(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Order(semanticId, rest);
    }
    createOrderLine(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new OrderLine(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new OrderLine(semanticId, rest);
    }
    createOrganization(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Organization(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Organization(semanticId, rest);
    }
    createPaymentMethod(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PaymentMethod(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PaymentMethod(semanticId, rest);
    }
    createPerson(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Person(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Person(semanticId, rest);
    }
    createPhoneNumber(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhoneNumber(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhoneNumber(semanticId, rest);
    }
    createPhysicalCharacteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalCharacteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalCharacteristic(semanticId, rest);
    }
    createPhysicalPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalPlace(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalPlace(semanticId, rest);
    }
    createPhysicalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PhysicalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PhysicalProduct(semanticId, rest);
    }
    createPickUpStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PickUpStep(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PickUpStep(semanticId, rest);
    }
    createPickupOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new PickupOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new PickupOption(semanticId, rest);
    }
    createPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Place(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Place(semanticId, rest);
    }
    createPlatform(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Platform(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Platform(semanticId, rest);
    }
    createPoint(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Point(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Point(semanticId, rest);
    }
    createPolygon(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Polygon(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Polygon(semanticId, rest);
    }
    createPrice(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Price(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Price(semanticId, rest);
    }
    createProductBatch(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductBatch(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductBatch(semanticId, rest);
    }
    createProductOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductOption(semanticId, rest);
    }
    createProductOptionValue(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductOptionValue(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductOptionValue(semanticId, rest);
    }
    createProductionFlow(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ProductionFlow(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ProductionFlow(semanticId, rest);
    }
    createProperties(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Properties(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Properties(semanticId, rest);
    }
    createQuantitativeValue(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new QuantitativeValue(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new QuantitativeValue(semanticId, rest);
    }
    createRealStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RealStock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RealStock(semanticId, rest);
    }
    createRepresentationPivot(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RepresentationPivot(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RepresentationPivot(semanticId, rest);
    }
    createRepresentedThing(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new RepresentedThing(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new RepresentedThing(semanticId, rest);
    }
    createRoute(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Route(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Route(semanticId, rest);
    }
    createSaleSession(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SaleSession(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SaleSession(semanticId, rest);
    }
    createShipment(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Shipment(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Shipment(semanticId, rest);
    }
    createShippingOption(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ShippingOption(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ShippingOption(semanticId, rest);
    }
    createSocialMedia(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SocialMedia(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SocialMedia(semanticId, rest);
    }
    createStep(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Step(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Step(semanticId, rest);
    }
    createStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Stock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Stock(semanticId, rest);
    }
    createSuppliedProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new SuppliedProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new SuppliedProduct(semanticId, rest);
    }
    createTechnicalProduct(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TechnicalProduct(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TechnicalProduct(semanticId, rest);
    }
    createTemperature(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Temperature(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Temperature(semanticId, rest);
    }
    createTemplateSaleSession(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TemplateSaleSession(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TemplateSaleSession(semanticId, rest);
    }
    createTheoriticalStock(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new TheoriticalStock(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new TheoriticalStock(semanticId, rest);
    }
    createTransaction(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Transaction(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Transaction(semanticId, rest);
    }
    createTransformation(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Transformation(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Transformation(semanticId, rest);
    }
    createValueRECUR(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new ValueRECUR(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new ValueRECUR(semanticId, rest);
    }
    createVariant(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Variant(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Variant(semanticId, rest);
    }
    createVariantCaracteristic(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new VariantCaracteristic(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new VariantCaracteristic(semanticId, rest);
    }
    createVehicle(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Vehicle(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Vehicle(semanticId, rest);
    }
    createVevent(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Vevent(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Vevent(semanticId, rest);
    }
    createVirtualPlace(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new VirtualPlace(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new VirtualPlace(semanticId, rest);
    }
    createVolume(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Volume(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Volume(semanticId, rest);
    }
    createWeight(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new Weight(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new Weight(semanticId, rest);
    }
    createWhatSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhatSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhatSubject(semanticId, rest);
    }
    createWhereSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhereSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhereSubject(semanticId, rest);
    }
    createWhoSubject(semanticIdOrArgs, params) {
        if (typeof semanticIdOrArgs === "string") {
            return new WhoSubject(semanticIdOrArgs, params);
        }
        const { semanticId, ...rest } = semanticIdOrArgs;
        return new WhoSubject(semanticId, rest);
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
