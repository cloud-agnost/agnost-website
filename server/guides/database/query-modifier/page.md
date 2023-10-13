---
sidebar_position: 6
description:
  You can paginate to the specified page number with the page modifier.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Page

You can paginate your query results by using the `page` modifier.

:::info

It paginates to the specified page number. In combination with [limit](./limit),
primarily used to paginate through your data.

If multiple page method calls are chained then the last one overwrites the
previous page values.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Query the database for the first page of 10 objects
let result = await agnost.db
  .model("employee")
  .filter('position == "Engineer" && department.code == 31415')
  .omit("compensation", "benefit")
  .sort("hireDate", "desc")
  .limit(10)
  .page(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Query the database for the first page of 10 objects
final result = await agnost.db
  .model("employee")
  .filter('position == "Engineer" && department.code == 31415')
  .omit(["compensation", "benefit"])
  .sort("hireDate", Direction.desc)
  .limit(10)
  .page(1)
  .get();
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `page` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------ |
| 1   | pageNumber                   | number                            | Yes                              | An integer that specifies the page number. |

:::caution

It throws an exception if **pageNumber** is not specified or if it is not a
positive integer.

:::
