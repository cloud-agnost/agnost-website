---
sidebar_position: 1
description:
  You can store and manage your files in Altogic's cloud infrastructure.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Storage

Everything that you store in your app storage **must be contained in a bucket**.
Buckets are the basic containers that hold your application data (i.e., files).
You can use buckets to organize your data and control access to your data, but unlike directories and folders, **you cannot nest buckets**.

### Create a bucket

You can create a bucket by calling the `createBucket` method of your storage. It creates a new
bucket with the specified name. You can specify additional information to store
with each bucket using the **`tags`** which is a JSON object (e.g., key-value
pairs).

:::info
You can define your storages through Agnost Studio for your app versions.
:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default";
let bucketName = "profile-images";

// Creates a bucket named `profile-images` with default privacy setting of public,
// meaning that when you add a file to a bucket and if the file did not specify
// public or private setting, then it will be marked as publicly accessible through its URL
let result = await agnost.storage(storageName).createBucket(bucketName);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": true,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T14:35:26.814Z",
    "userId": "611a45f9f3e7ec001950175f",
    "tags": {}
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `createBucket` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                  |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | name                         | string                            | Yes                              | The name of the bucket to create (case sensitive).                                                                   |
| 2   | isPublic                     | boolean                           | No                               | The default privacy setting that will be applied to the files uploaded to this bucket.                                                                                |
| 3   | tags                         | Object                            | No                               | JSON object that contains key-value pairs of tags to be added to the bucket metadata.                                                                                 |
| 4   | userId                       | string or number                            | No                               | The unique identifier of the user who created the bucket. |

:::info

Buckets can be specified as **public** or **private**, which defines how the
**Public URL** of the files will behave.

- Files can be specified as **public** or **private**, which defines how the
  public URL of the file will behave. If a file is marked as private then
  external apps/parties will not be able to access it through its public URL.
- With **isPublic** parameter of a bucket, you can specify default privacy
  setting of the files contained in this bucket, meaning that when you add a
  file to a bucket and if the file did not specify public/private setting, then
  the **bucket's privacy setting will be applied**.
- You can always override the default privacy setting of a bucket at the
  individual file level.
- If there already exists a bucket with the specified name, it returns an error.

:::

### Get storage details

You can get the storage details by calling the `getStats` method. It returns
summary information about your app version's cloud storage, including the total number
of buckets and files stored, total storage size in bytes and average, min and
max file size in bytes.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default";
// Gets the storage details of the storage
let result = await agnost.storage(storageName).getStats();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "objectsCount": 5,
  "totalStorageSize": 428037,
  "averageObjectSize": 85607,
  "minObjectSize": 53951,
  "maxObjectSize": 212233,
  "bucketsCount": 2
}
```

</DetailedResponse>


### List buckets

You can list all buckets by calling the `listBuckets` method and you can define
search query.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";

// Returns the first 50 buckets whose name includes "profile" in your app cloud storage
// sorted by bucket creation date in descending order and also returns pagination info
let result = await agnost.storage(storageName).listBuckets({
  search: "profile",
  sort: { field: "createdAt", direction: "desc" },
  limit: 50,
  page: 1,
  returnCountInfo: true,
});
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "count": 2,
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 50
  },
  "data": [
    {
      "id": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "name": "profile-photos",
      "isPublic": true,
      "createdAt": "2022-03-17T12:01:16.118Z",
      "updatedAt": "2022-03-17T12:01:16.118Z",
       "tags": {}
    },
    {
      "id": "bck-o0dlitj2x5id",
      "storageId": "str-o0dlitj2x5id",
      "name": "profile-images",
      "isPublic": true,
      "createdAt": "2022-03-20T14:35:26.814Z",
      "updatedAt": "2022-03-20T14:35:26.814Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {}
    }
  ]
}
```

</DetailedResponse>


:::info

It returns a list of buckets in your app cloud storage matching the search query.

