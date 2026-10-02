# DFC classes

Every class in the DFC Business Ontology, generated from the LinkML schema
(`2.0.0` DFC version, ontology
`v2.0.0`).

89 classes, 30 of them roots of a hierarchy. Property
counts include everything inherited, so a leaf class still shows the
properties it gets from its ancestors.

## Roots

[`AllergenCharacteristic`](AllergenCharacteristic.md), [`CatalogItem`](CatalogItem.md), [`Collection`](Collection.md), [`Concept`](Concept.md), [`ConceptScheme`](ConceptScheme.md), [`ConsumptionFlow`](ConsumptionFlow.md), [`Coordination`](Coordination.md), [`DFC_DitributedRepresentation`](DFC_DitributedRepresentation.md), [`Feature`](Feature.md), [`Geometry`](Geometry.md), [`How_Subject`](How_Subject.md), [`Individual`](Individual.md), [`LabellingCharacteristic`](LabellingCharacteristic.md), [`NutrientCharacteristic`](NutrientCharacteristic.md), [`Offer`](Offer.md), [`OpeningHoursSpecification`](OpeningHoursSpecification.md), [`Order`](Order.md), [`OrderLine`](OrderLine.md), [`PhysicalCharacteristic`](PhysicalCharacteristic.md), [`ProductionFlow`](ProductionFlow.md), [`Properties`](Properties.md), [`SaleSession`](SaleSession.md), [`Shipment`](Shipment.md), [`Stock`](Stock.md), [`TemplateSaleSession`](TemplateSaleSession.md), [`Value_RECUR`](Value_RECUR.md), [`Vevent`](Vevent.md), [`What_Subject`](What_Subject.md), [`Where_Subject`](Where_Subject.md), [`Who_Subject`](Who_Subject.md)

## All classes

