---
layout: docs
title: Sizing
group: utilities
toc: true
keywords: utilities, sizing
---

<p class="fs-4 ms-0 mb-4 page-description">
 Easily make an element as wide or as tall with our width and height utilities.
</p>

## Relative to the parent
Width and height utilities are generated from the utility API in `_utilities.scss`. Includes support 
for `25%`, `50%`, `75%`, `100%`, and `auto` by default. Modify those values as you need to generate different 
utilities here.

{{< example codeId="code1" class="overflow-x-auto" >}}

<div class="w-25 p-3 text-bg-danger mb-1">Width 25%</div>
<div class="w-50 p-3 text-bg-danger mb-1">Width 50%</div>
<div class="w-75 p-3 text-bg-danger mb-1">Width 75%</div>
<div class="w-100 p-3 text-bg-danger mb-1">Width 100%</div>
<div class="w-auto p-3 text-bg-danger">Width auto</div>

{{< /example >}}

{{< example codeId="code2" class="overflow-x-auto" >}}

<div class="d-flex flex-wrap gap-1" style="height: 100px;">
  <div class="h-25 text-bg-danger" style="width: 120px;">Height 25%</div>
  <div class="h-50 text-bg-danger" style="width: 120px;">Height 50%</div>
  <div class="h-75 text-bg-danger" style="width: 120px;">Height 75%</div>
  <div class="h-100 text-bg-danger" style="width: 120px;">Height 100%</div>
  <div class="h-auto text-bg-danger" style="width: 120px;">Height auto</div>
</div>

{{< /example >}}

You can also use `max-width: 100%;` and `max-height: 100%;` utilities as needed.

{{< example codeId="code3" >}}

<div class="mw-100 p-3 text-bg-danger" style="width: 200%;">Max-width 100%</div>

{{< /example >}}

{{< example codeId="code4" >}}

<div style="height: 100px;">
  <div class="mh-100 p-3 text-bg-danger" style="width: 150px; height: 200px;">Max-height 100%</div>
</div>

{{< /example >}}

## Relative to the viewport
You can also use utilities to set the width and height relative to the viewport.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```


