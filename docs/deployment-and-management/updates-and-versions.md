---
sidebar_position: 3
---

# Handling Updates and Versioning

With Agnost, you can easily update your application and manage different
versions of your application. This section will cover how you can do this.

### Updating Application

Agnost refer to the capability of the platform to reflect changes to services
such as cronjobs, message queues, and endpoints instantly. Agnost uses a code
push approach, meaning that any modifications to your service configuration or
code are automatically reflected in the running instances of your application.
This can be done from the graphical interface by updating the service.

Changes are propagated immediately to the API server and are reflected in the
running application without requiring a full redeployment.

### Versioning

With Agnost, you can handle different versions of your application in a manner
similar to handling branches in GitHub. This means that you can work on new
features or changes in a separate version without affecting your main
application. Once you're ready, you can switch the active version of your
application to the new version.

This ability to create and switch between different versions of your application
provides a powerful mechanism to manage your application development lifecycle.
