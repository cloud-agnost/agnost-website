---
sidebar_position: 4
description: You can send realtime messages and listen incoming messages.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Messages

## Send message

You can **send message** to the members of a specific channel or you can
**broadcast a message** to all users of your app independent of the channels they
have joined.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


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

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | channelName                  | String                            | Yes                              | The name of the channel.                                                                                                                                                       |
| 2   | eventName                    | String                            | Yes                              | The name of the event.                                                                                                                                                         |
| 3   | message                      | Any                               | Yes                              | The message payload/contents. All serializable datastructures are supported for the message, including Buffer.                                                                 |
| 4   | echo                         | String                            | No                               | Override the echo flag specified when creating the websocket to enable or prevent realtime messages originating from this connection being echoed back on the same connection. |

Here you can find parameters for the `broadcast` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | eventName                    | String                            | Yes                              | The name of the event.                                                                                                                                                         |
| 2   | message                      | Any                               | Yes                              | The message payload/contents. All serializable datastructures are supported for the message, including Buffer.                                                                 |
| 3   | echo                         | String                            | No                               | Override the echo flag specified when creating the websocket to enable or prevent realtime messages originating from this connection being echoed back on the same connection. |

:::note

If the realtime connection is set to **session required**, an active user session
is **required** (e.g., user needs to be logged in) to call `send` and
`broadcast` methods.

:::

## Listen to messages

You can listen to messages sent by other users using `on`, `onAny` and `once`
methods.

- The `on` method registers a new listener function for the given event.
- The `onAny` method registers a new catch-all listener function. This listener
  function is triggered for all messages sent to this socket.
- The `once` method adds a one-time listener function for the given event. When the event is triggered, this listener is removed and then
  invoked.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
// Add a listener for `chat-message` events
agnost.realtime.on('chat-message', (payload) => {
  console.log(
    'Message received',
    payload.channel, //The name of the channel if the message is sent to a channel otherwise it is `null`
    payload.message  //The contents of the message
  );
});

// Add a listener for all events
agnost.realtime.onAny((payload) => {
  console.log(
    'Message received',
    payload.channel, //The name of the channel if the message is sent to a channel otherwise it is `null`
    payload.message  //The contents of the message
  );
});

// Add a listener to listen an event only once
agnost.realtime.once('chat-message', (payload) => {
  console.log(
    'Message received',
    payload.channel, //The name of the channel if the message is sent to a channel otherwise it is `null`
    payload.message  //The contents of the message
  );
});

```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `on` and `once` methods.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | eventName                    | String                            | Yes                              | The name of the event to listen.                                                                                                                                                                                                                                                                                                                               |
| 2   | listener                     | Function                          | Yes                              | The callback function that will be called with the event payload. The payload includes `channel` and `message` parts. The `channel` is the name of the channel if the message is sent to a channel otherwise it is `null` and the `message` is the contents of the message that is sent using the [send](#send-message) or [broadcast](#send-message) methods. |

Here you can find parameters for the `onAny` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                           |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | listener                     | Function                          | Yes                              | The callback function that will be called with the event payload. The payload includes `channel` and `message` parts. The `channel` is the name of the channel if the message is sent to a channel otherwise it is `null` and the `message` is the contents of the message that is sent using the [send](#send-message) or [broadcast](#send-message) methods. |

## Unregister message listeners

You can stop listening to specific events or all events using the `off` and
`offAny` methods.

- The `off` method removes the specified listener function from the listener
  array for the given event name. If `listener` is not specified, it removes all
  listeners for for the event named `eventName`. If neither `eventName` nor
  `listener` is specified, it removes all listeners for all events.
- The `offAny` method removes the previously registered listener function. If no
  `listener` is provided, all catch-all listener functions are removed.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
const eventListener = (payload) => {
  console.log(
    "Message received",
    payload.channel, //The name of the channel if the message is sent to a channel otherwise it is `null`
    payload.message //The contents of the message
  );
};

// Add a listener for `chat-message` events
agnost.realtime.on("chat-message", eventListener);

// Remove a listener for `chat-message` events
agnost.realtime.off("chat-message", eventListener);

const allEventsListener = (payload) => {
  console.log(
    "Message received",
    payload.channel, //The name of the channel if the message is sent to a channel otherwise it is `null`
    payload.message //The contents of the message
  );
};

// Add a listener for all events
agnost.realtime.onAny(allEventsListener);

// Remove a listener for all events
agnost.realtime.offAny(allEventsListener);

```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `off` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| 1   | eventName                    | String                            | No                               | The name of the event to remove the listener function.              |
| 2   | listener                     | Function                          | No                               | The callback function that will be removed from the listeners list. |

Here you can find parameters for the `offAny` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| 1   | listener                     | Function                          | No                               | The callback function that will be removed from the listeners list. |

## Get event listeners

You can also get the list of listener functions registered for a given event
name.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
// Add a listener for `chat-message` events
const listeners = agnost.realtime.getListeners("chat-message")
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `getListeners` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| 1   | eventName                    | String                            | No                               | The name of the event to get the registered listener functions. |
