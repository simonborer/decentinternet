---
date: "2014-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Mobile & Touchscreen Accessibility"
---

Mobile accessibility
The WCAG has [(multiple documents)](https://www.w3.org/TR/IMPLEMENTING-UAAG20/mobile) on [(how accessibility standards)](https://www.w3.org/TR/mobile-accessibility-mapping/) translate to mobile.

It's mostly along the lines of 'don't try to cram your whole desktop site onto mobile', and 'just make sure that you're doing what you do on desktop', but with a few extra cautions.

Take special pains to test resizing up to 200%.
You definitely still have to have keyboard-only controls
Touch targets are at least 9mm x 9mm, with adequate space between them (without magnification)
Use mouseup or touchend events so that users can change their minds
Gestures should be kept simple, and have alternatives
Support either orientation
Put important elements above the fold
Provide easily discoverable instructions
Set the keyboard to the type of data entry required
No scrolljacking
Show focus