---
sidebar_position: 4
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Working with Message Queues

In many cases, you might want to process tasks asynchronously outside of the
main application flow. This is especially true for tasks that are
resource-intensive or that might take a long time to complete. In such
scenarios, you can leverage message queues to manage and process tasks
asynchronously.

With Agnost platform queue can be RabbitMQ or Kafka as the message broker. A
queue is a buffer that stores messages waiting to be processed. A producer sends
messages to a queue, and a consumer reads messages from the queue and processes
them. This way, tasks are decoupled from the main application flow and can be
processed asynchronously, leading to better application performance and
scalability.

## Defining Message Queues

In your Agnost application, you can define message queues in the queue section
of the Agnost-Studio;

1. In the Agnost Studio, click on the **+** icon located in the header to access

the options menu.

- From the dropdown menu, select **Message Queue** to navigate to the Message
  Queue section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/new-mq-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/new-mq.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

2. **Create a New Queue**

In the Message Queue section, you'll have the option to **+ Create Message
Queue** to define a new Message Queue.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-message-queue-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-message-queue.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

3. **Specify Queue Details:**

A dialog box will appear, asking you to provide the following details for your
new message queue:

- **Message Queue Name:** Enter a descriptive name for your message queue. This
  name should reflect the purpose or functionality of the message queue within
  your application.

- **Specify Message Delay Duration (Optional):** If you need to introduce a
  delay between when a message is sent and when it becomes available for
  processing, you can specify the message delay duration. This can be useful for
  scenarios where messages should not be processed immediately.

- **Log Execution (On/Off):** You can choose to log the execution of messages in
  this queue. Enabling this option will log detailed information about message
  processing, including message content, status, and execution duration.

- **Select Resource from Dropdown:** Choose the appropriate resource for your
  message queue from the dropdown menu. The resource you select should match the
  message broker or queue service you want to use, such as RabbitMQ or Kafka.

- **Save the Queue:** Click on 'Save' to create the message queue.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/mq-details-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/mq-details.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Creating Handler Functions

A handler function is a function that is triggered to process a message from the
queue. You can create handler functions in the Agnost Studio;

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/queue-handler-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/queue-handler.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

Each handler function receives the message as an argument it must call once it
has finished processing the message.

```javascript
const queueHandler = async (message) => {
  // Process the message
  console.log("Received message: ", message)

  // Process the message and perform any necessary tasks
  // ...
}
export default queueHandler
```

In the example above, we've created a handler function named `queueHandler` that
logs the received message and performs any necessary tasks.

## Sending Messages to a Queue

You can send messages to a queue using the `agnost.queue.submitMessage()`
method.

```javascript
const message = {
  // The message data
}

agnost.queue.submitMessage("MoviesQueue", message, (err) => {
  if (err) {
    console.error("Failed to send message to queue:", err)
  }
})
```

In the example above, we've sent a message to the `MoviesQueue` queue. If the
message fails to send, an error is logged.

## Processing Messages from a Queue

When a message is sent to a queue, Agnost automatically triggers the assigned
handler function to process the message. The handler function receives the
message as an argument and a callback function that it must call once it has
finished processing the message.

```javascript
// handlers/queueHandler.js

const queueHandler = async (message) => {
  // Process the message
  console.log("Received message: ", message)

  // Process the message and perform any necessary tasks
  // ...
}
export default queueHandler
```

By using message queues, you can improve the performance and scalability of your
Agnost applications, especially when dealing with resource-intensive or
long-running tasks.
