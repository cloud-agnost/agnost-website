---
sidebar_position: 5
description:
  With Agnost, you can define your RESTful endpoints and associte them with your
  cloud functions.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import BrowserWindow from "@site/src/components/BrowserWindow"

# Endpoints

With Agnost Studio, you can define your RESTful endpoints and develop your
business logic with using Agnost code editor.

:::info

The endpoint manager provides the methods to make **POST**, **PUT**, **GET** and
**DELETE** requests to your app endpoints to run your cloud functions.

:::

### GET Request

You can use the `get` method to make a **GET** request to your endpoint path.
Optionally, you can provide query string parameters or headers in this request.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let orderId = "620949ee991edfba3ee644e7"

// Make a GET request to /orders/{orderId} endpoint
const { data, errors } = await agnost.endpoint.get(`/orders/${orderId}`)
```

</TabItem>


</Tabs>


:::info

- If errors occurred during the execution of the request then errors object is
  returned and the data is marked as **null**.
- If no errors occured then depending on the type of the request the data object
  holds a single JSON object, an array of json objects, plain text, Blob or
  ArrayBuffer and the errors object is marked as **null**.
- If the response returns no data back, then both errors and data marked as
  **null**.

:::

#### Parameters

Here you can find parameters for the `get` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | path                         | string                            | Yes                              | The path of the endpoint. The endpoint path needs to start with a slash '/' character e.g., /users/profile                                                       |
| 2   | queryParams                  | KeyValuePair                      | No                               | Query string parameters                                                                                                                                          |
| 3   | headers                      | KeyValuePair                      | No                               | Request headers                                                                                                                                                  |
| 4   | resolveType                  | string                            | No                               | Type of data to return as a response of the request. By default response data is parsed to JSON. Possible values are `"json"` `"text" ` `"blob"` `"arraybuffer"` |

:::note

Depending on the configuration of the endpoint, an active user session might be
required (e.g., user needs to be logged in) to call this method.

:::

### POST Request

You can use the `post` method to make a **POST** request to your endpoint path.
Optionally, you can provide body, query string parameters or headers in this
request.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let postId = "62094b43f7205e7d78082504"

// Make a POST request to /wallposts/{postId}/comments endpoint
const { data, errors } = await agnost.endpoint.post(
  `/wallposts/${postId}/comments`,
  {
    userId: "620949ee991edfba3ee644e7",
    comment:
      "Awesome product. Would be better if you could add tagging people in comments.",
  },
)
```

</TabItem>


</Tabs>


:::info

- If errors occurred during the execution of the request then errors object is
  returned and the data is marked as **null**.
- If no errors occured then depending on the type of the request the data object
  holds a single JSON object, an array of json objects, plain text, Blob or
  ArrayBuffer and the errors object is marked as **null**.
- If the response returns no data back, then both errors and data marked as
  **null**.

:::

#### Parameters

Here you can find parameters for `post` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | path                         | string                            | Yes                              | The path of the endpoint. The endpoint path needs to start with a slash '/' character e.g., /users/profile                                                       |
| 2   | body                         | Object or FormData                | No                               | Request body                                                                                                                                                     |
| 3   | queryParams                  | KeyValuePair                      | No                               | Query string parameters                                                                                                                                          |
| 4   | headers                      | KeyValuePair                      | No                               | Request headers                                                                                                                                                  |
| 5   | resolveType                  | string                            | No                               | Type of data to return as a response of the request. By default response data is parsed to JSON. Possible values are `"json"` `"text" ` `"blob"` `"arraybuffer"` |

:::note

Depending on the configuration of the endpoint, an active user session might be
required (e.g., user needs to be logged in) to call this method.

:::

### PUT Request

You can use the `put` method to make a PUT request to your endpoint path.
Optionally, you can provide body, query string parameters or headers in this
request.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let userId = "62094b734848b88ff50c2ab0"

// Make a PUT request to /users/{userId}/address
const { data, errors } = await agnost.endpoint.put(`/users/${userId}/address`, {
  city: "Chicago",
  street: "121 W Chestnut",
  zipcode: "60610",
  state: "IL",
  country: "US",
})
```

</TabItem>


</Tabs>


:::info

- If errors occurred during the execution of the request then errors object is
  returned and the data is marked as **null**.
- If no errors occured then depending on the type of the request the data object
  holds a single JSON object, an array of json objects, plain text, Blob or
  ArrayBuffer and the errors object is marked as **null**.
- If the response returns no data back, then both errors and data marked as
  **null**.

:::

#### Parameters

Here you can find parameters for the `put` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | path                         | string                            | Yes                              | The path of the endpoint. The endpoint path needs to start with a slash '/' character e.g., /users/profile                                                       |
| 2   | body                         | Object or FormData                | No                               | Request body                                                                                                                                                     |
| 3   | queryParams                  | KeyValuePair                      | No                               | Query string parameters                                                                                                                                          |
| 4   | headers                      | KeyValuePair                      | No                               | Request headers                                                                                                                                                  |
| 5   | resolveType                  | string                            | No                               | Type of data to return as a response of the request. By default response data is parsed to JSON. Possible values are `"json"` `"text" ` `"blob"` `"arraybuffer"` |

:::note

Depending on the configuration of the endpoint, an active user session might be
required (e.g., user needs to be logged in) to call this method.

:::

### DELETE Request

You can use the `delete` method to make a DELETE request to your endpoint path.
Optionally, you can provide body, query string parameters or headers in this
request.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">


```js
let postId = "62094b4dfcc106baba52c8ec"
let commentId = "62094b66fc475bdd5a2bfa48"

// Make a DELETE request to /wallposts/{postId}/comments/{commentId} endpoint
const { data, errors } = await agnost.endpoint.delete(
  `/wallpost/${postId}/comments/${commentId}`,
)
```

</TabItem>


</Tabs>


:::info

- If errors occurred during the execution of the request then errors object is
  returned and the data is marked as **null**.
- If no errors occured then depending on the type of the request the data object
  holds a single JSON object, an array of json objects, plain text, Blob or
  ArrayBuffer and the errors object is marked as **null**.
- If the response returns no data back, then both errors and data marked as
  **null**.

:::

#### Parameters

Here you can find parameters for the endpoint `delete` method.

| #   | <p><strong>Name</strong></p> | <p><strong>Data type</strong></p> | <p><strong>Required</strong></p> | <p><strong>Description </strong></p>                                                                                                                             |
| --- | ---------------------------- | --------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | path                         | string                            | Yes                              | The path of the endpoint. The endpoint path needs to start with a slash '/' character e.g., /users/profile                                                       |
| 2   | body                         | Object or FormData                | No                               | Request body                                                                                                                                                     |
| 3   | queryParams                  | KeyValuePair                      | No                               | Query string parameters                                                                                                                                          |
| 4   | headers                      | KeyValuePair                      | No                               | Request headers                                                                                                                                                  |
| 5   | resolveType                  | string                            | No                               | Type of data to return as a response of the request. By default response data is parsed to JSON. Possible values are `"json"` `"text" ` `"blob"` `"arraybuffer"` |

:::note

Depending on the configuration of the endpoint, an active user session might be
required (e.g., user needs to be logged in) to call this method.

:::
