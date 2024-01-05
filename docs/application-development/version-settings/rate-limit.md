---
sidebar_position: 5
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Rate Limit Settings

In the Rate Limits section of Version Settings in Agnost, you have the
capability to configure rate limit settings that help control the frequency and
volume of requests or calls made to your application's endpoints. Rate limiting
is a critical aspect of application security and performance optimization. This
section provides detailed insights into how to define rate limiters for your
application.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/s-rate-limiter-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/s-rate-limiter.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Add Rate Limiter

To create a new rate limiter, follow these steps:

1. Click the **"Add Rate Limiter"** button to initiate the rate limiter setup
   process.

2. In the ensuing dialog, you will be prompted to provide the following
   information for the rate limiter:

   - **Rate Limit Name**: Enter a descriptive name for the rate limiter. This
     name should succinctly convey the purpose or nature of the rate limiting.

   - **Max Request Count**: Specify the maximum number of requests or calls
     allowed within the defined rate limit duration.

   - **Duration/Timeframe per Second**: Enter the duration of the measurement in
     seconds. This defines the timeframe during which the rate limit is applied.

   - **Error Message**: Configure the error message that will be returned to the
     calling party when the rate limit is exceeded. This message should inform
     users of the rate limit breach and advise them on what to do next.

3. After entering the requisite details, you can choose to either **"Cancel"**
   to discard the rate limiter configuration or click **"Save"** to save the new
   rate limiter settings.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/s-add-rate-limiter-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/s-add-rate-limiter.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={620}
/>

Rate limiters play a vital role in safeguarding your application against
excessive traffic, potential abuse, and ensuring fair usage of your resources.
They help maintain the integrity and stability of your application by enforcing
restrictions on the number of requests made within specified timeframes.

By defining rate limiters in your application, you can effectively manage and
control incoming traffic, prevent resource exhaustion, and enhance the overall
security and performance of your system. Rate limiting is especially useful in
scenarios where API endpoints are exposed to the public or used by external
consumers.
