# Agent

[← all classes](index.md)

## Description

Class from DFC Business Ontology: #Agent

## Identity

- **JSON-LD type**: `dfc-b:Agent`
- **Hierarchy**: `Who_Subject` → `Agent`

## Subclasses

[`Enterprise`](../classes/Enterprise.md), [`Organization`](../classes/Organization.md), [`Person`](../classes/Person.md)

## Properties (12)

| Property | Predicate | Range | Kind | Defined on |
|---|---|---|---|---|
| [`email`](../properties/email.md) | `dfc-b:email` | `string` | literal | this class |
| [`logo`](../properties/logo.md) | `dfc-b:logo` | `uri` | literal | this class |
| [`website_page`](../properties/website_page.md) | `dfc-b:websitePage` | `uri` | literal | this class |
| [`affiliated_to`](../properties/affiliated_to.md) | `dfc-b:affiliatedTo` | `Person` | object | this class |
| [`has_address`](../properties/has_address.md) | `dfc-b:hasAddress` | `Address` | object | this class |
| [`has_phone_number`](../properties/has_phone_number.md) | `dfc-b:hasPhoneNumber` | `string` | literal | this class |
| [`has_social_media`](../properties/has_social_media.md) | `dfc-b:hasSocialMedia` | `string` | literal | this class |
| [`is_member_of`](../properties/is_member_of.md) | `dfc-b:isMemberOf` | `CustomerCategory` | object | this class |
| [`orders`](../properties/orders.md) | `dfc-b:orders` | `Order` | object | this class |
| [`owns`](../properties/owns.md) | `dfc-b:owns` | `string` | literal | this class |
| [`requests`](../properties/requests.md) | `dfc-b:requests` | `FunctionalProduct` | object | this class |
| [`sells`](../properties/sells.md) | `dfc-b:sells` | `string` | literal | this class |

## Notes

- The schema carries no `required` or `multivalued` flags, so this page does not state either. Cardinality is decided by the connector generators from the property name, which is a heuristic — do not rely on it for validation.
- `dfc-b:Class:property` local names are never emitted. Predicates are always the original short form.
