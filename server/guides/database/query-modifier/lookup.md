---
sidebar_position: 3
description:
  You can use the lookup modifier to get a single object from the database.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Lookup

You can use the `lookup` modifier to perform a left outer join to a model to
filter in documents from the "joined" collection for processing.

It looks up (left outer join) the specified field (**SimpleLookup**) of the
model or performs a specified lookup query (**ComplexLookup**) when getting data
from the database.

:::info

If multiple lookup method calls are chained then each call is concatenated to a
list, so that you can perform multiple lookups.

Whether it is **SimpleLookup** or **ComplexLookup**, the end result is the same,
Agnost replaces the lookup field value with the matching object from the looked
up model.

If the lookup query matches more than one record in the looked up model, then
**Agnost returns only the first object**.

**If the lookup does not result in a value, meaning the look up does not return
any objects, the lookup field value will be _undefined_ and omitted in the
response.**

:::

#### Parameters

Here you can find parameters for the `lookup` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                 | <p><strong>Description </strong></p>                                            |
| --- | ---------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1   | lookup                       | [SimpleLookup](#simple-lookup) / [ComplexLookup](#complex-lookup) | The lookup to make (left outer join) while getting the object from the database |

## Simple lookup

:::tip

In order to use SimpleLookup, it is necessary to define an **object reference**
field in your data model via **Designer**.

The lookup is performed before running `filter` or `sort` modifiers in the
backend meaning that **you can use looked up field values in your filter or sort
modifiers**.

:::

For example, you might have a `users` model with a `profileId` object reference
with `profile` model and if you want to access the profile information, you can
lookup the profileId field, and get the profile object in the response.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let result = await agnost.db
  .model("users")
  .lookup({ field: "profileId" })
  .sort("createdAt", "asc")
  .limit(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart

final result = await agnost.db
  .model("users")
  .lookup(SimpleLookup("profileId"))
  .sort("createdAt", Direction.asc)
  .limit(1)
  .get();
```

</TabItem>


</Tabs>


<DetailedResponse title="Response with lookup">


```json
{
  "data": [
    {
      "_id": "623d029d0bd72049bf5d4aec",
      "createdAt": "2022-03-24T23:38:36.851Z",
      "updatedAt": "2022-03-24T23:38:36.851Z",
      "name": "Rooby",
      "email": "rooby@agnost.dev",
      "provider": "agnost",
      "profileId": {
        "_id": "623d00e1d6fdfc62602102e3",
        "createdAt": "2022-03-24T23:38:09.115Z",
        "updatedAt": "2022-03-24T23:38:09.115Z",
        "age": 25,
        "gender": "female",
        "birthDate": "1999-05-10T00:00:00.00Z"
      }
    }
  ],
  "errors": null
}
```

</DetailedResponse>


<DetailedResponse title="Response without lookup">


```json
{
  "data": [
    {
      "_id": "623d029d0bd72049bf5d4aec",
      "createdAt": "2022-03-24T23:38:36.851Z",
      "updatedAt": "2022-03-24T23:38:36.851Z",
      "name": "Rooby",
      "email": "rooby@agnost.dev",
      "provider": "agnost",
      "profileId": "623d00e1d6fdfc62602102e3"
    }
  ],
  "errors": null
}
```

</DetailedResponse>


#### Properties

Here you can find the properties for the `SimpleLookup`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `field`                      | String                            | The name of the object reference field of the model that will be looked up. Only the immediate fields of the model can be used in simple lookups. <br/> If you would like to look up for a sub-object field then you need to use that respective sub-model as the reference point of your lookups.<br/> The simple lookup basically runs the following query: `this.field == lookup._id`, meaning joins the looked up model with the current one by matching the value of the field with the \_id of the looked up model. |

## Complex lookup

:::tip

You do not need to define an **object reference** field in your data model to
use the ComplexLookup. ComplexLooup provides you the flexibility to perform
lookups which are not defined in your data model.

The lookup is performed before running `filter` or `sort` modifiers in the
backend meaning that **you can use looked up field values in your filter or sort
modifiers**.

:::

For example, you might have a `users` model with an `email` field and with
`profile` model with an `email` field. You can define a query with `email`
fields and get the profile object in the response.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let result = await agnost.db
  .model("users")
  .lookup({
    name: "profileInfo",
    modelName: "profile",
    query: "this.email == lookup.email",
  })
  .limit(1)
  .sort({ field: "createdAt", order: "asc" })
  .get()
```

</TabItem>


<TabItem value="dart">


```dart

final result = await agnost.db
  .model("users")
  .lookup(ComplexLookup(
    name: "profileInfo",
    modelName: "profile",
    query: "this.email == lookup.email",
  ))
  .limit(1)
  .sort("createdAt", Direction.asc)
  .get();
```

</TabItem>


</Tabs>


<DetailedResponse title="Response with lookup">


```json
{
  "data": [
    {
      "_id": "623d029d0bd72049bf5d4aec",
      "createdAt": "2022-03-24T23:38:36.851Z",
      "updatedAt": "2022-03-24T23:38:36.851Z",
      "name": "Rooby",
      "email": "rooby@agnost.dev",
      "provider": "agnost",
      "profileInfo": {
        "_id": "623d00e1d6fdfc62602102e3",
        "createdAt": "2022-03-24T23:38:09.115Z",
        "updatedAt": "2022-03-24T23:38:09.115Z",
        "email": "rooby@agnost.dev",
        "age": 25,
        "gender": "female",
        "birthDate": "1999-05-10T00:00:00.00Z"
      }
    }
  ],
  "errors": null
}
```

</DetailedResponse>


<DetailedResponse title="Response without lookup">


```json
{
  "data": [
    {
      "_id": "623d029d0bd72049bf5d4aec",
      "createdAt": "2022-03-24T23:38:36.851Z",
      "updatedAt": "2022-03-24T23:38:36.851Z",
      "name": "Rooby",
      "email": "rooby@agnost.dev",
      "provider": "agnost"
    }
  ],
  "errors": null
}
```

</DetailedResponse>


#### Properties

Here you can find the properties for the `ComplexLookup`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                         |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `modelName`                  | String                            | The name of the target model which will be joined with the current model.                                                                                                                                    |
| 2   | `name`                       | String                            | The name of the lookup. This will become a field of the retrieved object which will hold the looked up value. The specified name needs to be unique among the fields of the model.                           |
| 3   | `query`                      | String                            | The query expression that will be used in joining the models. You can use the `this` keyword to access the field values of the current model, `lookup` key to access to field values of the looked up model. |
