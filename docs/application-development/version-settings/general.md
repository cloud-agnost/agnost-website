---
sidebar_position: 1
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# General Settings

In the General section of Version Settings in Agnost, you can configure various
settings related to your application version. This includes defining the **API
Server Base URL**, specifying the **Version Name**, and managing access control
through options like **Read Only**. Additionally, you can set up Endpoint
Default Rate Limiters to control how frequently users can call specific
endpoints within your app.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/v-general-settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/v-general-settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

## API Server Base URL

The **API Server Base URL** serves as the foundation for your API server's
endpoints. It defines the root URL where all API requests will be directed. You
can find your API Server Base URL at:

[https://cloudflex.app/env-6hny6q1sihxf](https://cloudflex.app/env-6hny6q1sihxf)

## Version Name

The **Version Name** represents the name of your current application version
within your Agnost Cluster. This name helps identify and differentiate various
versions of your application. Ensure that the Version Name is concise and does
not exceed **64 characters** in length.

By clicking **"Save,"** you can apply and save any changes made to the General
settings of your application version.

## Read Only

Enabling the **Read Only** option sets this version as read-only. When this
option is selected, team members, except those with Admin rights, will only have
permission to view this version. They will not be able to make updates or
modifications.

## Endpoint Default Rate Limiters

Rate limiting is a crucial feature that helps control the frequency of API calls
to your application's endpoints. It prevents abuse and can safeguard against
certain malicious activities. You can define multiple rate limiters, and they
will be applied sequentially to incoming requests.

### Rate Limiters

- **Add Rate Limiter:** Click this option to define rate limiters for your
  endpoints. Rate limiters allow you to specify limits on how frequently a
  specific endpoint can be accessed within a defined timeframe.

- **No rate limit selected:** If no rate limiter is selected, there will be no
  rate limiting applied to the endpoints by default.

In summary, the General settings in Version Settings provide essential
configuration options for your application version, including defining the API
Server Base URL, setting the Version Name, controlling read-only access, and
configuring rate limiters for your endpoints. These settings help you manage and
control the behavior of your application effectively.
