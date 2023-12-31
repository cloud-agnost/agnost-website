---
sidebar_position: 2
description:
  Buckets are primarily used to manage your files and its contents (e.g., files,
  documents, images).
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Buckets

Buckets are primarily used to manage your files and its contents (e.g., files,
documents, images).

### Upload a file

The `upload` method allows you to upload a file to an existing bucket of your storage. You can upload a file from a readable stream or from a locally
stored file on the disk.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
import fs from "fs";

const readableStream = fs.createReadStream("path/to/your/file.png");

// Define the file to upload
const file = {
  path: "images/avatar/ice.jpg", // This is the name of the file and you can specify the name of your file as a path
  mimeType: "image/png",
  size: 1024, // File size in bytes
  stream: readableStream, // Readable stream of file contents
};

// Define upload options
const options = {
  isPublic: true, // Make the file publicly accessible
  upsert: true, // Overwrite the file if it already exists
  tags: {
    category: "images",
    author: "John Doe",
  },
  userId: "61fbf6ceeeed063ab062ac05",
};
const storageName = "default";
const bucketName = "profile-images";

try {
  const uploadedFileInfo = await agnost
    .storage(storageName)
    .bucket(bucketName)
    .upload(file, options);
  console.log(uploadedFileInfo);
} catch (error) {
  console.error("Error uploading file:", error);
}
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-f234fdss34fd",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "images/avatar/ice.jpg",
  "size": 53951,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T14:52:43.213Z",
  "updatedAt": "2022-03-20T14:52:43.213Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "category": "images",
    "author": "John Doe",
  },
  "userId": "61fbf6ceeeed063ab062ac05"
}
```

</DetailedResponse>


#### Parameters

Here are the parameters for the `upload` method:

| #   | Name    | Data Type                          | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --- | ------- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | file    | FileStreamObject \| FileDiskObject | Yes      | The file object that will be stored in the bucket. A file can be uploaded from a readable stream or from a file locally stored on the disk using its localPath.<br/><br/>If `FileStreamObject` is provided, the following values need to be provided:<br/>- `path`: The path of the file (e.g., "path/to/my/file/filename.jpg")<br/>- `mimeType`: The mime-type of the file (e.g., "image/png")<br/>- `size`: The size of the file in bytes<br/>- `stream`: The Readable stream of file contents<br/><br/>If `FileDiskObject` is provided, the following values need to be provided:<br/>- `path`: The path of the file (e.g., "path/to/my/file/filename.jpg")<br/>- `mimeType`: The mime-type of the file (e.g., "image/png")<br/>- `size`: The size of the file in bytes<br/>- `localPath`: The local path of the file where it is stored locally.<br/><br/>If `FileUploadOptions` is provided, additional options can be specified.<br/> |
| 2   | options | FileUploadOptions (optional)       | No       | Optional options for the upload operation. These include:<br/>- `isPublic`: Specifies whether the file is publicly accessible (defaults to the bucket's privacy setting if not specified).<br/>- `upsert`: Specifies whether to create a new file or overwrite an existing file (defaults to false).<br/>- `tags`: Key-value pairs that will be added to the file metadata.<br/>- `userId`: The unique identifier of the user who created the bucket.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### List files in bucket

The `listFiles` method allows you to retrieve the list of files stored in a
specific bucket within your storage. You can use various options, such as
search, pagination, and sorting, to filter and retrieve the list of files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Define list options
const options = {
  search: "document", // Search for files with "document" in their path name
  page: 1, // Page number (starting from 1)
  limit: 100, // Maximum number of files to return per page
  sort: {
    field: "createdAt", // Field for sorting (e.g., "createdAt")
    direction: "asc", // Sort direction ("asc" or "desc")
  },
  returnCountInfo: true, // Return count and pagination information
}

const fileList = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .listFiles(options);

console.log(fileList);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "count": 5,
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 100
  },
  "data": [
    {
      "id": "fl-234e3rwrwr",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Booby.png",
      "size": 212233,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:01:41.993Z",
      "updatedAt": "2022-03-20T15:01:41.993Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {
        "size": "large"
      }
    },
    {
      "id": "fl-565ertertd",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Rooby.png",
      "size": 53951,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:01:00.916Z",
      "updatedAt": "2022-03-20T15:01:00.916Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {
        "size": "small"
      }
    },
    {
      "id": "fl-6756rtwedfs",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Fluufy.png",
      "size": 53951,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:00:56.614Z",
      "updatedAt": "2022-03-20T15:00:56.614Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {
        "size": "small"
      }
    },
    {
      "id": "fl-fdg3423fwe",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Teddy.png",
      "size": 53951,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:00:53.747Z",
      "updatedAt": "2022-03-20T15:00:53.747Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {
        "size": "small"
      }
    },
    {
      "id": "fl-345efsdf23",
      "bucketId": "bck-o5nnyhs19dgw",
      "storageId": "str-o0dlitj2x5id",
      "path": "Winnie.png",
      "size": 53951,
      "mimeType": "image/png",
      "isPublic": true,
      "uploadedAt": "2022-03-20T15:00:46.275Z",
      "updatedAt": "2022-03-20T15:00:46.275Z",
      "userId": "611a45f9f3e7ec001950175f",
      "tags": {
        "size": "medium"
      }
    }
  ]
}
```

