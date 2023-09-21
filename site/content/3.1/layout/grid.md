---
layout: docs
title: Grid
group: layout
toc: true
keywords: layout, grid
description: Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
---

## Example
Material Style's grid system uses a series of containers, rows, and columns to layout and align content. It's built with 
[flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) and 
is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.

{{< example codeId="code1" >}}
<div class="container text-center">
  <div class="row">
    <div class="col border p-2">
      Column
    </div>
    <div class="col border p-2">
      Column
    </div>
    <div class="col border p-2">
      Column
    </div>
  </div>
</div>
{{< /example >}}

The above example creates three equal-width columns across all devices and viewports using our predefined 
grid classes. Those columns are centered in the page with the parent `.container`.

## How it works
Breaking it down, here's how the grid system comes together:

- **Our grid supports [six responsive breakpoints]({{< docsref "/layout/breakpoints" >}}).**  
Breakpoints are based on `min-width` media queries, meaning they affect that breakpoint and all those 
above it (e.g., `.col-sm-4` applies to `sm`, `md`, `lg`, `xl`, and `xxl`). This means you can control container 
and column sizing and behavior by each breakpoint.

- **Containers center and horizontally pad your content.** Use `.container` for a responsive pixel width, 
`.container-fluid` for `width: 100%` across all viewports and devices, or a responsive container 
(e.g., `.container-md`) for a combination of fluid and pixel widths.

