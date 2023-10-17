---
sidebar_position: 1
description:
  You can sign up your app users using email, phone number or 3rd party oAuth
  provider (e.g., Google, Apple, Twitter, Facebook) based authentication flows.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import BrowserWindow from "@site/src/components/BrowserWindow"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Sign Up

Agnost provides three methods to manage user accounts through the client
library. You can sign up your app users using **email**, **phone number** or
**3rd party oAuth provider** (e.g., Google, Apple, Twitter, Facebook) based
authentication flows.

### Sign up users with email

You can create a new user with email and password by using `signUpWithEmail`
method.

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let email = "hello@agnost.dev"
let password = "12345%"
let name = "Luke"

//Sign up a new user with email and password
const result = await agnost.auth.signUpWithEmail(email, password)

//Sign up a new user with email, password and additional user data
const result = await agnost.auth.signUpWithEmail(email, password, {
  name: "Luke",
  surname: "Skywalker",
  title: "Jedi",
})
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "623215f2b46a9b5bb144e5d4",
    "provider": "agnost",
    "providerUserId": "623215f2b46a9b5bb144e5d4",
    "email": "rooby@agnost.dev",
    "signUpAt": "2022-03-16T16:53:06.237Z",
    "lastLoginAt": "2022-03-16T16:53:06.237Z",
    "emailVerified": false,
    "name": "Rooby"
  },
  "session": null,
  "errors": null
}
```

</DetailedResponse>


:::note

By default email verification is **enabled** in your **App settings** →
**Authentication** view of **Studio**.

- Once you call this method, a verification email will be sent to the user with
  a link to click and this method returns the **user** data with a **null**
  session.
- Until the user click this link, the email address will not be verified and a
  **session** will not be created.
- If a user tries to sign in to an account where email has not been verified
  yet, an error message will be returned asking for email verification.

If you would like to change this, you can disable "**Confirm** email addresses"
in your **App settings** → **Authentication** view of Studio.

If `emailVerified` field is set to true and passed in the last parameter of this
method in a user JSON object, then the email verification step is bypassed even
the email verification is enabled in application authentication settings. This
is primarily used for use-cases where the email address of the user is alreay
known/verified so that users are not forced to verify their email addresses
again.

:::

After the user clicks on the link in the confirmation email, Agnost verifies the
verification token sent in the email and if the email is verified successfully
redirects the user to the **Redirect URL** with an `access_token`.

:::tip

You can define the **Redirect URL** in your **App settings** →
**Authentication** view of Studio. Additionally you can override this value in
your Environment details view for each environment.

:::

<BrowserWindow url="http://localhost:3001/auth-redirect?status=200&access_token=0e55c6fa93ae4e8cbf6d57fa&action=email-confirm"></BrowserWindow>

You can use **Redirect URL** and this `access_token` to get authentication
grants with `getAuthGrant` method, namely the **user** data and a new
**session** object will be returned.

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js title="~ /page/auth-redirect.js"
let accessToken = "0e55c6fa93ae4e8cbf6d57fa"

// After email address verified, you can get user and session data using the `access_token`
// If no `access_token` specified as input, tries to retrieve the accessToken from the
// browser url query string parameter named 'access_token'.

const result = await agnost.auth.getAuthGrant(accessToken)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6234a7210b72592107523c6c",
    "provider": "agnost",
    "providerUserId": "6234a7210b72592107523c6c",
    "email": "rooby@agnost.dev",
    "signUpAt": "2022-03-18T15:37:05.835Z",
    "lastLoginAt": "2022-03-18T16:35:13.693Z",
    "emailVerified": true,
    "name": "Rooby"
  },
  "session": {
    "userId": "6234a7210b72592107523c6c",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlb...",
    "creationDtm": "2022-03-18T16:35:13.702Z",
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


:::note

If you would like to **disable** email verification, you can visit **App
settings** → **Authentication** view of **Studio** and disable "**Confirm**
email addresses".

- If email confirmation is **disabled**, a newly created **session** object with
  the **user** data will be returned immediately when you call the
  `signUpWithEmail` method.

:::

If the email of a user cannot be authenticated, your frontend app will be
redirected to the **Redirect URL** and an error message will be provided in the
query string parameter named error.

<BrowserWindow url="http://localhost:3001/auth-redirect?status=400&action=email-confirm&error=Invalid+or+expired+access+token"></BrowserWindow>

#### Parameters

Here you can find the parameters for the `signUpWithEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                              |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | email                        | string                                     | Yes                              | Unique email address of the user. If there is already a user with the provided email address then an error is raised.                                                                                                                                                                                                                             |
| 2   | password                     | string                                     | Yes                              | Password of the user, should be at least 6 characters long.                                                                                                                                                                                                                                                                                       |
| 3   | redirectURL                  | string                                     | No                               | This parameter is required if email confirmation is enabled. After email address of the user is confirmed, the user is redirected to this URL with an `access_token` in query string parameter. The `redirectURL` needs to match with one of the configured redirect URLs in your Version Settings/Authentication configuration in Agnost Studio. |
| 4   | name or user data            | string or user object with key-value pairs | No                               | Name of the user or additional user data associated with the user that is being created in the database. Besides the name of the user, you can pass additional user fields with values (except email and password) to be created in the database.                                                                                                 |

