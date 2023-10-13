---
sidebar_position: 6
description: 1 item
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

### Set items in cache

You can set items in the cache using the `set` method and overwrite any existing
value already set. If TTL (time to live) is specified, it automatically sets the
stored entry to expire in specified seconds. Any previous TTL associated with
the key is discarded on a successful set operation.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Store items in cache
const { errors } = await agnost.cache.set(key, {
  productId: "prd000234",
  quantity: 12,
  customerId: "61fbf6ceeeed063ab062ac05",
  createdAt: "2022-02-09T10:55:34.562+00:00",
})
```

</TabItem>


<TabItem value="dart">


```dart
final key = "lastUserOrder";

// Store items in cache
final errors  = await agnost.cache.set(key, {
  "productId": "prd000234",
  "quantity": 12,
  "customerId": "61fbf6ceeeed063ab062ac05",
  "createdAt": "2022-02-09T10:55:34.562+00:00",
});
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `set` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>               |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to set, must be a string.         |
| 2   | value                        | any                               | Yes                              | The value you want to set in redis key-value pair. |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.             |

:::caution

**There is a limit on the size of the objects that you can cache. For free
environments each cache key can hold max 5kB of data.** If you try to cache an
object which is more than this limit then you will receive an
`cache_key_size_exceeded` error.

:::

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Get item from cache

You can retrieve items from cache by using the `get` method.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Query items from cache with using the `key`
const result = await agnost.cache.get(key)
```

</TabItem>


<TabItem value="dart">


```dart
final key = "lastUserOrder";

// Query items from cache with using the `key`
final result = await agnost.cache.get(key).asMap();
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

Here you can find parameters for the `get` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>       |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ------------------------------------------ |
| 1   | key                          | string                            | Yes                              | The key you want to get, must be a string. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Delete items from cache

You can delete items from cache using the `delete` method. It removes the
specified key from the cache.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Delete items from cache by key
const { errors } = await agnost.cache.delete(key)
```

</TabItem>


<TabItem value="dart">


```dart
final key = "lastUserOrder";

// Delete items from cache by key
final errors = await agnost.cache.delete(key);
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `delete` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>          |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | --------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to delete, must be a string. |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Set cache expiry time

You can set cache expiry time using the `expire` method. It sets a timeout on
key. After the timeout has expired, the key will automatically be deleted.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Set cache expiry time 60 seconds
const { errors } = await agnost.cache.expire(key, 60)
```

</TabItem>


<TabItem value="dart">


```dart
final key = "lastUserOrder";

// Set cache expiry time 60 seconds
final errors = await agnost.cache.expire(key, 60);
```

</TabItem>


</Tabs>


#### Parameters

Here you can find parameters for the `expire` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>         |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | -------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to expire must be a string. |
| 2   | ttl                          | number                            | No                               | The number of time to live in seconds.       |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Increment value

You can increment value using the `increment` method. It increments the value of
the number stored at the key by the **increment amount**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "counter"

// Increment 'lastUserOrder' value by 1
const result = await agnost.cache.increment(key, 1)
```

</TabItem>


<TabItem value="dart">


```dart
final key = "counter";

// Increment 'lastUserOrder' value by 1
final result = await agnost.cache.increment(key, increment: 1);
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

Here you can find parameters for the `increment` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>            |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ----------------------------------------------- |
| 1   | key                          | string                            | Yes                              | The key you want to increment must be a string. |
| 2   | increment                    | number                            | Yes                              | The increment number of the cache value.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.          |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::

### Decrement value

You can decrement value using the `decrement` method. It decrements the value of
the number stored at the key by the **decrement amount**.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" } ,{ label: "Dart", value: "dart" }]}>


<TabItem value="javascript">


```js
let key = "lastUserOrder"

// Decrement lastUserOrder's value by 1
const result = await agnost.cache.increment(key, 1)
```

</TabItem>


<TabItem value="dart">


```dart
let key = "lastUserOrder";

// Decrement lastUserOrder's value by 1
const result = await agnost.cache.decrement(key, decrement: 1);
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
| 2   | decrement                    | number                            | Yes                              | The decrement number of the cache value.        |
| 3   | ttl                          | number                            | No                               | The number of time to live in seconds.          |

:::note

If the client library key is set to **enforce session**, an active user session
is **required** (e.g., user needs to be logged in) to call this method.

:::
