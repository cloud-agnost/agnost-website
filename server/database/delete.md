---
sidebar_position: 6
description:
  Deleting records from database tables.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Deleting records

There are three methods (`deleteById`, `deleteOne` and `deleteMany`) in the database module of Agnost server side library that you can use to delete database records.

### Delete by ID Method

The `deleteById` method deletes the record identified by the ID and returns the
deleted document count. The returned value will be 1 if the record is successfully deleted or zero if not.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const { count } = await agnost.db("mydb").model("users").deleteById(12345);
```

</TabItem>
</Tabs>



##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| id          | string or number     | Yes      | Unique identifier of the record to delete.                 |


### Delete One Record

The `deleteOne` method deletes the first record matching the `where` condition
and returns the deleted document count. If the `where` condition matches multiple documents, only the first document (in natural order, which often corresponds to insertion order unless there's an index that determines otherwise) will be deleted.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Delete the user mathing the email address
const inputEmail = "john@email.com";
const result = await agnost
  .db("mydb")
  .model("users")
  .deleteOne({ email: inputEmail });

// Delete the first matching user whose name includes john and older than 18 years
const { count } = await agnost
  .db("mydb")
  .model("users")
  .deleteOne(
    { $and: [{ $includes: ["name", "john"] }, { $gt: ["profile.age", 18] }] },
    { join: { as: "profile", from: "profile", where: { id: "profile.id" } } }
  );
```
</TabItem>
</Tabs>



##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args        | DeleteArgs         | No       | Optional arguments. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |



### Delete Many Records

The `deleteMany` method deletes the records matching the `where` condition and returns the count of the records deleted from the database table.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Delete user records whose name includes john and older than 18 years
const { count } = await agnost
  .db("mydb")
  .model("users")
  .deleteMany(
    { $and: [{ $includes: ["name", "john"] }, { $gt: ["profile.age", 18] }] },
    { join: { as: "profile", from: "profile", where: { id: "profile.id" } } }
  );
```
</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the count of the records deleted in the
  database.

</DetailedResponse>


##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| args        | DeleteArgs         | No       | Optional arguments. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
