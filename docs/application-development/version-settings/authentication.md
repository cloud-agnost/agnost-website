---
sidebar_position: 6
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../../src/css/illustration.module.css"

# Authentication Settings

In the Authentication section of Version Settings in Agnost, you have the
ability to configure authentication settings that determine how users can
securely access your application. This section offers a comprehensive overview
of various authentication-related options and configurations available.

## Providers

In this tab, you can add authentication providers that enable users to log in or
sign up to your application using their existing accounts from popular platforms
such as Google, Facebook, Twitter, Github, Apple, and Discord. Each provider
requires specific configuration settings, including a client id, client secret,
and callback/redirect URL.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/a-providers-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/a-providers.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

## Message Templates

This tab allows you to customize message templates for various
authentication-related actions, including verifying SMS codes, confirming email
addresses, resetting passwords, using magic links for authentication, and
confirming email address changes.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/a-message-template-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/a-message-template.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

Here is an example of message templates for confirming email addresses:

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/a-confirm-email-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/a-confirm-email.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

## General

In this tab, you can configure general authentication settings, including the
following:

- **User Data Model**: Specify the database model that represents users.
- **Redirect URL**: Specify the URL where the frontend app should be redirected
  after authentication.
- **URLs**: Add and manage redirect URLs for handling authentication redirects.
- **Email Authentication**: Enable email and password-based sign-up.
- **Mobile Phone Authentication**: Enable mobile phone number and password-based
  sign-up.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/a-general-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/a-general.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

### User Data Model

To facilitate email, phone, or OAuth-based authentication, you need to specify a
permanent data model to store user authentication data. This typically involves
defining a database model for users.

- **Database**: Select the database where user data will be stored.
- **Model**: Specify the name of the model that represents users.

### Redirect URL

Configuring a redirect URL is essential for handling authentication-related
redirects. Your frontend application will be redirected to this URL in the
following scenarios:

1. The user is authenticated using an OAuth provider.
2. The user is authenticated using a magic link.
3. The email address of a user is confirmed during sign-up.
4. An email address change is confirmed.
5. The user's password is reset.

In the event of a successful redirect, an access token will be provided as a
query string parameter named 'access_token.' If authentication fails, your
frontend app will be redirected to the same URL with an error message in the
query string parameter named 'error.'

### URLs

You can add and manage redirect URLs for handling authentication redirects. Each
URL specifies where the frontend app should be redirected based on different
authentication scenarios.

### Email Authentication

Enabling email and password-based sign-up in the Agnost Client Library allows
developers to provide users with the option to sign up using their email address
and password. After signing up, users can use this email and password
combination to log in securely.

:::note Developers can choose to enable email confirmation

When checked, users need to confirm their email address either during sign-up or
when changing their email. Agnost sends a confirmation email with a link to the
user's email address. When the user clicks on this link, Agnost processes the
email confirmation request and redirects the user to the specified redirect URL.
If the confirmation is successful, an access token is provided in the URL,
allowing the user to access their account. If there's an issue with
confirmation, the user is redirected to the same URL with an error message.

- **Link Expiry Duration**: Developers can set the expiration duration for the
  confirmation link. By default, it's set to 1 hour (3600 seconds), but
  developers can adjust this duration as needed, up to a maximum of one week
  (604,800 seconds).

- **Host**: Developers should provide the hostname or IP address where the
  authentication service is hosted. This information is essential for
  establishing a connection to the authentication service.

- **Port**: Developers need to specify the port for authentication. This is the
  port through which the authentication service communicates.

- **User**: Developers must enter the username for authentication purposes. This
  is typically used to identify and validate the user during the login process.

- **Password**: Developers should provide the password associated with the
  specified username. This password is used for authentication when users log
  in.

- **Use TLS**: Developers can specify whether TLS (Transport Layer Security)
  should be used for secure communication. Enabling TLS helps ensure that
  communication between the client and the authentication service remains
  secure.

:::

By enabling email authentication in the Agnost Client Library, developers can
offer users a straightforward sign-up process using their email addresses and
passwords. They have the flexibility to configure email confirmation and tailor
the authentication process to their application's requirements.

### Mobile Phone Authentication

Enabling mobile phone number and password-based sign-up in the Agnost Client
Library empowers developers to provide users with the option to sign up using
their mobile phone numbers and passwords. This authentication method adds an
extra layer of security and convenience.

:::note Developers can choose to enable phone number confirmation

When checked, users must confirm their phone number using a code either during
sign-up or when changing their phone number.

- **Allow Sign-in using Authorization Codes Sent in SMS**: This option is
  available if mobile phone number and password-based sign-up is enabled. Users
  can sign in using authorization codes sent via SMS, adding an additional layer
  of security to the authentication process.

- **Link Expiry Duration**: Developers can specify how long authorization codes
  sent via SMS remain valid. The default is 1 hour (3600 seconds), but
  developers can adjust this duration, with a maximum validity period of one
  week (604,800 seconds).

- **Select Provider To Send SMS**: Developers can choose the SMS provider
  responsible for sending authorization codes. In this example, Twilio is
  selected.

- **Account SID**: Developers need to enter the SID (String Identifier) of their
  Twilio account, which is used to send SMS messages.

- **Authentication Token**: Developers must provide the authentication token
  associated with their Twilio account for secure communication.

- **Phone Number or Message Service SID**: Developers should enter the phone
  number (in E.164 format) or an alphanumeric sender ID used to initiate the SMS
  message. This information helps specify the sender of the SMS message.

By enabling mobile phone authentication in the Agnost Client Library, developers
can enhance security and user convenience by allowing users to sign up and sign
in using their mobile phone numbers and authorization codes sent via SMS. This
option is especially valuable for applications that prioritize user security and
ease of use.

:::

By configuring these authentication settings, you can provide secure and
flexible access options for users, support various authentication providers, and
customize authentication-related messages and behaviors within your Agnost
application.
