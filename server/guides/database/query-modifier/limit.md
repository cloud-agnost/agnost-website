---
sidebar_position: 5
description:
  You can limit the max number of objects returned from the database, namely
  limit defines the page size for pagination
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Limit

You can limit your query results by using the `limit` modifier. It limits the
max number of objects returned from the database, namely defines the page size
for pagination. In combination with page, primarily used to paginate through
your data. Even if you do not specify a limit in your database queries, Altogic
automatically limits the number of objects returned from the database by setting
the default limits.

:::info

If multiple limit method calls are chained then the last one overwrites the
previous limit values.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Limit the query result to 10 objects per page
let result = await agnost.db
  .model("employee")
  .filter('position == "Engineer" && department.code == 31415')
  .omit(["compensation", "benefit"])
  .sort("hireDate", "desc")
  .limit(10)
  .page(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Limit the query result to 10 objects per page
let result = await agnost.db
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

Here you can find parameters for the `limit` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| 1   | limitCount                   | number                            | Yes                              | An integer that specifies the max number of objects to return. |

:::caution

It throws an exception if **limitCount** is not specified or if it is not a
positive integer.

:::
