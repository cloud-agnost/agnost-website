---
sidebar_position: 6
description:
  The task manager allows you to manually trigger cloud functions of your
  scheduled tasks which actually run periodically at fixed times, dates, or
  intervals.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Scheduled Tasks

The task manager allows you to manually trigger cloud functions of your
scheduled tasks which actually run periodically at fixed times, dates, or
intervals.

Typically, a scheduled task runs according to its defined execution schedule.
However, with Altogic client library by calling the `runOnce` method, you can
manually run scheduled tasks ahead of their actual execution schedule.

### Run task

You can run a task using the `runOnce` method. It triggers the execution of the
specified task. After the task is triggered, the **cloud function** which
defined in your scheduled task configuration is invoked.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let taskName = "billOnDemand"

// Manually run a task with the name of `billonDemand`
const { info, errors } = await agnost.task.runOnce(taskName)
```

</TabItem>


<TabItem value="dart">


```dart
final taskName = "billOnDemand";

// Manually run a task with the name of `billonDemand`
final result = await agnost.task.runOnce(taskName);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "info": {
    "taskId": "6237b225b9a84d607cd79044",
    "scheduledTaskId": "6237b1f17c2a9625f0b2119e",
    "scheduledTaskName": "billOnDemand",
    "triggeredAt": "2022-03-20T23:00:53.966Z",
    "status": "pending"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `runOnce` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | taskNameOrId                 | String                            | Yes                              | The name or id of the task.          |

:::info

- If successful, it returns information about the triggered task, including the
  `taskId`.
- You can use **taskId** to check the exectuion status of your task by calling
  [getTaskStatus](#get-task-status) method.
- In case of errors, returns the errors that occurred.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Get task status

You can retrieve the status of a task using the `getTaskStatus` method. It gets
the latest status of the task with **taskId**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let taskId = "6237b1f17c2a9625f0b2119e"

// Get the status of the manually triggered task whether
// it has been completed processing or not
const { info, errors } = await agnost.task.getTaskStatus(taskId)
```

</TabItem>


<TabItem value="dart">


```dart
final taskId = "6237b1f17c2a9625f0b2119e";

// Get the status of the manually triggered task whether
// it has been completed processing or not
final result = await agnost.task.getTaskStatus(taskId);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "info": {
    "taskId": "6237b225b9a84d607cd79044",
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
| 1   | taskId                       | String                            | Yes                              | The id of the task.                  |

:::caution

**The last seven days of the task execution logs are kept.** If you try to get
the status of a task that has been triggered earlier, this method returns
**null**.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
