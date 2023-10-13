---
sidebar_position: 1
description:
  You can create a top-level model object(s), set a sub-model object or append a
  sub-model list object(s) with the Agnost client library.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Create Object(s)

## Create top-level model object

You can create a top-level model object(s) by calling the `create` method.

:::info

It creates a top level model object(s) in the database. This method is valid
only for **top-level models, models without a parent**.

- If a **list of objects is provided as input** and if any one of the objects in
  this list **fails during creation**, none of the objects will be created in
  the database and transaction **will be rolled back**.
- If the object(s) are created successfully, it returns the newly created object
  or list of objects from the database.

:::

:::tip

- Applicable **query modifier** <br/> **✓ omit**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Insert a new top-level model object to the database using the query builder
let result = await agnost.db.model("users").create({
  name: "Rooby the Robot",
  birthDate: "1999-10-10T10:00:00.000+00:00",
  mail: "rooby@agnost.dev",
  hireDate: "2019-10-10T10:00:00.000+00:00",
  title: "Robot",
})
```

</TabItem>


<TabItem value="dart">


```dart
//Insert a new top-level model object to the database using the query builder
final result = await agnost.db.model("users").create({
  "name": "Rooby the Robot",
  "birthDate": "1999-10-10T10:00:00.000+00:00",
  "mail": "rooby@agnost.dev",
  "hireDate": "2019-10-10T10:00:00.000+00:00",
  "title": "Robot",
});
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62363dad1182562412d85b9b",
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

Here you can find parameters for the `create` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | values                       | Object or Object[]                | Yes                              | An object or a list of objects that contains the fields and their values to create in the database. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Set sub-model object

You can set a sub-model object by calling the `set` method. It sets the
sub-object field value of the parent object identified by **parentId**.

:::info

As an example, assuming you have a **users top-level model** where you define
your app users and in this model you have an **object field** called **profile,
which is a sub-model**, that you store details about your users.

- When creating users, you most probably will not be inserting profile
  information but at a later stage you might insert this information and would
  like to **set** the value of the profile.
- You can use this `set` method to set the profile field of a user object
  identified by the **parentId**.

:::

:::tip

- Applicable **query modifier** : **✓ omit**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Set a sub-level model object with parentId to the database using the query builder
let result = await agnost.db.model("users.profile").set(
  {
    gender: "other",
    age: 20,
    nationality: "American",
    address: [
      {
        city: "Chicago",
        state: "IL",
        postalCode: "60601",
      },
    ],
  },
  "62363dad1182562412d85b9b",
)
```

</TabItem>


<TabItem value="dart">


```dart
//Set a sub-level model object with parentId to the database using the query builder
final result = await agnost.db.model("users.profile").set(
  {
    "gender": "other",
    "age": 20,
    "nationality": "American",
    "address": [
      {
        "city": "Chicago",
        "state": "IL",
        "postalCode": "60601",
      },
    ],
  },
  "62363dad1182562412d85b9b" // parent id
);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "623643e225de47092f4d536b",
    "_parent": "62363dad1182562412d85b9b",
    "gender": "other",
    "age": 20,
    "nationality": "American",
    "address": [
      {
        "_id": "62d6ede70b5026c6649432ac",
        "_parent": "623643e225de47092f4d536b",
        "city": "Chicago",
        "state": "IL",
        "postalCode": "60601"
      }
    ]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `set` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | values                       | Object                            | Yes                              | An object that contains the fields and their values of a sub-model object to set in the database.                         |
| 2   | parentId                     | String                            | Yes                              | The id of the parent object is required. <br/> If the parent object is not found, an error will be returned.              |
| 3   | returnTop                    | boolean                           | No                               | Flag to specify whether to return the newly set child object or the updated top-level object. <br/> By default **false**. |

:::info

It returns the newly created object in the database. If **returnTop** is set to
**true**, it returns the **updated top-level object** instead of the set
sub-model object.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Add child-list object

You can add child-list object(s) by calling the `append` method. It appends
object(s) to a child-list of the parent object identified by **parentId**.

:::info

As an example, assuming you have a **users** top-level model where you define
your app users and in this model you have an **object-list field called
addresses**, which is a sub-model list, that you store addresses of your users.

- When creating users, you most probably will not be collecting **address**
  information but at a later stage you might collect this information and would
  like to add these addresses to your users' addresses list.
- You can use this `append` method to add child object(s) to a user identified
  by the **parentId**.

:::

:::tip

- Applicable **query modifier** : **✓ omit**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Append a child-list object with parentId to the database using the query builder
let result = await agnost.db.model("employee.addresses").append(
  {
    city: "Los Angeles",
    state: "CA",
    postalCode: 60612,
  },
  "62363dad1182562412d85b9b",
)
```

</TabItem>


<TabItem value="dart">


```dart
//Append a child-list object with parentId to the database using the query builder
final result = await agnost.db.model("employee.addresses").append(
  {
    "city": "Los Angeles",
    "state": "CA",
    "postalCode": 60612,
  },
  "62363dad1182562412d85b9b" // parent id
);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "6236441e161326736e4ffd2c",
    "_parent": "62363dad1182562412d85b9b",
    "city": "Los Angeles",
    "state": "CA",
    "postalCode": 60612
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `append` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1   | values                       | Object or Object[]                | Yes                              | An object or list of objects that contains the fields and their values to append to an object-list.                               |
| 2   | parentId                     | String                            | Yes                              | The id of the parent object is required. <br/> If the parent object is not found, an error will be returned.                      |
| 3   | returnTop                    | boolean                           | No                               | Flag to specify whether to return the newly appended child object(s) or the updated top-level object. <br/> By default **false**. |

:::info

It returns the newly created object(s) in the database. If **returnTop** is set
to **true**, it returns the updated top-level object instead of the appended
sub-model object(s).

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
