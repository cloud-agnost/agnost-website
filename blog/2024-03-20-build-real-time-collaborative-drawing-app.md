---
title: Build a Real-Time Collaborative Drawing App
slug: build-real-time-collaborative-drawing-app
author: Deniz Colak
author_title: Community Author
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  Learn how to build a real-time collaborative drawing app using Agnost's
  real-time features and client libraries.
keywords:
  - realtime
  - agnost
  - tutorial
image: /img/blog/2024-03-20/banner.png
tags: [realtime, agnost]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import WebMViewer from "@site/src/components/WebMViewer"

<head>
  <title>Build a Real-Time Collaborative Drawing App</title>
  <meta
    property="og:title"
    content="Build a Real-Time Collaborative Drawing App"
  />
  <meta
    name="twitter:title"
    content="Build a Real-Time Collaborative Drawing App"
  />


</head>


In the era of instant communication and dynamic web content, real-time features
in web applications have transitioned from a luxury to a necessity. Whether it's
live chats, collaborative tools, or live updates, real-time functionality
enhances user experience and engagement significantly. This blog post introduces
a simple yet captivating project that demonstrates the power of real-time
features: **a real-time collaborative drawing app built with React and powered
by Agnost** for real-time communication.

<WebMViewer
  webm="/img/blog/2024-03-20/demo.webm"
  gif="/img/blog/2024-03-20/demo.webm"
/>

## Introduction

This drawing app allows multiple users to join a shared canvas and draw in
real-time. Each stroke made by a user is instantly visible to all other
participants, demonstrating the seamless integration of real-time web
technologies. The project not only showcases the technical implementation of
such features but also serves as a testament to the interactive and
collaborative possibilities they unlock.

The importance of real-time features in modern web applications cannot be
overstated. They enable a more interactive and engaging user experience,
encouraging collaboration and instant sharing of information. By the end of this
post, you'll have a clear understanding of how to implement real-time features
in your own web applications using Agnost, a versatile and powerful real-time
engine.

## What is Agnost?

**Agnost is a comprehensive backend solution designed to facilitate real-time
interactions within web applications.** It offers a robust set of tools and APIs
that make implementing real-time data exchange straightforward and efficient.
With features like real-time messaging, presence indicators, and live data
updates, Agnost is the backbone of many modern, interactive web applications.

The core of Agnost's appeal lies in its simplicity and power. **Developers can
integrate Agnost into their projects with minimal setup, yet it's capable of
powering complex real-time features at scale.** Whether you're building a chat
app, a live dashboard, or, as in our case, a collaborative drawing tool, Agnost
provides the real-time capabilities you need.

## Setting Up the Project

Before diving into the code, let's set up our project environment. We'll need
Node.js installed on our system to get started. Once Node.js is ready, we can
create a new React application and install the necessary dependencies.

:::caution PRE-REQUISITES

