---
sidebar_position: 5
---

# Caching Strategies

Caching can drastically improve the performance and scalability of your
applications. It reduces the load on your database, decreases latency, and
improves the overall user experience. In Agnost, you can leverage caching to
optimize your applications easily.

### Why Use Caching?

Consider an e-commerce app where product details are fetched frequently.
Repeatedly querying the database for the same data can be resource-intensive and
slow. By implementing a caching strategy, you can store frequently accessed data
in memory for quicker retrieval.

### Redis Integration

Agnost uses Redis, a high-performance in-memory data structure store, for
caching. It supports different types of abstract data structures, such as
strings, lists, maps, sets, sorted sets, and more.

### Configuring Redis in Agnost

Configuring Redis for your Agnost application can be done with ease using Agnost
Studio. The studio allows you to manage your resources, including your caching
layer. You don't need to manually create a YAML file or run any commands. The
Studio takes care of these operations for you.

To configure Redis:

1. Open Agnost Studio and navigate to your project.
2. Go to the 'Resources' section and click on 'Add Resource'.
3. Select 'Redis' from the list of resources.
4. Fill out the necessary configuration details and click 'Add'.
5. Once the resource has been added, it's ready to be used in your application.

### Caching Data

Once you have your Redis client set up, you can use it to cache your data.
Here's an example:

```javascript
app.get("/products/:id", (req, res) => {
  const { id } = req.params

  // Try fetching the result from Redis first
  agnost.cache.get(`product:${id}`, (err, result) => {
    if (result) {
      // If the result exists in cache, return it
      return res.send(result)
    } else {
      // Otherwise, fetch the result from the database
      const product = fetchProductFromDatabase(id)

      // And store it in cache for future access
      agnost.cache.setex(`product:${id}`, 3600, JSON.stringify(product))

      return res.send(product)
    }
  })
})
```

This simple strategy checks if the requested data exists in the cache. If it
does, the cached data is returned, bypassing the database. If not, the data is
fetched from the database, returned to the user, and stored in the cache for
future requests.

### Cache Invalidation

Cache invalidation can be a tricky aspect of caching. How and when should you
invalidate your cache? A common strategy is to set a time-to-live (TTL) for each
cache entry, as demonstrated in the above example (`setex`). After the TTL
expires, the cached data will be deleted automatically.

Another strategy is to invalidate the cache whenever the data changes. For
instance, if a product's details are updated, the related cache should be
invalidated to avoid serving stale data.

```javascript
app.put("/products/:id", (req, res) => {
  const { id } = req.params

  // Update the product in the database
  const updatedProduct = updateProductInDatabase(id, req.body)

  // Invalidate the related cache
  agnost.cache.del(`product:${id}`)

  return res.send(updatedProduct)
})
```

In this approach, every time a product's details are updated, the related cache
is deleted, ensuring the cache is always fresh.

By leveraging Agnost's built-in support for caching with Redis, you can optimize
your applications to deliver high performance and excellent user experience.
