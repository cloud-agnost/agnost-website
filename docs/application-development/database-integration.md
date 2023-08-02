---
sidebar_position: 3
---

# Database Integration

Databases are integral parts of almost all applications, providing a way to
persist data across sessions and share data between users. With Agnost, you can
easily integrate databases into your applications. The platform supports a range
of database options including but not limited to MySQL, PostgreSQL, and MongoDB,
allowing developers to choose the one that best fits their project needs.

Here's a step-by-step guide on how to integrate a database into your Agnost
application:

1. **Select Your Database:** From the Agnost Studio, navigate to the 'Resources'
   section under your application. Here, you can add a new resource. Select
   'Database' from the list of resource types.

2. **Choose Database Type:** Depending on your application's needs, select the
   type of database you wish to use. You can select from a range of options,
   including MySQL, Oracle, MSSQL, PostgreSQL, MongoDB, etc.

3. **Configure Your Database:** Depending on the selected database type, you
   will need to fill in the necessary configuration fields. This may include the
   database name, username, password, host, port, etc. If you're creating a new
   database, Agnost will handle this setup for you. If you're connecting to an
   existing database, you'll need to provide these details.

4. **Create Database Resource:** After filling in the necessary configuration
   details, click on 'Create' to create the database resource. Agnost will now
   handle setting up the database for you.

5. **Define Data Models:** Once your database is set up, you can define the data
   models for your application. From your application's main page, navigate to
   the 'Data Models' section. Here, you can define the tables (or collections,
   in the case of MongoDB), fields, and relationships that your application will
   use.

6. **Use in Code:** After defining your data models, you can use them in your
   application's code. Agnost provides an ORM-like interface for database
   operations, allowing you to easily create, read, update, and delete records
   in your database.

With database integration in Agnost, you can develop data-driven applications
more easily, without the need for extensive backend coding or database
administration. The process is straightforward, allowing developers to focus
more on their application's business logic and less on infrastructure setup.

In the next section, we'll explore Application Development > Setting Up
Scheduled Jobs.
