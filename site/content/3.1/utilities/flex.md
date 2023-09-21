---
layout: docs
title: Flex
group: utilities
toc: true
keywords: utilities, flex
description: Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.
---

## Enable flex behaviors
Apply `display` utilities to create a flexbox container and transform **direct children elements** into flex items. 
Flex containers and items are able to be modified further with additional flex properties.

{{< example codeId="code1" >}}

<div class="d-flex p-2 text-bg-tertiary">I'm a flexbox container!</div>

{{< /example >}}

{{< example codeId="code2" >}}

<div class="d-inline-flex p-2 text-bg-tertiary">I'm an inline flexbox container!</div>

{{< /example >}}

Responsive variations also exist for `.d-flex` and `.d-inline-flex`.

- `.d-flex`
- `.d-inline-flex`
- `.d-sm-flex`
- `.d-sm-inline-flex`
- `.d-md-flex`
- `.d-md-inline-flex`
- `.d-lg-flex`
- `.d-lg-inline-flex`
- `.d-xl-flex`
- `.d-xl-inline-flex`
- `.d-xxl-flex`
- `.d-xxl-inline-flex`

## Direction
Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the 
horizontal class here as the browser default is `row`. However, you may encounter situations where you needed 
to explicitly set this value (like responsive layouts).

Use `.flex-row` to set a horizontal direction (the browser default), or `.flex-row-reverse` to start the horizontal 
direction from the opposite side.

{{< example codeId="code3" >}}

<div class="d-flex flex-row mb-3 bg-tertiary-subtle">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 1</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 2</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bg-tertiary-subtle">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 1</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 2</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 3</div>
</div>

{{< /example >}}

Use `.flex-column` to set a vertical direction, or `.flex-column-reverse` to start the vertical direction from 
the opposite side.

{{< example codeId="code4" >}}

<div class="d-flex flex-column mb-3 bg-tertiary-subtle">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 1</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 2</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse bg-tertiary-subtle">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 1</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 2</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item 3</div>
</div>

{{< /example >}}

Responsive variations also exist for `flex-direction`.

- `.flex-row`
- `.flex-row-reverse`
- `.flex-column`
- `.flex-column-reverse`
- `.flex-sm-row`
- `.flex-sm-row-reverse`
- `.flex-sm-column`
- `.flex-sm-column-reverse`
- `.flex-md-row`
- `.flex-md-row-reverse`
- `.flex-md-column`
- `.flex-md-column-reverse`
- `.flex-lg-row`
- `.flex-lg-row-reverse`
- `.flex-lg-column`
- `.flex-lg-column-reverse`
- `.flex-xl-row`
- `.flex-xl-row-reverse`
- `.flex-xl-column`
- `.flex-xl-column-reverse`
- `.flex-xxl-row`
- `.flex-xxl-row-reverse`
- `.flex-xxl-column`
- `.flex-xxl-column-reverse`

## Justify content
Use `justify-content` utilities on flexbox containers to change the alignment of flex items on the main 
axis (the x-axis to start, y-axis if `flex-direction: column`). Choose from `start` (browser default), `end`, 
`center`, `between`, `around`, or `evenly`.

{{< example codeId="code5" >}}

<div class="d-flex justify-content-start mb-3 bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Start</div>
</div>
<div class="d-flex justify-content-end mb-3 bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">End</div>
</div>
<div class="d-flex justify-content-center mb-3 bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Center</div>
</div>
<div class="d-flex justify-content-between mb-3 bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Between</div>
</div>
<div class="d-flex justify-content-around mb-3 bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Around</div>
</div>
<div class="d-flex justify-content-evenly bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Justify</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Content</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Evenly</div>
</div>

{{< /example >}}

Responsive variations also exist for `justify-content`.

