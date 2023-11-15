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
metadata information of a file.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";
const fileName = "rooby-avatar.png";

// Returns the metadata information about the file
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file(fileName)
  .getInfo();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-234e3rwrwr",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small"
  }
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
const storageName = "default";
const bucketName = "profile-images";

// Checks whether the `rooby-avatar.png` file exists
// in `profile-images` bucket or not
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .exists();
```

</TabItem>


</Tabs>


### Copy file

You can copy the file to another path by calling the `copyTo` method in the same bucket. If there
already exists a file with the same name in destination path, it throws an error.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";
const toPath = "archive/rooby-avatar.png";

// Copies the file to another bucket
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .copyTo(toPath);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "archive/rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small"
  }
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `copyTo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------- |
| 1   | toPath                       | string                            | Yes                              | The new file path where this file will be copied to. |

### Move file

You can move the file to another path by calling the `moveTo` method in the same bucket. The file
will be removed from its current path and will be moved to its new path. If
there already exists a file with the same name in destination path, it throws an error.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";
const toPath = "backup/rooby-avatar.png";

// Moves the file to another bucket
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby.png")
  .moveTo(toPath);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-234e3rwrwr",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "backup/rooby-avatar.pn",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small"
  }
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
const storageName = "default";
const bucketName = "profile-images";

// Makes the file public
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePublic();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small"
  }
}
```

</DetailedResponse>


### Make file private

You can make the file private by calling the `makePrivate` method. It changes
the privacy of the file to **false**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Makes the file private
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePrivate();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": false,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small"
  }
}
```

</DetailedResponse>


### Add tag to file

You can add your own tags to each uploaded file.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Set a tag for a file
const key = "quality"
const value = "high"

let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .setTag(key, value);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "size": "small",
    "quality": "high"
  }
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `setTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | key                          | string                            | Yes                              | Key (name) of tag.                        |
| 2   | value                        | any                               | Yes                              | Value of tag.                      |

### Remove tag from file

You can also remove tags (e.g., your custom metadata associated with your files)
from your files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

const key = "size"

let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeTag(key);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "quality": "high
  }
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `removeTag` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------- |
| 1   | tag                          | string                            | Yes                              | Name of the tag to remove from file's metadata. |

### Remove all tags from file

You can also remove all tags (e.g., your custom metadata associated with your
files) from your files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

const key = "quality"

let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeAllTags(key);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "rooby-avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": true,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {}
}
```

</DetailedResponse>


### Update file info

You can update the overall file information (path, isPublic and tags) in a
single method call, instead of calling each individual update method separately.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

const tags = {
  category: "documents",
  author: "John Doe",
}

// Renames the file, upddates it tags and marks it as private
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .updateInfo("avatar.png", false, tags);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "avatar.png",
  "size": 212233,
  "mimeType": "image/png",
  "isPublic": false,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "category": "documents",
    "author": "John Doe",
  }
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
the file but replaces file contents, size and mime-type with the newly
uploaded file info and returns the metadata of the file after replacement.  Please note that `FileStreamObject.path` or `FileDiskObject.path` data will be ignored since only the contents of the file is replaced not its path or name.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

const newFile = {
  path: "filename.png",
  mimeType: "image/png",
  size: 1024, // File size in bytes
  localPath: 'path/to/file/on/disk',
};


// Replaces the file
let result = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("booby-avatar.png")
  .replace(newFile);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "id": "fl-343rwsf324",
  "bucketId": "bck-o5nnyhs19dgw",
  "storageId": "str-o0dlitj2x5id",
  "path": "booby-avatar.png",
  "size": 456789,
  "mimeType": "image/png",
  "isPublic": false,
  "uploadedAt": "2022-03-20T15:01:41.993Z",
  "updatedAt": "2022-03-20T15:01:41.993Z",
  "userId": "611a45f9f3e7ec001950175f",
  "tags": {
    "category": "documents",
    "author": "John Doe",
  }
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
const storageName = "default";
const bucketName = "profile-images";

// Deletes the file from the bucket
let { errors } = await agnost
  .storage(storageName)
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .delete();
```

</TabItem>


</Tabs>


### Create Read Stream

The `createReadStream` method allows you to download a file as a readable
stream. You can use the returned readable stream to pipe the file's contents to
a writable stream or listen to 'data' events to read the file's contents.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const storageName = "default";
const bucketName = "profile-images";

// Create a readable stream to download a file
try {
  const fileStream = await agnost
    .storage(storageName)
    .bucket(bucketName)
    .file("rooby-avatar.png")
    .createReadStream();

  // Listen to 'data' events to read the file's contents
  fileStream.on("data", (chunk) => {
    console.log("Received chunk of data:", chunk);
  });

  // Handle 'end' event when the file has been fully read
  fileStream.on("end", () => {
    console.log("File reading completed.");
  });

  // Handle errors if any occur
  fileStream.on("error", (error) => {
    console.error("Error reading file:", error);
  });
} catch (error) {
  console.error("Error creating readable stream:", error);
}
```

</TabItem>


</Tabs>


#### Returns

The `createReadStream` method returns a Promise that resolves to a readable
stream, which can be used to read the contents of the stored file.
