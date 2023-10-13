---
sidebar_position: 7
description: 1 item
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import DetailedResponse from "@site/src/components/DetailedResponse"

# Expressions

### Expressions

Expressions enable the creation of **logical**, **mathematical** and
**relational** **statements**, which are used to apply rules, perform
mathematical calculations on retrieved data, compare model objects and check the
feasibility of a statement. **Expressions are also used to access field values
of model objects and query data in database.**

:::info

In Agnost, **you use the same expression syntax to query your data**; in other
words, you do not need to learn a separate data querying language (e.g., SQL).
If you know how to write a formula in Excel, you have all the basic know-how to
write expressions and data queries in Agnost.

:::

The basic expression types implemented by Agnost platform can be summarized as
follows:

- Mathematical
- Logical
- Relational
- Informational \(field value retrieval from model objects\)

**Expressions are defined as combinations of operands and operators in a logical
sequence.** Such a sequence may represent a mathematical calculation, logical
reasoning, relational comparison or even an informational operation.

Below are some expression examples,

> ```js
> 10 - 5
> ```
>
> ```js
> ;(100 - 20) * 8
> ```
>
> ```js
> "Agnost" + "-" + "Backend as a service platform"
> ```
>
> ```js
> shoppingCart.totalPrice / SIZE(shoppingCart.items) > 25
> ```

The first expression above is a mathematical expression, the second one is again
a mathematical expression but it is nested. The third one is a string
manipulation expression and the last one is a combination of relational,
informational and mathematical expressions, including the use of `SIZE`
function. This last expression checks whether the average price of an item in an
imaginary shopping cart object is greater than 25 or not. As seen from the above
examples, the expression types and combinations may differ from one expression
to another, however, **the main rule is to keep combinations and types similar
to each other**. That is the result of the expression operands evaluation,
namely the values, must be of the same type to have a proper operator
implementation.

Expressions consist of **operands** and **operators**. An operand can be a
**basic value** or an expression defined in terms of other expressions because
expressions can be treated as recursive data structures.

### Values

Each expression is formed by logically combining values. Values are actually
primitive data types, but more complex data types such as lists and geo-points
can also be used in expressions. A value can be a:

| Value type                           | Examples                                 |
| :----------------------------------- | :--------------------------------------- |
| Boolean                              | `true` `false`                           |
| Number                               | `134` `56.98`                            |
| Text                                 | `'Hello world!'`                         |
| Datetime                             | `'2020-04-01T06:40:12.941+00:00'`        |
| List \(array of basic values\)       | `['pop', '90s', 'urban', 'dance']`       |
| Geo-point \(longitude and latitude\) | `[29.032589793205258, 41.2200826257151]` |
| Model field value                    | `profile.email` `address.city`           |

### Operators

Operators carry out all the computations by using the expression elements and
can be classified into two main categories. They can be either **unary** or
**binary**.

**Unary operators** carry the calculations on a **single value**, namely on an
operand, however, **binary operators** carry calculations on **two operands**,
one on the left of the operator \(left operand\) and the other on the right
\(right operand\).

#### **Arithmetic operators**

Arithmetic operators are used for mathematical calculations.

| **Operator** | **Syntax**               | **Description**                             |
| :----------- | :----------------------- | :------------------------------------------ |
| + \(unary\)  | + Expression             | Assigns a positive sign to expression       |
| +            | Expression + expression  | Adds the values                             |
| - \(unary\)  | - Expression             | Assigns a negative sign to expression value |
| -            | Expression – expression  | Subtracts the values                        |
| \*           | Expression \* expression | Multiplies the values                       |
| /            | Expression / expression  | Divides the values                          |

> **Example:**
>
> ```js
> ;-(10 + ((10 * 5 - 4) / 100 - 20))
> ```

In the above expression, all the arithmetic operators are used. The expression
is purely mathematical and it is nested. Moreover, the evaluation result of the
expression value sign is converted to negative type by the unary minus operator.

#### **Logical operators**

Logical operators are used to evaluating an expression to **true** \(1\) or
**false** \(0\).

| **Operator** | **Syntax**                 | **Description**                                                                                                            |
| :----------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| &&           | Expression && expression   | Logical AND returns true \(1\) only if both expressions evaluate to a nonzero value; otherwise it returns false \(0\).     |
| \|\|         | Expression \|\| expression | Logical OR returns true \(1\) if either of the expressions evaluates to a nonzero value; otherwise it returns false \(0\). |
| !            | !Expression                | Logical negation returns false \(0\) if the expression evaluates to a nonzero value; otherwise it returns true \(1\).      |

> **Example:**
>
> ```js
> ;(profile.firstName && profile.lastName) || profile.fullName
> ```

As it can be seen that the expression uses a combination of both logical && and
\|\| operators. It uses three field values of an imaginary 'profile' model.
Initially, the expression in parenthesis will be evaluated, which performs a
logical AND conditioning on the first two attributes. The result obtained from
this evaluation will next be combined with the evaluation result of the last
expression operand \(profile.fullName\) and the final result will be either
evaluated to true or false.

Instead of the logical operators, you can also use **AND** function for &&,
**OR** function for \|\| and NOT function for ! operator. Using the functions
instead of operators the above example can be written as:

```js
OR(AND(profile.firstName, profile.lastName), profile.fullName)
```

#### **Relational operators**

Like logical operators, relational operators are also used to evaluate an
expression to **true** \(1\) or **false** \(0\).

