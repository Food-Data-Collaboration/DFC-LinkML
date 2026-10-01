# Person

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Person

## Identity

- **JSON-LD type**: `dfc-b:Person`
- **Hierarchy**: `Who_Subject` → `Agent` → `Person`

## Properties (15)

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
| [`family_name`](../properties/family_name.md) | `dfc-b:familyName` | `string` | literal | this class |
| [`first_name`](../properties/first_name.md) | `dfc-b:firstName` | `string` | literal | this class |
| [`main_contact_of`](../properties/main_contact_of.md) | `dfc-b:mainContactOf` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
