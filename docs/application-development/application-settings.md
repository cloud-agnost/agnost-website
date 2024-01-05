---
sidebar_position: 10
---

import ilCss from "../../src/css/illustration.module.css"
import ImageSwitcher from "@theme/ImageSwitcher"

# Application Settings

In the Application Settings section of Agnost, developers can configure various
aspects of their application to tailor it to their organization's needs. This
section provides insights into the settings available under different tabs,
including **`General`**, **`Members`**, and **`Pending Invitations`**.

To access the Application Settings section, click/tap the application name in
the header bar.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/app-settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/app-settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## General Settings

This General tab provides a view of the application's general settings, such as
its name, avatar, and ownership.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/general-settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/general-settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

- **App Name**: Developers can set the organization's visible name within the
  platform. This name represents the company, department, or entity associated
  with the application. For example, it can be the name of the developer's
  company or project.

- **App Avatar**: Developers have the option to upload a custom avatar or logo
  for the application. While avatars are optional, they are strongly recommended
  as they provide visual branding and recognition for the application.

- **Transfer Application Ownership**: This functionality allows developers to
  transfer ownership of the application to another organization member with an
  Admin role. The application owner is the individual who initially created the
  application or received ownership through a transfer. The owner has full
  control over the application and possesses the authority to delete the
  application or transfer its ownership to another individual.

Developers can select the organization member with an Admin role to whom they
want to transfer ownership and complete the transfer process.

## Members

Developers can manage the members associated with the application, including
their roles and permissions.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/member-settings-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/member-settings.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

- **Name**: Lists the names of organization members.
- **Role**: Specifies the role of each member, such as Admin.

Developers can invite members to join the application and assign them specific
roles based on their responsibilities and access requirements.

## Pending Invitations

This tab provides a view of any pending invitations to join the application.
Developers can search and filter pending invitations based on criteria such as
email, invitation date, and role.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/pending-invites-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/pending-invites.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={480}
/>

- **Email**: Displays the email addresses of individuals who have been invited
  to join the application.
- **Invited At**: Indicates the date and time when the invitation was sent.
- **Role**: Specifies the role assigned to the invitee.

Pending invitations are a way to manage access to the application and ensure
that the right individuals are granted access with the appropriate roles.

By configuring these settings in the Application Settings section, developers
can effectively manage their application's details, members, and access control,
ensuring that it aligns with their organizational requirements and objectives.
