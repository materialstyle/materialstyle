---
layout: docs
title: Display
group: utilities
toc: true
keywords: utilities, display
---

<p class="fs-4 ms-0 mb-4 page-description">
 Quickly and responsively toggle the display value of components and more with our display utilities. Includes 
 support for some of the more common values, as well as some extras for controlling display when printing.
</p>

## Notation
Display utility classes that apply to all breakpoints, from `xs` to `xxl`, have no breakpoint abbreviation in them. 
This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. 
The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `xs`
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *value* is one of:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `inline-grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`

The display values can be altered by changing the `display` values defined in `$utilities` and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint or larger. For example, `.d-lg-none` sets 
`display: none;` on `lg`, `xl`, and `xxl` screens.

## Examples

{{< example codeId="code1" >}}

<div class="d-inline p-2 text-bg-primary">d-inline</div>
<div class="d-inline p-2 text-bg-tertiary">d-inline</div>

{{< /example >}}

{{< example codeId="code2" >}}

<span class="d-block p-2 text-bg-primary">d-block</span>
<span class="d-block p-2 text-bg-tertiary">d-block</span>

{{< /example >}}

## Hiding elements
For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. 
Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,md,lg,xl,xxl}-none` classes for any responsive 
screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a 
`.d-*-*` class, for example `.d-none .d-md-block .d-xl-none .d-xxl-none` will hide the element for all screen 
sizes except on medium and large devices.

{{< bs-table >}}
| Screen size | Class |
| --- | --- |
| Hidden on all | `.d-none` |
| Hidden only on xs | `.d-none .d-sm-block` |
| Hidden only on sm | `.d-sm-none .d-md-block` |
| Hidden only on md | `.d-md-none .d-lg-block` |
| Hidden only on lg | `.d-lg-none .d-xl-block` |
| Hidden only on xl | `.d-xl-none .d-xxl-block` |
| Hidden only on xxl | `.d-xxl-none` |
| Visible on all | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block .d-xxl-none` |
| Visible only on xxl | `.d-none .d-xxl-block` |
{{< /bs-table >}}

{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="d-lg-none">hide on lg and wider screens</div>
<div class="d-none d-lg-block">hide on screens smaller than lg</div>

{{< /example >}}

## Display in print
Change the `display` value of elements when printing with our print display utility classes. Includes support 
for the same `display` values as our responsive `.d-*` utilities.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-inline-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="d-print-none">Screen Only (Hide on print only)</div>
<div class="d-none d-print-block">Print Only (Hide on screen only)</div>
<div class="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>

{{< /example >}}