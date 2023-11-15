---
sidebar_position: 6
description: You can change email of the user by calling the changeEmail method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import BrowserWindow from "@site/src/components/BrowserWindow"

# Change Email

## Change email

You can change email of the user by calling the `changeEmail` method.

<Tabs defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const currentPassword = "123456";
const newEmail = "rooby-new@agnost.dev";
const redirectUrl = "http://localhost:3001/auth-redirect";

// Change email of the user, email cofirmation is disabled not need for redirectUrl parameter
const result = await agnost.auth.changeEmail(currentPassword, newEmail, redirectUrl);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6235f78c0874df80013caea2",
    "provider": "agnost",
    "providerUserId": "6235f78c0874df80013caea2",
    "email": "rooby@agnost.dev",
    "signUpAt": "2022-03-19T15:32:28.958Z",
    "lastLoginAt": "2022-03-19T15:38:42.093Z",
    "emailVerified": true,
    "name": "Rooby"
  },
  "errors": null
}
```

</DetailedResponse>


:::info

If email confirmation is **enabled** in your **App settings** →
**Authentication** view of Studio

- It sends a confirmation email to the **new email address** with a link for the
  user to click and returns the current user's info.
- Until the user clicks on the link, the user's email address will not be
  changed to the new one.
- Once user click on the link, the user's email address will be changed to the
  new one and redirect user to the **Redirect URL** with an
  **action=change-email** query string parameter.

:::

<BrowserWindow url="http://localhost:3001/auth-redirect?access_token=at-0e55c6fa93ae4e8cb11b35&action=change-email"></BrowserWindow>

:::note

If email confirmation is **disabled** in your **App settings** →
**Authentication** view of Studio, it immediately updates the user's email
and returns back the updated user data.

:::

<DetailedResponse title="Example response">


```json
{
  "user": {
    "_id": "6235f78c0874df80013cae22",
    "provider": "agnost",
    "providerUserId": "6235f78c0874df80013caea2",
    "email": "rooby-new@agnost.dev",
    "signUpAt": "2022-03-19T15:32:28.958Z",
    "lastLoginAt": "2022-03-19T15:38:42.093Z",
    "emailVerified": false,
    "name": "Rooby"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `changeEmail` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| 1   | currentPassword              | String                            | Yes                              | The current password of the user.                               |
| 2   | newEmail                     | String                            | Yes                              | The new email address of the user.                              |
| 3   | redirectUrl                  | String                            | No                               | The redirect URL to redirect the user after email confirmation. |

:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::
