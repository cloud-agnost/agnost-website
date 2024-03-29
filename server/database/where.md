---
sidebar_position: 9
description:
  Defining queries
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Defining queries
## Where queries
Where queries are used to define conditions to filter records in database tables and join or lookup tables. With where queries you can create logical, mathematical and relational statements.

:::info
In Agnost, **you use the same where query syntax to query your data independent of the underlying database**; in other words, you can use the same query syntax for relational (e.g., PostgreSQL, MySQL) and document (e.g. MongoDB) databases. 
:::

Where queries are defined as combinations of operands and operators in a logical sequence. Such a sequence may represent a mathematical calculation, logical reasoning, relational comparison or even a specific function call. Below are some where examples:

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">

```javascript
// Checks whether the name field equals to "John"
{ name: "John"}
// Same as above equaility check
{ $eq: ["name", "John"] }

// Checks whether the name field equals to "John" and age is 21
{ name: "John", age: 21 }
// Same as above name and age equaility check
{ $and: [{ name: "John" }, { age: 24 }] }
{ $and: [{ $eq: ["name", "John"] }, { $eq: ["age", 24] }] }

// Checks whether the name of the user starts with "Jo" and age is greater than 18
{ $and: [{ $startsWith: ["name", "Jo"] }, { $gt: ["age", 18] }] }
```

</TabItem>
</Tabs>

:::tip
Typically the where conditions are defined using logical, relational, arithmethic, string, date-time etc. functions and combinations of these functions. However we have implemented two optimizations to speed up query definition. 

**Optimization #1:**

You can directly make equality check of a field value using 

`{ field: value }` 

instead of 

`{ $eq: [field, value] }`

**Optimization #1:**
If you make multiple field value checks they are automatically combined within a logical AND function.

You can directly make equality check of multiple fields value using 

`{ field1: value1,  field2: value2, field3: value3}` 

instead of 

`{$and: [{ $eq: [field1, value1] }, { $eq: [field2, value2] }, { $eq: [field3, value3] }] }`

:::

