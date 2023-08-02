---
sidebar_position: 1
---

# Deploying Agnost Applications on Kubernetes

Deploying your applications has never been easier with Agnost. We support
deployment to Kubernetes clusters, which offer you the scalability and
reliability that come with containerized deployment strategies.

### Preparing for Deployment

Before you deploy your Agnost application, you need to ensure that you have a
Kubernetes cluster set up and ready to receive your application. You can use any
Kubernetes cluster, whether it's self-hosted, or hosted on a cloud service like
Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.

### Deploying to Kubernetes

Deploying to Kubernetes using Agnost is straightforward. From the Agnost Studio,
you can generate the necessary Kubernetes deployment configuration files for
your application. With the generated configuration, you can easily apply the
deployment to your cluster using `kubectl`, Kubernetes's command-line tool.

### Deployment Environments

Agnost allows you to customize your deployment environment as per your
requirements. Here are a few environments you can deploy your application to:

- **Amazon Web Services (AWS):** Deploy your applications to AWS Elastic
  Kubernetes Service (EKS) with ease. AWS EKS offers a secure, scalable, and
  highly available Kubernetes service.

  1. **Configure AWS CLI:** Make sure you have AWS CLI installed and configured
     with the necessary credentials.

  2. **Create an EKS Cluster:** Use Amazon EKS to create a Kubernetes cluster.

  3. **Connect to Your Cluster:** Configure `kubectl` with the necessary
     credentials to connect to your EKS cluster.

  4. **Deploy Your Application:** From Agnost Studio, generate the Kubernetes
     configuration files and run `kubectl apply -f <filename>` to deploy your
     application.

- **Microsoft Azure:** Leverage the power of Azure Kubernetes Service (AKS) for
  your applications. Azure AKS provides developer productivity with fast
  serverless Kubernetes, built-in CI/CD integrations, and enterprise-grade
  security and governance.

  1. **Configure Azure CLI:** Install and configure the Azure CLI with the
     appropriate subscription and credentials.

  2. **Create an AKS Cluster:** Use Azure Portal or CLI to create an AKS
     cluster.

  3. **Connect to Your Cluster:** Use `az aks get-credentials` to configure
     `kubectl` with your AKS cluster credentials.

  4. **Deploy Your Application:** Generate the Kubernetes files in Agnost Studio
     and apply them using `kubectl`.

- **Google Cloud Platform (GCP):** Deploy your applications to Google Kubernetes
  Engine (GKE) for high-performance and cost-effective application hosting. GKE
  is an industry-leading secure, managed Kubernetes service with four-way
  auto-scaling and multi-cluster support.

  1. **Configure Google Cloud SDK:** Install and initialize the Google Cloud
     SDK.

  2. **Create a GKE Cluster:** Create a Kubernetes cluster in GKE through Google
     Cloud Console or `gcloud` command-line tool.

  3. **Connect to Your Cluster:** Configure `kubectl` to use the credentials for
     your GKE cluster.

  4. **Deploy Your Application:** Generate the required Kubernetes files through
     Agnost Studio and apply them using `kubectl`.

- **On-Premise:** Agnost gives you the flexibility to deploy your applications
  to your own self-hosted Kubernetes clusters.

  1. **Prepare Your Cluster:** Ensure that your Kubernetes cluster is set up and
     configured correctly.

  2. **Configure kubectl:** Set up `kubectl` with the credentials and context
     for your cluster.

  3. **Deploy Your Application:** Use Agnost Studio to generate the required
     Kubernetes files and apply them with `kubectl`.

By following these step-by-step guides, users can deploy Agnost applications to
various environments, taking advantage of both Agnost's ease of use and the
powerful capabilities of Kubernetes.

Deploying your Agnost application to Kubernetes allows you to take advantage of
the cloud's scalability, reliability, and wide array of services.
