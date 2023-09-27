---
title: Deploying Applications with Helm Charts on Kubernetes
slug: deploying-applications-with-helmcharts-on-kubernetes
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
  - helm charts
image: /img/blog/2023-06-23/banner.jpg
tags: [kubernetes, deployment, helm charts]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"

<head>
  <title>Deploying Applications with Helm Charts on Kubernetes</title>
  <meta
    property="og:title"
    content="Deploying Applications with Helm Charts on Kubernetes"
  />
  <meta
    name="twitter:title"
    content="Deploying Applications with Helm Charts on Kubernetes"
  />
</head>

Ahoy, DevOps explorers! Your journey continues, and as you ride the waves of the
Kubernetes ocean, a new tool emerges in your navigation toolkit – Helm! Yes,
Helm, the de-facto package manager for Kubernetes. Consider Helm as your
trustworthy navigator, simplifying your journey and guiding you across the vast
Kubernetes seascape.

This guide will steer you from installing Minikube and Helm, to crafting your
Helm charts, and finally applying these charts to your Minikube clusters. In our
voyage, we'll be deploying a Node.js app with an ELK stack using Helm. Brace
yourselves for a thrilling voyage that will reveal the true value of Helm
charts. Let’s set sail!

## Installing Minikube & Helm

First things first, let's ensure we have all the necessary tools installed.

### Installing Minikube

In our previous expedition, we've already encountered Minikube. Remember that
Minikube is your personal local Kubernetes playground, allowing you to run
Kubernetes on your local machine.

If you've missed out on setting up Minikube in your previous voyage, fret not!
We've got you covered. Just run the following command:

```bash
brew install minikube
```

### Installing Helm

If Kubernetes is the sea, Helm is your chart, your guide through the turbulent
waves. Helm is the most popular package manager for Kubernetes, simplifying the
definition, storage, and management of Kubernetes applications.

Install Helm on your machine using the following command:

```bash
brew install helm
```

#### What is Helm and why is it important for Kubernetes?

Helm is a package manager for Kubernetes, which means it's a tool that assists
you in managing Kubernetes applications — think of it like npm for Node.js, or
apt for Debian. Helm deploys charts, which are packaged applications that can be
shared across the Kubernetes ecosystem. This is especially important because it
streamlines the process of getting applications up and running on a cluster.

When working with Kubernetes, you'll often find that you have many different
components that make up an application. Managing all these different pieces —
deployment configurations, services, volumes, etc. — can quickly become
unwieldy. Helm simplifies this process by bringing all these elements together
in one cohesive package called a chart. Thus, Helm becomes crucial for
Kubernetes as it saves you time and prevents errors that could occur from
manually deploying and managing Kubernetes applications.

## Building a Helm Chart

Now that we have our tools ready, it's time to delve into the exciting world of
Helm Charts!

1. **Creating Your Helm Chart**

   Helm uses a packaging format called charts. A chart is a collection of files
   that describe a related set of Kubernetes resources. Think of a chart as a
   blueprint for your Kubernetes application.

   To create a new chart, use the **`helm create`** command:

   ```bash
   helm create node-elk
   ```

   This creates a new directory **`node-elk`** with the structure of a chart.
   The directory will include several files and directories. The most important
   of them is the **`values.yaml`** file, which is the default configuration
   file for your chart.

2. **Customizing Your Chart**

Your new chart is generic and needs to be customized to describe your
application. Let's start customizing it!

Open the **`values.yaml`** file. This file contains default configuration values
for your chart. In a nutshell, **`values.yaml`** is where you configure the
components of your application.

For our Node.js application with the ELK stack, we'll need to specify the Docker
images, environment variables, ports, and other settings. We'll use the
configuration from our Docker Compose file as a reference.

```yaml
# values.yaml
replicaCount: 1
image:
  repository: node-elk
  tag: "latest"
  pullPolicy: IfNotPresent
service:
  type: ClusterIP
  port: 3000
```

Here, we specify that we want one replica of our application
**`replicaCount: 1`**. We define the Docker image to use
**`image.repository: node-elk`** and the tag for the Docker image
**`image.tag: latest`**, and we set the image pull policy
**`image.pullPolicy: IfNotPresent`**. We also define the service to expose our
application **`service.type: ClusterIP`** and the port our application is
exposed on **`service.port: 3000`**.

3. **Configuring Chart Metadata**

Now, open the **`Chart.yaml`** file. This file contains metadata about your
chart. Let's add some information about our Node.js app:

```yaml title="Chart.yaml"
apiVersion: v2
name: node-elk
description: A Helm chart for our Node.js app with the ELK stack
type: application
version: 1.0.0
appVersion: 1.0.0
```

Here, we specify the API version of Helm **`apiVersion: v2`**, the name of our
chart **`name: node-elk`**, a description
**`description: A Helm chart for our Node.js app with the ELK stack`**, the type
of the chart **`type: application`**, and the versions of our chart and our app
**`version: 1.0.0`** and **`appVersion: 1.0.0`**.

With this, we've crafted a basic Helm chart for our Node.js app.

## Charting the ELK Stack

Now, let's get our ELK stack sailing smoothly with Helm. We need to create a
separate chart for each component: Elasticsearch, Logstash, and Kibana.

For each component, we follow the steps we used for our Node.js app: create a
new chart, customize the **`values.yaml`** file, and configure the chart
metadata in the **`Chart.yaml`** file.