- `.justify-content-start`
- `.justify-content-end`
- `.justify-content-center`
- `.justify-content-between`
- `.justify-content-around`
- `.justify-content-evenly`
- `.justify-content-sm-start`
- `.justify-content-sm-end`
- `.justify-content-sm-center`
- `.justify-content-sm-between`
- `.justify-content-sm-around`
- `.justify-content-sm-evenly`
- `.justify-content-md-start`
- `.justify-content-md-end`
- `.justify-content-md-center`
- `.justify-content-md-between`
- `.justify-content-md-around`
- `.justify-content-md-evenly`
- `.justify-content-lg-start`
- `.justify-content-lg-end`
- `.justify-content-lg-center`
- `.justify-content-lg-between`
- `.justify-content-lg-around`
- `.justify-content-lg-evenly`
- `.justify-content-xl-start`
- `.justify-content-xl-end`
- `.justify-content-xl-center`
- `.justify-content-xl-between`
- `.justify-content-xl-around`
- `.justify-content-xl-evenly`
- `.justify-content-xxl-start`
- `.justify-content-xxl-end`
- `.justify-content-xxl-center`
- `.justify-content-xxl-between`
- `.justify-content-xxl-around`
- `.justify-content-xxl-evenly`

## Align items
Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis 
(the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, 
or `stretch` (browser default).

{{< example codeId="code6" >}}

<div class="d-flex align-items-start mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Align</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Items</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Start</div>
</div>
<div class="d-flex align-items-end mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Align</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Items</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">End</div>
</div>
<div class="d-flex align-items-center mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Align</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Items</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Center</div>
</div>
<div class="d-flex align-items-baseline mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Align</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Items</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Baseline</div>
</div>
<div class="d-flex align-items-stretch bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Align</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Items</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Stretch</div>
</div>

{{< /example >}}

## Align self 
Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis 
(the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `align-items`: 
`start`, `end`, `center`, `baseline`, or `stretch` (browser default).

{{< example codeId="code7" >}}

<div class="d-flex mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle align-self-start">Align Self Start</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>
<div class="d-flex mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle align-self-end">Align Self End</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>
<div class="d-flex mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle align-self-center">Align Self Center</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>
<div class="d-flex mb-3 bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle align-self-baseline">Align Self Baseline</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>
<div class="d-flex bg-tertiary-subtle" style="height: 100px;">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle align-self-stretch">Align Self Stretch</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>

{{< /example >}}

Responsive variations also exist for `align-self`.

- `.align-self-start`
- `.align-self-end`
- `.align-self-center`
- `.align-self-baseline`
- `.align-self-stretch`
- `.align-self-sm-start`
- `.align-self-sm-end`
- `.align-self-sm-center`
- `.align-self-sm-baseline`
- `.align-self-sm-stretch`
- `.align-self-md-start`
- `.align-self-md-end`
- `.align-self-md-center`
- `.align-self-md-baseline`
- `.align-self-md-stretch`
- `.align-self-lg-start`
- `.align-self-lg-end`
- `.align-self-lg-center`
- `.align-self-lg-baseline`
- `.align-self-lg-stretch`
- `.align-self-xl-start`
- `.align-self-xl-end`
- `.align-self-xl-center`
- `.align-self-xl-baseline`
- `.align-self-xl-stretch`
- `.align-self-xxl-start`
- `.align-self-xxl-end`
- `.align-self-xxl-center`
- `.align-self-xxl-baseline`
- `.align-self-xxl-stretch`

## Fill
Use the `.flex-fill` class on a series of sibling elements to force them into widths equal to their content 
(or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.

{{< example codeId="code8" >}}

<div class="d-flex bg-tertiary-subtle">
    <div class="flex-fill p-2 text-bg-tertiary border border-tertiary-subtle">Flex item with a lot of content</div>
    <div class="flex-fill p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="flex-fill p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>

{{< /example >}}

Responsive variations also exist for `flex-fill`.

- `.flex-fill`
- `.flex-sm-fill`
- `.flex-md-fill`
- `.flex-lg-fill`
- `.flex-xl-fill`
- `.flex-xxl-fill`

## Grow and shrink
Use `.flex-grow-*` utilities to toggle a flex item’s ability to grow to fill available space. In the example 
below, the `.flex-grow-1` elements uses all available space it can, while allowing the remaining two flex items 
their necessary space.

{{< example codeId="code9" >}}

<div class="d-flex bg-tertiary-subtle">
    <div class="flex-grow-1 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Grow 1</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
</div>

{{< /example >}}

Use `.flex-shrink-*` utilities to toggle a flex item’s ability to shrink if necessary. In the example below, 
the second flex item with `.flex-shrink-1` is forced to wrap its contents to a new line, “shrinking” to allow 
more space for the previous flex item with `.w-100`.

{{< example codeId="code10" >}}

<div class="d-flex bg-tertiary-subtle">
    <div class="w-100 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item</div>
    <div class="flex-shrink-1 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Shrink 1</div>
</div>

{{< /example >}}

Responsive variations also exist for `flex-grow` and `flex-shrink`.

- `.flex-{grow|shrink}-0`
- `.flex-{grow|shrink}-1`
- `.flex-sm-{grow|shrink}-0`
- `.flex-sm-{grow|shrink}-1`
- `.flex-md-{grow|shrink}-0`
- `.flex-md-{grow|shrink}-1`
- `.flex-lg-{grow|shrink}-0`
- `.flex-lg-{grow|shrink}-1`
- `.flex-xl-{grow|shrink}-0`
- `.flex-xl-{grow|shrink}-1`
- `.flex-xxl-{grow|shrink}-0`
- `.flex-xxl-{grow|shrink}-1`

## Auto margins
Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three 
examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the 
right (`.me-auto`), and pushing two items to the left (`.ms-auto`).

{{< example codeId="code11" >}}

<div class="d-flex bg-tertiary-subtle mb-3">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
</div>

<div class="d-flex bg-tertiary-subtle mb-3">
  <div class="me-auto p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
</div>

<div class="d-flex bg-tertiary-subtle">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="ms-auto p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
</div>

{{< /example >}}

### With align-items
Vertically move one flex item to the top or bottom of a container by mixing `align-items`, 
`flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

{{< example codeId="code12" >}}

<div class="d-flex align-items-start flex-column mb-3 bg-tertiary-subtle" style="height: 200px;">
  <div class="mb-auto p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
</div>

<div class="d-flex align-items-end flex-column bg-tertiary-subtle" style="height: 200px;">
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
  <div class="mt-auto p-2 text-bg-tertiary border border-tertiary-subtle">Flex item</div>
</div>

{{< /example >}}

## Wrap
Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) 
with `.flex-nowrap`, wrapping with `.flex-wrap`, or reverse wrapping with `.flex-wrap-reverse`.

**`flex-nowrap`**
{{< example codeId="code13" class="overflow-x-auto" >}}

<div class="d-flex flex-nowrap bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 3</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 4</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 5</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 6</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 7</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 8</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 9</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 10</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 11</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 12</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 13</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 14</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 15</div>
</div>

{{< /example >}}

**`flex-wrap`**
{{< example codeId="code14" >}}

<div class="d-flex flex-wrap bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 3</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 4</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 5</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 6</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 7</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 8</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 9</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 10</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 11</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 12</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 13</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 14</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 15</div>
</div>

{{< /example >}}

**`flex-wrap-reverse`**
{{< example codeId="code15" >}}

<div class="d-flex flex-wrap-reverse bg-tertiary-subtle">
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 3</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 4</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 5</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 6</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 7</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 8</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 9</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 10</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 11</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 12</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 13</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 14</div>
    <div class="p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 15</div>
</div>

{{< /example >}}

Responsive variations also exist for `flex-wrap`.

- `.flex-nowrap`
- `.flex-wrap`
- `.flex-wrap-reverse`
- `.flex-sm-nowrap`
- `.flex-sm-wrap`
- `.flex-sm-wrap-reverse`
- `.flex-md-nowrap`
- `.flex-md-wrap`
- `.flex-md-wrap-reverse`
- `.flex-lg-nowrap`
- `.flex-lg-wrap`
- `.flex-lg-wrap-reverse`
- `.flex-xl-nowrap`
- `.flex-xl-wrap`
- `.flex-xl-wrap-reverse`
- `.flex-xxl-nowrap`
- `.flex-xxl-wrap`
- `.flex-xxl-wrap-reverse`

## Order
Change the *visual* order of specific flex items with a handful of `order` utilities. We only provide options 
for making an item first or last, as well as a reset to use the DOM order. As `order` takes any integer value 
from 0 to 5, add custom CSS for any additional values needed.

{{< example codeId="code16" >}}

<div class="d-flex flex-nowrap bg-tertiary-subtle">
    <div class="order-3 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="order-2 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
    <div class="order-1 p-2 text-bg-tertiary border border-tertiary-subtle">Flex Item 3</div>
</div>

{{< /example >}}

Responsive variations also exist for `order`.

- `.order-0`
- `.order-1`
- `.order-2`
- `.order-3`
- `.order-4`
- `.order-5`
- `.order-sm-0`
- `.order-sm-1`
- `.order-sm-2`
- `.order-sm-3`
- `.order-sm-4`
- `.order-sm-5`
- `.order-md-0`
- `.order-md-1`
- `.order-md-2`
- `.order-md-3`
- `.order-md-4`
- `.order-md-5`
- `.order-lg-0`
- `.order-lg-1`
- `.order-lg-2`
- `.order-lg-3`
- `.order-lg-4`
- `.order-lg-5`
- `.order-xl-0`
- `.order-xl-1`
- `.order-xl-2`
- `.order-xl-3`
- `.order-xl-4`
- `.order-xl-5`
- `.order-xxl-0`
- `.order-xxl-1`
- `.order-xxl-2`
- `.order-xxl-3`
- `.order-xxl-4`
- `.order-xxl-5`

Additionally there are also responsive `.order-first` and `.order-last` classes that change the `order` of an 
element by applying `order: -1` and `order: 6`, respectively.

- `.order-first`
- `.order-last`
- `.order-sm-first`
- `.order-sm-last`
- `.order-md-first`
- `.order-md-last`
- `.order-lg-first`
- `.order-lg-last`
- `.order-xl-first`
- `.order-xl-last`
- `.order-xxl-first`
- `.order-xxl-last`

## Align content
Use `align-content` utilities on flexbox containers to align flex items together on the cross axis. Choose 
from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. To demonstrate these utilities, 
we’ve enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items.

**`align-content-start`**
{{< example codeId="code17" >}}

<div class="d-flex align-content-start flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

**`align-content-end`**
{{< example codeId="code18" >}}

<div class="d-flex align-content-end flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

**`align-content-center`**
{{< example codeId="code19" >}}

<div class="d-flex align-content-center flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

**`align-content-between`**
{{< example codeId="code20" >}}

<div class="d-flex align-content-between flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

**`align-content-around`**
{{< example codeId="code21" >}}

<div class="d-flex align-content-around flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

**`align-content-stretch`**
{{< example codeId="code22" >}}

<div class="d-flex align-content-stretch flex-wrap bg-tertiary-subtle" style="height: 150px;">
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 1</div>
    <div class="p-2 w-100 text-bg-tertiary border border-tertiary-subtle">Flex Item 2</div>
</div>

{{< /example >}}

Responsive variations also exist for `align-content`.

- `.align-content-start`
- `.align-content-end`
- `.align-content-center`
- `.align-content-between`
- `.align-content-around`
- `.align-content-stretch`
- `.align-content-sm-start`
- `.align-content-sm-end`
- `.align-content-sm-center`
- `.align-content-sm-between`
- `.align-content-sm-around`
- `.align-content-sm-stretch`
- `.align-content-md-start`
- `.align-content-md-end`
- `.align-content-md-center`
- `.align-content-md-between`
- `.align-content-md-around`
- `.align-content-md-stretch`
- `.align-content-lg-start`
- `.align-content-lg-end`
- `.align-content-lg-center`
- `.align-content-lg-between`
- `.align-content-lg-around`
- `.align-content-lg-stretch`
- `.align-content-xl-start`
- `.align-content-xl-end`
- `.align-content-xl-center`
- `.align-content-xl-between`
- `.align-content-xl-around`
- `.align-content-xl-stretch`
- `.align-content-xxl-start`
- `.align-content-xxl-end`
- `.align-content-xxl-center`
- `.align-content-xxl-between`
- `.align-content-xxl-around`
- `.align-content-xxl-stretch`



