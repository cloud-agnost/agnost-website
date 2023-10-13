---
sidebar_position: 6
description:
  The queue manager allows you to communicate different parts of your
  application and execute cloud functions asynchronously.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Message Queues

The queue manager allows you to communicate different parts of your application
and execute **cloud functions** asynchronously. A message queue provides a
buffer that temporarily stores messages and dispatches them to their consuming
service.

Typically, in Altogic, you submit messages to a queue in your backend app
services using the **Submit Message to Queue** node. However, with Altogic's
client library by calling the `submitMessage` method, you can manually send
messages to your selected queue for processing. Additionally, **you can also add
delay** between message submission to the queue and the actual processing of the
submitted message.

### Submit message to queue

You can submit messages to the queue using the `submitMessage` method.

:::info

It submits a message to the specified message queue to execute your cloud
function asynchronously.

- After the message is submitted, the service defined in your message queue
  configuration is invoked if there is no delay. If there is delay, then the
  message waits for the specified delay duration and then sent to the service
  for processing.
- This cloud function processes the input message and performs necessary tasks
  defined in its service flow.
- The structure of the message (e.g., key-value pairs) is defined by the
  **Start** Node of your queue service.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let queueName = "sendWelcomeEmail"
let messageBody = {
  name: "Rooby",
  email: "rooby@agnost.com",
}

// Submit a message to a `sendWelcomeEmail` queue for asychronous processing, no delay, process the message immediately
const { info, errors } = await agnost.queue.submitMessage(
  queueName,
  messageBody,
)

// Process the message after 24 hours (e.g., 60 x 60 x 24 = 86400 seconds)
const { info, errors } = await agnost.queue.submitMessage(
  queueName,
  messageBody,
  86400,
)
```

</TabItem>


<TabItem value="dart">


```dart
final queueName = "sendWelcomeEmail";
final messageBody = {
  "name": "Rooby",
  "email": "rooby@agnost.com",
};

// Submit a message to a `sendWelcomeEmail` queue for asychronous processing, no delay, process the message immediately
final result = await agnost.queue.submitMessage(queueName, messageBody);

// Process the message after 24 hours (e.g., 60 x 60 x 24 = 86400 seconds)
final result = await agnost.queue.submitMessage(queueName, messageBody, 86400);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "messageId": "6237ae0f45aba7a695579b8f",
    "queueId": "6237ad734625ff4ccdbe6be3",
    "queueName": "sendWelcomeEmail",
    "submittedAt": "2022-03-20T22:43:27.485Z",
    "status": "pending"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `submitMessage` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                     |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1   | queueNameOrId                | String                            | Yes                              | The name or id of the message queue.                                                                     |
| 2   | message                      | Object                            | Yes                              | The message payload (JSON object) that will be submitted to the message queue.                           |
| 3   | delay                        | Number                            | No                               | The number of seconds to delay the messages in queue before dispacthing them to their consuming service. |

:::info

- If successful, it returns information about the submitted message, including
  the `messageId` of the submitted message.

- You can use **messageId** to check the processing status of your message by
  calling [getMessageStatus](#get-message-status) method. In case of any errors,
  returns the errors that occurred.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Get message status

You can retrieve the status of a message using the `getMessageStatus` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let messageId = "6237ae0f45aba7a695579b8f"

// Get the status of submitted message whether it has been completed processing or not
const { info, errors } = await agnost.queue.getMessageStatus(messageId)
```

</TabItem>


<TabItem value="dart">


```dart
final messageId = "6237ae0f45aba7a695579b8f";

// Get the status of submitted message whether it has been completed processing or not
final result = await agnost.queue.getMessageStatus(messageId);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "messageId": "6237ae0f45aba7a695579b8f",
    "queueId": "6237ad734625ff4ccdbe6be3",
    "queueName": "sendWelcomeEmail",
    "submittedAt": "2022-03-20T22:54:31.676Z",
    "status": "completed",
    "startedAt": "2022-03-20T22:54:31.697Z",
    "completedAt": "2022-03-20T22:54:31.723Z",
    "delay": 86400
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `getMessageStatus` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | messageId                    | String                            | Yes                              | The id of the submitted message.     |

:::caution

**The last seven days of the message logs are kept.** If you try to get the
status of a message that has been submitted earlier, this method returns
**null**.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
