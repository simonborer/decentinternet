---
date: "2099-09-28"
tags: ["accessibility", "a11y", "AODA", "WAI-ARIA", "ARIA"]
title: "Glossary"
atf: "As with so many things in the digital world, accessibility is rife with acronyms, appropriated terms and buzzwords. Here we clear up a few things."
---

## accessibility (the idea)

Lowercase 'a'. Accessibility as a broad term means recognizing what kind of barriers people might have to using your product or service and doing what you can to remove those barriers where possible, or, if it's not possible, providing equivalent alternatives.

I want to emphasize that accessibility is not something that you should expect to 'finish'. It's not that kind of thing. It is a way of thinking, it is a set of questions you should always be asking. There are 7 billion people out there, it is not possible to make something perfectly accessible. That's not your responsibility. What is your responsibility, I think, is to always look for opportunities to make things better, to be humble and recognize that people might have barriers that you've never thought of, and to be open to criticism and willing to take that as an opportunity to improve. That's not an easy thing to do - to accept that the things you make will always be imperfect, and that you won't always have the resources to do right by everyone. But try your best, and, odds are, this means you are a good person.


## Accessibility (the law)
...with a capital 'A' takes all of the guesswork out of it. Capital A accessibility means complying with the legal guidelines set out by the goverment for making your product or service usable by people with broadly defined physical challenges. So, we often talk about visual impairments, because we're working in a primarily visual medium. Hopefully your website doesn't have a lot of audio cues, but it's common to work with video that has an audio component, so we also talk about people with hearing issues. And, of course, our products and services generally have some kind of physical interface, so we talk about mobility issues. These are the big three categories of barrier that are addressed by capital 'A' accessibility.

## AODA

These guidelines are codified in the AODA (Access for Ontarians with Disabilities Act) specs.

Link: https://www.ontario.ca/laws/regulation/110191#BK14

> (4) Designated public sector organizations and large organizations for their internet websites shall meet the requirements of this section 

> 2. By January 1, 2021, all internet websites and web content must conform with WCAG 2.0 Level AA, other than, 

> i. success criteria 1.2.4 Captions (Live), and 

> ii. success criteria 1.2.5 Audio Descriptions (Pre-recorded). O. Reg. 191/11, s. 14 (4).

## WCAG

Which brings us to WCAG - Web Content Accessibility Guidelines. These are the recommendations written by the World Wide Web Consortium, which is the organization that creates standards around things like HTML and CSS. The vast majority of capital A accessibility regulations (like the AODA) defer to these specifications and the different tiers (levels).

## WAI-ARIA

...is also produced by the W3C. It is a set of specifications for techniques to make dynamic content accessible (which helps it <a href="https://www.w3.org/TR/WCAG20-TECHS/aria" target="_blank">comply with the WCAG</a>). It's pretty simple - it's essentially just a specification for a set of attributes in your markup language. The purpose is to fill in a visibility gap created when a scripting language turns static markup into dynamic content.


