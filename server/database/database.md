---
sidebar_position: 2
description:
  Database actions allow you to create, update, delete and query your app data.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Database

The database object allows you perform CRUD operations on the specified database
of your application. With Database object you can create new records/documents
in your database table/collection, update or delete existing ones, run queries
and paginate over large data sets.

### Model Method

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
  email: "john@example.com",
})

console.log("New User:", newUser)
```

</TabItem>
</Tabs>


#### Parameters

| #   | Name | Data Type | Required | Description                                                        |
| --- | ---- | --------- | -------- | ------------------------------------------------------------------ |
| 1   | name | string    | Yes      | Name of the database model (e.g., table in relational databases or | collection in NoSQL databases). |

### Begin Transaction

The `beginTransaction` method starts a new transaction on the database server.
Any database CRUD operation executed after calling `beginTransaction` will be
performed within the transaction context. If the transaction is not committed,
the changes will not be applied to the database.

:::info

Please note that transactions are executed on the read-write database, not on
the read replicas.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
try {
  await agnost.db("myDb").beginTransaction()
  // Perform database operations within the transaction
  await someDatabaseOperation()
  await anotherDatabaseOperation()
  await agnost.db("myDb").commitTransaction() // Commit the transaction
} catch (error) {
  await agnost.db("myDb").rollbackTransaction() // Rollback the transaction on error
  console.error("Error in transaction:", error)
}
```

</TabItem>
</Tabs>


:::info

This method ensures that multiple database operations are either committed
together or rolled back in case of an error, maintaining data integrity.

:::

### Commit Transaction

The `commitTransaction` method commits the currently active database
transaction.

:::info

Please note that transactions are executed on the read-write database, not on
the read replicas.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
try {
  // Perform some database operations within a transaction
  await agnost.db("myDb").beginTransaction()
  await someDatabaseOperation()
  await anotherDatabaseOperation()
  await agnost.db("myDb").commitTransaction() // Commit the transaction
} catch (error) {
  await agnost.db("myDb").rollbackTransaction() // Rollback the transaction on error
  console.error("Error in transaction:", error)
}
```

</TabItem>
</Tabs>


:::info

This method commits the database transaction, making the changes permanent. If
there are no errors, the changes will be applied to the database.

:::

### Rollback Transaction

The `rollbackTransaction` method aborts the transaction and rolls back the
database changes that were executed within the transaction.

:::info

Please note that transactions are executed on the read-write database, not on
the read replicas.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
try {
  await agnost.db("myDb").beginTransaction()
  // Perform some database operations within a transaction
  await someDatabaseOperation()

  await anotherDatabaseOperation()
  await agnost.db("myDb").rollbackTransaction() // Rollback the transaction
} catch (error) {
  console.error("Error in transaction:", error)
}
```

</TabItem>
</Tabs>


This method allows you to safely undo database changes within a transaction in
case of an error.

### Get Actual Database Name

The `getActualDbName` method returns the database name used by Agnost. If you
selected "Assign a unique name to this database in different versions of the
application" when creating a database in Agnost Studio, Agnost assigns a unique
database name. This method returns the actual database name used in your
application.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const dbName = agnost.db("myDb").getActualDbName()
console.log("Actual Database Name:", dbName)
```

</TabItem>
</Tabs>


<DetailedResponse title="Example response">


- `string`: Database name

```json
{
  "data": "myDb-1234567890",
  "errors": null
}
```

</DetailedResponse>


This method is useful for retrieving the actual database name used by Agnost in
your application.

### Get Client

The `getClient` method returns the database client that you can use to perform
advanced database operations. A client instance for the following NPM modules
will be returned based on the database type:

- MongoDB: `mongodb`
- PostgreSQL: `pg`
- MySQL: `mysql2`
- SQL Server: `mssql`

:::info

Please note that if you update the database schema for a database managed by
Agnost using the client, these changes will not be reflected in your Agnost
application. It is recommended to use Agnost Studio to perform database schema
changes.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const dbClient = agnost.db("myDb").getClient()
console.log("Database Client:", dbClient)
```

</TabItem>
</Tabs>


:::info

This method provides access to the raw database client, allowing you to perform
advanced database operations when needed.

:::

These methods help you manage transactions, access database clients, and work
with database models effectively within your Agnost application.
