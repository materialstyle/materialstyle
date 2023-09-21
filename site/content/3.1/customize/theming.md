---
layout: docs
title: Theming
group: customize
toc: true
keywords: customize, colors, theming
description: Personalize Material Style to align with your product's unique brand identity and style preferences.
---

## Theme Builder
At Material Style, we believe in empowering our users to create designs that are uniquely their own. That's why we've 
introduced the [Material Style Theme Builder](https://materialstyle.github.io/theme-builder), a powerful tool designed 
to simplify and enhance your theming experience. Whether you choose to customize Material Style using Sass or CSS 
variables, the Theme Builder will be your trusted companion throughout the process.

Utilize this tool to effortlessly modify **theme colors**, `border-radius`, and `border-width`, as it automatically 
generates the necessary **CSS** and **SASS** variables for you.

1. Choose the theme (primary, secondary, ...) you'd like to update.
2. Select a color for the theme.
   Note: The selected color serves as the base color for the theme in light mode and is used to generate different 
   variants of the theme (hover, active, emphasis, ...) for both light and dark modes. Ensure it maintains an 
   appropriate contrast ratio against a light background (e.g., white).
3. Adjust the `border-radius`.
4. Set the `border-width`.
5. Preview components in Light/Dark mode.
6. Copy the generated CSS/SASS into your codebase.

There are two ways to customize the default Material Style theme colors.
1. [Using Sass](#sass)
2. [Using CSS Variables](#css-variables)

<br>

## Sass
Please make sure you have gone through the [Sass customization docs]({{< docsref "/customize/sass" >}}) before proceeding.

### Modify existing theme color
All variables in the `theme-colors` map are defined as standalone variables. To modify an existing 
color, add the following to your custom Sass file:

```scss
// 2. Include any default variable overrides here

// Change the primary color to Purple
$primary: #6f42c1;
```
<br>

### Add a new theme color
Add new colors to `$theme-colors`, by creating a new Sass map with your custom values and merging 
it with the original map. In this case, we’ll create a new `$custom-colors` map and merge it with 
`$theme-colors`.

```scss
// 4. Include any default map overrides here

// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```
<br>

### Remove a theme color

To remove colors from `$theme-colors`, or any other map, use `map-remove`. 
```scss
$theme-colors: map-remove($theme-colors, "info", "light", "dark");
```
<br>

Be aware you must insert `$theme-colors` between our requirements just after its definition in 
`variables` and before its usage in `maps`:

```scss
// Custom.scss

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/@materialstyle/materialstyle/scss/functions";

// 2. Include any default variable overrides here

// 3. Include variables (including any separate color mode stylesheets)
@import "../node_modules/@materialstyle/materialstyle/scss/variables";
@import "../node_modules/@materialstyle/materialstyle/scss/variables-dark";

// 4. Include any default map overrides here
$theme-colors: map-remove($theme-colors, "info", "light", "dark");

// 5. Include remainder of required parts
@import "../node_modules/@materialstyle/materialstyle/scss/maps";
@import "../node_modules/@materialstyle/materialstyle/scss/mixins";
@import "../node_modules/@materialstyle/materialstyle/scss/root";

// 6. Optionally include any other parts as needed
```

<br>
<br>

## CSS Variables

With CSS variables, you can only **modify existing theme colors**.

To modify a theme color, you have to specify color values for each of the available variants 
of a theme (Ex: `--bs-primary-hover`, `--bs-primary-active`, `--bs-primary-subtle`, ...).
 
Utilize the [Theme Builder](https://materialstyle.github.io/theme-builder) to effortlessly modify **theme colors**, 
`border-radius`, and `border-width`, as it automatically generates the necessary **CSS** and **SASS** variables for you.

Example: To change the Primary theme color to Purple add this to your CSS file.
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

<a target="_blank" href="https://github.com/materialstyle/materialstyle-examples" class="text-decoration-none text-dark">
  <div class="d-flex align-items-center callout primary my-4 rounded-3 overflow-hidden">
    <div class="d-flex align-items-center align-self-stretch callout-icon p-3 fs-4">
      <i class="bi bi-box-arrow-up-right"></i>
    </div>
    <div class="flex-grow-1 p-3 text-body">
      Head over to our <b>Material Style Examples</b> repository for examples on Sass & CSS customization.
    </div>
  </div>
</a>
