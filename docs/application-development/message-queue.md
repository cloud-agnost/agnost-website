---
sidebar_position: 6
---

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

### Defining Message Queues

In your Agnost application, you can define message queues in the queue section
of the Agnost-Studio;

1. **Go to the Agnost Studio:** From your Agnost Studio dashboard, navigate to
   the application you want to work on.

2. **Navigate to Queues:** On the application's left sidebar, click on 'Queues'.

3. **Create a New Queue:** Click on 'New Queue' at the top right corner of the
   screen.

4. **Specify Queue Details:** In the new dialog box, specify the name for your
   message queue and select the handler function from the drop-down list. The
   handler function is the function that will be executed whenever a message is
   sent to this queue.

5. **Save the Queue:** Click on 'Save' to create the message queue.

### Creating Handler Functions

A handler function is a function that is triggered to process a message from the
queue. Handler functions must be defined in your Agnost application's handlers
folder.

```javascript
// handlers/taskHandler.js

module.exports = async (message, callback) => {
  // Process the message
  console.log("Received message: ", message)

  // Process the message and perform any necessary tasks
  // ...

  // Call the callback function when the task is complete
  callback()
}
```

In the example above, we've created a handler function named `taskHandler` that
logs the received message and then calls the callback function.

### Sending Messages to a Queue

You can send messages to a queue using the `context.queues.sendToQueue()`
method.

```javascript
const message = {
  // The message data
}

context.queues.sendToQueue("taskQueue", message, (err) => {
  if (err) {
    console.error("Failed to send message to queue:", err)
  }
})
```

In the example above, we've sent a message to the `taskQueue` queue. If the
message fails to send, an error is logged.

### Processing Messages from a Queue

When a message is sent to a queue, Agnost automatically triggers the assigned
handler function to process the message. The handler function receives the
message as an argument and a callback function that it must call once it has
finished processing the message.

```javascript
// handlers/taskHandler.js

module.exports = async (message, callback) => {
  // Process the message
  console.log("Received message: ", message)

  // Perform any necessary tasks
  // ...

  // Call the callback function when the task is complete
  callback()
}
```

By using message queues, you can improve the performance and scalability of your
Agnost applications, especially when dealing with resource-intensive or
long-running tasks.
