---
sidebar_position: 3
description: You can query object(s) by calling the get method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Get Object(s)

## Get Object

You can query object(s) by calling the `get` method. It runs the query defined
by the **query modifiers** and returns matching objects array.

:::tip

- Applicable **query modifiers**<br /> **✓ filter** <br /> **✓ limit** <br />
  **✓ lookup** <br /> **✓ omit** <br /> **✓ page** <br /> **✓ sort**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Gets the first 100 orders with basket size greater than $50 and
//having more than 3 items and sorts them by descending orderDate

await agnost.db
  .model("userOrders")
  .filter("totalAmount > 50 && totalQuantity > 3")
  .sort("orderDate", "desc")
  .limit(100)
  .page(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
//Gets the first 100 orders with basket size greater than $50 and
//having more than 3 items and sorts them by descending orderDate

await agnost.db
  .model("userOrders")
  .filter("totalAmount > 50 && totalQuantity > 3")
  .sort("orderDate", Direction.desc)
  .limit(100)
  .page(1)
  .get();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": [
    {
      "_id": "62363dad1182562412d85b9b",
      "totalAmount": 299,
      "totalQuantity": 5,
      "orderDate": "2022-02-10T12:30:00.000Z",
      "orderStatus": "completed"
    },
    {
      "_id": "62285add2243324542d25f34",
      "totalAmount": 129,
      "totalQuantity": 4,
      "orderDate": "2022-02-05T03:30:00.000Z",
      "orderStatus": "completed"
    },
    ...
  ],
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `get` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                              |
| --- | :--------------------------- | --------------------------------- | -------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | returnCountInfo              | boolean                           | No                               | Flag to specify whether to return the **count** and **pagination** information such as total number of objects matched, page number and page size. <br /> By default `returnCountInfo`=**false**. |

:::info

It returns the array of objects matching the query. If **returnCountInfo=true**,
returns an object which includes count information and list of matched objects.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
