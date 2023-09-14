---
layout: docs
title: Vertical rule
group: helpers
toc: true
keywords: helpers, vertical rule
---

<p class="fs-4 ms-0 mb-4 page-description">
  Use the custom vertical rule helper to create vertical dividers like the <code>&lt;hr&gt;</code> element.
</p>

## How it works

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts. 
They're styled just like `<hr>` elements:

- They're `1px` wide
- They have `min-height` of `1em`
- Their color is set via `currentColor` and `opacity`

Customize them with additional styles as needed.

## Example

{{< example codeId="code1" >}}
<div class="vr"></div>
{{< /example >}}

Vertical rules scale their height in flex layouts:

{{< example codeId="code2" >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{< /example >}}

## With stacks

They can also be used in [stacks]({{< docsref "/helpers/stacks" >}}):

{{< example codeId="code3" >}}
<div class="hstack gap-3">
  <div class="p-2 text-bg-tertiary">First item</div>
  <div class="p-2 ms-auto text-bg-tertiary">Second item</div>
  <div class="vr"></div>
  <div class="p-2 text-bg-tertiary">Third item</div>
</div>
{{< /example >}}

## CSS

### Sass variables

Customize the vertical rule Sass variable to change its width.

{{< scss-docs name="vr-variables" file="scss/_variables.scss" >}}