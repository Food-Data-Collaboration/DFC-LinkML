import { SemanticObject } from "./SemanticObject.js";
import { VocabularyLoader } from "./VocabularyLoader.js";
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
export declare class Connector {
    static readonly ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
    static readonly TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";
    /** Maps each original DFC predicate to the property name used here. */
    static readonly PREDICATE_MAP: Record<string, string>;
    /**
     * Maps legacy DFC type predicates onto their current names.
     *
     * DFC v2.0 renamed `Enterprise` to `Organization`; documents using the old
     * name still import cleanly.
     */
    static readonly TYPE_ALIASES: Record<string, string>;
    private static defaultContextUrl;
    /** The `@context` URL used when none is supplied on export. */
    static getDefaultContextUrl(): string;
    /** Overrides the default `@context` URL for this process. */
    static setDefaultContextUrl(url: string): void;
    readonly ontologyVersion: string;
    readonly taxonomyVersion: string;
    readonly vocabLoader: VocabularyLoader;
    private contextCache;
    private facets;
    private measures;
    private productTypes;
    private otherVocabularies;
    constructor(params?: {
        ontologyVersion?: string;
        taxonomyVersion?: string;
    });
    loadBundledTaxonomies(): this;
    /** The `@context` URL for this connector's ontology version. */
    get contextUrl(): string;
    /**
     * The JSON-LD context used for compaction.
     *
     * Prefers the context bundled with the package, so this resolves without
     * network access for the default ontology version.
     */
    getContext(): Promise<Record<string, unknown>>;
    loadBundledContext(): Record<string, unknown> | null;
    /** Replaces the `Facet` vocabulary from SKOS JSON-LD data. */
    loadFacets(jsonData: Record<string, unknown>): this;
    /** Replaces the `Measure` vocabulary from SKOS JSON-LD data. */
    loadMeasures(jsonData: Record<string, unknown>): this;
    /** Replaces the `ProductType` vocabulary from SKOS JSON-LD data. */
    loadProductTypes(jsonData: Record<string, unknown>): this;
    loadVocabulary(name: string, jsonData: Record<string, unknown>): this;
    loadFacetsFromUrl(): Promise<this>;
    loadMeasuresFromUrl(): Promise<this>;
    loadProductTypesFromUrl(): Promise<this>;
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
    export(...objects: SemanticObject[]): Promise<string>;
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
    import(jsonLdData: string | Record<string, unknown>): SemanticObject[];
    private resolveReference;
    get facet(): Record<string, unknown>;
    get measure(): Record<string, unknown>;
    get product_type(): Record<string, unknown>;
    get scope(): Record<string, unknown>;
    get vocabulary_term(): Record<string, unknown>;
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
    createAddress(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AddressParams), params?: AddressParams): Address;
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
    createAgent(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AgentParams), params?: AgentParams): Agent;
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
    createAllergenCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AllergenCharacteristicParams), params?: AllergenCharacteristicParams): AllergenCharacteristic;
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
    createAsPlannedConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedConsumptionFlowParams), params?: AsPlannedConsumptionFlowParams): AsPlannedConsumptionFlow;
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
    createAsPlannedLocalConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalConsumptionFlowParams), params?: AsPlannedLocalConsumptionFlowParams): AsPlannedLocalConsumptionFlow;
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
    createAsPlannedLocalProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalProductionFlowParams), params?: AsPlannedLocalProductionFlowParams): AsPlannedLocalProductionFlow;
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
    createAsPlannedLocalTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalTransformationParams), params?: AsPlannedLocalTransformationParams): AsPlannedLocalTransformation;
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
    createAsPlannedProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedProductionFlowParams), params?: AsPlannedProductionFlowParams): AsPlannedProductionFlow;
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
    createAsPlannedTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedTransformationParams), params?: AsPlannedTransformationParams): AsPlannedTransformation;
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
    createAsRealizedConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedConsumptionFlowParams), params?: AsRealizedConsumptionFlowParams): AsRealizedConsumptionFlow;
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
    createAsRealizedProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedProductionFlowParams), params?: AsRealizedProductionFlowParams): AsRealizedProductionFlow;
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
    createAsRealizedTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedTransformationParams), params?: AsRealizedTransformationParams): AsRealizedTransformation;
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
    createBrand(semanticIdOrArgs: string | ({
        semanticId: string;
    } & BrandParams), params?: BrandParams): Brand;
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
    createCatalog(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CatalogParams), params?: CatalogParams): Catalog;
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
    createCatalogItem(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CatalogItemParams), params?: CatalogItemParams): CatalogItem;
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
    createCertfication(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CertficationParams), params?: CertficationParams): Certfication;
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
    createCollection(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CollectionParams), params?: CollectionParams): Collection;
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
    createConcept(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConceptParams), params?: ConceptParams): Concept;
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
    createConceptScheme(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConceptSchemeParams), params?: ConceptSchemeParams): ConceptScheme;
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
    createConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConsumptionFlowParams), params?: ConsumptionFlowParams): ConsumptionFlow;
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
    createCoordination(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CoordinationParams), params?: CoordinationParams): Coordination;
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
    createCustomerCategory(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CustomerCategoryParams), params?: CustomerCategoryParams): CustomerCategory;
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
    createDitributedRepresentation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DitributedRepresentationParams), params?: DitributedRepresentationParams): DitributedRepresentation;
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
    createDefinedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DefinedProductParams), params?: DefinedProductParams): DefinedProduct;
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
    createDeliveryOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DeliveryOptionParams), params?: DeliveryOptionParams): DeliveryOption;
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
    createDeliveryStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DeliveryStepParams), params?: DeliveryStepParams): DeliveryStep;
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
    createEnterprise(semanticIdOrArgs: string | ({
        semanticId: string;
    } & EnterpriseParams), params?: EnterpriseParams): Enterprise;
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
    createFeature(semanticIdOrArgs: string | ({
        semanticId: string;
    } & FeatureParams), params?: FeatureParams): Feature;
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
    createFunctionalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & FunctionalProductParams), params?: FunctionalProductParams): FunctionalProduct;
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
    createGeometry(semanticIdOrArgs: string | ({
        semanticId: string;
    } & GeometryParams), params?: GeometryParams): Geometry;
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
    createHowSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & HowSubjectParams), params?: HowSubjectParams): HowSubject;
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
    createIndividual(semanticIdOrArgs: string | ({
        semanticId: string;
    } & IndividualParams), params?: IndividualParams): Individual;
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
    createIngredient(semanticIdOrArgs: string | ({
        semanticId: string;
    } & IngredientParams), params?: IngredientParams): Ingredient;
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
    createLabellingCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LabellingCharacteristicParams), params?: LabellingCharacteristicParams): LabellingCharacteristic;
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
    createLength(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LengthParams), params?: LengthParams): Length;
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
    createLocalizedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LocalizedProductParams), params?: LocalizedProductParams): LocalizedProduct;
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
    createNutrientCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & NutrientCharacteristicParams), params?: NutrientCharacteristicParams): NutrientCharacteristic;
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
    createOffer(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OfferParams), params?: OfferParams): Offer;
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
    createOpeningHoursSpecification(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OpeningHoursSpecificationParams), params?: OpeningHoursSpecificationParams): OpeningHoursSpecification;
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
    createOrder(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrderParams), params?: OrderParams): Order;
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
    createOrderLine(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrderLineParams), params?: OrderLineParams): OrderLine;
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
    createOrganization(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrganizationParams), params?: OrganizationParams): Organization;
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
    createPaymentMethod(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PaymentMethodParams), params?: PaymentMethodParams): PaymentMethod;
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
    createPerson(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PersonParams), params?: PersonParams): Person;
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
    createPhoneNumber(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhoneNumberParams), params?: PhoneNumberParams): PhoneNumber;
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
    createPhysicalCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalCharacteristicParams), params?: PhysicalCharacteristicParams): PhysicalCharacteristic;
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
    createPhysicalPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalPlaceParams), params?: PhysicalPlaceParams): PhysicalPlace;
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
    createPhysicalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalProductParams), params?: PhysicalProductParams): PhysicalProduct;
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
    createPickUpStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PickUpStepParams), params?: PickUpStepParams): PickUpStep;
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
    createPickupOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PickupOptionParams), params?: PickupOptionParams): PickupOption;
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
    createPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PlaceParams), params?: PlaceParams): Place;
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
    createPlatform(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PlatformParams), params?: PlatformParams): Platform;
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
    createPoint(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PointParams), params?: PointParams): Point;
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
    createPolygon(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PolygonParams), params?: PolygonParams): Polygon;
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
    createPrice(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PriceParams), params?: PriceParams): Price;
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
    createProductBatch(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductBatchParams), params?: ProductBatchParams): ProductBatch;
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
    createProductOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductOptionParams), params?: ProductOptionParams): ProductOption;
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
    createProductOptionValue(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductOptionValueParams), params?: ProductOptionValueParams): ProductOptionValue;
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
    createProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductionFlowParams), params?: ProductionFlowParams): ProductionFlow;
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
    createProperties(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PropertiesParams), params?: PropertiesParams): Properties;
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
    createQuantitativeValue(semanticIdOrArgs: string | ({
        semanticId: string;
    } & QuantitativeValueParams), params?: QuantitativeValueParams): QuantitativeValue;
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
    createRealStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RealStockParams), params?: RealStockParams): RealStock;
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
    createRepresentationPivot(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RepresentationPivotParams), params?: RepresentationPivotParams): RepresentationPivot;
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
    createRepresentedThing(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RepresentedThingParams), params?: RepresentedThingParams): RepresentedThing;
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
    createRoute(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RouteParams), params?: RouteParams): Route;
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
    createSaleSession(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SaleSessionParams), params?: SaleSessionParams): SaleSession;
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
    createShipment(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ShipmentParams), params?: ShipmentParams): Shipment;
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
    createShippingOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ShippingOptionParams), params?: ShippingOptionParams): ShippingOption;
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
    createSocialMedia(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SocialMediaParams), params?: SocialMediaParams): SocialMedia;
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
    createStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & StepParams), params?: StepParams): Step;
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
    createStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & StockParams), params?: StockParams): Stock;
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
    createSuppliedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SuppliedProductParams), params?: SuppliedProductParams): SuppliedProduct;
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
    createTechnicalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TechnicalProductParams), params?: TechnicalProductParams): TechnicalProduct;
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
    createTemperature(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TemperatureParams), params?: TemperatureParams): Temperature;
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
    createTemplateSaleSession(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TemplateSaleSessionParams), params?: TemplateSaleSessionParams): TemplateSaleSession;
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
    createTheoriticalStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TheoriticalStockParams), params?: TheoriticalStockParams): TheoriticalStock;
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
    createTransaction(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TransactionParams), params?: TransactionParams): Transaction;
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
    createTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TransformationParams), params?: TransformationParams): Transformation;
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
    createValueRECUR(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ValueRECURParams), params?: ValueRECURParams): ValueRECUR;
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
    createVariant(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VariantParams), params?: VariantParams): Variant;
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
    createVariantCaracteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VariantCaracteristicParams), params?: VariantCaracteristicParams): VariantCaracteristic;
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
    createVehicle(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VehicleParams), params?: VehicleParams): Vehicle;
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
    createVevent(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VeventParams), params?: VeventParams): Vevent;
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
    createVirtualPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VirtualPlaceParams), params?: VirtualPlaceParams): VirtualPlace;
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
    createVolume(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VolumeParams), params?: VolumeParams): Volume;
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
    createWeight(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WeightParams), params?: WeightParams): Weight;
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
    createWhatSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhatSubjectParams), params?: WhatSubjectParams): WhatSubject;
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
    createWhereSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhereSubjectParams), params?: WhereSubjectParams): WhereSubject;
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
    createWhoSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhoSubjectParams), params?: WhoSubjectParams): WhoSubject;
    private fetchContext;
    private buildNestedHash;
    private predicateToPropName;
}
