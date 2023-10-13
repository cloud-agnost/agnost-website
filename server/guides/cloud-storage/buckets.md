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

### Upload file

You can upload a file to an existing bucket by calling the `upload` method. If
there already exists a file with the same name in destination bucket, it ensures
the uploaded file name to be unique in its bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Uploads a file to the profiles-images bucket
let bucketName = "profiles-images"
const fileToUpload = event.target.files[0]
const result = await agnost.storage
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload)

//If you would like to have a progress indicator during file upload
//you can also provide a callback function with `onProgress` property
const result = await agnost.storage
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload, {
    onProgress: (uploaded, total, percent) =>
      console.log(`progress: ${uploaded}/${total} ${percent}`),
  })
```

</TabItem>


<TabItem value="dart">


```dart
//Uploads a file to the profiles-images bucket
final bucketName = "profiles-images";
final fileToUpload = await fickFile(); // Use own picker
final result = await agnost.storage
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload.bytes); // second parameter type is Uint8List

//If you would like to have a progress indicator during file upload
//you can also provide a callback function with `onProgress` property
final = await agnost.storage
  .bucket(bucketName)
  .upload(
    fileToUpload.name,
    fileToUpload.bytes,
    FileUploadOptions(
      onProgress: (uploaded, total, percent) =>
            print("progress: ${uploaded}/${total} ${percent}"),
    )
);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373fbb0b72592107523d7d",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "ice.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/623323/0ba1c889a/62373bae1/6132d",
    "isPublic": true,
    "uploadedAt": "2022-03-20T14:52:43.213Z",
    "updatedAt": "2022-03-20T14:52:43.213Z",
    "userId": "611a45f9f3e7ec001950175f",
    "tags": []
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `upload` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>         | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --- | ---------------------------- | ----------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | fileName                     | string                                    | Yes                              | The name of the file e.g., rooby-avatar.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2   | fileBody                     | any                                       | Yes                              | The body of the file that will be stored in the bucket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3   | options                      | [FileUploadOptions](#file-upload-options) | No                               | Content type of the file, privacy setting of the file, tags of the file and whether to create the bucket if not exists. `contentType` is ignored, if **fileBody** is **Blob**, **File** or **FormData**, otherwise `contentType` option needs to be specified.<br/> If not specified, `contentType` will default to **text/plain;charset=UTF-8**. <br/> If `isPublic` is not specified, defaults to the bucket's privacy setting. If `createBucket` is set to true (defaults to false), then creates a new bucket if the bucket does not exist. |

:::info

If `onProgress` callback function is defined in
[FileUploadOptions](#file-upload-options), it periodically calls this function
to inform about upload progress.

Once you upload a file to bucket, it is stored in the staging area for a few
seconds for internal processing. That means that you might not be able to access
the file for a few seconds after it is uploaded.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### List files in bucket

You can get the list of files stored in the bucket by calling the `listFiles`
method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucket = "profile-images"

// Returns the list of files in bucket profile-images with
// count info and sorted by their size in ascending order
const result = await agnost.storage.bucket(bucket).listFiles({
  returnCountInfo: true,
  sort: { field: "size", direction: "asc" },
})

/*
You can also apply filters and paginate over the files.
Below call returns the first 100 of files which are marked
as public and sorted by their size in ascending order
*/
const result = await agnost.storage
  .bucket(bucket)
  .listFiles("isPublic == true", {
    returnCountInfo: true,
    limit: 100,
    page: 1,
    sort: { field: "size", direction: "asc" },
  })
```

</TabItem>


<TabItem value="dart">


```dart
final bucket = "profile-images";

// Returns the list of files in bucket profile-images with
// count info and sorted by their size in ascending order
final result = await agnost.storage.bucket(bucket).listFiles(
    options: FileListOptions(
        returnCountInfo: true,
        sort: FileSort(field: "size", direction: Direction.asc),
    )
);

/*
You can also apply filters and paginate over the files.
Below call returns the first 100 of files which are marked
as public and sorted by their size in ascending order
*/
final result = await agnost.storage.bucket(bucket).listFiles(
    options: FileListOptions(
        returnCountInfo: true,
        sort: FileSort(field: "size", direction: Direction.asc),
        limit: 100,
        page: 1
    )
);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "info": {
      "count": 5,
      "totalPages": 1,
      "currentPage": 1,
      "pageSize": 100
    },
    "data": [
      {
        "_id": "623741d545aba7a695579a18",
        "bucketId": "62373bae161326736e4ffde2",
        "fileName": "Booby.png",
        "size": 212233,
        "encoding": "7bit",
        "mimeType": "image/png",
        "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/623741d545aba7a695579a18",
        "isPublic": true,
        "uploadedAt": "2022-03-20T15:01:41.993Z",
        "updatedAt": "2022-03-20T15:01:41.993Z",
        "userId": "611a45f9f3e7ec001950175f",
        "tags": ["large"]
      },
      {
        "_id": "623741ac161326736e4ffde4",
        "bucketId": "62373bae161326736e4ffde2",
        "fileName": "Rooby.png",
        "size": 53951,
        "encoding": "7bit",
        "mimeType": "image/png",
        "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/623741ac161326736e4ffde4",
        "isPublic": true,
        "uploadedAt": "2022-03-20T15:01:00.916Z",
        "updatedAt": "2022-03-20T15:01:00.916Z",
        "userId": "611a45f9f3e7ec001950175f",
        "tags": ["small"]
      },
      {
        "_id": "623741a8158fe88838fff085",
        "bucketId": "62373bae161326736e4ffde2",
        "fileName": "Fluufy.png",
        "size": 53951,
        "encoding": "7bit",
        "mimeType": "image/png",
        "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/623741a8158fe88838fff085",
        "isPublic": true,
        "uploadedAt": "2022-03-20T15:00:56.614Z",
        "updatedAt": "2022-03-20T15:00:56.614Z",
        "userId": "611a45f9f3e7ec001950175f",
        "tags": ["small"]
      },
      {
        "_id": "623741a545aba7a695579a17",
        "bucketId": "62373bae161326736e4ffde2",
        "fileName": "Teddy.png",
        "size": 53951,
        "encoding": "7bit",
        "mimeType": "image/png",
        "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/623741a545aba7a695579a17",
        "isPublic": true,
        "uploadedAt": "2022-03-20T15:00:53.747Z",
        "updatedAt": "2022-03-20T15:00:53.747Z",
        "userId": "611a45f9f3e7ec001950175f",
        "tags": ["small"]
      },
      {
        "_id": "6237419e161326736e4ffde3",
        "bucketId": "62373bae161326736e4ffde2",
        "fileName": "Winnie.png",
        "size": 53951,
        "encoding": "7bit",
        "mimeType": "image/png",
        "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/6237419e161326736e4ffde3",
        "isPublic": true,
        "uploadedAt": "2022-03-20T15:00:46.275Z",
        "updatedAt": "2022-03-20T15:00:46.275Z",
        "userId": "611a45f9f3e7ec001950175f",
        "tags": ["small"]
      }
    ]
  },
  "errors": null
}
```

</DetailedResponse>


:::info

- If **query expression** is specified, it runs the specified filter query to
  narrow down returned results, otherwise, returns all files contained in the
  bucket. You can use the file fields in table below in your query expressions.

- If **returnCountInfo=true** in [FileListOptions](#file-list-options), it
  returns an object which includes count information and a list of files.

:::

You can use the following file **fields** in your query expressions.

| Field name | Type                    | Description                                                                                                                                                           |
| :--------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_id       | `text` _(`identifier`)_ | Unique identifier of the file                                                                                                                                         |
| bucketId   | `text` _(`identifier`)_ | Identifier of the bucket                                                                                                                                              |
| fileName   | `text`                  | Name of the file                                                                                                                                                      |
| isPublic   | `boolean`               | Whether file is publicy accessible or not                                                                                                                             |
| size       | `integer`               | Size of the file in bytes                                                                                                                                             |
| encoding   | `text`                  | The encoding type of the file such as `7bit`, `utf8`                                                                                                                  |
| mimeType   | `text`                  | The mime-type of the file such as `image/gif`, `text/html`                                                                                                            |
| publicPath | `text`                  | The public path (URL) of the file                                                                                                                                     |
| userId     | `text` _(`identifier`)_ | The unique identifier of the user who created the bucket. The `userId` information is populated only when the bucket is created within the context of a user session. |
| tags       | `string array`          | List of tags added to the bucket metadata                                                                                                                             |
| uploadedAt | `datetime` _(`text`)_   | The upload date and time of the file                                                                                                                                  |
| updatedAt  | `datetime` _(`text`)_   | The last modification date and time of file metadata                                                                                                                  |

#### Parameters

Here you can find parameters for the `listFiles` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>     | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                 |
| --- | ---------------------------- | ------------------------------------- | -------------------------------- | -------------------------------------------------------------------- |
| 1   | expression                   | string                                | No                               | The query expression string that will be used to filter file objects |
| 2   | options                      | [FileListOptions](#file-list-options) | No                               | Pagination and sorting options                                       |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Get bucket info

You can get information about the bucket by calling the `getInfo` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Returns the information about the bucket `profile-images`.
const result = await agnost.storage.bucket(bucketName).getInfo(true)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Returns the information about the bucket `profile-images`.
final result = await agnost.storage.bucket(bucketName).getInfo(true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": true,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T14:35:26.814Z",
    "tags": [],
    "userId": "62c14524cf074016b1045366",
    "stats": {
      "objectsCount": 5,
      "totalStorageSize": 428037,
      "averageObjectSize": 85607,
      "minObjectSize": 53951,
      "maxObjectSize": 212233
    }
  },
  "errors": null
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

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Check whether bucket exists

You can check whether the bucket exists or not by calling the `exists` method.
If the bucket exists, it returns **true**, otherwise **false**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Checks the `profile-images` bucket whether it exists or not
const result = await agnost.storage.bucket(bucketName).exists()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Checks the `profile-images` bucket whether it exists or not
final result = await agnost.storage.bucket(bucketName).exists();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": true,
  "errors": null
}
```