- **Rows are wrappers for columns.** Each column has horizontal `padding` (called a gutter) for controlling the 
space between them. This `padding` is then counteracted on the rows with negative margins to ensure the content 
in your columns is visually aligned down the left side. Rows also support modifier classes to [uniformly apply 
column sizing](#row-columns) and [gutter classes]({{< docsref "/layout/gutters" >}}) to change the spacing of 
your content.

- **Columns are incredibly flexible.** There are 12 template columns available per row, allowing you to create 
different combinations of elements that span any number of columns. Column classes indicate the number of 
template columns to span (e.g., `col-4` spans four). `width`s are set in percentages so you always have the 
same relative sizing.

- **Gutters are also responsive and customizable.** [Gutter classes are available]({{< docsref "/layout/gutters" >}}) 
across all breakpoints, with all the same sizes as our [margin and padding spacing]({{< docsref "/utilities/spacing" >}}). 
Change horizontal gutters with `.gx-*` classes, vertical gutters with `.gy-*`, or all gutters with `.g-*` classes. 
`.g-0` is also available to remove gutters.

- **Sass variables, maps, and mixins power the grid.** If you don't want to use the predefined grid classes in 
Material Style, you can use our [grid's source Sass](#sass-variables) to create your own with more semantic markup. 
We also include some CSS custom properties to consume these Sass variables for even greater flexibility for you.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the 
[inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

## Grid options
Material Style's grid system can adapt across all six default breakpoints, and any breakpoints you customize. 
The six default grid tiers are as follows:

- Extra small (xs)
- Small (sm)
- Medium (md)
- Large (lg)
- Extra large (xl)
- Extra extra large (xxl)

As noted above, each of these breakpoints have their own container, unique class prefix, and modifiers. Here's 
how the grid changes across these breakpoints:

<div class="table-responsive">
  <table class="table mb-4">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          xs<br>
          <span class="fw-normal">&lt;576px</span>
        </th>
        <th scope="col">
          sm<br>
          <span class="fw-normal">&ge;576px</span>
        </th>
        <th scope="col">
          md<br>
          <span class="fw-normal">&ge;768px</span>
        </th>
        <th scope="col">
          lg<br>
          <span class="fw-normal">&ge;992px</span>
        </th>
        <th scope="col">
          xl<br>
          <span class="fw-normal">&ge;1200px</span>
        </th>
        <th scope="col">
          xxl<br>
          <span class="fw-normal">&ge;1400px</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="text-nowrap" scope="row">Container <code class="fw-normal">max-width</code></th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
        <td>1320px</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Class prefix</th>
        <td><code>.col-</code></td>
        <td><code>.col-sm-</code></td>
        <td><code>.col-md-</code></td>
        <td><code>.col-lg-</code></td>
        <td><code>.col-xl-</code></td>
        <td><code>.col-xxl-</code></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row"># of columns</th>
        <td colspan="6">12</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Gutter width</th>
        <td colspan="6">1.5rem (.75rem on left and right)</td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Custom gutters</th>
        <td colspan="6"><a href="{{< docsref "/layout/gutters" >}}">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Nestable</th>
        <td colspan="6"><a href="#nesting">Yes</a></td>
      </tr>
      <tr>
        <th class="text-nowrap" scope="row">Column ordering</th>
        <td colspan="6"><a href="{{< docsref "/layout/columns#reordering" >}}">Yes</a></td>
      </tr>
    </tbody>
  </table>
</div>
<br>

## Auto-layout columns
Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like 
`.col-sm-6`.

### Equal-width
For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xxl`. Add any 
number of unit-less classes for each breakpoint you need and every column will be the same width.

{{< example codeId="code2" >}}
<div class="container text-center">
  <div class="row">
    <div class="col border p-2">
      1 of 2
    </div>
    <div class="col border p-2">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col border p-2">
      1 of 3
    </div>
    <div class="col border p-2">
      2 of 3
    </div>
    <div class="col border p-2">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### Setting one column width
Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns 
automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. 
Note that the other columns will resize no matter the width of the center column.

{{< example codeId="code3" >}}
<div class="container text-center">
  <div class="row">
    <div class="col border p-2">
      1 of 3
    </div>
    <div class="col-6 border p-2">
      2 of 3 (wider)
    </div>
    <div class="col border p-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col border p-2">
      1 of 3
    </div>
    <div class="col-5 border p-2">
      2 of 3 (wider)
    </div>
    <div class="col border p-2">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

### Variable width content

Use `col-{breakpoint}-auto` classes to size columns based on the natural width of their content.

{{< example codeId="code4" >}}
<div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2 border p-2">
      1 of 3
    </div>
    <div class="col-md-auto border p-2">
      Variable width content
    </div>
    <div class="col col-lg-2 border p-2">
      3 of 3
    </div>
  </div>
  <div class="row">
    <div class="col border p-2">
      1 of 3
    </div>
    <div class="col-md-auto border p-2">
      Variable width content
    </div>
    <div class="col col-lg-2 border p-2">
      3 of 3
    </div>
  </div>
</div>
{{< /example >}}

## Responsive classes
Material Style's grid includes six tiers of predefined classes for building complex responsive layouts. Customize 
the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

### All breakpoints
For grids that are the same from the smallest of devices to the largest, use the `.col` and `.col-*` classes. 
Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to `.col`.

{{< example codeId="code5" >}}
<div class="container text-center">
  <div class="row">
    <div class="col border p-2">col</div>
    <div class="col border p-2">col</div>
    <div class="col border p-2">col</div>
    <div class="col border p-2">col</div>
  </div>
  <div class="row">
    <div class="col-8 border p-2">col-8</div>
    <div class="col-4 border p-2">col-4</div>
  </div>
</div>
{{< /example >}}

### Stacked to horizontal
Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked and becomes 
horizontal at the small breakpoint (`sm`).

{{< example codeId="code6" >}}
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8 border p-2">col-sm-8</div>
    <div class="col-sm-4 border p-2">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm border p-2">col-sm</div>
    <div class="col-sm border p-2">col-sm</div>
    <div class="col-sm border p-2">col-sm</div>
  </div>
</div>
{{< /example >}}

### Mix and match
Don't want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier 
as needed. See the example below for a better idea of how it all works.

{{< example codeId="code7" >}}
<div class="container text-center">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8 border p-2">.col-md-8</div>
    <div class="col-6 col-md-4 border p-2">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4 border p-2">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 border p-2">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4 border p-2">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6 border p-2">.col-6</div>
    <div class="col-6 border p-2">.col-6</div>
  </div>
</div>
{{< /example >}}

### Row columns
Use the responsive `.row-cols-*` classes to quickly set the number of columns that best render your content and 
layout. Whereas normal `.col-*` classes apply to the individual columns (e.g., `.col-md-4`), the row columns 
classes are set on the parent `.row` as a shortcut. With `.row-cols-auto` you can give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts.

{{< example codeId="code8" >}}
<div class="container text-center">
  <div class="row row-cols-2">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code9" >}}
<div class="container text-center">
  <div class="row row-cols-3">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code10" >}}
<div class="container text-center">
  <div class="row row-cols-auto">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code11" >}}
<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code12" >}}
<div class="container text-center">
  <div class="row row-cols-4">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col-6 border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

{{< example codeId="code13" >}}
<div class="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
    <div class="col border p-2">Column</div>
  </div>
</div>
{{< /example >}}

You can also use the accompanying Sass mixin, `row-cols()`:

```scss
.element {
  // Three columns to start
  @include row-cols(3);

  // Five columns from medium breakpoint up
  @include media-breakpoint-up(md) {
    @include row-cols(5);
  }
}
```
<br>

## Nesting
To nest your content with the default grid, add a new `.row` and set of `.col-sm-*` columns within an existing 
`.col-sm-*` column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required 
that you use all 12 available columns).

{{< example codeId="code14" >}}
<div class="container text-center">
  <div class="row">
    <div class="col-sm-3 border py-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9 border py-3">
      <div class="row">
        <div class="col-8 col-sm-6 border p-2">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6 border p-2">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## CSS
When using Material Style's source Sass files, you have the option of using Sass variables and mixins to create custom, 
semantic, and responsive page layouts. Our predefined grid classes use these same variables and mixins to provide 
a whole suite of ready-to-use classes for fast responsive layouts.

### Sass variables
Variables and maps determine the number of columns, the gutter width, and the media query point at which to begin 
floating columns. We use these to generate the predefined grid classes documented above, as well as for the custom 
mixins listed below.

```scss
$grid-columns:      12;
$grid-gutter-width: 1.5rem;
$grid-row-columns:  6;
```
<br>

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

<br>

{{< scss-docs name="container-max-widths" file="scss/_variables.scss" >}}

<br>

### Sass mixins
Mixins are used in conjunction with the grid variables to generate semantic CSS for individual grid columns.

```scss
// Creates a wrapper for a series of columns
@include make-row();

// Make the element grid-ready (applying everything but the width)
@include make-col-ready();

// Without optional size values, the mixin will create equal columns (similar to using .col)
@include make-col();
@include make-col($size, $columns: $grid-columns);

// Offset with margins
@include make-col-offset($size, $columns: $grid-columns);
```
<br>

### Example usage
You can modify the variables to your own custom values, or just use the mixins with their default values. 
Here's an example of using the default settings to create a two-column layout with a gap between.

```scss
.example-container {
  @include make-container();
  // Make sure to define this width after the mixin to override
  // `width: 100%` generated by `make-container()`
  width: 800px;
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
```
<br>

{{< example >}}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Main content</div>
    <div class="example-content-secondary">Secondary content</div>
  </div>
</div>
{{< /example >}}

## Customizing the grid

Using our built-in grid Sass variables and maps, it's possible to completely customize the predefined grid classes. 
Change the number of tiers, the media query dimensions, and the container widths—then recompile.

### Columns and gutters

The number of grid columns can be modified via Sass variables. `$grid-columns` is used to generate the widths 
(in percent) of each individual column while `$grid-gutter-width` sets the width for the column gutters. 
`$grid-row-columns` is used to set the maximum number of columns of `.row-cols-*`, any number over this limit 
is ignored.

```scss
$grid-columns: 12 !default;
$grid-gutter-width: 1.5rem !default;
$grid-row-columns: 6 !default;
```
<br>

### Grid tiers
Moving beyond the columns themselves, you may also customize the number of grid tiers. If you wanted just four 
grid tiers, you'd update the `$grid-breakpoints` and `$container-max-widths` to something like this:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
```

When making any changes to the Sass variables or maps, you'll need to save your changes and recompile. 
Doing so will output a brand-new set of predefined grid classes for column widths, offsets, and ordering. 
Responsive visibility utilities will also be updated to use the custom breakpoints. Make sure to set grid 
values in `px` (not `rem`, `em`, or `%`).