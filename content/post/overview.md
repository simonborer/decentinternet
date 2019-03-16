---
date: "2099-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Accessibility Overview"
---

Accessibility review
Accessibility is both a philosophy and a legal requirement.

Philosophy: removing barriers and creating equity.

Law: The Access for Ontarians with Disabilities Act, in accordance with the Canadian Charter of Rights and Freedoms, mandates a level of WCAG compliance.

WCAG compliance mandates semantics, content, proper source order, text alternatives to visual information, accomodations for colour-blindness and low visual acuity, keyboard-only functionality, and the use of the WAI-ARIA specification.

Semantics in HTML refers to using native elements and attributes for their defined purpose.

A correct source order means that the visual flow of the document matches the source code.

Text alternatives are provided when information is presented visually - this includes images, graphs, charts and tables, but also cases where elements have implicit functions based on the visual design, i.e. buttons within a form.

We can provide alternatives to this visual information with alt tags for graphic content, scope and caption for tables, and labels or screen reader-specific content for inputs, buttons and links.

We must also keep in mind that our elements are often used as navigational landmarks for people using non-visual clients, including headers for document structure.

Accessible content means...

Unique page titles (as it can be difficult to assess if the page has actually changed otherwise)
Concise link text (as screen readers read them in their entirety)
Accessible information about link behaviour
Skippable navigation
Captions and transcriptions that contain all relevant visual information
Verbose error messages (that capture focus), and
Using words rather than ASCII symbols
Because not all visually impairments require the use of a screenreader, we provide alternatives to colour cues for people with colour-blindness (i.e. focus outline, proper labelling), and for people with reduced visual abilities we check our colour contrast ratios and test our websites for up to 200% zoom.

For people with motor-impairment issues, we ensure that we do not disable the native functionality of our proper semantic HTML, and where native functionality is not available, we create keyboard events to supplement our click events.

We also maintain our tab order by having our source order properly represented.

On those rare occasions where our visual order and source order are in conflict, we can control focus with Javascript.

Where we want to make an element focusable that does not have native focusability, we can use the tabindex='0' attribute value.

The WAI-ARIA specification allows us to supplement our HTML elements, widgets and document presentation by defining roles and properties for screenreader users.

This is especially important when updating content on the page without a location change or page refresh, which is a common practice when using modern front-end javascript frameworks, such as Angular, React, and Vue.

Of course we keep in mind that all these standards apply whether on a desktop or mobile device, with a few special considerations for mobile, including...

Maintaining keyboard functionality
Supporting different orientations
Touch target size and spacing
Gesture alternatives, and
Appropriate virtual keyboard data types.
In order to enforce accessibility compliance and best practices, we need to help our team mates understand these techniques. We can encourage our team to use manual testing tools like the WAVE browser plugin, incorporate linting into our build process and auditing into our deployment or site monitoring

Additionally, because some accessibility techniques, especially ARIA, are context-dependent, automated enforcement can be a challenge. Manual code review is an essential part of making our whole team stronger and our product better.