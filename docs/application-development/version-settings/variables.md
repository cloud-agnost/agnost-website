---
sidebar_position: 4
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Environment Variables

In the **Environment Variables** section of Version Settings in Agnost, you have
the ability to manage environment variables that play a pivotal role in
configuring and customizing your application's behavior. These variables are
crucial for securely storing sensitive information, configuration values, and
secrets. This section offers a comprehensive overview of how to interact with
existing environment variables and how to add new ones.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/env-vars-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/env-vars.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Adding New Environment Variables

To add a new environment variable, follow these steps:

1. Click the **"Add Variable"** button.

2. In the dialog that appears, you can specify the following information for the
   new environment variable:

   - **Name**: Enter a name for the variable. This name should be descriptive
     and indicative of the purpose of the variable.

   - **Value**: Enter the value associated with the variable. This could be a
     secret key, configuration setting, or any other sensitive information.

3. After providing the necessary details, click **"Save"** to create the new
   environment variable.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/env-add-var-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/env-add-var.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={640}
/>

By adding environment variables in this manner, you can securely store and
manage sensitive information and configuration settings for your application.
These variables are often used within your application's code to access critical
resources and settings.

Environment variables are a best practice for handling configuration data in a
secure and flexible way. They allow you to separate configuration from your
code, making it easier to manage and update settings without modifying your
application's source code directly.
