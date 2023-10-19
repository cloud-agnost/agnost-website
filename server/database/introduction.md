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
import ilCss from "../../src/css/illustration.module.css"

# Introduction

Agnost provides a database abstraction layer that allows you to perform database
operations without writing SQL queries. You can either perform SQL or NoSQL
database operations using the Agnost's powerful database abstraction layer.

### Key Features

- **Database Agnosticism**: Agnost supports multiple databases, making it
  database-agnostic. You can seamlessly switch between different databases
  without changing your code.

- **Model Management**: Easily define and manage data models for your
  application. Agnost simplifies the process of creating, updating, and querying
  models.

- **Flexible Querying**: Construct complex queries with ease using a wide array
  of operators and conditions. Agnost provides a rich query language to filter
  and sort data.

- **Data Manipulation**: Perform data manipulation operations, including
  aggregation, computation, and updates, using a straightforward API.

### Usage

Agnost is designed to be developer-friendly, offering a clear and concise
interface for your database needs. Below, we provide examples of how to use
Agnost for various database operations:

#### Example 1: Querying Data

```javascript
const result = agnost
  .db("mydb")
  .model("users")
  .findMany(
    {
      $and: [{ $gt: ["age", 18] }, { $startsWith: ["name", "abc"] }],
    },
    {
      limit: 20,
      skip: 0,
      sort: { name: "asc", age: "desc" },
      join: [
        "profileId",
        {
          as: "orders",
          from: "orders",
          where: { $eq: ["id", "orders.id"] },
        },
      ],
    },
  )
res.json(result)
```

#### Example 2: Advanced Query with Nested Sorting

```javascript
const result = agnost
  .db("mydb")
  .model("users")
  .findMany(
    {
      $and: [{ $gt: ["age", 18] }, { $startsWith: ["name", "abc"] }],
    },
    {
      limit: 20,
      skip: 0,
      sort: { name: "asc", age: "desc", "orders.amount": "asc" },
      join: [
        "profileId",
        {
          as: "orders",
          from: "orders",
          where: { $eq: ["id", "orders.id"] },
        },
      ],
    },
  )
res.json(result)
```

These examples showcase how Agnost simplifies database interactions and provides
a clean and efficient way to work with your data. Whether you're performing
queries, updates, or complex aggregations, Agnost has you covered.

In the sections that follow, we'll delve deeper into the core components of
Agnost, including database management, model definition, querying, and advanced
operations. This documentation will equip you with the knowledge to harness
Agnost's full potential and streamline your database-related tasks.
