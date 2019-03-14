---
date: "2018-09-28"
tags: ["accessibility", "a11y", "code", "content", "HTML", "CSS", "Javascript", "semantics"]
title: "Where to start"
atf: "Accessibility is one of those things that is never 'done'. It's a principle. If accessibility (let alone digital accessibility) is brand new to you as a concept, first of all - congratulations on wanting to learn something new."

---

{{< figure
img="images/hbu.jpg" 
caption="The beginning of things, according to Hans Breinlinger"
alt="1958 Hans Breinlinger - Urknall" 
command="Resize" 
href="https://commons.wikimedia.org/wiki/File:1958_Hans_Breinlinger_-_Urknall.jpg"
title="Hans Breinlinger, CC BY-SA 3.0 de (https://creativecommons.org/licenses/by-sa/3.0/de/deed.en), via Wikimedia Commons"
options="700x" >}}

## What is it

For a product or service to be accessible, it needs to be something that isn't constrained by <a href="https://99percentinvisible.org/episode/on-average/" target="_blank">the myth of the average person</a>. We make assumptions about people and how they'll interact with the things we make. Humans being a wonderfully diverse (and delightfully weird) bunch, those assumptions are going to be wrong a good chunk of the time. 

If you're a developer, you'll recognize this fallacy as a cousin to <a class="blue" target="_blank" href='https://hackernoon.com/it-works-on-my-machine-f7a1e3d90c63'>"it works on my machine"</a>.

The idea that some people are "disabled" and others are "normal" isn't just insulting to people who struggle with particular health issues - it's also just plain wrong (and a terribly flawed basis for design). Everyone can acknowledge that ability is a spectrum, and all people have strengths and weaknesses (after all, <a class="green" target="_blank" href="https://eyecarebusiness.ca/embracing-the-future-of-our-industry/">68% of Canadians wear corrective glasses</a> - myself included). Once we accept that there is no such thing as a "disabled person", as we are all able to varying degrees in varying ways, there are only "disabilities".

{{< figure
img="images/automobile.gif" 
caption="Everyone needs to drive a vehicle, even the very tall."
alt="A very large man gets out of a small car and teaches Nelson Muntz a lesson" 
href="https://frinkiac.com/video/S07E21/4AHlAxUjI3zhFI3w8HNEFg1sRCY=.gif"
command="Original"
options="700x"
 >}}

But let's take this one step further - if ability is a spectrum, then the lines we draw between "able" and "disabled" are invented. They are invented not by some governing body, but by the expectations that are set by the built world. People cannot fly, and so we do not build buildings that have entrances on the fifth floor opening onto the street. People can walk up steps, and so we build entrances with stairs. Except - some people can't. And so the person who decided that this building should have stairs also decided that some people would be excluded from this building. Why stairs and not a ramp? A ramp would've excluded a different, and likely smaller, subset of people. It was the person who chose to build stairs who decided (probably without knowing it) where the line between "able" and "disabled" would be drawn. Disability, therefore, doesn't reside within people. Disability is located in the task and the object that sets the task. 

So we can see, and this, I think, is a tremendously important idea: <strong>disability is made</strong>. If you make, then you are responsible for enabling, or disabling, people.

To make something accessible is to do your due diligence towards including everyone you reasonably can.


## How do I do it?

The first step to creating an accessible product or service is to recognize how you may create a barrier for someone. When dealing with websites (as is our focus here), it's tempting to think strictly in terms of visual impairments, since the web is primarily a visual medium. Of course, we need to also make concessions for motor impairments for user interaction. But then we need to think about cases where we serve content that isn't just visual - if we embed audio (or videos with audio content), then hearing is a concern, and if things move quickly or use visual metaphors, then we need to think about cognitive impairments and cultural context. What if we build pages that are so large that they time out on slow connections? That could create barriers for people in areas underserved by mobile carriers. The list goes on.

