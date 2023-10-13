---
sidebar_position: 2
description:
  You can update the objects matching with the query by calling the update
  method and input values
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Update Object(s)

## Update an object

You can update the objects matching with the query by calling the `update`
method and input values. This method directly sets the field values of the
object in the database with the values provided in the input.

:::tip

- Applicable **query modifiers** <br/> **✓ filter** <br/> **✓ lookup**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Upates an object using a query builder
const result = await agnost.db
  .model("employee.department")
  .filter('_id == "6236506d45aba7a695579996"')
  .update({
    name: "Technology Office",
    code: 60611,
  })
```

</TabItem>


<TabItem value="dart">


```dart
//Upates an object using a query builder
final result = await agnost.db
  .model("employee.department")
  .filter('_id == "6236506d45aba7a695579996"')
  .update({
    "name": "Technology Office",
    "code": 60611,
  });
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "totalMatch": 1,
    "updated": 1
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `update` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| 1   | values                       | object                            | Yes                              | An object that contains the fields and their values to update in the database. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Update fields

You can update the objects matching with the query by calling the `updateFields`
method. It updates the objects matching with the query using the input
`FieldUpdate` instruction(s), you can use predefined options for your update
operation with [updateType](#definitions).

The main difference between the `update` and `updateFields` methods is that, the
`update` method directly sets the field values of the object in the database
with the values provided in the input, however with the `updateFields` method
you can use different options how to update your object fields in the database.

:::tip

- Applicable **query modifiers** : **✓ filter**, **✓ lookup**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Increments the likeCount of a wallpost identified by id
//'623655460874df80013caf74' by 1 using the query builder
const result = await agnost.db
  .model("wallposts")
  .filter('_id == "623655460874df80013caf74"')
  .updateFields([{ field: "likeCount", updateType: "increment", value: 1 }])
```

</TabItem>


<TabItem value="dart">


```dart
//Increments the likeCount of a wallpost identified by id
//'623655460874df80013caf74' by 1 using the query builder
final result = await agnost.db
  .model("wallposts")
  .filter('_id == "623655460874df80013caf74"')
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
    "totalMatch": 1,
    "updated": 1
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `updateFields` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | ---------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | fieldUpdates                 | [FieldUpdate](#fieldupdate-properties) or [FiledUpdate[]](#fieldupdate-properties) | Yes                              | Field update instruction(s).         |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

#### FieldUpdate Properties

Here you can find the properties for the `FieldUpdate`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `field`                      | String                            | The name of the field whose value will be updated. The field name can be in dot-notation to specify sub-object fields (e.g., field.subField). Please note that only sub-model object fields can be accessed through the dot-notation. You cannot create an update instruction for an object-list field through the dot-notation. |
| 2   | `updateType`                 | boolean                           | It defines how the field will be updated. It can be `set` `unset` `increment` `decrement` `min` `max` `multiply` `pull` `push` `pop` `shift`.                                                                                                                                                                                    |
| 3   | `value`                      | any                               | The value that will be used during the field update. Depending on the update type the value will have different meaning.                                                                                                                                                                                                         |

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
