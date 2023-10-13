---
sidebar_position: 2
description:
  You can group the objects of the model by the specified expression or by the
  specified fields.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Group

You can group your query results by using the `group` modifier.

:::info

It groups the objects of the model by the specified expression or by the
specified fields.

- This method is chained with the [compute](./../query-builder/compute-object)
  method to calculate group statistics of your models.

- If multiple group method calls are chained then the last one overwrites the
  previous group values.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Group the query results by the value of the productId field from the orders model
let result = await agnost.db
  .model("orders")
  .group(["productId"])
  .compute([
    { name: "totalSalesQty", type: "count" },
    { name: "totalSalesAmt", type: "sum", expression: "price * quantity" },
    { name: "maxSalesAmt", type: "max", expression: "price * quantity" },
  ])
```

</TabItem>


<TabItem value="dart">


```dart
// Group the query results by the value of the productId field from the orders model
final result = await agnost.db
  .model("orders")
  .group(["productId"])
  .compute([
    GroupComputation(name: "totalSalesQty", type: "count"),
    GroupComputation(name: "totalSalesAmt", type: "sum", expression: "price * quantity"),
    GroupComputation(name: "maxSalesAmt", type: "max", expression: "price * quantity"),
  ]);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": [
    {
      "groupby": {
        "group": "623a304c60b1d6c38f704d00"
      },
      "totalSalesQuantity": 3,
      "totalSalesAmount": 87,
      "maxSalesAmount": 40
    },
    {
      "groupby": {
        "group": "623a53f71894345a2c1aafed"
      },
      "totalSalesQuantity": 4,
      "totalSalesAmount": 96,
      "maxSalesAmount": 32
    },
    {
      "groupby": {
        "group": "623a53fe5e1cc60b94acfe73"
      },
      "totalSalesQuantity": 5,
      "totalSalesAmount": 76,
      "maxSalesAmount": 32
    }
  ],
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `group` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | fieldsOrExpression           | String or String[]                | Yes                              | Either an expression, a single field name or an array of field names that will be used for grouping.<br/> In case of field names, the field name can be in dot-notation to specify sub-object fields (e.g., field.subField) |

:::caution

It throws an exception if **expression** or **fields** is not specified
correctly.

:::
