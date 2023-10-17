---
sidebar_position: 4
description:
  If your users are authenticated using their email and password, you can send
  reset password email to a user by calling the sendResetPwdEmail method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import BrowserWindow from "@site/src/components/BrowserWindow"

# Reset Password

## Send reset password email

If your users are authenticated using their **email** and **password**, you can
send reset password email to a user by calling the `sendResetPwdEmail` method.

:::note

This method works only if email confirmation is **enabled** in your **App
settings** → **Authentication** view of **Studio**.

- If the email of the user has not been verified yet, this method will return an
  error object.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let email = "hello@agnost.dev"
let redirectUrl = "http://localhost:3001/auth-redirect"

// Send reset password email
const { errors } = await agnost.auth.sendResetPwdEmail(email, redirectUrl)
```

</TabItem>


</Tabs>


When the user clicks on the link in email, Agnost verifies the validity of the
reset-password link and if successful redirects the user to the **Redirect URL**
with an access token in a query string parameter named **access_token**.

:::tip

You can define the **Redirect URL** in your **App settings** →
**Authentication** view of Studio. Additionally you can override this value in
your Environment details view for each environment.

:::

<BrowserWindow url="http://localhost:3001/auth-redirect?access_token=0e55c6fa93ae4e8cb11b35&action=reset-pwd"></BrowserWindow>

:::note

At this stage your app needs to detect `action=reset-pwd` in the **Redirect
URL** and display a password reset form to the user.

After getting the new password from the user, you can call the
[resetPwdWithToken](#reset-password-with-token) method with the access token and
new password to reset the password of the user.

:::

#### Parameters

Here you can find parameters for the `sendResetPwdEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| 1   | email                        | String                            | Yes                              | The email address of the user who wants to reset the password. |
| 2   | redirectURL                  | String                            | Yes                              | The URL that the user will be redirected after email is sent.  |

## Reset password with token

You can reset password of the user by calling the `resetPwdWithToken` method. It
resets the password of the user by using the access token provided through the
[sendResetPwdEmail](#send-reset-password-email) method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let accessToken = "0e55c6fa93ae4e8cb11b35"
let newPassword = "123456%"

// Reset password of the user with the `newPassword`
const { errors } = await agnost.auth.resetPwdWithToken(accessToken, newPassword)
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `resetPwdWithToken` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------- |
| 1   | accessToken                  | String                            | Yes                              | The access token that is retrieved from the redirect URL query string parameter. |
| 2   | newPassword                  | String                            | Yes                              | The new password of the user.                                                    |

## Send reset password code

If your users are authenticated using their **phone number** and **password**,
you can send reset password SMS code to a user by calling the `sendResetPwdCode`
method.

:::note

This method works only if phone confirmation is **enabled** in your **App
settings** → **Authentication** view of **Studio**.

- If the phone number of the user has not been verified yet, this method will
  return an error object.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let phone = "+15555555555"

// Send reset password email
const { errors } = await agnost.auth.sendResetPwdCode(phone)
```

</TabItem>


</Tabs>


:::note

After sending the SMS code, you need to display a password reset form to the
user. When you get the new password from the user, you can call
[resetPwdWithCode](#reset-password-with-code) method with the phone number of
the user, SMS code and new password.

:::

#### Parameters

Here you can find parameters for the `sendResetPwdCode` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                          |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| 1   | phone                        | String                            | Yes                              | The phone number of the user who wants to reset the password. |

## Reset password with code

You can reset password of the user by calling the `resetPwdWithCode` method. It
resets the password of the user by using the SMS code provided through the
[sendResetPwdCode](#send-reset-password-code) method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let phone = "+15555555555"
let code = "432987"
let newPassword = "123456%"

// Reset password of the user with the `newPassword`
const { errors } = await agnost.auth.resetPwdWithCode(phone, code, newPassword)
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `resetPwdWithCode` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------- |
| 1   | phone                        | String                            | Yes                              | The phone number of the user.                       |
| 1   | code                         | String                            | Yes                              | The SMS code that is sent to the phone of the user. |
| 2   | newPassword                  | String                            | Yes                              | The new password of the user.                       |
