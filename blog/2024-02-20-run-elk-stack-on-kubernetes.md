---
title: Run ELK Stack on Kubernetes
slug: run-elk-stack-on-kubernetes
author: Deniz Colak
author_title: Community Author
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  In this article, we will run the ELK stack on Kubernetes. We will use
  Kubernetes to deploy Elasticsearch, Logstash, and Kibana.
keywords:
  - kubernetes
  - deployment
  - docker
image: /img/blog/2024-02-20/banner.png
tags: [kubernetes, deployment]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"

<head>
  <title>Run ELK Stack on Kubernetes</title>
  <meta property="og:title" content="Run ELK Stack on Kubernetes" />
  <meta name="twitter:title" content="Run ELK Stack on Kubernetes" />
</head>

In the digital era, the ability to monitor and analyze application logs in
real-time is not just an advantage; it's a necessity. ELK Stack and Kubernetes,
a powerful combination for logging and monitoring. This combination not only
help developers with insights into their applications but also improves
performance and simplifies troubleshooting. In this article lets discover how
ELK on Kubernetes can leverage your operational intelligence to new heights.

### Understanding the ELK Stack

**Elasticsearch**, **Logstash**, and **Kibana** – together known as the ELK
Stack – form the cornerstone of modern logging solutions. Each component plays a
crucial role:

- **Elasticsearch** acts as the heart, efficiently indexing and storing logs for
  rapid search and retrieval. Its powerful analytics capabilities allow for deep
  dives into your data, uncovering trends and patterns.
- **Logstash** is the muscle, processing logs and enriching them before they're
  stored. It's incredibly flexible, supporting numerous inputs and outputs,
  transforming data on the fly.
- **Kibana** is the eyes, providing the visualization layer that makes sense of
  the data stored in Elasticsearch. From creating dynamic dashboards to sharing
  insights across teams, Kibana turns data into actionable knowledge.

Integrating the ELK Stack into your Kubernetes environment leverages the
strengths of both platforms, offering a scalable, reliable, and efficient
solution for managing application logs.

### Why Kubernetes for ELK?

Kubernetes, with its unmatched scalability and flexibility, is the perfect
habitat for your ELK stack. It not only simplifies deployment and management but
also enhances the ELK stack's capabilities by providing:

- **Scalability**: Automatically scale your ELK stack up or down based on
  demand, ensuring optimal resource utilization.
- **Reliability**: Kubernetes' self-healing mechanisms restart failed
  containers, replace and reschedule containers when nodes die, and kill
  containers that don't respond to your user-defined health check, ensuring your
  logging system is always operational.
- **Automation**: Automate the deployment, scaling, and operations of
  application containers, making your ELK stack more resilient and efficient.

Embracing Kubernetes for your ELK stack deployment transforms logging and
monitoring from a challenge into a strategic advantage.

### Setting Up Your Environment

Before deploying the ELK Stack on Kubernetes, a well-prepared environment is
key. Here's how to start:

1. **Choose Your Kubernetes Platform**: Whether it's a managed solution like
   Google Kubernetes Engine (GKE), Amazon EKS, or a self-managed cluster, select
   a platform that aligns with your operational preferences and technical
   requirements.
2. **Cluster Preparation**: Ensure your Kubernetes cluster is ready with the
   necessary resources (CPU, memory, and storage) to support the ELK stack.
   Implementing resource requests and limits is crucial to avoid resource
   contention.
3. **Storage Considerations**: Decide on your storage strategy. Elasticsearch
   requires persistent storage for resilience. Cloud-native storage solutions or
   dynamic provisioning can simplify storage management in Kubernetes.

With your environment set, you're poised to deploy the ELK stack, unlocking
powerful logging and monitoring capabilities for your applications.

Continuing from where we left off, let’s dive into deploying the ELK Stack on
Kubernetes, step by step. To extend your article with code blocks and commands
for a comprehensive setup, we'll include detailed YAML configurations and the
necessary commands for deploying each component of the ELK Stack on Kubernetes.

### Deploying the ELK Stack on Kubernetes

**1. Deploying Elasticsearch**

To deploy Elasticsearch, you need a StatefulSet for stable storage and a
headless service for stable networking.

Elasticsearch is the backbone of the ELK stack, handling the storage and search
of logs. To deploy Elasticsearch on Kubernetes:

- **StatefulSet**: Use a StatefulSet for Elasticsearch to ensure that your data
  persists across pod restarts. StatefulSets are ideal for stateful applications
  like Elasticsearch that require stable, unique network identifiers, persistent
  storage, and ordered deployment and scaling.
