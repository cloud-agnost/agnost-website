---
sidebar_position: 7
description:
  Aggregating (grouping) records in database tables.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Aggregating (grouping) records
You can run computation(s) on table records using the `aggregate` method. The computations are primarily done by grouping records by the specified field value or defined expression and for each group Agnost performs defined computations. You can perform the following computations on grouped records:

- **$count**: Counts the number of records in each group
- **$countif**: Counts the number of records in each group based on the result of the specified expression. If the expression evaluates to true then they are counted otherwise not.
- **$sum**: Sums the evaluated expression values for each group member. The expression needs to return an integer or decimal value.
- **$avg**: Averages the evaluated expression values for the overall group. The expression needs to return an integer or decimal value.
- **$min**: Calculates the minimum value of the evaluated expression for the overall group. The expression needs to return an integer or decimal value.
- **$max**: Calculates the maximum value of the evaluated expression for the overall group. The expression needs to return an integer or decimal value.

:::info
If you do not specify any **groupBy** parameters in your method call, it performs the computations on all records of the table, namely groups
all records stored in the database into a single group and runs the calculations on this group.
:::

For example, you might have an `orders` table where you keep track of your
sales of particular products. Using this method you can calculate the total
order revenues, average order size, total number of orders and revenues on a
weekly or monthly basis etc. The `groupBy` parameter helps you to group your
orders. If you would like to group your orders by the week or the month of the
year, you can specify a grouping expression which calculates the week or the
month of your order creation date. You can also specify the name of the field in
the `groupBy` parameter, such as the productId, which will group your orders by
product.

- The computations parameter defines the calculations that you will be running
  on the filtered and/or grouped objects. You can either specify a single
  computation or an array of computations. Agnost will perform the specified
  calculations for each group and return their results.
- You can specify multiple calculations at the same time, such as, you can
  calculate the total number of orders, total sales amount, and average order amount.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">

```javascript
// Runs the computations in the `order` collection by grouping orders by productId and month of order date
// and calculates the total sales amount, number of orders, number of orders with more than 3 products, and average, max and minimum order amount
// and returns only the groups that have mumber of orders more than 100 
// Below computation returns the top 50 products sorted by totalSalesAmount desceding
const results = agnost
  .db("mydb")
  .model("orders")
  .aggregate({
    groupBy: [
      "productId",
      { as: "salesMonth", expression: { $month: "orderDate" } },
    ],
    computations: [
      { as: "totalOrders", compute: { $count: 1 } },
      {
        as: "ordersWithMoreThan3Products",
        compute: { $countIf: { $gt: ["quantity", 3] } },
      },
      {
        as: "totalSalesAmount",
        compute: { $sum: { $multiply: ["price", "quantity"] } },
      },
      {
        as: "averageOrderSize",
        compute: { $avg: { $multiply: ["price", "quantity"] } },
      },
      {
        as: "maxOrderSize",
        compute: { $max: { $multiply: ["price", "quantity"] } },
      },
      {
        as: "minOrderSize",
        compute: { $max: { $multiply: ["price", "quantity"] } },
      },
    ],
    having: { $gt: ["totalOrders", 100] },
    sort: { totalSalesAmount: "desc" },
    skip: 0,
    limit: 50,
  });
```
</TabItem>
</Tabs>

##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| args        | AggregateArgs         | Yes       | Aggregation method arguments. |
| args.where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.groupBy      | GroupByDefinition     | No       | The model field names and/or expressions to group the records. If no grouping specified then aggregates all records of the model. See above example for details. |
| args.computations      | Computation or array of Computations     | Yes       | The computations that will be peformed on the grouped records. At least one computation needs to be provided. |
| args.having |  [WhereCondition](/server/database/where)  | No       | The conditions that will be applied on the grouped results to further narrow down the results. You can only use the computation fields in your having filter. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, can include fields of the base model, joined models and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.sort      | SortingOrder     | No       | Sorts the returned objects by the values of the specified fields and sorting order. Sorting order is a JSON object where the keys are field names that you would like to sort, and their values are either `asc` or `desc`. You can only use the computation fields in your sort definition. |
| args.skip      | number     | No       | Number of records to skip. |
| args.limit      | number     | No       | Max number of records to return. |
| args.useReadReplica      | boolean     | No       | Specifies whether to use the read replica of the database or not. If no read replica database exists uses the read-write database. |
