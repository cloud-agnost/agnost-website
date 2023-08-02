---
sidebar_position: 6
---

# Monitoring and Logging in Agnost

Effective monitoring and logging are essential for maintaining a stable and
reliable application, and Agnost provides built-in support for these key
practices. Not only can you monitor and log activities within your applications,
but you can also get insights into the overall health and performance of your
Kubernetes clusters and individual pods.

### Monitoring

Monitoring involves continuously observing your application's performance over
time to identify any potential issues, bottlenecks, and patterns. This allows
you to understand how your application behaves under different loads and
circumstances and provides you with crucial insights to make informed decisions
about scaling, load balancing, and more.

Agnost integrates with Prometheus, a leading open-source monitoring solution,
providing real-time metrics from your application, Kubernetes cluster, and pods.
With Prometheus, you can collect multidimensional data series, query them in
real-time, and set up crucial alerts for unusual activities or thresholds.

In addition, Agnost also supports Grafana, a popular open-source analytics and
interactive visualization web application. Grafana provides the frontend and
user interface for the Prometheus data, enabling you to build comprehensive
visual dashboards to monitor your application and Kubernetes health. This
integration means you can quickly view and analyze metrics from your
application, Kubernetes cluster, and individual pods in one place.

### Logging

Logging involves recording events or messages that occur during the execution of
your application. These logs provide a detailed context about any issues or
errors that occur, making it easier for developers to understand and resolve
these issues.

Agnost provides support for popular logging tools like Logstash, Elasticsearch,
and Kibana, collectively known as the ELK stack. Logstash is a unified logging
layer that allows you to collect logs from various sources. Elasticsearch is a
search and analytics engine that allows you to store and search the log data.
Kibana is a visualization tool that provides a user-friendly interface for
viewing and analyzing the log data.

With these tools, you can collect, store, search, and visualize your
application's log data, providing a clear insight into your application's
operation and helping you identify and resolve issues more quickly.

By leveraging the integrated monitoring and logging capabilities of Agnost, you
can ensure that your application performs optimally and is always ready to
handle your users' needs.
