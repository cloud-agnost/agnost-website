---
sidebar_position: 6
description:
  Agnost client library helps you to make search objects of a model by using the
  Query Manager.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Search Object(s)

Agnost client library helps you to make search objects of a model by using the
**Query Manager**.

### Search text

You can search text in the database by calling the `searchText` method.

:::info

It retrieves a list of objects from the database running the text search.

- There should be at least one `text` or `rich-text` field marked as
  **searchable** in the model definition to use this method.
- It performs a logical **OR** search of the terms unless specified as a phrase
  between double-quotes.
- If **filter** is specified, it applies the filter query to further narrow down
  the results.
- The retrieved objects are **sorted automatically** in terms of the **scores**
  of the **text search results**.

:::

:::tip

- Applicable query modifiers <br/> **✓ filter**<br/> **✓ limit**<br/> **✓
  lookup**<br/> **✓ omit**<br/> **✓ page**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let text = "Life is"

// Gets the search result for `Life is` from quotes model including the count info
// and automatically sorts the results by the scoring of each text search result
let result = await agnost.db.model("quotes").limit(20).searchText(text, true)
```

</TabItem>


<TabItem value="dart">


```dart
final text = "Life is";

// Gets the search result for `Life is` from quotes model including the count info
// and automatically sorts the results by the scoring of each text search result
final result = await agnost.db.model("quotes").limit(20).searchText(text, true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "info": {
      "count": 2,
      "totalPages": 1,
      "currentPage": 1,
      "pageSize": 20
    },
    "data": [
      {
        "_id": "62373335b9a84d607cd78e85",
        "author": "John Lennon",
        "content": "Life is what happens to you while you’re busy making other plans."
      },
      {
        "_id": "623732ed1182562412d85cde",
        "author": "Kevin Kruse",
        "content": "Life isn’t about getting and having, it’s about giving and being."
      }
    ]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `searchText` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                    |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | text                         | String                            | Yes                              | The search string can be specified as a phrase between double-quotes.                                                                                                                   |
| 2   | returnCountInfo              | boolean                           | No                               | Flag to specify whether to return the count and pagination information such as total number of objects matched, page number and page size.<br/> By default `returnCountInfo`=**false**. |

:::info

It returns the array of objects matching the text search string and filter query
(if specified).

If **returnCountInfo=true**, it returns an object which includes count
information and list of matched objects.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Search fuzzy

You can perform full-text search in the database by calling the `searchFuzzy`
method.

:::info

It retrieves a list of objects from the database running the full-text search.

- There should be at least one `text` or `rich-text` field marked as **full-text
  (fuzzy) searchable** in the model definition to use this method. The model
  also needs to be a top level model. Full-text search cannot be used for
  sub-model object or sub-model object list fields.
- It performs a **full-text (fuzzy)** search of the terms.
- If **filter** is specified, it applies the filter query to further narrow down
  the results.
- The retrieved objects are **sorted automatically** in terms of the **scores**
  of the **full-text search results**.

:::

:::tip

- Applicable query modifiers <br/> **✓ filter**<br/> **✓ limit**<br/> **✓
  lookup**<br/> **✓ omit**<br/> **✓ page**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let text = "Life is"

// Gets the search result for `Life is` from quotes model and searches the 'content' field
// which must be covered by a full-text search index and automatically sorts by the scoring result
let result = await agnost.db
  .model("quotes")
  .limit(25)
  .searchFuzzy("content", text)
```

</TabItem>


<TabItem value="dart">


```dart
final text = "Life is";

// Gets the search result for `Life is` from quotes model and searches the 'content' field
// which must be covered by a full-text search index and automatically sorts by the scoring result
final result = await agnost.db
  .model("quotes")
  .limit(25)
  .searchFuzzy('content', text);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": [
    {
      "_id": "62373335b9a84d607cd78e85",
      "author": "John Lennon",
      "content": "Life is what happens to you while you’re busy making other plans."
    },
    {
      "_id": "623732ed1182562412d85cde",
      "author": "Kevin Kruse",
      "content": "Life isn’t about getting and having, it’s about giving and being."
    },
    ...
  ]
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `searchFuzzy` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                  |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------- |
| 1   | fieldName                    | String                            | Yes                              | The name of the field to run the full-text search.                    |
| 2   | text                         | String                            | Yes                              | The search string can be specified as a phrase between double-quotes. |

:::info

It returns the array of objects matching the full-text search string and filter
query (if specified).

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
