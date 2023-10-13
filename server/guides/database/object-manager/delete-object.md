---
sidebar_position: 5
description:
  With Altogic, you can delete an object by calling the delete method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Delete Object

## Delete Object

You can delete an object by calling the `delete` method. It deletes the object
identified by the **id**.

:::info

- For the **top level model object**, this method deletes the object from the
  database.
- For the **sub-model objects**, either unsets its value or removes it from its
  parent's object list.
- If the **id** of the database object is not defined, it throws an exception.
- Returns **null** if the deleted object is a top-level object. If the deleted
  object is a sub-model object and if **returnTop** is set to true in
  [DeleteOptions](#deleteoptions-properties), it returns the updated top-level
  object.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Deletes a department identified by id '62064163ae99b3a645705667' from employee
const result = await agnost.db
  .model("employee.department")
  .object("62064163ae99b3a645705667")
  .delete({ returnTop: true })
```

</TabItem>


<TabItem value="dart">


```dart
//Deletes a department identified by id '62064163ae99b3a645705667' from employee
final result = await agnost.db
        .model("employee.department")
        .object("62064163ae99b3a645705667")
        .delete(DeleteOptions(returnTop: true));
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62364a48158fe88838ffef98",
    "title": "Robot",
    "hireDate": "2019-10-10T10:00:00.000Z",
    "mail": "rooby@agnost.dev",
    "birthDate": "1999-10-10T10:00:00.000Z",
    "name": "Rooby the Robot"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `delete` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                  |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | options                      | [DeleteOptions](#deleteoptions-properties) | No                               | Delete operation options.<br/> By default removes deleted object from Redis cache (if cached already) and no top level object return. |

:::info

- If the deleted object is a **top-level object**, it returns **null**.

- If the deleted object is a **sub-model object** and if **returnTop** is set to
  **true** in [DeleteOptions](#deleteoptions-properties), it returns the updated
  **top-level object**.
- If the client library key is set to **enforce session**, an active user
  session is **required** (e.g., user needs to be logged in) to call this
  method.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

#### DeleteOptions properties

Here you can find properties for the `DeleteOptions`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                    |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `removeFromCache`            | boolean                           | Specify whether to remove deleted object from cache using deleted object id as the cache key.                                                                                           |
| 2   | `returnTop`                  | boolean                           | In case if you delete a sub-model object (a child object of a top-level object), you can specify whether to return the updated top-level object. <br/> By default `returnTop`=**false** |
