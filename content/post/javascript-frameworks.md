---
date: "2099-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Accessibility in Front-End JS Frameworks"
---

"Today we're going to look at <a href='https://stateofjs.com/2017/front-end/results' target='_blank'>the big three</a>.", "Let's keep in mind that >4% of users in the WebAIM survey were using IE 6, 7 or 8.", "<table><caption>Browser support of javascript frameworks</caption><tbody><tr><td>Vue</td><td>ES5-compliant browsers - IE9+</td></tr><tr><td>React</td><td>ES5-compliant browsers - IE9 and IE10 require polyfills</td></tr><tr><td>Angular</td><td>Modern browsers. Safari 7 & 8, IE9, 10 & 11, Android 4.1+ require polyfills.</td></tr></tbody></table>"

## Progressive Enhancement

"Within the last year, we've seen companies like Airbnb and Groupon tell Firefox and Safari users that they are 'optimized for Chrome' when their sites failed.", "What if your website, to borrow a phrase, just worked?", "Consider delivering your content in plain HTML, and then 'mustard-cutting' to deliver your CSS and Javascript."

## IE Refuses to die

"<a href='https://netmarketshare.com/browser-market-share.aspx' target='_blank'>Internet Explorer market share is >12%.</a> That's more than Firefox. That's more than Edge, Safari and Opera combined.", "Internet Explorer fails to support <em>hundreds</em> of features that Chrome has implemented.", "Progressive enhancement is how we build for an internet that is increasingly fractured.", "Polyfills, autoprefixer, caniuse, modernizr; these are great things. Consider, though, simply delivering content that any client can access as a Minimum Viable Product.", "A List Apart has <a href='http://alistapart.com/article/the-slow-death-of-internet-explorer-and-future-of-progressive-enhancement' target='_blank'>a wonderful article</a> with some recommendations on how to mustard cut for both CSS and Javascript."

## What is your framework for?

"Is it as a static site generator? Cool. Render on the server. Serving static HTML is waaaay faster."

Let's assume...
Let's assume you've got your fallbacks and polyfills in place. Let's assume SSR isn't an option. How do we make Vue, React and Angular accessible?

## Accessibility in Angular
AngularJS 1.7 shipped with a module called ngAria which created hooks for some aria roles. Angular 2+ seems to not have anything similar. You're on your own!

## Accessibility in React
React seems to be a lot more on top of accessibility. They even bother to mention it in their docs!

Aria attributes are supported in JSX (but note that they're lowercased instead of camelcased like most other attributes).

## A few gotchas with React
JSX has a tendency to break semantics though, especially with lists and tables, so get familiar with s and <> syntax.

The `for` attribute, used with labels, is written as `htmlFor` in JSX

## React A11Y

"<a href='https://github.com/reactjs/react-a11y' target='_blank'>react-a11y</a> is a promising looking tool for warning about potential accessibility issues in your React components."

## Vue.js

"Vue doesn't have any <a href='https://github.com/vuejs/vuejs.org/issues/974' target='_blank'>accessibility documentation... yet</a>.", "Emily Mears has written <a href='https://medium.com/@emilymears/getting-started-with-web-accessibility-in-vue-17e2c4ea0842' target='_blank'>a pretty great article</a> about accessibility in Vue. The main challenges are held in common with React - updating meta, handling focus and implementing aria.", "Vue is pretty great as a framework - it's easier to pick up and understand than other frameworks, it scales much more gracefully than React, and only updates the components that need re-rendering."

## Controlling focus in client-side frameworks

All three frameworks aggressively re-render the DOM - that's kind of the point.", "Be aware that changes to the URL, and rendering of the virtual DOM can wreak havoc on focus. Each framework has methods for mitigating this with programmatic focus control: <a href='https://simplyaccessible.com/article/react-a11y/' target='_blank'>refs in React</a>; <a href='https://www.npmjs.com/package/vue-focus' target='_blank'>vue-focus in Vue</a>; <a href='https://docs.angularjs.org/api/ng/directive/ngFocus' target='_blank'>ngFocus in Angular</a>. Make sure you're familiar with the appropriate technique.

