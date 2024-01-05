---
sidebar_position: 7
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Realtime Settings

In the **Realtime** section of Version Settings in Agnost, developers have the
capability to configure and manage the real-time communication features of their
application. Real-time communication is crucial for applications that require
instant updates, messaging, and collaboration. This section outlines the
settings and configurations available to developers.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/s-realtime-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/s-realtime.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={620}
/>

## Activate Realtime Server

Enabling the "Activate Realtime Server" option allows clients to publish
messages to channels and subscribe to these channels to receive incoming
messages in real-time. This feature is essential for building applications that
require live updates, chat functionality, notifications, and more.

## API Key Required

- **API Key Required**: Developers can specify whether a valid API key is
  required to access the real-time services of the platform. When this option is
  turned on, clients must provide a valid API key with the "Allow realtime"
  option enabled to utilize real-time functionality. API keys act as a means of
  authentication and authorization for accessing real-time services.

## Session Required

- **Session Required**: This option indicates whether app users are required to
  be signed in and have an active session token to use the real-time services
  through the Agnost client library. When enabled, only authenticated users with
  valid session tokens can engage in real-time communication. This enhances
  security and ensures that only authorized users can access real-time features.

## Rate Limiters

Rate limiting is a critical aspect of real-time communication as it helps
prevent abuse, control traffic, and protect the system from malicious
activities. Developers can define rate limits, which restrict how often someone
can send real-time messages within a specific timeframe. Multiple rate limits
can be configured and are applied sequentially.

### RATE LIMITERS

Developers can add rate limiters by clicking the "Add Rate Limiter" button. Each
rate limiter can have its own configuration, specifying the maximum number of
requests or messages allowed within a defined duration. Rate limiters are
crucial for maintaining the quality and performance of real-time services while
preventing abuse or overuse.

By configuring these settings, developers can effectively implement and manage
real-time communication features in their applications. Real-time capabilities
are essential for creating engaging and interactive user experiences, and Agnost
provides the necessary tools to control and secure these features.
