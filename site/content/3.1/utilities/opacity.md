---
layout: docs
title: Opacity
group: utilities
toc: true
keywords: utilities, opacity
---

<p class="fs-4 ms-0 mb-4 page-description">
 Control the opacity of elements.
</p>

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency 
level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the opacity of an element using `.opacity-{value}` utilities.

{{< example codeId="code1" class="d-flex flex-wrap justify-content-center align-items-center gap-2 overflow-x-auto" >}}

<div class="opacity-100 text-bg-warning p-3">100</div>
<div class="opacity-75 text-bg-warning p-3">75</div>
<div class="opacity-50 text-bg-warning p-3">50</div>
<div class="opacity-25 text-bg-warning p-3">25</div>
<div class="opacity-0 text-bg-warning p-3">0</div>

{{< /example >}}