---
sidebar_position: 6
description:
  You can store and manage your files in Altogic's cloud infrastructure.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Storage

Everything that you store in your app storage **must be contained in a bucket**.
Buckets are the basic containers that hold your application data (i.e., files).

- You can use buckets to organize your data and control access to your data, but
  unlike directories and folders, **you cannot nest buckets**.
- You can store an unlimited number of files in a bucket.
- You can set access controls on buckets and the files they contain.

# Buckets

Buckets are primarily used to manage your files and its contents (e.g., files,
documents, images).

### Upload file

You can upload a file to an existing bucket by calling the `upload` method. If
there already exists a file with the same name in destination bucket, it ensures
the uploaded file name to be unique in its bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
//Uploads a file to the profiles-images bucket
let storageName = "default"
let bucketName = "profiles-images"
const fileToUpload = event.target.files[0]
const result = await agnost.storage
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload)

//If you would like to have a progress indicator during file upload
//you can also provide a callback function with `onProgress` property
const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload, {
    onProgress: (uploaded, total, percent) =>
      console.log(`progress: ${uploaded}/${total} ${percent}`),
  })
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
    "publicPath": "https://c1-na.agnost.dev/_storage/623323/0ba1c889a/62373bae1/6132d",
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
