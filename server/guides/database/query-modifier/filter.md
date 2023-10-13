---
sidebar_position: 1
description:
  You can filter the results by using the filter modifier. It sets the query
  expression for selecting/filtering data from your app's database
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Filter

You can filter the results by using the `filter` modifier. It sets the query
expression for selecting/filtering data from your app's database.

If multiple filter method calls are chained then the last one overwrites the
previous filters. You an also use
[expression functions](https://www.agnost.dev/docs/category/functions) **marked
as safe to use in filter queries** in your filter queries to handle more complex
cases.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Filter the query result by the value of the position equals to Engineer
// and in the sub-model of the department code equals to 31415
let result = await agnost.db
  .model("employee")
  .filter("position == 'Engineer' && department.code == 31415")
  .sort("hireDate", "desc")
  .limit(10)
  .page(1)
  .get()

// Filter the products table for products with a price less then 1000USD and have 'laptop'
// keyword (case insensitive) in their product name, sort the results by descending price and
// return the first 50 matches
let results1 = await agnost.db
  .model("products")
  .filter("price < 1000 && INCLUDES(name, 'laptop', false)")
  .sort("price", "desc")
  .limit(50)
  .page(1)
  .get()

// For a social media application (e.g., instagram clone) get the list of first 20 new posts
// and also get information whether the user has already liked them or not
// Assumint we have a "posts" model where we keep the list of posts and a "postLikes" model where we keep
// the list of posts liked by users. To get this data we will be creating a lookup field named "likedByMe"
// and in this field we will keep the matching postLikes entry. The query results with likedByMe value
// indicates that the post is liked by the user and if the "likedByMe" value is missing in query results
// this means that the post has not been liked by the user yet
let userId = "611a45f9f3e7ec001950175f"
let results1 = await agnost.db
  .model("posts")
  .lookup({
    name: "likedByMe",
    modelName: "postLikes",
    query: "this.postId == lookup._id && lookup.userId == `'${userId}'`",
  })
  .sort("createdAt", "desc")
  .limit(20)
  .page(1)
  .get()

// You can also add a filter modifier to the above query to return only the posts that are liked by the user
// This filter condition basically checks whether looked up field "likedByMe" has a value or not (undefined or null)
let userId = "611a45f9f3e7ec001950175f"
let results1 = await agnost.db
  .model("posts")
  .lookup({
    name: "likedByMe",
    modelName: "postLikes",
    query: "this.postId == lookup._id && lookup.userId == `'${userId}'`",
  })
  .filter("EXISTS(likedByMe)")
  .sort("createdAt", "desc")
  .limit(20)
  .page(1)
  .get()
```

</TabItem>


<TabItem value="dart">


```dart
// Filter the query result by the value of the position equals to Engineer
// and in the sub-model of the department code equals to 31415
final result = await agnost.db
  .model("employee")
  .filter("position == 'Engineer' && department.code == 31415")
  .sort("hireDate", Direction.desc)
  .limit(10)
  .page(1)
  .get();
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `filter` modifier.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                    |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | expression                   | String                            | Yes                              | The query expression string that will be used to filter file objects.<br/> If you want to learn more about expressions please visit the [Expressions](../../../expressions.md) section. |

:::caution

It throws an exception if **expression** is not specified.

:::
