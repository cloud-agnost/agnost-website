---
sidebar_position: 3
description:
  Through the Agnost client library, you can manage sessions of your application
  users.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Sessions

**Session management facilitates secure interactions between a user and an
application and applies to requests and responses associated with that
particular user.** When users have an ongoing session with an application, they
submit requests within their session and often provide potentially sensitive
information. The application may retain this information and/or track the user's
status during the session across multiple requests.

**Session tokens** serve to identify a user’s session for the RESTful API
requests and are exchanged between the application and its users. RESTful API,
which relies on HTTP traffic on its own, is stateless, meaning each request is
processed independently, even if they are related to the same session. Thus,
session management is crucial for directing these interactions and these tokens
are vital as they are passed back and forth between the user and the
application. Each request and response will have an associated session token
that allows the application to remember distinct information about the client
using it.

Through the Agnost client library, you can **manage sessions of your application
users.** Below is the list of session management capabilities of Agnost that you
can use in your service designs.

:::note

You can **enforce sessions** for your app uses through your client library key.
If sessions are enforced then users need to be signed in to your app and the
session token needs to be provides in **Session Header** of each method call
made to your backend app through the client library.

You can enable/disabled session enforcement or your client library keys from
**App settings** → **Client library keys** view of Designer.

:::

### Sign out a session

You can sign out a session by calling the `signOut` method.

:::note

If an input session token is not provided, this method signs out the user from
the current session, clears user and session data in local storage and removes
the Session header in Fetcher. Otherwise, signs out the user from the session
identified by the input token.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Sign out a session
const { errors } = await agnost.auth.signOut(sessionToken)
```

</TabItem>


<TabItem value="dart">


```dart

//Sign out a session
final errors = await agnost.auth.signOut(sessionToken);

```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `signOut` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | sessionToken                 | string                            | No                               | A session token of the user          |

:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

### Sign out from all sessions

You can sign out all session by calling the `signOutAll` method.

:::note

A user can have multiple active sessions (e.g., logged in form multiple
different devices, browsers). This method signs out users from all their active
sessions. For the client that triggers this method, also clears user and session
data in local storage, and removes the Session header in Fetcher.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Sign out all sessions
const { errors } = await agnost.auth.signOutAll()
```

</TabItem>


<TabItem value="dart">


```dart

//Sign out all sessions
final errors = await agnost.auth.signOutAll();

```

</TabItem>


</Tabs>


:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

### Sign out all except current

You can sign out all session except the current by calling the
`signOutAllExceptCurrent` method. It signs out users from all their active
sessions except the current one which makes the API call.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Sign out all sessions except current
const { errors } = await agnost.auth.signOutAllExceptCurrent()
```

</TabItem>


<TabItem value="dart">


```dart

//Sign out all sessions except current
final errors = await agnost.auth.signOutAllExceptCurrent();

```

</TabItem>


</Tabs>


:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

### Get current session

You can get the current session by calling the `getSession` method. This method
is used to get the current session of the user and returns the currently active
session data from local storage.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Get current session
const session = agnost.auth.getSession()
```

</TabItem>


<TabItem value="dart">


```dart

//Get current session
final session = await agnost.auth.getSession();

```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "userId": "6233247fb46a9b5bb144e797",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IhJmslSKnS2H7kpX...",
  "creationDtm": "2022-03-17T13:17:50.903Z",
  "userAgent": {
    "family": "Chrome",
    "major": "99",
    "minor": "0",
    "patch": "4844",
    "device": { "family": "Other", "major": "0", "minor": "0", "patch": "0" },
    "os": { "family": "Mac OS X", "major": "10", "minor": "15", "patch": "7" }
  },
  "accessGroupKeys": []
}
```

</DetailedResponse>


### Get user info from local storage

You can get the user info by calling the `getUser` method. This method is used
to get the user info of the user and returns the user data from local storage.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
//Get current session
const user = agnost.auth.getUser()
```

</TabItem>


<TabItem value="dart">


```dart

//Get current session
final user = await agnost.auth.getUser();
// TODO:
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "_id": "6233247fb46a9b5bb144e797",
  "provider": "agnost",
  "providerUserId": "6233247fb46a9b5bb144e797",
  "email": "john@myemail.com",
  "signUpAt": "2022-03-17T12:07:27.514Z",
  "lastLoginAt": "2022-03-17T13:17:50.878Z",
  "emailVerified": true,
  "name": "John"
}
```

</DetailedResponse>


### Get user info from database

You can get the user info of the user associated with the active session from
the database by calling the `getUserFromDB` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Get current session
const result = await agnost.auth.getUserFromDB()
```

</TabItem>


<TabItem value="dart">


```dart

//Get current session
final result = await agnost.auth.getUserFromDB();

