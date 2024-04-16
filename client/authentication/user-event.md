---
sidebar_position: 6
description:
  You can subscribe to listen to specific user events and get notified when such
  an event happens.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Listen to User Events

After signing in a user, you can subscribe to listen to specific user events and
get notified when such an event happens through the `onUserEvent` method. You
can listen to the following user events.

| Event            | Description                                                                                                                                                                                                                                                                                           |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user:signin      | Triggered whenever a new user session is created.                                                                                                                                                                                                                                                     |
| user:signout     | Triggered when a user session is deleted. If [signOutAll](/client/authentication/sessions#sign-out-a-session) or [signOutAllExceptCurrent](/client/authentication/sessions#sign-out-all-except-current) method is called then for each deleted sesssion a separate `user:signout` event is triggered. |
| user:pwdchange   | Triggered when the user password changes, either through direct password update or password reset.                                                                                                                                                                                                    |
| user:emailchange | Triggered whenever the email of the user changes.                                                                                                                                                                                                                                                     |
| user:phonechange | Triggered whenever the phone number of the user changes.                                                                                                                                                                                                                                              |

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
agnost.auth.onUserEvent((eventName, session) =>
  console.log("User event", eventName, session),
)
```

</TabItem>


</Tabs>


:::note

An active user session is required (e.g., user needs to be logged in) to call
this method.

:::

#### Parameters

Here you can find parameters for the `onUserEvent` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | listener                     | Function                          | Yes                              | The listener function. This function gets two input parameters the name of the event that is being triggered and the user session object that has triggered the event. If the event is triggered by the user without a session, then the session value will be `null`. |
