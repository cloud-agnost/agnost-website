---
sidebar_position: 2
description:
  Agnost client library automatically establishes the realtime connection,
  however you can also manually manage this connection.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Connection

## Manually manage the connection

The first time you access the `realtime` module, Agnost client library
automatically establishes a connection to the realtime server and manages this
connection for you. Most of the time you do not need to manually open or close a
connection. However, if your use case requires closing the connection and then
later opening it then you can use the `open` and `close` methods to manage your
websocket connection.

:::tip

If you manually disconnect the connection, the socket will not try to reconnect.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
// Manually open the websocket connection
agnost.realtime.open();

// Manually close the websocket connection
agnost.realtime.close();
```

</TabItem>


</Tabs>


## Get websocket info

You can check whether the realtime connection has been establised successfully
or not using the `isConnected` method and get the underlying websocket
identifier using the `getSocketId` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```jsx
// Check if the websocke is successfully connected to the realtime server.
// Returns true if the realtime socket is connected otherwise false
if (agnost.realtime.isConnected()) console.log("Connected");

// Get the unique identifier of the underlying websocket connection identifier
const socketId = agnost.realtime.getSocketId();
```

</TabItem>


</Tabs>


## Listen to connection events

You can listen to key connection events through their respective listener
functions. The following are the key connection events and their counterpart
listener functions.

| Event             | Description                                                                                                                                                    | Listener function    |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| Connect           | Fired upon successful connection to the realtime server.                                                                                                       | `onConnect`          |
| Disconnect        | Fired upon disconnection. The disconnection can happen due to forceful disconnection by the server, manual closing of the connection, or network problems etc. | `onDisconnect`       |
| Connect error     | Fired upon when an error occurs while establishing the websocket connection.                                                                                   | `onError`            |
| Reconnect attempt | Fired upon an attempt to reconnect.                                                                                                                            | `onReconnectAttempt` |

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```jsx
// Listen to Connect
agnost.realtime.onConnect(() => console.log("Connection established!"));

// Listen to Disconnect
agnost.realtime.onDisconnect((reason) => {
  console.log("Disconnected due to", reason, agnost.realtime.getSocketId());
});

// Listen to Reconnect attempt
agnost.realtime.onReconnectAttempt((attemptNumber) =>
  console.log("Reconnecting attempt#", attemptNumber);
);

// Listen to Connect error
agnost.realtime.onError((error) =>
  console.log("Connection error", error, error.data);
);
```

</TabItem>


</Tabs>
