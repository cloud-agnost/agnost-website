---
sidebar_position: 2
---

# Installing Agnost Studio

Agnost offers a simplified installation process that can be executed with a few
commands. Before proceeding with the installation, ensure your system fulfills
the [system requirements](/docs/installation/system-requirements).

### Step 1: Add Agnost Helm Chart

Helm is a package manager for Kubernetes that simplifies the deployment and
management of applications. Begin by adding the Agnost Helm repository:

```shell
helm repo add cloud-agnost
```

### Step 2: Install Agnost

With the Agnost Helm chart repository added, you can now proceed to install
Agnost:

```shell
helm install agnost cloud-agnost/base
```

This command will download and install Agnost onto your Kubernetes cluster. The
installation process might take a few minutes.

After the successful installation, you will have access to the Agnost graphical
interface(Studio) where you can create and manage your resources.

## Define Your Application Structure

With Agnost installed, you are now ready to define your application structure.
In Agnost, the application structure follows a hierarchical organization as
follows:

- **Organization**: This is the top-level entity in Agnost. An organization
  contains multiple applications and provides a way to manage access and
  permissions across them.

- **Application**: Within an organization, you can have multiple applications.
  An application represents a collection of services and their respective
  resources (database, cache, message queue, etc.) that make up a complete
  business application.

- **Resource**: Each application is made up of multiple resources. A resource
  can be a database, a cache, a message queue, etc. You can connect existing
  resources including databases, caches, and message queues to your application
  or create new ones.

- **Version**: Each application can have multiple versions. Each version is a
  different configuration or a different state of the application.

### Defining Resources

For each resource type, Agnost provides you with the flexibility of either
connecting to an existing resource or creating a new one.

To define a resource:

1. Navigate to your application in the Agnost interface.
2. Click on the 'Resources' tab.
3. Click 'Add Resource'.
4. Choose the type of resource (e.g., Database, Cache, Message Queue).
5. Fill in the configuration details as required.
6. Click 'Save'.

Please note that Agnost provides a flexible framework that allows you to define
the resources that best fit your application needs, including but not limited to
databases, caches, and message queues.

## Next Steps

Congratulations, you've installed Agnost and set up your first application
structure. In the following sections, we will walk you through deploying your
first application and exploring Agnost's advanced features for scaling,
monitoring, and securing your applications.

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
