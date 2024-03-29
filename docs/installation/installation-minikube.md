---
sidebar_position: 2
---

# Installation - Minikube

## Prerequisites

Before you begin, ensure that you have the following software installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop): Ensure you
  have Docker Desktop installed and running.
- [Kubernetes](https://kubernetes.io/docs/setup/): The platform where your
  applications will be deployed.
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/): A
  command-line tool for managing your Kubernetes cluster.
- [Helm](https://helm.sh/docs/intro/install/): Helm is a package manager for
  Kubernetes that simplifies the process of deploying and managing applications.
- [Minikube](https://minikube.sigs.k8s.io/docs/start/): Minikube is a tool that
  enables you to run Kubernetes locally.

## Minikube Configuration
On minikube, if you haven't done already, you need to enable ingress, volumesnapshots, and csi-hostpath-driver addons:

```bash
minikube start --cpus=4 --memory 8192
## output:
#...
#🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
minikube addons enable ingress
## output:
#...
#🔎  Verifying ingress addon...
#🌟  The 'ingress' addon is enabled

minikube addons enable volumesnapshots
minikube addons enable csi-hostpath-driver

minikube addons disable storage-provisioner
minikube addons disable default-storageclass

kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}, "allowVolumeExpansion":true}'
```

## Chart installation

Add the repo and continue with your Kubernetes Platform's documentation:

```bash
helm repo add cloud-agnost https://cloud-agnost.github.io/charts
helm repo update
```

Before installation, if you need to update configuration parametes of the installation, you can configure the settings based on base [values.yaml](https://github.com/cloud-agnost/charts/blob/master/base/values.yaml).


Then run the below command to install Agnost:

```bash
# Install the chart on Kubernetes. If you have followed above installation steps we have already enabled ingress so no need to install it again.
helm upgrade --install agnost cloud-agnost/base --set ingress-nginx.enabled=false
```

:::tip
The above command installs Agnost on the `default` namespace (or on your current context) and `operators` namespace to install 3rd party software operators.

You can add `--namespace <namespace-name>` and `--create-namespace` options to install Agnost to a different namespace.
:::


Check the pods status, make sure that mongodb, rabbitmq, and redis are running:
It takes around 5 minutes (depending on your local resources and internet connection)

```bash
$> kubectl get pods -n default
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

Then you can reach your app via the IP address of your ingress:

```bash
# get the IP address of the Ingress --> EXTERNAL-IP field
$> kubectl get svc -n ingress-nginx
NAME                              TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)                      AGE
agnost-ingress-nginx-controller   LoadBalancer   10.245.185.76   192.168.49.2     80:30323/TCP,443:31819/TCP   7m1s

# or to get it via script:
kubectl get svc -n ingress-nginx -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}'
```

Then open your browser and access to the IP address (`http://192.168.49.2/studio` for the given example above) or go to `http://localhost/studio` to launch Agnost Studio.

:::tip
If you are accessling the Agnost Studio through localhost, please make sure that `minikube tunnel` is up and running. To activate the tunnel, run the following command:
```bash
minikube tunnel
```
:::

## Chart Customization

Here is the [helm documentation](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing) in how to customize the installation.

In a nutshell, you have 2 options:

1. Set the value on the command line, e.g.:

```bash
helm upgrade --install agnost cloud-agnost/base \
             --set ingress-nginx.enabled=false
```

2. Create a values file with the changes you want to have:

```yaml
# my-values.yaml
ingress-nginx:
  enabled: false

minio:
  mode: distributed
  replicas: 4
```

Then, provide it on the command line:

```bash
helm upgrade --install agnost cloud-agnost/base -f my-values.yaml
```

Here are the values you can configure:

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| ingress-nginx.enabled | bool | `true` | install ingress-nginx |
| ingress-nginx.controller.service.externalTrafficPolicy | string | `"Local"` | This needs to be local for knative ingress work properly |
| ingress-nginx.controller.autoscaling.enabled | bool | `true` | Enable/Disable autoscaling for ingress-nginx |
| ingress-nginx.controller.autoscaling.minReplicas | int | `1` | Minimum ingress-nginx replicas when autoscaling is enabled |
| ingress-nginx.controller.autoscaling.maxReplicas | int | `10` | Maximum ingress-nginx replicas when autoscaling is enabled |
| ingress-nginx.controller.autoscaling.targetCPUUtilizationPercentage | int | `80` | Target CPU Utilization for ingress-nginx replicas when autoscaling is enabled |
| ingress-nginx.controller.autoscaling.targetMemoryUtilizationPercentage | int | `80` | Target Memory Utilization for ingress-nginx replicas when autoscaling is enabled |
| ingress-nginx.controller.resources | object | `{"requests":{"cpu":"100m","memory":"200Mi"}}` | resources for the ingress-nginx controller |
| ingress-nginx.platform | string | `""` | Platform running the ingress, annotations needed for Elastic Kubernetes Service (AWS), Azure Kubernetes Service and Digital Ocean Kubernetes Possible values: [ AKS, DOKS, EKS ] |
| cert-manager.namespace | string | `"cert-manager"` | namespace for cert-manager installation |
| cert-manager.startupapicheck.enabled | bool | `false` | no need for pre checks |
| minio.mode | string | `"standalone"` | deployment mode: standalone or distributed |
| minio.replicas | int | `1` | number of replicas. 1 for standalone, 4 for distributed |
| minio.persistence.size | string | `"100Gi"` | Storage size for MinOP |
| minio.resources.requests.memory | string | `"256Mi"` | Memory requests for MinIO pods |
| minio.users | list | `[]` | Username, password and policy to be assigned to the user Default policies are [readonly|readwrite|writeonly|consoleAdmin|diagnostics] |
| minio.buckets | list | `[]` | Initial buckets to create |
| mongodbcommunity.storage.dataVolumeSize | string | `"20Gi"` | Storage size for data volume |
| mongodbcommunity.storage.logVolumeSize | string | `"4Gi"` | Storage size for logs volume |
| redis.master.persistence.size | string | `"2Gi"` | Storage size for the redis instance |
| redis.architecture | string | `"standalone"` | Redis deployment type: standalone or replication |
| engine.monitor.resources | object | `{}` | resources for the engine-monitor deployment |
| engine.realtime.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the engine-realtime deployment |
| engine.realtime.resources | object | `{"requests":{"cpu":"100m"}}` | resources for the engine-realtime deployment |
| engine.scheduler.resources | object | `{}` | resources for the engine-scheduler deployment |
| engine.worker.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the engine-worker deployment |
| engine.worker.resources | object | `{"requests":{"cpu":"200m"}}` | resources for the engine-worker deployment |
| platform.core.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the platform-core deployment |
| platform.core.resources | object | `{"requests":{"cpu":"200m"}}` | resources for the platform-core deployment |
| platform.sync.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the platform-sync deployment |
| platform.sync.resources | object | `{"requests":{"cpu":"100m"}}` | resources for the platform-sync deployment |
| platform.worker.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the platform-worker deployment |
| platform.worker.resources | object | `{"requests":{"cpu":"50m"}}` | resources for the platform-worker deployment |
| studio.hpa | object | `{"targetCpuUtilization":90}` | horizantal pod autoscaler configuration for the studio deployment |
| studio.resources | object | `{"requests":{"cpu":"100m"}}` | resources for the studio deployment |
