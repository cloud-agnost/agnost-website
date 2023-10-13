---
sidebar_position: 4
description:
  You can query the specified number of objects randomly by calling the
  getRandom method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Get Random Object(s)

## Random list of objects

You can query the specified number of objects randomly by calling the
`getRandom` method.

:::note

It retrieves the specified number of objects from the database randomly. If
**filter** modifier is used with this method, Agnost first narrows down the set
of objects that can be selected using the filter query and among these filtered
objects performs random selection.

:::

:::tip

- Applicable **query modifiers**<br /> **✓ filter** <br /> **✓ lookup**<br />
  **✓ omit**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let count = 3

// Gets the random 3 quotes where author equals to "Salvador Dali"
let result = await agnost.db
  .model("quote")
  .filter("quote.author == 'Salvador Dali'")
  .getRandom(count)
```

</TabItem>


<TabItem value="dart">


```dart
final count = 3;

// Gets the random 3 quotes where author equals to "Salvador Dali"
final result = await agnost.db
  .model("quote")
  .filter("quote.author == 'Salvador Dali'")
  .getRandom(count);
```

</TabItem>


</Tabs>
<DetailedResponse title="Example Response">


```json
{
  "data": [
    {
      "_id": "62373335b9a84d607cd78e85",
      "author": "Salvador Dali",
      "content": "Intelligence without ambition is a bird without wings."
    },
    {
      "_id": "623732ed1182562412d85cde",
      "author": "Salvador Dali",
      "content": "Life is too short to remain unnoticed."
    },
    {
      "_id": "623732ed1182562412d85cde",
      "author": "Salvador Dali",
      "content": "It is either easy or impossible."
    }
  ],
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `getRandom` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------------------------- |
| 1   | count                        | number                            | Yes                              | An integer that specifies the number of items to randomly select. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
