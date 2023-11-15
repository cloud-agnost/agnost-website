---
sidebar_position: 7
description:
  Cache manager provides simple key-value storage at a high-speed data storage
  layer (Redis) speeding up data set and get operations.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Cache

The cache manager provides simple key-value storage at a high-speed data storage
layer (Redis) speeding up the data set and get operations.

The values stored can be a single JSON object, an array of objects or primitive
values (e.g., numbers, text, boolean). Values can be stored with an optional
time-to-live (TTL) to automatically expire entries.

### List keys in cache

The `listKeys` method retrieves a list of keys from your app's cache storage.
You can use a pattern to narrow down the results or choose to retrieve all keys.
This method is helpful for managing and inspecting cache data.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
const cacheName = "default"
// Retrieve 10 cache keys and their values mathing the pattern
const data1 = await agnost.cache(cacheName).listKeys("*", 10);

// Retrieve 5 cache keys and their values mathing the pattern from cache read-replica
const data2 = await agnost.cache(cacheName).listKeys("h*llo", 5, true);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


The `listKeys` method returns a Promise that resolves to an object with the
following structure:

```javascript
[
  {
    "key": "key1",
    "value": "value2"
  },
  {
    "key": "key2",
    "value": "value2"
  },
  ...
]
```

</DetailedResponse>


#### Parameters

Here are the parameters for the `listKeys` method:

| #   | Name           | Data Type | Required | Description                                                                                                               |
| --- | -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | pattern        | string    | Yes      | The pattern string used to filter cache keys.                                                                             |
| 2   | count          | number    | Yes      | The maximum number of keys and their values to return.                                                                    |
| 3   | useReadReplica | boolean   | No       | Specifies whether to use the read replica of the cache. If no read replica cache exists, it uses the read-write database. |

:::info

See below examples how to specify filtering pattern:

- h?llo matches hello, hallo and hxllo
- h\*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

:::

### Set items in cache

You can set items in the cache using the `setKeyValue` method and overwrite any existing
value already set. If TTL (time to live) is specified, it automatically sets the
stored entry to expire in specified milliseconds. Any previous TTL associated with
the key is discarded on a successful set operation.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "lastUserOrder";

// Store key value in cache
await agnost.cache(cacheName).setKeyValue(key, {
  productId: "prd000234",
  quantity: 12,
  customerId: "61fbf6ceeeed063ab062ac05",
  createdAt: "2022-02-09T10:55:34.562+00:00",
});
```

</TabItem>


</Tabs>


#### Parameters

Here, you can find parameters for the `setKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to set, must be a string.         |
| 2   | value                        | any                               | Yes                              | The value you want to set in redis key-value pair. |
| 3   | ttl                          | number                            | No                               | The number of time to live in milliseconds.             |


### Get item from cache

You can retrieve items from cache by using the `getKeyValue` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "lastUserOrder";

// Query items from cache with using the `key`
const result = await agnost.cache(cacheName).getKeyValue(key);
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "productId": "prd000234",
  "quantity": 12,
  "customerId": "61fbf6ceeeed063ab062ac05",
  "createdAt": "2022-02-09T10:55:34.562+00:00"
}
```

</DetailedResponse>


#### Parameters

Here, you can find parameters for the `getKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to get, must be a string.                                                                                  |
| 2   | useReadReplica               | boolean                           | No                               | If set to true, the query will be executed on a read replica. If no read replica cache exists uses the read-write cache. |

### Delete items from cache

You can delete items from cache using the `deleteKey` method. It removes the
specified key from the cache.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "lastUserOrder";

// Delete items from cache by key
await agnost.cache(cacheName).deleteKey(key);
```

</TabItem>


</Tabs>


#### Parameters

Here, you can find parameters for the `deleteKey` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | keys                         | string or array of strings        | Yes                              | The key(s) you want to delete.       |

### Set cache expiry time

You can set cache expiry time using the `expireKey` method. It sets a timeout on
key. After the timeout has expired, the key will automatically be deleted.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "lastUserOrder";

// Set cache expiry time 60 seconds
await agnost.cache(cacheName).expireKey(key, 60 * 1000);
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `expireKey` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key to set its expiry duration.    |
| 2   | ttl                          | number                            | No                               | The number of time to live in milliseconds. |

### Increment value

You can increment value using the `incrementKeyValue` method. It increments the
value of the number stored at the key by the **increment amount** and returns the value of key after the increment.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "counter";

// Increment 'counter' value by 1
const result = await agnost.cache(cacheName).incrementKeyValue(key, 1)
```

</TabItem>


</Tabs>

:::info

- If the key does not exist, it is set to 0 before performing the operation.
- If `ttl` is specified, sets the stored entry to automatically expire in specified
  milliseconds.
- Any previous time to live associated with the key is discarded on successful
  increment operation.

:::

#### Parameters

Here, you can find parameters for the `incrementKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to increment must be a string. |
| 2   | increment                    | number                            | Yes                               | The amount to increment the value by.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in milliseconds.          |

### Decrement value

You can decrement value using the `decrementKeyValue` method. It decrements the
value of the number stored at the key by the **decrement amount**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const key = "counter";

// Decrement 'counter' value by 1
const result = await agnost.cache(cacheName).decrementKeyValue(key, 1);
```

</TabItem>


</Tabs>



:::info
- If the key does not exist, it is set to 0 before performing the operation.
- If `ttl` is specified, sets the stored entry to automatically expire in specified
  milliseconds.
- Any previous time to live associated with the key is discarded on successful
  decrement operation.
:::

#### Parameters

Here, you can find parameters for the `decrementKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to decrement must be a string. |
| 2   | decrement                    | number                            | No                               | The amount to decrement the value by.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in milliseconds.          |

### Accessing Redis Client

For more detailed operations and to fully utilize the capabilities of **Redis Client**, you can call `getClient` method to retrieve the actual Redis client to the read-write cache. Please see [Redis client documentation](https://github.com/redis/node-redis) for more details.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
const cacheName = "default";
const redisClient = await agnost.cache(cacheName).getClient();
```

</TabItem>


</Tabs>
