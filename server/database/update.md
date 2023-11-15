---
sidebar_position: 5
description:
  Updating records in database tables.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Updating records

There are three methods (updateById, updateOne, and updateMany) in the database module of the Agnost server-side library that you can use to update database records. You can perform several different update operators, which are summarized below:

- **$set**: Directly updates the value of the field to the new one
- **$unset**: Removes the field value from the database. This operator can only be used in MongoDB databases.
- **$inc**: Increments the value of the numeric field (integer or decimal) by the increment amount.
- **$mul**: Multiplies the value of the numeric field (integer or decimal) by the specified value.
- **$min**: Assigns the minimum of the specified value or the field value. If the input value is less than the current field value, sets the field value to the specified value; otherwise, does not make any changes. This operator is applicable only for integer and decimal fields.
- **$max**: Assigns the maximum of the specified value or the field value. If the input value is greater than the current field value, sets the field value to the specified value; otherwise, does not make any changes. This operator is applicable only for integer and decimal fields.
- **$pull**: Removes the specified value from a basic values list or sub-object list. This operator can only be used in MongoDB databases.
- **$push**: Adds the specified value to a basic values list or sub-object list. This operator can only be used in MongoDB databases.
- **$pop**: Removes the last element from a basic values list or sub-object list. This operator can only be used in MongoDB databases.
- **$shift**: Removes the first element from a basic values list or sub-object list. This operator can only be used in MongoDB databases.


:::tip
There is an optimization that we have baked in when updating the field values of a record. To assign a new value to a field, you do not need to use the $set operator but directly assign the new value to the field. See examples below:
:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Upate the username of a user record
const user = await agnost.db("mydb").model("users").updateById(12345, {
  username: "new_user_name",
  age: 25,
  hobbies: ["movies", "games", "basketball"]
});

// The above update operation is the same as below
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(12345, {
    username: { $set: "new_user_name" },
    age: { $set: 25 },
    hobbies: { $set: ["movies", "games", "basketball"] },
  });
```

</TabItem>
</Tabs>


### Update operator examples
#### Setting the value of a field
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Upate the username of a user record
const user = await agnost.db("mydb").model("users").updateById(12345, {
  username: "new_user_name",
});
```

</TabItem>
</Tabs>

#### Unsetting the value of a field (MongoDB only)
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Remove the username of a user record
const user = await agnost.db("mydb").model("users").updateById(12345, {
  username: {$unset: 1},
});
```

</TabItem>
</Tabs>

#### Incrementing the value of a field
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Upate the like count of a post by 1
const user = await agnost
  .db("mydb")
  .model("posts")
  .updateById(3445, {
    like_count: { $inc: 1 },
    view_count: { $inc: 1 },
  });
```

</TabItem>
</Tabs>

#### Multilying the value of a field
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Multiplying the value of a field by 5
const user = await agnost
  .db("mydb")
  .model("posts")
  .updateById(3445, {
    dummy_field: { $mul: 5 },
  });
```

</TabItem>
</Tabs>

#### Setting the value of a field to a minimum
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Sets the value of the field to 100 if the existing field value is greater than 100, otherwise does nothing
const user = await agnost
  .db("mydb")
  .model("posts")
  .updateById(3445, {
    dummy_field: { $min: 100 },
  });
```

</TabItem>
</Tabs>


#### Setting the value of a field to a maximum
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Sets the value of the field to 100 if the existing field value is less than 500, otherwise does nothing
const user = await agnost
  .db("mydb")
  .model("posts")
  .updateById(3445, {
    dummy_field: { $max: 500 },
  });
```
</TabItem>
</Tabs>

#### Adding and removing items from an array (MongoDB only)
<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Remove the first element from skills basic values list
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(3445, {
    skills: { $shift: 1 },
  });

// Remove the last element from skills basic values list
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(3445, {
    skills: { $pop: 1 },
  });

// Add a new skill to the skills basic values list
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(3445, {
    skills: { $push: "JavaScript" },
  });

// Remove a specific skill from the skills basic values list
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(3445, {
    skills: { $pull: { skills: "C++" }},
  });

// Remove a specific address, city matching to "Chicago" from the addresses sub-object list. 
// In this example the addresses are stored as an array in users model and each address has a field named city
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(3445, {
    addresses: { $pull: { city: "Chicago" }},
  });
```

</TabItem>
</Tabs>

