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
an app, deploy your app to an environment and a API key in Agnost.

:::info

When you create an app, Agnost creates an environment for you, deploys your app
to this environment and creates a master client key that you can custimize later
by default. You can access the all the required information (e.g., client key,
base URL) to initialize the client library from the **Home** view of you app in
**Agnost Studio**.

:::

### Creating an account in Altogic

To create an account in Altogic, you can visit the
[Studio](https://studio.agnost.com/auth/signup) which is the core visual
development tool that you use to design, develop and deploy your backend
applications.

### Creating an app

You can create an app with the [Studio](https://studio.agnost.com). To create an
app via the Designer:

1. Log in to Agnost with your credentials.
2. Select **New app**.
3. In the **App name** field, enter a name for the app.
4. In the **Sub domain** field, enter a sub-domain for the app.
5. In the **Execution environment region** field, select a region for the app.
   This will be the location where your app's initial environment will be
   created.
6. In the **Execution environment pricing plan** field, select available pricing
   plan for your environment.
7. In starter templates section, select the **Basic** template
8. Select **Create**.
9. **Click/tap on the newly created app** to launch the app.

<BrowserWindow url="https://studio.agnost.com">
  <ImageSwitcher
    lightImageSrc="/img/client/create-app-l-a.png?text=LightMode"
    darkImageSrc="/img/client/create-app-d-a.png?text=DarkMode"
    className={ilCss.illustration__md}
    width={653}
  />
</BrowserWindow>

### Creating client key

You can create a client key to control access to your app's services and define
the access rights of each of the key modules of the client library. When you
create a new application your client key will be automatically created for you.

You can create a new client key and manage existing ones using the Designer. To
create a client key via the [Studio](https://studio.agnost.com):

1. **Launch** the **Designer**.
2. From your workspace, selec the application that you would like to manage its
   client keys.
3. Click/tap on **App Settings** at the left-bottom of the designer.
4. Click/tap on **Client library keys** section.
5. Click/tap on **New client key** button.
6. In the **Client key name** field, enter a client key name for the app.

<BrowserWindow url="https://studio.agnost.com">
  <ImageSwitcher
    lightImageSrc="/img/client/client-lib-keys-l.png?text=LightMode"
    darkImageSrc="/img/client/client-lib-keys-d.png?text=DarkMode"
    className={ilCss.illustration__md}
    width={820}
  />
</BrowserWindow>

6. (Optional) In order to protect your application, Agnost can restrict the
   client library to make calls only from "Authorized Domains". In the
   **Advanced** section, by selecting **Only authorized domains** you can
   restrict domains of the client key.
7. (Optional) Agnost can cap the client library RESTful API requests, namely the
   requests made from database, cache, storage, message queue and task modules
   in a specific timeframe. Agnost can also cap the number of realtime messages
   that can be sent in a specific timeframe. In the **Rate limiting** section,
   you can set the RESTful API and Realtime rate limiters.

<BrowserWindow url="https://studio.agnost.com">
        <ImageSwitcher
          lightImageSrc="/img/client/create-client-key-l-a.png?text=LightMode"
          darkImageSrc="/img/client/create-client-key-d-a.png?text=DarkMode"
          className={ilCss.illustration__md}
          width={646}/>


</BrowserWindow>


### Getting environment url

You can create a new environment or access existing app's **envUrl** from the
**Environments** view in Agnost [Studio](https://studio.agnost.com).

There are two types of **envUrl** that you can use when creating your Altogic
client; **subdomain** or **base URL**. You can send a request to Altogic
services using any of the **base URL** or **subdomain** information. The
subdomain information can be updated via the Environment view, but the default
base URL information cannot be changed. If you want to access Agnost services
using different libraries (E.g., http, fetcher, axios), we recommend you to use
your base URL information. To get the **envUrl** via the
[Studio](https://studio.agnost.com):

1. **Launch** the **Designer**.
2. Click/tap on **Environments** at the left-bottom of the designer.
3. Click/tap name of the **Environment**
4. Scroll down to **API BASE URL** section.
5. Copy **subdomain** or **environment url**.

<BrowserWindow url="https://studio.agnost.com">
        <ImageSwitcher
          lightImageSrc="/img/client/api-base-url-l.png?text=LightMode"
          darkImageSrc="/img/client/api-base-url-d.png?text=DarkMode"
          className={ilCss.illustration__md}
          width={820}/>


</BrowserWindow>


### Creating an API key (Optional)

As an option, you might also need to get your `apiKey` which is used to manage
access to your cloud functions. The access rights of your app endpoints are
managed through API keys in your environments. To create an API key via the
[Studio](https://studio.agnost.com):

1. **Launch** the **Designer**.
2. Click/tap on **Environments** at the left-bottom of the designer.
3. Click/tap name of the **Environment**
4. Click/tap on **API Keys** section.
5. Create a new API Key by clicking on **New API Key** button.

<BrowserWindow url="https://studio.agnost.com">
        <ImageSwitcher
          lightImageSrc="/img/client/create-api-key-l.png?text=LightMode"
          darkImageSrc="/img/client/create-api-key-d.png?text=DarkMode"
          className={ilCss.illustration__md}
          width={820}/>


</BrowserWindow>


:::info

The API key is different than the `clientKey` used when creating an instance of
Agnost client library. `clientKey` is primarily used to manage access rigths of
the client library whereas `apiKey` is used to manage access to your app
endpoints.

The main reason why there are two different keys is that **you can call your app
cloud functions using any other http client (e.g., axios, fetch) using the API
key and you are not restricted to use Altogic's client library.** However, we
strongly recommend using our client library which significantly eases app
development and integration of your frontend to your Agnost backend.

:::

## Library Installation

### Using package manager

You can install the Agnost client library with package managers like
[npm](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) or
[pub](https://pub.dev/) for dart:

<Tabs defaultValue="npm" values={[ { label: "npm", value: "npm" },{ label: "Yarn", value: "yarn" },{ label: "Dart", value: "dart" } ]}>


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


<TabItem value="dart">


```shell
flutter pub add agnost
```

Or only dart:

```shell
dart pub add agnost_dart
```

</TabItem>


</Tabs>


<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" },{ label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js title=" ~ /src/agnost.js"
import { createClient } from "agnost"

// Create a client for interacting with Agnost backend app
// You need to provide `envUrl` and `clientKey` as input parameters
// Optionally, you can provide `apiKey`, `signInRedirect` and `realtime` parameters
// in options. More details can be found in the Options section

let envUrl = "https://c1-na.agnost.dev/e:6233230ba1c78fcb1ad5919a"
let clientKey = "f59c9ef3a53b40669c6a79a62593e153"

const agnost = createClient(envUrl, clientKey)
```

### CDN

To install with a CDN (content delivery network) add the following script to
import Agnost client library.

```html
<script src="https://cdn.jsdelivr.net/npm/agnost"></script>
```

Then you can use it from a global `agnost` variable:

```html
<script>
  const { createClient } = agnost
  //Create a client for interacting with Agnost backend app
  //You need to provide `envUrl` and `clientKey` as input parameters
  const client = createClient(
    "https://c1-na.agnost.dev/e:6233230ba1c88fcb1ad5919a",
    "f59c9ef3a53b40669b6a79a62593e153",
  )
</script>
```

</TabItem>


<TabItem value="dart">


```dart
import 'package:agnost/agnost.dart';

// Create a client for interacting with Agnost backend app
// You need to provide `envUrl` and `clientKey` as input parameters
// Optionally, you can provide `apiKey`, `signInRedirect` and `realtime` parameters
// in options. More details can be found in the Options section

final envUrl = "https://c1-na.agnost.dev/e:6233230ba1c78fcb1ad5919a";
final clientKey = "f59c9ef3a53b40669c6a79a62593e153";

final agnost = createClient(envUrl, clientKey);
```

</TabItem>


</Tabs>


### Initialization options

You can initialize the client library with `apiKey`, `signInRedirect`, and
`localStorage` options.

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


```js
import { createClient } from "agnost"

// Create a client for interacting with Agnost backend app
// You need to provide `envUrl` and `clientKey` as input parameters
// Optionally, you can also provide `apiKey`, `signInRedirect` and `realtime` options

let options = {
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYyYzE0MDQ5...",
  signInRedirect: "http://localhost:3000/auth-redirect",
  realtime: {
    autoJoinChannels: false,
    bufferMessages: true,
    echoMessages: true,
    reconnectionDelay: 2000,
    timeout: 30000,
  },
}

const agnost = createClient(envUrl, clientKey, options)
```

:::info

By default Agnost client library uses **Window.localStorage** of the browser.

- If you prefer to use a different storage handler besides
  **Window.localStorage** or if you are using the Agnost client library at the
  server (not browser) then you need to provide your storage implementation.

:::

</TabItem>


<TabItem value="dart">


```dart
import 'package:agnost/agnost.dart';

// Create a client for interacting with Agnost backend app
// You need to provide `envUrl` and `clientKey` as input parameters
// Optionally, you can also provide `apiKey`, `signInRedirect` and `realtime` options

final options = ClientOptions(
  apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYyYzE0MDQ5...',
  signInRedirect: (context) {
    // do something
  },
  realtime: RealtimeOptions(
    autoJoinChannels: false,
    bufferMessages: true,
    echoMessages: true,
    reconnectionDelay: 2000,
    timeout: 30000
  )
);

final agnost = createClient(envUrl, clientKey, options);
```

:::info

By default [agnost](https://pub.dev/packages/agnost) package uses
[shared_preferences](https://pub.dev/packages/shared_preferences) package.

- If you prefer to use a different storage handler besides
  **shared_preferences** then you need to provide your `ClientStorage`
  implementation.

:::

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `createClient` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1   | envUrl                       | String                            | Yes                              | The base URL of the Agnost application environment where a snapshot of the application is deployed. |
| 2   | clientKey                    | String                            | Yes                              | The client library key of the app                                                                   |
| 3   | options                      | [ClientOptions](#client-options)  | No                               | Additional client library options.                                                                  |

#### Client Options

Here you can find properties for the `ClientOptions`

<Tabs groupId="dev" defaultValue="javascript" values={[ { label: "Javascript", value: "javascript" }, { label: "Dart", value: "dart" } ]}>


<TabItem value="javascript">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | ---------------------------- | ---------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | apiKey                       | String                                                                             | No                               | The unique app environment API Key which needs to be created using the Designer. The `apiKey` is passed in _Authorization Header_ when making RESTful API calls to your app endpoints. This key is different than the `clientKey` used when creating an instance of Agnost client library. `clientKey` is primarily used to manage access rigths of the client library whereas `apiKey` is used to manage access to your app endpoints. |
| 2   | localStorage                 | [ClientStorage](https://clientapi.agnost.dev/v1.2.2/interfaces/ClientStorage.html) | No                               | If you prefer to use a different storage handler besides Window.localStorage you need to define localStorage option. You need to define an object having following methods, <br/>1. `setItem(key:string, data:object)` <br/> 2. `getItem(key:string)` <br/> 3. `removeItem(key:string)`                                                                                                                                                 |
| 3   | signInRedirect               | String                                                                             | No                               | The sign in page URL to redirect the user when user's session becomes invalid. Agnost client library observes the responses of the requests made to your app backend. If it detects a response with an error code of missing or invalid session token, it can redirect the users to this sign in URL.                                                                                                                                   |
| 4   | realtime                     | [RealtimeOptions](#realtime-options)                                               | No                               | The configuration parameters for websocket connections.                                                                                                                                                                                                                                                                                                                                                                                 |

</TabItem>


<TabItem value="dart">


| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p>                                                  | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | ---------------------------- | ---------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | apiKey                       | String                                                                             | No                               | The unique app environment API Key which needs to be created using the Designer. The `apiKey` is passed in _Authorization Header_ when making RESTful API calls to your app endpoints. This key is different than the `clientKey` used when creating an instance of Agnost client library. `clientKey` is primarily used to manage access rigths of the client library whereas `apiKey` is used to manage access to your app endpoints. |
| 2   | localStorage                 | [ClientStorage](https://clientapi.agnost.dev/v1.2.2/interfaces/ClientStorage.html) | No                               | If you prefer to use a different storage handler besides Window.localStorage you need to define localStorage option. You need to define an object having following methods, <br/>1. `setItem(key:string, data:object)` <br/> 2. `getItem(key:string)` <br/> 3. `removeItem(key:string)`                                                                                                                                                 |
| 3   | signInRedirect               | void Function(BuildContext? context)                                               | No                               | The sign in page URL to redirect the user when user's session becomes invalid. Agnost client library observes the responses of the requests made to your app backend. If it detects a response with an error code of missing or invalid session token, it can call the callback.                                                                                                                                                        |
| 4   | realtime                     | [RealtimeOptions](#realtime-options)                                               | No                               | The configuration parameters for websocket connections.                                                                                                                                                                                                                                                                                                                                                                                 |

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
