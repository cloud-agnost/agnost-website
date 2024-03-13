---
title: Scheduling Tasks with Agnost's Cronjob
slug: scheduling-tasks-with-agnost-cronjob
author: Deniz Colak
author_title: Community Author
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  Learn how to use Agnost's cronjob module to automate tasks and schedule jobs
  in your applications.
keywords:
  - cronjob
  - agnost
  - features
image: /img/blog/2024-03-13/banner.png
tags: [cronjob, agnost]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<head>
  <title>Overview of Agnost's Cronjob Module</title>
  <meta
    property="og:title"
    content="Integrating Agnost Authentication into Your Projects"
  />
  <meta
    name="twitter:title"
    content="Integrating Agnost Authentication into Your Projects"
  />
</head>

In the realm of backend development, automating recurring tasks is pivotal for
application efficiency. Agnost, an open-source Kubernetes development platform,
offers a robust cronjob feature to streamline task management. This guide dives
deep into Agnost's cronjob functionality, providing insights, best practices,
and practical examples. Whether you're new to cronjobs or seeking optimization,
this guide equips you with the knowledge to leverage Agnost's cronjob feature
effectively, enhancing scalability and performance in backend development.

## Understanding Cronjobs

At the heart of every efficient backend system lies the concept of automation.
Cronjobs, with their ability to execute tasks automatically at scheduled
intervals, epitomize this concept. From routine maintenance activities to
complex data processing tasks, cronjobs are indispensable for maintaining the
integrity and functionality of applications. By using cronjobs, developers can
improve the full potential of their applications, ensuring consistent
performance and reliability.

## Agnost's Cronjob Feature

In the fast-paced world of backend development, agility is paramount. Agnost's
cronjob feature embodies this ethos, offering developers a seamless and
intuitive solution for managing recurring tasks within Kubernetes environments.
With its array of features tailored to meet the demands of modern development
workflows, Agnost empowers developers to harness the power of automation and
propel their projects to new heights.

## Key Features of Agnost's Cronjob Feature

1. **Scalability:** In today's digital landscape, scalability is non-negotiable.
   Agnost leverages the scalability capabilities of Kubernetes, allowing
   developers to effortlessly scale their cronjobs to meet fluctuating workload
   demands. Whether it's processing a few records or handling massive datasets,
   Agnost ensures optimal performance and resource utilization, enabling
   applications to scale seamlessly as they grow.

2. **Reliability:** Reliability is the cornerstone of any successful
   application. With Agnost, developers can rest assured that their cronjobs
   will execute reliably and consistently. By leveraging Kubernetes' robust
   architecture, Agnost provides a fault-tolerant execution environment for
   cronjobs, ensuring uninterrupted operation even in the face of node failures
   or disruptions.

3. **Flexibility:** One size does not fit all in the world of backend
   development. Agnost recognizes this reality and offers developers the
   flexibility to tailor cronjob schedules to their specific needs. Using cron
   expressions, developers can define custom schedules with precision, ensuring
   that tasks are executed at the optimal times for their applications.

4. **Monitoring and Logging:** Visibility is key to maintaining the health and
   performance of applications. Agnost offers built-in monitoring and logging
   features, giving developers real-time insights into the execution status and
   output of their cronjobs. With detailed logs and metrics at their fingertips,
   developers can quickly identify and troubleshoot any issues that may arise,
   ensuring the smooth operation of their applications.

## Implementation of Cronjobs in Agnost

Now, let's walk through the implementation of cronjobs in Agnost, showcasing how
developers can leverage this powerful feature to automate recurring tasks within
their applications. For demonstration purposes, we'll provide an example of how
to create a simple cronjob in Agnost to perform a routine data processing task.

### Prerequisites

