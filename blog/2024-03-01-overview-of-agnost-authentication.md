---
title: Overview of Agnost's Authentication Module
slug: overview-of-agnosts-authentication
author: Deniz Colak
author_title: Community Author
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  In this blog post, we'll dive into authentication module of Agnost, exploring
  its key features, benefits, and how to integrate it into your projects.
keywords:
  - authentication
  - agnost
  - features
image: /img/blog/2024-03-01/banner.png
tags: [authentication, agnost]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<head>
  <title>Integrating Agnost Authentication into Your Projects</title>
  <meta
    property="og:title"
    content="Integrating Agnost Authentication into Your Projects"
  />
  <meta
    name="twitter:title"
    content="Integrating Agnost Authentication into Your Projects"
  />
</head>

In the rapidly evolving world of software development, the quest for more
efficient, secure, and scalable solutions is never-ending. Agnost is **an
open-source App Development Platform** designed to simplify the backend
development process, offering an all-in-one solution that includes an
application server, database, authentication, queues, cache, cronjobs, and
real-time capabilities. Today, we're diving into one of the key modules of
Agnost: its authentication module.

## Understanding Agnost's Authentication Module

Agnost's authentication module stands out as a cornerstone for building secure
and scalable backend applications. By offering a flexible and straightforward
way to manage user accounts, **Agnost ensures that developers can focus on
creating exceptional user experiences without the hassle of implementing complex
authentication systems from scratch.**

## Overview of Agnost's Authentication Module

At its core, Agnost's authentication module is built to be intuitive, secure,
and highly scalable. It leverages modern security protocols and standards to
ensure that applications built on Agnost are fortified against unauthorized
access, all while providing a seamless user experience. Whether you're
developing a small-scale project or an enterprise-grade application, Agnost's
authentication module is designed to meet your needs with minimal overhead.

It's built on top of the [JWT](https://jwt.io/) standard, which is a secure and
reliable way to transmit information between parties. Agnost's authentication
module is designed to be **flexible and easy to use**, offering a wide range of
features that can be tailored to fit the needs of any project.

Here are some of the key features of Agnost's authentication module:

- **User Registration**: Agnost provides a simple and secure way to register new
  users, ensuring that their data is stored safely and efficiently.

- **User Authentication**: Agnost's authentication module offers a seamless way
  to authenticate users, ensuring that only authorized users can access the
  application.

- **Password Reset**: Agnost's authentication module includes a straightforward
  way to reset user passwords, ensuring that users can regain access to their
  accounts quickly and securely.

- **Social Authentication**: Agnost's authentication module supports social
  login providers such as Google, Facebook, and Twitter, offering a seamless way
  for users to log in to the application.

:::tip More Features

