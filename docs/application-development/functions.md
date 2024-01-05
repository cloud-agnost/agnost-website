---
sidebar_position: 5
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Functions

## Creating Functions in Agnost

Agnost simplifies the process of creating and utilizing custom functions within
your applications. Functions are similar to utility or helper functions that
enhance the functionality of your Agnost server-side library. This section will
guide you through the steps to create and use functions effectively.

### Step 1: Create a New Function

1. Click the **`+`** icon located in the header of your Agnost interface.
2. From the dropdown menu, select **Function**.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/functions-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/functions.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### Step 2: Define the Function

In the Function tab, you will find the option to `+ Create function` in the tab.
Follow these steps to define your function:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-function-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-function.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

1. Enter a **Function Name**: Give your function a unique and descriptive name
   that reflects its purpose.
2. Click **Save** to confirm the creation of your function.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/function-details-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/function-details.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### Step 3: Writing Function Handler Code

Once you've created your function, you can write the handler code for it. The
handler code defines the functionality of your function, specifying what it does
when called.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/function-handler-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/function-handler.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### Using Custom Functions in Agnost

After creating and defining your custom functions, you can easily integrate them
into your Agnost server-side library using the following format:

```javascript
agnost.func('functionName').('input')
```

- **'functionName'**: Replace this with the actual name of your custom function
  that you defined earlier.
- **'input'**: Provide the necessary input parameters or data required by your
  custom function.

Here's an example of how to use a custom function within your Agnost
application:

```javascript
const result = agnost.func('epochConverter').(unixTimestamp);
```

In this example, we assume that you have a custom function named
'epochConverter' that coverts the epoch time to date time. You pass the
'unixTimestamp' as input to the function, and it returns the converted date
time.

By following these steps, you can easily create, define, and use custom
functions in Agnost to extend the functionality of your applications and
simplify your development process.