But here's some good news – there are already pre-configured Helm charts for
Elasticsearch, Logstash, and Kibana provided by Elastic. So, we don't need to
create these charts from scratch. To add these pre-configured charts to your
Helm repository, run:

```bash
helm repo add elastic https://helm.elastic.co
```

You can then install these charts using **`helm install`**:

```bash
helm install elasticsearch elastic/elasticsearch
helm install logstash elastic/logstash
helm install kibana elastic/kibana
```

Helm will use the configurations specified in the default **`values.yaml`** file
for each chart. If you want to customize the charts, you can create your own
**`values.yaml`** file and use it with the **`helm install`** command:

```bash
helm install elasticsearch elastic/elasticsearch -f myvalues.yaml
helm install logstash elastic/logstash -f myvalues.yaml
helm install kibana elastic/kibana -f myvalues.yaml
```

Now, both our Node.js app and our ELK stack are ready to sail! But before we set
sail, we need to configure our Node.js app to send logs to Logstash.

#### What are the benefits of using Helm with the ELK Stack?

The ELK stack, composed of Elasticsearch, Logstash, and Kibana, is a powerful
trio used for managing, analyzing, and visualizing log data. When combined with
Kubernetes, it provides an efficient way to handle the logs generated by your
applications running on the cluster.

Helm comes into play by streamlining the deployment and management of the ELK
stack on your Kubernetes cluster. With Helm, you can package the configuration
of all components of the ELK stack into reusable charts. This means that
deploying the ELK stack becomes as simple as running a single Helm install
command, drastically reducing the complexity and margin for error compared to
manually configuring each component.

Furthermore, Helm's power extends beyond the initial deployment. Once your ELK
stack is up and running, Helm makes it easy to upgrade your stack, roll back to
a previous version if something goes wrong, or even scale your stack to handle
more data. This flexibility and control make Helm a valuable tool when working
with complex stacks like the ELK stack.

## Deploying Your Helm Charts

With our Helm charts ready, it's time to set sail! To deploy our Helm charts to
our Minikube cluster, we use the helm install command:

```bash
helm install node-elk ./node-elk
```

This command deploys our Node.js app to our Minikube cluster. Helm will use the
configurations specified in the **`values.yaml`** file of our chart.

That's it, sailor! Your Node.js app with the ELK stack is now sailing smoothly
in your Minikube cluster, all thanks to your Helm charts!

This voyage has shown you how Helm charts can simplify deploying applications on
Kubernetes. They provide a standard, versioned, and sharable way to package your
applications, making your Kubernetes journey smoother and more enjoyable.

## Accessing Your Deployed Application and ELK Stack

Now that your Node.js application and ELK stack are smoothly sailing in your
Minikube cluster, let's see how we can access them.

1. **Accessing Your Node.js Application**

To access your Node.js application, you need to find the port that your
application is exposed on. Run the following command:

```bash
minikube service node-elk --url

# Output
http://xxx.xxx.xxx.xxx:3000
```

Open the returned URL in your web browser to access your Node.js application.

2. **Accessing Kibana**

Similarly, to access Kibana, you need to find the port that Kibana is exposed
on. Run the following command:

```bash
minikube service kibana-kibana --url

# Output
http://xxx.xxx.xxx.xxx:5601
```

Open the returned URL in your web browser to access Kibana.

## Managing Your Helm Releases

Helm isn't just about deploying applications – it's also about managing the
lifecycle of your applications.

1. **Upgrading Your Helm Release**

If you want to upgrade your application, you can modify the **`values.yaml`**
file in your chart and then use the **`helm upgrade`** command:

```bash
helm upgrade node-elk ./node-elk

# Output
Release "node-elk" has been upgraded. Happy Helming!
```

Helm will perform a rolling update of your application, ensuring zero downtime.

2. **Rolling Back Your Helm Release**

If something goes wrong with your application after an upgrade, you can roll
back to a previous version using the **`helm rollback`** command:

```bash
helm rollback node-elk 1

# Output
Rollback was a success! Happy Helming!
```

This command rolls back your **`node-elk`** release to revision 1.

3. **Deleting Your Helm Release**

If you no longer need your application, you can delete it using the
**`helm uninstall`** command:

```bash
helm uninstall node-elk

# Output
release "node-elk" uninstalled
```

This command removes your **`node-elk`** release from your Kubernetes cluster.

With these Helm commands, you can easily manage the lifecycle of your
applications, from deployment to upgrade and rollback, and finally to deletion.

## Final Reflection

In the grand scheme of Kubernetes, Helm charts bring substantial value by
encapsulating all elements of a Kubernetes application into a single, versioned,
and shareable package. This significantly simplifies the deployment and
management of Kubernetes applications, particularly when dealing with complex
applications or software stacks.

Helm charts are flexible and can be deployed across various environments, from a
local Minikube cluster to a large-scale production cluster in the cloud. They
can also scale your application to handle more traffic simply by changing a
single value and upgrading your release.

But perhaps the most significant value of Helm charts is their shareability.
Once a Helm chart is created, it can be shared and used by others, promoting
code reuse and collaboration. This ultimately speeds up development and
deployment processes, making Helm charts an invaluable tool in any Kubernetes
developer's arsenal.

Congratulations on your successful voyage, sailor! Happy Helming! 🎉
