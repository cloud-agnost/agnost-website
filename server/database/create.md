---
sidebar_position: 3
description:
  Creating new records in database tables.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Creating records

You can use `createOne` and `createMany` library methods to insert single or multiple records into a database table, respectively. Below is the list of data types that you can use when defining your table structure using Agnost Studio.

:::info
Fields such as record **identifiers**, **created at** or **updated at** timestamps are automatically managed by Agnost, you do not need to set their values.
:::

## Inserting a single record
The `createOne` method inserts a single record in a database table and returns the newly created record in the database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const binary_data = Buffer.from("binary data contents");
const data = {
  name: "John",
  rich_text: "rich text field value",
  encrypted_text: "12345%&", // primarily used to store passwords
  email: "john@email.com",
  link: "https://mydomain/avater.png",
  phone: "+15555555555",
  boolean: true,
  integer: 23,
  decimal: 34.56,
  datetime: "2023-10-24T13:39:42.341+00:00",
  date: "2023-10-24",
  time: "13:39:42",
  enum: "enum value 1",
  geo_point: [45.5667, 34.567],
  binary: binary_data,
  json: {
    key1: "value1",
    key2: "value2",
  },
  reference: 1,
};

const newUser = await agnost.db("postgres").model("users").createOne(data);
```

</TabItem>
</Tabs>


##### Parameters

| Name   | Type        | Description                      |
| ------ | ----------- | -------------------------------- |
| `data` | Record object | Data to be inserted as a record. |


## Inserting multiple records
The `createMany` method inserts multiple records in a database table. It is similar to `createOne` method, but instead of a single record you provide an array of records to be inserted into the database table. This method returns the count of newly created records in the database.

:::caution
Agnost runs the `createMany` method within a database transaction. If any one of the records in the input data list fails during creation, none of the records will be created in the database, i.e., database transaction will be rolled back.
:::


<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
	const binary_data = Buffer.from("binary data contents");
	const data = [
		{
			name: "John",
			rich_text: "rich text field value",
			encrypted_text: "12345%&", // primarily used to store passwords
			email: "john@email.com",
			link: "https://mydomain/avater.png",
			phone: "+15555555555",
			boolean: true,
			integer: 23,
			decimal: 34.56,
			datetime: "2023-10-24T13:39:42.341+00:00",
			date: "2023-10-24",
			time: "13:39:42",
			enum: "enum value 1",
			geo_point: [45.5667, 34.567],
			binary: binary_data,
			json: {
				key1: "value1",
				key2: "value2",
			},
			reference: 1,
		},
		...
	];

	const count = await agnost.db("postgres").model("users").createMany(data);
```

</TabItem>
</Tabs>

##### Parameters

| Name   | Type          | Description                     |
| ------ | ------------- | ------------------------------- |
| `data` | Array of record objects | List of records to be inserted. |