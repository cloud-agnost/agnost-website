---
sidebar_position: 6
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Storage

Applications often need to handle and store a variety of data, such as
user-generated content, files, images, videos, etc. Agnost provides a robust
storage mechanism that supports both local and cloud-based storage solutions.

### Why Use Storage?

A typical use case for storage is to allow users to upload files to your
application. This could be profile pictures for a social media app, documents
for a business application, images for an e-commerce app, and so on. Without a
storage solution, handling and managing these files can be a challenging task.

## Configuring Storage in Agnost

Like other resources in Agnost, configuring storage is straightforward through
the Agnost Studio.

To configure storage:

### 1. Access the Storage Creation Tab

In the Agnost UI, click on the **'+'** icon located in the header to access the
options menu.

- From the dropdown menu, select **Storage** to navigate to the Storage section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/storage-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/storage.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Create a New Storage Instance

In the Storage section, you'll have the option to **'+ Create new Storage'** to
define a new storage instance.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-bucket-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-bucket.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

A dialog box will appear, prompting you to provide the following details for
your new storage instance:

- **Storage Name:** Enter a descriptive name for your storage resource. This
  name should reflect the purpose or functionality of the storage within your
  application.

- **Select Resource:** Choose the appropriate resource from the available
  options. The resource you select should match the storage service or
  technology you want to use, such as AWS S3, GCP Cloud Storage, Azure Blob
  Storage, or MinIO.

- Click the **'Save'** button to create the storage instance.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/storage-details-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/storage-details.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 3. Managing Storage Resources

Once you've created your storage instance, you will see a list of storage
resources available in your Agnost environment. You can manage these resources
by clicking on the name of the storage.

- In the navigated page for the storage resource, you can perform various
  actions, including creating buckets to organize your data.

## Creating Storage Buckets

To create storage buckets within a storage resource in Agnost, follow these
steps:

### 1. Access the Storage Resource Tab

Click on the name of the storage resource where you want to create a bucket.
This will take you to the page for that specific storage resource.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-buckets-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-buckets.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Create a New Storage Bucket

On the storage resource page, you'll have the option to **'Create bucket'** to
define a new storage bucket.

- A dialog box will appear, prompting you to provide the following details for
  your new storage bucket:

  - **Bucket Name:** Enter a unique name for your storage bucket. This name
    should be descriptive and reflect the content or purpose of the bucket.

  - **Tags:** Optionally, you can specify tags to categorize and manage your
    buckets effectively.

  - **Visibility (On/Off):** You can choose whether the bucket should be
    publicly visible or private. Public visibility allows public access to the
    bucket's content, while private visibility restricts access to authorized
    users.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/bucket-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/bucket.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- Click the **'Save'** button to create the storage bucket.

:::note

In addition to creating buckets using the Agnost Studio interface, you can also
create buckets programmatically using the Agnost Server Library. This is
particularly useful for developers who want to automate bucket creation as part
of their application's workflow.

To create buckets with the Agnost Server Library, follow the documentation and
code examples provided in the Agnost Server Library documentation.

:::

### 3. Managing Storage Buckets

Once you've created your storage bucket, you will see a list of buckets in the
storage resource page. You can manage these buckets by clicking on the name of
the bucket.

- In the navigated page for the storage bucket, you can perform various actions,
  including uploading files, downloading files, and deleting files.
