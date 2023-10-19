---
sidebar_position: 7
description:
  The queue manager allows you to communicate different parts of your
  application and execute cloud functions asynchronously.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Message Queues

A message queue provides a buffer that temporarily stores messages and
dispatches them to their consuming service. The messages are usually small, and
can be things like requests, replies or error messages, etc.

Typically in Agnost, a message queue is used to execute a cloud function
asynchronously. For example, you can submit a message to a message queue to send
a welcome email to a new user immediately after they sign up. Or you can submit
a delay message to a message queue to send a reminder email to a user after 24
hours.

### Submit message to queue

You can submit messages to the queue using the `submitMessage` method.

:::info

It submits a message to the specified message queue to execute the service flow
of the queue.

- After the message is submitted, the service defined in your message queue
  configuration is invoked if there is no delay. If there is delay, then the
  message waits for the specified delay duration and then sent to the service
  for processing.
- This service processes the input message and performs necessary tasks defined
  in its business logic.
- The structure of the message (e.g., key-value pairs) is defined by the service
  that processes the message.

:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let queueName = "default"
let messageBody = {
  name: "Rooby",
  email: "rooby@agnost.com",
}

// Submit a message to a `default` queue for asychronous processing, no delay, process the message immediately
const { info, errors } = await agnost
  .queue(queueName)
  .submitMessage(messageBody)

// Process the message after 24 hours (e.g., 60 x 60 x 24 = 86400 seconds)
const { info, errors } = await agnost
  .queue(queueName)
  .submitMessage(messageBody, 86400)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "trackingId": "6237ae0f45aba7a695579b8f",
    "queueId": "6237ad734625ff4ccdbe6be3",
    "queueName": "default",
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
| 1   | message                      | Object                            | No                               | The message payload (JSON object) that will be submitted to the message queue.                           |
| 2   | delay                        | Number                            | No                               | The number of seconds to delay the messages in queue before dispacthing them to their consuming service. |

:::info

- If successful, it returns information about the submitted message, including
  the `trackingId` of the submitted message.

- You can use **trackingId** to check the processing status of your message by
  calling [getMessageStatus](#get-message-status) method. In case of any errors,
  returns the errors that occurred.

:::

### Get message status

You can retrieve the status of a message using the `getMessageStatus` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let queueName = "default"
let trackingId = "6237ae0f45aba7a695579b8f"

// Get the status of submitted message whether it has been completed processing or not
const { info, errors } = await agnost
  .queue(queueName)
  .getMessageStatus(trackingId)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "info": {
    "trackingId": "6237ae0f45aba7a695579b8f",
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
| 1   | trackingId                   | String                            | Yes                              | The id of the submitted message.     |
