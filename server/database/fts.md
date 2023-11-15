---
sidebar_position: 8
description:
  Performing full text search on table fields.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Full text search
You can run full-text search on your database tables fields that are market as **searchable**. When you define a `text` or `rich-text` field in Agnost studio and mark searchable, Agnost creates a full text search index. You can then peform full-text search on these fields using the `searchText` method.

:::info
`searchText` retrieves matching records from the database table running the text search.
- There should be at least one `text` or `rich-text` field marked as
  **searchable** in the model definition to use this method.
- If **where** condition is specified, it applies the filter query to further narrow down
  the results.
:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Assuming there is a full-text indexed 'name' field in users table
const searchText = "John Doe";

const searchResults = await agnost
  .db("mydb")
  .model("users")
  .searchText("name", searchText, {
    where: { age: { $gt: 18 } },
    sort: { name: "asc" },
    limit: 10,
    skip: 0,
  });
```

</TabItem>
</Tabs>

:::info
Please note that MongoDB creates a single text index per collection, meaning that any field marked as searchable will be using the same index. This means that if you have more than one field marked as searchable in your database model, the text search will be run across all these searchable fields, implying the field name does not have any effect on the `searchText` method for MongoDB databases.
:::

##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| field        | string         | Yes       | The full-text search indexed field name where the text search will be applied. |
| text        | string         | Yes       | The search text. |
| args        | SearchTextArgs         | No       | Optional arguments. |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args.select | Array of field names | No       | Array of fields to include on the returned record, can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, can include fields of the base model, joined models and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.lookup      | [LookupDefinition](/server/database/lookup_join#lookup-definition)     | No       | The lookup(s) to make while getting the record from the database. You can either specify a reference field name, a lookup definition or an array of reference fields and lookup definitions if you would like to make multiple lookups. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.sort      | SortingOrder     | No       | Sorts the returned objects by the values of the specified fields and sorting order. Sorting order is a JSON object where the keys are field names that you would like to sort, and their values are either `asc` or `desc`. |
| args.skip      | number     | No       | Number of records to skip. |
| args.limit      | number     | No       | Max number of records to return. |
| args.useReadReplica      | boolean     | No       | Specifies whether to use the read replica of the database or not. If no read replica database exists uses the read-write database. |