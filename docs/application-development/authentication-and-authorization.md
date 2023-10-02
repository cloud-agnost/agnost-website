---
sidebar_position: 9
---

# User Authentication and Authorization

Securing your application is critical, and one of the fundamental aspects of
this process involves managing user authentication and authorization.
Authentication verifies the identity of a user, while authorization determines
what the user can access within the application. Agnost provides a powerful,
integrated system for managing these aspects of your application security.

### User Authentication

Agnost supports different strategies for user authentication. This includes
standard username and password authentication, as well as OAuth and JWT
authentication.

**Username/Password Authentication**: By default, Agnost provides a built-in
system for user registration and login. You can use this system to manage user
accounts with traditional username/password authentication.

**OAuth Authentication**: Agnost also supports OAuth authentication, allowing
users to log in with external platforms like Google, Facebook, GitHub, etc. You
simply need to configure the OAuth credentials for the respective platform and
set up corresponding endpoints.

**JWT Authentication**: For more complex scenarios, you can also use JWT (JSON
Web Tokens) authentication. Agnost provides built-in support for generating and
verifying JWT tokens.

### User Authorization

For user authorization, Agnost provides a robust, role-based access control
system. You can define different roles and assign specific permissions to these
roles. These permissions could involve access to specific endpoints, resources,
or data models.

To set up user authorization, follow these steps:

1. **Define Roles**: From the Agnost Studio, navigate to the 'Roles' section
   under your application. Here, you can define different roles for your
   application.

2. **Assign Permissions**: For each role, you can define permissions. These
   permissions can be general (e.g., view any post) or specific (e.g., edit own
   post).

3. **Assign Roles to Users**: Once roles and permissions are defined, you can
   assign roles to users. This can be done at the time of user creation or later
   by updating the user's details.

With the user authentication and authorization systems provided by Agnost, you
can build secure applications with complex permission structures with ease. The
platform handles most of the heavy lifting, allowing you to focus more on your
application's features and user experience.
