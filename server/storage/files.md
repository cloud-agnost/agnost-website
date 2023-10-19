---
sidebar_position: 3
description:
  Users can make document management operations with the File Manager of the
  Agnost server library.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Files

### Get file info

You can get file info by calling the `getInfo` method. It returns the basic
metadata informaton of a file.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"
let fileName = "rooby-avatar.png"

// Returns the metadata information about the file
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file(fileName)
  .getInfo()
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "6237419e161326736e4ffde3",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/6237419e161326736e4ffde3",
    "isPublic": false,
    "uploadedAt": "2022-03-20T15:00:46.275Z",
    "updatedAt": "2022-03-20T16:14:29.332Z",
    "userId": "62c14524cf074016b1045366",
    "tags": []
  },
  "errors": null
}
```

</DetailedResponse>


### Check whether file exists

You can check whether the file exists by calling the `exists` method. It checks
whether the file exists or not and returns **true** if file exists, otherwise
**false** .

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>
<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Checks whether the `rooby-avatar.png` file exists
// in `profile-images`  bucket or not
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .exists()
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


### Copy file to bucket

You can copy the file to another path by calling the `copyTo` method. If there
already exists a file with the same name in destination path, it ensures the
copied file name to be unique in its new destination.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"
let toPath = "employee-images"

// Copies the file to another bucket
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .copyTo(toPath)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379cfb0b72592107523e4a",
    "bucketId": "62379ce345aba7a695579b49",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62379ce345aba7a695579b49/62379cfb0b72592107523e4a",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:30:35.609Z",
    "updatedAt": "2022-03-20T21:30:35.609Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `copyTo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------- |
| 1   | toPath                       | string                            | Yes                              | The new file path where this file will be moved to. |

### Move file to bucket

You can move the file to another path by calling the `moveTo` method. The file
will be removed from its current path and will be moved to its new path. If
there already exists a file with the same name in destination path, it ensures
the moved file name to be unique in its new destination.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"
let toPath = "employee-images"

// Moves the file to another bucket
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby.png")
  .moveTo(toPath)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379df1b9a84d607cd79016",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379df1b9a84d607cd79016",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:34:41.617Z",
    "updatedAt": "2022-03-20T21:35:30.369Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `moveTo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------- |
| 1   | toPath                       | string                            | Yes                              | The new file path where this file will be moved to. |

### Make file public

You can make the file public by calling the `makePublic` method. It changes the
privacy of the file to **true**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Makes the file public
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePublic()
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": true,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:37:01.932Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


### Make file private

You can make the file private by calling the `makePrivate` method. It changes
the privacy of the file to **false**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Makes the file private
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePrivate()
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:38:03.854Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


### Add tag to file

You can add your own tags to each uploaded file. This metadata can be used in
expressions to filter files or store data specific to your application.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Set a tag for a file
const key = "category"
const value = "documents"

let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .setTag(key, value)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": true,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:37:01.932Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality", "picture", "user", "profile"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `setTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | key                          | string                            | Yes                              | A key of tag.                        |
| 2   | value                        | any                               | Yes                              | A value of tag.                      |

### Remove tag from file

You can also remove tags (e.g., your custom metadata associated with your files)
from your files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName
let bucketName = "profile-images"

const key = "category"

let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeTag(key)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": true,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:37:01.932Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality", "profile"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `removeTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------- |
| 1   | tag                          | string                            | Yes                              | A name of the tag to remove from file's metadata. |

### Remove all tags from file

You can also remove all tags (e.g., your custom metadata associated with your
files) from your files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

const key = "category"

let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeAllTags(key)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": true,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:37:01.932Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality", "profile"]
  },
  "errors": null
}
```

</DetailedResponse>


### Update file info

You can update the overall file information (path, isPublic and tags) in a
single method call, instead of calling each individual update method separately.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

const tags = {
  category: "documents",
  author: "John Doe",
}

// Makes the `profile-images` bucket and contents public.
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .updateInfo("avatar.png", false, tags)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:37:01.932Z",
    "userId": "62c14524cf074016b1045366",
    "tags": [{ "category": "documents", "author": "John Doe" }]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `updateInfo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                         |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------ |
| 1   | newName                      | string                            | Yes                              | The new name of the file.                                    |
| 2   | isPublic                     | boolean                           | Yes                              | The privacy setting of the file.                             |
| 3   | tags                         | KeyValuePair                      | Yes                              | A JSON object (key-value pairs) to set as the file metadata. |

### Replace file

You can replace the file by calling the `replace` method. It keeps the name of
the file but replaces file contents, size, encoding and mime-type with the newly
uploaded file info and returns the metadata of the file after replacement.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"
const newFile = {
  path: "path/to/my/file/filename.jpg",
  mimeType: "image/png",
  size: 1024, // File size in bytes
  stream: /* Readable stream of file contents */,
};


// Replaces the file
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("booby-avatar.png")
  .replace(newFile)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379ba045aba7a695579b48",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "booby-avatar.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379ba045aba7a695579b48",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:24:48.514Z",
    "updatedAt": "2022-03-20T21:41:16.605Z"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

#### Parameters

Here are the parameters for the `replace` method:

| #   | Name | Data Type                          | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ---- | ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | file | FileStreamObject \| FileDiskObject | Yes      | The file object that will be stored in the bucket. A file can be uploaded from a readable stream or from a file locally stored on the disk using its localPath.<br /><br />If `FileStreamObject` is provided, the following values need to be provided:<br /> - `path`: The path of the file (e.g., "path/to/my/file/filename.jpg")<br />- `mimeType`: The mime-type of the file (e.g., "image/png")<br /> - `size`: The size of the file in bytes<br />- `stream`: The Readable stream of file contents<br /><br />If `FileDiskObject` is provided, the following values need to be provided:<br />- `path`: The path of the file (e.g., "path/to/my/file/filename.jpg")<br />- `mimeType`: The mime-type of the file (e.g., "image/png")<br />- `size`: The size of the file in bytes<br />- `localPath`: The local path of the file where it is stored locally. |

### Delete file

You can delete the file by calling the `delete` method. It deletes the file from
the bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Deletes the file from the bucket
let { errors } = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .delete()
```

</TabItem>


</Tabs>


Certainly! Here's the documentation for the Agnost Client Library method for
"Create Read Stream" along with an example:

### Create Read Stream

The `createReadStream` method allows you to download a file as a readable
stream. You can use the returned readable stream to pipe the file's contents to
a writable stream or listen to 'data' events to read the file's contents.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let storageName = "default"
let bucketName = "profile-images"

// Create a readable stream to download a file
try {
  const fileStream = await agnost
    .storage(storageName)
    .bucket(bucketName)
    .createReadStream()

  // Listen to 'data' events to read the file's contents
  fileStream.on("data", (chunk) => {
    console.log("Received chunk of data:", chunk)
  })

  // Handle 'end' event when the file has been fully read
  fileStream.on("end", () => {
    console.log("File reading completed.")
  })

  // Handle errors if any occur
  fileStream.on("error", (error) => {
    console.error("Error reading file:", error)
  })
} catch (error) {
  console.error("Error creating readable stream:", error)
}
```

</TabItem>


</Tabs>


#### Returns

The `createReadStream` method returns a Promise that resolves to a readable
stream, which can be used to read the contents of the stored file.
