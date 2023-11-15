---
sidebar_position: 6
description: You can send realtime messages and listen incoming messages.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../src/css/illustration.module.css"

# Realtime

Agnost server library allows you to send realtime messages to specific channels
or broadcast to all connected clients. You can also get the list of members of a
specific channel.

The realtime module of this library provides a couple of helper methods to send realtime messages from the API server of your app. For a detailed list of realtime features that you can use in your front-end apps please refer to [Client API Realtime](/client/category/realtime) documentation.

## Send message

You can **send a message** to the members of a specific channel or you can
**broadcast a message** to all users of your app independent of the channels the
have joined.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```jsx
// Send a message to a specific channel
agnost.realtime.send("technology-chat", "chat-message", {
  username: "Luke Skywalker",
  profileImage: "https://myimagestorage.com/luke.jpg",
  messageSentAt: "2021-08-16T11:03:21.406+00:00",
  message: "Let's have a Juma juice? I will be there in 10 minutes.",
});

// Broadcast message to all app users
agnost.realtime.broadcast("warning-message", {
  username: "Darth Vader",
  profileImage: "https://myimagestorage.com/vader.jpg",
  messageSentAt: "2021-08-16T11:10:20.745+00:00",
  message:
    "This is the last call for Alderaan citizens, you have 15 minutes to leave the planet.",
});
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `send` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | channelName                  | String                            | Yes                              | The name of the channel.                                                                                       |
| 2   | eventName                    | String                            | Yes                              | The name of the event.                                                                                         |
| 3   | message                      | Any                               | Yes                              | The message payload/contents. All serializable datastructures are supported for the message, including Buffer. |

Here you can find parameters for the `broadcast` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1   | eventName                    | String                            | Yes                              | The name of the event.                                                                                         |
| 2   | message                      | Any                               | Yes                              | The message payload/contents. All serializable datastructures are supported for the message, including Buffer. |

## Get channel members

When you join a channel you might be interested to see the list of people
already in a channel. You an use the `getMembers` method to get the profile data
of the specified channel members. The profile data that you receive for each
channel member will be the profile data set using the `update` method. The `id`
value provided in the response is the unique socket id of the channel member.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
// Get list of `technology-chat` channel members
let result = await agnost.realtime.getMembers("technology-chat");
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
[
  {
    "id": "sNZNwVxTQ-xerrDKAAAU",
    "data": {
      "username": "Luke Skywalker",
      "profileImage": "https://myimagestorage.com/luke.jpg",
      "status": "Available"
    }
  },
  {
    "id": "9VlzdovgcCeZ5yZzAAAO",
    "data": {
      "username": "Darth Vader",
      "profileImage": "https://myimagestorage.com/vader.jpg",
      "status": "Talking to Darth Sidious"
    }
  }
]
```

</DetailedResponse>


Here you can find parameters for the `getMembers` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | channelName                  | String                            | Yes                              | The name of the channel.             |
