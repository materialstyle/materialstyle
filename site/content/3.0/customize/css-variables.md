---
layout: docs
title: CSS variables
group: customize
toc: true
keywords: customize, css variables
---

<p class="fs-4 ms-0 mb-4 page-description">
Use Material Style's CSS custom properties for fast and forward-looking design and development. 
</p>

Material Style includes many [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS for real-time customization without the need to recompile Sass. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or general prototyping.

**All our custom properties are prefixed with `bs-`** to avoid conflicts with third party CSS.

## Root variables

Here are the variables we include (note that the `:root` is required) that can be accessed anywhere Material Style's CSS is loaded. They're located in our `_root.scss` file and included in our compiled dist files.

### Default

These CSS variables are available everywhere, regardless of color mode.

```css
{{< root.inline >}}
{{- $css := readFile "dist/css/materialstyle.css" -}}
{{- $match := findRE `:root,\n\[data-bs-theme=light\] {([^}]*)}` $css 1 -}}

{{- if (eq (len $match) 0) -}}
{{- errorf "Got no matches for :root in %q!" $.Page.Path -}}
{{- end -}}

{{- index $match 0 -}}

{{< /root.inline >}}
```
<br>

### Dark mode

These variables are scoped to our built-in dark mode.

```css
{{< root.inline >}}
{{- $css := readFile "dist/css/materialstyle.css" -}}
{{- $match := findRE `\[data-bs-theme=dark\] {([^}]*)}` $css 1 -}}
{{- if (eq (len $match) 0) -}}
{{- errorf "Got no matches for [data-bs-theme=dark] in %q!" $.Page.Path -}}
{{- end -}}
{{- index $match 0 -}}
{{< /root.inline >}}
```
<br>

## Component variables

Material Style is making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of our components after Sass compilation.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `bs-` (note the trailing dash).

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables.

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-tertiary);
}
```
<br>

## Focus variables

Material Style provides custom `:focus` styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all `:focus` styles.

In our Sass, we set default values that can be customized before compiling.

{{< scss-docs name="focus-ring-variables" file="scss/_variables.scss" >}}

Those variables are then reassigned to `:root` level CSS variables that can be customized in real-time, including with options for `x` and `y` offsets (which default to their fallback value of `0`).

{{< scss-docs name="root-focus-variables" file="scss/_root.scss" >}}
<br>

## Grid breakpoints

While we include our grid breakpoints as CSS variables (except for `xs`), be aware that **CSS variables do not work in media queries**. This is by design in the CSS spec for variables, but may change in coming years with support for `env()` variables. Check out [this Stack Overflow answer](https://stackoverflow.com/a/47212942) for some helpful links. In the meantime, you can use these variables in other CSS situations, as well as in your JavaScript.
