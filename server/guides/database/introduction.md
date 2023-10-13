---
sidebar_position: 1
description:
  You can use either the Query Builder or the Object Manager to perform database
  operations in Agnost.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Introduction

## Data models

Models define the **data structure and data validation** rules of your
applications. A model is composed of basic, sub-model and child-list object
fields. As an analogy, you can think of models as tables and fields as columns
in relational databases or models as documents and fields as document properties
in non-relational databases.

<DetailedResponse title="Example JSON model">


```json
{
  "users": {
    "_id": "62363dad1182562412d85b9b",
    "provider": "Agnost",
    "providerUserId": "62363dad1182562412d85b9b",
    "name": "Rooby the Robot",
    "email": "rooby@agnost.dev",
    "phone": "+10555555555",
    "profile": {
      "_id": "623643e225de47092f4d536b",
      "_parent": "62363dad1182562412d85b9b",
      "gender": "other",
      "age": 20,
      "nationality": "American"
    },
    "addresses": [
      {
        "street": "121 West Chestnut",
        "city": "Chicago",
        "state": "IL",
        "zipcode": 60610
      }
    ]

}
```

</DetailedResponse>


In Agnost we have 3 types of models:

1.  **Top-level model**: A top model object is an object that is not nested
    inside another model and is not a child of any other model, the top-level
    model can have several sub-models, and each sub-model can also have several
    other child models.

    - In the above example `users` model is the top-level model, it has several
      sub-models, each sub-model can have several child models.

2.  **Sub model object**: Sub model object is a single object and that is nested
    inside another model object.

    - In the above example `profile` is a sub-model object, and it is a child of
      `users` model.

3.  **Sub-model list**: Sub model list is a list of object that is nested inside
    another model object. Sub model list can have several child model objects.

    - In the above example `addresses` is a child-list object, and each address
      is a child of `users` model.

## Differences between Query Builder and Object Manager

You can use either the **Query Builder** or the **Object Manager** to perform
database operations in Agnost. The main difference between them is that the
**Object Manager** works on a single object in the database whereas with **Query
Builder** you can either work on a single or list of objects. You typically
chain **Query Modifiers** in **Query Builder** to perform complex database
operations.

In order to use the **Object Manager** you need to use the `object` method
following the `model`. If you chain `object` method in your query, then you will
start using the **Object Manager**.

- In the `object` method, you will provide a single parameter which is the
  **id** of the object that you would like to perform operations.
- If you pass an **id** parameter to the `object` method then you can do update,
  delete, and get operations.
- If you leave **id** parameter of the `object` empty, then you will be
  performing _create operation_ in the database. So, you can call the `create`
  method with the provided input parameters to create a single object in the
  database.
