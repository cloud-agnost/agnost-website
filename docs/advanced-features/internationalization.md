---
sidebar_position: 3
---

# Internationalization and Localization

Internationalization and localization are essential aspects of modern
application development. As your application user base grows, catering to users
across different regions, speaking different languages and adhering to their
cultural nuances becomes paramount. This section introduces Agnost's support for
internationalization and localization.

### Internationalization (i18n)

Internationalization, often abbreviated as i18n (because there are 18 letters
between the i and the n in the word 'internationalization'), is the process of
designing and preparing your application to be usable in different languages.
This usually involves abstracting your application's static text and any
language or culture-specific components to allow for future localization.

In Agnost, all static text within your application can be abstracted to a
language file, typically in JSON format. This JSON file contains key-value pairs
that correspond to each piece of static text within your application. When a
user interacts with your application, the appropriate text for their locale is
loaded from the relevant language file.

### Localization (l10n)

Localization, abbreviated as l10n (because there are 10 letters between the l
and the n in the word 'localization'), is the process of adapting
internationalized software for a specific region or language by adding
locale-specific components and translating text.

With Agnost, localization involves providing translated versions of your
language files for each locale that your application supports. When a user
interacts with your application, Agnost detects the user's locale and uses the
corresponding language file to provide localized text.

This way, you can create applications that are accessible and user-friendly to a
global audience.

### Date, Time and Number Formats

Agnost also provides comprehensive support for localized date, time, and number
formats. By using JavaScript's `Intl` object, you can ensure your application
displays date, time, and numbers in a format that aligns with the user's locale.

### Implementation in Agnost

While implementing i18n and l10n in Agnost, the most common strategy is to make
use of the user's `Accept-Language` HTTP header to determine the appropriate
language to display. Alternatively, the language preference can be part of the
user profile data stored in the database. You can then use libraries like
`i18next` for Node.js applications, which provide robust internationalization
support including language detection, pluralization, and formatting.

Remember that internationalization and localization can significantly enhance
the user experience, helping to drive user engagement and retention as you
expand into new markets.

In the next section, we will explore more advanced features of Agnost under
Advanced Features > Microservices Architecture.
