---
sidebar_position: 2
description:
  Agnost client library documentation where you can find instructions, quick
  start guides, best practices, code examples, and more.
title: Overview
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Overview

This Server API documentation will guide you on how to use the key modules of the
Agnost server side library in your backend apps.

:::info

Please note that Agnost server side API can only be used in your Agnost backend applications. **You cannot import and use this library in your front-end applications.** We provide methods to speed up user authentication in our [**Agnost Client API**](/client), which you can use in your front-end apps.

:::


## Key modules

There are several modules in our server library that you can use in your backend
applications.

- [**Database**](/server/database/introduction) - Allows you manage your
  application's database. With the database module, you can create new objects in
  your app database, update or delete existing ones, run queries and paginate
  over large data sets. This module also provides methods to manage database transactions.
- [**Storage**](/server/storage/storage.md) - Provides the methods to manage
  your app's cloud storage buckets and files. With this module, you store your
  files, documents, images etc. under buckets, which are the basic containers
  that hold your application data.
- [**Message Queues**](/server/message-queue) - Allows different parts of your
  application to communicate and perform activities asynchronously. Message
  queue services are triggered when a message is submitted to a queue.
- [**Scheduled Tasks**](/server/scheduled-task) - Enables you to manually
  trigger service executions of your scheduled tasks (a.k.a. cron jobs) which
  actually ran periodically at fixed times, dates, or intervals
- [**Realtime**](/server/realtime) - Allows realtime publish and subscribe
  (pub/sub) messaging through websockets. Realtime makes it possible to open a
  two-way interactive communication session between the user's device (e.g.,
  browser, smartphone) and a server. With realtime, you can send messages to a
  server and receive event-driven responses without having to poll the server
  for a reply. The server side API provides a couple of convenience methods to realtime messages. For a detailed list of realtime features that you can use in your front-end apps please refer to [Client API Realtime](/client/category/realtime) documentation.
- [**Cache**](/server/cache) - Provides simple key-value storage at a high-speed
  data storage layer (Redis), speeding up data set and get operations.

### Error Handling

Unlike the Client API, Agnost's server side API throws exceptions in case of errors in your method calls. These errors can be related to input data validation or errors that might occur when performing database CRUD operations. We recommend writing your handler functions within try-catch blocks when calling Agnost's server side API methods.