---
sidebar_position: 7
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# API Key Settings

In the API Keys section of Version Settings in Agnost, developers have the
ability to manage API keys that control access to various aspects of their
application. API keys play a critical role in securing and controlling access to
your application's functionality and data. This section provides insights into
how to create and configure API keys effectively.

## General

Once you have created an API key, you can configure its settings in the General
tab. This tab provides a view of the API key's general settings, such as its
name, access, and expiration date.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/api-general-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/api-general.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### Key Name

Developers can provide a name for the API key, which should be descriptive and
indicative of the key's purpose or usage. The name serves as a reference for
identifying the key later.

### Allow Realtime

- **Allow Realtime**: Developers can specify whether this API key can be used by
  frontend clients to access real-time services. This includes functionalities
  such as sending and receiving messages to and from channels. Enabling this
  option is essential for applications that require real-time communication
  features.

### Endpoint Access

Developers can define the level of access granted to this API key regarding
calling application endpoints. The available options include:

- **No Access**: The API key cannot be used to call application endpoints.
- **Full Access**: The API key can be used with all HTTP methods to view,
  create, update, and delete data.
- **Custom Allowed Endpoints**: Developers can specify a list of allowed
  endpoints. The API key can only be used with the endpoints included in this
  list.
- **Custom Exclude Endpoints**: Developers can specify a list of excluded
  endpoints. The API key cannot be used with the endpoints included in this list
  but can access all other endpoints.

### Expire Date

Developers can set an expiration date for the API key. This date defines when
the key becomes invalid. For keys that should never expire, this field can be
left empty.

## Allowed Domains

In the Allowed Domains tab, developers can control from which domains requests
with this API key are accepted. The available options include:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/api-allowed-domains-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/api-allowed-domains.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### Authorized Domains

Developers can control from which domains requests with this API key are
accepted. The available options include:

- **All Domains**: Requests with this API key can be called from any domain.
- **Only Authorized Domains**: Requests with this API key are limited to
  specific authorized domains.

Developers can add authorized domains by entering their names and clicking the
"+ Add Another One" button.

## Allowed IPs

Under the Allowed IPs tab, developers can control from which IP addresses
requests with this API key are accepted. The available options include:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/api-allowed-ip-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/api-allowed-ip.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### Authorized IPs

Developers can control from which IP addresses requests with this API key are
accepted. The available options include:

- **All IPs**: Requests with this API key can be called from any IP address.
- **Only Authorized IPs**: Requests with this API key are limited to specific
  authorized IP addresses.

Developers can add authorized IPs by entering their addresses and clicking the
"+ Add Another One" button.

By configuring API keys in this manner, developers can effectively manage access
to their application's features and data. These keys provide a secure and
controlled way for applications, clients, or services to interact with the
Agnost platform while adhering to specified restrictions and access policies.
