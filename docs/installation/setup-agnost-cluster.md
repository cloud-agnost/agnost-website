---
sidebar_position: 8
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Setup Agnost Cluster

Setting up your Agnost environment involves configuring the resources for your
applications. This section walks you through the essential steps to correctly
configure your Agnost environment for application development.

### Step 1: Create Your Agnost Account

1. **Visit the Agnost Studio** at the URL or IP address of your Agnost cluster
   on your web browser **(e.g., http(s)://your cluster URL or IP)**. If you have
   installed your cluster locally, you can access the Agnost Studio at
   [http://localhost](http://localhost).

2. **To begin**, you need to create your Agnost account. Provide your email
   address, choose a strong password, and enter your name.

3. Click the "Next" button to **register your Agnost account**.

   :::tip

   Ensure that you use a **strong and secure password** to protect your Agnost
   account.

   :::

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/1light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/1.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

### Step 2: Establish Your Organization

An organization groups together related applications, making it easier to manage
applications. After creating your account, you will need to set up your
organization.

1.  **Enter the name for your organization**, which can be your company name or
    any relevant identifier.

2.  **Click the "Next"** button to create your organization.

    :::note

    If you're working individually or within a small team, you can use your name
    or a project name as your organization.

    :::

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/2light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/2.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

### Step 3: Create Your First Application

Within your organization, you can create your first application. Each
application you create in Agnost represents a distinct project or application
you're developing.

1. **Provide a meaningful name** for your application, such as "MyApp" or
   "ProjectX."

2. **Click the "Next"** button to establish your first application.

   :::tip

   The application name should reflect the purpose or identity of your project.

   :::

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/3light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/3.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

:::caution Enterprise Version Exclusive

Please note that from **Step 4** onwards, the configuration steps and features
discussed are **exclusively available in the enterprise version of Agnost**. If
you are using the community version, you may not have access to these advanced
capabilities. Make sure to check your Agnost subscription to ensure you have
access to these features.

:::

### Step 4: Configure SMTP Settings (Optional)

Agnost allows you to **configure SMTP settings for email notifications** and
other communication within your organization. This step is **optional**, and you
can skip it if you don't need SMTP configuration.

1. If you choose to configure SMTP, **provide the following information**:

   - **Host:** The SMTP server hostname or IP address.
   - **Port:** The port number to connect to the SMTP server.
   - **User:** Your SMTP username.
   - **Password:** Your SMTP password.
   - **TLS:** Select this option if your SMTP server requires TLS encryption.

2. **You can also skip this step** and configure SMTP settings later if needed.

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/4light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/4.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

### Step 5: Invite Team Members

Collaborating with a team? You can invite team members to join your Agnost
organization. Specify their email addresses and assign roles: **"admin"**,
**"developer"** or **"viewer"**

1. Team members with the "admin" role have full access to configure and manage
   resources, while "developer" and "viewer" roles have more limited access
   based on their respective permissions.

2. **Click the "Finish"** button to send invitations.

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/5light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/5.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

You have now successfully set up your Agnost Cluster. **You can start building
and configuring resources for your applications within Agnost.**

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/6light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/6.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

1. **Click the Organization name** and view your applications.

<ImageSwitcher
  lightImageSrc="/img/docs/installation/setup/7light.png?text=LightMode"
  darkImageSrc="/img/docs/installation/setup/7.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={800}
/>

2. **Click the application name** and view your versions.

If you have any questions or need advanced features, refer to the Agnost
documentation for detailed guidance.

In the following sections, we'll explore more advanced Agnost features,
including monitoring tools, scaling options, and more. Stay tuned!
