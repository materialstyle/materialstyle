---
layout: docs
title: Theming
group: colors
toc: true
keywords: colors, theming
---

<p class="fs-4 ms-0 mb-4 page-description">
Customize the default theme colors to better reflect your product's brand.
</p>

There are two ways to customize the default Material Style theme colors.
1. Using Sass
2. Using CSS Variables

## Sass
The easiest way to customize the theme colors is to override the Sass variables as described in the [Sass customization docs]({{< docsref "/customize/sass" >}}).

All you have to do is override the theme color variable. Add the following to your custom Sass file:

```scss
// Default variable overrides

// Change the primary color to Purple
$primary: #6f42c1;
```

And there you go! Theme color variants are automatically generated and are adaptive to color modes.

<a target="_blank" href="https://github.com/materialstyle/materialstyle-examples" class="text-decoration-none text-dark">
  <div class="d-flex align-items-center callout primary my-4 rounded-3 overflow-hidden">
    <div class="d-flex align-items-center align-self-stretch callout-icon p-3 fs-4">
      <i class="bi bi-box-arrow-up-right"></i>
    </div>
    <div class="flex-grow-1 p-3 text-body">
      Head over to our <b>Material Style Examples</b> repository for examples on Sass customization.
    </div>
  </div>
</a>

## CSS Variables

If you wish to use CSS variables to update a theme color, you have to manually specify color values for each of the available variant of the theme color.

Example: to change the Primary theme color to Purple add this to your CSS file.
```css
:root, [data-bs-theme="light"] {
  --bs-primary: #6f42c1;
  --bs-primary-rgb: 111, 66, 193;
  --bs-primary-hover: #5e38a4;
  --bs-primary-active: #59359a;
  --bs-primary-subtle: #e2d9f3;
  --bs-primary-subtle-hover: #cdbde9;
  --bs-primary-subtle-active: #c5b3e6;
  --bs-primary-emphasis: #432874;
  --bs-primary-emphasis-hover: #321e57;
  --bs-text-on-primary: #fff;
  --bs-primary-border-subtle: #c5b3e6;
}

[data-bs-theme="dark"] {
  --bs-primary: #a184d7;
  --bs-primary-rgb: 161, 132, 215;
  --bs-primary-hover: #b49ddf;
  --bs-primary-active: #bda9e3;
  --bs-primary-subtle: #2c1a4d;
  --bs-primary-subtle-hover: #321e57;
  --bs-primary-subtle-active: #432874;
  --bs-primary-emphasis: #beaae3;
  --bs-primary-emphasis-hover: #b7a1e0;
  --bs-text-on-primary: #000;
  --bs-primary-border-subtle: #432874;
}
```
