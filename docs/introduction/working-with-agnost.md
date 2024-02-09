---
sidebar_position: 3
---

# Working with Agnost

Agnost is designed to provide a seamless and efficient workflow for backend
application development. From design to deployment, Agnost streamlines your
workflow and makes it easy to build and manage your applications. Here's an
overview of what it's like working with Agnost.

### Designing Your Application

With Agnost-Studio, you can easily design your application directly in your web
browser. This includes defining data models, setting up relationships, and
designing your API endpoints. Agnost-Studio provides an intuitive, graphical
interface for these tasks, making it easy to visualize your application's
structure.

- **Data Models:** Define your data models with Agnost's built-in support for a
  variety of data types, including strings, numbers, booleans, dates, and more.
  You can also define relationships between your models, such as one-to-one,
  one-to-many, and many-to-many.

- **API Endpoints:** Set up your API endpoints with Agnost's endpoint designer.
  You can define the URL, request method (GET, POST, PUT, DELETE), request
  parameters, and response format. You can also write custom JavaScript code for
  your endpoints using Agnost's built-in code editor.

### Deploying Your Application

Once you've designed your application, Agnost makes it easy to deploy your
application to a Kubernetes cluster. You don't have to worry about writing
Dockerfiles or Kubernetes manifests - Agnost takes care of this for you.

- **Environment Variables:** You can define environment variables for your
  application in Agnost-Studio. These variables are automatically injected into
  your application.

- **Scaling:** Agnost applications are automatically scaled based on load,
  thanks to Agnost's integration with Knative. This means your application can
  automatically scale up to handle high traffic, and scale down when traffic is
  low, optimizing resource usage.

- **Realtime Deployment:** During the development of your application, you can
  relax knowing that deployment is automated. Agnost facilitates this through a
  code-push method. Any changes you make in your code are rapidly deployed to
  your application servers in seconds. Agnost seamlessly pushes code updates in
  real-time, ensuring your latest code changes are always reflected in your live
  application.

- **Importing into Any Kubernetes Cluster:** Agnost's flexibility extends beyond
  just exporting your application; it allows you to import your application into
  any Kubernetes cluster effortlessly. Whether you are deploying to cloud-based
  Kubernetes services like AWS EKS, Azure AKS, or GCP GKE, or managing your own
  on-premises Kubernetes clusters, Agnost provides a consistent and
  user-friendly experience.

### Managing Your Application

Once your application is deployed, Agnost provides tools for monitoring,
debugging, and managing your application.

- **Monitoring:** Agnost's Engine-Monitor periodically checks the status of your
  application and its resources, and updates their status in the platform
  database. You can view this information in Agnost-Studio.

- **Logging:** Agnost automatically collects logs from your application and
  stores them in the Platform-Database. You can view these logs in Agnost-Studio
  to help with debugging.

- **Version Control:** Agnost supports version control for your applications.
  You can create new versions of your application, each with its own set of data
  models, endpoints, and environment variables. This makes it easy to experiment
  with new features without affecting your production application.

Working with Agnost means having the freedom to focus on your application's
logic and functionality, without having to worry about infrastructure setup and
management. Whether you're a solo developer or part of a large team, Agnost can
streamline your workflow and help you build high-quality backend applications
faster and more efficiently.
