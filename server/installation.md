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

## Pre-requisites

Agnost server library allows you to access the Agnost services from your Agnost
Studio environment. In order to use the Agnost server library you need to create
an app, and version of your app in Agnost Studio.

:::info

When you create a version, Agnost creates an environment for you, deploys your
app to this environment and creates a master API key that you can customize
later by default. You can access the all the required information (e.g., API
key, base URL) to initialize the client library from the **Home** view of you
app in **Agnost Studio**.

:::

## Library Installation

### Using package manager

You can install the Agnost server library with package managers like
[npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) :

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" },{ label: "Yarn", value: "yarn" }]}>


<TabItem value="npm">


```shell
npm install agnost
```

If you're using a bundler (like [webpack](https://webpack.js.org/)), you can
import the Agnost and create your Agnost client instance. The creation of client
library requires two required parameters; `envUrl` and `clientKey`. The `envUrl`
is the base URL of the Agnost application environment where a snapshot of the
application is deployed and `clientKey` is the client library key of your app.

</TabItem>


<TabItem value="yarn">


```shell
yarn add agnost
```

If you're using a bundler (like [webpack](https://webpack.js.org/)), you can
import the Agnost and create your Agnost client instance. The creation of client
library requires two required parameters; `envUrl` and `clientKey`. The `envUrl`
is the base URL of the Agnost application environment where a snapshot of the
application is deployed and `clientKey` is the client library key of your app.

</TabItem>


</Tabs>
