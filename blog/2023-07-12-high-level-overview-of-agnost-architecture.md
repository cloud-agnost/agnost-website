---
title: High Level Overview of Agnost Architecture
slug: high-level-overview-of-agnost-architecture
author: Umit Cakmak
author_title: Founder
author_url: https://github.com/umit-yoda
author_image_url: https://github.com/umit-yoda.png
description:
  Agnost Kubernetes cluster integrates the proven open source technologies to
  speed up software development lifecycle.
keywords:
  - kubernetes
  - docker
  - open-source
  - backend
  - architecture
image: /img/blog/2023-07-12/banner.png
tags: [architecture, kubernetes, backend]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"

<head>
  <title>High Level Overview of Agnost Architecture</title>
  <meta
    property="og:title"
    content="High Level Overview of Agnost Architecture"
  />
  <meta
    name="twitter:title"
    content="High Level Overview of Agnost Architecture"
  />
</head>

Agnost is an open-source backend application development platform running on
Kubernetes clusters. At its core, we aspired to make Agnost cloud provider
agnostic so that application developers can easily switch from one cloud
provider to another without hassle. In this blog, I will provide a high-level
overview of Agnost architecture.

## High Level Architecture

![Agnost High Level Architecture](/img/blog/2023-07-12/Agnost_architecture_v1.png)

