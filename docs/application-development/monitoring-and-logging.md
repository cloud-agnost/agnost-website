---
sidebar_position: 11
---

import ilCss from "../../src/css/illustration.module.css"
import ImageSwitcher from "@theme/ImageSwitcher"

# Monitoring and Logging

In Agnost, monitoring and logging are essential aspects of maintaining the
health and performance of your backend services and applications. Whether you
want to inspect endpoints, message queues, or tasks, Agnost provides you with
robust tools for effective monitoring and troubleshooting.

## Inspect Endpoints

Agnost offers a comprehensive solution for inspecting and monitoring endpoints,
allowing you to gain insights into how users interact with your applications:

:::note

To inspect endpoints, navigate to the **`Endpoints`** section and select the
**`View Logs`** button.

- **Reminder:** In order to inspect endpoints, you must first enable the
  **`Log Executions`** setting for your desired endpoints.

:::

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/endpoint-logs-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/endpoint-logs.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- **View Request and Response Pair:** For each endpoint, you can access detailed
  information, including the HTTP method, status, and response time. This data
  enables you to identify suspicious activity, troubleshoot issues, and
  understand user interactions.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-log-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-log.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Request/Response Logs

Agnost's logging capabilities make it easy to filter and inspect requests:

- **Filter Endpoint Logs:** Effortlessly filter endpoint logs by various
  criteria, such as endpoint name, HTTP method, status, response time, and
  client. You can also use timestamp filters and create custom filters to
  quickly locate specific requests and investigate them in detail. Combine
  multiple filters to create a custom view tailored to your needs.

- **Drill Down into Data:** Dive deeper into the data to investigate your
  application's performance thoroughly. The logs provide valuable insights that
  help you pinpoint issues and optimize your application.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/log-details-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/log-details.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

## Monitor Database

Agnost offers database monitoring capabilities, allowing you to monitor your
database usage and allocation:

To monitor your database, navigate to the **`Database`** and select the
**`View Data`** button.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-data-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-data.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- **View Database Usage:** Monitor your database usage in real-time. Agnost
  allows you to analyze database performance, usage, and capacity consumption.
  Easily view database usage for your models and take actions to optimize
  efficiency.

- **Inspect Database Tables:** Inspect your database tables and view detailed
  information about each table, including the number of rows, size, and
  allocation. This data helps you identify trends and patterns impacting
  performance.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-records-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-records.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Storage

Agnost enables you to monitor your storage usage:

- **Monitor Storage Usage:** Quickly assess the capacity consumption of your
  cloud storage. Obtain insights into the total size, buckets, objects, and
  object size metrics (min/max/avg). This information helps you manage your
  storage resources effectively.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-storage-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-storage.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Inspect and Monitor Message Queues

Agnost offers advanced capabilities for inspecting and monitoring message
queues:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-mq-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-mq.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- **Real-time Monitoring:** Monitor and analyze all of your messaging queues in
  real-time. Agnost's intuitive interface simplifies navigation through queues,
  allowing you to quickly identify bottlenecks or issues affecting your
  messaging infrastructure.

- **Powerful Filtering:** Utilize powerful filtering capabilities to drill down
  and locate specific message queues. Filter by various criteria, making it easy
  to troubleshoot and resolve problems efficiently.

- **Performance Charts and Logs:** Access performance charts over time and
  detailed logs for each message queue. This comprehensive understanding of
  message queue health helps you identify trends and patterns impacting
  performance.

## Inspect and Monitor Scheduled Tasks

Agnost provides robust tools for inspecting and monitoring scheduled tasks:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/view-cron-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/view-cron.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- **Scheduled Task Insights:** Easily monitor and inspect your application's
  scheduled tasks. Agnost's Watcher feature offers detailed information about
  task status and performance.

- **Performance Tracking:** View performance charts over time and access
  detailed logs for each scheduled task. This comprehensive view ensures you
  have complete visibility into task health and performance.

Agnost Watcher is the ideal solution for organizations relying on scheduled
tasks for critical business operations, providing the visibility and control
needed to optimize applications and ensure business continuity.

With Agnost's monitoring and logging capabilities, you can proactively manage
your backend services and applications, identify and resolve issues promptly,
and maintain optimal performance and efficiency.
