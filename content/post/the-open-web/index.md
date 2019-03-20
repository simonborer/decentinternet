---
date: "2018-10-11"
tags: ["accessibility", "code", "semantics", "specifications", "vintage"]
title: "The open web"
atf: "We work on an open platform. The beautiful thing about the internet is that it is a (nearly) global public space built on open access (e.g. Net Neutrality), open standards and open specifications. This comes with the responsibility, that you create services that are meant to be consumed by clients you aren't familiar with, some that haven't even been invented yet."
featuredImage:
  img: images/macplus.jpg
  alt: 'Mac Plus'
---

## The internet is open

We work on an open platform. The beautiful thing about the internet is that it is a (nearly) global public space built on open access (e.g. Net Neutrality), open standards and open specifications. This comes with the responsibility, that you create services that are meant to be consumed by clients you aren't familiar with, some that haven't even been invented yet.

Working on the internet means working with open specifications (i.e. HTML, CSS, ARIA, etc.) that don't come from a single application, or even company. This means that applications you don't know about can create functionality for people, now or in the future, in ways that you don't understand and can't predict, <em>and your stuff will work</em>.

This is true of browsers, operating systems, and assistive technologies like screen readers.

{{< figure
img="images/macplus.jpg" 
caption="Worlds collide - a 1986 Mac Plus connecting to the internet"
alt="A 1986 Mac Plus connecting to the internet" 
command="Resize" 
href="https://www.keacher.com/1216/how-i-introduced-a-27-year-old-computer-to-the-web/"
title="Photo (and project) by Jeff Keacher"
options="700x" >}}

Think of how cool this is. No matter what operating system or device you use, you can access the internet. You can connect a machine {{< extlink "https://www.youtube.com/watch?v=5UBRUyofiiU" >}}from 1986{{</ extlink >}} to the modern web.

This all started with the {{< extlink "https://en.wikipedia.org/wiki/Browser_wars" >}}Browser wars{{</ extlink >}}. For a dramatic re-enactment, watch the fourth season of the best TV show of all time, Halt & Catch Fire. Different web browsers were implementing their own versions of HTML and CSS, meaning that to access certain websites, you had to use a specific browser. If you've been around for awhile, you might remember seeing "best viewed in Internet Explorer" badges. The Browser Wars were that, only taken to the extreme. This was resolved by a kind of {{< extlink "https://en.wikipedia.org/wiki/Web_interoperability" >}}truce{{</ extlink >}}, although we do see 'border skirmishes' {{< extlink "https://www.theverge.com/2018/1/4/16805216/google-chrome-only-sites-internet-explorer-6-web-standards" >}}cropping up more and more{{</ extlink >}}.

{{< figure
img="images/comet.jpg" 
caption="No, really, H&CF is the best TV show - they really made real versions of all their vintage websites."
alt="The fictional 'Comet' website (which they made a real website out of) from the TV show Halt & Catch Fire" 
command="Resize" 
href="https://kottke.org/17/09/real-websites-for-halt-and-catch-fires-rover-and-comet"
title="via Kottke.org and AMC"
options="700x" >}}

You will work with (and by with, I mean for) people who do not understand the difference between accessing a pdf and opening a webpage. You may need to know how to stand your ground in defense of testing on multiple browsers, accessible technology, and, if browser-specific features are demanded, using a strategy of progressive enhancement and polyfills rather than leaving your diverse user base in the lurch.

Where will your product be when those experimental browser features are deprecated? How can you future-proof without adhering to the open specs?

Think about this: Firefox gets most of their money from… {{< extlink "https://en.wikipedia.org/wiki/Mozilla_Foundation#Financing" >}}Google{{</ extlink >}}. Wait, what? Why?

In part, it's because being the default search engine in one of the world's most popular browsers is pretty lucrative. In addition to that, though, Google's business model depends on the open web. It has made a multi-billion dollar bet that the best place to be is not in a "walled garden", but as the concierge to the innovations afforded by a democratized space.

Google supporting a 'competing' browser means that competition is healthy, and the only way to predict the future is to use code that is based on the consensus afforded by open specifications, not by locking some of your users into a closed eco-system, and locking the rest out.