### Resend verification email

You can resend verification email to the user by calling the
`resendVerificationEmail` method.

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let email = "rooby@agnost.dev"

// Resends verification email to the user
const { errors } = await agnost.auth.resendVerificationEmail(email, redirectURL)
```

</TabItem>


</Tabs>


:::note

If email confirmation is **disabled** in your **App settings** →
**Authentication** view of **Studio** or the email address of the user is
already verified, it returns an error.

:::

#### Parameters

Here you can find parameters for the `resendVerificationEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1   | email                        | String                            | Yes                              | The email address of the user.                                                                                         |
| 2   | redirectURL                  | String                            | Yes                              | The redirectURL of the configured redirectURLs in your Version Settings/Authentication configuration in Agnost Studio. |

### Sign up new users with phone number

You can create a new user with mobile phone number and password by calling
`signUpWithPhone` method.

:::tip

If phone number verification is anabled, you need to make specific configuration
at your SMS provider to use this method. Agnost currently supports
[Twilio](https://www.twilio.com), [MessageBird](https://www.messagebird.com/)
and [Vonage](https://www.vonage.com) to send SMS.

You can customize **verification sms message template** from **App settings** →
**Authentication** → **Message templates** → **Verification SMS Message** view
of the **Studio**.

:::

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let number = "+15555555555"
let password = "12345%"
let name = "Luke"

// Sign up a new user with mobile phone number and password
const result = await agnost.auth.signUpWithPhone(number, password)

//Sign up a new user with mobile phone number, password and name
const result = await agnost.auth.signUpWithPhone(number, password, name)

//Sign up a new user with mobile phone number, password and additional user data
const result = await agnost.auth.signUpWithPhone(number, password, {
  name: "Luke",
  surname: "Skywalker",
  title: "Jedi",
})
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6234d2f60b72592107523c6d",
    "provider": "agnost",
    "providerUserId": "6234d2f60b72592107523c6d",
    "phone": "+15555555555",
    "signUpAt": "2022-03-18T18:44:06.878Z",
    "lastLoginAt": "2022-03-18T18:44:06.878Z",
    "phoneVerified": false,
    "name": "Rooby"
  },
  "session": null,
  "errors": null
}
```

</DetailedResponse>


:::note

By default phone number authentication is **disabled** in your **App settings**
→ **Authentication** view of **Studio**. You can visit **Authentication** →
**Mobile phone authentication** view to enable "Confirm phone number".

- Once you call this method, a verification code will be sent to the phone over
  SMS and the client library returns the **user** data with a **null** session.
- Until the user validates this code by calling `verifyPhone`, the phone number
  will not be verified.
- If a user tries to sign in to an account where phone number has not been
  confirmed yet, an error message will be returned asking for phone number
  verification.

If `phoneVerified` field is set to true and passed in the last parameter of this
method in a user JSON object, then the phone number verification step is
bypassed even the phone number verification is enabled in application
authentication settings. This is primarily used for use-cases where the phone
number of the user is alreay known/verified so that users are not forced to
verify their phone numbers again.

:::

After user receives the verification code, you can use `verifyPhone` method to
verify the phone number.

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let phone = "+15555555555"
let code = "314159"

// Verify phone number using the verification code sent to the phone
// number over SMS and return the user and session data

const result = await agnost.auth.verifyPhone(phone, code)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6234d2f60b72592107523c6d",
    "provider": "agnost",
    "providerUserId": "6234d2f60b72592107523c6d",
    "phone": "+15555555555",
    "signUpAt": "2022-03-18T18:44:06.878Z",
    "lastLoginAt": "2022-03-18T18:52:03.892Z",
    "phoneVerified": true,
    "name": "Rooby"
  },
  "session": {
    "userId": "6234d2f60b72592107523c6d",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI...",
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


:::note

If you would like to **disable** phone number verification, you can visit **App
settings** → **Authentication** view of **Studio** and disable "**Confirm**
phone number ".

- If phone number confirmation is **disabled**, a newly created **session**
  object and the **user** data will be returned immediately when you call the
  `signUpWithPhone` method.

:::

#### Parameters

Here you can find parameters for the `signUpWithPhone` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>          | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                              |
| --- | ---------------------------- | ------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | phone                        | string                                     | Yes                              | Unique phone number of the user including country code. <br/> If there is already a user with the provided phone number then an error is raised.                                                                                                  |
| 2   | password                     | string                                     | Yes                              | Password of the user, should be at least 6 characters long.                                                                                                                                                                                       |
| 3   | name or user data            | string or user object with key-value pairs | No                               | Name of the user or additional user data associated with the user that is being created in the database. Besides the name of the user, you can pass additional user fields with values (except phone and password) to be created in the database. |

Parameters for the `verifyPhone` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------ |
| 1   | phone                        | string                            | Yes                              | Phone number of the user including country code. |
| 2   | code                         | string                            | Yes                              | Verification code received from SMS provider.    |

### Resend phone verification code

You can resend mobiel number verification SMS code to the user by calling the
`resendVerificationCode` method.

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let phone = "+15555555555"

// Resends verification email to the user
const { errors } = await agnost.auth.resendVerificationCode(phone)
```

