---
layout: docs
title: Columns
group: layout
toc: true
keywords: layout, columns
description: Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements.
---

## How they work
- **Columns build on the grid's flexbox architecture.** Flexbox means we have options for changing individual columns 
and [modifying groups of columns at the row level]({{< docsref "/layout/grid#row-columns" >}}). You choose how 
columns grow, shrink, or otherwise change.

- **When building grid layouts, all content goes in columns.** The hierarchy of Material Style's grid goes from 
[container]({{< docsref "/layout/containers" >}}) to row to column to your content. On rare occasions, you may 
combine content and column, but be aware there can be unintended consequences.

- **Material Style includes predefined classes for creating fast, responsive layouts.** With 
[six breakpoints]({{< docsref "/layout/breakpoints" >}}) and a dozen columns at each grid tier, we have dozens of 
classes already built for you to create your desired layouts. This can be disabled via Sass if you wish.

## Alignment
Use flexbox alignment utilities to vertically and horizontally align columns.

### Vertical alignment
Change the vertical alignment with any of the responsive `align-items-*` classes.

{{< example codeId="code1" >}}
<div class="container text-center">
  <div class="row align-items-start bg-tertiary-subtle gap-1" style="min-height: 10rem;">
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code2" >}}
<div class="container text-center">
  <div class="row align-items-center bg-tertiary-subtle gap-1" style="min-height: 10rem;">
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code3" >}}
<div class="container text-center">
  <div class="row align-items-end bg-tertiary-subtle gap-1" style="min-height: 10rem;">
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
    <div class="col text-bg-tertiary">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

Or, change the alignment of each column individually with any of the responsive `.align-self-*` classes.

