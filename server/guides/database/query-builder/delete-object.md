---
sidebar_position: 5
description: You can delete an object(s) by calling the delete method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Delete Object(s)

## Delete Object

You can delete an object(s) by calling the `delete` method.

:::info

The `delete` method is a **destructive** method. It deletes objects matching the
query and returns information about the delete operation.

:::

:::tip

- Applicable **query modifiers** <br/>**✓ filter**<br/> **✓ lookup**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Deletes an order identified by id '62064163ae99b3a645705667' from userOrders
const result = await agnost.db
  .model("userOrders")
  .filter('_id == "62064163ae99b3a645705667"')
  .delete()

// Deletes orders where status equals to 'cancelled' from userOrders
const result = await agnost.db
  .model("userOrders")
  .filter('status == "cancelled"')
  .delete()
```

</TabItem>


<TabItem value="dart">


```dart
// Deletes an order identified by id '62064163ae99b3a645705667' from userOrders
final result = await agnost.db
  .model("userOrders")
  .filter('_id == "62064163ae99b3a645705667"')
  .delete();

// Deletes orders where status equals to 'cancelled' from userOrders
final result = await agnost.db
  .model("userOrders")
  .filter('status == "cancelled"')
  .delete();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "totalMatch": 1,
    "deleted": 1
  },
  "errors": null
}
```

</DetailedResponse>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