| Class | Parents | Properties |
|---|---|---|
| [`Address`](Address.md) | `Where_Subject` → `Address` | 9 |
| [`Agent`](Agent.md) | `Who_Subject` → `Agent` | 12 |
| [`AllergenCharacteristic`](AllergenCharacteristic.md) | `AllergenCharacteristic` | 2 |
| [`AsPlannedConsumptionFlow`](AsPlannedConsumptionFlow.md) | `ConsumptionFlow` → `AsPlannedConsumptionFlow` | 4 |
| [`AsPlannedLocalConsumptionFlow`](AsPlannedLocalConsumptionFlow.md) | `ConsumptionFlow` → `AsPlannedLocalConsumptionFlow` | 4 |
| [`AsPlannedLocalProductionFlow`](AsPlannedLocalProductionFlow.md) | `ProductionFlow` → `AsPlannedLocalProductionFlow` | 4 |
| [`AsPlannedLocalTransformation`](AsPlannedLocalTransformation.md) | `How_Subject` → `Transformation` → `AsPlannedLocalTransformation` | 6 |
| [`AsPlannedProductionFlow`](AsPlannedProductionFlow.md) | `ProductionFlow` → `AsPlannedProductionFlow` | 4 |
| [`AsPlannedTransformation`](AsPlannedTransformation.md) | `How_Subject` → `Transformation` → `AsPlannedTransformation` | 3 |
| [`AsRealizedConsumptionFlow`](AsRealizedConsumptionFlow.md) | `ConsumptionFlow` → `AsRealizedConsumptionFlow` | 4 |
| [`AsRealizedProductionFlow`](AsRealizedProductionFlow.md) | `ProductionFlow` → `AsRealizedProductionFlow` | 4 |
| [`AsRealizedTransformation`](AsRealizedTransformation.md) | `How_Subject` → `Transformation` → `AsRealizedTransformation` | 5 |
| [`Brand`](Brand.md) | `What_Subject` → `Brand` | 2 |
| [`Catalog`](Catalog.md) | `Where_Subject` → `Catalog` | 4 |
| [`CatalogItem`](CatalogItem.md) | `CatalogItem` | 8 |
| [`Certfication`](Certfication.md) | `What_Subject` → `Certfication` | 4 |
| [`Collection`](Collection.md) | `Collection` | 0 |
| [`Concept`](Concept.md) | `Concept` | 7 |
| [`ConceptScheme`](ConceptScheme.md) | `ConceptScheme` | 0 |
| [`ConsumptionFlow`](ConsumptionFlow.md) | `ConsumptionFlow` | 4 |
| [`Coordination`](Coordination.md) | `Coordination` | 3 |
| [`CustomerCategory`](CustomerCategory.md) | `Who_Subject` → `CustomerCategory` | 3 |
| [`DFC_DitributedRepresentation`](DFC_DitributedRepresentation.md) | `DFC_DitributedRepresentation` | 0 |
| [`DefinedProduct`](DefinedProduct.md) | `What_Subject` → `DefinedProduct` | 31 |
| [`DeliveryOption`](DeliveryOption.md) | `How_Subject` → `ShippingOption` → `DeliveryOption` | 12 |
| [`DeliveryStep`](DeliveryStep.md) | `Where_Subject` → `Step` → `DeliveryStep` | 5 |
| [`Feature`](Feature.md) | `Feature` | 2 |
| [`FunctionalProduct`](FunctionalProduct.md) | `What_Subject` → `DefinedProduct` → `FunctionalProduct` | 33 |
| [`Geometry`](Geometry.md) | `Geometry` | 1 |
| [`How_Subject`](How_Subject.md) | `How_Subject` | 0 |
| [`Individual`](Individual.md) | `Individual` | 0 |
| [`Ingredient`](Ingredient.md) | `What_Subject` → `Ingredient` | 3 |
| [`LabellingCharacteristic`](LabellingCharacteristic.md) | `LabellingCharacteristic` | 2 |
| [`Length`](Length.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Length` | 2 |
| [`LocalizedProduct`](LocalizedProduct.md) | `What_Subject` → `LocalizedProduct` | 9 |
| [`NutrientCharacteristic`](NutrientCharacteristic.md) | `NutrientCharacteristic` | 2 |
| [`Offer`](Offer.md) | `Offer` | 7 |
| [`OpeningHoursSpecification`](OpeningHoursSpecification.md) | `OpeningHoursSpecification` | 3 |
| [`Order`](Order.md) | `Order` | 12 |
| [`OrderLine`](OrderLine.md) | `OrderLine` | 7 |
| [`Organization`](Organization.md) | `Who_Subject` → `Agent` → `Organization` | 25 |
| [`PaymentMethod`](PaymentMethod.md) | `How_Subject` → `PaymentMethod` | 4 |
| [`Person`](Person.md) | `Who_Subject` → `Agent` → `Person` | 15 |
| [`PhoneNumber`](PhoneNumber.md) | `What_Subject` → `PhoneNumber` | 3 |
| [`PhysicalCharacteristic`](PhysicalCharacteristic.md) | `PhysicalCharacteristic` | 2 |
| [`PhysicalPlace`](PhysicalPlace.md) | `Where_Subject` → `Place` → `PhysicalPlace` | 8 |
| [`PhysicalProduct`](PhysicalProduct.md) | `What_Subject` → `PhysicalProduct` | 11 |
| [`PickUpStep`](PickUpStep.md) | `Where_Subject` → `Step` → `PickUpStep` | 5 |
| [`PickupOption`](PickupOption.md) | `How_Subject` → `ShippingOption` → `PickupOption` | 9 |
| [`Place`](Place.md) | `Where_Subject` → `Place` | 1 |
| [`Platform`](Platform.md) | `DFC_DitributedRepresentation` → `Platform` | 0 |
| [`Point`](Point.md) | `Geometry` → `Point` | 1 |
| [`Polygon`](Polygon.md) | `Geometry` → `Polygon` | 1 |
| [`Price`](Price.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Price` | 4 |
| [`ProductBatch`](ProductBatch.md) | `What_Subject` → `ProductBatch` | 6 |
| [`ProductOption`](ProductOption.md) | `What_Subject` → `ProductOption` | 1 |
| [`ProductOptionValue`](ProductOptionValue.md) | `What_Subject` → `ProductOptionValue` | 0 |
| [`ProductionFlow`](ProductionFlow.md) | `ProductionFlow` | 4 |
| [`Properties`](Properties.md) | `Properties` | 0 |
| [`QuantitativeValue`](QuantitativeValue.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` | 2 |
| [`RealStock`](RealStock.md) | `Stock` → `RealStock` | 7 |
| [`RepresentationPivot`](RepresentationPivot.md) | `DFC_DitributedRepresentation` → `RepresentationPivot` | 0 |
| [`RepresentedThing`](RepresentedThing.md) | `DFC_DitributedRepresentation` → `RepresentedThing` | 0 |
| [`Route`](Route.md) | `Where_Subject` → `Route` | 3 |
| [`SaleSession`](SaleSession.md) | `SaleSession` | 9 |
| [`Shipment`](Shipment.md) | `Shipment` | 6 |
| [`ShippingOption`](ShippingOption.md) | `How_Subject` → `ShippingOption` | 7 |
| [`SocialMedia`](SocialMedia.md) | `What_Subject` → `SocialMedia` | 2 |
| [`Step`](Step.md) | `Where_Subject` → `Step` | 5 |
| [`Stock`](Stock.md) | `Stock` | 4 |
| [`SuppliedProduct`](SuppliedProduct.md) | `What_Subject` → `DefinedProduct` → `SuppliedProduct` | 41 |
| [`TechnicalProduct`](TechnicalProduct.md) | `What_Subject` → `DefinedProduct` → `TechnicalProduct` | 34 |
| [`Temperature`](Temperature.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Temperature` | 3 |
| [`TemplateSaleSession`](TemplateSaleSession.md) | `TemplateSaleSession` | 2 |
| [`TheoriticalStock`](TheoriticalStock.md) | `Stock` → `TheoriticalStock` | 6 |
| [`Transaction`](Transaction.md) | `How_Subject` → `Transaction` | 7 |
| [`Transformation`](Transformation.md) | `How_Subject` → `Transformation` | 0 |
| [`Value_RECUR`](Value_RECUR.md) | `Value_RECUR` | 4 |
| [`Variant`](Variant.md) | `What_Subject` → `DefinedProduct` → `Variant` | 33 |
| [`VariantCaracteristic`](VariantCaracteristic.md) | `What_Subject` → `VariantCaracteristic` | 2 |
| [`Vehicle`](Vehicle.md) | `What_Subject` → `Vehicle` | 7 |
| [`Vevent`](Vevent.md) | `Vevent` | 3 |
| [`VirtualPlace`](VirtualPlace.md) | `Where_Subject` → `Place` → `VirtualPlace` | 3 |
| [`Volume`](Volume.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Volume` | 2 |
| [`Weight`](Weight.md) | `DFC_DitributedRepresentation` → `RepresentedThing` → `QuantitativeValue` → `Weight` | 2 |
| [`What_Subject`](What_Subject.md) | `What_Subject` | 0 |
| [`Where_Subject`](Where_Subject.md) | `Where_Subject` | 0 |
| [`Who_Subject`](Who_Subject.md) | `Who_Subject` | 0 |

## Naming

These are the ontology's names. The connectors expose different names for the
same properties — `has_unit` is `hasUnit` in TypeScript but `unit` in Ruby and
PHP — so the mapping is not mechanical. See the
[migration guide](../../../migration-guide.md) and
[SDK contract](../../../sdk-contract.md) for per-language names.
