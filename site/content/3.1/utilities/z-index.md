---
layout: docs
title: Z-index
group: utilities
toc: true
keywords: utilities, z-index
---

<p class="fs-4 ms-0 mb-4 page-description">
 Use our low-level `z-index` utilities to quickly change the stack level of an element or component.
</p>

## Example
Use `z-index` utilities to stack elements on top of one another. Requires a `position` value other than `static`, 
which can be set with custom styles or using our position utilities.

We call these “low-level” `z-index` utilities because of their default values of `-1` through `3`, which we use for 
the layout of overlapping components. High-level `z-index` values are used for overlay components like modals 
and tooltips.

{{< example codeId="code1" class="overflow-x-auto" >}}

<div style="height: 11rem; position: relative;">
  <div class="z-3 position-absolute text-bg-primary border p-1 pt-5 ps-5 rounded-3">z-3</div>
  <div class="z-2 position-absolute text-bg-primary border p-1 pt-5 ps-5 rounded-3" style="top: 1.5rem; left: 1.5rem;">z-2</div>
  <div class="z-1 position-absolute text-bg-primary border p-1 pt-5 ps-5 rounded-3" style="top: 3rem; left: 3rem;">z-1</div>
  <div class="z-0 position-absolute text-bg-primary border p-1 pt-5 ps-5 rounded-3" style="top: 4.5rem; left: 4.5rem;">z-0</div>
  <div class="z-n1 position-absolute text-bg-primary border p-1 pt-5 ps-5 rounded-3" style="top: 6rem; left: 6rem;">z-n1</div>
</div>

{{< /example >}}

## Overlays
overlay components—dropdown, modal, offcanvas, popover, toast, snackbar and tooltip—all have their own `z-index` 
values to ensure a usable experience with competing “layers” of an interface.

## Component approach 
On some components, we use our low-level `z-index` values to manage repeating elements that overlap one another 
(like buttons in a button group or items in a list group).
