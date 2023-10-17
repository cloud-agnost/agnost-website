---
sidebar_position: 4
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Middlewares

Agnost provides a user-friendly way to implement middlewares in your application
development process. Middlewares help you add custom logic and processing to
your API endpoints, enhancing their functionality. Follow these steps to
implement middlewares effectively:

1. **Navigate to the Middleware Section**

Click the `+` icon from the header in the Agnost Studio.

- Select `Middlewares` from the dropdown menu.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/middlewares-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/middlewares.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

2. **Add a New Middleware**

In the Middleware section, locate the `+ Add middleware` option.

- Click on it to open a dialog box.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/add-new-middleware-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/add-new-middleware.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

3. **Enter Middleware Name**

In the dialog box, enter a descriptive name for your middleware. This name
should reflect the purpose or functionality of the middleware.

- Click the `Save` button to create the middleware.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/define-middleware-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/define-middleware.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

4. **Write Middleware Handler Code**

After creating the middleware, you can now define the handler code for it.

- The handler code follows a pattern similar to Express middlewares in Node.js.
  You have access to the `req`, `res`, and `next` objects, allowing you to
  modify requests and responses and control the flow of execution.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/middleware-handler-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/middleware-handler.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

Here's an example of how to define a simple middleware:

```javascript showLineNumbers
const myMiddleware = (req, res, next) => {
  // Your middleware logic goes here
  // You can modify the request, response, or perform any desired actions.
  console.log("Middleware executed in Agnost!")
  // Call next() to pass control to the next middleware or route handler.
  next()
}

export default myMiddleware
```

:::tip

Maintain code consistency by adhering to the best practice of including a
mandatory **default export** for every handler function in your codebase. This
practice enhances code readability and ensures that your functions are easily
accessible when importing modules.

:::

You can add custom logic, perform authentication, validation, logging, or any
other operations within your middleware.

5. **Apply Middleware to Endpoints or APIs**

Once you've defined your middleware, you can easily apply it to specific
endpoints or APIs within Agnost.

- When configuring your API endpoints, you'll have the option to select and
  attach the middleware you created.
- This ensures that the middleware logic is executed before the endpoint's main
  handler.

By following these steps, you can seamlessly integrate middlewares into your
Agnost-based application, allowing you to add custom functionality and
processing to your APIs while maintaining a user-friendly development
experience.
