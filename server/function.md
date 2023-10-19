---
sidebar_position: 5
description:
  With Agnost, you can run functions in the server side. You can use the server
  library to access the Agnost services from your Agnost Studio environment.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Function

The agnost.func object provides a method called run that allows you to execute
custom helper functions. You can call this method with any number of parameters,
but it's important to ensure that the parameter structure aligns with your
helper function's parameter definitions.

### Run a function

You can use the `run` method to execute your custom helper functions. The `run`
method takes the name of the function and the parameters of the function as
parameters. The `run` method returns a promise that resolves to the response of
the function execution.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
// Define your custom helper function parameters
const param1 = "Hello"
const param2 = "World"

try {
  const result = await agnost.func.run(param1, param2)
  console.log("Function result:", result)
} catch (error) {
  console.error("Error executing custom function:", error)
}
```

</TabItem>


</Tabs>


#### Parameters

Here are the parameters for the `run` method:

| #   | Name    | Data Type | Required | Description                                                                            |
| --- | ------- | --------- | -------- | -------------------------------------------------------------------------------------- |
| 1   | ...args | any[]     | No       | Rest parameter that allows you to pass any number of arguments to the helper function. |

<DetailedResponse title="Returns">


- `Promise<any>`: If successful, the `run` method returns the output of the
  helper function.

</DetailedResponse>


:::info

This method is designed to execute custom code, enabling you to extend the
functionality of your application. Make sure to pass the correct parameters to
match your helper function's requirements.

:::
