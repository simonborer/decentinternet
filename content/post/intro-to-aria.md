---
date: "2018-10-31"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Intro to ARIA"
atf: "ARIA is one of the most neglected aspects of accessibility, and one of the most important! Let's learn the basics of supplementing our native semantics with ARIA attributes."
---

## What is ARIA?

<abbr title="Accessible Rich Internet Applications">ARIA</abbr>, or '<abbr title="Web Accessibility Initiative - Accessible Rich Internet Applications">WAI-ARIA</abbr>' (they're the same thing) is a specification from the <abbr title="World Wide Web Consortium">W3C</abbr>, just like the specs for <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, etc.

It is a set of element attributes meant to supplement native HTML semantics, particularly (but by no means exclusively) by marking up dynamic content, such as tabs, forms and other user interface elements, or 'live' content, like a Twitter feed.

Let's take a step back and learn a little about the <abbr title="Document Object Model">DOM</abbr> before we dive into how ARIA adds to the information available to users about what the DOM is doing.

## The DOM API
Both 'DOM' and '<abbr title="Application Programming Interface">API</abbr>' are acronyms that get thrown around a lot. Let's quickly define them.

An Application Programming Interface is a user interface, where the user is a person writing a computer script. It provides you information and functionality from the document or application that you're interacting with.

The Document Object Model is an API that represents an HTML (or <abbr title="eXtensible Markup Language">XML</abbr>) document as a traversable tree structure. The elements (and attributes, including text content) within that structure are referred to as 'nodes'.

There are different kinds of attributes we can assign to DOM nodes. There are native attributes, which are provided by the HTML spec, e.g. <code>class</code>, <code>alt</code>, <code>target</code>. There are <code>data-</code> attributes (added in HTML5), which are user-customizable. And there are ARIA attributes.

The main type of information that ARIA (Accessible Rich Internet Applications) provides is contextual information about if and how DOM nodes can update, and what happens when they do.

## When to use ARIA

<ol>
	<li>There is a DOM node (including text) that can or does update without a page refresh being triggered, or</li>
	<li>There is no native semantics element or attribute available to describe how an element can change the DOM.</li>
</ol>

### Don't be redundant

<pre><code class="language-html">&lt;div role="button"&gt;&lt;/div&gt;</code></pre>

...is not redundant. If you are using a <code>div</code> as a button, there is no semantic indicator that it is meant to function as a button unless you specify it with the <code>role</code> attribute.

<pre><code class="language-html">&lt;button role="button" /&gt;</code></pre>
...on the other hand, <em>is</em> redundant. The native semantics make it apparent to all concerned that this button is, in fact, a button.

## Want to be safe? TEST

I can't emphasize enough how important it is to test. That's why there are <abbr title="Quality Assurance">QA</abbr> departments. 

It is wonderful to follow best practices, but even when specification documentation is perfect (it's not), and even when you limit your scope to the latest versions of a few popular clients (don't), and even when your linters catch all the edge cases (they won't), you still makes mistakes.

Work with your QA department to determine which screen readers you can test on. There's no replacement for testing!

## What ARIA attributes?
You can find a pretty comprehensive list at https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

There are a lot, but you should know about the role attribute, which labels interactive elements, including tabs, search, form, and grid; and state attributes including aria-live, aria-expanded, and aria-hidden (which differs from the native hidden attribute).