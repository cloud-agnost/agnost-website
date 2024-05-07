---
title: Introducing Agnost's Advanced Log Filtering
slug: introducing-agnost-advanced-log-filtering
author: Deniz Colak
author_title: Community Author
author_url: https://github.com/zinedkaloc
author_image_url: https://github.com/zinedkaloc.png
description:
  Learn how to leverage Agnost's advanced log filtering feature for improved log
  management, monitoring, and troubleshooting. Explore filtering options.
keywords:
  - agnost
  - feature
  - guide
image: /img/blog/2024-05-07/banner.webp
tags: [tutorial, feature, guide]
---

import Banner from "@site/src/components/Banner"
import BrowserWindow from "@site/src/components/BrowserWindow"
import WebPViewer from "@site/src/components/WebPViewer"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import WebMViewer from "@site/src/components/WebMViewer"

<head>
  <title>Introducing Agnost's Advanced Log Filtering</title>
  <meta
    property="og:title"
    content="Introducing Agnost's Advanced Log Filtering"
  />
  <meta
    name="twitter:title"
    content="Introducing Agnost's Advanced Log Filtering"
  />
</head>

Effective log management is the backbone of smooth backend operations in
software development. With Agnost's latest feature, **Log Filtering🎉**, users
can now improve the process of monitoring, debugging, and troubleshooting. In
this comprehensive guide, we will explore how to leverage log filtering to its
fullest potential, including additional functionalities like viewing
request/response bodies and filtering logs of message queues and cron jobs.

## Step 1: Accessing the Log Filtering Interface

Begin by navigating to the relevant section within Agnost's interface, whether
it's for **cron jobs, message queues, or endpoints**. Once there, locate the
**`View Logs`** button associated with the specific component you wish to
explore further.

<Banner
  alt="Accessing Logs in Agnost"
  src="/img/blog/2024-05-07/1.webp"
  width={800}
>
  Accessing Logs in Agnost
</Banner>

## Step 2: Advanced Filtering Options

Once within the log viewer interface, users can leverage an extensive array of
filtering options tailored to their specific needs. For numeric fields like
response time, users can apply filters such as **Greater than, Less than,
Equals, Is Null, and more.**

<Banner alt="Secret key screen" src="/img/blog/2024-05-07/2.webp" width={800}>
  Advanced Numeric Field Filtering in Agnost
</Banner>

## Step 3: Combining Conditions

To create comprehensive queries, users can combine multiple conditions using
AND/OR operators. This flexibility allows for precise filtering and analysis of
logs based on complex criteria.

<Banner alt="Secret key screen" src="/img/blog/2024-05-07/3.webp" width={800}>
  Combining Conditions with AND/OR Operators in Agnost
</Banner>

## Step 4: Viewing Request/Response Bodies

For enhanced debugging capabilities, users can view the request and response
bodies associated with each log entry. This feature provides valuable insights
into the data flow and helps identify potential issues more effectively.

<Banner alt="Secret key screen" src="/img/blog/2024-05-07/4.webp" width={600}>
  Viewing Request/Response Bodies in Agnost
</Banner>

## Step 5: Field-Specific Filtering

Depending on the field type, users can apply specific filters to fine-tune their
queries. For textual fields like name or path, options include **Contains,
Begins with, Ends with, and more,** enabling granular control over log analysis.

<Banner alt="Secret key screen" src="/img/blog/2024-05-07/5.webp" width={800}>
  Field-Specific Filtering in Agnost
</Banner>

## Conclusion

By learning Agnost's advanced log filtering capabilities, users can improve the
efficiency of log management, monitoring, and troubleshooting processes. With
features like advanced numeric field filtering, request/response body viewing,
and field-specific filtering, Agnost empowers users to gain deeper insights into
their application's behavior and performance.
