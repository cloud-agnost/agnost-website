---
title: Deploying Applications with Kubernetes
slug: deploying-applications-with-kubernetes
author: Deniz Colak
author_title: Co-Founder
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  Explore how to deploy applications with Kubernetes and learn deploying ELK
  stack with Kubernetes. Discover the step-by-step guide to deploying
  applications.
keywords:
  - kubernetes
  - deployment
  - docker
image: /img/blog/2023-06-21/banner.jpg
tags: [kubernetes, deployment, docker]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"

<head>
  <title>Deploying Applications with Kubernetes — Step-by-Step Guide</title>
  <meta
    property="og:title"
    content="Deploying Applications with Kubernetes — Step-by-Step Guide"
  />
  <meta
    name="twitter:title"
    content="Deploying Applications with Kubernetes — Step-by-Step Guide"
  />
</head>

Docker? Kubernetes? Minikube? Do these terms make you feel like you're drowning
in a sea of containerization chaos? If so, fear not. We're here to throw you a
lifesaver! In this post, we'll explore how to deploy applications with
Kubernetes and create a deployment. By the end of this tutorial, you'll be able
to deploy your applications with Kubernetes.

## Introduction

Microservices and containerization have taken the world by storm, radically
transforming how we develop, deploy, and manage applications. But as Spiderman's
Uncle Ben wisely stated, "With great power comes great responsibility." While
Docker provides us the power to containerize applications, managing these
containers can become a Herculean task. Enter Kubernetes, the superhero of
container orchestration. Now, you might be wondering, "How do I get started with
Kubernetes?"

In this post, we'll provide a step-by-step guide to get you up and running with
Kubernetes using Minikube, and deploy your applications like a pro.

## Prerequisites

Before embarking on our Kubernetes adventure, there are a few tools you'll need
in your utility belt:

1. Basic understanding of Docker and Linux commands.
2. Familiarity with a programming language (Python or JavaScript recommended).
3. A computer with at least 2GB of free memory and 20GB of free disk space.

Ready? Let's set sail!

## Installing Minikube

Our first stop is installing Minikube, a tool that runs a single-node Kubernetes
cluster on your personal computer. Think of Minikube as your personal sandbox
where you can play around and get comfortable with Kubernetes.

