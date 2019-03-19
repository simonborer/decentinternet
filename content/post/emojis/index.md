---
date: "2019-02-28"
tags: ["accessibility", "ARIA", "emojis"]
title: "Accessibile Emojis"
featuredImage:
  img: images/emoji.jpg
  alt: 'Various emoji'
atf: "Billions of emojis are used <strong>every single day</strong>. Today we'll look at how you can make them accessible to everyone <span role='img' aria-label='partying face'>🥳</span>"
---
I would wager that the most common type of image in the world today, in terms of sheer volume, are the beloved emoji. People use {{< extlink "https://blog.emojipedia.org/5-billion-emojis-sent-daily-on-messenger/" >}}literally billions of them{{</ extlink >}} everyday.

Full assistive technology default support for emojis is {{< extlink "https://microsoftaccessibility.uservoice.com/forums/307429-microsoft-accessibility-feedback/suggestions/33735976-support-emojis-with-screen-reader" green >}}not there yet{{</ extlink >}}, but with the help of <a href="{{ ref /intro-to-aria }}">ARIA</a>, we can make them accessible! <span role="img" aria-label="beaming face with smiling eyes">😁</span>

<strong>1.</strong> Take your unicode emoji…

<pre><code class="language-html">😐</code></pre>

<strong>2.</strong> … wrap it in a &lt;span&gt; tag…

<pre><code class="language-html">&lt;span&gt;🙂&lt;/span&gt;</code></pre>

<strong>3.</strong> … give it a <code>role</code> attribute, with a property of <code>img</code> (so that screen readers know that it's an image, and not just a character it can't make sense of)…

<pre><code class="language-html">&lt;span role='img'&gt;🙃&lt;/span&gt;</code></pre>

<strong>4.</strong> … give it an <code>aria-label</code> attribute (so that screen readers have something to read as the description)…

<pre><code class="language-html">&lt;span role='img' aria-label='not sure what, that`s the next step'&gt;😊&lt;/span&gt;</code></pre>

<strong>5.</strong> … find the emoji in the {{< extlink "https://unicode.org/emoji/charts/full-emoji-list.html" >}}Unicode emoji listings{{</ extlink >}} and use the CLDR Short Name as the label.

<pre><code class="language-html">&lt;span role='img' aria-label='smiling face with halo'&gt;😇&lt;/span&gt;</code></pre>

Now, I know what you're thinking at this point: "There's got to be an API or something so that I can pull the CLDR Short Names and automate the process, right?"

And to that I say, isn't it cool when you find out that the world needs your help?

And also, please let me know if you're working on this - I'd love to see it done!