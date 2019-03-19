---
date: "2018-10-01"
tags: ["accessibility", "visibility", "ARIA", "Bootstrap", "Foundation", "HTML5 Boilerplate", "cheatsheet", "Bulma"]
title: "Accessibility and Visibility"
atf: "There are lots of options in front-end code for controlling visibility, including native attributes, CSS property values, and helper classes from popular front-end libraries like Bootstrap, Foundation and HTML Boilerplate. It can be tough to remember which option shows or hides things for whom. Here's a little cheat sheet and demo to help!"
---

There are times when you need to pick and choose when you're going to hide things visually, remove it from the DOM, hide things from screen readers, or show things (like text alternatives, or keyboard-focussed content) only to those using assistive technology. Let's take a look at the different techniques that are available to us.

## Visibility Cheat Sheet

<table class="results-table">
	<tr>
		<th></th>
		<th scope="col">Hidden from screenreaders</th>
		<th scope="col">Removed from the DOM</th>
		<th scope="col">Invisible, but still occupies layout space</th>
	</tr>
	<tr>
		<th scope="col"><code>aria-hidden="true"</code></th>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--false">☒</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
		<tr>
		<th scope="col">Native HTML <code>hidden</code> attribute</th>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
	<tr>
		<th scope="col">CSS <code>display: none;</code></th>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
	<tr>
		<th scope="col">CSS <code>visibility: hidden;</code></th>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--true">☑</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
	<tr>
		<th scope="col">CSS <code>font-size:0;</code>, for inline text & elements.</th>
		<td class="results-table__indicator--false">☒</td>
		<td class="results-table__indicator--false">☒</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
	<tr>
		<th scope="col">Techniques for visually hiding block-level elements</th>
		<td class="results-table__indicator--false">☒</td>
		<td class="results-table__indicator--false">☒</td>
		<td class="results-table__indicator--false">☒</td>
	</tr>
</table>

Wondering exactly <em>which</em> assistive technologies support <em>which</em> properties? While there's unfortunately no service as robust as {{< extlink "https://caniuse.com" >}}caniuse.com{{</ extlink >}} for screenreaders, {{< extlink "https://twitter.com/stevefaulkner" >}}Steve Faulkner{{</ extlink >}} is doing really incredible work over at {{< extlink "https://www.html5accessibility.com/">}}html5accessibility.com{{</ extlink >}} in documenting exactly that. Check out his {{< extlink "https://github.com/stevefaulkner/HTML5accessibility/blob/gh-pages/tests/hidden-2016.html" >}}tests for visibility techniques{{</ extlink >}}.

## Techniques from Popular Front-end Libraries

Let's take a look at the different approaches of popular front-end libraries towards

<ul>
	<li>showing content only to screen readers, and</li>
	<li>showing content only when focused via the keyboard (a.k.a 'tabbing').</li>
</ul>

Note that I've taken some small liberties with the property order, strictly for the purposes of readability in comparing the different libraries.

### WebAIM

Before we look at the libraries' approaches, for context let's look at WebAIM's {{< extlink "https://webaim.org/techniques/css/invisiblecontent/" >}}recommended technique{{</ extlink >}} for showing content only to screen readers or keyboard-navigators.

<pre><code class="language-scss">.webaim {
  /**  
  	Declaring fixed dimensions avoids certain 
  	opinionated browsers removing your content 
  	from the DOM. 
  */ 
  height: 1px;
  width: 1px;
  overflow: hidden;
  /**
	Here we position the element well offscreen
	and remove it from the document flow.
  */
  left: -10000px;
  position: absolute;
  top: auto;
  &:focus {
	/**
	  On the focus event, we return the element
	  to the document flow and let the content
	  set the dimensions. Note that a static position
	  means that the 'top' property has no effect.
	 */
    height: auto;
    position: static;
    width: auto;
  }
}</code></pre>

### Foundation

I'm a big fan of {{< extlink "https://foundation.zurb.com/sites/docs/accessibility.html" >}}Foundation{{</ extlink >}}. Sure, it's light-weight, fully featured and easy to use. But it also puts accessibility first in every component - not as an afterthought. 

<pre><code class="language-scss">.foundation.show-for-sr,
.foundation.show-on-focus {
  border: 0;
  clip: rect(0, 0, 0, 0);
  //   Unique to Foundation
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  //   !important declaration unique to Foundation
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}

.foundation.show-on-focus:active,
.foundation.show-on-focus:focus {
  clip: auto;
  //   Unique to Foundation
  clip-path: none;
  height: auto;
  overflow: visible;
  //   !important declaration unique to Foundation
  position: static !important;
  white-space: normal;
  width: auto;
}</code></pre>


### Bootstrap

{{< extlink "https://getbootstrap.com/" >}}Bootstrap{{</ extlink >}} continues to be a juggernaut in front-end component libraries. Accessibility has improved starting with v4, but it continues to play catch-up with <Foundation class=""></Foundation> 

<pre><code class="language-scss">.bootstrap.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.bootstrap.sr-only-focusable:active,
.bootstrap.sr-only-focusable:focus {
  clip: auto;
  height: auto;
  overflow: visible;
  position: static;
  white-space: normal;
  width: auto;
}</code></pre>


### HTML5 Boilerplate

HTML5 Boilerplate has a little 'gotcha' here, where you need <em>both</em> <code>.visuallyhidden</code> and <code>.focusable</code> classes on an element in order to toggle with keyboard focus.

<pre><code class="language-scss">.html5-boilerplate.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  //   Unique to Boilerplate
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.html5-boilerplate.visuallyhidden.focusable:active,
.html5-boilerplate.visuallyhidden.focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  //   Unique to Boilerplate
  white-space: inherit;
  width: auto;
}</code></pre>

### Bulma

Aside from a few haphazard aria attributes, Bulma has almost no accounting for accessibility. Be prepared to do all your accessibility from scratch if you use Bulma. 

## Techniques in action

Here's a Pen that shows the behaviour of all the different properties and techniques we've discussed here!

<p class="codepen" data-height="1000" data-theme-id="dark" data-default-tab="html,result" data-user="simonborer" data-slug-hash="xjBoWv" data-editable="false" style="height: 1000px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Hiding Techniques">
  <span>See the Pen <a href="https://codepen.io/simonborer/pen/xjBoWv/">
  Hiding Techniques</a> by Simon Borer (<a href="https://codepen.io/simonborer">@simonborer</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>