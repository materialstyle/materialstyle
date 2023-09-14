---
layout: docs
title: Overflow
group: utilities
toc: true
keywords: utilities, overflow
---

<p class="fs-4 ms-0 mb-4 page-description">
 Use these shorthand utilities for quickly configuring how content overflows an element.
</p>

## Overflow
Adjust the `overflow` property on the fly with four default values and classes. 
These classes are not responsive by default.

{{< example codeId="code1" class="d-flex flex-wrap justify-content-center align-items-center gap-2 overflow-x-auto" >}}

<div class="overflow-auto p-3 border rounded" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-auto</code> on an element with fixed width and height dimensions. 
    By design, this content will vertically scroll.
</div>

<div class="overflow-hidden p-3 border rounded" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-hidden</code> on an element with fixed width and height dimensions.
</div>

<div class="overflow-visible p-3 border rounded" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-visible</code> on an element with fixed width and height dimensions.
</div>

<div class="overflow-scroll p-3 border rounded" style="max-width: 260px; max-height: 100px;">
    This is an example of using <code>.overflow-scroll</code> on an element with fixed width and height dimensions.
</div>

{{< /example >}}

### `Overflow-x`
Adjust the `overflow-x` property to affect the overflow of content horizontally.

{{< example codeId="code2" class="d-flex flex-wrap justify-content-center align-items-stretch gap-2 overflow-x-auto" >}}

<div class="overflow-x-auto p-3 border rounded" style="max-width: 260px; max-height: 100px; white-space: nowrap;">
    `.overflow-x-auto` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-x-hidden p-3 border rounded" style="max-width: 260px; max-height: 100px; white-space: nowrap;">
    `.overflow-x-hidden` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-x-visible p-3 border rounded" style="max-width: 260px; max-height: 100px; white-space: nowrap;">
    `.overflow-x-visible` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-x-scroll p-3 border rounded" style="max-width: 260px; max-height: 100px; white-space: nowrap;">
    `.overflow-x-scroll` example on an element with fixed width and height dimensions.
</div>

{{< /example >}}

### `Overflow-y`
Adjust the `overflow-y` property to affect the overflow of content vertically.

{{< example codeId="code3" class="d-flex flex-wrap justify-content-center align-items-center gap-2 overflow-x-auto" >}}

<div class="overflow-y-auto p-3 border rounded" style="max-width: 200px; max-height: 100px;">
    `.overflow-y-auto` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-y-hidden p-3 border rounded" style="max-width: 200px; max-height: 100px;">
    `.overflow-y-hidden` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-y-visible p-3 border rounded" style="max-width: 200px; max-height: 100px;">
    `.overflow-y-visible` example on an element with fixed width and height dimensions.
</div>

<div class="overflow-y-scroll p-3 border rounded" style="max-width: 200px; max-height: 100px;">
    `.overflow-y-scroll` example on an element with fixed width and height dimensions.
</div>

{{< /example >}}