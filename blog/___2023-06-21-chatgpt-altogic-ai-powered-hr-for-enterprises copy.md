---
title: Deploying Applications with Kubernetes
slug: deploying-applications-with-kubernetes
author: Deniz Colak
author_title: Co-Founder
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  Let's explore how to deploy applications with Kubernetes. Learn how to deploy
  applications with Kubernetes, and create a deployment, scale up and down.
keywords:
  - kubernetes
  - deployment
  - docker
image: /img/blog/2023-04-25/banner.png
tags: [kubernetes, deployment, digital transformation]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"

<head>
  <title>
    Deploying Applications with Kubernetes - Step-by-Step Guide for Beginners
  </title>
</head>

Are you looking to deploy your applications using Kubernetes? In this
comprehensive guide, we will walk you through the process of deploying
applications with Kubernetes, from installation to scaling and managing updates.
By the end of this tutorial, you will have a solid understanding of how to
leverage Kubernetes for your application deployments.

## Introduction to Kubernetes

Kubernetes is an open-source container orchestration platform that simplifies
the deployment, scaling, and management of containerized applications. It
provides a powerful set of features for automating tasks like load balancing,
rolling updates, and self-healing. With Kubernetes, you can ensure high
availability, fault tolerance, and scalability for your applications.

## Installation and Setup

Before diving into Kubernetes, you need to install and set it up on your local
machine or server. There are several ways to install Kubernetes, including
Minikube, kubeadm, and cloud-managed Kubernetes services like Azure AKS, Amazon
EKS or Google GKE. In this section, we'll guide you through the installation
process and help you choose the best option for your needs.

```bash
# Installing Kubernetes with Minikube
$ curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
$ sudo install minikube-linux-amd64 /usr/local/bin/minikube
$ minikube start
```

```bash
# Installing Kubernetes with Kubeadm
$ curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
$ sudo apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"
$ sudo apt-get update
$ sudo apt-get install -y kubelet kubeadm kubectl
$ sudo kubeadm init
```

```bash
# Installing Kubernetes with Amazon EKS
$ aws eks --region us-east-1 update-kubeconfig --name my-cluster
```

```bash
# Installing Kubernetes with Google GKE
$ gcloud container clusters create my-cluster
```

```bash
# Installing Kubernetes with Azure AKS
$ az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 1 --enable-addons monitoring --generate-ssh-keys
```

## Creating Your First Kubernetes Cluster

Once Kubernetes is installed, it's time to create your first cluster. A cluster
consists of a master node that controls the cluster and multiple worker nodes
where your applications run. In this step, we'll show you how to initialize the
master node and join worker nodes to the cluster.

```bash
# Creating a Kubernetes Cluster with Minikube
$ minikube start
```

```bash
# Creating a Kubernetes Cluster with kubeadm
$ kubeadm init --pod-network-cidr=10.244.0.0/16
$ mkdir -p $HOME/.kube
$ sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
$ sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

```bash
# Creating a Kubernetes Cluster with Amazon EKS
$ aws eks --region us-east-1 update-kubeconfig --name my-cluster
```

```bash
# Creating a Kubernetes Cluster with Google GKE
$ gcloud container clusters create my-cluster
```

## Containerizing Your Application with Docker

To deploy applications on Kubernetes, you need to containerize them using
Docker. Docker allows you to package your application and its dependencies into
a lightweight, portable container. In this section, we'll guide you through the
process of writing a Dockerfile, building a Docker image, and pushing it to a
container registry.

```bash
# Dockerfile for a Node.js Application
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "app.js" ]
```

```bash
# Building a Docker Image
$ docker build -t my-app .
```

```bash
# Pushing a Docker Image to a Container Registry
$ docker tag my-app gcr.io/my-project/my-app
$ docker push gcr.io/my-project/my-app
```

## Deploying Your Application with Kubernetes

With your application containerized, it's time to deploy it on Kubernetes.
Kubernetes provides various deployment options, including Deployments,
StatefulSets, and DaemonSets. In this section, we'll focus on using Deployments,
which provide declarative updates, scaling, and rollback capabilities. We'll
also show you how to use the kubectl command-line tool to manage your
deployments.

```yaml
# Deployment YAML for a Sample Application
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sample-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: sample-app
  template:
    metadata:
      labels:
        app: sample-app
    spec:
      containers:
        - name: sample-app
          image: your-registry/sample-app:v1
          ports:
            - containerPort: 8080
```

```bash
# Creating a Deployment with kubectl
$ kubectl create -f deployment.yaml
```

## Scaling and Managing Updates

Kubernetes makes it easy to scale your application and manage updates
seamlessly. You can scale your application horizontally by adjusting the number
of replicas, or vertically by changing resource limits. Additionally, Kubernetes
supports rolling updates and canary deployments to ensure smooth application
updates without downtime. In this section, we'll explore these scaling and
update strategies. We'll also show you how to use the kubectl command-line tool
to manage your deployments.

```bash
# Scaling a Deployment with kubectl
$ kubectl scale --replicas=5 deployment/sample-app
```

```bash
# Updating a Deployment with kubectl
$ kubectl set image deployment/sample-app sample-app=your-registry/sample-app:v2
```

```bash
# Rolling Back a Deployment with kubectl
$ kubectl rollout undo deployment/sample-app
```

### Minikube

Minikube is a tool that allows you to run Kubernetes locally on your machine.
It's a great option for developers who want to test their applications in a
Kubernetes environment without having to set up a cluster. Minikube is also
useful for learning how to use Kubernetes because it provides a simple way to
experiment with different features and configurations.

### Kubeadm

Kubeadm is a tool that automates the process of setting up a Kubernetes cluster.
It's designed to be used by system administrators who want to deploy Kubernetes
on their own infrastructure. Kubeadm is a great option for organizations that
want to run Kubernetes in production because it provides a simple way to set up
a cluster and manage its configuration.

### Cloud-managed Kubernetes services

Cloud-managed Kubernetes services like Amazon EKS and Google GKE are a great
option for organizations that want to run Kubernetes in production. These
services provide a simple way to set up a cluster and manage its configuration.
They also offer features like automatic scaling, rolling updates, and
self-healing.

## Deploying Applications with Kubernetes

In this section, we'll walk you through the process of deploying applications
with Kubernetes. We'll start by creating a deployment and then scale it up and
down. Finally, we'll show you how to manage updates for your application.

### Creating a Deployment

The first step in deploying an application with Kubernetes is creating a
deployment. A deployment is a Kubernetes object that defines how many replicas
of your application should be running at any given time. It also specifies which
container image should be used for each replica and what resources should be
allocated to it.

To create a deployment, you need to define a YAML file that contains the
following information:

- The name of your application
- The number of replicas you want to run
- The container image you want to use
- The resources you want to allocate to each replica

Here's an example of a YAML file that defines a deployment for a simple web
application:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app:latest
          resources:
            requests:
              cpu: 100m
              memory: 128Mi
            limits:
              cpu: 200m
              memory: 256Mi
```

Once you've created your YAML file, you can use the kubectl command to create a
deployment:

```bash

```
