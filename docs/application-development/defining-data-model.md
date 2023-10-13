---
sidebar_position: 3
---

import ImageSwitcher from "@theme/ImageSwitcher"
import ilCss from "../../src/css/illustration.module.css"

# Defining Data Models

In Agnost, defining a data model is a fundamental step in building your
application. This section will guide you through the process of creating a data
model within Agnost, allowing you to design and structure your application's
data with ease.

To define a data model in Agnost, follow these simple steps:

### 1. Access the Database Section

Click the **+** icon located in the header of your Agnost dashboard.

- From the dropdown menu, select **Database** to navigate to the Database
  section.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/defining-data-model-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/defining-data-model.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Create a New Database

In the Database section, you'll have the option to **Create a new database**.

- A dialog box will appear, asking you to enter a **database name** for your new
  data model. This name should be descriptive and reflect the purpose of the
  database within your application.

- Next, you will need to select a **database server** from the available
  options. The database server is the resource you defined previously, which
  could be MongoDB, MySQL, PostgreSQL, Oracle, or SQL Server, depending on your
  application's requirements.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/adding-database-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/adding-database.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

Then click on the **Create** button to create your new database. Agnost will
then create the database and make it available for use within your application.
Click the name of the database to access it, where you can define your data
model.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/database-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/database.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 3. Define the Data Model

Once you've created the database, you can begin defining your data model within
it. This typically involves creating tables, collections, or data structures
that represent various aspects of your application's data.

- In the Agnost Studio, click on the **+ Create Model** button. This action will
  take you to the data model creation page.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/create-model-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/create-model.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 2. Provide Model Details

On the data model creation page, you'll need to provide the following details
for your new model:

- **Name:** Enter a descriptive name for your data model. This name should
  reflect the purpose or entity that the model represents within your
  application.

- **Description:** Optionally, provide a brief description of the model to
  document its purpose or usage.

- **Enable Timestamps:** You can choose whether to enable or disable default
  timestamps for your model. Timestamps typically include fields like
  **`createdAt`** and **`updatedAt`** to track when records were created or last
  updated.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/model-name-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/model-name.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 3. Add Fields to the Model

Once you've created the model, you can click on the name of the model to access
its configuration page within the Agnost Studio.

- On the model configuration page, you can add fields to the model by clicking
  the **`+ Add Field`**.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/add-field-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/add-field.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

### 4. Select Field Types

Agnost offers a variety of field types that you can choose from to define the
structure of your model. Below are the available field types grouped by
category:

#### Textual

- **Text:** A basic text field.
- **Encrypted Text:** Text data that is encrypted for security.
- **Link:** A field for URLs.
- **Rich Text:** Supports rich text formatting.
- **Email:** For email addresses.
- **Phone:** For phone numbers.

#### Numeric

- **Boolean:** Represents true or false values.
- **Decimal:** For decimal numbers.
- **Integer:** For whole numbers.

#### Datetime

- **Datetime:** Represents date and time values.

#### Advanced

- **Enum:** A field with a predefined set of values.
- **Binary:** For binary data, such as images or files.
- **Reference:** Links to other models or resources.
- **Geo Point:** Represents geographical coordinates.
- **Json:** For JSON data.
- **Basic Values List:** A list of basic values.

#### Sub Models

- **Object:** Represents an embedded object.
- **Object List:** A list of embedded objects.

### 5. Configure Field Properties

For each field you add to the model, you can configure its properties, such as
field name, max length, validation rules, and default values. Agnost Studio
provides an intuitive interface for adjusting these settings.

<ImageSwitcher
  lightImageSrc="/img/docs/application-development/field-properties-l.png?text=LightMode"
  darkImageSrc="/img/docs/application-development/field-properties.png?text=DarkMode"
  className={ilCss.illustration__md}
  width={820}
/>

After defining your data model with the appropriate field types and properties,
you can start using it in your application. Whenever you need to update the data
model, want to change the field types, or add new fields, you can do so easily
within Agnost Studio.

Remember that a well-defined data model is essential for building scalable and
efficient applications. If you encounter any issues or need guidance on data
modeling within Agnost, please refer to our documentation or reach out to our
support team for assistance.