- **Persistent Volume**: Ensure you have a PersistentVolume (PV) or a dynamic
  storage provisioner in place to handle data storage requirements.
  Elasticsearch is data-intensive, and managing storage effectively is crucial
  for performance and reliability.
- **Configuration**: Use ConfigMaps to manage Elasticsearch configurations. This
  allows you to customize Elasticsearch settings without altering the container
  image.

Below is a simplified example:

**Elasticsearch StatefulSet (`elasticsearch-statefulset.yaml`):**

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: elasticsearch
spec:
  serviceName: elasticsearch
  replicas: 3
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
          image: docker.elastic.co/elasticsearch/elasticsearch:7.9.3
          ports:
            - containerPort: 9200
              name: http
          volumeMounts:
            - name: data
              mountPath: /usr/share/elasticsearch/data
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        resources:
          requests:
            storage: 10Gi
```

Deploy with:

```bash
kubectl apply -f elasticsearch-statefulset.yaml
```

**2. Deploying Logstash**

For Logstash, a Deployment or DaemonSet is used based on your specific needs.

Logstash processes and transforms logs before they are sent to Elasticsearch.
Deploying Logstash in Kubernetes can be achieved using Deployments or
DaemonSets, depending on your architecture.

- **Deployment vs. DaemonSet**: A Deployment is suitable if you’re ingesting
  logs from external sources. A DaemonSet ensures a Logstash instance runs on
  every node, perfect for collecting logs from each node’s containers.
- **Configuration**: Similar to Elasticsearch, use ConfigMaps for Logstash
  configurations. Define your input, filter, and output plugins to customize log
  processing.

Here's an example of a Deployment configuration:

**Logstash Deployment (`logstash-deployment.yaml`):**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: logstash
spec:
  replicas: 2
  selector:
    matchLabels:
      app: logstash
  template:
    metadata:
      labels:
        app: logstash
    spec:
      containers:
        - name: logstash
          image: docker.elastic.co/logstash/logstash:7.9.3
          ports:
            - containerPort: 5044
```

Deploy Logstash with:

```bash
kubectl apply -f logstash-deployment.yaml
```

**3. Deploying Kibana**

Kibana provides the visualization layer for data stored in Elasticsearch.
Deploying Kibana allows operations teams to view logs and create dashboards.

- **Kibana Deployment**: Use a Deployment to manage Kibana instances. Kibana
  doesn’t require persistent storage like Elasticsearch, making Deployments a
  good fit.
- **Service**: Expose Kibana using a Kubernetes Service, allowing users to
  access the Kibana UI through a LoadBalancer or NodePort, depending on your
  environment.
- **Configuration**: Configure Kibana to connect to your Elasticsearch cluster.
  You can use ConfigMaps to manage Kibana’s configuration settings.

Here's how to deploy it:

**Kibana Deployment (`kibana-deployment.yaml`):**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kibana
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kibana
  template:
    metadata:
      labels:
        app: kibana
    spec:
      containers:
        - name: kibana
          image: docker.elastic.co/kibana/kibana:7.9.3
          ports:
            - containerPort: 5601
```

**Kibana Service (`kibana-service.yaml`):**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: kibana
spec:
  type: LoadBalancer
  ports:
    - port: 5601
      targetPort: 5601
  selector:
    app: kibana
```

Deploy Kibana and expose it with:

```bash
kubectl apply -f kibana-deployment.yaml
kubectl apply -f kibana-service.yaml
```

**Accessing Kibana:**

After deploying, find the LoadBalancer IP or hostname with:

```bash
kubectl get service kibana
```

Use the provided IP or hostname to access Kibana's UI through your browser.

### Data Ingestion: Logstash and Beats

For Logstash to process and forward logs to Elasticsearch, define your pipeline
configuration in a ConfigMap and mount it to your Logstash pods.

For deploying Beats (e.g., Filebeat) to forward logs directly to Elasticsearch
or Logstash, you'll need to create a DaemonSet with the appropriate
configuration.

### Exploring Data with Elasticsearch

Interacting with Elasticsearch is done via RESTful APIs. Use tools like Postman
or Curl to query your data:

```bash
curl -X GET "http://<elasticsearch-service>:9200/_search?pretty"
```

### Visualizing Logs with Kibana

Once Kibana is accessible, create index patterns corresponding to your
Elasticsearch data, and start building dashboards to visualize and monitor your
logs in real-time.

### Conclusion

Deploying the ELK Stack on Kubernetes is a strategic move for scalable,
efficient log management. This setup not only helps in real-time application
monitoring but also significantly improves the observability of your systems.
