---
sidebar_position: 7
---

# Implementing Cronjobs

Cron jobs are tasks that run automatically at specified intervals. These can be
useful in many scenarios, such as executing cleanup scripts, sending out email
notifications, and generating reports, among other tasks.

Agnost makes it easy to define and manage cron jobs for your application.

## Defining Cron Jobs

Defining a cron job in Agnost Studio is similar to defining a message queue.
Here's how you can define a cron job:

1. Go to Agnost Studio: From your Agnost Studio dashboard, navigate to the
   application you want to work on.
2. Navigate to Cronjobs: On the application's left sidebar, click on 'Cronjobs'.
3. Create a New Cronjob: Click on 'New Cronjob' at the top right corner of the
   screen.
4. Specify Cronjob Details: In the new dialog box, specify the name for your
   cron job and select the handler function from the drop-down list. You also
   need to define the schedule for your cron job in the cron syntax.
5. Save the Cronjob: Click on 'Save' to create the cron job.

Here is an example of how a cron job can look like in your application design:

```javascript
//  TO-BE-UPDATED
let schedule = "0 0 * * *"
```

In the example above, we've defined a cron job named `reportGenerator` that runs
at midnight every day. We've also assigned `handlers.reportGenerator` as the
handler function for this cron job.

## Creating Handler Functions for Cron Jobs

Just like queues, a handler function is needed to process a cron job. This
function is triggered as per the defined schedule. These handler functions need
to be predefined in your application's code.

```javascript
// handlers/reportGenerator.js

module.exports = async () => {
  // Generate the report
  console.log("Generating report...")

  // Perform any necessary tasks
  // ...

  console.log("Report generation complete.")
}
```

In the example above, we've created a handler function named `reportGenerator`
that logs the beginning and completion of the report generation process.

## Cron Job Schedules

Cron job schedules are defined using the cron syntax. The schedule `0 0 * * *`
in the example above tells the system to run the job every day at midnight.

Here is a basic overview of the cron syntax:

- `* * * * *` - Each field from left to right represents minute (0 - 59), hour
  (0 - 23), day of the month (1 - 31), month (1 - 12), and day of the week (0 -
  7, where both 0 and 7 represent Sunday).

In the next section, we will explore how to set up environment variables in your
Agnost applications.