- **Agnost**: Ensure that Agnost is deployed on your Kubernetes cluster. If you
  haven't already deployed Agnost, you can follow the
  [official documentation](https://agnost.dev/docs/intro) to get started.

- **Kubernetes Cluster**: You'll need a Kubernetes cluster to deploy Agnost and
  its authentication module. If you don't have a Kubernetes cluster, you can use
  a managed Kubernetes service such as Google Kubernetes Engine (GKE) or Amazon
  Elastic Kubernetes Service (EKS), or you can set up a local Kubernetes cluster
  using tools like Minikube or Kind.

- **Create an app withing Agnost**: You can create an app within Agnost by
  following the
  [official documentation](https://agnost.dev/docs/application-development/create-an-application).

- **Deploy your app version to its environment**: Agnost ensures automatic
  deployment of the master version to an associated environment. However, you
  can manually deploy a version to an environment by following the
  [official documentation](https://agnost.dev/docs/application-development/version-settings/environment).

- **Generate an API Key**: You can generate an API key by following the
  [official documentation](https://agnost.dev/docs/application-development/version-settings/api-keys).

Referencing the [official documentation](https://agnost.dev/client/) is
essential to ensure that you have all the necessary information to integrate
Agnost's authentication module into your projects.

:::note

Upon creating an app, Agnost automatically creates and deploys a master version
to an associated environment but does not generate an API key. You must manually
create this key, accessible along with other necessary information (client key,
base URL) from your app version's Settings or Dashboard view in Agnost Studio.

:::

### Step 1: Create Cronjob

Let's open the Agnost Studio and navigate to the **Cronjobs** section. Click on
the **Create Task** button to create a new cronjob.

<Banner
alt="Create a cronjob in Agnost"
src="/img/blog/2024-03-13/cron-1.png"
height={640}
width={920}>


</Banner>


### Step 2: Define Cronjob Schedule

In the cronjob creation form, you can define the schedule for your cronjob using
a cron expression. A cron expression is a string representing a schedule, with
five space-separated fields that define the time and date at which a task should
be executed. For example, the following cron expression schedules a task to run
every 15 minutes:

```plaintext
*/15 * * * *
```

<Banner
  alt="Define a cronjob in Agnost"
  src="/img/blog/2024-03-13/cron-2.png"
  height={640}
  width={720}
></Banner>

:::tip

You can use online cron expression generators to create custom cron expressions
that match your desired schedule. Once you've defined the schedule for your
cronjob, you can proceed to the next step.

:::

### Step 3: Configure Cronjob Task

Next, you can configure the task that your cronjob will execute. This can be a
javascript code that you want to run at the scheduled intervals. You can also
specify the variables that you want to pass to your task.

<Banner
alt="Configure a cronjob in Agnost"
src="/img/blog/2024-03-13/cron-3.png"
height={640}
width={920}>


</Banner>


In this example we are running a simple task that logs a message to the console
every time the cronjob is executed.

```javascript showLineNumbers
import { agnost } from "@agnost/server"

const cronJobHandler = async () => {
  console.log("Checking inventory at:", new Date())
  // Perform inventory check logic here
  // Example: const inventoryStatus = await checkInventory();
  // Log inventory check completion
  console.log("Inventory check completed at:", new Date())
  // Log inventory status if needed
  // Example: console.log("Inventory status:", inventoryStatus);
}

export default cronJobHandler
```

### Step 4: Running the Cronjob Manually

Once you've configured your cronjob, you can run it manually to verify that it
executes as expected. You can do this by clicking the **Test** button in the
cronjob details view.

<Banner
alt="Configure a cronjob in Agnost"
src="/img/blog/2024-03-13/cron-4.png"
height={640}
width={720}>


</Banner>


## Conclusion

In conclusion, Agnost's cronjob feature offers a comprehensive solution for
automating recurring tasks within Kubernetes environments. With its scalability,
reliability, and flexibility, developers can streamline the execution of
cronjobs and ensure the seamless operation of their applications. By following
the implementation guidelines and leveraging client libraries, developers can
harness the power of Agnost's cronjob feature to enhance productivity and
efficiency in their backend development workflows.

As you integrate Agnost into your projects, remember to leverage the
client/server libraries and the extensive documentation available at
[Agnost's official website](https://agnost.dev) for additional methods and
advanced functionalities.

**Resources**:

- [Agnost's official website](https://agnost.dev)
- [Agnost's official documentation](https://agnost.dev/docs/intro)
- [Agnost's GitHub repository](https://github.com/cloud-agnost/agnost-community)
- [Agnost's Cronjob Documentation](https://agnost.dev/server/scheduled-task)
