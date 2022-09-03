---
layout: docs
title: Browsers and Devices
group: getting-started
toc: true
keywords: getting-started, browsers-and-devices
---

## Supported browsers
Material Style supports the **latest, stable releases** of all major browsers and platforms.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly 
or via the platform’s web view API, are not explicitly supported. However, Material Style should 
(in most cases) display and function correctly in these browsers as well. More specific support 
information is provided below.

You can find our supported range of browsers and their versions in our 
<a class="link-pink" href="https://github.com/materialstyle/materialstyle/blob/main/.browserslistrc">.browserslistrc</a> file:

```text
# https://github.com/browserslist/browserslist#readme

>= 0.5%
last 2 major versions
not dead
Chrome >= 60
Firefox >= 60
Firefox ESR
iOS >= 12
Safari >= 12
not Explorer <= 11
```

<br>

We use 
<a class="link-pink" href="https://github.com/postcss/autoprefixer">Autoprefixer</a> to handle 
intended browser support via CSS prefixes, which uses 
<a class="link-pink" href="https://github.com/browserslist/browserslist">Browserslist</a> to 
manage these browser versions. Consult their documentation for how to integrate these tools 
into your projects.

<br>

### Mobile devices

Generally speaking, Material Style supports the latest versions of each major platform's default 
browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, 
UC Browser Mini, Amazon Silk) are not supported.
{{< bs-table "table table-bordered" >}}
| | Chrome | Firefox | Safari | Android Browser &amp; WebView |
| --- | --- | --- | --- | --- |
| **Android** | Supported | Supported | <span class="text-muted">&mdash;</span> | v6.0+ |
| **Windows** | Supported | Supported | Supported | <span class="text-muted">&mdash;</span> |
{{< /bs-table >}}

<br>

### Desktop browsers

Similarly, the latest versions of most desktop browsers are supported.

{{< bs-table "table table-bordered" >}}
| | Chrome | Firefox | Microsoft Edge | Opera | Safari |
| --- | --- | --- | --- | --- | --- |
| **Mac** | Supported | Supported | Supported | Supported | Supported |
| **Windows** | Supported | Supported | Supported | Supported | <span class="text-muted">&mdash;</span> |
{{< /bs-table >}}

For Firefox, in addition to the latest normal stable release, we also support the latest 
<a class="link-pink" href="https://www.mozilla.org/en-US/firefox/enterprise/">Extended Support Release (ESR)</a>
version of Firefox.

Unofficially, Material Style should look and behave well enough in Chromium and Chrome for Linux, and 
Firefox for Linux, though they are not officially supported.

<br>

## Internet Explorer

Internet Explorer is not supported.

<br>

## Modals and dropdowns on mobile

<br>

### Overflow and scrolling

Support for `overflow: hidden;` on the `<body>` element is quite limited in iOS and Android. 
To that end, when you scroll past the top or bottom of a modal in either of those devices' 
browsers, the `<body>` content will begin to scroll. 
See <a class="link-pink" href="https://bugs.chromium.org/p/chromium/issues/detail?id=175502">Chrome bug #175502</a>
(fixed in Chrome v40) and 
<a class="link-pink" href="https://bugs.webkit.org/show_bug.cgi?id=153852">WebKit bug #153852</a>.

<br>

### iOS text fields and scrolling

As of iOS 9.2, while a modal is open, if the initial touch of a scroll gesture is within the 
boundary of a textual `<input>` or a `<textarea>`, the `<body>` content underneath the modal 
will be scrolled instead of the modal itself. 
See <a class="link-pink" href="https://bugs.webkit.org/show_bug.cgi?id=153856">WebKit bug #153856</a>.

<br>

### Navbar Dropdowns

The `.dropdown-backdrop` element isn't used on iOS in the nav because of the complexity of 
z-indexing. Thus, to close dropdowns in navbars, you must directly click the dropdown element 
(or <a class="link-pink" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile">any other element which will fire a click event in iOS</a>).

<br>

## Browser zooming

Page zooming inevitably presents rendering artifacts in some components, both in Material Style and 
the rest of the web. Depending on the issue, we may be able to fix it 
(search first and then open an issue if need be). However, we tend to ignore these as they 
often have no direct solution other than hacky workarounds.

<br>

## Validators

In order to provide the best possible experience to old and buggy browsers, Material Style uses 
<a class="link-pink" href="http://browserhacks.com/">CSS browser hacks</a>
in several places to target special CSS to certain browser versions in order to work around bugs 
in the browsers themselves. These hacks understandably cause CSS validators to complain that 
they are invalid. In a couple places, we also use bleeding-edge CSS features that aren't yet 
fully standardized, but these are used purely for progressive enhancement.

These validation warnings don't matter in practice since the non-hacky portion of our CSS does 
fully validate and the hacky portions don't interfere with the proper functioning of the 
non-hacky portion, hence why we deliberately ignore these particular warnings.

Our HTML docs likewise have some trivial and inconsequential HTML validation warnings due to 
our inclusion of a workaround for 
<a class="link-pink" href="https://bugzilla.mozilla.org/show_bug.cgi?id=654072">a certain Firefox bug</a>.
