---
sidebar_position: 10
description:
  Defining joins and lookups
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Defining joins and lookups
Joins and lookups help you combine data from different database models. Both lookups and joins perform left outer join merge data between two tables. **The main difference between joins and lookups is that you can use joined table fields in your `where` queries, whereas the looked-up values cannot be used in `where` queries.**

Lookups are, in particular, used when fetching data from the database. For example, if you want to get user data and general profile information and would like to retrieve a user's latest posts, it is better to have lookups. However, if you would like to filter users with posts with more than a specific number of likes, then it is better to use the joins.

### Join definition
You can join two tables (e.g., models) in your database in two ways. The first option is the quickest; if you define a reference field in one of your models referencing the id field of another model, then listing just the name of the referenced field would be enough. In the second option, you need to define the join structure by specifying the joined model, its alias, and the join condition. For example, assume we have two models to keep user data, the **users** and **profiles** models. In the **users** model, we have a field named `profileId` referencing a user's profile information. 

:::info
In joins, two models are in play: the **base model** and the **joined model**. **When accessing the fields of a joined model, you need to prefix the field name with its alias.** For base models, there is no alias; you can directly use their fields without any prefix.
:::

<ImageSwitcher
  lightImageSrc="/img/server/lookup_ex1_light.png?text=LightMode"
  darkImageSrc="/img/server/lookup_ex1_dark.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={900}
/>


We can easily join users and profiles tables as shown in example below:
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Join profiles information to users and fetch only the first 100 male users. 
// Since the reference field is named `profileId`, the profiles table is automatically joined with the alias `profileId`
// Users table is used as the base model, for base models, you do not need to prefix field names with any alias
const users = await agnost.db("mydb").model("users").findMany(
  { "profileId.gender": "male" },
  {
    join: "profileId",
    limit: 100,
  }
);
```

</TabItem>
</Tabs>

The above shortcut join definition, because of the use of reference fields, can be written as follows:
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Join profiles information to users and fetch only the first 100 male users
const users = await agnost
  .db("mydb")
  .model("users")
  .findMany(
    { "profile.gender": "male" }, // We prefix the joined table fields with its alias
    {
      join: {
        as: "profile", // Alias
        from: "profiles", // Joined table
        where: { "profile.id": "profileId" }, // Join condition, id of the profile equals to the profileId value of the user
      },
      limit: 100,
    }
	);
```

</TabItem>
</Tabs>

You can also perform multiple joins by specifying the join definitions in an array. For example, assume we also have **addresses** table where we store the addresses of a user. You can join both profiles and addresses as shown below:

 <Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Join profiles and addresses information to users and fetch only the first 100 female users 
// that have an address at Chicago
const users = await agnost
  .db("mydb")
  .model("users")
  .findMany(
    { "profile.gender": "female", "address.city": "Chicago" },
    {
      // Becase of the reference field `profileId``
      // the below join can also be defined as follows: join: ["profileId", { as: "address", ...}]
      join: [
        {
          as: "profile", // Alias
          from: "profiles", // Joined table
          where: { "profile.id": "profileId" }, // Join condition
        },
        {
          as: "address", // Alias
          from: "addresses", // Joined table
          where: { "address.userId": "id" }, // Join condition
        },
      ],
      limit: 100,
    }
  );
```

</TabItem>
</Tabs>

:::info
When defining aliases, please ensure there is no field with the same name in the base model. If you try to define an alias with the same name as a base model field, Agnost will throw an error.
:::

##### Join Parameters
If you define your own joins without using a reference field, you need to provide the following parameters.

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| as        | string         | Yes       | The alias of the joined table. |
| from        | string         | Yes       | The name of the database table (model) to join. |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to join the base and target model. The where condition can only include the fields of the base model and joined model and joined model field names need to be prefixed with the defined alias.      

### Lookup definition
Similar to joins, there are two ways that you can look up values from another table. In the first option, if you define a reference field in one of your models referencing the id field of another model, then listing just the name of the referenced field would be enough to perform a lookup. In the second option, you can define the lookup by specifying the looked-up table, its alias, join condition, sort, skip, and limit options.

We can easily lookup profile data for users in the example below:
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Add the profile data to users and return only the first 100 users
const users = await agnost.db("mydb").model("users").findMany(
  { }, // No filter
  {
    lookup: "profileId",
    limit: 100,
  }
);
```

</TabItem>
</Tabs>

The above shortcut lookup definition, because of the use of reference fields, can be written as follows:
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Lookup profiles information of users and fetch only the first 100 users
const users = await agnost
  .db("mydb")
  .model("users")
  .findMany(
    { }, // No filter
    {
      lookup: {
        as: "profile", // Alias
        from: "profiles", // Looked up table
        where: { "profile.id": "profileId" }, // Join condition, id of the profile equals to the profileId value of the user
        skip: 0, // No record skipping
        limit: 1 // Fetch the first matching profile data
      },
      limit: 100,
    }
	);
```

</TabItem>
</Tabs>

:::info
The only difference in the above two lookup examples is that in the first one, the profile information is returned as a JSON object. In contrast, the profile information is returned as an array of JSON objects in the second example. In this case, the JSON array will include only one JSON object.
:::

For example, assume that you have a **posts** table where the posts of users are kept. When fetching a specific user data you can also prefer to retrieve the latest 10 posts of a user besides the profile data.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Lookup profile and latest 10 posts information of a specific user
const userEmail = "john@abc.com";
const user = await agnost
  .db("mydb")
  .model("users")
  .findOne(
    { email: userEmail },
    {
      lookup: [
        "profileId", // Lookup profile data
        {
          as: "posts", // Alias
          from: "posts", // Looked up table
          where: { "posts.userId": "id" }, // Join condition, userId of the post equals to the id value of the user
          skip: 0, // No record skipping
          limit: 10, // Limit to 10 posts
          sort: { "posts.createdAt": "desc" }, // Sort by createdAt field of the posts
        },
      ],
    }
  );
```

</TabItem>
</Tabs>

##### Lookup Parameters
If you define your own joins without using a reference field, you need to provide the following parameters.

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| as        | string         | Yes       | The alias of the joined table. |
| from        | string         | Yes       | The name of the database table (model) to join. |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to join the base and target model. The where condition can only include the fields of the base model and joined model and joined model field names need to be prefixed with the defined alias.      
| sort      | SortingOrder     | No       | Sorts the returned objects by the values of the specified fields and sorting order. Sorting order is a JSON object where the keys are field names that you would like to sort, and their values are either `asc` or `desc`. |
| skip      | number     | No       | Number of records to skip. |
| limit      | number     | No       | Max number of records to return. |