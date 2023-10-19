---
sidebar_position: 8
description:
  The task manager allows you to manually trigger cloud functions of your
  scheduled tasks which actually run periodically at fixed times, dates, or
  intervals.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Scheduled Tasks

The scheduled task provides the methods to manage your app's scheduled tasks.
With this module you can run a task manually and get the status of a task.

Typically, a scheduled task runs according to its defined execution schedule.
However, with Agnost server library by calling the `runOnce` method, you can
manually run scheduled tasks ahead of their actual execution schedule.

### Run task

You can run a task using the `runOnce` method. It triggers the execution of the
specified task. After the task is triggered, the business logic of the task is
executed.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
let taskName = "billOnDemand"

// Manually run a task with the name of `billonDemand`
const { info, errors } = await agnost.task(taskName).runOnce()
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "info": {
    "trackingId": "6237b225b9a84d607cd79044",
    "scheduledTaskId": "6237b1f17c2a9625f0b2119e",
    "scheduledTaskName": "billOnDemand",
    "triggeredAt": "2022-03-20T23:00:53.966Z",
    "status": "pending"
  },
  "errors": null
}
```

</DetailedResponse>


:::info

- If successful, it returns information about the triggered task, including the
  `trackingId`.
- You can use **trackingId** to check the exectuion status of your task by
  calling [getTaskStatus](#get-task-status) method.
- In case of errors, returns the errors that occurred.

:::

### Get task status

You can retrieve the status of a task using the `getTaskStatus` method. It gets
the latest status of the task with **trackingId**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let taskName = "billOnDemand"
let trackingId = "6237b1f17c2a9625f0b2119e"

// Get the status of the manually triggered task whether
// it has been completed processing or not
const { info, errors } = await agnost.task(taskName).getTaskStatus(trackingId)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "info": {
    "trackingId": "6237b225b9a84d607cd79044",
    "scheduledTaskId": "6237b1f17c2a9625f0b2119e",
    "scheduledTaskName": "billOnDemand",
    "triggeredAt": "2022-03-20T23:00:53.966Z",
    "status": "completed",
    "startedAt": "2022-03-20T23:00:54.009Z",
    "completedAt": "2022-03-20T23:00:54.036Z"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `getTaskStatus` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | trackingId                   | String                            | Yes                              | The id of the task.                  |
