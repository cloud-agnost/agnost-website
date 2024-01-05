---
sidebar_position: 3
---

# Installation - Docker Desktop

# Installation - Docker Desktop

This section guides you through the installation process of Agnost on Docker
Desktop. Agnost provides a simplified installation procedure that can be
executed with just a few commands. Before proceeding with the installation,
ensure that your system meets the
[system requirements](/docs/installation/system-requirements).

## Prerequisites

Before you begin, make sure you have the following software installed:

- [Docker](https://docs.docker.com/get-docker/): Used for building and managing
  application containers.
- [Kubernetes](https://kubernetes.io/docs/setup/): The platform where your
  applications will be deployed.
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/): A
  command-line tool for managing your Kubernetes cluster.
- [Helm](https://helm.sh/docs/intro/install/): Helm is a package manager for
  Kubernetes, simplifying the deployment and management of applications.
- [Docker Desktop](https://www.docker.com/products/docker-desktop): Ensure you
  have Docker Desktop installed and running.

## Step 1: Set Up Your Local Development Environment

Before deploying your application with Agnost, ensure that your local
development environment is set up correctly. Follow these additional steps:

1. **Start Docker Desktop Kubernetes:**

   Ensure Docker Desktop Kubernetes is running, as Agnost will utilize it for
   the installation.

2. **Add the Agnost Helm Repository:**

   To install Agnost, add the Agnost Helm repository to your Helm configuration:

   ```
   helm repo add cloud-agnost https://cloud-agnost.github.io/charts
   helm repo update
   ```

3. **Install Agnost Helm Chart:**

   Execute the following command to install Agnost on your Docker Desktop
   Kubernetes cluster:

   ```
   helm install agnost cloud-agnost/base
   ```

   Agnost will be deployed to your Kubernetes cluster.

4. **Enable the Ingress Addon for Kubernetes:**

   Docker Desktop Kubernetes does not have an Ingress plugin by default. You can
   install it via Helm chart with the following command:

   ```
   helm upgrade --install agnost cloud-agnost/base --namespace agnost --create-namespace \
                --set ingress-nginx.enabled=true
   ```

   This command enables the Ingress addon required for Agnost.

5. **Check Pod Status:**

   Verify that MongoDB, RabbitMQ, and Redis pods are running by executing the
   following command:

   ```
   kubectl get pods -n agnost
   ```

   ```
   $> kubectl get pods -n agnost
   NAME                                           READY   STATUS    RESTARTS      AGE
   engine-monitor-deployment-6d5569878f-nrg7q     1/1     Running   0             8m8s
   engine-realtime-deployment-955f6c77b-2wx52     1/1     Running   0             8m8s
   engine-scheduler-deployment-775879f956-fq4sc   1/1     Running   0             8m8s
   engine-worker-deployment-76d94cd4c9-9hsjc      1/1     Running   0             8m8s
   minio-594ff4f778-hvk4t                         1/1     Running   0             8m8s
   mongodb-0                                      2/2     Running   0             7m57s
   platform-core-deployment-5f79d59868-9jrbm      1/1     Running   0             8m8s
   platform-sync-deployment-7c8bf79df6-h2prc      1/1     Running   0             8m8s
   platform-worker-deployment-868cb59558-rv86h    1/1     Running   0             8m8s
   rabbitmq-server-0                              1/1     Running   0             7m49s
   redis-master-0                                 1/1     Running   0             8m8s
   studio-deployment-7fdccfc77f-pxsfj             1/1     Running   0             8m8s

   ```

   It may take a few minutes for the pods to start, depending on your local
   resources and internet connection.

6. **Obtain Ingress IP Address:**

   To access your application, you need the IP address of the Ingress. Retrieve
   it with the following command:

   ```
   kubectl get svc -n ingress-nginx -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}'
   ```

Alternatively, you can find the IP address in the `EXTERNAL-IP` field when
running `kubectl get svc -n ingress-nginx`.

```
# get the IP address of the Ingress --> EXTERNAL-IP field
$> kubectl get svc -n ingress-nginx
NAME                              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE
agnost-ingress-nginx-controller   LoadBalancer   10.245.185.76   192.168.49.2     80:30323/TCP,443:31819/TCP   7m1s

# or to get it via script:
kubectl get svc -n ingress-nginx -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}'
```

7. **Access Your Application:**

   Open your web browser and enter the Ingress IP address (e.g.,
   `http://192.168.49.2` for the given example above) to access your
   application.

Congratulations! You have successfully set up Agnost on Docker Desktop,
configured your local development environment, and can now develop and deploy
applications with ease.
