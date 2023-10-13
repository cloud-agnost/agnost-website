---
sidebar_position: 2
description:
  With Altogic, you can directly set the field values of the object in the
  database.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Update Object

## Update an object

You can update an object by calling the `update` method. It updates the object
identified by the **id** using the input values. This method directly sets the
field values of the object in the database with the values provided in the
input.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Updates an employee department identified by '6236506d45aba7a695579996'
//to a new one
const result = await agnost.db
  .model("employee.department")
  .object("6236506d45aba7a695579996")
  .update({
    name: "Technology",
    code: 60611,
  })
```

</TabItem>


<TabItem value="dart">


```dart
//Updates an employee department identified by '6236506d45aba7a695579996'
//to a new one
final result = await agnost.db
  .model("employee.department")
  .object("6236506d45aba7a695579996")
  .update({
    "name": "Technology",
    "code": 60611,
  });
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "6236506d45aba7a695579996",
    "_parent": "623650621182562412d85bd2",
    "name": "Technology",
    "code": 60611,
    "address": [
      {
        "_id": "6236506d45aba7a695579997",
        "_parent": "6236506d45aba7a695579996",
        "postalCode": 10112,
        "city": "Chicago",
        "state": "IL"
      },
      {
        "_id": "6236507725de47092f4d539a",
        "_parent": "6236506d45aba7a695579996",
        "postalCode": 10112,
        "city": "Los Angeles",
        "state": "CA"
      }
    ]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `update` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                        |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------- |
| 1   | values                       | object                                     | Yes                              | An object that contains the fields and their values to update in the database.              |
| 2   | options                      | [UpdateOptions](#updateoptions-properties) | No                               | Update operation options. <br/> By default no caching of the updated object in Redis store. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Update fields

You can update object fields by calling the `updateFields` method. It updates
the fields of the object identified by the **id** using the input
[FieldUpdate](#fieldupdate-properties) instruction(s), you can use predefined
options for your update operation with [updateType](#definitions).

The main difference between the `update` and `updateFields` methods is that, the
`update` method directly sets the field values of the object in the database
with the values provided in the input, however with the `updateFields` method
you can use different options to update your object fields in the database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Increments the likeCount of a wallpost identified by id
//'623655460874df80013caf74' by 1 using the query builder
const result = await agnost.db
  .model("wallposts")
  .object("623655460874df80013caf74")
  .updateFields([{ field: "likeCount", updateType: "increment", value: 1 }])
```

</TabItem>


<TabItem value="dart">


```dart
//Increments the likeCount of a wallpost identified by id
//'623655460874df80013caf74' by 1 using the query builder
final result = await agnost.db
  .model("wallposts")
  .object("623655460874df80013caf74")
  .updateFields([
       FieldUpdate(
          field: "likeCount",
          updateType: UpdateType.increment,
          value: 1
       )
  ]);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "623655460874df80013caf74",
    "title": "Check this polar bear → 🐻‍❄️ 🚀",
    "content": "Funny polar bear trying to catch fish.",
    "likeCount": 2
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `updateFields` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                       |
| --- | ---------------------------- | ---------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | fieldUpdates                 | [FieldUpdate](#fieldupdate-properties) or [FiledUpdate[]](#fieldupdate-properties) | Yes                              | An object or list of objects that contains the field update instructions.                  |
| 2   | options                      | [UpdateOptions](#updateoptions-properties)                                         | No                               | Update operation options.<br/> By default no caching of the updated object in Redis store. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

#### FieldUpdate properties

Here you can find the properties for the `FieldUpdate`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                      |
| --- | ---------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `field`                      | String                            | The name of the field whose value will be updated. The field name can be in dot-notation to specify sub-object fields (e.g., field.subField).<br/> Please note that only sub-model object fields can be accessed through the dot-notation.<br/> You cannot create an update instruction for an object-list field through the dot-notation |
| 2   | `updateType`                 | boolean                           | It defines how the field will be updated.<br/> It can be `set` `unset` `increment` `decrement` `min` `max` `multiply` `pull` `push` `pop` `shift`                                                                                                                                                                                         |
| 3   | `value`                      | any                               | The value that will be used during the field update.<br/> Depending on the update type the value will have different meaning.                                                                                                                                                                                                             |

##### Definitions

Here you can find definitions of the `updateType`

:::tip

- **set**: Sets (overwrites) the value of a field. Applicable on all fields,
  except system managed \_id, \_parent, createdAt, updatedAt fields.
- **unset**: Clears the value of a field. Applicable on all fields, except
  system managed \_id, \_parent, createdAt, updatedAt fields.
- **increment**: Increments the value of a numeric field by the specified
  amount. Applicable only for integer and decimal fields.
- **decrement**: Decrements the value of a numeric field by the specified
  amount. Applicable only for integer and decimal fields.
- **min**: Assigns the minimum of the specified value or the field value. If the
  specified value is less than the current field value, sets the field value to
  the specificied value, otherwise does not make any changes. Applicable only
  for integer and decimal fields.
- **max**: Assigns the maximum of the specified value or the field value. If the
  specified value is greater than the current field value, sets the field value
  to the specificied value, otherwise does not make any changes. Applicable only
  for integer and decimal fields.
- **multiply**: Multiplies the current value of the field with the specified
  amount and sets the field value to teh multiplication result. Applicable only
  for integer and decimal fields.
- **pull**: Removes the specified value from a basic values list. Applicable
  only for basic values list fields.
- **push**: Adds the specified value to a basic values list. Applicable only for
  basic values list fields.
- **pop**: Removes the last element from a basic values list. Applicable only
  for basic values list fields.
- **shift**: Removes the first element from a basic values list. Applicable only
  for basic values list fields.

:::

#### UpdateOptions Properties

Here you can find properties for the `UpdateOptions`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                            |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | String                            | Specify whether to cache the updated object using its id as the cache key or not.<br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache. <br/> It can be `nocache` `noexpiry` `30sec` `1min` `2mins` `5mins` `10mins` `15mins` `30mins` `1hour` `6hours` `12hours` `1day` `1week` `1month` `6months` `1year` |
| 2   | `returnTop`                  | boolean                           | In case if you update a submodel object (a child object of a top-level object), you can specify whether to return the newly updated child object or the updated top-level object. By default `returnTop`=**false**.                                                                                                                                                             |
