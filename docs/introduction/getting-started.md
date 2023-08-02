---
sidebar_position: 3
---

# Getting Started

Get up and running with Agnost, the open-source Kubernetes Development Platform.
This guide will walk you through the essential steps for setting up Agnost and
deploying your first application.

## Prerequisites

Before you begin, ensure that you have the following software installed:

- [Docker](https://docs.docker.com/get-docker/): Utilized to build and manage
  your application containers.
- [Kubernetes](https://kubernetes.io/docs/setup/): The platform where your
  applications will be deployed.
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/): A
  command-line tool for managing your Kubernetes cluster.
- [Helm](https://helm.sh/docs/intro/install/): Helm is a package manager for
  Kubernetes that simplifies the process of deploying and managing applications.

## Step 1: Install Agnost

1. Add the Agnost Helm repository:

```shell
helm repo add cloud-agnost
```

2. Install Agnost:

```shell
helm install agnost cloud-agnost/base
```

## Step 2: Configure Agnost

After installing Agnost, configure it to connect with your Kubernetes cluster.
This process involves providing Agnost with the appropriate permissions and
roles on your cluster. Refer to the 'Cluster Configuration' section in the
Agnost documentation for detailed instructions.

## Step 3: Deploy Your First Application

With Agnost installed and configured, you're now ready to deploy your first
application.

- **Create a Resource:** This is a visual representation of your application,
  its components (like databases, queues, etc.), and its configuration.

- **Deploy the Application:** Use the `helm deploy` command in your terminal,
  followed by the name you want to give to your application and the path to your
  application manifest file, to deploy your application.

```shell
helm deploy <my-app> ./<my-app-chart-path>
```

## Step 4: Monitor Your Application

Once your application is deployed, use Agnost's built-in monitoring tools to
keep track of your application's performance and status. You can find more
information in the 'Application Monitoring' section of the Agnost documentation.

## Step 5: Scale and Modify Your Application

As your application grows, Agnost helps you scale your databases, caches, and
queues. Agnost also offers a flexible and intuitive interface to modify your
application's configuration as required.

Congratulations! You are now set up with Agnost, ready to build scalable, secure
backend applications. For more detailed information, consult the official Agnost
documentation. Happy developing!
