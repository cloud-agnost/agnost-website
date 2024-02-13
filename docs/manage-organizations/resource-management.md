---
sidebar_position: 1
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Resource Management

In Agnost, resource definition is a user-friendly process that allows developers
and software architects to easily configure the components and services their
applications require. This section will guide you through the process of
defining and configuring resources within Agnost Studio.

## Defining Resources from the Studio

Agnost Studio simplifies the resource definition process, making it accessible
to developers and architects.

Here's a step-by-step guide on how to define resources in Agnost:

### 1. Click on Add Resource

To begin defining a resource, click on the "Add Resource" button within the
Agnost UI. This will open a dialog box where you can select the type of resource
you want to add.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/add-new-resource-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/add-new-resource.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Select Resource Type

After clicking "Add Resource", you'll be able to select the resource type from a
list of options. These resource types include:

- **Database**
- **Cache**
- **Storage**
- **Message Queue**

Choose the resource type that best suits your application's needs and click
"Next."

### 3. Connect or Create

#### Connecting to an Existing Resource

If you have an existing resource that you want to use, you can connect to it by
selecting it from the list of available resources. For example, if you want to
connect to an existing database, you can select the **Database** resource type
and choose to connect to an existing database from the list of available
databases.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/conn-existing-resource-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/conn-existing-resource.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={720}
/>

Agnost will guide you through configuring your application to use it by
providing the necessary connection information.

#### Creating a New Resource

If you need to create a new resource, Agnost's UI will guide you through the
setup process. You'll be able to provide all the necessary details and
configurations for the new resource.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-new-resource-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-new-resource.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={720}
/>

This includes specifying connection information, access credentials, and any
other relevant settings.

### 4. Resource Configuration

Once you've connected an existing resource or created a new one, you can
configure it according to your specific requirements.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/example-res-def-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/example-res-def.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

Agnost's UI provides an intuitive interface for adjusting settings and
fine-tuning resource behavior.

### 5. Use the Resource in Your Application

After defining and configuring the resource, Agnost provides a straightforward
way to use it into your application. Developers can easily access and utilize
these resources in their application code.

## Example: Connecting to an Existing MongoDB Resource

When connecting to an existing MongoDB resource in Agnost, you'll follow a
two-step process that allows you to configure the connection details and options
for your MongoDB database. Below is a step-by-step guide on how to connect to an
existing MongoDB resource using the Agnost user interface:

### Step 1 of 2: Resource Selection

1. **Click "Add Resource"** in the Agnost UI to start defining a new resource.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/add-new-resource-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/add-new-resource.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

2. **Select "Connect existing"** to indicate that you want to connect to an
   existing MongoDB resource.

3. **Choose Type:** In this step, you'll choose the type of resource you want to
   connect to. Select "MongoDB" from the list of available resource types.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/conn-existing-resource-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/conn-existing-resource.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### Step 2 of 2: Connect to Existing MongoDB

In this step, you'll provide the necessary connection details for your existing
MongoDB resource.

#### Resource Name

- **Name:** Enter a unique name for your MongoDB resource. This name will be
  used to reference the resource in your Agnost environment.

#### Allowed Roles

- **Admin:** Specify the roles allowed for this MongoDB connection. You can
  choose from options like Admin, Developer, and Viewer, depending on the level
  of access required for your application.

#### Choose Type

- **MongoDB:** Confirm that you have selected "MongoDB" as the resource type.

#### Select Connection Format

- **MongoDB:** Choose the connection format that matches your MongoDB setup. You
  can select either "MongoDB" or "MongoDB + SRV" based on your configuration.

#### Connection Parameters

- **Host:** Enter the host or IP address of your MongoDB server.

- **Port:** Set the port number for the MongoDB connection. The default MongoDB
  port is 27017.

- **Username:** Provide the username for authenticating with your MongoDB
  database.

- **Password:** Enter the corresponding password for the provided username.

#### Connection Options

- **Add Another One:** If you need to configure additional MongoDB connection
  options, you can click "Add Another One" to add more parameters.

- **Add Read Replica:** If your MongoDB setup includes read replicas, you can
  add them by clicking "Add Read Replica."

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/example-res-def-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/example-res-def.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

#### Test Connection

Before finalizing the configuration, it's a good practice to test the connection
to ensure that Agnost can successfully connect to your existing MongoDB
resource. Click the "Test Connection" button to verify that the provided
connection parameters are correct and that Agnost can establish a connection to
your MongoDB database.

Once you've completed these steps and successfully tested the connection, you
can save the MongoDB resource configuration, and it will be available for use in
your Agnost environment.

By following this step-by-step guide, you can seamlessly connect to your
existing MongoDB resource within the Agnost platform, enabling you to utilize
MongoDB in your application development.
