---
sidebar_position: 6
description:
  You can change the phone number of the user by calling the changePhone method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import BrowserWindow from "@site/src/components/BrowserWindow"

# Change Phone

## Change Phone

You can change the phone number of the user by calling the `changePhone` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const currentPassword = "123456";
const newPhone = "+17777777777";

// Change phone number of the user
const result = await agnost.auth.changePhone(currentPassword, newPhone)
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
    "phone": "+15555555555",
    "signUpAt": "2022-03-19T15:32:28.958Z",
    "lastLoginAt": "2022-03-19T15:38:42.093Z",
    "phoneVerified": true,
    "name": "Rooby"
  },
  "errors": null
}
```

</DetailedResponse>


:::info

If phone confirmation is **enabled** in your **App settings** →
**Authentication** view of **Studio**

- It sends a confirmation SMS code to the **new phone number** and returns the
  current user's info.
- Until the SMS code is verified by calling the [verifyPhone](#verify-phone)
  method, the user's phone number will not be changed to the new one.
- After sending the SMS code by calling this method, you need to show a form to
  the user to enter this SMS code and call [verifyPhone](#verify-phone) method
  with the new phone number and the code to change user's phone number to the
  new one

:::

:::note

If phone confirmation is **disabled** in your **App settings** →
**Authentication** view of **Studio**, it immediately updates the user's phone
number and returns back the updated user data.

:::

#### Parameters

Here you can find parameters for the `changePhone` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | currentPassword              | String                            | Yes                              | The current password of the user.    |
| 2   | newPhone                     | String                            | Yes                              | The new phone number of the user.    |

:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

## Verify Phone

After user receives the phone number verification code sent through calling
[changePhone](#change-phone) method, you can use `verifyPhone` method to verify
the new phone number.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const newPhone = "+177777777777";
const code = "504674";

// Verify the new phone number using the verification code sent to the
// new phone number over SMS and return the updated user data

const result = await agnost.auth.verifyPhone(newPhone, code)
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
    "phone": "+17777777777",
    "signUpAt": "2022-03-19T15:32:28.958Z",
    "lastLoginAt": "2022-03-19T15:38:42.093Z",
    "phoneVerified": true,
    "name": "Rooby"
  },
  "session": null,
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `verifyPhone` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | phone                        | String                            | Yes                              | The new phone number of the user.    |
| 2   | code                         | String                            | Yes                              | The verification SMS code.           |
