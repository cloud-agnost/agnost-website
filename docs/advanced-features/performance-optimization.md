---
sidebar_position: 5
---

# Performance Optimization Techniques

Agnost has built-in features and practices that help developers optimize their
applications' performance right from the onset of development. Here are some key
optimization techniques you can apply when developing Agnost applications:

### Efficient Database Design and Indexing

A well-optimized database can have a significant impact on application
performance. Agnost supports different database systems like MongoDB, MySQL,
PostgreSQL, and more. It allows for efficient database design by enabling the
use of indexing, denormalization, and efficient query design to reduce latency
in data retrieval.

Indexing is a powerful way to enhance the performance of your database. It works
in a similar way to a book index. Instead of scanning the entire book to find a
particular word (which would be very time-consuming), you can refer to the index
at the back of the book to quickly locate the page where the word is mentioned.
In databases, an index allows the database server to find and retrieve specific
rows much faster than it could do without an index. But keep in mind, indexes
should be used judiciously. While they speed up data retrieval, they slow down
data insertion, update, and deletion.

### Caching

Caching is a technique used to store frequently accessed data in a temporary
storage area, making subsequent data retrieval faster. Agnost supports the use
of Redis for caching. By storing frequently accessed data in Redis, you can
significantly reduce database queries, thereby enhancing your application
performance.

### Code Optimization

Code optimization involves writing clean, efficient, and maintainable code.
Agnost supports JavaScript and TypeScript, which have many built-in features for
efficient coding. Techniques such as avoiding unnecessary calculations, using
asynchronous operations effectively, and avoiding memory leaks can contribute to
better application performance.

### Using a CDN (Content Delivery Network)

CDN is a network of servers that deliver web content to users based on their
geographic location, the origin of the webpage, and the content delivery server.
If your Agnost application serves static content like images, videos, CSS, and
JavaScript files, using a CDN can significantly speed up content delivery and
enhance your application's performance.

Performance optimization is a key aspect of application development that
significantly impacts user experience. It's always good to consider and apply
optimization techniques during the development process to ensure your Agnost
applications run efficiently and provide a great user experience.
