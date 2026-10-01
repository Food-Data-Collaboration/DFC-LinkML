# Organization

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Organization

## Identity

- **JSON-LD type**: `dfc-b:Organization`
- **Hierarchy**: `Who_Subject` → `Agent` → `Organization`

## Properties (25)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`email`](../properties/email.md) | `dfc-b:email` | `string` | literal | [`Agent`](Agent.md) |
| [`logo`](../properties/logo.md) | `dfc-b:logo` | `uri` | literal | [`Agent`](Agent.md) |
| [`website_page`](../properties/website_page.md) | `dfc-b:websitePage` | `uri` | literal | [`Agent`](Agent.md) |
| [`affiliated_to`](../properties/affiliated_to.md) | `dfc-b:affiliatedTo` | `Person` | object | [`Agent`](Agent.md) |
| [`has_address`](../properties/has_address.md) | `dfc-b:hasAddress` | `Address` | object | [`Agent`](Agent.md) |
| [`has_phone_number`](../properties/has_phone_number.md) | `dfc-b:hasPhoneNumber` | `string` | literal | [`Agent`](Agent.md) |
| [`has_social_media`](../properties/has_social_media.md) | `dfc-b:hasSocialMedia` | `string` | literal | [`Agent`](Agent.md) |
| [`is_member_of`](../properties/is_member_of.md) | `dfc-b:isMemberOf` | `CustomerCategory` | object | [`Agent`](Agent.md) |
| [`orders`](../properties/orders.md) | `dfc-b:orders` | `Order` | object | [`Agent`](Agent.md) |
| [`owns`](../properties/owns.md) | `dfc-b:owns` | `string` | literal | [`Agent`](Agent.md) |
| [`requests`](../properties/requests.md) | `dfc-b:requests` | `FunctionalProduct` | object | [`Agent`](Agent.md) |
| [`sells`](../properties/sells.md) | `dfc-b:sells` | `string` | literal | [`Agent`](Agent.md) |
| [`vat_number`](../properties/vat_number.md) | `dfc-b:VATnumber` | `string` | literal | this class |
| [`vat_status`](../properties/vat_status.md) | `dfc-b:VATstatus` | `boolean` | literal | this class |
| [`enterprise_i_d`](../properties/enterprise_i_d.md) | `dfc-b:enterpriseID` | `string` | literal | this class |
| [`affiliates`](../properties/affiliates.md) | `dfc-b:affiliates` | `Organization` | object | this class |
| [`defines`](../properties/defines.md) | `dfc-b:defines` | `CustomerCategory` | object | this class |
| [`has_main_contact`](../properties/has_main_contact.md) | `dfc-b:hasMainContact` | `Person` | object | this class |
| [`has_template_sale_session`](../properties/has_template_sale_session.md) | `dfc-b:hasTemplateSaleSession` | `string` | literal | this class |
| [`is_certified_by`](../properties/is_certified_by.md) | `dfc-b:isCertifiedBy` | `string` | literal | this class |
| [`maintains`](../properties/maintains.md) | `dfc-b:maintains` | `Catalog` | object | this class |
| [`manages`](../properties/manages.md) | `dfc-b:manages` | `CatalogItem` | object | this class |
| [`proposes`](../properties/proposes.md) | `dfc-b:proposes` | `TechnicalProduct` | object | this class |
| [`supplies`](../properties/supplies.md) | `dfc-b:supplies` | `SuppliedProduct` | object | this class |
| [`transforms`](../properties/transforms.md) | `dfc-b:transforms` | `AsPlannedLocalTransformation` | object | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
