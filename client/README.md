---
sidebar_position: 2
description:
  Agnost client library documentation where you can find instructions, quick
  start guides, best practices, code examples, and more.
title: Overview
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Overview

This Client API documentation will guide you how to use the key modules of the
client library to integrate your Agnost backend apps with your frontends.

## Key modules

There are several modules in our client library that you can use in your
frontend applications.

- [**Authentication**](/client/guides/authentication/sign-up/) - Handles the
  authentication process of your application users. Provides methods to manage
  users, sessions and authentication. You are free to design the way to
  authenticate your users and manage sessions in Agnost through defining your
  custom services. However, by default Agnost provides **email**, **phone
  number** and **3rd party oAuth provider** based authentication to manage user
  accounts through the client library.
- [**Cloud Storage**](/client/guides/storage/) - Provides the methods to manage
  your app's cloud storage files. With this module you store your files,
  documents, images etc. under buckets, which are the basic containers that hold
  your application data.
- [**Endpoints**](/client/guides/endpoint/) - Provides the methods to execute
  your app backend services by making REST API requests to your app endpoints.
- [**Realtime**](/client/guides/realtime/channels/) - Allows realtime publish
  and subscribe (pub/sub) messaging through websockets.Realtime makes it
  possible to open a two-way interactive communication session between the
  user's device (e.g., browser, smartphone) and a server. With realtime, you can
  send messages to a server and receive event-driven responses without having to
  poll the server for a reply.

## Response structure

Ignoring few exceptions (e.g.,
[auth.getSession](/client/guides/authentication/sessions#get-current-session),
[auth.getUser](/client/guides/authentication/sessions#get-user-info-from-local-storage)),
the client library method executions return a json object which includes two
main components, the method **response data** and the **errors**.

### Success response

If the client library method exeuction completes successfully then the returned
json object's **response data** field(s) will be populated and the **errors**
field will be set to null. The **response data** structure can be different for
each method. Please refer to the specific method's documentation for the
**response data** structure.

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
//Get user and session data using the accessToken
const result = await agnost.auth.getAuthGrant(accessToken)
```

</TabItem>


</Tabs>


<DetailedResponse title="Success response example">


```json
{
  "user": {
    "_id": "6235e0eb25de47092f4d5300",
    "provider": "agnost",
    "providerUserId": "6235e0eb25de47092f4d5300",
    "email": "rooby@agnost.dev",
    "signUpAt": "2022-03-19T13:55:55.772Z",
    "lastLoginAt": "2022-03-19T13:58:42.376Z",
    "emailVerified": true,
    "name": "Rooby"
  },
  "session": {
    "userId": "6235e0eb25de47092f4d5300",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6I...",
    "userAgent": {
      "family": "Chrome",
      "major": "99",
      "minor": "0",
      "patch": "4844",
      "device": {
        "family": "Other",
        "major": "0",
        "minor": "0",
        "patch": "0"
      },
      "os": {
        "family": "Mac OS X",
        "major": "10",
        "minor": "15",
        "patch": "7"
      }
    },
    "accessGroupKeys": []
  },
  "errors": null
}
```

</DetailedResponse>


### Error response

If the client library method exeuction has errors then the returned json
object's **response data** will be null and the **errors** field will include
the list of errors occurred.

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
//Get cloud storage file metadata
let result = await agnost.storage
  .bucket("profile picture")
  .file("profile1.png")
  .getInfo()
```

</TabItem>


</Tabs>


<DetailedResponse title="Error response example">


```json
{
  "data": null,
  "errors": {
    "status": 400,
    "statusText": "Bad Request",
    "items": [
      {
        "origin": "client_error",
        "code": "bucket_not_found",
        "message": "Cannot identify the bucket 'sdfsdf'"
      }
    ]
  }
}
```

</DetailedResponse>


:::note

You can check the returned json object's **errors** field value to identify
failures. If the value of **errors** is null, this means that the method call
completed successfully otherwise **errors** field will hold the list of errors
occured.

:::
