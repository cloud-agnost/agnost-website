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

Agnost client library allows you to access the Agnost services from your
web/mobile applications. In order to use the Agnost client library you need to
create an app, deploy your app version to its environment and create an API key in Agnost.

:::info

When you create an app, Agnost creates a master version and an associated version environment for you, deploys your app
to this environment, bud does not creates an API key. **You need to manually create your app API key.** You can access the all the required information (e.g., client key,
base URL) to initialize the client library from the **Settings** view or the **Dashboard** view of your app version
in **Agnost Studio**.

:::

## Library Installation

### Using package manager

You can install the Agnost client library with package managers like
[npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) or
[pub](https://pub.dev/) for dart:

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" },{ label: "Yarn", value: "yarn" } ]}>


<TabItem value="npm">


```shell
npm install @agnost/client
```

If you're using a bundler (like [webpack](https://webpack.js.org/)), you can
import Agnost and create your Agnost client instance. The creation of client
library requires two required parameters; `baseUrl` and `apiKey`. The `baseUrl` is
the base URL of the Agnost application environment where a version of the
application is deployed and `apiKey` is the API key of your app version.

</TabItem>


<TabItem value="yarn">


```shell
yarn add @agnost/client
```

If you're using a bundler (like [webpack](https://webpack.js.org/)), you can
import the Agnost and create your Agnost client instance. The creation of client
library requires two required parameters; `baseUrl` and `apiKey`. The `baseUrl` is
the base URL of the Agnost application environment where a version of the
application is deployed and `apiKey` is the API key of your app version.

</TabItem>


</Tabs>


<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js title=" ~ /src/agnost.js"
import { createClient } from "@agnost/client";

// Create a client for interacting with Agnost backend app
// You need to provide `baseUrl` and `apiKey` as input parameters
// Optionally, you can provide `apiKey`, `signInRedirect` and `realtime` parameters
// in options. More details can be found in the Options section

let baseUrl = "https://my-cluster.com/env-myenvid";
let apiKey = "ak-f59c9ef3a53b40669c6a79a62593e153";

const agnost = createClient(baseUrl, apiKey);
```

### CDN

To install with a CDN (content delivery network) add the following script to
import Agnost client library.

```html
<script src="https://cdn.jsdelivr.net/npm/@agnost/client"></script>
```

Then you can use it from a global `agnost` variable:

```html
<script>
  const { createClient } = agnost
  // Create a client for interacting with Agnost backend app
  // You need to provide `baseUrl` and `apiKey` as input parameters
  const client = createClient(
    "http://my-cluster.com/env-myenvid",
    "f59c9ef3a53b40669b6a79a62593e153",
  )
</script>
```

</TabItem>


</Tabs>


### Initialization options

You can initialize the client library with `realtime`, `signInRedirect`, and
`localStorage` options.

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


```js
import { createClient } from "@agnost/client"

// Create a client for interacting with Agnost backend app
// You need to provide `baseUrl` and `apiKey` as input parameters
// Optionally, you can also provide `signInRedirect` and `realtime` options

let options = {
  signInRedirect: "http://localhost:3000/auth-redirect",
  realtime: {
    autoJoinChannels: false,
    bufferMessages: true,
    echoMessages: true,
    reconnectionDelay: 2000,
    timeout: 30000,
  },
};

const agnost = createClient(baseUrl, clientKey, options)
```

:::info

By default Agnost client library uses **Window.localStorage** of the browser.

- If you prefer to use a different storage handler besides
  **Window.localStorage** or if you are using the Agnost client library at the
  server (not browser) then you need to provide your storage implementation.

:::

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `createClient` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | baseUrl                       | String                            | Yes                              | The base URL of the Agnost application environment where a snapshot of the application is deployed. |
| 2   | apiKey                       | String                            | Yes                              | The API key of the app                                                                              |
| 3   | options                      | [ClientOptions](#client-options)  | No                               | Additional client library options.                                                                  |

#### Client Options

Here you can find properties for the `ClientOptions`

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" } ]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                  |
| --- | ---------------------------- | ---------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     |
| 1   | localStorage                 | [ClientStorage](https://clientapi.agnost.dev/v1.2.2/interfaces/ClientStorage.html) | No                               | If you prefer to use a different storage handler besides Window.localStorage you need to define localStorage option. You need to define an object having following methods, <br/>1. `setItem(key:string, data:object)` <br/> 2. `getItem(key:string)` <br/> 3. `removeItem(key:string)`               |
| 2   | signInRedirect               | String                                                                             | No                               | The sign in page URL to redirect the user when user's session becomes invalid. Agnost client library observes the responses of the requests made to your app backend. If it detects a response with an error code of missing or invalid session token, it can redirect the users to this sign in URL. |
| 3   | realtime                     | [RealtimeOptions](#realtime-options)                                               | No                               | The configuration parameters for websocket connections.                                                                                                                                                                                                                                               |

</TabItem>


</Tabs>


#### Realtime Options

Here you can find properties for the `RealtimeOptions`

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | autoJoinChannels             | Boolean                           | No                               | The flag to enable or prevent automatic join to channels already subscribed in case of websocket reconnection. When websocket is disconnected, it automatically leaves subscribed channels. This parameter helps re-joining to already joined channels when the connection is restored. By default `true`. |
| 2   | bufferMessages               | Boolean                           | No                               | By default, any event emitted while the realtime socket is not connected will be buffered until reconnection. You can turn on/off the message buffering using this parameter.                                                                                                                              |
| 3   | echoMessages                 | Boolean                           | No                               | The flag to enable or prevent realtime messages originating from this connection being echoed back on the same connection. By default `true`.                                                                                                                                                              |
| 4   | reconnectionDelay            | Integer                           | No                               | The initial delay before realtime reconnection in milliseconds. By default 1000 milliseconds.                                                                                                                                                                                                              |
| 5   | timeout                      | Integer                           | No                               | The timeout in milliseconds for each realtime connection attempt. By default 20000 milliseconds.                                                                                                                                                                                                           |
