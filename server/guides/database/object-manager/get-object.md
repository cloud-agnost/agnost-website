---
sidebar_position: 3
description:
  You can get an object by calling the get method. It gets the object identified
  by the id from the database.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Get Object

## Get object

You can get an object by calling the `get` method. It gets the object identified
by the **id** from the database.

:::info

- If the **id** of the database object is **not specified**, it throws an
  exception.

- If the database object identified with the **id** does **not exist**, it
  returns null.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Gets the single record from employee collection where
// objectId equals to '62363a77b9a84d607cd78d7c'
let result = await agnost.db
  .model("employee")
  .object("62363a77b9a84d607cd78d7c")
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Gets the single record from employee collection where
// objectId equals to '62363a77b9a84d607cd78d7c'
final result = await agnost.db
  .model("employee")
  .object("62363a77b9a84d607cd78d7c")
  .get();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "name": "Rooby the Robot",
    "mail": "rooby@agnost.dev",
    "title": "Robot",
    "hireDate": "2019-10-10T10:00:00.000Z",
    "birthDate": "1999-10-10T10:00:00.000Z",
    "_id": "62363a77b9a84d607cd78d7c",
    "department": {
      "_id": "62363a77b9a84d607cd78d7d",
      "_parent": "62363a77b9a84d607cd78d7c",
      "name": "Robot Office",
      "code": 31415
    }
  },
  "errors": null
}
```

</DetailedResponse>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

#### Parameters

Here you can find parameters for the `get` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>    | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                             |
| --- | :--------------------------- | ------------------------------------ | -------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| 1   | options                      | [GetOptions](#getoptions-properties) | No                               | Defines the options for an object query operation. By default no caching of the retrieved object in Redis store. |

#### GetOptions properties

Here you can find properties for the `GetOptions`

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                               |
| --- | ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | String                            | Specify whether to cache the retrieved object using its id as the cache key or not. <br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache. <br/> It can be `nocache` `noexpiry` `30sec` `1min` `2mins` `5mins` `10mins` `15mins` `30mins` `1hour` `6hours` `12hours` `1day` `1week` `1month` `6months` `1year` |

</TabItem>


<TabItem value="dart">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --- | ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `cache`                      | Cache enum                        | Specify whether to cache the retrieved object using its id as the cache key or not. <br/> If the object is cached and the timeout has expired, the cached object will automatically be removed from the cache. <br/> It can be `Cache.nocache` `Cache.noexpiry` `Cache.sec30` `Cache.min1` `Cache.mins2` `Cache.mins5` `Cache.mins10` `Cache.mins15` `Cache.mins30` `Cache.hour1` `Cache.hours6` `Cache.hours12` `Cache.day1` `Cache.week1` `Cache.month1` `Cache.months6` `Cache.year1` |

</TabItem>


</Tabs>