1.  **Download Minikube**

    - Depending on your OS, the installation process may vary. You can find
      detailed instructions on the official
      [Minikube GitHub page](https://github.com/kubernetes/minikube).

2.  **Install Minikube**

    - Once downloaded, install Minikube. For instance, on a Linux system, you'd
      run:

      ```shell
      chmod +x minikube
      sudo mv minikube /usr/local/bin/
      ```

3.  **Verify Your Installation**

    - Run **`minikube version`** to confirm the installation. We can't emphasize
      enough the importance of verifying at each step. In programming, as in
      life, little confirmations help us ensure we're on the right track!

Next stop, Docker!

## Setting Up Docker

Docker is the lifeblood of any Kubernetes system. You may think of Docker as a
magic box, where you put in your application and all its dependencies, and out
comes a self-sufficient package - a Docker container. A "ship", if you will,
ready to sail on any sea without worrying about the compatibility of ports. Now,
let's get our Docker shipyard set up, shall we?

1. **Install Docker**

   - Installation procedures vary by system. Detailed installation instructions
     for various operating systems can be found at the
     [Docker website](https://docs.docker.com/engine/install/).

2. **Verify Your Installation**

   - Use the command **`docker --version`** to ensure Docker has been installed
     correctly. Remember our rule of thumb about verification at each step? This
     is no exception!

Great! With Docker installed, you are ready to build your fleet of applications.

## Understanding Kubernetes Basics

Before we dive into action, it's time for a quick theory class. But don't worry!
This won't be your typical snooze-inducing lecture. Let's envision Kubernetes as
a busy seaport.

- **Pods**: Think of Pods as individual boats. Each Pod can hold one or more
  containers (your Docker applications).
- **Deployments**: Now, imagine if you were a harbor master, would you manually
  manage each boat? Or would you rather set some rules and let things run
  automatically? If you chose the latter, you've got the idea of Deployments.
  They're like automated managers for your Pods.
- **Services**: Finally, Services are the routes in our sea that guide traffic
  to the right boat.

Armed with these basics, you are ready to navigate the Kubernetes sea!

:::tip

If you'd like to learn more about **Kubernetes architecture**, check out our
blog on
[Exploring Kubernetes Architecture](/blog/exploring-kubernetes-architecture).

:::

## Building a Docker Image

Before we begin, make sure you have Node.js and npm (node package manager)
installed on your local system. Node.js is a powerful JavaScript runtime built
on Chrome's V8 JavaScript engine.

1. **Creating the Node.js App**

Begin by setting up a simple Express.js application. Create a directory for your
app and initialize it with a **`package.json`** file:

```bash
$ mkdir node-elk && cd node-elk
$ npm init -y
```

Install Express.js, a popular web application framework for Node.js:

```bash
$ npm install express
```

Create an **`app.js`** file and add the following code:

```javascript
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  console.log("Hello ELK!")
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
```

This simple application serves a 'Hello World!' page and logs a "Hello ELK!"
message to the console each time the page is accessed.

2. **Creating the Dockerfile**

Next, we'll craft the Docker image for this application. In your **`node-elk`**
directory, create a **Dockerfile**:

```docker fileNode.js
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

This Dockerfile tells Docker to use the official Node.js image as a base, sets a
working directory, copies over your application and its dependencies, exposes
the correct port, and finally, launches your application.

3. **Building the Docker Image**

Run the following command to build your Docker image:

```bash
docker build -t node-elk:latest .
```

Congratulations, sailor! You've built a Docker ship hosting a Node.js app. Next,
we'll set up the ELK stack to manage the logs from our application.

## Setting Up the ELK Stack

1. **Setting Up the ELK Stack**

The ELK Stack consists of Elasticsearch, Logstash, and Kibana. Elasticsearch is
a search and analytics engine, Logstash is a server-side data processing
pipeline, and Kibana lets users visualize data with charts and graphs.

We'll use Docker Compose to set up the ELK stack. Create a
**`docker-compose.yml`** file and add the following:

```yaml
version: "3"
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
    environment:
      - node.name=elasticsearch
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=elasticsearch
      - cluster.initial_master_nodes=elasticsearch
      - bootstrap.memory_lock=true
      - ES_JAVA_OPTS=-Xms512m -Xmx512m
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - esdata1:/usr/share/elasticsearch/data
    ports:
      - 9200:9200

  logstash:
    image: docker.elastic.co/logstash/logstash:7.14.0
    ports:
      - 5000:5000
    environment:
      LS_JAVA_OPTS: "-Xmx256m -Xms256m"
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:7.14.0
    ports:
      - 5601:5601
    depends_on:
      - elasticsearch

volumes:
  esdata1:
    driver: local
```

This Compose file sets up three services – Elasticsearch, Logstash, and Kibana.
It also specifies their relationships, configures their settings, and maps the
required ports.

:::note

The **`logstash.conf`** file is not created yet. It'll be our next step.

:::

2. **Setting Up Logstash**

Logstash will process the logs from our application and send them to
Elasticsearch. For this, it needs a configuration file.

Create a **`logstash.conf`** file and add the following:

```unix
input {
  tcp {
    port => 5000
  }
}

output {
  elasticsearch {
    hosts => ["elasticsearch:9200"]
  }
}
```

This configuration tells Logstash to listen for logs on TCP port 5000 and output
them to Elasticsearch.

:::note

Great job, captain! You've now built a Docker image hosting a Node.js app that
generates logs, and set up an ELK stack to ingest and analyze those logs.

:::

In the next steps, we'll explore how to run this setup in a Kubernetes
environment and visualize logs with Kibana. But for now, take a moment to
appreciate your accomplishments! 🎉

## Running Your Docker Image in Minikube

With our Docker image ready and our ELK stack in place, we're ready to launch
our setup in a Minikube environment.

1. **Start Minikube**

Begin by starting your Minikube cluster:

```bash
minikube start
```

2. **Set Docker Environment**

Make sure that your Docker CLI is pointing to the Docker daemon inside Minikube:

```bash
eval $(minikube docker-env)
```

3. **Create a Kubernetes Deployment**

Now, let's deploy our Node.js application using a Kubernetes Deployment:

```bash
kubectl run node-elk --image=node-elk:latest --image-pull-policy=Never
```

4. **Expose the Application**

Make your application accessible by exposing it as a service:

```bash
kubectl expose deployment node-elk --type=NodePort --port=3000
```

Well done! Our application is now running on Kubernetes. But what about the
logs? That's where the ELK stack comes into play.

## Deploying the ELK Stack on Kubernetes

Deploying the ELK stack on Kubernetes requires a bit more setup, so let's take
it one step at a time.

1. **Create Persistent Volumes**

Elasticsearch requires persistent storage, so we'll create a PersistentVolume
and a PersistentVolumeClaim.

Create a file named **`elasticsearch-pv.yaml`** and add the following:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: elasticsearch-pv
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: "/mnt/data"
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: elasticsearch-pvc
spec:
  storageClassName: standard
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
```

This YAML file creates a PersistentVolume and a PersistentVolumeClaim with a 5GB
storage capacity. It also specifies the access mode and the storage class.
Finally, it maps the volume to the **`/mnt/data`** directory on the host. This
directory will be used to store the Elasticsearch data. You can change this path
to a directory of your choice. Just make sure that the directory exists on the
host. If it doesn't, create it using the following command:

```bash
mkdir /mnt/data
```

Apply the PersistentVolume and PersistentVolumeClaim:

```bash
kubectl apply -f elasticsearch-pv.yaml
```

2. **Create Kubernetes Deployments and Services for ELK Stack**

Create separate Deployment and Service manifests for Elasticsearch, Logstash,
and Kibana.

For Elasticsearch, create a **`elasticsearch-deployment.yaml`** file with the
following content:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: elasticsearch
spec:
  replicas: 1
  selector:
    matchLabels:
      app: elasticsearch
  template:
    metadata:
      labels:
        app: elasticsearch
    spec:
      containers:
        - name: elasticsearch
          image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
          env:
            - name: discovery.type
              value: single-node
          volumeMounts:
            - mountPath: /usr/share/elasticsearch/data
              name: elasticsearch-storage
      volumes:
        - name: elasticsearch-storage
          persistentVolumeClaim:
            claimName: elasticsearch-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: elasticsearch
spec:
  selector:
    app: elasticsearch
  ports:
    - protocol: TCP
      port: 9200
      targetPort: 9200
```

Apply the Elasticsearch Deployment and Service:

```bash
kubectl apply -f elasticsearch-deployment.yaml
```

Similarly, create Deployment and Service manifests for **Logstash** and
**Kibana**, and apply them. Be sure to set the correct Docker image, environment
variables, ports, and other configuration settings as we defined in the Docker
Compose file.

## Exploring Your Logs with Kibana

With your Node.js application and the ELK stack running in Kubernetes, you can
now explore your logs with Kibana.

1. **Access Kibana**

To access Kibana, you need to find the port that Kibana is exposed on. Run the
following command:

```bash
minikube service kibana --url
```

Open the returned URL in your web browser to access Kibana.

2. **Set Up an Index Pattern**

In Kibana, set up an index pattern in the Management section to tell Kibana what
Elasticsearch index to analyze.

3. **Explore Your Logs**

Finally, navigate to the Discover section in Kibana to start exploring your
logs.

:::tip Congratulations 🎉

Congratulations, captain! ⛴️ You've successfully deployed a Node.js application
with the ELK stack on Kubernetes and learned to visualize your application logs
with Kibana. Quite a voyage, isn't it?

:::

## Preparing a Local Kubernetes Development Environment

Remember how we talked about Kubernetes being a bustling seaport? Well, running
that efficiently requires more than just the basics. It requires an array of
specialized tools to manage different aspects of the harbor. Similarly, a
professional-grade Kubernetes development environment demands a suite of
additional tools to boost productivity and ease various tasks. Let's discuss a
few of these indispensable tools.

1. **Helm:** Consider Helm as your package manager for Kubernetes, akin to
   **`npm`** or **`pip`** in the world of Python and JavaScript. Helm uses a
   packaging format called charts, which are collections of files that describe
   a related set of Kubernetes resources. Helm charts help you define, install,
   and upgrade complex Kubernetes applications, simplifying the deployment and
   management of applications.

2. **Skaffold:** Skaffold is like your local Kubernetes "workshop", allowing you
   to develop and debug applications directly in your cluster. It supports an
   active development mode, where it watches your local source code for changes
   and automatically builds, pushes, and deploys your application. Skaffold also
   aids in continuous integration/continuous delivery (CI/CD) by providing
   pipeline automation.

3. **K9s:** K9s provides a terminal-based UI to interact with your Kubernetes
   clusters, making it easier to navigate, observe, and manage your
   applications. It’s like the advanced radar system for your harbor, providing
   a real-time view of your fleet's status. K9s continually watches Kubernetes
   for changes and offers subsequent commands to interact with your observed
   resources.

4. **Kompose:** If you are transitioning from Docker Compose to Kubernetes,
   Kompose is a handy tool. It helps convert Docker Compose files into
   Kubernetes resources, smoothing your journey to Kubernetes.

5. **Kubetail:** This little utility allows you to aggregate logs from multiple
   pods into one stream. It's like having ears on every boat in the harbor and
   tuning into their conversations.

6. **Lens:** Lens is a powerful IDE for people who need to deal with Kubernetes
   clusters daily. It provides full situational awareness for everything that
   runs in Kubernetes, improving productivity by simplifying complex workflows
   and providing observability.

7. **Minikube vs kind (Kubernetes in Docker):** We've used Minikube for this
   tutorial, but another popular tool is kind. While Minikube runs a single-node
   Kubernetes cluster inside a VM, kind runs Kubernetes clusters using Docker
   container "nodes". Both tools have their strengths, so choose one based on
   your specific requirements.

Investing time to master these tools will drastically enhance your Kubernetes
journey. Each tool adds a new dimension to your Kubernetes toolbox, empowering
you to manage your applications more effectively and efficiently. So, set sail
and explore these powerful tools in the vast sea of Kubernetes!

## Conclusion

So here we are, at the end of this adventure, but don't be mistaken – this is
just the beginning. The Kubernetes sea is vast, with countless tools and
techniques to explore. Keep learning, keep exploring, and most importantly,
enjoy the voyage. Bon voyage, sailor!

Keep sailing! ⛵
