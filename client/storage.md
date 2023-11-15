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

### Upload file

You can upload a file to an existing bucket by calling the `upload` method. If
there already exists a file with the same name in destination bucket and if `upsert` is set to true in the file upload options then it overwrites the exsiting file, otherwise returns an error.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
// Uploads a file to the profiles-images bucket
let storageName = "default";
let bucketName = "profiles-images";
// Get the file data
const fileToUpload = event.target.files[0];
const result = await agnost.storage
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload, { isPublic: true, upsert: true });

// If you would like to have a progress indicator during file upload
// you can also provide a callback function with `onProgress` property
const result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .upload(fileToUpload.name, fileToUpload, {
    isPublic: true,
    upsert: true,
    onProgress: (uploaded, total, percent) =>
      console.log(`progress: ${uploaded}/${total} ${percent}`),
  });
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
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
  },
  "errors": null
}
```

</DetailedResponse>


:::info
After uploading your files to your storage and if the uploaded files are marked as **public** meaning that they can be accessed publicly, you can get their contents using the following endpoints which are by default included in your app version's API server:
1. Using the id of the uploaded file.
**`your API server base URL`/object/`uploaded file id`**

Assuming that your API server base URL is "https://yourcluster.com/env-l05et1xpq7lw" and the uploaded file id is "fl-234e3rwrwr", you can access your file from the following public link:

https://yourcluster.com/env-l05et1xpq7lw/fl-234e3rwrwr

2. Using storage, bucket and file name
**`your API server base URL`/object/`storage name`/`bucket name`/`file path (name)`**

Assuming that your API server base URL is "https://yourcluster.com/env-l05et1xpq7lw", your storage name is "default", you bucket name is "profiles-images" and your uploaded file path (name) is "Booby.png", you can access your file from the following public link:

https://yourcluster.com/env-l05et1xpq7lw/object/default/profiles-images/Booby.png


In both of the above options, if you would like to get the uploaded file as an attachment then just add **attachment=true** query string parameter to the the file's public link.
:::


#### Parameters

Here you can find parameters for the `upload` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>         | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --- | ---------------------------- | ----------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | fileName                     | string                                    | Yes                              | The name of the file e.g., rooby-avatar.jpg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 2   | fileBody                     | any                                       | Yes                              | The body of the file that will be stored in the bucket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3   | options                      | [FileUploadOptions](#file-upload-options) | No                               | Privacy setting of the file, tags of the file and whether to upsert the file if file already exists. <br/> If `isPublic` is not specified, defaults to the bucket's privacy setting. If `upsert` is set to true (defaults to false), then overwrites the existing file or creates a new file. |

:::info

If `onProgress` callback function is defined in
[FileUploadOptions](#file-upload-options), it periodically calls this function
to inform about upload progress.

Once you upload a file to bucket, it is stored in the staging area for a few
seconds for internal processing. That means that you might not be able to access
the file for a few seconds after it is uploaded.

:::

### Options

#### File Upload Options

You can define the options for the file upload by using the `FileUploadOptions`.
It defines the available options that can be set during file upload.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                    |
| --- | ---------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | `isPublic`                   | boolean                           | Specifies whether file is publicy accessible or not. Defaults to the bucket's privacy setting if not specified.                                                                                                                                                                                                                         |
| 3   | `upsert`               | boolean                           | Specifies whether to create a new file or overwrite an existing file. Defaults to false.                                                                                                                               |
| 4   | `onProgress`                 | callback function                 | Callback function to call during file upload to get upload progress.<br/>**Parameters**<br/> **1. uploaded** `number` Total bytes uploaded <br/> **2. total** `number` Total size of file in bytes <br/> **3. percent** `number` Percent uploaded (an integer between 0-100), basicly **uploaded/total** rounded to the nearest integer |
| 5   | `tags`                       | string array                      | Key-value pairs that will be added to the file metadata.                                                                                                                                                                                                                                                                         |

:::info

For the moment, onProgress callback function can only be used in clients where
**XMLHttpRequest** object is available (e.g., browsers).

:::
