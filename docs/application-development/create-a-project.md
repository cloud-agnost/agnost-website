---
sidebar_position: 1
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# New Agnost Project

Creating a new project in Agnost involves defining your organization,
application, versions, and resources. Each application is fully customizable to
fit your unique needs. Here's a step-by-step guide on how you can create a new
Agnost project:

1. **Create a New Application:** Inside your organization, click on the
   **`Create Application`** button. You'll need to enter the name of
   application. Click **`Create`** when you're done.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/apps-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/apps.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

2. **Define Resources:** Each application in Agnost can have multiple resources.
   These resources include databases, caches, message queues, etc. To add a
   resource, click on the **`Add Resource`** button and choose the type of
   resource you want to add. You'll need to provide necessary details for the
   resource. If it's a database, for instance, you might need to provide details
   like the database type (MySQL, Oracle, MSSQL, etc.), host, port, username,
   password, etc. You also have the option to connect to an existing resource or
   create a new one. For details on how to define resources, refer to the
   [Resource Definition](/docs/application-development/resource-definition)

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/resources-new-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/resources-new.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

3. **Create a Version:** For each application, you can create multiple versions.
   These versions work similar to branches in git, allowing you to work on
   different features or bug fixes independently. To create a new version, open
   the master version and click on the **`Create a Copy`** button, provide the
   necessary details, and click **`Create`**.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-version-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-version.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

4. **Develop Your Application:** Once you've set up your organization,
   application, resources, and versions, you can start developing your
   application. Agnost provides a visual interface for designing your
   application, where you can define data models, create endpoints, schedule
   cron jobs, and more.

Creating a new project in Agnost sets the foundation for your application
development. Once the project is set up, you can iteratively develop, test, and
deploy your application, ensuring a seamless software development lifecycle. In
the next section, we'll explore Application Development > Resource Definition.
