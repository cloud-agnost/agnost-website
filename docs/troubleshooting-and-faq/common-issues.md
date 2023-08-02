---
sidebar_position: 1
---

# Common Issues and Solutions

While Agnost is designed to be intuitive and user-friendly, there might be
instances where you encounter issues or challenges. Here are some of the most
common issues users face and the recommended solutions:

### Issue: Agnost Cluster Not Starting

If your Agnost cluster is not starting, there could be several reasons,
including insufficient resources or configuration issues.

#### Solution

1. **Check your resource allocation**: Agnost requires a minimum of 4 CPUs and 8
   GB of memory to run smoothly. If your Kubernetes cluster does not have these
   resources available, you may experience problems starting the Agnost cluster.

2. **Check your configurations**: If your resource allocation is sufficient,
   verify your Helm chart configurations. Incorrect configurations can also lead
   to issues in starting the Agnost cluster.

### Issue: Application Deployment Fails

If your application deployment fails, the issue could be related to your app's
configuration or cluster resource limitations.

#### Solution

1. **Check your application's configuration**: Ensure that all configurations in
   your application are correct, including database connections, API endpoints,
   etc.

2. **Check your cluster's resources**: If your application's configuration is
   correct, check your Kubernetes cluster's resources. If your cluster doesn't
   have sufficient resources to run the new application, the deployment might
   fail.

### Issue: Data Not Being Persisted

If data is not being persisted, the issue might lie in your database
configuration or issues with the database itself.

#### Solution

1. **Check your database configuration**: Verify that your database connection
   details are correct and that your application has the necessary permissions
   to write data.

2. **Check your database**: Ensure your database is up and running smoothly. Any
   issues with the database can result in data not being persisted.

### Issue: Real-time Updates Not Working

If real-time updates are not working, it could be due to WebSocket issues or
network firewalls blocking the connections.

#### Solution

1. **Check your WebSocket configuration**: Ensure that your WebSocket
   configuration is correct and that your application has the necessary
   permissions to establish WebSocket connections.

2. **Check your network configuration**: Some network firewalls block WebSocket
   connections. Check with your network administrator if this is the case.

If you face issues not covered here, feel free to contact us or seek help from
the community through our Github repository or community forum. Remember, the
Agnost community is always there to help!
