---
sidebar_position: 2
description: You can log in an existing user by calling signInWithEmail method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import BrowserWindow from "@site/src/components/BrowserWindow"

# Sign In

### Sign in with an email

You can log in an existing user by calling `signInWithEmail` method. To use an
email and password based sign-in, the authentication provider must be
**Agnost**, meaning a user with email and password credentials must exist in
the app database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let email = "rooby@agnost.dev";
let password = "12345%";

// Sign in user with email and password

const result = await agnost.auth.signInWithEmail(email, password);
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
    "creationDtm": "2022-03-16T19:36:27.739Z",
    "userAgent": {
      "ua": "",
      "browser": {
          "name": "",
          "version": "",
          "major": "" 
      },
      "engine": {
          "name": "",
          "version": ""
      },
      "os": {
          "name": "",
          "version": ""
      },
      "device": {
          "model": "",
          "type": "",
          "vendor": ""
      },
      "cpu": {
          "architecture": ""
      }
    }
  },
  "errors": null
}
```

</DetailedResponse>


:::note

By default email confirmation is **enabled** in your **Version settings** →
**Authentication** view of Studio.

- If the email of the user has not been verified yet, this method will return an
  error object.

:::

#### Parameters

Here you can find parameters for the `signInWithEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | email                        | string                            | Yes                              | Email address of the existing user.  |
| 2   | password                     | string                            | Yes                              | Password of the existing user.       |

:::note

You **cannot** use this method to log in a user who has signed up with an
oAauth2 provider such as Google, Apple, Facebook, Twitter etc.

:::

### Sign in with phone number

You can log in an existing user by calling `signInWithPhone` method. To use the
phone and password based sign-in, the authentication provider must be
**Agnost**, meaning a user with phone and password credentials must exist in
the app database.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let phone = "+15555555555";
let password = "12345%";

// Sign in with phone number and password

const result = await agnost.auth.signInWithPhone(phone, password);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6235ee821182562412d85b25",
    "provider": "agnost",
    "providerUserId": "6235ee821182562412d85b25",
    "phone": "+15555555555",
    "signUpAt": "2022-03-19T14:53:54.210Z",
    "lastLoginAt": "2022-03-19T14:55:54.063Z",
    "phoneVerified": true,
    "name": "Jobby"
  },
  "session": {
    "userId": "6235ee821182562412d85b25",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjY...",
    "creationDtm": "2022-03-16T19:36:27.739Z",
    "userAgent": {
      "ua": "",
      "browser": {
          "name": "",
          "version": "",
          "major": "" 
      },
      "engine": {
          "name": "",
          "version": ""
      },
      "os": {
          "name": "",
          "version": ""
      },
      "device": {
          "model": "",
          "type": "",
          "vendor": ""
      },
      "cpu": {
          "architecture": ""
      }
    }
  },
  "errors": null
}
```

</DetailedResponse>


:::note

By default phone number authentication is **disabled** in your **Version settings**
→ **Authentication** view of Studio.

If you would like to **enable** phone number authentication, you can visit
**Authentication** → **Mobile Phone Authentication** view and enable phone
number confirmation by selecting "Confirm phone number".

- If phone number confirmation **enabled**, and if the phone number of the user
  has not been verified yet, this method will return an error message.

:::

#### Parameters

Here you can find parameters for the `signInWithPhone` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | phone                        | string                            | Yes                              | Phone number of the existing user.   |
| 2   | password                     | string                            | Yes                              | Password of the existing user.       |

### Sign in with oAuth provider

You can log in a user with the oAuth2 flow of the provider by calling
`signInWithProvider` method. Agnost currently supports Google, Apple, Facebook,
Twitter, Github, and Discord as a provider and calling this method will redirect
user to the relevant login page of the provider.

:::tip

You need to make specific configuration at the provider to retrieve **client
id** and **client secret** to use this method.

Additionally, you need to add these **client id** and **client secret** values
to your app's authentication settings using the **Version settings** →
**Authentication** → **Providers** view of Studio.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const provider = "google";
const redirectUrl = "http://localhost:3001/auth-redirect";

// Sign in or sign up a user by using oAuth provider
// Provider name can be "google", "facebook", "twitter", "apple", "github", "discord"
agnost.auth.signInWithProvider(provider, redirectUrl);
```

