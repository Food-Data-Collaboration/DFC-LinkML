import { SemanticObject } from "./SemanticObject.js";
import { VocabularyLoader } from "./VocabularyLoader.js";
import { JsonLdSerializer } from "./JsonLdSerializer.js";
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
        this.vocabLoader = new VocabularyLoader(this.taxonomyVersion);
    }
    get contextUrl() {
        return `${Connector.ONTOLOGY_BASE_URL}/v$this.ontologyVersion/context/context_${this.ontologyVersion}.json`;
    }
    async getContext() {
        if (!this.contextCache) {
            this.contextCache = await this.fetchContext();
        }
        return this.contextCache;
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
            // Context fetch failed — export without @context
        }
        return new JsonLdSerializer(context).serialize(...objects);
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
            const semanticType = entry["@type"];
            if (!semanticId || !semanticType)
                continue;
            const Klass = SemanticObject.typeRegistry.get(semanticType);
            if (!Klass)
                continue;
            const obj = new Klass(semanticId);
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
                    obj[propName] = value.map((v) => typeof v === "string" && (v.startsWith("http") || v.startsWith("/"))
                        ? (objectsById.get(v) || v)
                        : v);
                }
                else if (typeof value === "string" && (value.startsWith("http") || value.startsWith("/"))) {
                    obj[propName] = objectsById.get(value) || value;
                }
                else {
                    obj[propName] = value;
                }
            }
        }
        return instances.length === 1 ? instances[0] : instances;
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
        const response = await fetch(this.contextUrl);
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
        let name = predicate.replace(/^dfc-b:/, "");
        if (name.startsWith("has")) {
            name = name.slice(3);
        }
        name = name.charAt(0).toLowerCase() + name.slice(1);
        return name;
    }
}
