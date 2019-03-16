---
date: "2099-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "tabindex"]
title: "The Truth About Tabindex"
---

tabindex is an attribute that specifies focusability. Focus is usually stepped through with the tab key, hence the name.

<code class="language-html">tabindex="-1"</code> is focusable, but not sequentially. As in, you can't tab to it.

<code class="language-html">tabindex="0"</code> means that the element is focusable in the normal tab sequence.

<code class="language-html">tabindex="1"</code>, or any other positive value, means that this element takes precedence over any other element without a declared tabindex. If you are using this, that's a bad sign.

Remember not to confuse the visual order with the DOM order :)

Declaring a tabindex value can affect scrolling behaviour on child elements. For examples, see https://jsfiddle.net/jainakshay/0b2q4Lgv/