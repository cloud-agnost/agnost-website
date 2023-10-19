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
layer (Redis) speeding up data set and get operations.

The values stored can be a single JSON object, an array of objects or primitive
values (e.g., numbes, text, boolean). Values can be stored with an optional
time-to-live (TTL) to automatically expire entries.

:::info

You can directly store primitive values such as integers, strings, etc.,

- However, when you try to get them Agnost returns them wrapped in a simple
  object with a key named **value**.
- As an example, if you store a text field "**Hello world!**" at a key named
  "**welcome**" when you try to get the value of this key using the `get`
  method, you will receive the following response:

  **{ "value": "Hello world!" }**

:::

### List keys in cache

The `listKeys` method retrieves a list of keys from your app's cache storage.
You can use a pattern to narrow down the results or choose to retrieve all keys.
This method is helpful for managing and inspecting cache data.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```javascript
let cacheName = "default"
// Retrieve all cache keys
const { data, next } = await agnost.cache(cacheName).listKeys("*", 10)

// Retrieve cache keys that match a pattern
const { data, next } = await agnost.cache(cacheName).listKeys("h*llo", 5, true)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


The `listKeys` method returns a Promise that resolves to an object with the
following structure:

```javascript
{
    data: null | object[];
    next: null | string;
}
```

- `data`: An array of matching keys and their values. If no keys match the
  pattern or if there are no keys to return, it is `null`.
- `next`: A string indicating the next set of keys to retrieve. If there are
  more keys to fetch, it provides a continuation token; otherwise, it is `null`.

</DetailedResponse>


#### Parameters

Here are the parameters for the `listKeys` method:

| #   | Name           | Data Type | Required | Description                                                                                                               |
| --- | -------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | pattern        | string    | Yes      | The pattern string used to filter cache keys.                                                                             |
| 2   | count          | number    | Yes      | The maximum number of keys and their values to return.                                                                    |
| 3   | useReadReplica | boolean   | No       | Specifies whether to use the read replica of the cache. If no read replica cache exists, it uses the read-write database. |

:::info

Gets the list of keys in your app cache storage. It runs the pattern match to
narrow down returned results, otherwise, returns all keys contained in your
app's cache storage. See below examples how to specify filtering pattern:

- h?llo matches hello, hallo and hxllo
- h\*llo matches hllo and heeeello
- h[ae]llo matches hello and hallo, but not hillo
- h[^e]llo matches hallo, hbllo, ... but not hello
- h[a-b]llo matches hallo and hbllo

:::

### Set items in cache

You can set items in the cache using the `set` method and overwrite any existing
value already set. If TTL (time to live) is specified, it automatically sets the
stored entry to expire in specified seconds. Any previous TTL associated with
the key is discarded on a successful set operation.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let cacheName = "default"
let key = "lastUserOrder"

// Store items in cache
const { errors } = await agnost.cache(cacheName).setKeyValue(key, {
  productId: "prd000234",
  quantity: 12,
  customerId: "61fbf6ceeeed063ab062ac05",
  createdAt: "2022-02-09T10:55:34.562+00:00",
})
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `setKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to set, must be a string.         |
| 2   | value                        | any                               | Yes                              | The value you want to set in redis key-value pair. |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.             |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Get item from cache

You can retrieve items from cache by using the `getKeyValue` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let cacheName = "default"
let key = "lastUserOrder"

// Query items from cache with using the `key`
const result = await agnost.cache(cacheName).getKeyValue(key)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{
  "data": {
    "productId": "prd000234",
    "quantity": 12,
    "customerId": "61fbf6ceeeed063ab062ac05",
    "createdAt": "2022-02-09T10:55:34.562+00:00"
  },
  "errors": null
}
```

</DetailedResponse>


#### Parameters

Here you can find parameters for the `getKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                        |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to get, must be a string.                                                                                  |
| 2   | useReadReplica               | boolean                           | No                               | If set to true, the query will be executed on a read replica. If no read replica cache exists uses the read-write database. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Delete items from cache

You can delete items from cache using the `deleteKey` method. It removes the
specified key from the cache.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let cacheName = "default"
let key = "lastUserOrder"

// Delete items from cache by key
const { errors } = await agnost.cache(cacheName).deleteKey(key)
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `deleteKey` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p> |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------ |
| 1   | keys                         | string or array of strings        | Yes                              | The key(s) you want to delete.       |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Set cache expiry time

You can set cache expiry time using the `expireKey` method. It sets a timeout on
key. After the timeout has expired, the key will automatically be deleted.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let cacheName = "default"
let key = "lastUserOrder"

// Set cache expiry time 60 seconds
const { errors } = await agnost.cache(cacheName).expireKey(key, 60)
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `expireKey` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>   |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key to set its expiry duration.    |
| 2   | ttl                          | number                            | No                               | The number of time to live in seconds. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Increment value

You can increment value using the `incrementKeyValue` method. It increments the
value of the number stored at the key by the **increment amount**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let cacheName = "default"
let key = "counter"

// Increment 'lastUserOrder' value by 1
const result = await agnost.cache(cacheName).incrementKeyValue(key, 1)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{ "data": { "value": 2 }, "errors": null }
```

</DetailedResponse>


:::info

If increment amount is **not specified**, increments the number stored at key by
one.

- If the key does not exist, it is set to 0 before performing the operation.
- If `ttl` specified, sets the stored entry to automatically expire in specified
  seconds.
- Any previous time to live associated with the key is discarded on successful
  increment operation.

:::

#### Parameters

Here you can find parameters for the `incrementKeyValue` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to increment must be a string. |
| 2   | increment                    | number                            | No                               | The increment number of the cache value.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.          |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Decrement value

You can decrement value using the `decrementKeyValue` method. It decrements the
value of the number stored at the key by the **decrement amount**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Decrement lastUserOrder's value by 1
const result = await agnost.cache.increment(key, 1)
```

</TabItem>


</Tabs>


<DetailedResponse title="Example response">


```json
{ "data": { "value": 1 }, "errors": null }
```

</DetailedResponse>


:::info

If decrement amount is **not specified**, decrements the number stored at key by
one.

- If the key does not exist, it is set to 0 before performing the operation.
- If `ttl` specified, sets the stored entry to automatically expire in specified
  seconds.
- Any previous time to live associated with the key is discarded on successful
  decrement operation.

:::

#### Parameters

Here you can find parameters for the `decrement` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to decrement must be a string. |
| 2   | decrement                    | number                            | No                               | The decrement number of the cache value.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.          |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
