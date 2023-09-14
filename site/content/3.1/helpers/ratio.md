---
layout: docs
title: Ratio
group: helpers
toc: true
keywords: helpers, ratios
---

<p class="fs-4 ms-0 mb-4 page-description">
  Use generated pseudo elements to make an element maintain the aspect ratio of your choosing. Perfect for 
  responsively handling video or slideshow embeds based on the width of the parent.
</p>

## About

Use the ratio helper to manage the aspect ratios of external content like `<iframe>`s, `<embed>`s, `<video>`s, 
and `<object>`s. These helpers also can be used on any standard HTML child element (e.g., a `<div>` or `<img>`). 
Styles are applied from the parent `.ratio` class directly to the child.

Aspect ratios are declared in a Sass map and included in each class via CSS variable, which also allows 
[custom aspect ratios](#custom-ratios).

## Example

Wrap any embed, like an `<iframe>`, in a parent element with `.ratio` and an aspect ratio class. The immediate 
child element is automatically sized thanks to our universal selector `.ratio > *`.

{{< example codeId="code1" >}}
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/5bPEr4CpIoE" title="YouTube video: Earth Our Only Home 4K UHD Environmental Short Film" allowfullscreen></iframe>
</div>
{{< /example >}}

## Aspect ratios

Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:

{{< example codeId="code2" class="gap-1">}}
<div class="ratio ratio-1x1 d-inline-block" style="width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">1x1</div>
</div>
<div class="ratio ratio-4x3 d-inline-block" style="width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">4x3</div>
</div>
<div class="ratio ratio-16x9 d-inline-block" style="width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">16x9</div>
</div>
<div class="ratio ratio-21x9 d-inline-block" style="width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">21x9</div>
</div>
{{< /example >}}

## Custom ratios

Each `.ratio-*` class includes a CSS custom property (or CSS variable) in the selector. You can override this CSS 
variable to create custom aspect ratios on the fly with some quick math on your part.

For example, to create a 2x1 aspect ratio, set `--bs-aspect-ratio: 50%` on the `.ratio`.

{{< example codeId="code3" >}}
<div class="ratio" style="--bs-aspect-ratio: 50%; width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">2x1</div>
</div>
{{< /example >}}

This CSS variable makes it easy to modify the aspect ratio across breakpoints. The following is 4x3 to start, but 
changes to a custom 2x1 at the medium breakpoint.

```scss
.ratio-4x3 {
  @include media-breakpoint-up(md) {
    --bs-aspect-ratio: 50%; // 2x1
  }
}
```
<br>

{{< example codeId="code4" >}}
<div class="ratio ratio-4x3" style="width: 10rem;">
  <div class="border d-flex justify-content-center align-items-center">4x3, then 2x1</div>
</div>
{{< /example >}}


## Sass maps

Within `_variables.scss`, you can change the aspect ratios you want to use. Here's our 
default `$ratio-aspect-ratios` map. Modify the map as you like and recompile your Sass to put them to use.

{{< scss-docs name="aspect-ratios" file="scss/_variables.scss" >}}
