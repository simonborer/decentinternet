---
date: "2014-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "A deep dive into ARIA"
---

WAI-ARIA deep dive
As we covered earlier, WAI-ARIA, a.k.a. ARIA, is a specification from the W3C that uses element attributes to supplement existing semantics

to provide more information about your markup, and
provide information about content that updates without a page refresh.
This is especially relevant when you are using a front-end javascript framework (Angular, React, Vue, et al.).

Remember that the spec tells us that we should use native semantics when they are available.

If it's a button, use a < button >.

ARIA roles
The role attribute provides information about an element's purpose.

The role attribute identifies the element to the screenreader, but it does not recreate the native functionality. That's on you.

role="button"
Let's say, for whatever reason, you need to make a button out of something that's not < button >, < input type='button' />, < input type='submit' />, < input type='reset' /> or < input type='image' />.

role='button' identifies any element as a button to a screenreader. Use this in conjunction with tabindex='0' - the role itself does not make the element focusable.

Remember, too, that a native HTML button will fire an onclick event when space or enter are pressed - so you're also responsible for recreating that native functionality.

More roles! - widgets
checkbox

dialog (this can be a modal, or not)

link

log (i.e. a chat log)

marquee (like a log, but not vital or linear, i.e. a carousel or stock ticker)

progressbar

radio

scrollbar

slider (i.e. a range slider or volume control)

spinbutton (a value selection input with up and down arrows)

status (a status update message, i.e. `your changes have been saved`

tablist > tab + tabpanel

grid > row > rowheader + cell + columnheader

menubar > menu > menuitem + menuitemcheckbox

textbox

timer

tooltip

tree/treegrid > treeitem

switch identical to checkbox, but strictly for values of on or off

listbox > option

radiogroup > radio

Even more roles! - document structure
article

definition

directory (i.e. table of contents)

document

group (of UI elements not in a perceivable page section)

heading

img (useful in case of background images)

list > listitem

math (there is an entire markup language for mathy stuff! it's called MathML and can be called into other markup, like HTML)

note

presentation - similar in function to aria-hidden; this tells the screenreader that the element is decorative, but support for it on natively focusable elements is interesting.

region

separator

toolbar

And finally... more roles! - landmarks
application - for when your HTML document behaves completely different from a standard html document; probably don't use this. It turns off all standard keyboard shortcuts in most screenreaders.

banner - analogous to < header >

complementary - like < aside >

contentinfo - like < footer >

form

main

navigation

search

Widget attributes
role="combobox|textbox" aria-autocomplete="none|inline|list|both"

role="checkbox|switch|..." aria-checked="true|false|mixed"

aria-current="page|step|date|location|time|true|false"

aria-disabled="true|false"

aria-expanded="true|false"

aria-haspopup="true|false|menu|listbox|tree|grid|dialog"

aria-hidden="true|false|undefined"

aria-invalid="true|false|grammar|spelling"

aria-label={string} only for invisible text

role="grid|heading|listitem|row|tablist" aria-level={integer}

role="textbox" aria-multiline="true|false"

role="grid|listbox|tablist|tree" aria-multiselectable="true|false"

role="scrollbar|select|separator|slider|tablist|toolbar" aria-orientation="horizontal|vertical|undefined"

role="button" aria-pressed="true|false|mixed"

role=checkbox|combobox|grid|gridcell|listbox|radiogroup|slider|spinbutton|textbox" aria-readonly="true|false"

role="combobox|gridcell|listbox|radiogroup|spinbutton|textbox|tree" aria-required="true|false"

role="gridcell|option|row|tab" aria-selected="true|false|undefined"

role="columnheader|rowheader" aria-sort="ascending|descending|none|other"

role="range|scrollbar|separator|slider|spinbutton" aria-valuemax={number} aria-valuemin={number} aria-valuenow={number}

role="range|separator" aria-valuetext={string}

Live region attributes
aria-live="polite|assertive|off"

aria-live="polite" aria-atomic="true|false"

aria-live="polite" aria-relevant="additions|text|removals|all"

aria-live="assertive" aria-busy="true|false"

Implicit live region attributes
Several roles have implicit live region values:

role="alert" has an implicit aria-live="assertive"

role="status" and role="log" have an implicit aria-live="polite"

role="timer" and role="marquee" have an implicit aria-live="off"

These can be overridden by explicitly declaring aria-live values.

Relationship attributes
role="application|composite|group|textbox" aria-activedescendant={id}

aria-controls={id}

aria-describedby={id} similar to aria-labelledby, but verbose instead of concise

aria-labelledby={id}

aria-flowto={id} gives the user the option to move to an element, overriding the source order

aria-owns={id} Defines a parent-child relationship when one isn't semantically apparent. To understand how this is different from aria-controls, imagine a carousel. The arrows on the left and right would have aria-controls attributes. The dots at the bottom that correlate to individual slides would have aria-owns attributes.

role="article|listitem|menuitem|option|radio|tab" aria-setsize={integer} aria-posinset={integer} Only required when not all elements from the set are included in the DOM.