---
sidebar_position: 7
description:
  You can run computation(s) on model objects using the Agnost client library.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Run Computation(s)

## Run Computation

You can run computation(s) on model objects using the `compute` method. The
computations are primarily done by grouping objects by the specified field value
or defined expression and for each group Agnost performs defined computations.

:::info

If you do not specify any **group** or **filter** methods in your query builder
chain, it performs the computations on all objects of the model, namely groups
all objects stored in the database into a single group and runs the calculations
on this group.

It runs the query defined by the **query modifiers** and returns the
**computation results**.

:::

:::tip

- Applicable **query modifiers** <br/>**✓ filter**<br/> **✓ group**<br/> **✓
  limit**<br/> **✓ page**

:::

For example, you might have an `orders` model where you keep track of your sales
of particular products. Using this method you can calculate the total order
revenues, average order size, total number of orders and revenues on a weekly or
monthly basis etc. The `group` method helps you to group your orders. If you
would like to group your orders by the week or the month of the year, you can
specify a grouping expression which calculates the week or the month of your
order creation date. You can also specify the name of the field in the `group`
method, such as the productId, which will group your orders by product.

- The computations parameter defines the calculations that you will be running
  on the filtered and/or grouped objects. You can either specify a single
  computation or an array of computations. Agnost will perform the specified
  calculations for each group and return their results.
- You can specify multiple calculations at the same time, such as, you can
  calculate the total number of orders, total sales amount, and average order
  size on a weekly basis, etc.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Runs the computations in the `order` collection by grouping products by productId
// and calculates the total sales amount, quantity and maximum sales amount of products.
// Below computation returns the top 10 products sorted by totalSalesQuantity desceding
let result = await agnost.db
  .model("orders")
  .group("productId")
  .limit(10)
  .compute([
    { name: "totalSalesQuantity", type: "count", sort: "desc" },
    { name: "totalSalesAmount", type: "sum", expression: "price * quantity" },
    { name: "maxSalesAmount", type: "max", expression: "price * quantity" },
  ])
```

</TabItem>


<TabItem value="dart">


```dart

// Runs the computations in the `order` collection by grouping products by productId
// and calculates the total sales amount, quantity and maximum sales amount of products.
// Below computation returns the top 10 products sorted by totalSalesQuantity desceding
final result = await agnost.db
  .model("orders")
  .group("productId")
  .limit(10)
  .compute([
    GroupComputation(name: "totalSalesQuantity", type: "count", sort: Direction.desc),
    GroupComputation(name: "totalSalesAmount", type: "sum", expression: "price * quantity"),
    GroupComputation(name: "maxSalesAmount", type: "max", expression: "price * quantity"),
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

Here you can find parameters for the `compute` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                    | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                              |
| --- | :--------------------------- | -------------------------------------------------------------------- | -------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| 1   | computations                 | [GroupComputation](#properties) or [GroupComputation[]](#properties) | Yes                              | Defines the structure of grouped object computations. Basically, it provides aggregate calculation instructions to compute method |

#### Properties

Here you can find properties for the `compute` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | :--------------------------- | --------------------------------- | -------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | expression                   | String                            | Yes                              | The computation expression string. Except **count**, expression string is required for all other computation types.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2   | name                         | String                            | Yes                              | The name of the computation which will be reported in the result of compute method execution. If you are defining more than one group computation, then their names need to be unique.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3   | type                         | String                            | Yes                              | Defines the type of the computation, applicable computations are, <br/>1. **count:** Counts the number of objects in each group <br/>2. **countif:** Counts the number of objects in each group based on the result of the specified expression. If the expression evaluates to true then they are counted otherwise not.<br/>3. **sum:** Sums the evaluated expression values for each group member. The expression needs to return an integer or decimal value.<br/>4. **avg:** Averages the evaluated expression values for the overall group. The expression needs to return an integer or decimal value. <br/>5. **min:** Calculates the minimum value of the evaluated expression for the overall group. The expression needs to return an integer or decimal value. <br/>6. **max:** Calculates the maximum value of the evaluated expression for the overall group. The expression needs to return an integer or decimal value. |
| 4   | sort                         | String                            | No                               | Defines the type sort direction of the computed value, applicable values are `none`, `asc`, `desc`. If sort direction is specified (either `asc` or `desc`), the grouped results will be sorted accordingly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
