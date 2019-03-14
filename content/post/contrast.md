---
date: "2014-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Contrast and Accessibility"
---

## The DOM API
Both 'DOM' and 'API' are acronyms that get thrown around a lot. Let's quickly make sure we all know what they mean.

An Application Programming Interface is a user interface, where the user is a person writing a computer script. It provides you information and functionality from the document or application that you're interacting with.

The Document Object Model is an API that represents an HTML (or XML) document as a traversable tree structure. The elements (and attributes, including text content) within that structure are referred to as 'nodes'.

There are different kinds of attributes we can assign to DOM nodes. There are native attributes, which are provided by the HTML spec, e.g. class, alt, target. There are data attributes (added in HTML5), which are user-customizable. And there are ARIA attributes.

ARIA (Accessible Rich Internet Applications) provides contextual information about if and how DOM nodes can update, and what happens when they do.

## When to use ARIA
There is a DOM node (including text) that can or does update without a page refresh being triggered, and
There is no native semantics or attribute available.
Don't be redundant
div[role='button'] is not redundant, but button[role='button'] is redundant.

## Want to be safe? TEST

I can't emphasize enough how important it is to test. That's why there are QA departments. It is wonderful to follow best practices, but even when specification documentation is perfect (it's not), and even when you limit your scope to the latest versions of a few popular clients (don't), and even when your linters catch all the edge cases (they won't), you still makes mistakes.

## What ARIA attributes?
You can find a pretty comprehensive list at https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

There are a lot, but you should know about the role attribute, which labels interactive elements, including tabs, search, form, and grid; and state attributes including aria-live, aria-expanded, and aria-hidden (which differs from the native hidden attribute).