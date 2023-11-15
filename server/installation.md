---
sidebar_position: 2
description: Welcome to Agnost client library documentation.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import BrowserWindow from "@site/src/components/BrowserWindow"
import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../src/css/illustration.module.css"

# Installation

In order to use the Agnost server library you need to create an app, and a version of your app in Agnost Studio. Each version has its dedicated execution environment called `API server` which is deployed as a [Knative](https://knative.dev/docs/) service (a.k.a. serverless function). 

:::info
**You do not need to install the Agnost Server side library to your applications.** This library is automatically installed and a client instance is created that you can use in places where you write your code, such as endpoint handler, message queue handler, cron job handler, middlewares and helper functions.
:::

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
// Using Agnost server side library through importing "agnost" server side client
import { agnost } from "@agnost/server";

const endpointHandler = async (req, res) => {
  const userData = req.body;
  
  const result = await agnost
    .db("marketplace")
    .model("users")
    .createOne(userData);

  res.json(result);
};

export default endpointHandler;
```

</TabItem>


</Tabs>

