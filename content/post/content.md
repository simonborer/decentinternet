---
date: "2099-09-28"
tags: ["accessibility", "a11y", "code", "semantics", "ARIA", "WAI-ARIA", "DOM", "DOM API"]
title: "Creating Accessible Content"
---

## page titles
Page title should be unique and descriptive. If it's page 2 of 3, say so.

## headings
Headings should structure your document. Think of the way your information is structured - it's very rarely appropriate to have just an h1 and then p tags all the way down. Headings should provide meaning and context.

## alt text
Alternative text should be your best effort to convey all of the relevant information in the image - no more, no less. This gets tricky when you get into things like graphs. Think of how WebAIM approached it in our reading this week.

## transcripts and captions
Audio and video need transcriptions and/or captions. Keep an ear out for sounds that convey relevant information, and make sure they're included - not just the words.

## form labels, instructions and errors
Be very clear about what's expected of a user, and how errors should be resolved. A red asterisk appearing suddenly adjacent to an input isn't helpful to everyone.

## beware things that look like text
Be on the lookout for images with embedded text, or worse - OCR-resistant PDFs.

## ASCII
Think about what this sounds like: ¯\_(ツ)_/¯.

For the same reason, write "16 to 17 years old" instead of "16-17 years old".

## links
Via sitepoint

Don't say they're links - the screenreader tells you
Don't capitalize - screenreaders will read them out letter by letter
Don't make the link text the url
Keep links short - screenreaders won't skip them.
Identify link behaviour - i.e. downloads, new windows, anchor links
Don't embed link types identifications in your CSS
Don't abuse javascript to do link-ish things with elements that aren't links (anchors or area tags)
If an image is inside an anchor tag, it's alt text should refer to the link behaviour, as well as the image's information.
Empty or broken links are just mean.