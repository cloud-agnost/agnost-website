---
sidebar_position: 3
description:
  Model methods allow you to create, update, delete and query your app data.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Model

The Model object allows you perform CRUD operations on the specified database
model (e.g., table in relational databases or collection in NoSQL databases). In
Agnost, models define the data structure and data validation rules of your
database tables/collections.

## Model Methods

The `model` method creates a new Model object for the specified database model
(e.g., table in relational databases or collection in NoSQL databases). In
Agnost, models define the data structure and data validation rules of your
database tables/collections.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
// Create a Model for the 'users' model
const userModel = agnost.db("myDb").model("users")

// Use the userModel to perform database operations
const newUser = await userModel.create({
  username: "JohnDoe",
  email: "john@doe.com",
})

console.log("New User:", newUser)
```

</TabItem>


</Tabs>


### Create a Record

The `createOne` method creates a single record in the database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const data = { name: "John", age: 25 }

const newUser = await agnost.db("mydb").model("users").createOne(data)
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<object>`: Returns the newly created record in the database.

</DetailedResponse>


##### Parameters

| Name   | Type        | Description                      |
| ------ | ----------- | -------------------------------- |
| `data` | `ModelType` | Data to be inserted as a record. |

### Create Multiple Records

The `createMany` method creates multiple records in the database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const data = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
]

const count = await agnost.db("mydb").model("users").createMany(data)
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the count of newly created records in the
  database.

</DetailedResponse>


##### Parameters

| Name   | Type          | Description                     |
| ------ | ------------- | ------------------------------- |
| `data` | `ModelType[]` | List of records to be inserted. |

### Find One Record

The `findOne` method returns a single database record matching the `where`
query. If no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $gt: 18 } }

const user = await agnost
  .db("mydb")
  .model("users")
  .findOne(whereCondition, {
    sort: { name: "asc" },
    select: ["name", "age"],
    join: ["profile"],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<null | object>`: Returns the matching record or `null`.

</DetailedResponse>


##### Parameters

| Name    | Type                                 | Description                                                                                  |
| ------- | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| `where` | [`WhereCondition`](#where-condition) | Where condition to filter records.                                                           |
| `args`  | [`FindOneArgs`](#find-one-args)      | Optional arguments including `sort`, `skip`, `select`, `omit`, `join`, and `useReadReplica`. |

### Find Records by ID

The `findById` method returns a single database record identified by its ID. If
no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const user = await agnost
  .db("mydb")
  .model("users")
  .findById("12345", { select: ["name", "age"], join: ["profile"] })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<null | object>`: Returns the matching record or `null`.

</DetailedResponse>


##### Parameters

| Name   | Type                 | Description                                                                  |
| ------ | -------------------- | ---------------------------------------------------------------------------- |
| `id`   | `string` or `number` | Unique identifier of the record to retrieve.                                 |
| `args` | `FindByIdArgs`       | Optional arguments including `select`, `omit`, `join`, and `useReadReplica`. |

### Find Many Records

The `findMany` method returns database records matching the `where` query. If no
matching objects are found, an empty array is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $gt: 18 } }

const users = await agnost
  .db("mydb")
  .model("users")
  .findMany(whereCondition, {
    sort: { name: "asc" },
    limit: 10,
    skip: 0,
    select: ["name", "age"],
    join: ["profile"],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<object[]>`: Returns the matching records or an empty array.

</DetailedResponse>


##### Parameters

| Name    | Type                                 | Description                                                                                           |
| ------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `where` | [`WhereCondition`](#where-condition) | Where condition to filter records.                                                                    |
| `args`  | `FindManyArgs`                       | Optional arguments including `sort`, `skip`, `limit`, `select`, `omit`, `join`, and `useReadReplica`. |

### Search Records

The `searchText` method retrieves a list of records from the database running a
text search. It performs a logical OR search of the terms unless specified as a
phrase between double-quotes. If a filter is specified, it applies the filter
query to further narrow down the results.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const searchText = "John Doe"
const searchFilter = { age: { $gt: 18 } }

const searchResults = await agnost
  .db("mydb")
  .model("users")
  .searchText(searchText, {
    where: searchFilter,
    sort: { name: "asc" },
    limit: 10,
    skip: 0,
    select: ["name", "age"],
    join: ["profile"],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<object[]>`: Returns the matching records or an empty array.

</DetailedResponse>


##### Parameters

| Name   | Type             | Description                                                                                                    |
| ------ | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `text` | `string`         | Text to search.                                                                                                |
| `args` | `SearchTextArgs` | Optional arguments including `where`, `sort`, `skip`, `limit`, `select`, `omit`, `join`, and `useReadReplica`. |

### Update One Record

The `updateOne` method updates the first record matching the `where` condition
and returns the updated record. If the `where` condition matches multiple
documents, only the first document (in natural order) will be updated. If no
matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $gt: 18 } }
const updates = { status: "active" }

