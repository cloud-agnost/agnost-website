---
sidebar_position: 1
---

# What is Agnost?

**Agnost is a comprehensive and powerful platform that simplifies backend
development tasks**, allowing you to focus on crafting exceptional software
without the complexities of managing infrastructure. With Agnost, you can
seamlessly **deploy and manage applications in the cloud**, regardless of your
preferred cloud provider, while specifically optimized to work within Kubernetes
clusters.

## Key Concepts
### Organization
In Agnost, you start building your applications under organizations. Organization is the logical grouping of your applications and application resources. Each organization can have its members and resources.

### Resource
Resources are internal and external tools that you use when developing your applications. Databases, message brokers, and storage are some resource types you can use when building your applications. You can connect to a resource outside your Agnost cluster or create new resources within your cluster.

### Application
As its name implies, application is the fundamental entity you build in an Agnost cluster. Each application can have its team, meaning you can assign different roles to team members and collaboratively work on an app as a team. When you first create a new application, Agnost automatically creates the master version of your app. 

### Version
You can think of versions as branches in GitHub. An application can have many versions: production, staging, development, test, etc. Please note that each version has its API server (Knative service), which ensures the isolation of different versions and execution environments and prevents accidental changes in application resources shared by many developers. You develop your application logic through versions by writing your source code through Agnost Studio's web code editor. 

As mentioned above, each version has its API server (aka execution environment). You have complete control over the version's environment and can easily customize the minimum and maximum replica counts and required memory and CPU amounts. 

In each version of your app, you can define the following key entities:

- **Databases:** Through the Agnost Studio, you can visually define the data model of your app
- **Endpoints:** Currently, Agnost supports Node.js runtime for the execution environments. You can define your app endpoint using Express.js, which is built into the platform. Additionally, for each endpoint, you can add your middleware and define rate limiting and security rules.
- **Caches**: In your apps, you can also define the caches used by your application.
- **Storages:** Similar to caches, you can also define the storages used by your application.
- **Queues:** You can create queues and attach hander methods for asynchronous operations.
- **Cron jobs:** You can define cron schedules and associated handler functions.
- **Helper functions:** You can also define familiar helper functions that can be accessed from your endpoints, queues, cron jobs, or even other helper functions.

:::info
When you build your code using Agnost Studio, we automatically inject [**Agnost's server-side Javascript library**](/server). This library provides all the functionalities that you need to access application resources and perform operations on them. Whenever you start using a resource in your app, Agnost automatically injects all required connection parameters to connect to the resource for you, sets up the connections, and provides methods to take action on these resources. This implies that you do not need to manually establish connections to these resources, and you can use this library to perform operations on supported resource types. You can use the same methods, syntax, and parameters independent of the underlying resource type. For example, you do not need to call different methods to create a record in MongoDB, MySQL, or PostgreSQL database.
:::

## Why Choose Agnost?

Agnost **simplifies the process of developing and deploying backend applications
in a cloud-native environment**. It provides a comprehensive ecosystem with
essential tools and technologies, offering everything you need to manage
_databases, storage, cache, message queues, authentication, cronjobs, and
real-time features_ – all in one place.

Agnost offers a plethora of benefits that cater specifically to developers and
software architects:

**Streamline Your Development Process:** Agnost streamlines cloud application
deployment, allowing you to effortlessly manage applications in the cloud. By
automating infrastructure setup, Agnost enables you to concentrate on building
software instead of worrying about managing servers.

**Unlock Flexibility and Portability:** Say goodbye to vendor lock-in with
Agnost. It offers a consistent and portable platform that functions seamlessly
across different cloud environments, providing you with the flexibility to work
with your preferred cloud provider.

**Built for Serious Workloads:** Agnost takes replication to the next level,
offering the ability to scale and distribute critical data and messages across
multiple instances. With Agnost, you can handle even the most demanding
workloads with ease.

**Experience Realtime Communication:** With support for WebSockets and
Server-Sent Events, Agnost empowers you to implement real-time communication and
deliver live updates to your users, enhancing their experience.

**Secure Your Applications:** Protect your applications with Agnost's robust
authentication options, including Email, Phone Number, and
Social Logins. Additionally, Agnost offers security features such as API keys,
rate limiters, and domain/IP white-listing.

**Effortless Job Scheduling:** Agnost simplifies task automation with its
reliable cronjob support, allowing you to schedule jobs to run at specific times
or intervals.

---

In the next sections of the documentation, you will find detailed instructions
on installing and setting up Agnost, getting started with creating your first
backend application, and exploring the various features that Agnost has to
offer. From managing databases to implementing real-time capabilities, each
section will provide clear and concise information to support your journey with
Agnost.