- If **returnCountInfo=true** in [BucketListOptions](#bucket-list-options), it
  returns an object which includes the count information and the matching
  buckets array.

:::

#### Parameters

Here you can find parameters for the `listBuckets` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1 | options | [BucketListOptions](#bucket-list-options) | No | Options to configure how buckets will be listed, primarily used to set pagination and sorting settings |

### List files

You can list files by calling the `listFiles` method. This method performs a
global search across all the files contained in all the buckets.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";

// Returns the list of files that includes "avatar" in their name
// sorted by file upload date in ascending order
let result = await agnost.storage(storageName).listFiles({
  search: "avatar",
  limit: 100,
  sort: { field: "uploadedAt", direction: "asc" },
  returnCountInfo: true,
});
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "count": 2,
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 100
  },
  "data": [
    {
      "id": "fl-32fw342234ed",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Rooby-avatar-new.png",
      "size": 212233,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:01:41.993Z",
      "updatedAt": "2022-03-20T15:01:41.993Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {"size": "large", "quality": "high quality"}
    },
    {
      "id": "fl-3fd34rdgg6345",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Rooby-avatar-2.png",
      "size": 53951,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:01:00.916Z",
      "updatedAt": "2022-03-20T15:01:00.916Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {"size": "small", "quality": "low quality"}
    }
  ]
}
```

</DetailedResponse>


:::info

It returns the list of files matching the search query.

- This method performs a global search across all the files contained in all the
  buckets.

- If **returnCountInfo=true** in [FileListOptions](#file-list-options), it
  returns an object which includes count information and array of matching
  files.

:::

#### Parameters

Here you can find parameters for the `listFiles` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>     | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                         |
| --- | ---------------------------- | ------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | options                      | [FileListOptions](#file-list-options) | No                               | Options to configure how search result will be listed, primarily used to set pagination and sorting settings |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Options

#### File List Options

Here you can find the properties for the `FileListOptions`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                               |
| --- | ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `limit`                      | number                            | A positive integer that specifies the max number of buckets to return per page.                                                    |
| 2   | `page`                       | number                            | A positive integer that specifies the page number to paginate bucket results. Page numbers start from 1.                           |
| 3   | `returnCountInfo`            | boolean                           | Flag to specify whether to return the count and pagination information such as total number of buckets, page number and page size. |
| 4   | `sort`                       | [FileSortEntry](#file-sort-entry) | Specifies the field name and sort direction for sorting returned buckets.                                                          |
| 5   | `search`                     | string                            | The search string parameter. Agnost searches the bucket names that includes the search string.                                     |

#### Bucket List Options

Here you can find the properties for the `BucketListOptions`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>     | <p><strong>Description </strong></p>                                                                                               |
| --- | ---------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `limit`                      | number                                | A positive integer that specifies the max number of buckets to return per page.                                                    |
| 2   | `page`                       | number                                | A positive integer that specifies the page number to paginate bucket results. Page numbers start from 1.                           |
| 3   | `returnCountInfo`            | boolean                               | Flag to specify whether to return the count and pagination information such as total number of buckets, page number and page size. |
| 4   | `sort`                       | [BucketSortEntry](#bucket-sort-entry) | Specifies the field name and sort direction for sorting returned buckets.                                                          |
| 5   | `search`                     | string                                | The search string parameter. Agnost searches the bucket names that includes the search string.                                     |

#### Bucket Sort Entry

Here you can find the properties for the `BucketSortEntry`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                   |
| --- | ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | field                        | text                              | The name of the bucket field that will be used in sorting the returned objects. It can be **name**, **isPublic**, **updatedAt**, **createdAt**, **userId** or **tags** |
| 2   | direction                    | text                              | Sort direction. It can be **asc** or **desc**                                                                                                                          |

#### File Sort Entry

Here you can find the properties for the `FileSortEntry`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                 |
| --- | ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | field                        | text                              | The name of the file field that will be used in sorting the returned objects. It can be **bucketId**, **name**, **size**, **contentType**, **isPublic**, **uploadedAt**, **updatedAt** or **userId** |
| 2   | direction                    | text                              | Sort direction. It can be **asc** or **desc**                                                                                                                                                        |
