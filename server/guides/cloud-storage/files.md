---
sidebar_position: 3
description:
  Users can make document management operations with the File Manager of the
  Altogic client library.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Files

### Get file info

You can get file info by calling the `getFileInfo` method. It returns the basic
metadata informaton of a file.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
let fileName = "rooby-avatar.png"

// Returns the metadata information about the file
let result = await agnost.storage.bucket(bucketName).file(fileName).getInfo()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final fileName = "rooby-avatar.png";

// Returns the metadata information about the file
final result = await agnost.storage.bucket(bucketName).file(fileName).getInfo();
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


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Check whether file exists

You can check whether the file exists by calling the `exists` method. It checks
whether the file exists or not and returns **true** if file exists, otherwise
**false** .

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>
<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Checks whether the `rooby-avatar.png` file exists
// in `profile-images`  bucket or not
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .exists()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Checks whether the `rooby-avatar.png` file exists
// in `profile-images`  bucket or not
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .exists();
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

### Download

You can download the file by calling the `download` method. It downloads the
file and returns the file content **Blob**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let fileName = "rooby-avatar.png"

// Downloads the file
let result = await agnost.storage
  .bucket("profile-images")
  .file(fileName)
  .download()
```

</TabItem>


<TabItem value="dart">


```dart
final fileName = "rooby-avatar.png";

