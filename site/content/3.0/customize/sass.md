---
layout: docs
title: Sass
group: customize
toc: true
keywords: customize, sass
---

<p class="fs-4 ms-0 mb-4 page-description">
Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project. 
</p>

## File structure

Whenever possible, avoid modifying Material Style's core files. For Sass, that means creating your own stylesheet that imports Material Style so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a file structure that looks like this:

```text
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── @materialstyle
        └── materialstyle
            ├── js
            └── scss
```

<br>

## Importing

In your `custom.scss`, you'll import Material Style's source Sass files. You have two options: include all of Material Style, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.

### Include all of Material Style
```scss
// Custom.scss

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/@materialstyle/materialstyle/scss/materialstyle";

// Then add additional custom code here
```
<br>

### Include parts of Material Style
```scss
// Custom.scss

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/@materialstyle/materialstyle/scss/functions";

// 2. Include any default variable overrides here

// 3. Include variables (including any separate color mode stylesheets)
@import "../node_modules/@materialstyle/materialstyle/scss/variables";
@import "../node_modules/@materialstyle/materialstyle/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "../node_modules/@materialstyle/materialstyle/scss/maps";
@import "../node_modules/@materialstyle/materialstyle/scss/mixins";
@import "../node_modules/@materialstyle/materialstyle/scss/root";

// 6. Optionally include any other parts as needed
@import "../node_modules/@materialstyle/materialstyle/scss/utilities";
@import "../node_modules/@materialstyle/materialstyle/scss/reboot";
@import "../node_modules/@materialstyle/materialstyle/scss/type";
@import "../node_modules/@materialstyle/materialstyle/scss/images";
@import "../node_modules/@materialstyle/materialstyle/scss/containers";
@import "../node_modules/@materialstyle/materialstyle/scss/grid";
@import "../node_modules/@materialstyle/materialstyle/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "../node_modules/@materialstyle/materialstyle/scss/utilities/api";

// 8. Add additional custom code here

```

<br>

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Material Style under the `// Optional` section as needed. We suggest using the full import stack from our `materialstyle.scss` file as your starting point.

## Variable defaults

Every Sass variable in Material Style includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying Material Style's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values in Material Style.

You will find the complete list of Material Style's variables in `scss/_variables.scss`. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.

Variable overrides must come after our functions are imported, but before the rest of the imports.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling Material Style via npm:

```scss
// Required
@import "../node_modules/@materialstyle/materialstyle/scss/functions";

// Default variable overrides
$body-bg: #000;
$body-color: #111;

// Required
@import "../node_modules/@materialstyle/materialstyle/scss/variables";
@import "../node_modules/@materialstyle/materialstyle/scss/variables-dark";
@import "../node_modules/@materialstyle/materialstyle/scss/maps";
@import "../node_modules/@materialstyle/materialstyle/scss/mixins";
@import "../node_modules/@materialstyle/materialstyle/scss/root";

// Optional components here
@import "../node_modules/@materialstyle/materialstyle/scss/reboot";
@import "../node_modules/@materialstyle/materialstyle/scss/type";
// etc
```

<a target="_blank" href="https://github.com/materialstyle/materialstyle-examples" class="text-decoration-none text-dark">
  <div class="d-flex align-items-center callout primary my-4 rounded-3 overflow-hidden">
    <div class="d-flex align-items-center align-self-stretch callout-icon p-3 fs-4">
      <i class="bi bi-box-arrow-up-right"></i>
    </div>
    <div class="flex-grow-1 p-3 text-body">
      Head over to our <b>Material Style Examples</b> repository for examples on Webpack, Parcel & Vite.
    </div>
  </div>
</a>

## Maps and loops

Material Style includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making _removing_ items from a map slightly more difficult.

### Modify map

All variables in the `$theme-colors` map are defined as standalone variables. To modify an existing color in our `$theme-colors` map, add the following to your custom Sass file:

```scss
$primary: #6e00c1;
$danger: #ff4136;
```

Later on, these variables are set in Material Style's `$theme-colors` map:

```scss
$theme-colors: (
  "primary": $primary,
  "danger": $danger
);
```
<br>

### Add to map

Add new colors to `$theme-colors`, or any other map, by creating a new Sass map with your custom values and merging it with the original map. In this case, we'll create a new `$custom-colors` map and merge it with `$theme-colors`.

