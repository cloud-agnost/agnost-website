---
sidebar_position: 2
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Member Management

Managing members within your organization is a crucial aspect of ensuring
efficient collaboration and access control in Agnost. This section provides
comprehensive guidance on how to effectively manage members and their roles
within your organization.

## Inviting Members

To invite members to your organization in Agnost, follow these steps:

### 1. Access the Members Tab

Navigate to the **`Members`** tab within the **Settings** section of Agnost.

<ImageSwitcher
  lightImageSrc="/img/docs/manage-organizations/invite-members-l.png?text=LightMode"
  darkImageSrc="/img/docs/manage-organizations/invite-members.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={720}
/>

### 2. Provide Member Details

For each member you wish to invite, provide the following details:

- **Email:** Input the email address of the member.
- **Role:** Select the appropriate role for the member, such as Admin,
  Developer, Resource Manager or Viewer, depending on the level of access and
  permissions required.

:::note Role Descriptions

- **Admin:** Admins have full control over the organization and its
  applications. They can create, edit, and delete applications, as well as
  manage members and their roles.
- **Developer:** Developers can create, edit, and delete applications, as well
  as manage members and their roles. However, they cannot delete the
  organization or transfer ownership of applications.
- **Resource Manager:** Resource Managers can create, edit, and delete
  applications. However, they cannot manage members or their roles, delete the
  organization, or transfer ownership of applications.
- **Viewer:** Viewers can only view applications. They cannot create, edit, or
  delete applications, manage members or their roles, delete the organization,
  or transfer ownership of applications.

:::

### 3. Send Invitations

After providing the necessary member details, click the **Invite** button to
dispatch the invitations. Invited members will receive an email notification
containing an invitation link.

## Pending Invitations

You can monitor and manage pending invitations within the **Pending
Invitations** section. This section displays a list of invitations that have
been sent but not yet accepted.

<ImageSwitcher
  lightImageSrc="/img/docs/manage-organizations/pending-invitations-l.png?text=LightMode"
  darkImageSrc="/img/docs/manage-organizations/pending-invitations.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={720}
/>

## Transferring Organization Ownership

Organization ownership in Agnost refers to the person who created the
organization or the individual to whom organization ownership has been
transferred. The owner holds full control over the organization, including the
ability to delete it or transfer ownership to another member with Admin rights.

To transfer organization ownership, follow these steps:

### 1. Access the organization

Select the organization for which you want to transfer ownership and click the
**Settings** from the tab bar and navigate to the **`General`** tab.

<ImageSwitcher
  lightImageSrc="/img/docs/manage-organizations/transfer-ownership-l.png?text=LightMode"
  darkImageSrc="/img/docs/manage-organizations/transfer-ownership.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={620}
/>

### 2. Transfer Organization Ownership

Find the **Transfer Organization Ownership** option and choose a member from the
organization who possesses **Admin rights**. Confirm the transfer to complete
the process.

By effectively managing members and their roles within your organization, you
can streamline collaboration and maintain the appropriate level of access
control for your Agnost applications.