</TabItem>


</Tabs>


:::note

If phone confirmation is **disabled** in your **App settings** →
**Authentication** view of **Studio** or the phone number of the user is already
verified, it returns an error.

:::

#### Parameters

Here you can find parameters for the `resendVerificationCode` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------ |
| 1   | phone                        | String                            | Yes                              | Phone number of the user including country code. |

### Sign up new users with an oAuth provider

You can sign up a user with the oAuth2 flow of the provider by calling
`signInWithProvider` method. Agnost currently supports **Google**, **Facebook**,
**Twitter**, **Apple**, **Github**, and **Discord** as a provider and calling
this method will redirect the user to the relevant login page of the provider.

:::tip

You need to make specific configuration at the provider to retrieve **client
id** and **client secret** to use this method.

Additionally, you need to add these **client id** and **client secret** values
to your app's authentication settings using the **App settings** →
**Authentication** → **Authentication Provider** view of the Studio.

:::

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let provider = "google"
let redirectURL = "https://example.com/auth-redirect"

// Sign in or sign up a user by using oAuth provider
// Provider name can be "google", "facebook", "twitter", "apple", "github", "discord"
agnost.auth.signInWithProvider(provider, redirectURL)
```

</TabItem>


</Tabs>


If the provider's sign in flow completes successfully, Agnost redirects the user
to the **Redirect URL** with an `access_token` as query string parameter that
you can use to fetch the authentication grants (e.g., user and session data).

<BrowserWindow url="http://localhost:3001/auth-redirect?status=200&access_token=0e55c6fa93ae4e8cbf6d57fadb211b35&action=oauth-signin"></BrowserWindow>

<Tabs groupId="dev"  defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let accessToken = "0e55c6fa93ae4e8cbf6d57fadb211b35"

// after oAuth provider sign-in, you can get user and session data using the `getAuthGrant`
// If no `access_token` specified as input, tries to retrieve the accessToken from the
// browser url query string parameter named 'access_token'.

const response = await agnost.auth.getAuthGrant(accessToken)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "62322099f067780cad32b034",
    "provider": "google",
    "providerUserId": "109847134298377823387",
    "name": "Rooby",
    "email": "rooby@gmail.com",
    "profilePicture": "https://lh3.googleusercontent.com/a-/AOh14GhCpme...",
    "signUpAt": "2022-03-16T17:38:33.169Z",
    "lastLoginAt": "2022-03-16T19:36:27.733Z"
  },
  "session": {
    "userId": "62322099f067780cad32b034",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYyMzA0Y...",
    "creationDtm": "2022-03-16T19:36:27.739Z",
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

Here you can find parameters for the `signInWithProvider` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 1   | provider                     | string                            | Yes                              | Name of the oAuth2 provider, currently supporting `google` `facebook` `twitter` `apple` `discord` `github`             |
| 2   | redirectURL                  | string                            | Yes                              | The redirectURL of the configured redirectURLs in your Version Settings/Authentication configuration in Agnost Studio. |
