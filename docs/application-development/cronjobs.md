---
sidebar_position: 7
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Implementing Cronjobs

Cron jobs are essential for automating recurring tasks and maintenance
activities in your application. In Agnost, you can easily set up and manage cron
jobs to execute specific tasks at scheduled intervals. This section will guide
you through the process of creating and configuring cron jobs in Agnost,
including defining the job and coding the task handler.

## Creating a Cron Job

To create a cron job in Agnost, follow these steps:

### 1. Access the Cron Job Tab

In the Agnost Studio, click on the **'+'** icon located in the header to access
the options menu.

- From the dropdown menu, select **Cron Jobs** to navigate to the Cron Jobs
  section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/cronjob-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/cronjob.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Create a New Cron Job

In the Cron Jobs section, you'll have the option to **'+ Create Job'** to define
a new cron job.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/new-cronjob-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/new-cronjob.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- A dialog box will appear, asking you to provide the following details for your
  new cron job:

  - **Job Name:** Enter a descriptive name for your cron job. This name should
    reflect the purpose or functionality of the job within your application.

  - **Log Execution (On/Off):** You can choose to log the execution of the cron
    job. Enabling this option will log detailed information about job execution,
    including start and end times, status, and execution duration.

  - **Enter Cron Syntax:** Specify the cron syntax that defines the schedule for
    your cron job. The cron syntax consists of fields that represent the minute,
    hour, day of the month, month, and day of the week when the job should run.
    You can use standard cron notation to set the schedule.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-cronjob-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-cronjob.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 3. Coding the Task Handler

After defining your cron job's configuration, you'll need to code the task
handler. The task handler is responsible for executing the specific actions or
tasks associated with the cron job. You can use the JavaScript programming
language to implement the task handler.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/cronjob-handler-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/cronjob-handler.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

After defining your cron job and coding the task handler, remember to save your
changes within Agnost Studio.

#### Example Task Handler in JavaScript

```javascript
const cronJobHandler = async () => {
  // Implement your task logic here
  console.log("Cron job executed at:", new Date().toISOString())
}

export default cronJobHandler
```

In this example, we're using Javascript to create a simple cron job that runs
every day at 5:00 AM. The task handler logs the execution time of the cron job
to the console.

:::note

Setting up and managing cron jobs in Agnost is a straightforward process that
allows developers to automate recurring tasks within their applications. By
following the steps outlined above, you can create and configure cron jobs with
specific schedules and implement task handlers to perform the necessary actions.

:::