</DetailedResponse>


#### Parameters

Here are the parameters for the `listFiles` method:

| #   | Name    | Data Type       | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------- | --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | options | FileListOptions | No       | Optional options for searching, pagination, and sorting the list of files in the bucket. These include:<br/>- `search`: The search string parameter for file path names.<br/>- `page`: A positive integer specifying the page number for pagination (starting from 1).<br/>- `limit`: A positive integer specifying the maximum number of files to return per page.<br/>- `sort`: Specifies the field name and sort direction (asc | desc) for sorting returned files in a JSON object.<br/>- `returnCountInfo`: A flag to specify whether to return count and pagination information such as the total number of files, page number, and page size. |

### Get bucket info

You can get information about the bucket by calling the `getInfo` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Returns the information about the bucket `profile-images`.
const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .getInfo(true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "profile-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
  "stats": {
    "objectsCount": 5,
    "totalStorageSize": 428037,
    "averageObjectSize": 85607,
    "minObjectSize": 53951,
    "maxObjectSize": 212233
  }
}
```

</DetailedResponse>


:::info

- It returns basic bucket metadata informaton.
- If **detailed=true**, it provides additional information about the total
  number of files contained, their overall total size in bytes, average, min and
  max file size in bytes etc.

:::

#### Parameters

Here you can find parameters for the `getInfo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| 1   | detailed                     | boolean                           | No                               | Specifies whether to get detailed bucket statistics or not, default false |

### Check whether bucket exists

You can check whether the bucket exists or not by calling the `exists` method.
If the bucket exists, it returns **true**, otherwise **false**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Checks the `profile-images` bucket whether it exists or not
const result = await agnost.storage(storageName).bucket(bucketName).exists();
```

</TabItem>


</Tabs>



### Make bucket public

You can make the bucket public by calling the `makePublic` method. It sets the
privacy of the bucket to **true**.

:::tip

You may also choose to make the contents of the bucket publicly accessible by
specifying **includeFiles=true**.

- This will automatically set **isPublic=true** for every file in the bucket.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Makes the `profile-images` bucket and contents public.
const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .makePublic(true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "profile-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `makePublic` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------- |
| 1   | includeFiles                 | boolean                           | No                               | Specifies whether to make each file in the bucket public. |

### Make bucket private

You can make the bucket private by calling the `makePrivate` method. It sets the
privacy of the bucket to **false**.

:::tip

You may also choose to make the contents of the bucket private by specifying
**includeFiles=true**.

- This will automatically set **isPublic=false** for every file in the bucket.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Makes the `profile-images` bucket and contents private.
const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .makePrivate(false);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "profile-images",
  "isPublic": false,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `makePrivate` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| 1   | includeFiles                 | boolean                           | No                               | Specifies whether to make each file in the bucket private. |

### Delete files

You can delete file(s) from the bucket by calling the `deleteFiles` method. It
deletes single or multiple files identified by their paths.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Deletes the `profile-image-1.jpg` and `profile-image-2.jpg`
// paths of the files from the `profile-images` bucket.
await agnost
  .storage(storageName)
  .bucket(bucketName)
  .deleteFiles(["profile-image-1.jpg", "profile-image-2.jpg"]);
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `deleteFiles` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------- |
| 1   | paths                        | string[]                          | Yes                              | List of paths of the files to be deleted. |

### Rename Bucket

You can rename the bucket name by calling the `rename` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const newName = "device-images";
const oldName = "asset-images";

// Renames the `asset-images` bucket to `device-images`.
const result = await agnost
  .storage(storageName)
  .bucket(oldName)
  .rename(newName);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "device-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `rename` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | newName                      | string                            | Yes                              | The new name of the bucket.          |

### Delete Bucket

You can delete the bucket by calling the `delete` method. It deletes the bucket
and all objects (e.g., files) inside the bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "device-images";

// Deletes the `profile-images` bucket and all its contents.
await agnost.storage(storageName).bucket(bucketName).delete();
```

