---
sidebar_position: 11
description:
  Database actions allow you to create, update, delete and query your app data.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Executing transactions

The database object allows you perform CRUD operations on the specified database
of your application. With Database object, you can create new records/documents
in your database table/collection, update or delete existing ones, run queries
and paginate over large data sets. **Agnost supports running these database operations within a transaction context.**

### Begin Transaction

The `beginTransaction` method starts a new transaction on the database server.
Any database CRUD operation executed after calling `beginTransaction` will be
performed within the transaction context. If the transaction is not committed,
the changes will not be applied to the database.

:::info

Please note that transactions are executed on the read-write database, not on
the read replicas. **Please also make sure that you either commit or rollback a transaction you have started.**

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
try {
  await agnost.db("myDb").beginTransaction();
  // Perform database operations within the transaction
  await someDatabaseOperation();
  await anotherDatabaseOperation();
  ...
} catch (error) {
  ...
  console.error("Error in transaction:", error);
}
```

</TabItem>
</Tabs>


:::info

This method ensures that multiple database operations are committed
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
  await agnost.db("myDb").beginTransaction();
  await someDatabaseOperation();
  await anotherDatabaseOperation();
  await agnost.db("myDb").commitTransaction(); // Commit the transaction
} catch (error) {
  ...
  console.error("Error in transaction:", error);
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

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
try {
  // Perform some database operations within a transaction
  await agnost.db("myDb").beginTransaction();
  await someDatabaseOperation();
  await anotherDatabaseOperation();
  await agnost.db("myDb").commitTransaction(); // Commit the transaction
} catch (error) {
  await agnost.db("myDb").rollbackTransaction(); // Rollback the transaction on error
  console.error("Error in transaction:", error);
}
```

</TabItem>
</Tabs>


This method allows you to safely undo database changes within a transaction in
case of an error.
