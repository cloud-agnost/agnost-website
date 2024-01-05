---
sidebar_position: 2
---

# Installation - Minikube

Agnost offers a simplified installation process that can be executed with a few
commands. Before proceeding with the installation, ensure your system fulfills
the [system requirements](/docs/installation/system-requirements).

## Prerequisites

Before you begin, ensure that you have the following software installed:

- [Docker](https://docs.docker.com/get-docker/): Utilized to build and manage
  your application containers.
- [Kubernetes](https://kubernetes.io/docs/setup/): The platform where your
  applications will be deployed.
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/): A
  command-line tool for managing your Kubernetes cluster.
- [Helm](https://helm.sh/docs/intro/install/): Helm is a package manager for
  Kubernetes that simplifies the process of deploying and managing applications.
- [Minikube](https://minikube.sigs.k8s.io/docs/start/): Minikube is a tool that
  enables you to run Kubernetes locally.

## Step 1: Set Up Your Local Development Environment

Before deploying your application with Agnost, ensure that you have set up your
local development environment correctly. Follow these additional steps:

1. **Start Minikube with the following resource specifications:**

```bash
minikube start --cpus=4 --memory 8192

# Output:
# 😄  minikube v1.31.2 on Darwin 13.3 (arm64)
# ✨  Automatically selected the docker driver
# 📌  Using Docker Desktop driver with root privileges
# 👍  Starting control plane node minikube in cluster minikube
# 🚜  Pulling base image ...
# 💾  Downloading Kubernetes v1.27.4 preload ...
#     > preloaded-images-k8s-v18-v1...:  327.74 MiB / 327.74 MiB  100.00% 6.99 Mi
#     > gcr.io/k8s-minikube/kicbase...:  404.50 MiB / 404.50 MiB  100.00% 6.29 Mi
# 🔥  Creating docker container (CPUs=4, Memory=8192MB) ...
# 🐳  Preparing Kubernetes v1.27.4 on Docker 24.0.4 ...
#     ▪ Generating certificates and keys ...
#     ▪ Booting up control plane ...
#     ▪ Configuring RBAC rules ...
# 🔗  Configuring bridge CNI (Container Networking Interface) ...
# 🔎  Verifying Kubernetes components...
#     ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
# 🌟  Enabled addons: storage-provisioner, default-storageclass
# 🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

2. **Enable the Ingress addon for Minikube:**

```bash
minikube addons enable ingress

# Output:
# 💡  ingress is an addon maintained by Kubernetes. For any concerns contact minikube on GitHub.
# You can view the list of minikube maintainers at: https://github.com/kubernetes/minikube/blob/master/OWNERS
# 💡  After the addon is enabled, please run "minikube tunnel" and your ingress resources would be available at "127.0.0.1"
#     ▪ Using image registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20230407
#     ▪ Using image registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20230407
#     ▪ Using image registry.k8s.io/ingress-nginx/controller:v1.8.1
# 🔎  Verifying ingress addon...
#  	🌟  The 'ingress' addon is enabled
```

3. **Start a Minikube tunnel to expose services to the host machine:**

```bash
minikube tunnel

# Output:
# ✅  Tunnel successfully started

# 📌  NOTE: Please do not close this terminal as this process must stay alive for the tunnel to be accessible ...

# 🏃  Starting tunnel for service kourier.
# ❗  The service/ingress engine-realtime-ingress requires privileged ports to be exposed: [80 443]
# 🔑  sudo permission will be asked for it.
# ❗  The service/ingress env-2a6tuaenfqw1-ingress requires privileged ports to be exposed: [80 443]
# 🏃  Starting tunnel for service engine-realtime-ingress.
# 🔑  sudo permission will be asked for it.
# 🏃  Starting tunnel for service env-2a6tuaenfqw1-ingress.
# ❗  The service/ingress platform-core-ingress requires privileged ports to be exposed: [80 443]
# 🔑  sudo permission will be asked for it.
# ❗  The service/ingress platform-sync-ingress requires privileged ports to be exposed: [80 443]
# 🔑  sudo permission will be asked for it.
# 🏃  Starting tunnel for service platform-core-ingress.
# 🏃  Starting tunnel for service platform-sync-ingress.
# ❗  The service/ingress studio-ingress requires privileged ports to be exposed: [80 443]
# 🔑  sudo permission will be asked for it.
# 🏃  Starting tunnel for service studio-ingress.
```

## Step 2: Install Agnost

1. **Add the Agnost Helm repository:**

```bash
helm repo add cloud-agnost https://cloud-agnost.github.io/charts

# Output:
"cloud-agnost" has been added to your repositories
```

2. **Install Agnost Helm chart:**

```bash
helm install agnost cloud-agnost/base

# Output:
# NAME: agnost
# LAST DEPLOYED: Tue Sep 26 15:57:17 2023
# NAMESPACE: default
# STATUS: deployed
# REVISION: 1
# TEST SUITE: None
# NOTES:
# 👍  Agnost community cluster installation has started!
# ⏳  It might take 5-10 minutes to complete the required deployments. Please check your cluster deployment status by running:

#     kubectl get pods

# 💡  Below is your cluster information. Please keep this information in a safe place.
# 💡  You will need "Cluster Access Token" to finalize the cluster set-up through Agnost Studio which is installed in your Kubernetes cluster.

# Cluster ID            : cls-zdktvyowd1
# Cluster Access Token  : at-bjuqekzaewgjrkhevmgxbutwtw8
# Engine Access Token   : at-z25balv3yw4hamzyognlmmdmmyo
# Platform Access Token : mt-djcnzvj3eeb3byvht09tywr1mcq

# 📣  As a next step, you need to finalize your cluster set-up by creating your user account through Agnost Studio.
# 📣  To launch Agnost Studio, type the URL or IP address of your cluster on your browser (e.g., http(s)://<your cluster URL or IP>).
# 🌍  If you have installed your cluster locally you can access Agnost Studio at http://localhost
```

Congratulations! You have now successfully set up Agnost Studio and your local
development environment, allowing you to develop and deploy applications with
ease.

<!--
## Step 3: Install Agnost Studio

1. **Clone the Agnost Studio repository:**

```bash
git clone https://github.com/cloud-agnost/agnost-community.git
```

2. **Navigate to the 'k8s' folder inside the 'agnost-community' directory:**

```bash
cd agnost-community/k8s
```

3. **Start the Skaffold development environment:**

```bash
skaffold dev
```

4. **Open a new terminal and navigate to the 'studio' folder inside the
   'agnost-community' directory:**

```bash
cd agnost-community/studio
```

5. **Install the required dependencies:**

```bash
npm install
```

6. **Run Agnost Studio in development mode:**

```bash
npm run dev

# Output:

# > studio@0.0.0 dev
# > vite

#   VITE v4.3.9  ready in 305 ms

#   ➜  Local:   http://localhost:4000/
#   ➜  Network: http://192.168.1.102:4000/
#   ➜  press h to show help

``` -->