:::info
When using the $pull operator to remove an array entry in MongoDB databases, you need to provide a query to match the elements to remove. You can use the following function in your pull queries: $eq, $neq, $lt, $lte, $gt, $gte, $in, $nin, $and, and $exists.
:::

### Update record by id

The `updateById` method updates the record identified by the ID and returns the
updated record. If no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const updates = { age: 25, username: "luke" };
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById(12345, updates, {
    select: ["id", "name", "age", "username"],
  });
```

</TabItem>
</Tabs>

##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| id          | string or number     | Yes      | Unique identifier of the record to retrieve.                 |
| updates        | UpdateDefinition         | Yes       | Please see above [update operator examples](#update-operator-examples). |
| args        | UpdateByIdArgs         | No       | Optional arguments. |
| args. select | Array of field names | No       | Array of fields to include on the returned record; it can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record; it can include fields of the base model, joined models, and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.arrayFilters      | ArrayFilterFunction    | No       | The filtered positional operator $[identifier] in MongoDB identifies the array elements that match the arrayFilters conditions for an update operation. Array filters define the conditional match structure for array objects and are used during update operations that involve the update of array elements. You can only use $eq, $neq, $lt, $lte, $gt, $gte, $in, $nin, $and, and $exists functions in your array filter conditions. **Please note that this option is only available for MongoDB databases.** |

### Update one record

The `updateOne` method updates the first record matching the `where` condition
and returns the updated record. If the `where` condition matches multiple
documents, only the first document (in natural order) will be updated. If no
matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Update the first matching user record
const user = await agnost
  .db("mydb")
  .model("users")
  .updateOne(
    { email: "user@email.com" }, // Where query
    { age: 25, username: "luke" }, // Updates
    {
      select: ["id", "name", "age", "username"], // Options
    }
  );
```

</TabItem>
</Tabs>

##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| updates        | UpdateDefinition         | Yes       | Please see above [update operator examples](#update-operator-examples). |
| args        | UpdateOneArgs         | No       | Optional arguments. |
| args.select | Array of field names | No       | Array of fields to include on the returned record, it can include fields of the base model, joined and looked up models. If not provided, Agnost checks the `omit` list. If `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.omit   | Array of field names | No       | Array of fields to exclude on the returned record, it can include fields of the base model, joined models, and looked-up models. If not provided, Agnost checks the `select` list. If `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.arrayFilters      | ArrayFilterFunction    | No       | The filtered positional operator $[identifier] in MongoDB identifies the array elements that match the arrayFilters conditions for an update operation. Array filters define the conditional match structure for array objects and are used during update operations that involve the update of array elements. You can only use $eq, $neq, $lt, $lte, $gt, $gte, $in, $nin, $and, and $exists functions in your array filter conditions. **Please note that this option is only available for MongoDB databases.** |

### Update many records

The `updateMany` method updates the records matching the `where` condition and returns the number of the records updated in the database table.


<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Update all user records how are older than 18 years
const { count } = await agnost
  .db("mydb")
  .model("users")
  .updateMany(
    { age: { $gt: 18 } }, // Where query
    { dummyfield: "value", dummyField2: { $inc: 5 } } // Updates
  );
```

</TabItem>
</Tabs>

##### Parameters

| Name        | Data type            | Required | Description                                                  |
| ----------- | -------------------- | -------- | ------------------------------------------------------------ |
| where          | [WhereCondition](/server/database/where)     | Yes      | The where condition that will be used to filter the records. The where condition can only include the fields of the base model and joined models but not looked-up models.                 |
| updates        | UpdateDefinition         | Yes       | Please see above [update operator examples](#update-operator-examples). |
| args        | UpdateManyArgs         | No       | Optional arguments. |
| args.join      | [JoinDefinition](/server/database/lookup_join#join-definition)     | No       | The join(s) to make (left outer join) while getting the record from the database. You can either specify a reference field name, a join definition, or an array of reference fields and join definitions if you would like to make multiple joins. |
| args.arrayFilters      | ArrayFilterFunction    | No       | The filtered positional operator $[identifier] in MongoDB identifies the array elements that match the arrayFilters conditions for an update operation. Array filters define the conditional match structure for array objects and are used during update operations that involve the update of array elements. You can only use $eq, $neq, $lt, $lte, $gt, $gte, $in, $nin, $and, and $exists functions in your array filter conditions. **Please note that this option is only available for MongoDB databases.** |