- **Agnost:** Ensure that Agnost is deployed on your Kubernetes cluster. If you
  haven't already deployed Agnost, you can follow the
  [official documentation](https://agnost.dev/docs/intro) to get started.

- **Create an app withing Agnost**: You can create an app within Agnost by
  following the
  [official documentation](https://agnost.dev/docs/application-development/create-an-application).

- **Generate an API Key**: You can generate an API key by following the
  [official documentation](https://agnost.dev/docs/application-development/version-settings/api-keys).

:::

1. **Create a New React App:** Use the command
   `npx create-react-app realtime-drawing-app` to scaffold a new React
   application.

2. **Install Dependencies:** Navigate to your project directory and install the
   following dependencies:

   - `@agnost/client` for real-time communication.
   - `styled-components` for styling our components.

   Run `npm install @agnost/client styled-components` to install these packages.

3. **Tech Stack Overview:** Our application will primarily use React for the
   frontend, styled-components for styling, and Agnost for handling real-time
   interactions.

### Building the Drawing App

The foundation of our drawing app is a simple React application. We'll structure
our app into several key components:

- **CanvasContainer**: Manages the drawing canvas.
- **Toolbar**: Allows users to choose colors and brush sizes.
- **UserList**: Displays the list of users currently connected to the drawing
  session.

Each component plays a distinct role, working together to provide a seamless
drawing experience.

### Integrating Agnost for Real-Time Capabilities

Integrating Agnost into our React app involves setting up a client instance and
connecting to Agnost's real-time services. Here's how we can achieve this:

1. **Initialize Agnost Client:** We create an instance of the Agnost client
   using our project's base URL and client key.

2. **Manage Real-Time Connections:** Upon component mounting, we open a
   connection to Agnost and listen for join/leave events and drawing actions
   from other users.

3. **Handling User Join/Leave Events:** We update our application state to
   reflect the users currently connected, ensuring our UserList component
   displays the real-time list of participants.

4. **Broadcasting Drawing Actions:** When a user draws on the canvas, we
   broadcast the drawing action to all connected users using Agnost's real-time
   broadcasting capabilities.

```jsx showLineNumbers
const baseUrl = "https://cloudflex.app/env-p....jk7g"
const clientKey = "ak-xp0hbzsr........lroipc9x3b5as7"
let options = {
  realtime: {
    autoJoinChannels: false,
    bufferMessages: true,
    echoMessages: true,
    reconnectionDelay: 2000,
    timeout: 30000,
  },
}

const agnost = createClient(baseUrl, clientKey, options)

useEffect(() => {
  agnost.realtime.open()

  agnost.realtime.on("draw", handleDrawingEvent)
  agnost.realtime.onJoin(handleUserJoin)
  agnost.realtime.onLeave(handleUserLeave)

  return () => {
    agnost.realtime.close()
  }
}, [])
```

:::note

This snippet shows how we set up the Agnost client with configuration options
and establish a real-time connection when the component mounts. We listen for
**`draw`**, **`join`**, **`and`** leave events to update the canvas and user
list in real time.

:::

### Implementing the Drawing Feature

The drawing functionality captures mouse events on the canvas to draw lines. It
then broadcasts these drawing actions to all connected users using Agnost's
real-time broadcasting capabilities. This way, when one user draws on the
canvas, all other users see the updates in real time.

```jsx showLineNumbers
const draw = (event) => {
  event.preventDefault() // Prevent default browser actions
  if (!isDrawing) return
  const canvas = event.target
  const rect = canvas.getBoundingClientRect()
  const x = event.pageX - rect.left
  const y = event.pageY - rect.top
  const { x: prevX, y: prevY } = prevPosition
  drawLine(prevX, prevY, x, y, color, brushSize)
  setPrevPosition({ x, y })
  // Broadcast the drawing event to other users
  agnost.realtime.broadcast("draw", {
    position: { x, y },
    prevPosition,
    color,
    brushSize,
  })
}

const handleDrawingEvent = (event) => {
  const { position, prevPosition, color, brushSize } = event.data
  drawLine(
    prevPosition.x,
    prevPosition.y,
    position.x,
    position.y,
    color,
    brushSize,
  )
}
```

:::note

When a user draws on the canvas, we broadcast the drawing action using
**`agnost.realtime.broadcast`**. Other users receive this action through the
**`handleDrawingEvent`** function, allowing them to see the drawing in real
time.

:::

### Displaying Connected Users

Managing and displaying the list of connected users is crucial for our
collaborative drawing app. We use Agnost's join and leave events to update the
list of users dynamically, ensuring the UserList component accurately reflects
who is currently connected.

```jsx showLineNumbers
const handleUserJoin = async () => {
  const membersData = await agnost.realtime.getMembers("drawing-room")
  const memberIds = membersData.data.map((member) => member.data.username)
  setUsers(memberIds)
}

const handleUserLeave = async () => {
  const membersData = await agnost.realtime.getMembers("drawing-room")
  const memberIds = membersData.data.map((member) => member.id)
  setUsers(memberIds)
}
```

:::note

These functions are called in response to user join and leave events. They fetch
the current list of users from the Agnost service and update the **`users`**
state, which is then displayed in the UI.

:::

## Challenges and Solutions

Throughout the development process, we encountered challenges such as managing
real-time state synchronization and handling rapid drawing actions efficiently.
We'll discuss how these were addressed, ensuring a smooth and responsive user
experience.

### Real-Time State Synchronization

One of the primary challenges was ensuring that the drawing canvas and user list
were updated in real time as users joined, left, or drew on the canvas. By
leveraging Agnost's real-time broadcasting and presence features, we were able
to synchronize the state across all connected clients seamlessly.

### Efficient Drawing Action Handling

Handling rapid drawing actions efficiently was another challenge. We needed to
ensure that drawing actions were broadcasted and rendered without delay, even
when multiple users were drawing simultaneously. By optimizing the drawing
action handling and leveraging Agnost's real-time capabilities, we were able to
achieve a responsive and fluid drawing experience.

## Conclusion and Future Enhancements

Our collaborative drawing app demonstrates the potential of real-time web
technologies to create engaging and interactive user experiences. With Agnost
powering our real-time features, we've built an application that not only
functions seamlessly but also opens the door to future enhancements, such as
adding authentication, supporting different drawing tools, and improving
scalability.

## Appendix: Additional Resources

For those interested in dive deeper, the following resources might be helpful:

- React documentation: https://react.dev/learn
- Agnost client library: https://agnost.dev/client
- Styled-components: https://styled-components.com/

:::note SOURCE CODE

Complete source code for the drawing app can be found on
[GitHub](https://gist.github.com/zinedkaloc/61074ef5d6546dc74a85798021f51223).
Feel free to explore the code and experiment with additional features to further
enhance the app's functionality.

:::