</DetailedResponse>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Make bucket public

You can make the bucket public by calling the `makePublic` method. It sets the
privacy of the bucket to **true**.

:::tip

You may also choose to make the contents of the bucket publicly accessible by
specifying **includeFiles=true**.

- This will automatically set **isPublic=true** for every file in the bucket.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Makes the `profile-images` bucket and contents public.
const result = await agnost.storage.bucket(bucketName).makePublic(true)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Makes the `profile-images` bucket and contents public.
final result = await agnost.storage.bucket(bucketName).makePublic(true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": true,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T16:13:20.206Z",
    "tags": [],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `makePublic` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------- |
| 1   | includeFiles                 | boolean                           | No                               | Specifies whether to make each file in the bucket public. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Make bucket private

You can make the bucket private by calling the `makePrivate` method. It sets the
privacy of the bucket to **false**.

:::tip

You may also choose to make the contents of the bucket private by specifying
**includeFiles=true**.

- This will automatically set **isPublic=false** for every file in the bucket.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Makes the `profile-images` bucket and contents private.
const result = await agnost.storage.bucket(bucketName).makePrivate(true)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Makes the `profile-images` bucket and contents private.
final result = await agnost.storage.bucket(bucketName).makePrivate(true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": false,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T16:14:29.332Z",
    "tags": [],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `makePrivate` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------- |
| 1   | includeFiles                 | boolean                           | No                               | Specifies whether to make each file in the bucket private. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Delete files

You can delete file(s) from the bucket by calling the `deleteFiles` method. It
deletes single or multiple files identified either by their names or ids.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Deletes the `profile-image-1.jpg` and `profile-image-2.jpg`
// files from the `profile-images` bucket.

const { errors } = await agnost.storage
  .bucket(bucketName)
  .deleteFiles(["profile-image-1.jpg", "profile-image-2.jpg"])
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Deletes the `profile-image-1.jpg` and `profile-image-2.jpg`
// files from the `profile-images` bucket.

final errors = await agnost.storage
  .bucket(bucketName)
  .deleteFiles(["profile-image-1.jpg", "profile-image-2.jpg"]);
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `deleteFiles` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------- |
| 1   | fileNamesOrIds               | string[]                          | Yes                              | List of name or id of the files to be deleted. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Rename Bucket

You can rename the bucket name by calling the `rename` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let newName = "device-images"
let oldName = "asset-images"

// Renames the `asset-images` bucket to `device-images`.
const result = await agnost.storage.bucket(oldName).rename(newName)
```

</TabItem>


<TabItem value="dart">


```dart
final newName = "device-images";
final oldName = "asset-images";

// Renames the `asset-images` bucket to `device-images`.
final result = await agnost.storage.bucket(oldName).rename(newName);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "623745881182562412d85ce0",
    "name": "device-images",
    "isPublic": true,
    "createdAt": "2022-03-20T15:17:28.439Z",
    "updatedAt": "2022-03-20T16:18:33.953Z",
    "tags": [],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `rename` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| 1   | newName                      | string                            | Yes                              | The new name of the bucket. **root** is a reserved name and cannot be used. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Delete Bucket

You can delete the bucket by calling the `delete` method. It deletes the bucket
and all objects (e.g., files) inside the bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Deletes the `profile-images` bucket and all its contents.
const { errors } = await agnost.storage.bucket(bucketName).delete()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Deletes the `profile-images` bucket and all its contents.
final errors = await agnost.storage.bucket(bucketName).delete();
```

</TabItem>


</Tabs>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Empty Bucket

You can empty the bucket by calling the `empty` method. It removes all objects
(e.g., files) inside the bucket.

:::info

- This method does not delete the bucket itself.
- If you also want to **delete the bucket**, including all its contained
  objects, you can use [delete](#delete-bucket) method.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Empties the `profile-images` bucket.
const { errors } = await agnost.storage.bucket(bucketName).empty()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Empties the `profile-images` bucket.
final errors = await agnost.storage.bucket(bucketName).empty();
```

</TabItem>


</Tabs>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Add tags to bucket

You can add your own tags to each bucket. This metadata can be used in
expressions to filter buckets or store data specific to your application.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

const result = await agnost.storage
  .bucket(bucketName)
  .addTags(["picture", "user", "profile"])
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

final result = await agnost.storage.bucket(bucketName).addTags(["picture", "user", "profile"]);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": true,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T16:13:20.206Z",
    "tags": ["picture", "user", "profile"],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `addTags` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                          |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| 1   | tags                         | string or string[]                | Yes                              | A single tag or an array of tags to add to bucket's metadata. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Remove tags from bucket

You can also remove tags (e.g., your custom metadata associated with your app
storage buckets) from your buckets.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

const result = await agnost.storage.bucket(bucketName).removeTags("profile")
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

final result = await agnost.storage.bucket(bucketName).removeTags("profile");
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "profile-images",
    "isPublic": true,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T16:13:20.206Z",
    "tags": ["picture", "user"],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `removeTags` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| 1   | tags                         | string or string[]                | Yes                              | A single tag or an array of tags to remove from bucket's metadata. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Update bucket info

You can update the overall bucket information (name, isPublic and tags) in a
single method call, instead of calling each individual update method separately.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

const result = await agnost.storage
  .bucket(bucketName)
  .updateInfo("pictures", false, ["user", "profile", "pictures"], true)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

final result = await agnost.storage.bucket(bucketName).updateInfo(
  newName: "pictures",
  isPublic: false,
  tags: ["user", "profile", "pictures"],
  includeFiles: true
);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62373bae161326736e4ffde2",
    "name": "pictures",
    "isPublic": false,
    "createdAt": "2022-03-20T14:35:26.814Z",
    "updatedAt": "2022-03-20T16:13:20.206Z",
    "tags": ["user", "profile", "pictures"],
    "userId": "62c14524cf074016b1045366"
  },
  "errors": null
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

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Options

#### File Upload Options

You can define the options for the file upload by using the `FileUploadOptions`.
It defines the available options that can be set during file upload.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                    |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `contentType`                | string                            | The **Content-Type** header value. This value needs to be specified if using a **fileBody** that is neither **Blob** nor **File** nor **FormData**, otherwise will default to **text/plain;charset=UTF-8**.                                                                                                                             |
| 2   | `isPublic`                   | boolean                           | Specifies whether file is publicy accessible or not. Defaults to the bucket's privacy setting if not specified.                                                                                                                                                                                                                         |
| 3   | `createBucket`               | boolean                           | Specifies whether to create the bucket while uploading the file. If a bucket with the provided name does not exists and if `createBucket` is marked as true then creates a new bucket. Defaults to false.                                                                                                                               |
| 4   | `onProgress`                 | callback function                 | Callback function to call during file upload to get upload progress.<br/>**Parameters**<br/> **1. uploaded** `number` Total bytes uploaded <br/> **2. total** `number` Total size of file in bytes <br/> **3. percent** `number` Percent uploaded (an integer between 0-100), basicly **uploaded/total** rounded to the nearest integer |
| 5   | `tags`                       | string array                      | Array of string values that will be added to the file metadata.                                                                                                                                                                                                                                                                         |

:::info

For the moment, onProgress callback function can only be used in clients where
**XMLHttpRequest** object is available (e.g., browsers).

:::

#### File List Options

You can define the options for the file list by using the `FileListOptions`. It
defines the structure how to get the files of a bucket.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `limit`                      | number                            | A positive integer that specifies the max number of files to return per page.                                                    |
| 2   | `page`                       | number                            | A positive integer that specifies the page number to paginate file results. Page numbers start from 1.                           |
| 3   | `returnCountInfo`            | boolean                           | Flag to specify whether to return the count and pagination information such as total number of files, page number and page size. |
| 4   | `sort`                       | [FileSortEntry](#file-sort-entry) | Specifies the field name and sort direction for sorting returned files.                                                          |

#### File Sort Entry

Here you can find the properties for the `FileSortEntry`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                                                                                                                                                                                         |
| --- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `field`                      | The name of the file field that will be used in sorting the returned objects <br/> It can be either **isPublic**, **updatedAt**, **bucketId**, **fileName**, **size**, **encoding**, **mimeType**, **publicPath**, **userId**, **tags** or **uploadedAt** |
| 2   | `direction`                  | Sort direction <br/> It can be **asc** or **desc**                                                                                                                                                                                                        |
