<?php

/*
 * MIT License
 *
 * Copyright (c) 2024 Data Food Consortium
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

namespace DataFoodConsortium\Connector;

class Connector
{
    public const ONTOLOGY_BASE_URL = 'https://w3id.org/dfc/ontology';
    public const TAXONOMY_BASE_URL = 'https://w3id.org/dfc/taxonomies';
    public const DEFAULT_CONTEXT_URL = 'https://w3id.org/dfc/ontology/v2.0.0/context/context_2.0.0.json';

    // Maps original JSON-LD predicates (short-form, from slot aliases) to
    // PHP property names. Consulted before the local-name fallback on import.
    public const PREDICATE_MAP = [
        'http://www.w3.org/2002/12/cal/icaltzd#byday' => 'byday',
        'http://www.w3.org/2002/12/cal/icaltzd#bymonth' => 'bymonth',
        'http://www.w3.org/2002/12/cal/icaltzd#dtend' => 'dtend',
        'http://www.w3.org/2002/12/cal/icaltzd#dtstart' => 'dtstart',
        'http://www.w3.org/2002/12/cal/icaltzd#freq' => 'freq',
        'http://www.w3.org/2002/12/cal/icaltzd#interval' => 'interval',
        'https://purl.org/geojson/vocab#coordinates' => 'coordinates',
        'https://schema.org/dayOfWeek' => 'dayOfWeek',
        'https://schema.org/opens' => 'opens',
        'dfc-b:Image' => 'image',
        'dfc-b:URL' => 'url',
        'dfc-b:VATnumber' => 'vatNumber',
        'dfc-b:VATrate' => 'vatRate',
        'dfc-b:VATstatus' => 'vatStatus',
        'dfc-b:accessibilityInfo' => 'accessibilityInfo',
        'dfc-b:arrivalDate' => 'arrivalDate',
        'dfc-b:availabilityDate' => 'availabilityDate',
        'dfc-b:availabilityTime' => 'availabilityTime',
        'dfc-b:batchNumber' => 'batchNumber',
        'dfc-b:bestBeforeDate' => 'bestBeforeDate',
        'dfc-b:brand' => 'brandName',
        'dfc-b:certiferReference' => 'certiferReference',
        'dfc-b:certificationScore' => 'certificationScore',
        'dfc-b:city' => 'city',
        'dfc-b:claim' => 'claimText',
        'dfc-b:closes' => 'closes',
        'dfc-b:cost' => 'cost',
        'dfc-b:country' => 'countryName',
        'dfc-b:countryCode' => 'countryCode',
        'dfc-b:date' => 'date',
        'dfc-b:deliveryCondition' => 'deliveryCondition',
        'dfc-b:deliveryConstraint' => 'deliveryConstraint',
        'dfc-b:description' => 'description',
        'dfc-b:discount' => 'discount',
        'dfc-b:duration' => 'duration',
        'dfc-b:email' => 'email',
        'dfc-b:endDate' => 'endDate',
        'dfc-b:enterpriseID' => 'enterpriseId',
        'dfc-b:expiryDate' => 'expiryDate',
        'dfc-b:extraAvailabilityTime' => 'extraAvailabilityTime',
        'dfc-b:extraDeliveryCondition' => 'extraDeliveryCondition',
        'dfc-b:familyName' => 'familyName',
        'dfc-b:fee' => 'fee',
        'dfc-b:firstName' => 'firstName',
        'dfc-b:frozen' => 'frozen',
        'dfc-b:hasPercentageOfAlcoholByVolume' => 'percentageOfAlcoholByVolume',
        'dfc-b:invoiceNumber' => 'invoiceNumber',
        'dfc-b:latitude' => 'latitude',
        'dfc-b:lifetime' => 'lifetime',
        'dfc-b:logo' => 'logo',
        'dfc-b:longitude' => 'longitude',
        'dfc-b:marginPercent' => 'marginPercent',
        'dfc-b:maxValue' => 'maxValue',
        'dfc-b:minValue' => 'minValue',
        'dfc-b:name' => 'name',
        'dfc-b:operatorId' => 'operatorId',
        'dfc-b:orderNumber' => 'orderNumber',
        'dfc-b:paymentMethodProvider' => 'paymentMethodProvider',
        'dfc-b:paymentMethodType' => 'paymentMethodType',
        'dfc-b:phoneNumber' => 'phoneNumber',
        'dfc-b:physicalCharacteristics' => 'physicalCharacteristics',
        'dfc-b:postcode' => 'postcode',
        'dfc-b:productionDate' => 'productionDate',
        'dfc-b:quantity' => 'quantityValue',
        'dfc-b:refrigerated' => 'refrigerated',
        'dfc-b:region' => 'region',
        'dfc-b:sku' => 'sku',
        'dfc-b:specificCondition' => 'specificCondition',
        'dfc-b:startDate' => 'startDate',
        'dfc-b:stockLimitation' => 'stockLimitation',
        'dfc-b:street' => 'street',
        'dfc-b:totalTheoriticalStock' => 'totalTheoriticalStock',
        'dfc-b:value' => 'value',
        'dfc-b:websitePage' => 'websitePage',
        'http://www.w3.org/2002/12/cal/icaltzd#rrule' => 'rrule',
        'skos:broader' => 'broader',
        'skos:inScheme' => 'inScheme',
        'skos:narrower' => 'narrower',
        'https://purl.org/geojson/vocab#geometry' => 'geometry',
        'https://purl.org/geojson/vocab#properties' => 'properties',
        'dfc-b:DFC_BusinessOntology_ObjectProperty' => 'dFCBusinessOntologyObjectProperty',
        'dfc-b:DFC_Interface_Property' => 'dFCInterfaceProperty',
        'dfc-b:addressOf' => 'addressOf',
        'dfc-b:affiliatedTo' => 'affiliatedTo',
        'dfc-b:affiliates' => 'affiliates',
        'dfc-b:allergenCharacteristicOf' => 'allergenCharacteristicOf',
        'dfc-b:basedAt' => 'basedAt',
        'dfc-b:belongsTo' => 'belongsTo',
        'dfc-b:brandOf' => 'brandOf',
        'dfc-b:certificateOf' => 'certificateOf',
        'dfc-b:certifies' => 'certifies',
        'dfc-b:characteristicOf' => 'characteristicOf',
        'dfc-b:claimOf' => 'claimOf',
        'dfc-b:composedOf' => 'composedOf',
        'dfc-b:composes' => 'composes',
        'dfc-b:concernedBy' => 'concernedBy',
        'dfc-b:concerns' => 'concerns',
        'dfc-b:constituedBy' => 'constituedBy',
        'dfc-b:constitutes' => 'constitutes',
        'dfc-b:consumedBy' => 'consumedBy',
        'dfc-b:consumes' => 'consumes',
        'dfc-b:containerInformationOf' => 'containerInformationOf',
        'dfc-b:coordinatedBy' => 'coordinatedBy',
        'dfc-b:definedBy' => 'definedBy',
        'dfc-b:defines' => 'defines',
        'dfc-b:deliveredAt' => 'deliveredAt',
        'dfc-b:delivery' => 'delivery',
        'dfc-b:endsAt' => 'endsAt',
        'dfc-b:facetOf' => 'facetOf',
        'dfc-b:from' => 'from',
        'dfc-b:fulfills' => 'fulfills',
        'dfc-b:geographicalOriginOf' => 'geographicalOriginOf',
        'dfc-b:hasAddress' => 'address',
        'dfc-b:hasAllergenCharacteristic' => 'allergenCharacteristic',
        'dfc-b:hasAllergenDimension' => 'allergenDimension',
        'dfc-b:hasBrand' => 'brand',
        'dfc-b:hasCertification' => 'certification',
        'dfc-b:hasCharacteristic' => 'characteristic',
        'dfc-b:hasClaim' => 'claim',
        'dfc-b:hasContainerInformation' => 'containerInformation',
        'dfc-b:hasCountry' => 'country',
        'dfc-b:hasDimension' => 'dimension',
        'dfc-b:hasFacet' => 'facet',
        'dfc-b:hasFulfilmentStatus' => 'fulfilmentStatus',
        'dfc-b:hasGeoJsonFeature' => 'geoJsonFeature',
        'dfc-b:hasGeographicalOrigin' => 'geographicalOrigin',
        'dfc-b:hasIngredient' => 'ingredient',
        'dfc-b:hasInput' => 'input',
        'dfc-b:hasLabellingCharacteristic' => 'labellingCharacteristic',
        'dfc-b:hasLabellingDimension' => 'labellingDimension',
        'dfc-b:hasMainContact' => 'mainContact',
        'dfc-b:hasMember' => 'member',
        'dfc-b:hasNatureOrigin' => 'natureOrigin',
        'dfc-b:hasNutrientCharacteristic' => 'nutrientCharacteristic',
        'dfc-b:hasNutrientDimension' => 'nutrientDimension',
        'dfc-b:hasObject' => 'object',
        'dfc-b:hasOffer' => 'offer',
        'dfc-b:hasOption' => 'option',
        'dfc-b:hasOrderStatus' => 'orderStatus',
        'dfc-b:hasOutput' => 'output',
        'dfc-b:hasPart' => 'part',
        'dfc-b:hasPartOrigin' => 'partOrigin',
        'dfc-b:hasPaymentMethod' => 'paymentMethod',
        'dfc-b:hasPaymentStatus' => 'paymentStatus',
        'dfc-b:hasPhoneNumber' => 'phoneNumber',
        'dfc-b:hasPhysicalCharacteristic' => 'physicalCharacteristic',
        'dfc-b:hasPhysicalDimension' => 'physicalDimension',
        'dfc-b:hasPrice' => 'price',
        'dfc-b:hasProductOption' => 'productOption',
        'dfc-b:hasProductOptionValue' => 'productOptionValue',
        'dfc-b:hasQuantity' => 'quantity',
        'dfc-b:hasReference' => 'reference',
        'dfc-b:hasReferenceProductOption' => 'referenceProductOption',
        'dfc-b:hasReferenceProductOptionValue' => 'referenceProductOptionValue',
        'dfc-b:hasSocialMedia' => 'socialMedia',
        'dfc-b:hasStatus' => 'status',
        'dfc-b:hasStep' => 'step',
        'dfc-b:hasTemperature' => 'temperature',
        'dfc-b:hasTemplateSaleSession' => 'templateSaleSession',
        'dfc-b:hasTransformationType' => 'transformationType',
        'dfc-b:hasType' => 'type',
        'dfc-b:hasUnit' => 'unit',
        'dfc-b:hasVariant' => 'variant',
        'dfc-b:hasVariantCaracteristic' => 'variantCaracteristic',
        'dfc-b:holds' => 'holds',
        'dfc-b:hostedAt' => 'hostedAt',
        'dfc-b:hosts' => 'hosts',
        'dfc-b:identifiedBy' => 'identifiedBy',
        'dfc-b:identifies' => 'identifies',
        'dfc-b:industrializedBy' => 'industrializedBy',
        'dfc-b:industrializes' => 'industrializes',
        'dfc-b:inputOf' => 'inputOf',
        'dfc-b:isAvailableDuring' => 'isAvailableDuring',
        'dfc-b:isCertifiedBy' => 'isCertifiedBy',
        'dfc-b:isFulfilledBy' => 'isFulfilledBy',
        'dfc-b:isIngredientOf' => 'isIngredientOf',
        'dfc-b:isMemberOf' => 'isMemberOf',
        'dfc-b:isOpenDuring' => 'isOpenDuring',
        'dfc-b:isPriceOf' => 'isPriceOf',
        'dfc-b:isShippedIn' => 'isShippedIn',
        'dfc-b:isStepOf' => 'isStepOf',
        'dfc-b:isTemperatureOf' => 'isTemperatureOf',
        'dfc-b:isTemplateSaleSessionOf' => 'isTemplateSaleSessionOf',
        'dfc-b:isVariantOf' => 'isVariantOf',
        'dfc-b:labellingCharacteristicOf' => 'labellingCharacteristicOf',
        'dfc-b:listedIn' => 'listedIn',
        'dfc-b:lists' => 'lists',
        'dfc-b:localizedBy' => 'localizedBy',
        'dfc-b:localizes' => 'localizes',
        'dfc-b:mainContactOf' => 'mainContactOf',
        'dfc-b:maintainedBy' => 'maintainedBy',
        'dfc-b:maintains' => 'maintains',
        'dfc-b:managedBy' => 'managedBy',
        'dfc-b:manages' => 'manages',
        'dfc-b:natureOriginOf' => 'natureOriginOf',
        'dfc-b:nutrientCharacteristicOf' => 'nutrientCharacteristicOf',
        'dfc-b:objectOf' => 'objectOf',
        'dfc-b:offeredThrough' => 'offeredThrough',
        'dfc-b:offers' => 'offers',
        'dfc-b:offersTo' => 'offersTo',
        'dfc-b:optionOf' => 'optionOf',
        'dfc-b:orderedBy' => 'orderedBy',
        'dfc-b:orders' => 'orders',
        'dfc-b:outputOf' => 'outputOf',
        'dfc-b:ownedBy' => 'ownedBy',
        'dfc-b:owns' => 'owns',
        'dfc-b:paidWith' => 'paidWith',
        'dfc-b:partOf' => 'partOf',
        'dfc-b:partOriginOf' => 'partOriginOf',
        'dfc-b:phoneNumberOf' => 'phoneNumberOf',
        'dfc-b:physicalCharacteristicOf' => 'physicalCharacteristicOf',
        'dfc-b:pickUp' => 'pickUp',
        'dfc-b:pickedUpAt' => 'pickedUpAt',
        'dfc-b:processOf' => 'processOf',
        'dfc-b:producedBy' => 'producedBy',
        'dfc-b:produces' => 'produces',
        'dfc-b:proposedBy' => 'proposedBy',
        'dfc-b:proposes' => 'proposes',
        'dfc-b:referenceOf' => 'referenceOf',
        'dfc-b:referencedBy' => 'referencedBy',
        'dfc-b:references' => 'references',
        'dfc-b:refersTo' => 'refersTo',
        'dfc-b:representedBy' => 'representedBy',
        'dfc-b:represents' => 'represents',
        'dfc-b:requestedBy' => 'requestedBy',
        'dfc-b:requests' => 'requests',
        'dfc-b:satisfiedBy' => 'satisfiedBy',
        'dfc-b:satisfies' => 'satisfies',
        'dfc-b:selectedBy' => 'selectedBy',
        'dfc-b:selects' => 'selects',
        'dfc-b:sells' => 'sells',
        'dfc-b:ships' => 'ships',
        'dfc-b:socialMediaOf' => 'socialMediaOf',
        'dfc-b:soldBy' => 'soldBy',
        'dfc-b:startsAt' => 'startsAt',
        'dfc-b:storedIn' => 'storedIn',
        'dfc-b:stores' => 'stores',
        'dfc-b:suppliedBy' => 'suppliedBy',
        'dfc-b:supplies' => 'supplies',
        'dfc-b:suppliesTo' => 'suppliesTo',
        'dfc-b:to' => 'to',
        'dfc-b:tracedBy' => 'tracedBy',
        'dfc-b:traces' => 'traces',
        'dfc-b:transformedBy' => 'transformedBy',
        'dfc-b:transforms' => 'transforms',
        'dfc-b:transportedBy' => 'transportedBy',
        'dfc-b:transports' => 'transports',
        'dfc-b:typeOf' => 'typeOf',
        'dfc-b:useVehicle' => 'useVehicle',
        'dfc-b:usedInRoute' => 'usedInRoute',
        'dfc-b:uses' => 'uses',
        'dfc-b:DFC_TechnicalOntology_ObjectProperty' => 'dFCTechnicalOntologyObjectProperty',
        'dfc-t:hasPivot' => 'pivot',
        'dfc-t:hostedBy' => 'hostedBy',
        'dfc-t:represent' => 'represent',
    ];

    // Legacy type aliases, derived from the schema (DFC v2.0 renamed
    // Enterprise to Organization).
    public const TYPE_ALIASES = [
        'dfc-b:Enterprise' => 'dfc-b:Organization',
    ];

    // Bare slot renames (mirrors BARE_SLOT_OVERRIDES) for the
    // predicateToPropName fallback.
    public const BARE_OVERRIDES = [
        'brand' => 'brandName',
        'claim' => 'claimText',
        'country' => 'countryName',
        'quantity' => 'quantityValue',
    ];

    private string $ontologyVersion;
    private string $taxonomyVersion;
    private ?array $contextCache = null;
    private array $facets = [];
    private array $measures = [];
    private array $productTypes = [];
    private array $otherVocabularies = [];

    // Bundled v2.0.0 taxonomies are loaded unconditionally by design — the
    // connector ships only that version offline. Callers requesting a
    // different taxonomyVersion must override via load* methods.
    public function __construct(string $ontologyVersion = '2.0.0', string $taxonomyVersion = '2.0.0')
    {
        $this->ontologyVersion = $ontologyVersion;
        $this->taxonomyVersion = $taxonomyVersion;
        $this->registerTypes();
        $this->loadBundledTaxonomies();
    }

    public function registerTypes(): void
    {
        SemanticObject::registerType('dfc-b:Address', Address::class);
        SemanticObject::registerType('dfc-b:Agent', Agent::class);
        SemanticObject::registerType('dfc-b:AllergenCharacteristic', AllergenCharacteristic::class);
        SemanticObject::registerType('dfc-b:AsPlannedConsumptionFlow', AsPlannedConsumptionFlow::class);
        SemanticObject::registerType('dfc-b:AsPlannedLocalConsumptionFlow', AsPlannedLocalConsumptionFlow::class);
        SemanticObject::registerType('dfc-b:AsPlannedLocalProductionFlow', AsPlannedLocalProductionFlow::class);
        SemanticObject::registerType('dfc-b:AsPlannedLocalTransformation', AsPlannedLocalTransformation::class);
        SemanticObject::registerType('dfc-b:AsPlannedProductionFlow', AsPlannedProductionFlow::class);
        SemanticObject::registerType('dfc-b:AsPlannedTransformation', AsPlannedTransformation::class);
        SemanticObject::registerType('dfc-b:AsRealizedConsumptionFlow', AsRealizedConsumptionFlow::class);
        SemanticObject::registerType('dfc-b:AsRealizedProductionFlow', AsRealizedProductionFlow::class);
        SemanticObject::registerType('dfc-b:AsRealizedTransformation', AsRealizedTransformation::class);
        SemanticObject::registerType('dfc-b:Brand', Brand::class);
        SemanticObject::registerType('dfc-b:Catalog', Catalog::class);
        SemanticObject::registerType('dfc-b:CatalogItem', CatalogItem::class);
        SemanticObject::registerType('dfc-b:Certfication', Certfication::class);
        SemanticObject::registerType('dfc-b:Collection', Collection::class);
        SemanticObject::registerType('dfc-b:Concept', Concept::class);
        SemanticObject::registerType('dfc-b:ConceptScheme', ConceptScheme::class);
        SemanticObject::registerType('dfc-b:ConsumptionFlow', ConsumptionFlow::class);
        SemanticObject::registerType('dfc-b:Coordination', Coordination::class);
        SemanticObject::registerType('dfc-b:CustomerCategory', CustomerCategory::class);
        SemanticObject::registerType('dfc-b:DFC_DitributedRepresentation', DitributedRepresentation::class);
        SemanticObject::registerType('dfc-b:DefinedProduct', DefinedProduct::class);
        SemanticObject::registerType('dfc-b:DeliveryOption', DeliveryOption::class);
        SemanticObject::registerType('dfc-b:DeliveryStep', DeliveryStep::class);
        SemanticObject::registerType('dfc-b:Enterprise', Enterprise::class);
        SemanticObject::registerType('dfc-b:Feature', Feature::class);
        SemanticObject::registerType('dfc-b:FunctionalProduct', FunctionalProduct::class);
        SemanticObject::registerType('dfc-b:Geometry', Geometry::class);
        SemanticObject::registerType('dfc-b:How_Subject', HowSubject::class);
        SemanticObject::registerType('dfc-b:Individual', Individual::class);
        SemanticObject::registerType('dfc-b:Ingredient', Ingredient::class);
        SemanticObject::registerType('dfc-b:LabellingCharacteristic', LabellingCharacteristic::class);
        SemanticObject::registerType('dfc-b:Length', Length::class);
        SemanticObject::registerType('dfc-b:LocalizedProduct', LocalizedProduct::class);
        SemanticObject::registerType('dfc-b:NutrientCharacteristic', NutrientCharacteristic::class);
        SemanticObject::registerType('dfc-b:Offer', Offer::class);
        SemanticObject::registerType('dfc-b:OpeningHoursSpecification', OpeningHoursSpecification::class);
        SemanticObject::registerType('dfc-b:Order', Order::class);
        SemanticObject::registerType('dfc-b:OrderLine', OrderLine::class);
        SemanticObject::registerType('dfc-b:Organization', Organization::class);
        SemanticObject::registerType('dfc-b:PaymentMethod', PaymentMethod::class);
        SemanticObject::registerType('dfc-b:Person', Person::class);
        SemanticObject::registerType('dfc-b:PhoneNumber', PhoneNumber::class);
        SemanticObject::registerType('dfc-b:PhysicalCharacteristic', PhysicalCharacteristic::class);
        SemanticObject::registerType('dfc-b:PhysicalPlace', PhysicalPlace::class);
        SemanticObject::registerType('dfc-b:PhysicalProduct', PhysicalProduct::class);
        SemanticObject::registerType('dfc-b:PickUpStep', PickUpStep::class);
        SemanticObject::registerType('dfc-b:PickupOption', PickupOption::class);
        SemanticObject::registerType('dfc-b:Place', Place::class);
        SemanticObject::registerType('dfc-b:Platform', Platform::class);
        SemanticObject::registerType('dfc-b:Point', Point::class);
        SemanticObject::registerType('dfc-b:Polygon', Polygon::class);
        SemanticObject::registerType('dfc-b:Price', Price::class);
        SemanticObject::registerType('dfc-b:ProductBatch', ProductBatch::class);
        SemanticObject::registerType('dfc-b:ProductOption', ProductOption::class);
        SemanticObject::registerType('dfc-b:ProductOptionValue', ProductOptionValue::class);
        SemanticObject::registerType('dfc-b:ProductionFlow', ProductionFlow::class);
        SemanticObject::registerType('dfc-b:Properties', Properties::class);
        SemanticObject::registerType('dfc-b:QuantitativeValue', QuantitativeValue::class);
        SemanticObject::registerType('dfc-b:RealStock', RealStock::class);
        SemanticObject::registerType('dfc-b:RepresentationPivot', RepresentationPivot::class);
        SemanticObject::registerType('dfc-b:RepresentedThing', RepresentedThing::class);
        SemanticObject::registerType('dfc-b:Route', Route::class);
        SemanticObject::registerType('dfc-b:SaleSession', SaleSession::class);
        SemanticObject::registerType('dfc-b:Shipment', Shipment::class);
        SemanticObject::registerType('dfc-b:ShippingOption', ShippingOption::class);
        SemanticObject::registerType('dfc-b:SocialMedia', SocialMedia::class);
        SemanticObject::registerType('dfc-b:Step', Step::class);
        SemanticObject::registerType('dfc-b:Stock', Stock::class);
        SemanticObject::registerType('dfc-b:SuppliedProduct', SuppliedProduct::class);
        SemanticObject::registerType('dfc-b:TechnicalProduct', TechnicalProduct::class);
        SemanticObject::registerType('dfc-b:Temperature', Temperature::class);
        SemanticObject::registerType('dfc-b:TemplateSaleSession', TemplateSaleSession::class);
        SemanticObject::registerType('dfc-b:TheoriticalStock', TheoriticalStock::class);
        SemanticObject::registerType('dfc-b:Transaction', Transaction::class);
        SemanticObject::registerType('dfc-b:Transformation', Transformation::class);
        SemanticObject::registerType('dfc-b:Value_RECUR', ValueRECUR::class);
        SemanticObject::registerType('dfc-b:Variant', Variant::class);
        SemanticObject::registerType('dfc-b:VariantCaracteristic', VariantCaracteristic::class);
        SemanticObject::registerType('dfc-b:Vehicle', Vehicle::class);
        SemanticObject::registerType('dfc-b:Vevent', Vevent::class);
        SemanticObject::registerType('dfc-b:VirtualPlace', VirtualPlace::class);
        SemanticObject::registerType('dfc-b:Volume', Volume::class);
        SemanticObject::registerType('dfc-b:Weight', Weight::class);
        SemanticObject::registerType('dfc-b:What_Subject', WhatSubject::class);
        SemanticObject::registerType('dfc-b:Where_Subject', WhereSubject::class);
        SemanticObject::registerType('dfc-b:Who_Subject', WhoSubject::class);
    }

    public function getContextUrl(): string
    {
        return self::ONTOLOGY_BASE_URL . '/v' . $this->ontologyVersion . '/context/context_' . $this->ontologyVersion . '.json';
    }

    public function loadBundledTaxonomies(): static
    {
        foreach (['Facet' => 'facet', 'Measure' => 'measure', 'ProductType' => 'product_type', 'Scope' => 'scope', 'VocabularyTerm' => 'vocabulary_term'] as $name => $file) {
            $path = __DIR__ . '/../vocabularies/' . $file . '.jsonld';
            if (!is_file($path)) continue;
            $data = json_decode(@file_get_contents($path), true);
            if (!is_array($data)) continue;
            if ($name === 'Facet') $this->loadFacets($data);
            elseif ($name === 'Measure') $this->loadMeasures($data);
            elseif ($name === 'ProductType') $this->loadProductTypes($data);
            else $this->loadVocabulary($name, $data);
        }
        return $this;
    }

    public function loadFacets(array $jsonData): static
    {
        $concepts = $this->extractConcepts($jsonData);
        $this->facets = $this->buildNestedHash($concepts);
        $this->otherVocabularies['Facet'] = $this->facets;
        return $this;
    }

    public function loadMeasures(array $jsonData): static
    {
        $concepts = $this->extractConcepts($jsonData);
        $this->measures = $this->buildNestedHash($concepts);
        $this->otherVocabularies['Measure'] = $this->measures;
        return $this;
    }

    public function loadProductTypes(array $jsonData): static
    {
        $concepts = $this->extractConcepts($jsonData);
        $this->productTypes = $this->buildNestedHash($concepts);
        $this->otherVocabularies['ProductType'] = $this->productTypes;
        return $this;
    }

    public function loadVocabulary(string $name, array $jsonData): static
    {
        $concepts = $this->extractConcepts($jsonData);
        $this->otherVocabularies[$name] = $this->buildNestedHash($concepts);
        return $this;
    }

    // Export objects to a JSON-LD string. Predicates are already original
    // CURIEs, so no compaction step is needed; the context is emitted as a
    // URL string (never inlined).
    public function export(SemanticObject ...$objects): string
    {
        if (count($objects) === 1) {
            $doc = $objects[0]->toJsonLd(null);
        } else {
            $doc = ['@graph' => []];
            foreach ($objects as $obj) {
                $doc['@graph'][] = $obj->toJsonLd(null);
            }
        }
        $doc['@context'] = $this->getContextUrl();
        return json_encode($doc, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    // Import JSON-LD (array or JSON string) and return SemanticObject
    // instances — always an array, even for a single @graph entry.
    // Resolves @id references within the same document (shallow).
    public function import(array|string $data): array
    {
        if (is_string($data)) {
            $decoded = json_decode($data, true);
            $data = is_array($decoded) ? $decoded : [];
        }
        $entries = $data['@graph'] ?? [$data];
        // A single top-level object without @graph arrives wrapped above;
        // a bare list of entries is used as-is.
        if (array_is_list($data)) {
            $entries = $data;
        }
        $objectsById = [];
        $instances = [];

        foreach ($entries as $entry) {
            if (!is_array($entry)) continue;
            $semanticId = $entry['@id'] ?? null;
            $rawType = $entry['@type'] ?? null;
            $semanticType = null;
            if (is_array($rawType)) {
                foreach ($rawType as $t) {
                    if (is_string($t) && !str_starts_with($t, '@')) {
                        $semanticType = $t;
                        break;
                    }
                }
            } else {
                $semanticType = $rawType;
            }
            if (!$semanticId || !$semanticType) continue;

            $semanticType = self::TYPE_ALIASES[$semanticType] ?? $semanticType;
            $className = SemanticObject::getTypeRegistry()[$semanticType] ?? null;
            if (!$className) continue;

            if (is_string($className) && class_exists($className)) {
                $obj = new $className($semanticId);
                $objectsById[$semanticId] = $obj;
                $instances[] = $obj;
            }
        }

        foreach ($entries as $entry) {
            if (!is_array($entry)) continue;
            $semanticId = $entry['@id'] ?? null;
            if (!$semanticId) continue;
            $obj = $objectsById[$semanticId] ?? null;
            if (!$obj) continue;

            foreach ($entry as $key => $value) {
                if (str_starts_with($key, '@')) continue;
                $propName = $this->predicateToPropName($key);
                $setter = 'set' . ucfirst($propName);
                $adder = 'add' . ucfirst($propName);

                // Prefer the setter: it stores the resolved value as-is, so
                // scalars stay scalars and lists stay lists (same shapes the
                // TS/Ruby connectors emit).
                if (method_exists($obj, $setter)) {
                    if (is_array($value) && array_is_list($value)) {
                        $obj->$setter(array_map(
                            fn($v) => $this->resolveReference($v, $objectsById),
                            $value
                        ));
                    } else {
                        $obj->$setter($this->resolveReference($value, $objectsById));
                    }
                } elseif (method_exists($obj, $adder) && is_array($value) && array_is_list($value)) {
                    foreach ($value as $v) {
                        $obj->$adder($this->resolveReference($v, $objectsById));
                    }
                }
            }
        }

        return $instances;
    }

    public function getFacets(): array { return $this->facets; }
    public function getMeasures(): array { return $this->measures; }
    public function getProductTypes(): array { return $this->productTypes; }
    public function getFacet(): array { return $this->otherVocabularies['Facet'] ?? []; }
    public function getMeasure(): array { return $this->otherVocabularies['Measure'] ?? []; }
    public function getProductType(): array { return $this->otherVocabularies['ProductType'] ?? []; }
    public function getScope(): array { return $this->otherVocabularies['Scope'] ?? []; }
    public function getVocabularyTerm(): array { return $this->otherVocabularies['VocabularyTerm'] ?? []; }

    public function getContext(): ?array
    {
        if ($this->contextCache === null) {
            $this->contextCache = $this->loadBundledContext() ?? $this->fetchContext();
        }
        return $this->contextCache;
    }

    // Returns the JSON-LD context shipped with the connector for the current
    // ontology version, or null so the caller falls back to the network.
    public function loadBundledContext(): ?array
    {
        $path = __DIR__ . '/../contexts/context_' . $this->ontologyVersion . '.json';
        if (!is_file($path)) return null;
        $data = json_decode(@file_get_contents($path), true);
        return is_array($data) ? $data : null;
    }

    private function resolveReference(mixed $value, array $objectsById): mixed
    {
        if (is_string($value) && (str_starts_with($value, 'http') || str_starts_with($value, '/') || str_starts_with($value, '_:'))) {
            return $objectsById[$value] ?? $value;
        }
        if (is_array($value) && isset($value['@id']) && is_string($value['@id'])) {
            return $objectsById[$value['@id']] ?? $value;
        }
        return $value;
    }

    private function extractConcepts(array $jsonData): array
    {
        $concepts = [];
        $graph = $jsonData['@graph'] ?? [];
        foreach ($graph as $entry) {
            $types = $entry['@type'] ?? [];
            if (is_string($types)) $types = [$types];
            $isConcept = false;
            foreach ((array) $types as $t) {
                if ($t === 'skos:Concept' || $t === 'http://www.w3.org/2004/02/skos/core#Concept') {
                    $isConcept = true;
                    break;
                }
            }
            if (!$isConcept) continue;
            $notation = $this->extractConceptKey($entry);
            if ($notation !== null) {
                $concepts[$notation] = $entry;
            }
        }
        return $concepts;
    }

    private function extractConceptKey(array $entry): ?string
    {
        $candidates = ['skos:notation', 'http://www.w3.org/2004/02/skos/core#notation', 'skos:prefLabel', 'http://www.w3.org/2004/02/skos/core#prefLabel'];
        foreach ($candidates as $field) {
            if (!isset($entry[$field])) continue;
            $value = $entry[$field];
            if (is_string($value)) return $value;
            if (is_array($value)) {
                foreach ($value as $item) {
                    if (is_string($item)) return $item;
                    if (is_array($item) && isset($item['@value']) && is_string($item['@value'])) {
                        return $item['@value'];
                    }
                }
            }
        }
        return null;
    }

    private function fetchContext(): ?array
    {
        $url = $this->getContextUrl();
        $json = @file_get_contents($url);
        if ($json === false) {
            return null;
        }
        $data = json_decode($json, true);
        return is_array($data) ? $data : null;
    }

    private function buildNestedHash(array $concepts): array
    {
        $result = [];
        foreach ($concepts as $key => $concept) {
            $parts = preg_split('/[_\s]+/', (string) $key);
            $current = &$result;
            foreach ($parts as $i => $part) {
                $normalized = preg_replace('/[^a-z0-9]/', '_', strtolower($part));
                if ($i === count($parts) - 1) {
                    $current[$normalized] = $concept;
                } else {
                    if (!isset($current[$normalized])) {
                        $current[$normalized] = [];
                    }
                    $current = &$current[$normalized];
                }
            }
        }
        return $result;
    }

    private function predicateToPropName(string $predicate): string
    {
        if (isset(self::PREDICATE_MAP[$predicate])) {
            return self::PREDICATE_MAP[$predicate];
        }
        // Fallback: extract the local name from any CURIE or URI.
        $name = $predicate;
        if (($i = strrpos($name, '#')) !== false) {
            $name = substr($name, $i + 1);
        } elseif (($i = strrpos($name, ':')) !== false) {
            $name = substr($name, $i + 1);
        }
        $isHas = str_starts_with($name, 'has_') || (str_starts_with($name, 'has') && strlen($name) > 3 && ctype_upper($name[3]));
        if (!$isHas) {
            $snake = strtolower(preg_replace('/(?<!^)(?=[A-Z])/', '_', $name));
            $snake = ltrim($snake, '_');
            if (isset(self::BARE_OVERRIDES[$snake])) {
                return self::BARE_OVERRIDES[$snake];
            }
        } else {
            if (str_starts_with($name, 'has_')) {
                $name = substr($name, 4);
            } else {
                $name = substr($name, 3);
            }
        }
        $name = preg_replace_callback('/_([a-z])/', fn($m) => strtoupper($m[1]), $name);
        return lcfirst($name);
    }
    
    public function createAddress(string $semanticId, array $params = []): Address
    {
        return new Address($semanticId, $params);
}

    public function createAgent(string $semanticId, array $params = []): Agent
    {
        return new Agent($semanticId, $params);
}

    public function createAllergenCharacteristic(string $semanticId, array $params = []): AllergenCharacteristic
    {
        return new AllergenCharacteristic($semanticId, $params);
}

    public function createAsPlannedConsumptionFlow(string $semanticId, array $params = []): AsPlannedConsumptionFlow
    {
        return new AsPlannedConsumptionFlow($semanticId, $params);
}

    public function createAsPlannedLocalConsumptionFlow(string $semanticId, array $params = []): AsPlannedLocalConsumptionFlow
    {
        return new AsPlannedLocalConsumptionFlow($semanticId, $params);
}

    public function createAsPlannedLocalProductionFlow(string $semanticId, array $params = []): AsPlannedLocalProductionFlow
    {
        return new AsPlannedLocalProductionFlow($semanticId, $params);
}

    public function createAsPlannedLocalTransformation(string $semanticId, array $params = []): AsPlannedLocalTransformation
    {
        return new AsPlannedLocalTransformation($semanticId, $params);
}

    public function createAsPlannedProductionFlow(string $semanticId, array $params = []): AsPlannedProductionFlow
    {
        return new AsPlannedProductionFlow($semanticId, $params);
}

    public function createAsPlannedTransformation(string $semanticId, array $params = []): AsPlannedTransformation
    {
        return new AsPlannedTransformation($semanticId, $params);
}

    public function createAsRealizedConsumptionFlow(string $semanticId, array $params = []): AsRealizedConsumptionFlow
    {
        return new AsRealizedConsumptionFlow($semanticId, $params);
}

    public function createAsRealizedProductionFlow(string $semanticId, array $params = []): AsRealizedProductionFlow
    {
        return new AsRealizedProductionFlow($semanticId, $params);
}

    public function createAsRealizedTransformation(string $semanticId, array $params = []): AsRealizedTransformation
    {
        return new AsRealizedTransformation($semanticId, $params);
}

    public function createBrand(string $semanticId, array $params = []): Brand
    {
        return new Brand($semanticId, $params);
}

    public function createCatalog(string $semanticId, array $params = []): Catalog
    {
        return new Catalog($semanticId, $params);
}

    public function createCatalogItem(string $semanticId, array $params = []): CatalogItem
    {
        return new CatalogItem($semanticId, $params);
}

    public function createCertfication(string $semanticId, array $params = []): Certfication
    {
        return new Certfication($semanticId, $params);
}

    public function createCollection(string $semanticId, array $params = []): Collection
    {
        return new Collection($semanticId, $params);
}

    public function createConcept(string $semanticId, array $params = []): Concept
    {
        return new Concept($semanticId, $params);
}

    public function createConceptScheme(string $semanticId, array $params = []): ConceptScheme
    {
        return new ConceptScheme($semanticId, $params);
}

    public function createConsumptionFlow(string $semanticId, array $params = []): ConsumptionFlow
    {
        return new ConsumptionFlow($semanticId, $params);
}

    public function createCoordination(string $semanticId, array $params = []): Coordination
    {
        return new Coordination($semanticId, $params);
}

    public function createCustomerCategory(string $semanticId, array $params = []): CustomerCategory
    {
        return new CustomerCategory($semanticId, $params);
}

    public function createDitributedRepresentation(string $semanticId, array $params = []): DitributedRepresentation
    {
        return new DitributedRepresentation($semanticId, $params);
}

    public function createDefinedProduct(string $semanticId, array $params = []): DefinedProduct
    {
        return new DefinedProduct($semanticId, $params);
}

    public function createDeliveryOption(string $semanticId, array $params = []): DeliveryOption
    {
        return new DeliveryOption($semanticId, $params);
}

    public function createDeliveryStep(string $semanticId, array $params = []): DeliveryStep
    {
        return new DeliveryStep($semanticId, $params);
}

    public function createEnterprise(string $semanticId, array $params = []): Enterprise
    {
        return new Enterprise($semanticId, $params);
}

    public function createFeature(string $semanticId, array $params = []): Feature
    {
        return new Feature($semanticId, $params);
}

    public function createFunctionalProduct(string $semanticId, array $params = []): FunctionalProduct
    {
        return new FunctionalProduct($semanticId, $params);
}

    public function createGeometry(string $semanticId, array $params = []): Geometry
    {
        return new Geometry($semanticId, $params);
}

    public function createHowSubject(string $semanticId, array $params = []): HowSubject
    {
        return new HowSubject($semanticId, $params);
}

    public function createIndividual(string $semanticId, array $params = []): Individual
    {
        return new Individual($semanticId, $params);
}

    public function createIngredient(string $semanticId, array $params = []): Ingredient
    {
        return new Ingredient($semanticId, $params);
}

    public function createLabellingCharacteristic(string $semanticId, array $params = []): LabellingCharacteristic
    {
        return new LabellingCharacteristic($semanticId, $params);
}

    public function createLength(string $semanticId, array $params = []): Length
    {
        return new Length($semanticId, $params);
}

    public function createLocalizedProduct(string $semanticId, array $params = []): LocalizedProduct
    {
        return new LocalizedProduct($semanticId, $params);
}

    public function createNutrientCharacteristic(string $semanticId, array $params = []): NutrientCharacteristic
    {
        return new NutrientCharacteristic($semanticId, $params);
}

    public function createOffer(string $semanticId, array $params = []): Offer
    {
        return new Offer($semanticId, $params);
}

    public function createOpeningHoursSpecification(string $semanticId, array $params = []): OpeningHoursSpecification
    {
        return new OpeningHoursSpecification($semanticId, $params);
}

    public function createOrder(string $semanticId, array $params = []): Order
    {
        return new Order($semanticId, $params);
}

    public function createOrderLine(string $semanticId, array $params = []): OrderLine
    {
        return new OrderLine($semanticId, $params);
}

    public function createOrganization(string $semanticId, array $params = []): Organization
    {
        return new Organization($semanticId, $params);
}

    public function createPaymentMethod(string $semanticId, array $params = []): PaymentMethod
    {
        return new PaymentMethod($semanticId, $params);
}

    public function createPerson(string $semanticId, array $params = []): Person
    {
        return new Person($semanticId, $params);
}

    public function createPhoneNumber(string $semanticId, array $params = []): PhoneNumber
    {
        return new PhoneNumber($semanticId, $params);
}

    public function createPhysicalCharacteristic(string $semanticId, array $params = []): PhysicalCharacteristic
    {
        return new PhysicalCharacteristic($semanticId, $params);
}

    public function createPhysicalPlace(string $semanticId, array $params = []): PhysicalPlace
    {
        return new PhysicalPlace($semanticId, $params);
}

    public function createPhysicalProduct(string $semanticId, array $params = []): PhysicalProduct
    {
        return new PhysicalProduct($semanticId, $params);
}

    public function createPickUpStep(string $semanticId, array $params = []): PickUpStep
    {
        return new PickUpStep($semanticId, $params);
}

    public function createPickupOption(string $semanticId, array $params = []): PickupOption
    {
        return new PickupOption($semanticId, $params);
}

    public function createPlace(string $semanticId, array $params = []): Place
    {
        return new Place($semanticId, $params);
}

    public function createPlatform(string $semanticId, array $params = []): Platform
    {
        return new Platform($semanticId, $params);
}

    public function createPoint(string $semanticId, array $params = []): Point
    {
        return new Point($semanticId, $params);
}

    public function createPolygon(string $semanticId, array $params = []): Polygon
    {
        return new Polygon($semanticId, $params);
}

    public function createPrice(string $semanticId, array $params = []): Price
    {
        return new Price($semanticId, $params);
}

    public function createProductBatch(string $semanticId, array $params = []): ProductBatch
    {
        return new ProductBatch($semanticId, $params);
}

    public function createProductOption(string $semanticId, array $params = []): ProductOption
    {
        return new ProductOption($semanticId, $params);
}

    public function createProductOptionValue(string $semanticId, array $params = []): ProductOptionValue
    {
        return new ProductOptionValue($semanticId, $params);
}

    public function createProductionFlow(string $semanticId, array $params = []): ProductionFlow
    {
        return new ProductionFlow($semanticId, $params);
}

    public function createProperties(string $semanticId, array $params = []): Properties
    {
        return new Properties($semanticId, $params);
}

    public function createQuantitativeValue(string $semanticId, array $params = []): QuantitativeValue
    {
        return new QuantitativeValue($semanticId, $params);
}

    public function createRealStock(string $semanticId, array $params = []): RealStock
    {
        return new RealStock($semanticId, $params);
}

    public function createRepresentationPivot(string $semanticId, array $params = []): RepresentationPivot
    {
        return new RepresentationPivot($semanticId, $params);
}

    public function createRepresentedThing(string $semanticId, array $params = []): RepresentedThing
    {
        return new RepresentedThing($semanticId, $params);
}

    public function createRoute(string $semanticId, array $params = []): Route
    {
        return new Route($semanticId, $params);
}

    public function createSaleSession(string $semanticId, array $params = []): SaleSession
    {
        return new SaleSession($semanticId, $params);
}

    public function createShipment(string $semanticId, array $params = []): Shipment
    {
        return new Shipment($semanticId, $params);
}

    public function createShippingOption(string $semanticId, array $params = []): ShippingOption
    {
        return new ShippingOption($semanticId, $params);
}

    public function createSocialMedia(string $semanticId, array $params = []): SocialMedia
    {
        return new SocialMedia($semanticId, $params);
}

    public function createStep(string $semanticId, array $params = []): Step
    {
        return new Step($semanticId, $params);
}

    public function createStock(string $semanticId, array $params = []): Stock
    {
        return new Stock($semanticId, $params);
}

    public function createSuppliedProduct(string $semanticId, array $params = []): SuppliedProduct
    {
        return new SuppliedProduct($semanticId, $params);
}

    public function createTechnicalProduct(string $semanticId, array $params = []): TechnicalProduct
    {
        return new TechnicalProduct($semanticId, $params);
}

    public function createTemperature(string $semanticId, array $params = []): Temperature
    {
        return new Temperature($semanticId, $params);
}

    public function createTemplateSaleSession(string $semanticId, array $params = []): TemplateSaleSession
    {
        return new TemplateSaleSession($semanticId, $params);
}

    public function createTheoriticalStock(string $semanticId, array $params = []): TheoriticalStock
    {
        return new TheoriticalStock($semanticId, $params);
}

    public function createTransaction(string $semanticId, array $params = []): Transaction
    {
        return new Transaction($semanticId, $params);
}

    public function createTransformation(string $semanticId, array $params = []): Transformation
    {
        return new Transformation($semanticId, $params);
}

    public function createValueRECUR(string $semanticId, array $params = []): ValueRECUR
    {
        return new ValueRECUR($semanticId, $params);
}

    public function createVariant(string $semanticId, array $params = []): Variant
    {
        return new Variant($semanticId, $params);
}

    public function createVariantCaracteristic(string $semanticId, array $params = []): VariantCaracteristic
    {
        return new VariantCaracteristic($semanticId, $params);
}

    public function createVehicle(string $semanticId, array $params = []): Vehicle
    {
        return new Vehicle($semanticId, $params);
}

    public function createVevent(string $semanticId, array $params = []): Vevent
    {
        return new Vevent($semanticId, $params);
}

    public function createVirtualPlace(string $semanticId, array $params = []): VirtualPlace
    {
        return new VirtualPlace($semanticId, $params);
}

    public function createVolume(string $semanticId, array $params = []): Volume
    {
        return new Volume($semanticId, $params);
}

    public function createWeight(string $semanticId, array $params = []): Weight
    {
        return new Weight($semanticId, $params);
}

    public function createWhatSubject(string $semanticId, array $params = []): WhatSubject
    {
        return new WhatSubject($semanticId, $params);
}

    public function createWhereSubject(string $semanticId, array $params = []): WhereSubject
    {
        return new WhereSubject($semanticId, $params);
}

    public function createWhoSubject(string $semanticId, array $params = []): WhoSubject
    {
        return new WhoSubject($semanticId, $params);
}

}
