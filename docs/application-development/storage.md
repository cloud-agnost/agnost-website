---
sidebar_position: 4
---

# Storage

Applications often need to handle and store a variety of data, such as
user-generated content, files, images, videos, etc. Agnost provides a robust
storage mechanism that supports both local and cloud-based storage solutions.

### Why Use Storage?

A typical use case for storage is to allow users to upload files to your
application. This could be profile pictures for a social media app, documents
for a business application, images for an e-commerce app, and so on. Without a
storage solution, handling and managing these files can be a challenging task.

### Local Storage

For development and testing purposes, you may use your machine's local storage.
Agnost provides an easy way to configure local storage. It is as simple as
setting up a local directory as a mount point.

### Cloud Storage

For production environments, you can leverage cloud storage services. Agnost
supports integration with popular cloud storage services like AWS S3, Google
Cloud Storage, and Azure Blob Storage. The integration allows you to store and
retrieve files directly from these services, thus ensuring scalability and
reliability.

### Configuring Storage in Agnost

Like other resources in Agnost, configuring storage is straightforward through
the Agnost Studio.

To configure storage:

1. Open Agnost Studio and navigate to your project.
2. Go to the 'Resources' section and click on 'Add Resource'.
3. Choose the appropriate storage resource from the list (AWS S3, GCS, Azure
   Blob, or local storage).
4. Provide the necessary configuration details and click 'Add'.
5. Once the resource has been added, it's ready to be used in your application.

### Using Storage

Once you have your storage resource set up, you can use it to handle file
uploads and downloads in your application. Here's an example of how to handle
file uploads in an Express.js application:

```javascript
const express = require("express")
const multer = require("multer")

const app = express()

// Set up multer for file uploads
const upload = multer({ storage: multer.memoryStorage() })

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded")
  }

  // Use your storage resource to store the file
  // This will depend on your specific storage solution
  // (local storage, AWS S3, GCS, Azure Blob, etc.)
  const filename = storeFile(req.file)

  res.status(200).send({ filename })
})
```

This example uses the `multer` middleware to handle file uploads. The file is
then stored using your configured storage resource.