</TabItem>


</Tabs>


If the provider's sign in flow completes successfully, Agnost redirects the user
to the **Redirect URL** with an `access_token` as query string parameter that
you can use to fetch the authentication grants (e.g., user and session data).

:::tip

You can define the **Redirect URL** in your **Vesion settings** →
**Authentication** view of Designer.

:::

<BrowserWindow url="http://localhost:3001/auth-redirect?status=200&access_token=at-0e55c6fa93ae4e8cbf6d57&action=oauth-signin"></BrowserWindow>

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const accessToken = "at-0e55c6fa93ae4e8cbf6d57";

// after oAuth provider sign-in, you can get user and session data using the `access_token`
// If no `access_token` specified as input, tries to retrieve the accessToken from the
// browser url query string parameter named 'access_token'.

const response = await agnost.auth.getAuthGrant(accessToken);
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
      "ua": "",
      "browser": {
          "name": "",
          "version": "",
          "major": "" 
      },
      "engine": {
          "name": "",
          "version": ""
      },
      "os": {
          "name": "",
          "version": ""
      },
      "device": {
          "model": "",
          "type": "",
          "vendor": ""
      },
      "cpu": {
          "architecture": ""
      }
    }
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `signInWithProvider` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1   | provider                     | string                            | Yes                              | Name of the oAuth2 provider, currently supporting `google` `facebook` `twitter` `apple` `discord` `github` |
| 2   | redirectURL                  | string                            | Yes                              | The URL that the user will be redirected after the oAuth2 flow completes successfully.                     |

### Sign in with magic link

You can send a magic link to the email address of the user by calling the
`sendMagicLinkEmail` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const email = "rooby@agnost.dev";
const redirectURL = "http://localhost:3001/auth-redirect";

// sends magic link to the email address of the user

const { errors } = await agnost.auth.sendMagicLinkEmail(email, redirectURL);
```

</TabItem>


</Tabs>


:::note

This method works only if email confirmation is **enabled** in your **App
settings** → **Authentication** view of Studio and if the user's email
address has already been verified.

- If email confirmation is **disabled** in your **Version settings** →
  **Authentication** view of Studio, it returns an error.
- If the user's email has not been verified, it returns an error.

:::

When a user clicks on the link in email, Agnost verifies the validity of the
magic link and if the magic link verified successfully redirects the user to the
**Redirect URL** with an `access_token`.

:::tip

You can define the **Redirect URL** in your **Version settings** →
**Authentication** view of Designer.

:::

<BrowserWindow url="http://localhost:3001/signin?status=200&access_token=at-6a0a412d42a750c85f1ef62e&action=magic-link"></BrowserWindow>

You can use **Redirect URL** and this `access_token` to get authentication
grants with `getAuthGrant` method, namely the **user** data and a new
**session** object will be returned.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js title="~ /page/auth-redirect.js"
const accessToken = "at-6a0a412d42a750c85f1ef62e";

// after magic link verified, you can get user and session data using the `access_token`
// If no `access_token` specified as input, tries to retrieve the accessToken from the
// browser url query string parameter named 'access_token'.

const result = await agnost.auth.getAuthGrant(accessToken);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


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
    "name": "John"
  },
  "session": {
    "userId": "6234a7210b72592107523c6c",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlb...",
    "creationDtm": "2022-03-16T19:36:27.739Z",
    "userAgent": {
      "ua": "",
      "browser": {
          "name": "",
          "version": "",
          "major": "" 
      },
      "engine": {
          "name": "",
          "version": ""
      },
      "os": {
          "name": "",
          "version": ""
      },
      "device": {
          "model": "",
          "type": "",
          "vendor": ""
      },
      "cpu": {
          "architecture": ""
      }
    }
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `sendMagicLinkEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                 |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------ |
| 1   | email                        | string                            | Yes                              | The email address of the user to send the verification email                         |
| 2   | redirectURL                  | string                            | Yes                              | The URL that the user will be redirected after the magic link verified successfully. |

