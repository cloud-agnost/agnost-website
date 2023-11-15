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
database operations using the Agnost's powerful database abstraction layer. Currently our server side library database module supports PostgreSQL, MySQL and MongoDB databases, meaning you can write the same query and can freely use it across these different databases without any code change.

:::info
To simplify terminology in this part of the server API documentation, we will use **table** which can be a table in SQL based database or a **collection** in a no-sql database or a **model** in an Agnost database schema.

Similarly we will use **record** which can be a record in SQL based database or a **document**/**object** in a no-sql database.
:::

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

- **Database Transactions**: Run database CRUD operations within the context of database transactions. Agnost provides the functionality to start, commit and rollback database transactions easier.  

- **Access to Native Database Driver**: To handle complex cases and queries, Agnsot server-side library of the database module provides access to the native database driver, and you can use it however you like. 

:::caution
One thing that needs to be taken into consideration when using the native driver if you change the data model using the native driver (alter, drop taples, indices etc.) those changes will not be reflected in Agnost and can cause inconsistencies and problems. **We strongly suggest making your data model changes using Agnost Studio.**
:::

### Usage

Agnost is designed to be developer-friendly, offering a clear and concise
interface for your database needs. Below, we provide examples of how to use
Agnost for various database operations:

#### Example 1: Querying Data

```javascript
// Get me the first 20 user records from "users" table in "mydb" database sorted by name ascending and age descending
// who are older than 18 years and their name starts with Jo
// while getting these users also return their profile information and latest 10 orders
const result = agnost
	.db("mysql")
	.model("users")
	.findMany(
		{
			$and: [{ $gt: ["age", 18] }, { $startsWith: ["name", "Jo"] }],
		},
		{
			limit: 20,
			skip: 0,
			sort: { name: "asc", age: "desc" },
			lookup: [
				"profileId",
				{
					as: "orders",
					from: "orders",
					where: { $eq: ["id", "orders.id"] },
					limit: 10,
					sort: { createdAt: "desc" },
				},
			],
		}
	);
```

#### Example 2: Updating record

```javascript
// Filter the user records in "postgres" database "users" for users who are older than 6 years
// The age information is fetched from joined "profile" table
// For the filtered users, group the records by "city" 
// And for each group calculate count of users in each group, sum of ages, average age, min and max age
// Additionally also calculate the number of users in each group who are younger than 10 years
// Return only the groups who have less than 50 users that are at most 10 years old
// And finally sort the groups by number of users in each group and return only the first 10 groups
const result = await agnost
  .db("postgres")
  .model("users")
  .aggregate({
    where: {$gt: ["profileData.age", 6]},
    computations: [
      { as: "count_of_users", compute: { $count: 1 } },
      {
        as: "count_of_users_below_10",
        compute: { $countIf: { $lt: ["profileData.age", 10] } },
      },
      { as: "sum_of_ages", compute: { $sum: "profileData.age" } },
      { as: "avg_of_ages", compute: { $avg: "profileData.age" } },
      { as: "min_of_ages", compute: { $min: "profileData.age" } },
      { as: "max_of_ages", compute: { $max: "profileData.age" } },
    ],
    join: {
      as: "profileData",
      from: "profile",
      where: {
        profile: "profileData.id",
      },
    },
    groupBy: { as: "city", expression: "profileData.city" },
    having: { $lte: ["count_of_users_below_10", 50] },
    sort: { count_of_users: "asc" },
    skip: 0,
    limit: 10,
  });
```

These examples showcase how Agnost simplifies database interactions and provides
a clean and efficient way to work with your data. Whether you're performing
queries, updates, or complex aggregations, Agnost has you covered.

:::tip
**Agnost studio automatically generates type definitons for your databases and injects them to the code editors for better autocompletion support and development experience.** You do not need to manually generate type definitions of your data models.
:::
