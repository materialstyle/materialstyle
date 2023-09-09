---
layout: docs
title: Gutters
group: layout
toc: true
keywords: layout, gutters
---

<p class="fs-4 ms-0 mb-4 page-description">
 Gutters are the gaps between your columns, used to responsively space and align content in the Material Style 
 grid system.
</p>

## How they work

- **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` 
and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each 
row to align content.

- **Gutters start at `1.5rem` (`24px`) wide.** This allows us to match our grid to the 
[padding and margin spacers]({{< docsref "/utilities/spacing" >}}) scale.

- **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes to modify horizontal gutters, 
vertical gutters, and all gutters.

## Horizontal gutters

`.gx-*` classes can be used to control the horizontal gutter widths. The `.container` or `.container-fluid` parent 
may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding 
utility. For example, in the following example we've increased the padding with `.px-4`:

{{< example codeId="code1" >}}
<div class="container px-4 text-center">
  <div class="row gx-5 bg-warning-subtle">
    <div class="col">
     <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:

{{< example codeId="code2" >}}
<div class="container overflow-hidden text-center">
  <div class="row gx-5 bg-warning-subtle">
    <div class="col">
     <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Vertical gutters

`.gy-*` classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. 
Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. 
If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:

{{< example codeId="code3" >}}
<div class="container overflow-hidden text-center">
  <div class="row gy-5 bg-warning-subtle">
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Horizontal & vertical gutters

Use `.g-*` classes to control the horizontal and vertical grid gutters. In the example below, we use a smaller 
gutter width, so there isn't a need for the `.overflow-hidden` wrapper class.

{{< example codeId="code4" >}}
<div class="container text-center">
  <div class="row g-2 bg-warning-subtle">
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 text-bg-warning">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Row columns gutters

Gutter classes can also be added to [row columns]({{< docsref "/layout/grid#row-columns" >}}). In the following 
example, we use responsive row columns and responsive gutter classes.

{{< example codeId="code5" >}}
<div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 bg-warning-subtle">
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
    <div class="col">
      <div class="p-3 text-bg-warning">Row column</div>
    </div>
  </div>
</div>
{{< /example >}}

## No gutters

The gutters between columns in our predefined grid classes can be removed with `.g-0`. This removes the negative 
`margin`s from `.row` and the horizontal `padding` from all immediate children columns.

**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid` and add `.mx-0` to the `.row` 
to prevent overflow.

In practice, here's how it looks. Note you can continue to use this with all other predefined grid classes 
(including column widths, responsive tiers, reorders, and more).

{{< example codeId="code6" >}}
<div class="row g-0 text-center bg-warning-subtle">
  <div class="col-sm-6 col-md-8">
    <div class="p-3 text-bg-warning">.col-sm-6 .col-md-8</div>
  </div>
  <div class="col-6 col-md-4">
    <div class="p-3 text-bg-warning">.col-6 .col-md-4</div>
  </div>
</div>
{{< /example >}}

## Change the gutters

Classes are built from the `$gutters` Sass map which is inherited from the `$spacers` Sass map.

```scss
$grid-gutter-width: 1.5rem;
$gutters: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);
```
