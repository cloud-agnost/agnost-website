---
sidebar_position: 1
---

# Understanding Kubernetes

Kubernetes, also known as K8s, is an open-source system for automating
deployment, scaling, and management of containerized applications. It groups
containers that make up an application into logical units for easy management
and discovery.

### Kubernetes Architecture

Kubernetes operates using a client-server architecture, consisting of a control
plane (master) and several worker nodes.

#### Control Plane

The control plane maintains a record of all Kubernetes objects and manages the
state of the cluster. It schedules and manages the lifecycle of pods,
deployments, and services. The components of the control plane include:

- **API Server (kube-apiserver):** Serves as the frontend for the Kubernetes
  control plane, exposing the Kubernetes API.

- **Etcd:** Consistent and highly-available key-value store used as the backing
  store for all cluster data.

- **Scheduler (kube-scheduler):** Watches for newly created Pods and assigns
  them to nodes based on resource availability.

- **Controller Manager (kube-controller-manager):** Runs controllers that handle
  routine tasks in the cluster.

#### Data Plane

The data plane (worker nodes) runs the workloads (applications). It receives
instructions from the control plane and communicates the state of its workloads
back to the control plane. Each worker node runs the following components:

- **Kubelet:** An agent that runs on each node and ensures containers are
  running in a Pod.

- **Kube-proxy:** Network proxy which reflects services as defined in the
  Kubernetes API on each node.

- **Container Runtime:** Software responsible for running containers, such as
  Docker or containerd.

### Pods

In Kubernetes, the smallest deployable units are Pods. A Pod can host one or
more containers which share resources like storage and network. Containers in a
Pod co-locate on the same node, share the same IP address and can communicate
with each other using `localhost`.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: my-app
      image: my-app:1.0.0
```

### Scalability

One of the key features of Kubernetes is its ability to automatically scale the
number of Pods to meet the demand based on metrics like CPU usage. This can be
achieved using a `HorizontalPodAutoscaler`.

```yaml
apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-scaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 50
```

In the context of Agnost, Kubernetes serves as the underlying engine that powers
application deployments. Agnost takes advantage of the Kubernetes architecture,
its robustness and scalability, to deliver a highly customizable platform for
developers to define their application infrastructure needs, such as databases,
message queues, cache systems, and more. It simplifies many Kubernetes
operations, making it easier for developers to focus on coding while enjoying
the benefits of Kubernetes.
