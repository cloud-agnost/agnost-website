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

The scheduled tasks module of this library provides the methods to manually trigger your app's scheduled tasks (a.k.a. cron jobs).
With this module, you can run a task manually and get the status of a task.

Typically, a scheduled task runs according to its defined execution schedule.
However, with the Agnost server library, by calling the `run` method, you can
manually run scheduled tasks ahead of their actual execution schedule.

### Run task

You can run a task using the `run` method ahead of its planned execution time. It triggers the execution of the
specified task. After the task is triggered, the business logic, namely the handler function of the task is
executed.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
const taskName = "billOnDemand";

// Manually run a task with the name of `billonDemand`
const result = await agnost.task(taskName).run();
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "trackingId": "6237b225b9a84d607cd79044",
  "cronJobId": "6237b1f17c2a9625f0b2119e",
  "cronJobName": "billOnDemand",
  "triggeredAt": "2022-03-20T23:00:53.966Z",
  "status": "pending"
}
```

</DetailedResponse>


:::info

- If successful, it returns information about the triggered task, including the
  `trackingId`.
- You can use **trackingId** to check the exectuion status of your task by
  calling [getTaskStatus](#get-task-status) method.

:::

### Get task status

You can retrieve the status of a task using the `getTaskStatus` method. It gets
the latest status of the task with **trackingId**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const taskName = "billOnDemand";
const trackingId = "6237b225b9a84d607cd79044";

// Get the status of the manually triggered task whether
// it has been completed, processing or not
const retult = await agnost.task(taskName).getTaskStatus(trackingId);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example Response">


```json
{
  "trackingId": "6237b225b9a84d607cd79044",
  "cronJobId": "6237b1f17c2a9625f0b2119e",
  "cronJobName": "billOnDemand",
  "triggeredAt": "2022-03-20T23:00:53.966Z",
  "status": "completed",
  "startedAt": "2022-03-20T23:00:54.009Z",
  "completedAt": "2022-03-20T23:00:54.036Z"
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `getTaskStatus` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | trackingId                   | String                            | Yes                              | The tracking id of the triggered task.                  |
