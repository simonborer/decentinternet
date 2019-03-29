---
date: "2019-03-29"
tags: ["accessibility", "code", "iOS"]
title: "iOS 12.2 Tracks Disability"
atf: "iOS 12.2 has quietly introduced a default setting that tracks usage of assistive technology. This is a terrible choice for accessibility."
featuredImage:
  img: images/ugh.jpg
  alt: 'Pouring hot coffee into a mug that says `ugh`'
---

{{< extlink "https://www.applevis.com/blog/apple-braille-ios-news/apple-releases-ios-122-bringing-apple-news-canada-and-four-new-animoji" >}}AppleVis reports{{</ extlink >}} that Apple's iOS 12.2 update has introduced a default setting that exposes Assistive Technology to the browser, in order to:

<blockquote>... allow websites to customize their behaviour for assistive technologies, like VoiceOver. Enabling Accessibility Events may reveal whether an assistive technology is active on your iPhone.</blockquote>

Note that it is enabled by default. Now in this day and age, everyone has varying opinions about what their comfort level is with their own privacy. The only aggregate data I have about {{< extlink "https://webaim.org/projects/screenreadersurvey5/#srdetection" >}}how people feel about screen reader detection{{</ extlink >}} is half a decade old, and WebAIM only asked the question once, so there's no data from other years to compare it to. And if this were an opt-in feature, rather than a default (i.e. unlikely to be changed by {{< extlink "https://archive.uie.com/brainsparks/2011/09/14/do-users-change-their-settings/" >}}95% of people{{</ extlink >}} - if they're even aware of it), then I wouldn't want to speak out against people making an informed decision, despite the fact that we live in a world where {{< extlink "http://abcnewsradioonline.com/business-news/federal-government-charges-facebook-with-housing-discriminat.html" >}}Facebook is being sued for allegedly discriminating against disabled users{{</ extlink >}}.

{{< figure
img="images/ugh.jpg" 
caption="Chugging coffee is the new spilling tea"
alt="Pouring coffee into a mug that says `ugh`" 
command="Resize" 
href="https://unsplash.com/photos/aZ9X3L1Va2Y"
title="Photo by Nathan Dumlao on Unsplash"
options="700x" >}}

I don't want to speak from a user's experience on this one, but speaking as a developer <strong>why would we make this mistake again?</strong> I've lived through the days of browser sniffing and device detection, and <strong>those were bad times</strong>. We can give everyone a good experience on the web by making good websites, by embracing the open standards that make the internet a place where we build things that can get used by other people in ways we can't foresee and that is <strong>delightful</strong>.

If we go back to tiered experiences, we return to the days of prioritizing one group of users over another, and that is a grim thought. 