```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6233247fb46a9b5bb144e797",
    "provider": "agnost",
    "providerUserId": "6233247fb46a9b5bb144e797",
    "email": "john@myemail.com",
    "signUpAt": "2022-03-17T12:07:27.514Z",
    "lastLoginAt": "2022-03-17T13:17:50.878Z",
    "emailVerified": true,
    "name": "John"
  },
  "errors": null
}
```

</DetailedResponse>


:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

### Get all active sessions

You can get all active sessions by calling the `getAllSessions` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
//Get all sessions of the user (active or not)
const result = await agnost.auth.getAllSessions()
```

</TabItem>


<TabItem value="dart">


```dart

//Get all sessions of the user (active or not)
final result = await agnost.auth.getAllSessions();

```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "sessions": [
    {
      "userId": "6233247fb46a9b5bb144e797",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "creationDtm": "2022-03-17T13:17:50.903Z",
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
    {
      "userId": "6233247fb46a9b5bb144e797",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX...",
      "creationDtm": "2022-03-17T13:23:52.882Z",
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
    }
  ],
  "errors": null
}
```

</DetailedResponse>


:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

### Invalidate session

You can invalidate a session by calling the `invalidateSession` method. It
invalidates the current user session, removes local session data, and clears
**Session** token request header in Fetcher. It is useful when the user logs out
from the client.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Invalidates user session and clears local session data
agnost.auth.invalidateSession()
```

</TabItem>


<TabItem value="dart">


```dart

//Invalidates user session and clears local session data
agnost.auth.invalidateSession();

```

</TabItem>


</Tabs>


:::note

If _signInRedirect_ is specified in
[ClientOptions](/client/installation#initialization-options) when creating the
Agnost api client and if the client is running in a browser, this method
redirects the user to the sign in page.

:::

### Clear local session data

By default Agnost saves the **session** and **user** data in local storage
whenever a new session is created (e.g., through sign up or sign in methods).
This method clears the locally saved session and user data. In contrast to
`invalidateSession`, this method does not clear Session token request header in
Fetcher and does not redirect to a sign in page.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
//Deletes locally saved session and user data
agnost.auth.clearLocalData()
```

</TabItem>


<TabItem value="dart">


```dart

//Deletes locally saved session and user data
awwit agnost.auth.clearLocalData();

```

</TabItem>


</Tabs>


### Set client session and user

#### Set Client Session

You can set the client session by calling the `setSession` method.

It sets (overrides) the active user session. If you use the _signUp_ or _signIn_
methods of this client library, **you do not need to call this method** to set
the user session, since the client library automatically manages user session
data.

However if you have more complex sign up or sign in logic, such as 2 factor
authentication flow where you authenticate users using a short code, you might
need to create your endpoints and associated services to handle these special
cases. In those situations, this method becomes handy to update the session data
of logged-in users so that the _Fetcher_ can update its default headers to pass
the correct session token in its RESTful API calls.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
//Sets the active user session
agnost.auth.setSession(session)
```

</TabItem>


<TabItem value="dart">


```dart

//Sets the active user session
await agnost.auth.setSession(session);

```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `setSession` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | session                      | Session                           | No                               | A session of the user is an object that contains the following properties: _userId_, _token_, _creationDtm_, _userAgent_, _accessGroupKey_. |

:::tip

When you use custom authentication logic in your apps, you need to call this
client library method to update session data so that your calls to your app
endpoints that require a valid session token do not fail.

:::

#### Set User

It saves the user data to local storage. If you use the _signUp_ or _signIn_
methods of this client library, **you do not need to call this method** to set
the user data, since the client library automatically manages user data.

However, if you have not used the signUp or signIn methods of this client
library, this method enables you to update locally stored user data.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } , { label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
//Saves the user data to local storage
agnost.auth.setUser(user)
```

</TabItem>


<TabItem value="dart">


```dart

//Saves the user data to local storage
await agnost.auth.setUser(user);

```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `setUser` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| 1   | user                         | User                              | No                               | A user object that can be used to set the user info of the user in the client session. |

### Get authentication grants

This method returns the authorization grants of a user using the specified input
`accessToken`. If no `accessToken` specified as input, tries to retrieve the
`accessToken` from the browser url query string parameter named 'access_token'.

You can use the `access_token` token to get authentication grants, namely the
user data and a new session object by calling the `getAuthGrant` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
//...You can get user and session data using the accessToken
const result = await agnost.auth.getAuthGrant(accessToken)
```

</TabItem>


<TabItem value="dart">


```dart

//...You can get user and session data using the accessToken
final result = await agnost.auth.getAuthGrant(accessToken);

```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


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


#### Parameters

Here you can find parameters for the `getAuthGrant` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                    |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| 1   | accessToken                  | string                            | No                               | An access token is a string that is used to get the user data and a new session object. |

:::note

If successful, this method also saves the user and session data to local storage
and sets the Session header in Fetcher.

:::
