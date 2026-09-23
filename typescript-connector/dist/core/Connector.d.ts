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
export declare class Connector {
    static readonly ONTOLOGY_BASE_URL = "https://w3id.org/dfc/ontology";
    static readonly TAXONOMY_BASE_URL = "https://w3id.org/dfc/taxonomies";
    static readonly PREDICATE_MAP: Record<string, string>;
    static readonly TYPE_ALIASES: Record<string, string>;
    private static defaultContextUrl;
    static getDefaultContextUrl(): string;
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
    get contextUrl(): string;
    getContext(): Promise<Record<string, unknown>>;
    loadBundledContext(): Record<string, unknown> | null;
    loadFacets(jsonData: Record<string, unknown>): this;
    loadMeasures(jsonData: Record<string, unknown>): this;
    loadProductTypes(jsonData: Record<string, unknown>): this;
    loadVocabulary(name: string, jsonData: Record<string, unknown>): this;
    loadFacetsFromUrl(): Promise<this>;
    loadMeasuresFromUrl(): Promise<this>;
    loadProductTypesFromUrl(): Promise<this>;
    export(...objects: SemanticObject[]): Promise<string>;
    import(jsonLdData: string | Record<string, unknown>): SemanticObject[];
    private resolveReference;
    get facet(): Record<string, unknown>;
    get measure(): Record<string, unknown>;
    get product_type(): Record<string, unknown>;
    get scope(): Record<string, unknown>;
    get vocabulary_term(): Record<string, unknown>;
    createAddress(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AddressParams), params?: AddressParams): Address;
    createAgent(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AgentParams), params?: AgentParams): Agent;
    createAllergenCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AllergenCharacteristicParams), params?: AllergenCharacteristicParams): AllergenCharacteristic;
    createAsPlannedConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedConsumptionFlowParams), params?: AsPlannedConsumptionFlowParams): AsPlannedConsumptionFlow;
    createAsPlannedLocalConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalConsumptionFlowParams), params?: AsPlannedLocalConsumptionFlowParams): AsPlannedLocalConsumptionFlow;
    createAsPlannedLocalProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalProductionFlowParams), params?: AsPlannedLocalProductionFlowParams): AsPlannedLocalProductionFlow;
    createAsPlannedLocalTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedLocalTransformationParams), params?: AsPlannedLocalTransformationParams): AsPlannedLocalTransformation;
    createAsPlannedProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedProductionFlowParams), params?: AsPlannedProductionFlowParams): AsPlannedProductionFlow;
    createAsPlannedTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsPlannedTransformationParams), params?: AsPlannedTransformationParams): AsPlannedTransformation;
    createAsRealizedConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedConsumptionFlowParams), params?: AsRealizedConsumptionFlowParams): AsRealizedConsumptionFlow;
    createAsRealizedProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedProductionFlowParams), params?: AsRealizedProductionFlowParams): AsRealizedProductionFlow;
    createAsRealizedTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & AsRealizedTransformationParams), params?: AsRealizedTransformationParams): AsRealizedTransformation;
    createBrand(semanticIdOrArgs: string | ({
        semanticId: string;
    } & BrandParams), params?: BrandParams): Brand;
    createCatalog(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CatalogParams), params?: CatalogParams): Catalog;
    createCatalogItem(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CatalogItemParams), params?: CatalogItemParams): CatalogItem;
    createCertfication(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CertficationParams), params?: CertficationParams): Certfication;
    createCollection(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CollectionParams), params?: CollectionParams): Collection;
    createConcept(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConceptParams), params?: ConceptParams): Concept;
    createConceptScheme(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConceptSchemeParams), params?: ConceptSchemeParams): ConceptScheme;
    createConsumptionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ConsumptionFlowParams), params?: ConsumptionFlowParams): ConsumptionFlow;
    createCoordination(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CoordinationParams), params?: CoordinationParams): Coordination;
    createCustomerCategory(semanticIdOrArgs: string | ({
        semanticId: string;
    } & CustomerCategoryParams), params?: CustomerCategoryParams): CustomerCategory;
    createDitributedRepresentation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DitributedRepresentationParams), params?: DitributedRepresentationParams): DitributedRepresentation;
    createDefinedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DefinedProductParams), params?: DefinedProductParams): DefinedProduct;
    createDeliveryOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DeliveryOptionParams), params?: DeliveryOptionParams): DeliveryOption;
    createDeliveryStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & DeliveryStepParams), params?: DeliveryStepParams): DeliveryStep;
    createEnterprise(semanticIdOrArgs: string | ({
        semanticId: string;
    } & EnterpriseParams), params?: EnterpriseParams): Enterprise;
    createFeature(semanticIdOrArgs: string | ({
        semanticId: string;
    } & FeatureParams), params?: FeatureParams): Feature;
    createFunctionalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & FunctionalProductParams), params?: FunctionalProductParams): FunctionalProduct;
    createGeometry(semanticIdOrArgs: string | ({
        semanticId: string;
    } & GeometryParams), params?: GeometryParams): Geometry;
    createHowSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & HowSubjectParams), params?: HowSubjectParams): HowSubject;
    createIndividual(semanticIdOrArgs: string | ({
        semanticId: string;
    } & IndividualParams), params?: IndividualParams): Individual;
    createIngredient(semanticIdOrArgs: string | ({
        semanticId: string;
    } & IngredientParams), params?: IngredientParams): Ingredient;
    createLabellingCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LabellingCharacteristicParams), params?: LabellingCharacteristicParams): LabellingCharacteristic;
    createLength(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LengthParams), params?: LengthParams): Length;
    createLocalizedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & LocalizedProductParams), params?: LocalizedProductParams): LocalizedProduct;
    createNutrientCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & NutrientCharacteristicParams), params?: NutrientCharacteristicParams): NutrientCharacteristic;
    createOffer(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OfferParams), params?: OfferParams): Offer;
    createOpeningHoursSpecification(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OpeningHoursSpecificationParams), params?: OpeningHoursSpecificationParams): OpeningHoursSpecification;
    createOrder(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrderParams), params?: OrderParams): Order;
    createOrderLine(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrderLineParams), params?: OrderLineParams): OrderLine;
    createOrganization(semanticIdOrArgs: string | ({
        semanticId: string;
    } & OrganizationParams), params?: OrganizationParams): Organization;
    createPaymentMethod(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PaymentMethodParams), params?: PaymentMethodParams): PaymentMethod;
    createPerson(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PersonParams), params?: PersonParams): Person;
    createPhoneNumber(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhoneNumberParams), params?: PhoneNumberParams): PhoneNumber;
    createPhysicalCharacteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalCharacteristicParams), params?: PhysicalCharacteristicParams): PhysicalCharacteristic;
    createPhysicalPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalPlaceParams), params?: PhysicalPlaceParams): PhysicalPlace;
    createPhysicalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PhysicalProductParams), params?: PhysicalProductParams): PhysicalProduct;
    createPickUpStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PickUpStepParams), params?: PickUpStepParams): PickUpStep;
    createPickupOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PickupOptionParams), params?: PickupOptionParams): PickupOption;
    createPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PlaceParams), params?: PlaceParams): Place;
    createPlatform(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PlatformParams), params?: PlatformParams): Platform;
    createPoint(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PointParams), params?: PointParams): Point;
    createPolygon(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PolygonParams), params?: PolygonParams): Polygon;
    createPrice(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PriceParams), params?: PriceParams): Price;
    createProductBatch(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductBatchParams), params?: ProductBatchParams): ProductBatch;
    createProductOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductOptionParams), params?: ProductOptionParams): ProductOption;
    createProductOptionValue(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductOptionValueParams), params?: ProductOptionValueParams): ProductOptionValue;
    createProductionFlow(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ProductionFlowParams), params?: ProductionFlowParams): ProductionFlow;
    createProperties(semanticIdOrArgs: string | ({
        semanticId: string;
    } & PropertiesParams), params?: PropertiesParams): Properties;
    createQuantitativeValue(semanticIdOrArgs: string | ({
        semanticId: string;
    } & QuantitativeValueParams), params?: QuantitativeValueParams): QuantitativeValue;
    createRealStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RealStockParams), params?: RealStockParams): RealStock;
    createRepresentationPivot(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RepresentationPivotParams), params?: RepresentationPivotParams): RepresentationPivot;
    createRepresentedThing(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RepresentedThingParams), params?: RepresentedThingParams): RepresentedThing;
    createRoute(semanticIdOrArgs: string | ({
        semanticId: string;
    } & RouteParams), params?: RouteParams): Route;
    createSaleSession(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SaleSessionParams), params?: SaleSessionParams): SaleSession;
    createShipment(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ShipmentParams), params?: ShipmentParams): Shipment;
    createShippingOption(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ShippingOptionParams), params?: ShippingOptionParams): ShippingOption;
    createSocialMedia(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SocialMediaParams), params?: SocialMediaParams): SocialMedia;
    createStep(semanticIdOrArgs: string | ({
        semanticId: string;
    } & StepParams), params?: StepParams): Step;
    createStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & StockParams), params?: StockParams): Stock;
    createSuppliedProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & SuppliedProductParams), params?: SuppliedProductParams): SuppliedProduct;
    createTechnicalProduct(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TechnicalProductParams), params?: TechnicalProductParams): TechnicalProduct;
    createTemperature(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TemperatureParams), params?: TemperatureParams): Temperature;
    createTemplateSaleSession(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TemplateSaleSessionParams), params?: TemplateSaleSessionParams): TemplateSaleSession;
    createTheoriticalStock(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TheoriticalStockParams), params?: TheoriticalStockParams): TheoriticalStock;
    createTransaction(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TransactionParams), params?: TransactionParams): Transaction;
    createTransformation(semanticIdOrArgs: string | ({
        semanticId: string;
    } & TransformationParams), params?: TransformationParams): Transformation;
    createValueRECUR(semanticIdOrArgs: string | ({
        semanticId: string;
    } & ValueRECURParams), params?: ValueRECURParams): ValueRECUR;
    createVariant(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VariantParams), params?: VariantParams): Variant;
    createVariantCaracteristic(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VariantCaracteristicParams), params?: VariantCaracteristicParams): VariantCaracteristic;
    createVehicle(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VehicleParams), params?: VehicleParams): Vehicle;
    createVevent(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VeventParams), params?: VeventParams): Vevent;
    createVirtualPlace(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VirtualPlaceParams), params?: VirtualPlaceParams): VirtualPlace;
    createVolume(semanticIdOrArgs: string | ({
        semanticId: string;
    } & VolumeParams), params?: VolumeParams): Volume;
    createWeight(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WeightParams), params?: WeightParams): Weight;
    createWhatSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhatSubjectParams), params?: WhatSubjectParams): WhatSubject;
    createWhereSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhereSubjectParams), params?: WhereSubjectParams): WhereSubject;
    createWhoSubject(semanticIdOrArgs: string | ({
        semanticId: string;
    } & WhoSubjectParams), params?: WhoSubjectParams): WhoSubject;
    private fetchContext;
    private buildNestedHash;
    private predicateToPropName;
}
