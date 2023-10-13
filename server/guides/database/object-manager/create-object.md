---
sidebar_position: 1
description:
  You can create a top-level model object with Agnost client library easily.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Create Object

## Create top-level model object

You can create a top-level model object by calling the `create` method. It
creates a top-level model object using the **values** and **options**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Insert a new top-level model object to the database using the object manager
let result = await agnost.db.model("employee").object().create({
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
// Insert a new top-level model object to the database using the object manager
final result = await agnost.db.model("employee").object().create({
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

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                             |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 1   | values                       | Object                                     | Yes                              | An object that contains the fields and their values to create in the database                    |
| 2   | options                      | [CreateOptions](#createoptions-properties) | No                               | Create operation options. <br/> By default no caching of the newly created object in Redis store |

:::info

This method is valid only for **top-level models**, models without a parent.

- If this method is called for a **sub-model object** or **object-list**, an
  error will be returned.

- If the **id** is provided as input to this database object, its value will be
  ignored by this method since Agnost will automatically assign an id for new
  objects created in the database.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Set sub-model object

You can set a sub-model object by calling the `set` method. It sets object field
value of a parent object identified by **parentId**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Sets a sub-level model object with parentId to the database using the object manager
let result = await agnost.db
  .model("employee.department")
  .object()
  .set(
    {
      code: 31415,
      name: "Robot Office",
      address: [
        {
          city: "Chicago",
          state: "IL",
          postalCode: "60601",
        },
      ],
    },
    "623643d845aba7a69557996c",
  )
```

</TabItem>


<TabItem value="dart">


```dart
//Sets a sub-level model object with parentId to the database using the object manager
final result = await agnost.db
  .model("employee.department")
  .object()
  .set(
    {
      "code": 31415,
      "name": "Robot Office",
      "address": [
        {
          "city": "Chicago",
          "state": "IL",
          "postalCode": "60601",
        },
      ],
    },
    "623643d845aba7a69557996c" // parent id
  );
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "623643d845aba7a69557996c",
    "title": "Robot",
    "hireDate": "2019-10-10T10:00:00.000Z",
    "mail": "rooby@agnost.dev",
    "birthDate": "1999-10-10T10:00:00.000Z",
    "name": "Rooby the Robot",
    "department": {
      "_id": "623643e225de47092f4d536b",
      "_parent": "623643d845aba7a69557996c",
      "name": "Robot Office",
      "code": 31415,
      "address": [
        {
          "_id": "623643e225de47092f4d536c",
          "_parent": "623643e225de47092f4d536b",
          "postalCode": 10112,
          "city": "Chicago",
          "state": "IL"
        }
      ]
    }
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `set` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>    | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                         |
| --- | ---------------------------- | ------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | values                       | Object                               | Yes                              | An object that contains the fields and their values to set in the database.                                  |
| 2   | parentId                     | String                               | Yes                              | The id of the parent object is required. <br/> If the parent object is not found, an error will be returned. |
| 3   | options                      | [SetOptions](#setoptions-properties) | No                               | Set operation options. <br/> By default no caching of the newly created object in Redis store.               |

:::info

This method is valid only for **sub-model objects**, objects with a parent.

- If this method is called for a top-level model object or sub-model
  object-list, an **error** will be returned.

- If the **id** is provided as input, its value will be ignored by this method
  since Agnost will automatically assign an id for new objects created in the
  database.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

## Add child-list object

You can add a child object to the object-list field by calling the `append`
method. It appends the input object to the **object-list field** of a parent
object identified by **parentId**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Appends a child-list object with parentId to the database using the object manager
let result = await agnost.db
  .model("employee.department.address")
  .object()
  .append(
    {
      city: "Los Angeles",
      state: "CA",
      postalCode: "10112",
    },
    "623643e225de47092f4d536b",
  )
```

</TabItem>


<TabItem value="dart">


```dart
//Appends a child-list object with parentId to the database using the object manager
final result = await agnost.db
  .model("employee.department.address")
  .object()
  .append(
    {
      "city": "Los Angeles",
      "state": "CA",
      "postalCode": "10112",
    },
    "623643e225de47092f4d536b" // parent id
  );
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "6236441e161326736e4ffd2c",
    "_parent": "623643e225de47092f4d536b",
    "postalCode": 10112,
    "city": "Los Angeles",
    "state": "CA"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `append` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                             |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | values                       | Object                                     | Yes                              | An object that contains the fields and their values to create in the database.                                                   |
| 2   | parentId                     | String                                     | Yes                              | The id of the parent object is required. <br/> If the parent object is not found, an error will be returned.                     |
| 3   | options                      | [AppendOptions](#appendoptions-properties) | No                               | Append operation options. <br/> By default no caching of the newly created object in Redis store and no top level object return. |

:::info

This method is valid only for **sub-model object-lists**, object-lists with a
parent.

- If this method is called for a top-level model object or sub-model object, an
  **error** will be returned.

- If the **id** is provided as input to this database object, its value will be
  ignored by this method since Agnost will automatically assign an id for newly
  created objects in the database.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

#### CreateOptions properties

Here you can find properties for the `CreateOptions`

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                           |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `cache`                      | String                            | Specify whether to cache the created object using its id as the cache key or not.<br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache.<br/> It can be `nocache` `noexpiry` `30sec` `1min` `2mins` `5mins` `10mins` `15mins` `30mins` `1hour` `6hours` `12hours` `1day` `1week` `1month` `6months` `1year` |

</TabItem>


<TabItem value="dart">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | `cache`                      | Cache enum                        | Specify whether to cache the created object using its id as the cache key or not.<br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache.<br/> It can be `Cache.nocache` `Cache.noexpiry` `Cache.sec30` `Cache.min1` `Cache.mins2` `Cache.mins5` `Cache.mins10` `Cache.mins15` `Cache.mins30` `Cache.hour1` `Cache.hours6` `Cache.hours12` `Cache.day1` `Cache.week1` `Cache.month1` `Cache.months6` `Cache.year1` |

</TabItem>


</Tabs>


#### AppendOptions properties

Here you can find properties for the `AppendOptions`

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                            |
| --- | ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | String                            | Specify whether to cache the appended object using its id as the cache key or not.<br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache. br/> It can be `nocache` `noexpiry` `30sec` `1min` `2mins` `5mins` `10mins` `15mins` `30mins` `1hour` `6hours` `12hours` `1day` `1week` `1month` `6months` `1year` |
| 2   | `returnTop`                  | boolean                           | When you create a submodel object (a child object of a top-level object), you can specify whether to return the newly created child object or the updated top-level object. <br/> By default `returnTop`=**false**.                                                                                                                                                             |

</TabItem>


<TabItem value="dart">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | Cache enum                        | Specify whether to cache the appended object using its id as the cache key or not.<br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache. <br/> It can be `Cache.nocache` `Cache.noexpiry` `Cache.sec30` `Cache.min1` `Cache.mins2` `Cache.mins5` `Cache.mins10` `Cache.mins15` `Cache.mins30` `Cache.hour1` `Cache.hours6` `Cache.hours12` `Cache.day1` `Cache.week1` `Cache.month1` `Cache.months6` `Cache.year1` |
| 2   | `returnTop`                  | boolean                           | When you create a submodel object (a child object of a top-level object), you can specify whether to return the newly created child object or the updated top-level object. <br/> By default `returnTop`=**false**.                                                                                                                                                                                                                                                                    |

</TabItem>


</Tabs>


#### SetOptions properties

Here you can find properties for the `SetOptions`

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                        |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | String                            | Specify whether to cache the set object using its id as the cache key or not. <br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache.<br/> It can be `nocache` `noexpiry` `30sec` `1min` `2mins` `5mins` `10mins` `15mins` `30mins` `1hour` `6hours` `12hours` `1day` `1week` `1month` `6months` `1year` |
| 2   | `returnTop`                  | boolean                           | When you create a submodel object (a child object of a top-level object), you can specify whether to return the newly created child object or the updated top-level object. <br/> By default `returnTop`=**false**.                                                                                                                                                         |

</TabItem>


<TabItem value="dart">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | Cache enum                        | Specify whether to cache the set object using its id as the cache key or not. <br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache.<br/> It can be `Cache.nocache` `Cache.noexpiry` `Cache.sec30` `Cache.min1` `Cache.mins2` `Cache.mins5` `Cache.mins10` `Cache.mins15` `Cache.mins30` `Cache.hour1` `Cache.hours6` `Cache.hours12` `Cache.day1` `Cache.week1` `Cache.month1` `Cache.months6` `Cache.year1` |
| 2   | `returnTop`                  | boolean                           | When you create a submodel object (a child object of a top-level object), you can specify whether to return the newly created child object or the updated top-level object. <br/> By default `returnTop`=**false**.                                                                                                                                                                                                                                                               |

</TabItem>


</Tabs>
