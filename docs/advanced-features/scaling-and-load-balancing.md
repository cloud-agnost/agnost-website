---
sidebar_position: 1
---

# Scaling and Load Balancing

One of the key benefits of using Agnost and Kubernetes is the ability to
automatically scale your application based on traffic patterns and load. This
scaling can occur both horizontally (increasing or decreasing the number of
pods) and vertically (increasing or decreasing resources like CPU or memory for
existing pods).

### Horizontal Pod Autoscaler (HPA)

Horizontal Pod Autoscaler (HPA) is a Kubernetes feature that automatically
scales the number of pods in a replication controller, deployment, replica set,
or stateful set based on observed CPU utilization (or, with custom metrics
support, on some other application-provided metrics).

When creating an application within the Agnost platform, the HPA is configured
automatically for your applications, making sure that your applications can
handle peak traffic loads without any manual intervention.

### Vertical Pod Autoscaler (VPA)

Vertical Pod Autoscaler (VPA) is a Kubernetes feature that automatically adjusts
the amount of CPU and memory allocated to pods in a replication controller,
deployment, replica set, or stateful set. This allows your pods to have the
resources they need to operate optimally without wasting resources.

Again, Agnost automates the configuration of VPA for your applications, ensuring
efficient resource utilization across your cluster.

### Load Balancing

Load balancing is another critical feature in Kubernetes. It ensures that the
network traffic is efficiently distributed across multiple backend services or
pods to ensure high availability and reliability.

Agnost uses the built-in load balancers provided by Kubernetes – the `Service`
and `Ingress` resources. The `Service` resource provides an internal load
balancer, distributing network traffic to pods within the Kubernetes cluster.
The `Ingress` resource, on the other hand, is an external load balancer. It
handles incoming traffic and routes it to the appropriate services within the
cluster.

When deploying your applications, Agnost automatically configures these load
balancers to ensure that your application traffic is efficiently managed and
your services are highly available.
