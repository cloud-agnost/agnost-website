---
sidebar_position: 7
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Caching Strategies

Caching is a powerful technique to improve the performance and responsiveness of
your applications. In Agnost, you can easily set up and manage cache servers to
optimize data retrieval and storage. This section will guide you through the
process of creating and configuring cache servers in Agnost, from creating cache
instances to using them within your applications.

## Why Use Caching?

Consider an e-commerce app where product details are fetched frequently.
Repeatedly querying the database for the same data can be resource-intensive and
slow. By implementing a caching strategy, you can store frequently accessed data
in memory for quicker retrieval.

## Creating Cache Servers

To create cache servers in Agnost, follow these steps:

## 1. Access the Cache Creation Page

In the Agnost UI, click on the **'+ '** icon located in the header to access the
options menu.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/cache-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/cache.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

- From the dropdown menu, select **Cache** to navigate to the Cache section.

## 2. Create a New Cache Instance

In the Cache section, you'll have the option to **'+ Create Cache'** to define a
new cache server.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-cache-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-cache.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

A dialog box will appear, prompting you to provide the following details for
your new cache instance:

- **Cache Name:** Enter a descriptive name for your cache server. This name
  should reflect the purpose or functionality of the cache within your
  application.

- **Assign Unique Name (On/Off):** Optionally, you can enable the "Assign Unique
  Name" option. This allows you to give a unique name to the cache server during
  creation, aiding in easy identification and management.

- **Select Resource:** Choose the appropriate resource from the available
  options. The resource you select should match the caching technology or
  service you want to use, such as Redis or Memcached.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/cache-details-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/cache-details.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={620}
/>

- Click the **'Create'** button to create the cache instance.

### 3. Managing Cache Servers

Once you've created your cache instance, you will see a list of cache servers
available in your Agnost environment. You can manage these cache servers by
clicking on their names.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/cache-list-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/cache-list.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

## Using Cache in Your Applications

To use cache servers within your applications in Agnost, you can leverage the
Agnost Server Side Library. This library provides a set of APIs and methods for
interacting with cache servers seamlessly.

### Example Code (JavaScript)

```javascript
const agnost = require("agnost")

// Initialize Agnost with your API key
agnost.init({ api_key: "YOUR_API_KEY" })

// Use the cache API to set and get data in the cache
const cache = agnost.cache()

// Set a value in the cache with a specified key and expiration time (in seconds)
cache
  .set("my_key", "my_value", { expire: 3600 })
  .then(() => {
    console.log("Value set in the cache")

    // Get a value from the cache
    cache
      .get("my_key")
      .then((value) => {
        console.log("Value retrieved from the cache:", value)

        // Check if a key exists in the cache
        cache
          .exists("my_key")
          .then((exists) => {
            if (exists) {
              console.log("Key exists in the cache")
            } else {
              console.log("Key does not exist in the cache")
            }

            // Delete a key from the cache
            cache
              .delete("my_key")
              .then(() => {
                console.log("Key deleted from the cache")
              })
              .catch((error) => {
                console.error("Error deleting key from the cache:", error)
              })
          })
          .catch((error) => {
            console.error("Error checking key existence in the cache:", error)
          })
      })
      .catch((error) => {
        console.error("Error retrieving value from the cache:", error)
      })
  })
  .catch((error) => {
    console.error("Error setting value in the cache:", error)
  })
```

In this example, we're using JavaScript to interact with the cache server using
Agnost's Server Side Library. You can perform operations such as setting values,
retrieving values, checking for key existence, and deleting keys in the cache.

If you encounter any issues or need further guidance on working with cache in
Agnost, please refer to our documentation or reach out to our support team for
assistance.

Happy caching with Agnost!
