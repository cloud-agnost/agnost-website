---
sidebar_position: 2
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Environment Settings

In the Environment section of Version Settings in Agnost, you can manage various
aspects related to the deployment and configuration of your application's
environment. This includes options to **redeploy**, **restart**, and **configure
environment-specific settings**.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/environment-settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/environment-settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

## Redeploy

**Redeploy** allows you to trigger a new deployment of your application
environment. This action initiates the process of updating and relaunching your
application components. The date and time of the last deployment are displayed
for reference.

### Restart

Selecting **Restart** will temporarily shut down your API Servers and then
restart them. This can be useful in scenarios where you want to refresh the
running environment or troubleshoot any issues related to server performance or
stability.

### Auto Deploy

When the **Auto Deploy** option is enabled, changes to your application version
will be automatically deployed whenever there are updates or modifications. This
feature streamlines the deployment process and ensures that the latest changes
are consistently applied.

## Environment ID

The **Environment ID** represents a unique identifier for your environment
within your Agnost Cluster. This ID helps differentiate and locate your specific
environment configuration.

## API Server

The **API Server** serves as the core component of your application version. It
is responsible for running endpoints, managing queues, and handling task
handlers. In an Agnost Enterprise cluster, a deployment is created for each app
engine of the version, managing a set of replicas of a specific pod template.

### Min Replicas

- Specifies the minimum number of replicas (identical copies) of the specified
  pod template that should be running at any given time.

### Max Replicas

- Defines the maximum number of replicas that can be created for the specified
  pod template.

### Scale Down Delay

- Specifies the delay duration before scaling down the number of replicas.

### Scale to Zero Pod Retention Period

- Defines the period for retaining pods when scaling down to zero.

## Resource Request and Limits

In this section, you can configure resource requests and limits for CPU and
memory usage within your environment.

- **CPU Request**: This represents the amount of CPU resources requested for
  your environment, measured in CPU units.

- **CPU Limit**: The CPU limit specifies the maximum amount of CPU resources
  that your environment can consume, also measured in CPU units.

- **Memory Request**: This value represents the amount of memory resources
  requested for your environment, measured in MiB (Mebibytes).

- **Memory Limit**: The memory limit specifies the maximum amount of memory
  resources that your environment can consume, also measured in MiB.

By configuring these resource settings, you can optimize the performance and
resource allocation for your environment.

Clicking **"Save"** allows you to apply and save any changes made to the
Environment settings of your application version.

## Suspend Services

Selecting **Suspend Services** will temporarily suspend access to the API server
of this version. This can be useful when you need to restrict access to your
application temporarily, such as during maintenance or troubleshooting.

In summary, the Environment settings in Version Settings provide essential
configuration options for managing and optimizing your application's deployment.
These settings help you control deployment processes, resource allocation, and
access to your application's API server effectively.
