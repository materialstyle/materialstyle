---
layout: docs
title: Components
group: customize
toc: true
keywords: customize, components
---

## Base classes

Material Style's components are largely built with a base-modifier nomenclature. We group as many shared properties as possible into a base class, like `.btn`, and then group individual styles for each variant into modifier classes, like `.btn-primary` or `.btn-success`.

To build our modifier classes, we use Sass's `@each` loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our `$theme-colors` and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you'll automatically see your changes reflected in these loops.

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to customize these loops and extend Material Style's base-modifier approach to your own code.

## Modifiers

Many of Material Style's components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., `.btn`) while style variations are confined to modifier classes (e.g., `.btn-danger`). These modifier classes are built from the `$theme-colors` map to make customizing the number and name of our modifier classes.

Here are two examples of how we loop over the `$theme-colors` map to generate modifiers to the `.alert` and `.list-group` components.

{{< scss-docs name="alert-modifiers" file="scss/_alert.scss" >}}
<br>

{{< scss-docs name="list-group-modifiers" file="scss/_list-group.scss" >}}
<br>

## Responsive

These Sass loops aren't limited to color maps, either. You can also generate responsive variations of your components. Take for example our responsive alignment of the dropdowns where we mix an `@each` loop for the `$grid-breakpoints` Sass map with a media query include.

{{< scss-docs name="responsive-breakpoints" file="scss/_dropdown.scss" >}}

Should you modify your `$grid-breakpoints`, your changes will apply to all the loops iterating over that map.

{{< scss-docs name="grid-breakpoints" file="scss/_variables.scss" >}}

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation]({{< docsref "/layout/grid#sass" >}}).

## Creating your own

We encourage you to adopt these guidelines when building with Material Style to create your own components.

In your CSS, you'd have something like the following where the bulk of the styling is done via `.callout`. Then, the unique styles between each variant is controlled via modifier class.

```scss
// Base class
.callout {}

// Modifier classes
.callout-info {}
.callout-warning {}
.callout-danger {}
```