</TabItem>


</Tabs>


### Empty Bucket

You can empty the bucket by calling the `empty` method. It removes all objects
(e.g., files) inside the bucket.

:::info

- This method does not delete the bucket itself.
- If you also want to **delete the bucket**, including all its contained
  objects, you can use [delete](#delete-bucket) method.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Empties the `profile-images` bucket.
await agnost.storage(storageName).bucket(bucketName).empty();
```

</TabItem>


</Tabs>


### Add tag to bucket

You can add your own tags to each bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "device-images";

// Set a tag for a file
const key = "category";
const value = "documents";

const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .setTag(key, value);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "device-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": { "category": "documents" },
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `setTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | key                          | string                            | Yes                              | Key (name) of tag.                        |
| 2   | value                        | any                               | Yes                              | Value of tag.                      |

### Remove tag from bucket

You can also remove a tag (e.g., your custom metadata associated with your app
storage buckets) from your bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "device-images";
const key = "category";

const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .removeTag(key);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "device-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `removeTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                    |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The name (key) of the tag key to remove from bucket metadata. |

### Remove all tags from file

You can remove all tags (e.g., your custom metadata associated with your
bucket) from your bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "device-images";

let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .removeAllTags();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "device-images",
  "isPublic": true,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {},
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


### Update bucket info

You can update the overall bucket information (name, isPublic and tags) in a
single method call, instead of calling each individual update method separately.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "device-images";

const tags = {
  category: "documents",
  author: "John Doe",
};

const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .updateInfo("pictures", false, tags, true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "name": "pictures",
  "isPublic": false,
  "createdAt": "2022-03-20T14:35:26.814Z",
  "updatedAt": "2022-03-20T14:35:26.814Z",
  "tags": {
    "category": "documents",
    "author": "John Doe",
  },
  "userId": "62c14524cf074016b1045366",
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `updateInfo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | newName                      | string                            | Yes                              | The new name of the bucket. `root` is a reserved name and cannot be used.                          |
| 2   | isPublic                     | boolean                           | Yes                              | The default privacy setting that will be applied to the files uploaded to this bucket.             |
| 3   | tags                         | string or string[]                | Yes                              | Array of string values that will be set as the bucket metadata.                                    |
| 4   | includeFiles                 | boolean                           | No                               | Specifies whether to make each file in the bucket to have the same privacy setting of the bucket.. |

### Options

#### File Upload Options

You can define the options for the file upload by using the `FileUploadOptions`.
It defines the available options that can be set during file upload.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                            |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1   | `isPublic`                   | boolean                           | Specifies whether file is publicy accessible or not. Defaults to the bucket's privacy setting if not specified. |
| 2   | `tags`                       | KeyValuePair                      | Key-value pairs that will be added to the file metadata.                                                        |
| 3   | `upsert`                     | boolean                           | Specifies whether to create a new file or overwrite an existing file. Defaults to false.                        |
| 4   | `userId`                     | string                            | The unique identifier of the user who created the bucket.                                                       |

#### File List Options

You can define the options for the file list by using the `FileListOptions`. It
defines the structure how to get the files of a bucket.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `limit`                      | number                            | A positive integer that specifies the max number of files to return per page.                                                    |
| 2   | `page`                       | number                            | A positive integer that specifies the page number to paginate file results. Page numbers start from 1.                           |
| 3   | `returnCountInfo`            | boolean                           | Flag to specify whether to return the count and pagination information such as total number of files, page number and page size. |
| 4   | `sort`                       | [FileSortEntry](#file-sort-entry) | Specifies the field name and sort direction for sorting returned files.                                                          |
| 5   | `search`                     | string                            | The search string parameter for file names.                                                                                      |

#### File Sort Entry

Here you can find the properties for the `FileSortEntry`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                                                                                                                                                                                         |
| --- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `field`                      | The name of the file field that will be used in sorting the returned objects <br/> It can be either **isPublic**, **updatedAt**, **bucketId**, **fileName**, **size**, **encoding**, **mimeType**, **publicPath**, **userId**, **tags** or **uploadedAt** |
| 2   | `order`                      | Sort direction <br/> It can be **asc** or **desc**                                                                                                                                                                                                        |
