---
sidebar_position: 10
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Debugging Backend Services

Debugging backend services is essential for ensuring the smooth functioning of
your application. Agnost offers powerful debugging tools, including a dedicated
**`Tester`** accessible for specific services. Additionally, you can leverage
the console for debugging by displaying `console.log` messages.

## Using console.log

In Agnost, you can use `console.log` statements to log messages, variables, and
data during the execution of your backend code. `console.log` is a fundamental
debugging tool that allows you to output information to the console. This helps
you understand the flow of your application, identify issues, and inspect
variable values at runtime.

Here's an example of how to use `console.log` in Agnost:

```javascript showLineNumbers
const endpointHandler = async (req, res) => {
  // Debugging the req.body
  const movieData = req.body
  console.log(movieData)
  const movie = await agnost.db("mongodb").model("movies").createOne(movieData)
  // Debugging the response
  console.log(movie)
  res.json(movie)
}

export default endpointHandler
```

In this example, `console.log` is used to log messages and data related to the
request and response.

## Using the Tester for Services

To access the Tester for specific service in Agnost:

1. Visit the specific service you want to test. You will typically find a
   **`Test`** button at the top right corner or a similar location associated
   with that specific service.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/test-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/test.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={640}
/>

2. Click the **`Test`** button associated with the service you wish to test.

3. In the Tester section that opens, you can configure the details of the HTTP
   request, such as query parameters, headers, and request body.

4. Click the **`Send`** or **`Run`** button to initiate the request to the
   selected service.

5. In the same Tester section, you will also find a console section that
   displays `console.log` messages generated during the execution of the
   service's code.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/console-test-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/console-test.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

By clicking the **`Test`** button for a specific service, you can conveniently
test that specific functionality and view any `console.log` messages within the
same interface. This streamlined approach makes debugging more efficient and
allows you to diagnose issues promptly.

Combining `console.log` statements within your code with the integrated Tester
in Agnost, including the console output, provides a comprehensive debugging
solution for your backend services, helping you identify and resolve issues
effectively.