| **Operator** | **Syntax**                  | **Description**                                                                                                                                                                                          |
| :----------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ==           | Expression == expression    | Checks equality of expressions; if the expressions are equal, it returns true \(1\) otherwise, it returns false \(0\)                                                                                    |
| !=           | Expression != expression    | Checks not equality of expressions; if the expressions are not equal, it returns true \(1\) otherwise, it returns false \(0\)                                                                            |
| &lt;         | Expression &lt; expression  | Checks whether the first expression is less than the second one; if the first expression is less than the second one, returns true \(1\) otherwise, it returns false \(0\)                               |
| &gt;         | Expression &gt; expression  | Checks whether the first expression is greater than the second one; if the first expression is greater than the second one, returns true \(1\) otherwise, it returns false \(0\)                         |
| &lt;=        | Expression &lt;= expression | Checks whether the first expression is less than or equal to the second one; if the first expression is less than or equal to the second one, returns true \(1\) otherwise, it returns false \(0\)       |
| &gt;=        | Expression &gt;= expression | Checks whether the first expression is greater than or equal to the second one; if the first expression is greater than or equal to the second one, returns true \(1\) otherwise, it returns false \(0\) |

> **Example:**
>
> ```js
> task.completionDate > task.dueDate
> ```

The expression above uses a relational greater than operator. It checks whether
the completion time is later than the due date of an imaginary task object.

#### Agnost specific operators

| **Operator** | **Syntax**                      | **Description**                                                                                                                         |
| :----------- | :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| \[ \]        | \[expression, expression, ...\] | This bracket operator specifies that the expressions which are separated by commas between the brackets are members of a list \(array\) |
| " "          | "text"                          | This operator specifies that the expression between the double quotation is a text value.                                               |
| ' '          | 'text'                          | This operator specifies that the expression between the quotation is a text value.                                                      |

> **Examples:**
>
> 1. ```js
>    "10" + "20" + "30"
>    ```
> 2. ```js
>    "Result : " + (10 * 5 + 100)
>    ```
> 3. ```js
>    SIZE([45, 26, 94, 73]) == 4
>    ```

The first expression illustrates a basic string concatenation operation. The
characters between the double quotes are treated as a string. The second and the
third strings are concatenated to the first one, which results in this final
string: `102030`. The second expression is a special one and evaluation result
of this expression is `Result : 150`. This is again a string concatenation
operation but the second expression is evaluated as a mathematical one and the
result is converted to a string value. The last expression is a relational
equality check whether the left operand value is equal to the right operand
value. `size` is a built in function which returns the length of an array. In
this case the array length is 4 and this overall expression evaluates to true
\(1\).

### Associativity and Precedence of Operators

In expressions, operators have different precedence. Evaluation of the
expressions is carried on according to the precedence of the operators. From
simple algebra, multiplication precedes addition or subtraction, however
division and multiplication have the same precedence.

The precedence relation between the arithmetical, logical, special and
relational operators implemented is as follows.

| **Operators**         | **Associativity** |
| :-------------------- | :---------------- |
| \( \) " ' \[ \]       | Left to right     |
| + - !                 | Left to right     |
| \* /                  | Left to right     |
| + -                   | Left to right     |
| &lt; &lt;= &gt; &gt;= | Left to right     |
| == !=                 | Left to right     |
| &&                    | Left to right     |
| \|\|                  | Left to right     |

Operators in the same category have equal precedence with each other. Where
duplicates of operators appear in the table, the first occurrence is unary, the
second binary. Each category has an associativity rule: left to right. In the
absence of parentheses, this rule resolves the grouping of expressions with
operators of equal precedence. The precedence of each operator in table above is
indicated by its order in the table. The first category \(on the first line\)
has the highest precedence. Operators on the same line have equal precedence.

### Functions

There are several **array**, **logical**, **text**, **object**,
**mathematical**, **date & time**, **type conversion**, **validation** and
**geolocation** functions implemented as expressions for performing advanced
calculations and data manipulations. You can use these functions in your
expressions.

Each function has a name and zero or more input parameters. The number and type
of input parameters are all specific to a function.

> **Examples:**
>
> 1. ```js
>    STARTSWITH(main_text, search_text)
>
>    STARTSWITH("Jonh Adams", "Jon")
>    ```
>
> 2. ```js
>    PRODUCT(number1, number2, ...)
>
>    PRODUCT(10, 23, 5, -75)
>
>    ```

The first example above is the "STARTSWITH" function. This function checks
whether a string starts with the characters of a search string, returning true
or false as appropriate. It accepts two text parameters, _main text_ and _search
text_. The second example is the "PRODUCT" function. This function multiplies
all the numbers given as arguments and returns the resulting number. There is no
fixed number of input parameter for this function. At a minimum it takes two
parameters and maximum it can have 100.

### Data query expressions

Agnost does not use a separate data query syntax \(e.g., SQL\) for
selecting/filtering data from the database. **You use the same expression syntax
described above and functions to query your data.**

Assuming you have an imaginary product model with quantity \(integer\), weight
\(decimal\), volume \(decimal\) and type \(text\) information. Below are some
data query examples that you can create to fetch/filter your products data.

> **Examples:**
>
> 1. ```js
>    quantity > 100 && quantity < 200 && type == "plastic"
>    ```
> 2. ```js
>    ;(weight / volume > 2 && type == "metal") ||
>      (weight / volume <= 2 && type == "plastic")
>    ```
