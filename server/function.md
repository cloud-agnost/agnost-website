---
sidebar_position: 5
description:
  With Agnost, you can run functions in the server side. You can use the server
  library to access the Agnost services from your Agnost Studio environment.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Helper functions

The Function object in the Agnost server side library provides a `run` method that allows you to execute
custom helper functions. You can call this method with any number of parameters,
but it is important to ensure that the parameter structure aligns with your
helper function's parameter definitions.

Helper functions are utility functions that can be called from your handler methods, middlewares and also other helper functions.

### Run a function

You can use the `run` method to execute your custom helper function. The `run`
method takes the exact parameters of the function that you are calling, runs your helper function and returns a promise that resolves to the response of the function execution.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">

```js
// Assuming that you have created a function called generateSlug in Agnost studio
import { customAlphabet } from "nanoid";

const generateSlug = async (length) => {
  // Generates a random slug
  const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
  const nanoid = customAlphabet(alphabet, length);
  return nanoid();
};

export default generateSlug;
```

</TabItem>


</Tabs>


<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>

<TabItem value="javascript">

```js
// You can call this function in any handler, middleware other function code
import { agnost } from "@agnost/server";

const endpointHandler = async (req, res) => {
  const userData = req.body;
  userData.slug = await agnost.func("generateSlug").run(16);

  const result = await agnost.db("postgres").model("users").createOne(userData);
  res.json(result);
};

export default endpointHandler;
```

</TabItem>


</Tabs>




#### Parameters

Here are the parameters for the `run` method:

| #   | Name    | Data Type | Required | Description                                                                            |
| --- | ------- | --------- | -------- | -------------------------------------------------------------------------------------- |
| 1   | ...args | any[]     | No       | The input parameters of the function (defined by the developer). |
