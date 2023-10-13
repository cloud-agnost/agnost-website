---
slug: /category/realtime
sidebar_position: 4
image: /client/img/category/realtime.png
---

# Realtime

Atogic realtime works as a real-time communication layer between your backend app and the client. It maintains bi-directional persistent connections with the client using WebSockets. If a server wants to push new data to clients, it can do it instantly using Altogic realtime. It is highly flexible, and easy to integrate.

Below is the list of realtime capabilities of Altogic that you can use in your apps.

- You can create channels and your app clients can subscribe to these channels for messages
- You can send messages to specific channels or broadcast to all connected clients
- You can store client metadata and share this data across channels (e.g., share user profile data when a user joins or leaves a channel)
- You can subscribe to key user events (e.g., signin, signout, update user, change password etc.) and get notified when such an event is fired

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
