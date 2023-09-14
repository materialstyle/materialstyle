---
layout: docs
title: Options
group: customize
toc: true
keywords: customize, options
---

<p class="fs-4 ms-0 mb-4 page-description">
Customize Material Style with our built-in variables file and easily toggle global CSS preferences with new <code>$enable-*</code> Sass variables. Override a variable's value and recompile with <code>npm run test</code> as needed. 
</p>

You can find and customize these variables for key global options in Material Style's `scss/_variables.scss` file.

{{< bs-table >}}
| Variable                       | Values                             | Description                                                                            |
| ------------------------------ | ---------------------------------- | -------------------------------------------------------------------------------------- |
| `$spacer`                      | `1rem` (default), or any value > 0 | Specifies the default spacer value to programmatically generate our spacer utilities. |
| `$enable-dark-mode`            | `true` (default) or `false`        | Enables built-in [dark mode support]({{< docsref "/colors/color-modes#dark-mode" >}}) across the project and its components. |
| `$enable-rounded`              | `true` (default) or `false`        | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows`              | `true` or `false` (default)        | Enables predefined decorative `box-shadow` styles on various components. Does not affect `box-shadow`s used for focus states. |
| `$enable-gradients`            | `true` or `false` (default)        | Enables predefined gradients via `background-image` styles on various components. |
| `$enable-transitions`          | `true` (default) or `false`        | Enables predefined `transition`s on various components. |
| `$enable-reduced-motion`       | `true` (default) or `false`        | Enables the `prefers-reduced-motion` media query, which suppresses certain animations/transitions based on the users' browser/operating system preferences. |
| `$enable-grid-classes`         | `true` (default) or `false`        | Enables the generation of CSS classes for the grid system (e.g. `.row`, `.col-md-1`, etc.). |
| `$enable-container-classes`    | `true` (default) or `false`        | Enables the generation of CSS classes for layout containers. (New in v5.2.0) |
| `$enable-caret`                | `true` (default) or `false`        | Enables pseudo element caret on `.dropdown-toggle`. |
| `$enable-button-pointers`      | `true` (default) or `false`        | Add "hand" cursor to non-disabled button elements. |
| `$enable-rfs`                  | `true` (default) or `false`        | Globally enables RFS. |
| `$enable-validation-icons`     | `true` (default) or `false`        | Enables `background-image` icons within textual inputs and some custom forms for validation states. |
| `$enable-negative-margins`     | `true` or `false` (default)        | Enables the generation of negative margin utilities. |
| `$enable-deprecation-messages` | `true` (default) or `false`        | Set to `false` to hide warnings when using any of the deprecated mixins and functions that are planned to be removed in `v6`. |
| `$enable-important-utilities`  | `true` (default) or `false`        | Enables the `!important` suffix in utility classes. |
| `$enable-smooth-scroll`        | `true` (default) or `false`        | Applies `scroll-behavior: smooth` globally, except for users asking for reduced motion through `prefers-reduced-motion` media query. |
{{< /bs-table >}}