const result = await agnost
  .db("mydb")
  .model("users")
  .updateOne(whereCondition, updates, {
    select: ["name", "age"],
    join: ["profile"],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the number of records updated in the database.

</DetailedResponse>


##### Parameters

| Name      | Type                                 | Description                                                                |
| --------- | ------------------------------------ | -------------------------------------------------------------------------- |
| `where`   | [`WhereCondition`](#where-condition) | Where condition to filter records.                                         |
| `updates` | `UpdateDefinition`                   | Object containing fields and their values to update.                       |
| `args`    | `UpdateOneArgs`                      | Optional arguments including `select`, `omit`, `join`, and `arrayFilters`. |

:::info

Please note that the provided examples demonstrate the usage of these methods in
an Agnost server context. Adjust the method calls and arguments according to
your specific Agnost server configuration and use case.

:::

### Update Record by ID

The `updateById` method updates the record identified by the ID and returns the
updated record. If no matching record is found, `null` is returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const updates = { age: 25 }
const user = await agnost
  .db("mydb")
  .model("users")
  .updateById("12345", updates, {
    select: ["name", "age"],
    omit: ["email"],
    arrayFilters: [{ filter: { $eq: ["status", "active"] } }],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<null | object>`: Returns the updated record or `null`.

</DetailedResponse>


##### Parameters

| Name | Type                 | Description                                |
| ---- | -------------------- | ------------------------------------------ |
| `id` | `string` or `number` | Unique identifier of the record to update. |

| `updates` | `UpdateDefinition` | Object containing fields and their values to
update. | | `args` | `UpdateByIdArgs` | Optional arguments including `select`,
`omit`, and `arrayFilters`. |

### Update Many Records

The `updateMany` method updates the records matching the `where` condition.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $gt: 18 } }
const updates = { status: "active" }

const result = await agnost
  .db("mydb")
  .model("users")
  .updateMany(whereCondition, updates, {
    join: ["profile"],
    arrayFilters: [{ filter: { $eq: ["status", "inactive"] } }],
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the number of records updated in the database.

</DetailedResponse>


##### Parameters

| Name      | Type                                 | Description                                             |
| --------- | ------------------------------------ | ------------------------------------------------------- |
| `where`   | [`WhereCondition`](#where-condition) | Where condition to filter records.                      |
| `updates` | `UpdateDefinition`                   | Object containing fields and their values to update.    |
| `args`    | `UpdateManyArgs`                     | Optional arguments including `join` and `arrayFilters`. |

### Delete One Record

The `deleteOne` method deletes the first record matching the `where` condition
and returns the deleted document.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $lt: 25 } }

const deletedCount = await agnost
  .db("mydb")
  .model("users")
  .deleteOne(whereCondition)
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the count of the records deleted in the
  database.

</DetailedResponse>


##### Parameters

| Name    | Type                                 | Description                          |
| ------- | ------------------------------------ | ------------------------------------ |
| `where` | [`WhereCondition`](#where-condition) | Where condition to filter records.   |
| `args`  | `DeleteArgs`                         | Optional arguments including `join`. |

### Delete by ID Method

The `deleteById` method deletes the record identified by the ID and returns the
deleted document.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const deletedCount = await agnost.db("mydb").model("users").deleteById("12345")
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the count of the records deleted in the
  database.

</DetailedResponse>


##### Parameters

| Name | Type                 | Description                                |
| ---- | -------------------- | ------------------------------------------ |
| `id` | `string` or `number` | Unique identifier of the record to delete. |

### Delete Many Records

The `deleteMany` method deletes the records matching the `where` condition.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const whereCondition = { age: { $lt: 25 } }

const deletedCount = await agnost
  .db("mydb")
  .model("users")
  .deleteMany(whereCondition)
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<CountInfo>`: Returns the count of the records deleted in the
  database.

</DetailedResponse>


##### Parameters

| Name    | Type                                 | Description                                  |
| ------- | ------------------------------------ | -------------------------------------------- |
| `where` | [`WhereCondition`](#where-condition) | Where condition to filter records to delete. |
| `args`  | `DeleteArgs`                         | Optional arguments including `join`.         |

### Aggregate Data

The `aggregate` method groups the records of the model by specified expressions
or fields to calculate group statistics.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const result = await agnost
  .db("mydb")
  .model("users")
  .aggregate({
    where: { age: { $gt: 18 } },
    join: [
      "profileId",
      {
        as: "orders",
        from: "orders",
        where: { id: "orders.id" },
      },
    ],
    groupBy: ["name"],
    computations: [
      { $sum: "age", as: "totalAge" },
      { $avg: "salary", as: "averageSalary" },
    ],
    having: { totalAge: { $gt: 100 } },
    sort: { name: "asc" },
    limit: 10,
    skip: 0,
  })
```

</TabItem>
</Tabs>


<DetailedResponse title="Returns">


- `Promise<object[]>`: Returns the aggregation results.

</DetailedResponse>


##### Parameters

| Name             | Type                                 | Description                                                                                                                             |
| ---------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `args`           | [`AggregateArgs`](#aggregate-args)   | Input parameters including `where`, `join`, `groupBy`, `computations`, `having`, `sort`, `limit`, and `skip`.                           |
| `where`          | [`WhereCondition`](#where-condition) | Optional: Where condition to filter records before aggregation.                                                                         |
| `join`           | `JoinDefinition[]`                   | Optional: Join(s) to make (left outer join) while getting the record from the database.                                                 |
| `groupBy`        | `string[]`                           | Optional: Model field names and/or expressions to group the records. If not specified, aggregates all records of the model.             |
| `computations`   | [`Computation<D>[]`](#computation)   | Computations to be performed on the grouped records. At least one computation must be provided.                                         |
| `having`         | [`WhereCondition`](#where-condition) | Optional: Conditions to apply on the grouped results to further narrow down the results.                                                |
| `useReadReplica` | `boolean`                            | Optional: Specifies whether to use the read replica of the database or not. If no read replica exists, it uses the read-write database. |
| `sort`           | `SortingOrder`                       | Optional: Sorts the returned groups by the values of the computations. It can be ascending or descending.                               |
| `skip`           | `number`                             | Optional: Number of records to skip.                                                                                                    |
| `limit`          | `number`                             | Optional: Max number of records to return.                                                                                              |

## Arguments

### Aggregate Args

Here's a table summarizing the `AggregateArgs` type alias with its properties
and descriptions:

| Property         | Type                                           | Description                                                                                                                                      |
| ---------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `computations`   | [`Computation or Computation[]`](#computation) | The computations to be performed on the grouped records. At least one computation needs to be provided.                                          |
| `groupBy`        | `GroupByDefinition`                            | Optional. The model field names and/or expressions to group the records. If not specified, aggregates all records of the model.                  |
| `having`         | [`WhereCondition`](#where-condition)           | Optional. The conditions to be applied on the grouped results to further narrow down the results.                                                |
| `join`           | `JoinDefinition`                               | Optional. The join(s) to make (left outer join) while getting the record from the database.                                                      |
| `limit`          | `number`                                       | Optional. The maximum number of objects to return.                                                                                               |
| `skip`           | `number`                                       | Optional. The number of records to skip.                                                                                                         |
| `sort`           | `SortingOrder`                                 | Optional. Sorts the returned groups by the values of the computations.                                                                           |
| `useReadReplica` | `boolean`                                      | Optional. Specifies whether to use the read replica of the database or not. If no read replica database exists, it uses the read-write database. |
| `where`          | [`WhereCondition`](#where-condition)           | Optional. The where condition that will be used to filter the records before aggregation.                                                        |

This type alias represents the input parameters for the `aggregate` method. You
can use these properties to customize your aggregation queries in Agnost server.

### Find One Args

Here is a table representation of the `FindOneArgs` type alias:

| Field Name    | Type                               | Description                                                                                                                                                                                                                        |
| ------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FindOneArgs` |                                    | Specifies the input parameters of the `findOne` method                                                                                                                                                                             |
|               | `{ join?: JoinDefinition }`        | Optional: The join(s) to make (left outer join) while getting the record from the database                                                                                                                                         |
|               | `{ omit?: (keyof ModelType)[] }`   | Optional: Array of fields to exclude on the returned record. If not provided, checks the `select` list if `select` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both. |
|               | `{ select?: (keyof ModelType)[] }` | Optional: Array of fields to include on the returned record. If not provided, checks the `omit` list if `omit` is also not provided, then all fields will be returned. You can specify either `select` or `omit` but not both.     |
|               | `{ skip?: number }`                | Optional: Number of records to skip                                                                                                                                                                                                |
|               | `{ sort?: SortingOrder }`          | Optional: Sorts the returned object by the values of the specified fields and sorting order                                                                                                                                        |
|               | `{ useReadReplica?: boolean }`     | Optional: Specifies whether to use the read replica of the database or not. If no read replica database exists, it uses the read-write database.                                                                                   |

The `FindOneArgs` type alias specifies the input parameters for the `findOne`
method, which is used for retrieving a single record from the database based on
specified criteria. These parameters include options for joining tables,
selecting or omitting specific fields, skipping records, sorting results, and
using read replicas. It provides flexibility for customizing the query to
retrieve the desired record.

### Where Condition

Here is a table representation of the `WhereCondition` type alias:

| Field Name       | Type                                                                        | Description                                         |
| ---------------- | --------------------------------------------------------------------------- | --------------------------------------------------- |
| `WhereCondition` | [`FieldCondition`](#field-condition) \| [`QueryFunction`](#query-functions) | Defines the where condition of the database queries |

The `WhereCondition` type alias is used to define the conditions that can be
applied to database queries. It can either be a `FieldCondition` or a
`QueryFunction`, allowing you to specify various conditions and functions to
filter and query data from the database based on the database name (`D`) and the
model list (`T`).

### Field Condition

Here is a table representation of the `FieldCondition` type alias:

| Field Name       | Type                                 | Description                                       |
| ---------------- | ------------------------------------ | ------------------------------------------------- |
| `FieldCondition` | [` QueryFunction`](#query-functions) | Defines the field conditions for database queries |

The `FieldCondition` type alias is used to define field-specific conditions that
can be applied to database queries. It allows you to specify conditions for
individual fields in the model (`M`) based on the database name (`D`) and model
list (`T`). Each field condition is represented as a key-value pair, where the
key is a field name from the model, and the value can be either a field value of
type `M[K]` or a `QueryFunction` to define more complex conditions.

### Query Functions

Here's a table summarizing the `QueryFunction` type alias with its functions and
descriptions: Here's a table summarizing the `QueryFunction` type alias with its
functions and descriptions:

| Function      | Type or Signature                                                                | Description                                                                                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$abs`        | `NumericValue or [value: NumericValue]`                                          | Returns the absolute value of a number.                                                                                                                                                     |
| `$acos`       | `NumericValue or [value: NumericValue]`                                          | Returns the inverse cosine (arccosine) of a number, in radians in the range 0 to Pi.                                                                                                        |
| `$acosh`      | `NumericValue or [value: NumericValue]`                                          | Returns the inverse hyperbolic cosine (hyperbolic arc cosine) of a value.                                                                                                                   |
| `$add`        | `NumericValue[]`                                                                 | Adds numbers together.                                                                                                                                                                      |
| `$and`        | `BooleanValue[]`                                                                 | Performs logical AND operation.                                                                                                                                                             |
| `$asin`       | `NumericValue or [value: NumericValue]`                                          | Returns the inverse sine (arcsine) of a number in radians, in the range -Pi/2 to Pi/2.                                                                                                      |
| `$asinh`      | `NumericValue or [value: NumericValue]`                                          | Returns the inverse hyperbolic sine (hyperbolic arcsine) of a value.                                                                                                                        |
| `$atan`       | `NumericValue or [value: NumericValue]`                                          | Returns the inverse tangent (arctangent) of a value in radians, in the range -Pi/2 to Pi/2.                                                                                                 |
| `$atan2`      | `[y: NumericValue, x: NumericValue]`                                             | Returns the inverse tangent (arc tangent) of y / x.                                                                                                                                         |
| `$atanh`      | `NumericValue or [value: NumericValue]`                                          | Returns the inverse hyperbolic tangent (hyperbolic arctangent) of a value in radians.                                                                                                       |
| `$ceil`       | `NumericValue or [value: NumericValue]`                                          | Returns the smallest integer greater than or equal to the specified number.                                                                                                                 |
| `$charindex`  | `[mainText: StringValue, searchText: NumericValue, startingIndex: NumericValue]` | Searches a string for an occurrence of a substring and returns the index (zero-based) of the first occurrence. If the substring is not found, returns -1 in MongoDB and 0 in SQL databases. |
| `$concat`     | `StringValue[]`                                                                  | Concatenates strings and returns the concatenated string.                                                                                                                                   |
| `$cos`        | `NumericValue or [value: NumericValue]`                                          | Returns the cosine of a value that is measured in radians.                                                                                                                                  |
| `$cosh`       | `NumericValue or [value: NumericValue]`                                          | Returns the hyperbolic cosine of a value that is measured in radians.                                                                                                                       |
| `$dateAdd`    | `[date: DateValue, duration: NumericValue, unitOfMeasure: "year"                 | "quarter"                                                                                                                                                                                   | "week" | "month" | "day" | "hour" | "minute" | "second" | "millisecond"]` | Adds a period of time to the input date & time value and returns the resulting date & time value. |
| `$dateDiff`   | `[startDate: DateValue, endDate: DateValue, unitOfMeasure: "year"                | "quarter"                                                                                                                                                                                   | "week" | "month" | "day" | "hour" | "minute" | "second" | "millisecond"]` | Calculates the difference between two date & time values as a duration. |
| `$dayOfMonth` | `DateValue or [date: DateValue]`                                                 | Returns the day of the month for a date as a number between 1 and 31.                                                                                                                       |
| `$dayOfWeek`  | `DateValue or [date: DateValue]`                                                 | Returns the day of the week for a date as a number between 1 (Sunday) and 7 (Saturday).                                                                                                     |
| `$dayOfYear`  | `DateValue or [date: DateValue]`                                                 | Returns the day of the year for a date as a number between 1 and 366.                                                                                                                       |
| `$degrees`    | `NumericValue or [radians: NumericValue]`                                        | Converts an input value measured in radians to degrees.                                                                                                                                     |
| `$distance`   | `[point1: AnyValue, point2: AnyValue]`                                           | Calculates the distance between two geo points in meters.                                                                                                                                   |
| `$divide`     | `[dividend: NumericValue, divisor: NumericValue]`                                | Returns the result of dividing the first number by the second.                                                                                                                              |
| `$endsWith`   | `[mainText: StringValue, searchText: StringValue]`                               | Checks whether a string ends with the characters of a specified string, returning true or false as appropriate.                                                                             |
| `$eq`         | `[leftOperand: AnyValue, rightOperand: AnyValue]`                                | Checks equality of two values.                                                                                                                                                              |
| `$exists`     | `AnyValue or [value: AnyValue]`                                                  | Checks if the value exists or not.                                                                                                                                                          |
| `$exp`        | `NumericValue or [value: NumericValue]`                                          | Raises Euler’s number (e, the base of the natural logarithm) to the specified exponent and returns the result.                                                                              |
| `$floor`      | `NumericValue or [value: NumericValue]`                                          | Returns the largest integer less than or equal to the specified number.                                                                                                                     |
| `$gt`         | `[firstValue: NumericValue, secondValue: NumericValue]`                          | Checks whether the first value is greater than the second value.                                                                                                                            |
| `$gte`        | `[firstValue: NumericValue, secondValue: NumericValue]`                          | Checks whether the first value is greater than or equal to the second value.                                                                                                                |
| `$hour`       | `DateValue or [date: DateValue]`                                                 | Returns the hour part of a date as a number between 0 and 23.                                                                                                                               |
| `$in`         | `[value: AnyValue, arrayOfValues: ArrayValue]`                                   | Checks whether the value is in an array.                                                                                                                                                    |
| `$includes`   | `[mainText: StringValue, searchText: StringValue, caseSensitive?: boolean]`      | Checks whether the main string includes the characters of the search string, returning true or false as appropriate.                                                                        |
| `$left`       | `[text: StringValue, characterCount: NumericValue]`                              | Returns the first count characters from the beginning of the main string as a new string.                                                                                                   |
| `$length`     | `StringValue or [text: StringValue]`                                             | Returns the number of characters in the specified string.                                                                                                                                   |
| `$ln`         | `NumericValue or [value: NumericValue]`                                          | Calculates the natural logarithm of a number and returns the result as a decimal number.                                                                                                    |
| `$log`        | `[number: NumericValue, base: NumericValue]`                                     | Calculates the log of a number in the specified base and returns the result as a double.                                                                                                    |
| `$log10`      | `NumericValue or [value: NumericValue]`                                          | Calculates the log base 10 of a number and returns the result as a decimal number.                                                                                                          |
| `$lower`      | `StringValue or [text: StringValue]`                                             | Converts a string to lowercase and returns the resulting new string.                                                                                                                        |
| `$lt`         | `[firstValue: NumericValue, secondValue: NumericValue]`                          | Checks whether the first value is less than the second value.                                                                                                                               |
| `$lte`        | `[firstValue: NumericValue, secondValue: NumericValue]`                          | Checks whether the first value is less than or equal to the second value.                                                                                                                   |
| `$ltrim`      | `StringValue or [text: StringValue]`                                             | Removes whitespace characters (e.g., spaces) from the beginning of a string.                                                                                                                |
| `$minute`     | `DateValue or [date: DateValue]`                                                 | Returns the minute part of a date as an integer between 0 and 59.                                                                                                                           |
| `$mod`        | `[dividend: NumericValue, divisor: NumericValue]`                                | Returns the remainder of the first number divided by the second.                                                                                                                            |
| `$month`      | `DateValue or [date: DateValue]`                                                 | Returns the month of a date as a number between 1 and 12.                                                                                                                                   |
| `$multiply`   | `NumericValue[]`                                                                 | Multiplies numbers together and returns the result.                                                                                                                                         |
| `$neq`        | `[leftOperand: AnyValue, rightOperand: AnyValue]`                                | Checks not-equality of two values.                                                                                                                                                          |
| `$nin`        | `[value: AnyValue, arrayOfValues: ArrayValue]`                                   | Checks whether the value is not in an array.                                                                                                                                                |
| `$not`        | `BooleanValue or [value: BooleanValue]`                                          | Performs logical NOT operation.                                                                                                                                                             |
| `$or`         | `BooleanValue[]`                                                                 | Performs logical OR operation.                                                                                                                                                              |
| `$point`      | `[longitude: NumericValue, latitude: NumericValue]`                              | Constructs and returns a geo point value given the constituent longitude and latitude properties.                                                                                           |
| `$pow`        | `[number: NumericValue, exponent: NumericValue]`                                 | Raises a number to the specified exponent and returns the result.                                                                                                                           |
| `$radians`    | `NumericValue or [degrees: NumericValue]`                                        | Converts an input value measured in degrees to radians.                                                                                                                                     |
| `$right`      | `[text: StringValue, characterCount: NumericValue]`                              | Returns the last count characters from the end of the main string as a new string.                                                                                                          |
| `$round`      | `[number: NumericValue, decimalPlaces: NumericValue]`                            | Rounds a number to a whole integer or to a specified decimal place.                                                                                                                         |
| `$rtrim`      | `StringValue or [text: StringValue]`                                             | Removes whitespace characters (e.g., spaces) from the end of a string.                                                                                                                      |
| `$second`     | `DateValue or [date: DateValue]`                                                 | Returns the second part of a date as a number between 0 and 59.                                                                                                                             |
| `$sin`        | `NumericValue or [value: NumericValue]`                                          | Returns the sine of a value that is measured in radians.                                                                                                                                    |
| `$sinh`       | `NumericValue or [value: NumericValue]`                                          | Returns the hyperbolic sine of a value that is measured in radians.                                                                                                                         |
| `$size`       | `ArrayValue or [arrayValue: ArrayValue]`                                         | Returns the size of the array.                                                                                                                                                              |
| `$sqrt`       | `NumericValue or [value: NumericValue]`                                          | Calculates the square root of a positive number and returns the result as a decimal.                                                                                                        |
| `$startsWith` | `[mainText: StringValue, searchText: StringValue]`                               | Checks whether a string starts with the characters of a specified string, returning true or false as appropriate.                                                                           |
| `$strToDate`  | `StringValue or [dateString: StringValue]`                                       | Converts the input string into a date. The input string needs to be in the following format: 'YYYY-MM-DD HH24:MI:SS', e.g., '2023-09-07 23:07:35'.                                          |
| `$substring`  | `[text: StringValue, startingIndex: NumericValue, characterCount: NumericValue]` | Returns the substring of a string. The substring starts with the character at the specified index (zero-based) in the string for the number of characters (count) specified.                |
| `$subtract`   | `[number1: NumericValue, number2: NumericValue]`                                 | Subtracts two numbers to return the difference.                                                                                                                                             |
| `$tan`        | `NumericValue or [value: NumericValue]`                                          | Returns the tangent of a value that is measured in radians.                                                                                                                                 |
| `$tanh`       | `NumericValue or [value: NumericValue]`                                          | Returns the hyperbolic tangent of a value that is measured in radians.                                                                                                                      |
| `$toBoolean`  | `AnyValue or [value: AnyValue]`                                                  | Converts the input value to a boolean.                                                                                                                                                      |
| `$toDate`     | `AnyValue or [value: AnyValue]`                                                  | Converts the input value to a date.                                                                                                                                                         |
| `$toDecimal`  | `AnyValue or [value: AnyValue]`                                                  | Converts the input value to a decimal.                                                                                                                                                      |
| `$toInteger`  | `AnyValue or [value: AnyValue]`                                                  | Converts the input value to an integer.                                                                                                                                                     |
| `$toObjectId` | `AnyValue or [value: AnyValue]`                                                  | Converts a value to a MongoDB ObjectId(). If the value cannot be converted to an ObjectId, it returns errors. If the value is null or missing, it returns null.                             |
| `$toString`   | `AnyValue or [value: AnyValue]`                                                  | Converts the input value to a string.                                                                                                                                                       |
| `$trim`       | `StringValue or [text: StringValue]`                                             | Removes whitespace characters (e.g., spaces) from the beginning and end of a string.                                                                                                        |
| `$upper`      | `StringValue or [text: StringValue]`                                             | Converts a string to uppercase and returns the resulting new string.                                                                                                                        |
| `$year`       | `DateValue or [date: DateValue]`                                                 | Returns the year part of a date.                                                                                                                                                            |

### Computation

Here is a table representation of the `Computation` type alias:

| Field Name    | Type                                        | Description                     |
| ------------- | ------------------------------------------- | ------------------------------- |
| `Computation` | `{ as: string, compute: ComputeOperation }` | Defines a computation structure |
| `as`          | `string`                                    | The name of the computation     |
| `compute`     | `ComputeOperation`                          | The computation operation       |

The `Computation` type alias is used to define a computation structure for
performing calculations in a database query. It consists of two main fields:

1. `as`: This field specifies the name of the computation, which is used to
   reference the computed value in the query result.

2. `compute`: This field defines the computation operation to be performed, and
   it is of type `ComputeOperation`. The `compute` operation can encompass
   various mathematical or aggregation operations to calculate the desired
   result.

The `D` and `T` type parameters represent the database name and model list,
respectively, and allow for type safety in the context of the specific database
and model being used.

### Compute Operation

Here is a table representation of the `ComputeOperation` type alias:

| Field Name         | Type                         | Description                                                   |
| ------------------ | ---------------------------- | ------------------------------------------------------------- |
| `ComputeOperation` | `{ $count: any }`            | Defines a computation operation for counting                  |
|                    | `{ $countIf: BooleanValue }` | Defines a computation operation for conditional counting      |
|                    | `{ $sum: NumericValue }`     | Defines a computation operation for summation                 |
|                    | `{ $avg: NumericValue }`     | Defines a computation operation for averaging                 |
|                    | `{ $min: NumericValue }`     | Defines a computation operation for finding the minimum value |
|                    | `{ $max: NumericValue }`     | Defines a computation operation for finding the maximum value |
| `$count`           | `any`                        | Count operation without specific conditions                   |
| `$countIf`         | `BooleanValue`               | Count operation with conditional filtering                    |
| `$sum`             | `NumericValue`               | Summation operation                                           |
| `$avg`             | `NumericValue`               | Averaging operation                                           |
| `$min`             | `NumericValue`               | Minimum value operation                                       |
| `$max`             | `NumericValue`               | Maximum value operation                                       |

The `ComputeOperation` type alias is used to define different types of
computation operations that can be performed on database queries. It encompasses
operations such as counting, conditional counting, summation, averaging, finding
the minimum value, and finding the maximum value.

The `D` and `T` type parameters represent the database name and model list,
respectively, and provide type safety in the context of the specific database
and model being used.

Each computation operation is represented as a separate object with a specific
field, such as `$count`, `$countIf`, `$sum`, `$avg`, `$min`, or `$max`,
depending on the type of operation being performed. The fields contain
additional information or conditions related to the specific computation.