There are several different technologies and components in an Agnost cluster.
First, the Agnost platform runs on [**Kubernetes**](https://kubernetes.io/)
clusters and is created using a
[**Helm chart**](https://helm.sh/docs/topics/charts/). We tried to keep the
system resource requirements for the Kubernetes cluster as low as possible. As
of this writing, 4 CPUs and 8 GB of memory are the minimum resources needed for
an up-and-running Agnost cluster. Below are the descriptions of crucial
technologies and cluster components.

There are three logical groups in an Agnost cluster: **Platform**, **Engine**,
and **Cluster Resources**. The platform modules (e.g., Platform-Core,
Platform-Worker, Platform-Sync, and Platform-Studio) primarily handle backend
application design and development. These modules manage developed application
data and allow developers to create their apps through Agnost-Studio, the
platform's front-end. Whereas the Engine modules (Engine-Worker, Engine-Monitor,
Engine-Scheduler, Engine-Realtime, and API Servers) manage application
deployment and execution. The developed applications are deployed through the
Agnost cluster Engine modules, and requests to an application endpoint are
handled. Finally, the Cluster resources (e.g., Platform-Database,
Platform-Cache, Platform-Message Broker, Cloud Storage, and Knative) are the
open-source technologies an Agnost cluster utilizes to develop, deploy, and run
backend applications.

### Cluster Resources

- **Platform-Database**: We use [MongoDB](https://www.mongodb.com/) to store all
  information about platform users and applications. All data about application
  versions, design specifications, endpoint code, etc. is stored in this
  database, and it is used as the single source of truth. We also use this
  database to store application logs and metadata of storage buckets and
  objects. MongoDB is a document-oriented database that stores data in flexible
  and schema-less JSON-like documents called BSON (Binary JSON). This
  flexibility allows us to store and access the design data of the developed
  applications in a way that aligns closely with our application's data
  structures. The document model also makes it easier to evolve the data schema
  over time without downtime or complex migrations.
- **Platform-Cache**: We use [Redis](https://redis.io/) to cache a subset of
  MongoDB data to speed up application design data retrieval. A copy of the
  essential app data stored in MongoDB is also cached in Redis for faster
  access. In addition, we also use Redis to cache user sessions, API keys and
  utilize its pub/sub mechanism to autoscale Socket.io servers (e.g.,
  Platform-Sync and Engine-Realtime). Redis is designed to deliver exceptional
  performance. It stores data primarily in memory, allowing fast read and write
  operations. Redis achieves high throughput and low latency, making it suitable
  for Agnost that require real-time data processing and low response times.
- **Platform-Message Broker**: We use [RabbitMQ](https://www.rabbitmq.com/) as
  the message broker to manage our asynchronous task queues. We create several
  queues to manage application data model deployments and application code push
  to API servers. RabbitMQ ensures reliable message delivery between Agnost
  modules and guarantees that messages are not lost, even in the event of system
  failures or network disruptions. Messages can be persisted to disk ensuring
  that they are delivered to the intended Agnost modules.
- **Cluster Storage**: To handle the document storage needs of the Agnost
  platform itself and the storage needs of the developed applications, we use
  [MinIO](https://min.io/). ReadWriteMany access mode is not natively supported
  by Persistent Volume Claims (PVCs) in Kubernetes. PVCs are designed to provide
  access to a single node or pod at a time, which is known as the ReadWriteOnce
  (RWO) access mode. In contrast, MinIO provides a distributed object storage
  solution and can be deployed as a shared storage backend within a Kubernetes
  cluster.
- **Knative**: In Agnost, an application can have multiple versions. You can
  think of versions as branches in Git. Each version also has its API Server
  deployed as a [Knative](https://knative.dev/) service. This approach ensures
  that developers working on different versions of an app each have their own
  development environments. We use the serverless infrastructure of Knative to
  effectively utilize cluster resources so that application versions that are
  obsolete or do not handle much traffic can be scaled down to zero pods to
  preserve cluster resources. Additionally, Knative automatically scales your
  workloads based on incoming request traffic. It scales up and down to meet the
  demand, ensuring your applications have the necessary resources to handle
  varying workloads. This auto-scaling capability helps optimize resource
  utilization and ensures that your applications can handle high traffic
  efficiently.

### Agnost Platform Modules

- **Platform-Core**: This Node.js application is the API server of the Agnost
  cluster. Agnost Studio (a.k.a. Platform-Studio) is the platform's front end
  that sends RESTful API requests to Platform-Core. This module handles cluster
  user registration, organization, app, and version creation, and for each
  version, management of data models, endpoints, cron jobs, message queues, and
  storage.
- **Platform-Worker**: The worker for the Platform-Core. Platform-Worker is
  primarily used to perform asynchronous tasks on behalf of the Platform-Core.
  It listens to messages dispatched through Platform-Mesage Broker (RabbitMQ)
  and performs necessary activities. Currently, we are using Platform-Worker to
  send emails. However, its capabilities will be enriched in future versions.
- **Platform-Sync**: This is the [Socket.io](https://socket.io/) realtime server
  of the platform. It is primarily used to send realtime messages about design
  and code changes of developed applications. Through this realtime server,
  connected clients (e.g., Agnost-Studio) receive realtime updates. In a
  multi-user platform, several team members working on an app need to get
  realtime feedback about the changes made by other developers or notified about
  important system messages (e.g., data model deployment to the database
  failed).
- **Platform-Studio**: This React app is the platform's front-end, where you
  manage settings, resources, and users of your Agnost cluster and create and
  deploy new applications.

### Agnost Engine Modules

- **Engine-Worker**: This module handles the deployment of the application
  design to the databases, API servers, and cron job scheduler. Whenever the
  design of the developed app changes, a message is sent to Engine-Worker
  through Platform-Message Broker, and the message is processed and required
  actions are taken. As an example, if the app developer adds a new table to a
  database or modifies a field in a table, then Platform-Worker performs the
  actual update on the linked database server. Additionally, this module also
  manages the organization and application resources, such as creating a new
  database, cache, message broker, or API server in the cluster.
- **Engine-Monitor**: The monitoring and health check of all Agnost cluster
  resources, including the ones created within the cluster and the externally
  linked ones, are handled through this module. This module periodically checks
  the status of the resources (e.g., whether the created PostgreSQL database is
  up and running or the linked external Redis cache is up and running) and
  updates their status in the platform database and, in case of critical events,
  sends realtime notifications.
- **Engine-Scheduler**: Cron jobs defined in application versions are managed
  through this module. Whenever a new cron job is created, or an existing one is
  updated, Engine-Scheduler performs the necessary updates. This module also
  triggers cron job executions. In an Agnost cluster app, cron jobs are
  triggered by sending a message to its respective queue through
  Platform-Message Broker (RabbitMQ). The API Server of the app listens to this
  specific queue and, whenever a message is received, runs the handler code of
  the cron job.
- **Engine-Realtime**: This is the socket.io server of the apps that utilize
  realtime features of the platform. Through this module, applications can
  manage realtime channels (e.g., topics) and send messages to connected
  clients.
- **API Server**: As briefly mentioned above, each version of an app developed
  in Agnost Cluster has its API Server. API Servers are created as a Knative
  service, a.k.a serverless function. The API servers are responsible for
  running the handler code for app endpoints and the handler code for message
  queues and cron jobs. They run in autoscale mode so that when the workload of
  the API server increases, new API Sever pods are created to handle increased
  traffic.

In addition to these modules, developers can create several database, cache, or
message-broker resources within their Agnost cluster if it has enough capacity.
You can increase the cluster capacity (e.g., CPU, memory, storage) vertically
(upgrading nodes) or horizontally (adding new nodes) so that you can accommodate
new resources. Alternatively, you can create these resources outside your Agnost
cluster (e.g., you might already have a database server running somewhere) and
link them as external resources so that your Agnost apps can access them and
perform the required actions.

## Join the Agnost Community

As Agnost continues to evolve, we invite you to join the vibrant Agnost
community. Connect with like-minded developers and architects share knowledge,
and collaborate on exciting projects. As an open-source platform, Agnost thrives
on community contributions, feedback, and suggestions. Together, we can shape
the future of backend development and create remarkable applications. If you
have suggestions or comments about Agnost arhitecture, please join the
discussions at our
[Github Repo](https://github.com/orgs/cloud-agnost/discussions).

In conclusion, Agnost is a cloud provider agnostic application development
platform that integrates proven open-source technologies under the hood. It
provides the core functionalities (e.g., database, application server, storage,
security, authentication) that are needed in almost every backend application
out of the box. Hence, it significantly simplifies application development and
reduces infrastructure set-up and management time.