:::tip

You can customize **magic link message template** from **Version settings** →
**Authentication** → **Message templates** → **Magic Link Message** view of the
Studio.

:::

### Sign in with SMS

#### Send sign in SMS code

You can send a sign in code by using `sendSignInCode` method over SMS. With OTP
(One-Time Password) and phone number, the user can sign in.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }  ]}>


<TabItem value="javascript">


```js
const phoneNumber = "+15555555555";

// Send sign in SMS Code to the phone number of the user
const { errors } = await agnost.auth.sendSignInCode(phoneNumber);
```

</TabItem>


</Tabs>


:::note

This method works only if **mobile phone authentication** is **enabled** in your
**Version settings** → **Authentication** view of Studio and the user's phone
number has already been verified.

- If **mobile phone authentication** is **disabled**, it returns an error.
- If the user's phone has not been verified, it returns an error.

:::

:::tip

You need to make specific configuration at your SMS provider to use this method.
Agnost currently supports [Twilio](https://www.twilio.com),
[MessageBird](https://www.messagebird.com/) and [Vonage](https://www.vonage.com)
to send SMS.

You can customize **verification sms message template** from **Version settings** →
**Authentication** → **Message templates** → **Verification SMS Message** view
of the Studio.

:::

After user receives the verification code and enters it to a form field, you can
call the [signInWithCode](#sign-in-with-sms-code) method, then Agnost verifies
the validity of the code and if successful returns the auth grants (e.g.,
session) of the user.

#### Parameters

Here you can find parameters for the `sendSignInCode` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>              |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------- |
| 1   | phone                        | string                            | Yes                              | The phone number of the user to send the SMS code |

#### Sign in with SMS Code

You can sign in an existing user using phone number and SMS code (OTP - one time
password) by calling `signInWithCode` method.

:::note

This method works only if **mobile phone authentication** is **enabled** in your
**Version settings** → **Authentication** view of Studio and the user's phone
number has already been verified.

- If **mobile phone authentication** is **disabled**, it returns an error.
- If the user's phone has not been verified, it returns an error.

Before calling this method, you need to call the
[sendSignInCode](#send-sign-in-sms-code) method to get the SMS code delivered to
the phone.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const phone = "+15555555555";
const smsCode = "123456";

// Sign in with SMS Code and phone number
const result = await agnost.auth.signInWithCode(phone, smsCode);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "62332f6408302aa581626799",
    "provider": "agnost",
    "providerUserId": "62332f6408302aa581626799",
    "phone": "+15555555555",
    "signUpAt": "2022-03-17T12:53:56.165Z",
    "lastLoginAt": "2022-03-17T12:54:33.714Z",
    "phoneVerified": true,
    "name": "Rooby"
  },
  "session": {
    "userId": "62332f6408302aa581626799",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "creationDtm": "2022-03-16T19:36:27.739Z",
    "userAgent": {
      "ua": "",
      "browser": {
          "name": "",
          "version": "",
          "major": "" 
      },
      "engine": {
          "name": "",
          "version": ""
      },
      "os": {
          "name": "",
          "version": ""
      },
      "device": {
          "model": "",
          "type": "",
          "vendor": ""
      },
      "cpu": {
          "architecture": ""
      }
    }
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `signInWithCode` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                  |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------------- |
| 1   | phone                        | string                            | Yes                              | The phone number of the user to sign in with SMS code |
| 2   | code                         | string                            | Yes                              | SMS code (OTP - one time password)                    |
