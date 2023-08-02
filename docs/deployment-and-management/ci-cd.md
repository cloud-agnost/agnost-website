---
sidebar_position: 2
---

# Continuous Integration and Deployment

Continuous Integration and Continuous Delivery (CI/CD) is a crucial aspect of
modern application development. It allows for rapid, reliable, and automated
deployment of code changes. In Agnost, integrating your applications with CI/CD
tools can significantly streamline your development process, enabling fast and
reliable iterations.

### GitHub Actions

GitHub Actions make it easy to automate all your software workflows with
world-class CI/CD. You can build, test, and deploy your code directly from
GitHub. Agnost integrates with GitHub Actions for automatic building and
deployment of your applications.

You can use the Agnost CLI in your GitHub Actions workflows to deploy your
applications. A typical workflow file might look something like this:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Deploy to Agnost
        run: |
          agnost login ${{ secrets.AGNOST_TOKEN }}
          agnost deploy
```

This simple workflow will deploy your application to Agnost anytime you push
changes to the `main` branch of your repository.

### Jenkins

Jenkins is an open-source automation server, which enables developers to build,
test, and deploy their software. You can use Jenkins to create complex CI/CD
pipelines for your applications.

To integrate Agnost with Jenkins, you can add build steps in your Jenkinsfile
that use the Agnost CLI to deploy your application. Here is an example of what
this might look like:

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Your build steps here
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    agnost login $AGNOST_TOKEN
                    agnost deploy
                '''
            }
        }
    }
}
```

This Jenkinsfile will build your application and deploy it to Agnost.

Remember, for CI/CD integration to work, your CI/CD service will need access to
your Agnost cluster. This may involve configuring your CI/CD service to use a
service account or other credentials to authenticate with your Agnost cluster.