```scss
// Create your own map
$custom-colors: (
  "custom-color": #900
);

// Merge the maps
$theme-colors: map-merge($theme-colors, $custom-colors);
```
<br>

### Remove from map

To remove colors from `$theme-colors`, or any other map, use `map-remove`. Be aware you must insert `$theme-colors` between our requirements just after its definition in `variables` and before its usage in `maps`:

```scss
// Required
@import "../node_modules/@materialstyle/materialstyle/scss/functions";
@import "../node_modules/@materialstyle/materialstyle/scss/variables";
@import "../node_modules/@materialstyle/materialstyle/scss/variables-dark";

$theme-colors: map-remove($theme-colors, "info", "light", "dark");

@import "../node_modules/@materialstyle/materialstyle/scss/maps";
@import "../node_modules/@materialstyle/materialstyle/scss/mixins";
@import "../node_modules/@materialstyle/materialstyle/scss/root";

// Optional
@import "../node_modules/@materialstyle/materialstyle/scss/reboot";
@import "../node_modules/@materialstyle/materialstyle/scss/type";
// etc
```
<br>

## Required keys

Material Style assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map's key is being used.

For example, we use the `primary`, `success`, and `danger` keys from `$theme-colors` for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values.

## Functions

### Colors

You can lighten or darken colors with Material Styles's `tint-color()` and `shade-color()` functions. These functions will mix colors with black or white, unlike Sass' native `lighten()` and `darken()` functions which will change the lightness by a fixed amount, which often doesn't lead to the desired effect.

{{< scss-docs name="color-functions" file="scss/_functions.scss" >}}

In practice, you'd call the function and pass in the color and weight parameters.

```scss
.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}
```
<br>

### Color contrast

In order to meet the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/) contrast requirements, authors **must** provide a minimum [text color contrast of 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) and a minimum [non-text color contrast of 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast), with very few exceptions.

To help with this, we included the `color-contrast` function in Material Style. It uses the [WCAG contrast ratio algorithm](https://www.w3.org/TR/WCAG/#dfn-contrast-ratio) for calculating contrast thresholds based on [relative luminance](https://www.w3.org/TR/WCAG/#dfn-relative-luminance) in an `sRGB` color space to automatically return a light (`#fff`), dark (`#212529`) or black (`#000`) contrast color based on the specified base color. This function is especially useful for mixins or loops where you're generating multiple classes.

For example, to generate color swatches from our `$theme-colors` map:

```scss
@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

It can also be used for one-off contrast needs:

```scss
.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
```

You can also specify a base color with our color map functions:

```scss
.custom-element {
  color: color-contrast($dark); // returns `color: #fff`
}
```
<br>

### Escape SVG

We use the `escape-svg` function to escape the `<`, `>` and `#` characters for SVG background images. When using the `escape-svg` function, data URIs must be quoted.

### Add and Subtract functions

We use the `add` and `subtract` functions to wrap the CSS `calc` function. The primary purpose of these functions is to avoid errors when a "unitless" `0` value is passed into a `calc` expression. Expressions like `calc(10px - 0)` will return an error in all browsers, despite being mathematically correct.

Example where the calc is valid:

```scss
$border-radius: .25rem;
$border-width: 1px;

.element {
  // Output calc(.25rem - 1px) is valid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output the same calc(.25rem - 1px) as above
  border-radius: subtract($border-radius, $border-width);
}
```

Example where the calc is invalid:

```scss
$border-radius: .25rem;
$border-width: 0;

.element {
  // Output calc(.25rem - 0) is invalid
  border-radius: calc($border-radius - $border-width);
}

.element {
  // Output .25rem
  border-radius: subtract($border-radius, $border-width);
}
```
<br>

## Mixins

Our `scss/mixins/` directory has a ton of mixins that power parts of Material Style and can also be used across your own project.

### Color schemes

A shorthand mixin for the `prefers-color-scheme` media query is available with support for `light`, `dark`, and custom color schemes. See [the color modes documentation]({{< docsref "/colors/color-modes" >}}) for information on our color mode mixin.

{{< scss-docs name="mixin-color-scheme" file="scss/mixins/_color-scheme.scss" >}}
<br>

```scss
.custom-element {
  @include color-scheme(dark) {
    // Insert dark mode styles here
  }

  @include color-scheme(custom-named-scheme) {
    // Insert custom color scheme styles here
  }
}
```
