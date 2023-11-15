---
sidebar_position: 4
description:
  Reading records from database tables.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Reading records

There are three methods (`findById`, `findOne` and `findMany`) in the database module of Agnost server side library that you can use to fetch database records. You can also provide optional parameters to these methods to customize how you retrieve record data. Below are the options that you can customize when calling retrieval methods, all optional:

- **select**: Specifies which columns data for each record to return in the response. This parameter is an **array of field names** to include on the returned record and can include fields of the base model and looked-up models.
- **omit**: Similar to select, but instead of which column data to return, omit specifies with column data not to return. This parameter is also an **array of field names** to include on the returned record, and can include fields of base model and looked-up models. **You can specify either `select` or `omit` but not both.**
- **lookup**: Defines lookups to make when returning record information. Lookups are subqueries that fetch data from other tables for each retrieved record of the base table. In contrast to **joins**, you cannot use lookups in your where queries. As an example, when fetching user data from the users table, you can also retrieve use profile data from the profiles table and also their last 20 wall posts from the wallposts table.
- **join**: Specifies the **left outer joins** to make with other tables. You can use the joined data in your where queries to narrow down the records to return.
- **sort**: If fetching multiple records from a table you can specify the sorting order of returned records.
- **skip**: You can specify the number of records to skip, which is helpful if you apply pagination when retrieving records.
- **limit**: Sets the maximum number of records to return.
- **useReadReplica**: If your database has read-replicas, you can run the read query in one of the read-replicas instead of the primary read-ride instance.

### Find record by id

The `findById` method returns a single database record identified by its ID. If
no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const user = await agnost
	.db("mydb")
	.model("users")
	.findById(12345, {
		select: ["id", "name", "email", "profile.age", "profile.nickname"],
		join: ["profile"],
	});
```

</TabItem>
</Tabs>


##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| id          | string or number     | Yes      | Unique identifier of the record to retrieve.                 |
| args        | FindByIdArgs         | No       | Optional arguments. |
| args.select | Array of field names | No       | Array of fields to include on the returned record, can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, can include fields of the base model, joined models and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.lookup      | [LookupDefinition](/server/database/lookup_join#lookup-definition)     | No       | The lookup(s) to make while getting the record from the database. You can either specify a reference field name, a lookup definition or an array of reference fields and lookup definitions if you would like to do multiple lookups. |
| args.useReadReplica      | boolean     | No       | Specifies whether to use the read replica of the database or not. If no read replica database exists, Agnost uses the read-write database. |

### Find one record

The `findOne` method returns a single database record matching the `where`
query. If no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Return the first user whose name includes john and older than 18 years
const user = await agnost
	.db("mydb")
	.model("users")
	.findOne(
		{ $and: [{ $includes: ["name", "john"] }, { $gt: ["profile.age", 18] }] },
		{
			sort: { name: "asc" },
			select: ["id", "name", "email", "profile.age", "profile.nickname"],
			join: "profile",
		}
	);
```

</TabItem>
</Tabs>


##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args        | FindOneArgs         | No       | Optional arguments. |
| args.select | Array of field names | No       | Array of fields to include on the returned record, can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, can include fields of the base model, joined models and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.lookup      | [LookupDefinition](/server/database/lookup_join#lookup-definition)     | No       | The lookup(s) to make while getting the record from the database. You can either specify a reference field name, a lookup definition or an array of reference fields and lookup definitions if you would like to make multiple lookups. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.sort      | SortingOrder     | No       | Sorts the returned objects by the values of the specified fields and sorting order. Sorting order is a JSON object where the keys are field names that you would like to sort, and their values are either `asc` or `desc`. |
| args.skip      | number     | No       | Number of records to skip. |
| args.useReadReplica      | boolean     | No       | Specifies whether to use the read replica of the database or not. If no read replica database exists, Agnost uses the read-write database. |

### Find many records

The `findMany` method returns database records matching the `where` query. If no
matching objects are found, an empty array is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Return 10 users whose name includes john and older than 18 years
const users = await agnost
	.db("mydb")
	.model("users")
	.findOne(
		{ $and: [{ $includes: ["name", "john"] }, { $gt: ["profile.age", 18] }] },
		{
			select: ["id", "name", "email", "profile.age", "profile.nickname"],
			join: "profile",
			limit: 10,
			skip: 0,
			sort: { name: "asc" },
			useReadReplica: true,
		}
	);
```

</TabItem>
</Tabs>


##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args        | FindManyArgs         | No       | Optional arguments. |
| args.select | Array of field names | No       | Array of fields to include on the returned record, can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, can include fields of the base model, joined models and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.lookup      | [LookupDefinition](/server/database/lookup_join#lookup-definition)     | No       | The lookup(s) to make while getting the record from the database. You can either specify a reference field name, a lookup definition or an array of reference fields and lookup definitions if you would like to make multiple lookups. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.sort      | SortingOrder     | No       | Sorts the returned objects by the values of the specified fields and sorting order. Sorting order is a JSON object where the keys are field names that you would like to sort, and their values are either `asc` or `desc`. |
| args.skip      | number     | No       | Number of records to skip. |
| args.limit      | number     | No       | Max number of records to return. |
| args.useReadReplica      | boolean     | No       | Specifies whether to use the read replica of the database or not. If no read replica database exists uses the read-write database. |




