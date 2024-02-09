---
sidebar_position: 1
---

# System Requirements

Before installing Agnost, it's important to ensure your system meets the
following minimum requirements:

### Hardware Requirements

- **Processor:** 2 GHz or faster processor
- **Memory:** 4 GB RAM minimum (8 GB RAM recommended)
- **Storage:** 20 GB of available disk space

### Software Requirements

- **Operating System:** Any modern operating system that can run Docker,
  Kubernetes, and Helm is supported, including but not limited to:

  - **Linux** (Ubuntu 18.04 or later, CentOS 7 or later)
  - **macOS** (10.14 Mojave or later)
  - **Windows** (Windows 10 Pro or Enterprise 64-bit, with version 1607 or
    later)

- **Docker:** Docker 20.10 or later. Docker is used to build and manage your
  application containers. You can download Docker
  [here](https://docs.docker.com/get-docker/).

- **Minikube:** If you plan to run Agnost in your local computer using Minikube then you may also need to install Minikube. You can install Minikube
  from [here](https://minikube.sigs.k8s.io/docs/start/).

- **Kubernetes:** Kubernetes 1.24 or later. Kubernetes is the platform where
  your applications will be deployed. Instructions for installing Kubernetes can
  be found [here](https://kubernetes.io/docs/setup/).

- **Kubernetes Control Tools:** You can choose from several options to interact
  with your Kubernetes cluster:

  - **kubectl:** kubectl v1.18 or later. Kubectl is a command-line tool for
    managing your Kubernetes cluster. You can install kubectl following the
    guide [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/).
  - **Alternative Tools:** Other tools like
    [Skaffold](https://skaffold.dev/docs/install/),
    [K9s](https://k9scli.io/topics/install/), or [Lens](https://k8slens.dev/)
    can also be used to manage your Kubernetes applications. Select the one that
    best fits your workflow.

- **Helm:** Helm 3.0 or later. Helm is a package manager for Kubernetes that
  simplifies the process of deploying and managing applications. You can install
  Helm from [here](https://helm.sh/docs/intro/install/).

Please note that these are the minimum requirements. Depending on the complexity
and size of your applications, you may require additional resources.

In the following sections, we'll guide you through the installation process,
setting up your environment, and preparing for your first Agnost deployment.
Stay tuned to get the most out of Agnost's powerful features for your
development needs.
