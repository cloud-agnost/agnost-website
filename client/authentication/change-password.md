---
sidebar_position: 5
description:
  You can change password of the user by calling the changePassword method.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Change Password

## Change Password

You can change password of the user by calling the `changePassword` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let newPassword = "123456"
let oldPassword = "123123456"

// Change the oldPassword of the user with the newPassword
const result = await agnost.auth.changePassword(newPassword, oldPassword)
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `changePassword` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------- |
| 1   | newPassword                  | String                            | Yes                              | The new password of the user. Password can be at least 6 char. |
| 2   | oldPassword                  | String                            | Yes                              | The old password of the user.                                  |

:::note

An active user **session** is required (e.g., user needs to be logged in) to
call this method.

:::
