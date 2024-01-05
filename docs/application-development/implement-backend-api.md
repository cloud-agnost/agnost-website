---
sidebar_position: 3
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Implementing Backend APIs

In Agnost, implementing backend APIs is a crucial step in building your
application's functionality. This section will guide you through the process of
creating and configuring backend APIs using Agnost's user-friendly interface.

:::note

Agnost uses the **Node.js Express framework** to handle API requests and
responses. When working with Agnost's backend APIs, it's essential to understand
the `req` and `res` objects, which are common terminologies in Express-based
applications. The `req` object represents the incoming HTTP request, while the
`res` object represents the HTTP response that your API will send back.

For comprehensive information on working with `req` and `res` objects and
understanding Express.js, please refer to the
[Express.js documentation](https://expressjs.com/).

:::

Here are the steps you can follow to implement backend APIs in your Agnost
project:

## Creating a Backend API

To implement a backend API in Agnost, follow these steps:

### 1. Access the Endpoint Creation Page

In the Agnost Studio, click on the **+** icon located in the header to access
the options menu.

- From the dropdown menu, select **Endpoint** to navigate to the Endpoint
  section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/new-endpoint-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/new-endpoint.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Create a New Endpoint

In the Endpoint section, you'll have the option to **+ Create endpoint** to
define a new API endpoint.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-endpoint-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-endpoint.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

A dialog box will appear, asking you to provide the following details for your
new API endpoint:

- **Endpoint Name:** Enter a descriptive name for your API endpoint. This name
  should reflect the functionality or purpose of the endpoint within your
  application.

- **Timeout:** Specify the timeout duration for the endpoint, which determines
  how long the server will wait for a response from the API before timing out.

- **Method:** Choose the HTTP method for the API endpoint (e.g., GET, POST, PUT,
  DELETE) to specify the type of request it will handle.

- **Path:** Define the endpoint's URL path, indicating where the API will be
  accessible (e.g., "/api/users").

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/example-endpoint-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/example-endpoint.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### 3. Configure Endpoint Options

Agnost provides several options that you can configure for your API endpoint to
customize its behavior. Here are some of the available options:

#### API Key Required

- **Require a valid API key to call this endpoint:** Enable this option if you
  want to restrict access to the endpoint only to clients that provide a valid
  API key in their requests. This enhances security and access control.

#### Session Required

- **Require a valid session token in "Session" header of the request:** Enable
  this option if your API requires users to be authenticated with a valid
  session token. This ensures that only authenticated users can access the
  endpoint.

#### Log Execution

- **Log endpoint request, response, status, and execution duration:** Enabling
  this option will log detailed information about each request made to the
  endpoint, including request and response data, HTTP status codes, and
  execution duration. This can be useful for monitoring and debugging.

### 4. Adding Rate Limiter

To add rate limiting to your endpoint, scroll down to the **RATE LIMITERS**
section.

- Click the **+ Add Rate Limiter** button to configure rate limiting for your
  API endpoint. Define the rate limiting settings to control the number of
  requests allowed within a specified time frame.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/rate-limiter-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/rate-limiter.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### 5. Adding Middleware

Agnost allows you to enhance the functionality of your API endpoints by adding
middleware. Middleware are components that can process requests and responses
before they reach the endpoint's core logic.

To add middleware to your API, navigate to the **MIDDLEWARES** section.

- Click the **+ Add Middleware** button to add middleware components that
  perform specific tasks, such as authentication, request validation, or data
  transformation. You can choose from a list of available middleware or create
  custom middleware to suit your requirements.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/middleware-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/middleware.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### 6. Write the Handler Code

This is where you provide the logic for your endpoint. Click on the **Edit**
button or the name of the endpoint to open the code editor and write the handler
code for your endpoint.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/endpoint-list-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/endpoint-list.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

The handler code is written in JavaScript. It takes a request object as an
argument, processes the request based on the logic you define, and returns a
response. The request object contains the request parameters, body, headers,
etc. You can use various libraries and services provided by Agnost in your
handler code, such as database operations, caching, queuing, etc.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/endpoint-handler-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/endpoint-handler.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={720}
/>

Here's an example of a handler code that adds a new movie to the "movies"
database:

```js
const endpointHandler = async (req, res) => {
  const movieData = req.body
  const movie = await agnost.db("movies").model("movie").createOne(movieData)
  res.json(movie)
}

export default endpointHandler
```

:::tip

Maintain code consistency by adhering to the best practice of including a
mandatory **default export** for every handler function in your codebase. This
practice enhances code readability and ensures that your functions are easily
accessible when importing modules.

:::

### 7. Test the Endpoint

Once you've written the handler code for your endpoint, you can test it to
ensure that it works as expected. Agnost provides a built-in testing tool that
allows you to test your API endpoints with ease. To test your endpoint, click
the **Test** button located in the header of the code editor. This will open the
testing tool, where you can provide the necessary request parameters and test
the endpoint.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/testing-endpoint-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/testing-endpoint.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

Agnost Studio ensures a seamless experience in implementing backend APIs by
providing a visual interface for defining the endpoints, middlewares,
rate-limiters, writing handler code, testing, and deploying the API. This way,
you can focus more on developing your application logic, while Agnost takes care
of the rest.

Happy API development with Agnost!
