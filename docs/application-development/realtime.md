---
sidebar_position: 8
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Realtime

Agnost's Realtime feature is a powerful tool for building real-time
communication capabilities into your applications. It enables seamless,
bi-directional communication between your backend server and client applications
using WebSockets. This section provides an overview of Agnost's Realtime
capabilities and how to configure and use them in your applications.

## Key Realtime Capabilities

Agnost Realtime offers a range of features to enhance your real-time application
development:

### 1. Channel Creation and Subscription

- Create channels within Agnost.
- Allow your application clients to subscribe to these channels for receiving
  real-time messages.

### 2. Message Broadcasting

- Send messages to specific channels.
- Broadcast messages to all connected clients for effective communication.

### 3. Client Metadata Sharing

- Store and share client metadata across channels.
- For example, share user profile data when a user joins or leaves a channel for
  personalized experiences.

### 4. User Event Subscription

- Subscribe to key user events such as sign-in, sign-out, user profile updates,
  and password changes.
- Receive notifications when these events occur for timely actions in your
  application.

## Configuration Settings

To configure Agnost Realtime according to your application's requirements,
follow these steps within the Agnost Studio:

1. Click on **Settings**: In the Agnost Studio, navigate to the **Settings**
   section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

2. Select the **Realtime** Tab: Within the **Settings** section, locate and
   select the **Realtime** tab.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/realtime-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/realtime.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### Real Time

- **Activate Realtime Server:** Enable or disable the Realtime server.

Allow clients to publish messages to channels and subscribe them to listen
incoming messages. Control client publishing and subscription capabilities.

### API Key Required

- **API Key Required:** Specify whether a valid API key is required to access
  Realtime services.

When enabled, only authorized clients with valid API keys can use Realtime
features.

### Session Requirement

- **Session Required:** Determine if app users must be signed in to use Realtime
  services.

Enabling this option ensures authenticated access to Realtime features.

### Rate Limiters

- **Rate Limiters:** Implement rate limiting to control message sending
  frequency.

Define multiple rate limits applied sequentially to prevent misuse and malicious
activities.

## Client Library Methods for Realtime

To interact with Agnost Realtime in your application, you can use the following
client library methods:

:::info Explore Agnost Libraries

To seamlessly integrate Agnost Realtime into your applications, make sure to
explore the following libraries:

- **Agnost Client Library**: Use this library to interact with Agnost Realtime
  on the client-side. Find detailed documentation and examples
  [here](/client/realtime/channels).

- **Agnost Server Library**: The server-side counterpart for handling Realtime
  features. Access comprehensive documentation and implementation guidelines
  [here](/server/guides/realtime/channels).

These libraries will help you explore the full potential of Agnost Realtime in
your application development.

:::

```javascript showLineNumbers
// Open a connection to the Agnost Realtime server.
agnost.realtime.open()

// Close the connection to the Agnost Realtime server.
agnost.realtime.close()

// Join a specific channel.
agnost.realtime.join("channel-name")

// Leave a channel.
agnost.realtime.leave("channel-name")

// Get a list of members in a specific channel.
let result = await agnost.realtime.getMembers("channel-name")

// Send a message to a specific channel with event data.
agnost.realtime.send("channel-name", "event-name", {
  username: "Luke Skywalker",
  profileImage: "https://myimagestorage.com/luke.jpg",
  messageSentAt: "2021-08-16T11:03:21.406+00:00",
  message: "Let's have a Juma juice? I will be there in 10 minutes.",
})

// Broadcast a message to all connected app users.
agnost.realtime.broadcast("event-name", {
  username: "Darth Vader",
  profileImage: "https://myimagestorage.com/vader.jpg",
  messageSentAt: "2021-08-16T11:10:20.745+00:00",
  message:
    "This is the last call for Alderaan citizens, you have 15 minutes to leave the planet.",
})
```

Agnost Realtime simplifies the implementation of real-time communication
features in your applications, such as chat systems, notifications, and more.
Explore its capabilities and enhance the interactivity of your applications by
referring to the Agnost documentation and developer resources for detailed usage
and integration instructions.
