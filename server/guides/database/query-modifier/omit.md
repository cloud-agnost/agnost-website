---
sidebar_position: 4
description:
  You can omit fields in your query results by using the omit modifier.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Omit

You can omit fields in your query results by using the `omit` modifier. It
applies a field mask to the result and returns all the fields except the omitted
ones. If multiple omit method calls are chained then each call is concatenated
to a list.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Omits `compensation` and `benefit` fields from the query result
let result = await agnost.db
  .model("employee")
  .omit("compensation", "benefit")
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Omits `compensation` and `benefit` fields from the query result
final result = await agnost.db
  .model("employee")
  .omit(["compensation", "benefit"])
  .get();
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `omit` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | ...fields                    | String                            | Yes                              | The name of the fields that will be omitted in retrieved objects. <br/> The field name can be in dot-notation to specify sub-object fields (e.g., field.subField). |

:::caution

It throws an exception if no omitted fields are specified

:::