Agnost's authentication module offers a wide range of additional features, such
as magic-link authentication, email verification, and user management, ensuring
that developers have everything they need to build secure and scalable
applications. For a comprehensive list of features, refer to the
[authentication documentation](https://agnost.dev/client/category/authentication).

:::

## Key Benefits of Agnost's Authentication Module

Agnost's authentication module offers a wide range of benefits that make it an
ideal choice for developers looking to build secure and scalable backend
applications. Here are some of the key benefits of Agnost's authentication
module:

- **Easy Integration**: Agnost's authentication module is designed to be
  straightforward to integrate into any project, ensuring that developers can
  get up and running quickly.

- **Scalability**: Designed to scale with your application, Agnost's
  authentication can handle anything from a handful of users to millions,
  without skipping a beat.

- **Customization**: With open-source code, Agnost's authentication module can
  be customized to fit the unique needs of any project, ensuring that developers
  can build applications that meet their specific requirements.

## Getting Started with Agnost's Authentication Module

Before leveraging Agnost's authentication capabilities, it's essential to set up
the Kubernetes cluster and deploy Agnost. Once Agnost is up and running, you can
start integrating its authentication module into your projects. This setup
enables seamless interaction with Agnost services from your web or mobile
applications. Here's a step-by-step guide to help you get started:

### Prerequisites

- **Agnost**: Ensure that Agnost is deployed on your Kubernetes cluster. If you
  haven't already deployed Agnost, you can follow the
  [official documentation](https://docs.agnost.io/) to get started.

- **Kubernetes Cluster**: You'll need a Kubernetes cluster to deploy Agnost and
  its authentication module. If you don't have a Kubernetes cluster, you can use
  a managed Kubernetes service such as Google Kubernetes Engine (GKE) or Amazon
  Elastic Kubernetes Service (EKS), or you can set up a local Kubernetes cluster
  using tools like Minikube or Kind.

- **Create an app withing Agnost**: You can create an app within Agnost by
  following the
  [official documentation](https://agnost.dev/docs/application-development/create-an-application).

- **Deploy your app version to its environment**: Agnost ensures automatic
  deployment of the master version to an associated environment. However, you
  can manually deploy a version to an environment by following the
  [official documentation](https://agnost.dev/docs/application-development/version-settings/environment).

- **Generate an API Key**: You can generate an API key by following the
  [official documentation](https://agnost.dev/docs/application-development/version-settings/api-keys).

Referencing the [official documentation](https://agnost.dev/client/) is
essential to ensure that you have all the necessary information to integrate
Agnost's authentication module into your projects.

:::note

Upon creating an app, Agnost automatically creates and deploys a master version
to an associated environment but does not generate an API key. You must manually
create this key, accessible along with other necessary information (client key,
base URL) from your app version's Settings or Dashboard view in Agnost Studio.

:::

### Installing Agnost's Client Library

The Agnost client library can be installed via npm or Yarn.

<Tabs defaultValue="npm" groupId="dev" values={[ { label: "Npm", value: "npm" }, { label: "Yarn", value: "yarn" } ]}>


<TabItem value="npm">


```bash
npm install @agnost/client
```

</TabItem>


<TabItem value="yarn">


```bash
yarn install @agnost/client
```

</TabItem>


</Tabs>


After installation, if you're using a bundler like webpack, import Agnost and
create your client instance with the required `baseUrl` and `apiKey`.

```javascript showLineNumbers
// Importing Agnost client library
import { createClient } from "@agnost/client"

// Client instance creation
let baseUrl = "https://my-cluster.com/env-myenvid"
let apiKey = "ak-f59c9ef3a53b40669c6a79a62593e153"
const agnost = createClient(baseUrl, apiKey)
```

#### CDN Installation

For CDN installation, include the Agnost client library script in your HTML and
use the global `agnost` variable to create a client instance.

```html showLineNumbers
<script src="https://cdn.jsdelivr.net/npm/@agnost/client"></script>
<script>
  const { createClient } = agnost
  const client = createClient(
    "http://my-cluster.com/env-myenvid",
    "f59c9ef3a53b40669b6a79a62593e153",
  )
</script>
```

#### Initialization Options

The Agnost client library offers several initialization options, including
`realtime`, `signInRedirect`, and `localStorage`, to tailor the client instance
to your application's needs.

```javascript showLineNumbers
import { createClient } from "@agnost/client"

let options = {
  signInRedirect: "http://localhost:3000/auth-redirect",
  realtime: {
    autoJoinChannels: false,
    bufferMessages: true,
    echoMessages: true,
    reconnectionDelay: 2000,
    timeout: 30000,
  },
}

const agnost = createClient(baseUrl, apiKey, options)
```

:::note

By default, the Agnost client library utilizes the browser's
**`Window.localStorage`**. If your application requires a different storage
mechanism or is server-side, you must provide a custom storage implementation.

:::

### Managing User Accounts with Agnost

Agnost provides three primary methods to manage user accounts, catering to a
wide range of application needs:

1. **Email-based Authentication**
2. **Phone Number-based Authentication**
3. **OAuth-based Authentication** (with providers like Google, Apple, Twitter,
   Facebook GitHub)

In this blog post, we will focus on **email-based authentication**, showcasing
how Agnost simplifies this common yet critical functionality.

#### Email-based Authentication

Signing up a new user with email in Agnost is as simple as calling the
**`signUpWithEmail`** method encapsulates the complexity of this process,
offering a seamless integration. Here's how you can utilize it:

#### Basic User Sign-up

To sign up a new user with an email and password, you can use the following
JavaScript example:

```javascript showLineNumbers
let email = "user@example.com"
let password = "SecurePassword123"

// Sign up a new user with email and password
const result = await agnost.auth.signUpWithEmail(
  email,
  password,
  "https://yourdomain.com/redirect-url",
)
```

#### Advanced User Sign-up with Additional Data:

Agnost also supports the inclusion of additional user data during the sign-up
process. This feature is especially useful for applications requiring more
detailed user profiles. Here's how you can add extra information such as name,
surname, and title:

```javascript showLineNumbers
const result = await agnost.auth.signUpWithEmail(
  email,
  password,
  "https://yourdomain.com/redirect-url",
  {
    name: "John",
    surname: "Doe",
    title: "Developer",
  },
)
```

By passing an object with additional user details, **Agnost ensures that your
application can maintain rich user profiles** without the need for separate data
entry processes.

#### Leveraging Agnost's Authentication Module

Agnost's client libraries make integrating these authentication methods into
your application straightforward. Whether you're working on a web, mobile, or
desktop application, these libraries provide a consistent and easy-to-use API
that abstracts away the complexities of direct backend communication.

## Conclusion

Agnost's authentication module offers a robust, scalable, and easy-to-implement
solution for managing user accounts. By providing comprehensive methods for
email, phone number, and OAuth-based authentication, Agnost helps developers to
build secure and feature-rich applications with ease.

As you integrate Agnost into your projects, remember to leverage the client
libraries and the extensive documentation available at
[Agnost's official website](https://agnost.dev) for additional methods and
advanced functionalities.

**Resources**:

- [Agnost's official website](https://agnost.dev)
- [Agnost's official documentation](https://agnost.dev/docs/intro)
- [Agnost's GitHub repository](https://github.com/cloud-agnost/agnost-community)
- [Agnost's Authentication Documentation](https://agnost.dev/client/category/authentication)
