---
sidebar_position: 2
---

# Handling Security and Encryption

Security and encryption are essential in any application environment, and Agnost
has taken great strides to ensure that your application and data are secure at
all times. There are several layers of security that Agnost provides:

### Network Policies

Network policies are a native Kubernetes resource that allows you to determine
the network traffic allowed to flow between pods. By default, a pod can send
traffic to any other pod within the cluster. With network policies, you can
restrict this to ensure only necessary communication occurs, reducing the
potential attack surface.

Agnost configures network policies as part of the deployment process to restrict
traffic only to necessary services and pods, keeping your application secure at
the network level.

### Role-Based Access Control (RBAC)

RBAC is another Kubernetes native feature that allows you to restrict what
actions a user or service can perform within your cluster. This includes
creating, modifying, or deleting resources, reading secrets, or any other action
that can be performed via the Kubernetes API.

Agnost utilizes RBAC to ensure that only authorized users and services can
perform actions within your cluster. This includes restricting which users can
deploy or modify applications and what services can communicate with the
Kubernetes API.

### Encryption

Encryption is a critical aspect of security, particularly for data at rest and
in transit. For data in transit, Agnost uses TLS (Transport Layer Security) to
encrypt communication between services. This includes both internal
communication within the cluster and external communication with client
applications.

For data at rest, Agnost integrates with Kubernetes Secrets to store sensitive
data securely. Kubernetes Secrets are encrypted at the application level and
then stored in etcd, which is also encrypted at the storage layer. This means
your sensitive data is encrypted both in transit and at rest, ensuring its
security at all times.

### API Keys

API keys are essential tools for authenticating requests made to your
application. They act as unique identifiers that authenticate and validate the
user or the system making the request. In Agnost, you can easily generate and
manage API keys for your application through our intuitive graphical interface.

Each API key corresponds to specific permissions, which essentially determine
what actions the bearer of the key can perform. This mechanism provides you with
the capability to regulate and restrict what each user or system can do, thereby
adding an additional layer of security to your application.

### Rate Limiters

Implementing rate limiters is a critical aspect of maintaining the health and
availability of your application. They help to prevent individual users or
systems from making too many requests within a specific period.

Rate limiting is vital in protecting your application against Denial-of-Service
(DoS) attacks, where an attacker attempts to overload your application with
requests, as well as brute force attacks, where an attacker systematically tries
all possible combinations to guess a user's password.

Agnost simplifies the process of implementing rate limiting in your application.
Through our graphical interface, you can define the maximum number of requests a
user or system can make within a specific period. Once this limit is reached,
Agnost will automatically block any additional requests. Also, you can add one
or more rate limiters and sort them according to your needs.

Agnost's comprehensive security features ensure that you can create applications
that are not only scalable and robust but also secure.

### Security Contexts

Security contexts define the privilege and access control settings for a Pod or
Container. It controls access to resources such as volumes and can restrict
actions such as running a container as a non-root user.

Agnost makes use of Security Contexts to restrict the privileges of pods and
containers in your application. This helps to limit the potential damage that
could be done if a pod or container were to be compromised.
