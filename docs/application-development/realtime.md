---
sidebar_position: 8
---

# Real-Time Functionality with Websockets

Websockets provide a full-duplex communication channel over a single TCP
connection, enabling the server and the client to send real-time updates. Agnost
provides built-in support for Websockets, allowing you to add real-time
functionality to your applications with ease. This could be anything from chat
features, real-time notifications, live tracking, etc.

### Establishing WebSocket Connection

To establish a WebSocket connection in your Agnost application, you can use the
provided WebSocket API. Agnost's WebSocket API provides an easy-to-use interface
for managing WebSocket connections and handling real-time data.

```javascript
// TO-BE-UPDATED

// Client-side code to establish a WebSocket connection
const socket = io.connect("https://api.your-app.agnost.io")

// Server-side code to handle WebSocket connections
io.on("connection", (socket) => {
  console.log("A user connected")
})
```

### Sending and Receiving Data

Once the WebSocket connection is established, you can use the `socket.emit()`
method to send data and the `socket.on()` method to handle incoming data.

```javascript
// TO-BE-UPDATED
// Client-side code to send data
socket.emit("new-message", { message: "Hello, world!" })

// Server-side code to handle incoming data
socket.on("new-message", (data) => {
  console.log(data.message) // Outputs: 'Hello, world!'
})
```

### Broadcasting Data

You can also broadcast data to all connected clients using the
`socket.broadcast.emit()` method. This is useful for features like chatrooms,
real-time game updates, etc.

```javascript
// TO-BE-UPDATED
// Server-side code to broadcast data
socket.broadcast.emit("broadcast-message", { message: "Hello, everyone!" })
```

### Managing Real-Time Channels

Agnost also provides support for managing real-time channels. You can use the
`socket.join()` method to subscribe a client to a channel and the
`socket.leave()` method to unsubscribe.

```javascript
// TO-BE-UPDATED
// Server-side code to manage real-time channels
socket.on("join-channel", (channel) => {
  socket.join(channel)
})

socket.on("leave-channel", (channel) => {
  socket.leave(channel)
})
```

This makes it easy to segment your real-time updates and ensure that clients
only receive the updates that are relevant to them.

With Agnost's built-in support for Websockets, adding real-time functionality to
your applications is a breeze. Whether you're building a chat application, a
real-time game, or a collaborative tool, Agnost has you covered.

In the next section, we'll explore Application Development > Serverless
Functionality with Agnost.
