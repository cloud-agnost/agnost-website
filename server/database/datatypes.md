---
sidebar_position: 2
description:
  Supported data types.
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Data types

Agnost supports various data types when you design your database schema. Below is the list of data types, their supported databases, and a short description of how they behave during insertion in a record to a database table.

| Type              | MongoDB | PostgreSQL | MySQL | Description                                                  |
| ----------------- | :-----: | :--------: | :---: | ------------------------------------------------------------ |
| Text              |  **✓**  |   **✓**    | **✓** | String value. **The max character length defined in Agnost studio is enforced** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Rich text         |  **✓**  |   **✓**    | **✓** | String value.                                                |
| Encrypted text    |  **✓**  |   **✓**    | **✓** | String value. **The max character length defined in Agnost studio is enforced** if a value is provided.The input text is automatically encrypted by Agnost using the `bcrypt` package. |
| Email             |  **✓**  |   **✓**    | **✓** | String value. **Valid email address validation** is performed if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Link              |  **✓**  |   **✓**    | **✓** | String value. **Valid URL validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Phone             |  **✓**  |   **✓**    | **✓** | String value. **Valid phone number validation is performed** if a value is provided. The phone number needs to be in international format which includes a plus sign (+), then country code, city code, and local phone number. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Boolean           |  **✓**  |   **✓**    | **✓** | Boolean value, true or false. **Valid boolean value validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Integer           |  **✓**  |   **✓**    | **✓** | Integere value. **Valid integer value validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. If a decimal value is provided the the input value is rounded to zero decimal places. |
| Decimal           |  **✓**  |   **✓**    | **✓** | Decimal value. **Valid decimal value validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. If a decimal value is provided the the input value is rounded according to the **decimal places** set in Agnost Studio. |
| Datetime          |  **✓**  |   **✓**    | **✓** | Date value or timestamp string. **Valid date value validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. The input date value needs to be in ISO 8601 format. |
| Date              |         |   **✓**    | **✓** | Not a valid field type for MongoDB. Date value or date string. **Valid date value validation is performed** if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. The input date value needs to be in "YYYY-MM-DD" format. |
| Time              |         |   **✓**    | **✓** | Not a valid field type for MongoDB. Time string. **Valid time value validation is performed** if a value is provided. The input tşme value needs to be in 24-hour "HH-MM-SS" format. |
| Enum              |  **✓**  |   **✓**    | **✓** | String value. **Valid enumeration value validation** is performed if a value is provided. If no value is specified during creation and if a default value is provided, then the default value is set. |
| Geo Point         |  **✓**  |   **✓**    | **✓** | Array of decimal values. The array has two entries, the first entry is the longitude and the second entry is the latitude e.g., [23.455, 56.666]. **Valid geo point validation is performed** if a value is provided. |
| Binary            |  **✓**  |   **✓**    | **✓** | Node.js Buffer object. **Valid buffer object validation is performed** if a value is provided. |
| JSON              |  **✓**  |   **✓**    | **✓** | JSON object or array of JSON objects. **Valid JSON object validation is performed** if a value is provided. |
| Reference         |  **✓**  |   **✓**    | **✓** | String or number. If the database is MongoDB then the reference field is checked whether it is a valid MongoDB ObjectId or not. For SQL based databases no addition check is performed. The value of the reference field should match the id of the referenced table record. |
| Basic Values List |  **✓**  |            |       | Only applicable in MongoDB databases. An array of basic values (e.g. array of string, number). **Valid basic value validation is performed** if a value is provided. Objects or arrays are not allowed in basic values arrays. Example basic values list field value: ["music", "art", "history"] |
| Object            |  **✓**  |            |       | Only applicable in MongoDB databases, used to define document hierarchy. **Manages a single sub-model.** For example, when modeling a user object, you can choose to model profile information under a profile object.<p></p>Object fields are tightly coupled with their parent model, meaning **when an object of the parent model is deleted, then the sub-model object is also deleted.** |
| Object List       |  **✓**  |            |       | Only applicable in MongoDB databases, used to define document hierarchy. **Manages multiple sub-models.** For example, a user model might have an addresses object list to model multiple user addresses. Therefore, when you query a user object, you also automatically get the address list of the queried user.<p></p>Object list fields are tightly coupled with their parent model, meaning **when a parent model object is deleted, then the sub-model objects are also deleted.** If you think the number of sub-model objects is limited (e.g., in tens or hundreds), then you can use an object-list field to model these cases. However, if you think the number of sub-model objects does not have any limits (e.g., thousands, millions), it is recommended to use a separate model to handle these cases. |

