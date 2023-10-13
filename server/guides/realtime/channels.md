---
sidebar_position: 2
description: You can join to channels and listen to channel events.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Channels

## Join and leave channels

Each application can have one channel or many, and each client can choose which
channels it subscribes to. Channels provide a way of filtering data. For
example, in a chat application there may be a channel for people who want to
discuss ‘technology’ and when a message is sent to the 'technology' channel, all
subscribers (channel members) are notified about the message and its contents.

Channels do not need to be explicitly created, and are instantiated on client
demand. You can just call the `join` method for a client to join a channel and
similarly call the `leave` method to leave a channel.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```jsx
// Join to a channel
agnost.realtime.join("technology-chat")

// Leave from a channel
agnost.realtime.leave("technology-chat")
```

</TabItem>


<TabItem value="dart">


```dart
// Join to a channel
agnost.realtime.join('technology-chat');

// Leave from a channel
agnost.realtime.leave('technology-chat');

```

</TabItem>


</Tabs>


#### Parameters

Both `join` and `leave` methods have the same input parameters.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                      |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | channelName                  | String                            | Yes                              | The name of the channel to join or leave.                                                                                                                                                                 |
| 2   | echo                         | Boolean                           | No                               | Override the echo flag specified when creating the client library to enable or prevent `channel:join` or `channel:leave` event originating from this connection being echoed back on the same connection. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call `join` and `leave`
methods.

:::

## Update user channel profile

You can update the channel member (e.g., profile) data and broadcast an update
event to each joined channel so that other channel members can get the
information about the updated member data. Whenever the socket joins a new
channel, this updated member data will be broadcasted to channel members. As a
result of this action a `channel:update` event is sent to all members of the
subscribed channels notifying the member data update.

As an example if you are developing a realtime chat application it might be a
good idea to store the username and user profile picture URL in member data so
that channel members can get updated user information.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```jsx
// Update user channel profile data
agnost.realtime.updateProfile({
  username: "Luke Skywalker",
  profileImage: "https://myimagestorage.com/luke.jpg",
  status: "Available",
})
```

</TabItem>


<TabItem value="dart">


```dart
// Update user channel profile data
agnost.realtime.updateProfile({
    "username": 'Luke Skywalker',
    "profileImage": 'https://myimagestorage.com/luke.jpg',
    "status": 'Available'
});

```

</TabItem>


</Tabs>


:::info

Please note that updates to user profile data are broadcasted to all channels
that the user is a member of. The profile data is shared across the channels and
you cannot specify different profile data for different channels.

:::

#### Parameters

Both `join` and `leave` methods have the same input parameters.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | profileData                  | JSON object, string, number etc.  | Yes                              | Profile payload data for the current member. The supported payload types are Strings, JSON objects and arrays, buffers containing arbitrary binary data, and null.                  |
| 2   | echo                         | Boolean                           | No                               | Override the echo flag specified when creating the websocket to enable or prevent `channel:update` event originating from this connection being echoed back on the same connection. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call `updateProfile`
method.

:::

## Get channel members

When you join a channel you might be interested to see the list of people
already in a channel. You an use the `getMembers` method to get the profile data
of the specified channel members. The profile data that you receive for each
channel member will be the profile data set using the `update` method. The `id`
value provided in the response is the unique socket id of the channel member.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```jsx
// Get list of `technology-chat` channel members
let result = await agnost.realtime.getMembers("technology-chat")
```

</TabItem>


<TabItem value="dart">


```dart
// Get list of `technology-chat` channel members
final members = await agnost.realtime.getMembers('technology-chat');

```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": [
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
  ],
  "errors": null
}
```

</DetailedResponse>


:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call `getMembers` method.

:::

## Listen to channel events

You can listen to key channel events through their respective listener
functions. The following are the key channel events and their counterpart
listener functions.

| Event          | Description                                                    | Listener function |
| :------------- | :------------------------------------------------------------- | :---------------- |
| channel:join   | Fired when a new member joins a channel.                       | `onJoin`          |
| channel:leave  | Fired when an existing member leaves a channel.                | `onLeave`         |
| channel:update | Fired when a channel member updates its member (profile) data. | `onUpdate`        |

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
// Listen to join events
agnost.realtime.onJoin((payload) => {
  console.log(
    "Member joined to channel",
    payload.channel, //The name of the channel joined
    payload.message.id, //Socket id
    payload.message.data, //Joined member profile data
  )
})

// Listen to leave events
agnost.realtime.onLeave((payload) => {
  console.log(
    "Member left to channel",
    payload.channel, //The name of the channel left
    payload.message.id, //Socket id
    payload.message.data, //Left member profile data
  )
})

// Listen to member profile data update events
agnost.realtime.onUpdate((payload) => {
  console.log(
    "Member updated profile data",
    payload.channel, //The name of the channel the update message is broadcasted
    payload.message.id, //Socket id
    payload.message.data, // Member updated profile data
  )
})
```

</TabItem>


<TabItem value="dart">


```dart
// Listen to join events
agnost.realtime.onJoin((payload) {
  print(
    'Member joined to channel'
    + payload.channel //The name of the channel joined
    + payload.message.id //Socket id
    + payload.message.data //Joined member profile data
  );
});

// Listen to leave events
agnost.realtime.onLeave((payload) {
  print(
    'Member left to channel'
    + payload.channel //The name of the channel left
    + payload.message.id //Socket id
    + payload.message.data //Left member profile data
  );
});

// Listen to member profile data update events
agnost.realtime.onUpdate((payload) {
  print(
    'Member updated profile data'
    + payload.channel //The name of the channel the update message is broadcasted
    + payload.message.id //Socket id
    + payload.message.data // Member updated profile data
  );
});

```

</TabItem>


</Tabs>
