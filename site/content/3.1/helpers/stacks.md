---
layout: docs
title: Stacks
group: helpers
toc: true
keywords: helpers, stacks
description: Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever.
---

## Vertical

Use `.vstack` to create vertical layouts. Stacked items are full-width by default. Use `.gap-*` utilities to add space between items.

{{< example codeId="code1" >}}
<div class="vstack gap-3">
  <div class="p-2 text-bg-success">First item</div>
  <div class="p-2 text-bg-success">Second item</div>
  <div class="p-2 text-bg-success">Third item</div>
</div>
{{< /example >}}

## Horizontal

Use `.hstack` for horizontal layouts. Stacked items are vertically centered by default and only take up their necessary width. Use `.gap-*` utilities to add space between items.

{{< example codeId="code2" >}}
<div class="hstack gap-3">
  <div class="p-2 text-bg-success">First item</div>
  <div class="p-2 text-bg-success">Second item</div>
  <div class="p-2 text-bg-success">Third item</div>
</div>
{{< /example >}}

Using horizontal margin utilities like `.ms-auto` as spacers:

{{< example codeId="code3" >}}
<div class="hstack gap-3">
  <div class="p-2 text-bg-success">First item</div>
  <div class="p-2 ms-auto text-bg-success">Second item</div>
  <div class="p-2 text-bg-success">Third item</div>
</div>
{{< /example >}}

And with [vertical rules]({{< docsref "/helpers/vertical-rule" >}}):

{{< example codeId="code4" >}}
<div class="hstack gap-3">
  <div class="p-2 text-bg-success">First item</div>
  <div class="p-2 ms-auto text-bg-success">Second item</div>
  <div class="vr"></div>
  <div class="p-2 text-bg-success">Third item</div>
</div>
{{< /example >}}

## Examples

Use `.vstack` to stack buttons and other elements:

{{< example codeId="code5" >}}
<div class="vstack gap-2 col-md-5 mx-auto">
  <button type="button" class="btn btn-success">Save changes</button>
  <button type="button" class="btn btn-outline-success">Cancel</button>
</div>
{{< /example >}}

Create an inline form with `.hstack`:

{{< example codeId="code6" >}}
<div class="hstack gap-3">
  <input class="form-control me-auto" type="text" placeholder="Add your item here..." aria-label="Add your item here...">
  <button type="button" class="btn btn-success">Submit</button>
  <div class="vr"></div>
  <button type="button" class="btn btn-outline-success">Reset</button>
</div>
{{< /example >}}

## CSS

{{< scss-docs name="stacks" file="scss/helpers/_stacks.scss" >}}