// Downloads the file
final result = await agnost.storage
  .bucket("profile-images")
  .file(fileName)
  .download();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data":  Blob { size: 1024, type: "image/jpeg" },
  "errors": null
}
```

</DetailedResponse>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Duplicate

You can duplicate the file by calling the `duplicate` method. It duplicates the
file and returns the new file instance.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
let fileName = "rooby-avatar.png"
let duplicateName = "rooby-avatar-copy.png"

// Duplicates the `rooby-avatar.png` file in `profile-images`  bucket
// and creates a new file with name `rooby-avatar-copy.png`
let result = await agnost.storage
  .bucket(bucketName)
  .file(fileName)
  .duplicate(duplicateName)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final fileName = "rooby-avatar.png";
final duplicateName = "rooby-avatar-copy.png";

// Duplicates the `rooby-avatar.png` file in `profile-images`  bucket
// and creates a new file with name `rooby-avatar-copy.png`
final result = await agnost.storage
  .bucket(bucketName)
  .file(fileName)
  .duplicate(duplicateName);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "_id": "62379bbd0b72592107523e49",
    "bucketId": "62373bae161326736e4ffde2",
    "fileName": "rooby-avatar-copy.png",
    "size": 53951,
    "encoding": "7bit",
    "mimeType": "image/png",
    "publicPath": "https://c1-na.agnost.com/_storage/6233230ba1c88fcb1ad5919a/62373bae161326736e4ffde2/62379bbd0b72592107523e49",
    "isPublic": false,
    "uploadedAt": "2022-03-20T21:25:17.911Z",
    "updatedAt": "2022-03-20T21:25:17.911Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `duplicate` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | duplicateName                | string                            | No                               | The new duplicate file name. If not specified, uses the **fileName** as template and ensures the duplicated file name to be unique in its bucket. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Copy file to bucket

You can copy the file to another bucket by calling the `copyTo` method. If there
already exists a file with the same name in destination bucket, it ensures the
copied file name to be unique in its new destination.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
let bucketNameOrId = "employee-images"

// Copies the file to another bucket
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .copyTo(bucketNameOrId)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final bucketNameOrId = "employee-images";

// Copies the file to another bucket
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .copyTo(bucketNameOrId);
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
| 1   | bucketNameOrId               | string                            | Yes                              | The name or id of the bucket to copy the file into. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Move file to bucket

You can move the file to another bucket by calling the `moveTo` method. The file
will be removed from its current bucket and will be moved to its new bucket. If
there already exists a file with the same name in destination bucket, it ensures
the moved file name to be unique in its new destination.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
let bucketNameOrId = "employee-images"

// Moves the file to another bucket
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby.png")
  .moveTo(bucketNameOrId)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final bucketNameOrId = "employee-images";

// Moves the file to another bucket
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby.png")
  .moveTo(bucketNameOrId);
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
| 1   | bucketNameOrId               | string                            | Yes                              | The name or id of the bucket to move the file into. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Make file public

You can make the file public by calling the `makePublic` method. It changes the
privacy of the file to **true**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Makes the file public
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePublic()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Makes the file public
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePublic();
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


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Make file private

You can make the file private by calling the `makePrivate` method. It changes
the privacy of the file to **false**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Makes the file private
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePrivate()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Makes the file private
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .makePrivate();
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


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Add tags to file

You can add your own tags to each uploaded file. This metadata can be used in
expressions to filter files or store data specific to your application.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .addTags(["picture", "user", "profile"])
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .addTags(["picture", "user", "profile"]);
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

Here you can find parameters for the `addTags` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| 1   | tags                         | string or string[]                | Yes                              | A single tag or an array of tags to add to file's metadata. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Remove tags from file

You can also remove tags (e.g., your custom metadata associated with your files)
from your files.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeTags(["picture", "user"])
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .removeTags(["picture", "user"]);
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

Here you can find parameters for the `removeTags` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------- |
| 1   | tags                         | string or string[]                | Yes                              | A single tag or an array of tags to remove from file's metadata. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Update file info

You can update the overall file information (name, isPublic and tags) in a
single method call, instead of calling each individual update method separately.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Makes the `profile-images` bucket and contents public.
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .updateInfo("avagar.png", false, ["user", "profile"])
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Makes the `profile-images` bucket and contents public.
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .updateInfo(
    newName:"avagar.png",
    isPublic: false,
    tags: ["user", "profile"]
  );
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
    "tags": ["user", "profile"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `updateInfo` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                          |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| 1   | newName                      | string                            | Yes                              | The new name of the file.                                     |
| 2   | isPublic                     | boolean                           | Yes                              | The privacy setting of the file.                              |
| 3   | tags                         | string or string[]                | Yes                              | Array of string values that will be set as the file metadata. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Rename file

You can rename the file by calling the `rename` method. If the file name already
exist in the bucket, returns an error.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
let newName = "booby-avatar.png"

// Renames the file
let result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .rename(newName)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final newName = "booby-avatar.png";

// Renames the file
final result = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .rename(newName);
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
    "updatedAt": "2022-03-20T21:41:16.605Z",
    "userId": "62c14524cf074016b1045366",
    "tags": ["low-quality"]
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `rename` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | newName                      | string                            | Yes                              | The new name of the file.            |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Replace file

You can replace the file by calling the `replace` method. It keeps the name of
the file but replaces file contents, size, encoding and mime-type with the newly
uploaded file info and returns the metadata of the file after replacement.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"
const selectedFile = event.target.files[0]

// Replaces the file
let result = await agnost.storage
  .bucket(bucketName)
  .file("booby-avatar.png")
  .replace(selectedFile)
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";
final selectedFile = await pickFile(); // pick

// Replaces the file
final result = await agnost.storage
  .bucket(bucketName)
  .file("booby-avatar.png")
  .replace(selectedFile.bytes); // replace uses Uint8List
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

Here you can find parameters for the `replace` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --- | ---------------------------- | -------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | fileBody                     | any                                                | Yes                              | The body of the new file that will be used to replace the existing file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2   | options                      | [FileUploadOptions](./buckets#file-upload-options) | Yes                              | Content type of the file, privacy setting of the file, tags of the file and whether to create the bucket if not exists. `contentType` is ignored, if **fileBody** is **Blob**, **File** or **FormData**, otherwise `contentType` option needs to be specified.<br/> If not specified, `contentType` will default to **text/plain;charset=UTF-8**. <br/> If `isPublic` is not specified, defaults to the bucket's privacy setting. If `createBucket` is set to true (defaults to false), then creates a new bucket if the bucket does not exist. |

:::info

If `onProgress` callback function is defined in
[FileUploadOptions](./buckets#file-upload-options), it periodically calls this
function to inform about upload progress. Please note that for the moment
`onProgress` callback function can only be used in clients where
`XMLHttpRequest` object is available (e.g., browsers).

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Delete file

You can delete the file by calling the `delete` method. It deletes the file from
the bucket.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let bucketName = "profile-images"

// Deletes the file from the bucket
let { errors } = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .delete()
```

</TabItem>


<TabItem value="dart">


```dart
final bucketName = "profile-images";

// Deletes the file from the bucket
final errors = await agnost.storage
  .bucket(bucketName)
  .file("rooby-avatar.png")
  .delete();
```

</TabItem>


</Tabs>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