## Subqueries
Sometimes you might need to run subqueries in relational databases when defining your where queries. Subqueries work in tandem with the `$exists` function defined in [Logical & relational functions.](#logical--relational-functions)

You can use the `getSQLSubQuery` method of the model object to define a subquery. Below is an example of using `getSQLSubQuery` in an `$exists` function. In this example, we try to find customers who have placed at least one order. The `baseModel` parameter is required when defining a sub-query. Since the base model is `customers`, we set `baseModel` value to `customers`.

<Tabs defaultValue="javascript" groupId="dev" values={[ { label: "Javascript", value: "javascript" }]}>


<TabItem value="javascript">

```javascript
const customers = await agnost
  .db("postgres")
  .model("customers")
  .findMany(
    {
      $exists: await agnost
        .db("postgres")
        .model("orders")
        .getSQLSubQuery({
          where: { userId: "users.id" },
          select: ["id"],
          baseModel: "customers",
        }),
    },
    { limit: 50 },
  );
```

</TabItem>
</Tabs>

:::info
Subqueries can only be used in relational databases (e.g, PostgreSQL and MySQL). If you try to use subqueries in MongoDB, Agnost will throw an error.
:::

Below is the list of functions currently supported in Agnost that you can use in your where queries:


## Logical & relational functions

| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$and`        | `BooleanValue[]`                                             | Performs logical AND operation.                              | ***✓*** |  ***✓***   | ***✓*** |
| `$eq`         | `[leftOperand: AnyValue, rightOperand: AnyValue]`            | Checks equality of two values.                               | ***✓*** |  ***✓***   | ***✓*** |
| `$exists`     | `AnyValue or [value: AnyValue]`                              | Checks if the value exists or not. **For SQL databases this function expects a subquery as its parameter.** | ***✓*** |  ***✓***   | ***✓*** |
| `$isnull`     | `AnyValue or [value: AnyValue]`                              | Checks if the value is null or not. | ***✓*** |  ***✓***   | ***✓*** |
| `$isnotnull`  | `AnyValue or [value: AnyValue]`                              | Checks if the value is NOT null or not. | ***✓*** |  ***✓***   | ***✓*** |
| `$gt`         | `[firstValue: NumericValue, secondValue: NumericValue]`      | Checks whether the first value is greater than the second value. | ***✓*** |  ***✓***   | ***✓*** |
| `$gte`        | `[firstValue: NumericValue, secondValue: NumericValue]`      | Checks whether the first value is greater than or equal to the second value. | ***✓*** |  ***✓***   | ***✓*** |
| `$in`         | `[value: AnyValue, arrayOfValues: ArrayValue]`               | Checks whether the value is in an array.                     | ***✓*** |  ***✓***   | ***✓*** |
| `$lt`         | `[firstValue: NumericValue, secondValue: NumericValue]`      | Checks whether the first value is less than the second value. | ***✓*** |  ***✓***   | ***✓*** |
| `$lte`        | `[firstValue: NumericValue, secondValue: NumericValue]`      | Checks whether the first value is less than or equal to the second value. | ***✓*** |  ***✓***   | ***✓*** |
| `$neq`        | `[leftOperand: AnyValue, rightOperand: AnyValue]`            | Checks not-equality of two values.                           | ***✓*** |  ***✓***   | ***✓*** |
| `$nin`        | `[value: AnyValue, arrayOfValues: ArrayValue]`               | Checks whether the value is not in an array.                 | ***✓*** |  ***✓***   | ***✓*** |
| `$not`        | `BooleanValue or [value: BooleanValue]`                      | Performs logical NOT operation.                              | ***✓*** |  ***✓***   | ***✓*** |
| `$or`         | `BooleanValue[]`                                             | Performs logical OR operation.                               | ***✓*** |  ***✓***   | ***✓*** |


## Mathematical functions

| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$abs`        | `NumericValue or [value: NumericValue]`                      | Returns the absolute value of a number.                      | ***✓*** |  ***✓***   | ***✓*** |
| `$acos`       | `NumericValue or [value: NumericValue]`                      | Returns the inverse cosine (arccosine) of a number, in radians in the range 0 to Pi. | ***✓*** |  ***✓***   | ***✓*** |
| `$acosh`      | `NumericValue or [value: NumericValue]`                      | Returns the inverse hyperbolic cosine (hyperbolic arc cosine) of a value. | ***✓*** |  ***✓***   |         |
| `$add`        | `NumericValue[]`                                             | Adds numbers together.                                       | ***✓*** |  ***✓***   | ***✓*** |
| `$asin`       | `NumericValue or [value: NumericValue]`                      | Returns the inverse sine (arcsine) of a number in radians, in the range -Pi/2 to Pi/2. | ***✓*** |  ***✓***   | ***✓*** |
| `$asinh`      | `NumericValue or [value: NumericValue]`                      | Returns the inverse hyperbolic sine (hyperbolic arcsine) of a value. | ***✓*** |  ***✓***   |         |
| `$atan`       | `NumericValue or [value: NumericValue]`                      | Returns the inverse tangent (arctangent) of a value in radians, in the range -Pi/2 to Pi/2. | ***✓*** |  ***✓***   | ***✓*** |
| `$atan2`      | `[y: NumericValue, x: NumericValue]`                         | Returns the inverse tangent (arc tangent) of y / x.          | ***✓*** |  ***✓***   | ***✓*** |
| `$atanh`      | `NumericValue or [value: NumericValue]`                      | Returns the inverse hyperbolic tangent (hyperbolic arctangent) of a value in radians. | ***✓*** |  ***✓***   |         |
| `$ceil`       | `NumericValue or [value: NumericValue]`                      | Returns the smallest integer greater than or equal to the specified number. | ***✓*** |  ***✓***   | ***✓*** |
| `$cos`        | `NumericValue or [value: NumericValue]`                      | Returns the cosine of a value that is measured in radians.   | ***✓*** |  ***✓***   | ***✓*** |
| `$cosh`       | `NumericValue or [value: NumericValue]`                      | Returns the hyperbolic cosine of a value that is measured in radians. | ***✓*** |  ***✓***   |         |
| `$degrees`    | `NumericValue or [radians: NumericValue]`                    | Converts an input value measured in radians to degrees.      | ***✓*** |  ***✓***   | ***✓*** |
| `$divide`     | `[dividend: NumericValue, divisor: NumericValue]`            | Returns the result of dividing the first number by the second. | ***✓*** |  ***✓***   | ***✓*** |
| `$exp`        | `NumericValue or [value: NumericValue]`                      | Raises Euler’s number (e, the base of the natural logarithm) to the specified exponent and returns the result. | ***✓*** |  ***✓***   | ***✓*** |
| `$floor`      | `NumericValue or [value: NumericValue]`                      | Returns the largest integer less than or equal to the specified number. | ***✓*** |  ***✓***   | ***✓*** |
| `$ln`         | `NumericValue or [value: NumericValue]`                      | Calculates the natural logarithm of a number and returns the result as a decimal number. | ***✓*** |  ***✓***   | ***✓*** |
| `$log`        | `[number: NumericValue, base: NumericValue]`                 | Calculates the log of a number in the specified base and returns the result as a double. | ***✓*** |  ***✓***   |         |
| `$log10`      | `NumericValue or [value: NumericValue]`                      | Calculates the log base 10 of a number and returns the result as a decimal number. | ***✓*** |  ***✓***   | ***✓*** |
| `$mod`        | `[dividend: NumericValue, divisor: NumericValue]`            | Returns the remainder of the first number divided by the second. | ***✓*** |  ***✓***   | ***✓*** |
| `$multiply`   | `NumericValue[]`                                             | Multiplies numbers together and returns the result.          | ***✓*** |  ***✓***   | ***✓*** |
| `$pow`        | `[number: NumericValue, exponent: NumericValue]`             | Raises a number to the specified exponent and returns the result. | ***✓*** |  ***✓***   | ***✓*** |
| `$radians`    | `NumericValue or [degrees: NumericValue]`                    | Converts an input value measured in degrees to radians.      | ***✓*** |  ***✓***   | ***✓*** |
| `$round`      | `[number: NumericValue, decimalPlaces: NumericValue]`        | Rounds a number to a whole integer or to a specified decimal place. | ***✓*** |  ***✓***   | ***✓*** |
| `$sin`        | `NumericValue or [value: NumericValue]`                      | Returns the sine of a value that is measured in radians.     | ***✓*** |  ***✓***   | ***✓*** |
| `$sinh`       | `NumericValue or [value: NumericValue]`                      | Returns the hyperbolic sine of a value that is measured in radians. | ***✓*** |  ***✓***   |         |
| `$sqrt`       | `NumericValue or [value: NumericValue]`                      | Calculates the square root of a positive number and returns the result as a decimal. | ***✓*** |  ***✓***   | ***✓*** |
| `$subtract`   | `[number1: NumericValue, number2: NumericValue]`             | Subtracts two numbers to return the difference.              | ***✓*** |  ***✓***   | ***✓*** |
| `$tan`        | `NumericValue or [value: NumericValue]`                      | Returns the tangent of a value that is measured in radians.  | ***✓*** |  ***✓***   | ***✓*** |
| `$tanh`       | `NumericValue or [value: NumericValue]`                      | Returns the hyperbolic tangent of a value that is measured in radians. | ***✓*** |  ***✓***   |         |


## String functions

| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$charindex`  | `[mainText: StringValue, searchText: NumericValue, startingIndex: NumericValue]` | Searches a string for an occurrence of a substring and returns the index (zero-based) of the first occurrence. If the substring is not found, returns -1. The optional starting index parameter is zero based. | ***✓*** |  ***✓***   | ***✓*** |
| `$concat`     | `StringValue[]`                                              | Concatenates strings and returns the concatenated string.    | ***✓*** |  ***✓***   | ***✓*** |
| `$endsWith`   | `[mainText: StringValue, searchText: StringValue]`           | Checks whether a string ends with the characters of a specified string, returning true or false as appropriate. | ***✓*** |  ***✓***   | ***✓*** |
| `$includes`   | `[mainText: StringValue, searchText: StringValue, caseSensitive: boolean]` | Checks whether the main string includes the characters of the search string, returning true or false as appropriate. | ***✓*** |  ***✓***   | ***✓*** |
| `$left`       | `[text: StringValue, characterCount: NumericValue]`          | Returns the first count characters from the beginning of the main string as a new string. | ***✓*** |  ***✓***   | ***✓*** |
| `$length`     | `StringValue or [text: StringValue]`                         | Returns the number of characters in the specified string.    | ***✓*** |  ***✓***   | ***✓*** |
| `$lower`      | `StringValue or [text: StringValue]`                         | Converts a string to lowercase and returns the resulting new string. | ***✓*** |  ***✓***   | ***✓*** |
| `$ltrim`      | `StringValue or [text: StringValue]`                         | Removes whitespace characters (e.g., spaces) from the beginning of a string. | ***✓*** |  ***✓***   | ***✓*** |
| `$right`      | `[text: StringValue, characterCount: NumericValue]`          | Returns the last count characters from the end of the main string as a new string. | ***✓*** |  ***✓***   | ***✓*** |
| `$rtrim`      | `StringValue or [text: StringValue]`                         | Removes whitespace characters (e.g., spaces) from the end of a string. | ***✓*** |  ***✓***   | ***✓*** |
| `$startsWith` | `[mainText: StringValue, searchText: StringValue]`           | Checks whether a string starts with the characters of a specified string, returning true or false as appropriate. | ***✓*** |  ***✓***   | ***✓*** |
| `$substring`  | `[text: StringValue, startingIndex: NumericValue, characterCount: NumericValue]` | Returns the substring of a string. The substring starts with the character at the specified index (zero-based) in the string for the number of characters (count) specified. | ***✓*** |  ***✓***   | ***✓*** |
| `$trim`       | `StringValue or [text: StringValue]`                         | Removes whitespace characters (e.g., spaces) from the beginning and end of a string. | ***✓*** |  ***✓***   | ***✓*** |
| `$upper`      | `StringValue or [text: StringValue]`                         | Converts a string to uppercase and returns the resulting new string. | ***✓*** |  ***✓***   | ***✓*** |

## Date & time functions

| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$dateAdd`    | `[date: DateValue, duration: NumericValue, unitOfMeasure: "year", "quarter", "week", "month", "day", "hour", "minute", "second", "millisecond"]` | Adds a period of time to the input date & time value and returns the resulting date & time value. | ***✓*** |  ***✓***   | ***✓*** |
| `$dateDiff`   | `[startDate: DateValue, endDate: DateValue, unitOfMeasure: "year", "quarter", "week", "month", "day", "hour", "minute", "second", "millisecond"]` | Calculates the difference between two date & time values as a duration. | ***✓*** |  ***✓***   | ***✓*** |
| `$dayOfMonth` | `DateValue or [date: DateValue]`                             | Returns the day of the month for a date as a number between 1 and 31. | ***✓*** |  ***✓***   | ***✓*** |
| `$dayOfWeek`  | `DateValue or [date: DateValue]`                             | Returns the day of the week for a date as a number between 1 (Sunday) and 7 (Saturday). | ***✓*** |  ***✓***   | ***✓*** |
| `$dayOfYear`  | `DateValue or [date: DateValue]`                             | Returns the day of the year for a date as a number between 1 and 366. | ***✓*** |  ***✓***   | ***✓*** |
| `$hour`       | `DateValue or [date: DateValue]`                             | Returns the hour part of a date as a number between 0 and 23. | ***✓*** |  ***✓***   | ***✓*** |
| `$minute`     | `DateValue or [date: DateValue]`                             | Returns the minute part of a date as an integer between 0 and 59. | ***✓*** |  ***✓***   | ***✓*** |
| `$month`      | `DateValue or [date: DateValue]`                             | Returns the month of a date as a number between 1 and 12.    | ***✓*** |  ***✓***   | ***✓*** |
| `$now`        | `any`                                                        | Returns the current date and time.                           | ***✓*** |  ***✓***   | ***✓*** |
| `$second`     | `DateValue or [date: DateValue]`                             | Returns the second part of a date as a number between 0 and 59. | ***✓*** |  ***✓***   | ***✓*** |
| `$strToDate`  | `StringValue or [dateString: StringValue]`                   | Converts the input string into a date. The input string needs to be in the following format: 'YYYY-MM-DD HH24:MI:SS', e.g., '2023-09-07 23:07:35'. | ***✓*** |  ***✓***   | ***✓*** |
| `$year`       | `DateValue or [date: DateValue]`                             | Returns the year part of a date.                             | ***✓*** |  ***✓***   | ***✓*** |

## Type conversion functions
| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$toBoolean`  | `AnyValue or [value: AnyValue]`                              | Converts the input value to a boolean.                       | ***✓*** |  ***✓***   |         |
| `$toDate`     | `AnyValue or [value: AnyValue]`                              | Converts the input value to a date.                          | ***✓*** |  ***✓***   | ***✓*** |
| `$toDecimal`  | `AnyValue or [value: AnyValue]`                              | Converts the input value to a decimal.                       | ***✓*** |  ***✓***   | ***✓*** |
| `$toInteger`  | `AnyValue or [value: AnyValue]`                              | Converts the input value to an integer.                      | ***✓*** |  ***✓***   | ***✓*** |
| `$toObjectId` | `AnyValue or [value: AnyValue]`                              | Converts a value to a MongoDB ObjectId(). If the value cannot be converted to an ObjectId, it returns errors. If the value is null or missing, it returns null. | ***✓*** |            |         |
| `$toString`   | `AnyValue or [value: AnyValue]`                              | Converts the input value to a string.                        | ***✓*** |  ***✓***   | ***✓*** |

## Geolocation functions
| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$distance`   | `[point1: AnyValue, point2: AnyValue]`                       | Calculates the distance between two geo points in meters.    | ***✓*** |  ***✓***   | ***✓*** |
| `$point`      | `[longitude: NumericValue, latitude: NumericValue]`          | Constructs and returns a geo point value given the constituent longitude and latitude properties. | ***✓*** |  ***✓***   | ***✓*** |

## Other functions
| Function      | Type or Signature                                            | Description                                                  | MongoDB | PostgreSQL | MySQL   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | :-----: | :--------: | ------- |
| `$size`       | `ArrayValue or [arrayValue: ArrayValue]`                     | Returns the size of the array.                               | ***✓*** |            |         |
