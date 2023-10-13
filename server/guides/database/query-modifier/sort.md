---
sidebar_position: 7
description:
  You can sort the returned objects by the value of the specified field and sort
  direction.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Sort

You can sort your query results by using the `sort` modifier. It sorts the
returned objects by the value of the specified field and sort direction.

:::info

If multiple sort method calls are chained then each call is concatenated to a
list, so that you can perform sorting by multiple fields.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Sort the query result by hireDate field in descending order
let result = await agnost.db
  .model("employee")
  .filter("position == 'Engineer' && department.code == 31415")
  .omit("compensation", "benefit")
  .sort("hireDate", "desc")
  .limit(10)
  .page(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Sort the query result by hireDate field in descending order
final result = await agnost.db
  .model("employee")
  .filter("position == 'Engineer' && department.code == 31415")
  .omit(["compensation", "benefit"])
  .sort("hireDate", Direction.desc)
  .limit(10)
  .page(1)
  .get();
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `sort` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                         |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | fieldName                    | String                            | Yes                              | The name of the field that will be used in sorting the returned objects. <br/> The field name can be in **dot-notation** to specify sub-object fields (e.g., field.subField) |
| 2   | sortDirection                | "asc" or "desc"                   | Yes                              | Sort direction whether ascending or descending                                                                                                                               |

:::caution

It throws an exception if **fieldName** is not specified or **sortDirection**
(if specified) is not 'asc' or 'desc'

:::