{{< example codeId="code4" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1" style="min-height: 10rem;">
    <div class="col align-self-start text-bg-tertiary">
      One of three columns
    </div>
    <div class="col align-self-center text-bg-tertiary">
      One of three columns
    </div>
    <div class="col align-self-end text-bg-tertiary">
      One of three columns
    </div>
  </div>
</div>
{{< /example >}}

### Horizontal alignment

Change the horizontal alignment with any of the responsive `justify-content-*` classes.

{{< example codeId="code5" >}}
<div class="container text-center">
  <div class="row justify-content-start bg-tertiary-subtle gap-1 mb-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center bg-tertiary-subtle gap-1 mb-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end bg-tertiary-subtle gap-1 mb-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around bg-tertiary-subtle gap-1 mb-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between bg-tertiary-subtle gap-1 mb-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-evenly bg-tertiary-subtle gap-1">
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
    <div class="col-4 text-bg-tertiary">
      One of two columns
    </div>
  </div>
</div>
{{< /example >}}

### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a 
new line.

{{< example codeId="code6" >}}
<div class="container">
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-9 text-bg-tertiary">.col-9</div>
    <div class="col-4 text-bg-tertiary">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
    <div class="col-6 text-bg-tertiary">.col-6<br>Subsequent columns continue along the new line.</div>
  </div>
</div>
{{< /example >}}

### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you 
want to wrap your columns to a new line. Normally this is accomplished with multiple `.row`s, but not every 
implementation method can account for this.

{{< example codeId="code7" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-6 col-sm-3 text-bg-tertiary">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 text-bg-tertiary">.col-6 .col-sm-3</div>

    <!-- Force next columns to break to new line -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3 text-bg-tertiary">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3 text-bg-tertiary">.col-6 .col-sm-3</div>
  </div>
</div>
{{< /example >}}

You may also apply this break at specific breakpoints with our 
[responsive display utilities]({{< docsref "/utilities/display" >}}).

{{< example codeId="code8" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-6 col-sm-4 text-bg-tertiary">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4 text-bg-tertiary">.col-6 .col-sm-4</div>

    <!-- Force next columns to break to new line at md breakpoint and up -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4 text-bg-tertiary">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4 text-bg-tertiary">.col-6 .col-sm-4</div>
  </div>
</div>
{{< /example >}}

## Reordering

### Order classes

Use `.order-` classes for controlling the **visual order** of your content. These classes are responsive, so you 
can set the `order` by breakpoint (e.g., `.order-1.order-md-2`). Includes support for `1` through `5` across 
all six grid tiers. If you need more `.order-*` classes, you can modify the default number via Sass variable.

{{< example codeId="code9" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col text-bg-tertiary">
      First in DOM, no order applied
    </div>
    <div class="col order-5 text-bg-tertiary">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1 text-bg-tertiary">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
{{< /example >}}

There are also responsive `.order-first` and `.order-last` classes that change the `order` of an element by 
applying `order: -1` and `order: 6`, respectively. These classes can also be intermixed with the numbered 
`.order-*` classes as needed.

{{< example codeId="code10" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col order-last text-bg-tertiary">
      First in DOM, ordered last
    </div>
    <div class="col text-bg-tertiary">
      Second in DOM, unordered
    </div>
    <div class="col order-first text-bg-tertiary">
      Third in DOM, ordered first
    </div>
  </div>
</div>
{{< /example >}}

### Offsetting columns

You can offset grid columns in two ways: our responsive `.offset-` grid classes and our 
[margin utilities]({{< docsref "/utilities/spacing" >}}). Grid classes are sized to match columns while margins 
are more useful for quick layouts where the width of the offset is variable.

#### Offset classes

Move columns to the right using `.offset-md-*` classes. These classes increase the left margin of a column 
by `*` columns. For example, `.offset-md-4` moves `.col-md-4` over four columns.

{{< example codeId="code11" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1 mb-1">
    <div class="col-md-4 text-bg-tertiary">.col-md-4</div>
    <div class="col-md-4 offset-md-4 text-bg-tertiary">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row bg-tertiary-subtle gap-1 mb-1">
    <div class="col-md-3 offset-md-3 text-bg-tertiary">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3 text-bg-tertiary">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-md-6 offset-md-3 text-bg-tertiary">.col-md-6 .offset-md-3</div>
  </div>
</div>
{{< /example >}}

In addition to column clearing at responsive breakpoints, you may need to reset offsets.

{{< example codeId="code12" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1 mb-1">
    <div class="col-sm-5 col-md-6 text-bg-tertiary">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0 text-bg-tertiary">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-sm-6 col-md-5 col-lg-6 text-bg-tertiary">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0 text-bg-tertiary">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
{{< /example >}}

#### Margin utilities

With the move to flexbox in v4, you can use margin utilities like `.me-auto` to force sibling columns away from 
one another.

{{< example codeId="code13" >}}
<div class="container text-center">
  <div class="row bg-tertiary-subtle gap-1 mb-1">
    <div class="col-md-4 text-bg-tertiary">.col-md-4</div>
    <div class="col-md-4 ms-auto text-bg-tertiary">.col-md-4 .ms-auto</div>
  </div>
  <div class="row bg-tertiary-subtle gap-1 mb-1">
    <div class="col-md-3 ms-md-auto text-bg-tertiary">.col-md-3 .ms-md-auto</div>
    <div class="col-md-3 ms-md-auto text-bg-tertiary">.col-md-3 .ms-md-auto</div>
  </div>
  <div class="row bg-tertiary-subtle gap-1">
    <div class="col-auto me-auto text-bg-tertiary">.col-auto .me-auto</div>
    <div class="col-auto text-bg-tertiary">.col-auto</div>
  </div>
</div>
{{< /example >}}

## Standalone column classes

The `.col-*` classes can also be used outside a `.row` to give an element a specific width. Whenever column 
classes are used as non-direct children of a row, the paddings are omitted.

{{< example codeId="code14" >}}
<div class="col-3 p-3 mb-1 text-bg-tertiary">
  .col-3: width of 25%
</div>

<div class="col-sm-9 p-3 text-bg-tertiary">
  .col-sm-9: width of 75% above sm breakpoint
</div>
{{< /example >}}
