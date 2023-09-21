---
layout: docs
title: Focus ring
group: helpers
toc: true
keywords: helpers, focus ring
description: Utility classes that allows you to add and modify custom focus ring styles to elements and components.
---

The `.focus-ring` helper removes the default `outline` on `:focus`, replacing it with a `box-shadow` that can be 
more broadly customized. The new shadow is made up of a series of CSS variables, inherited from the `:root` level, 
that can be modified for any element or component.

## Example

Click directly on the link below to see the focus ring in action, or into the example below and then press 
<kbd>Tab</kbd>.

{{< example codeId="code1" >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2">
  Custom focus ring
</a>
{{< /example >}}

## Customize

Modify the styling of a focus ring with our CSS variables, Sass variables, utilities, or custom styles.

### CSS variables

Modify the `--bs-focus-ring-*` CSS variables as needed to change the default appearance.

{{< example codeId="code2" >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
   style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
  Green focus ring
</a>
{{< /example >}}

`.focus-ring` sets styles via global CSS variables that can be overridden on any parent element, as shown above. 
These variables are generated from their Sass variable counterparts.

{{< scss-docs name="root-focus-variables" file="scss/_root.scss" >}}

By default, there is no `--bs-focus-ring-x`, `--bs-focus-ring-y`, or `--bs-focus-ring-blur`, but we provide CSS 
variables with fallbacks to initial `0` values. Modify them to change the default appearance.

{{< example codeId="code3" >}}
<a href="#" class="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2" 
   style="--bs-focus-ring-x: 10px; --bs-focus-ring-y: 10px; --bs-focus-ring-blur: 4px">
  Blurry offset focus ring
</a>
{{< /example >}}

### Sass variables

Customize the focus ring Sass variables to modify all usage of the focus ring styles across your Material 
Style-powered project.

{{< scss-docs name="focus-ring-variables" file="scss/_variables.scss" >}}
<br>

### Sass utilities API

In addition to `.focus-ring`, we have several `.focus-ring-*` utilities to modify the helper class defaults. 
Modify the color with any of our [theme colors]({{< docsref "/customize/theme-colors" >}}). Note that the light 
and dark variants may not be visible on all background colors given current color mode support.

{{< example codeId="code4" >}}
<p><a href="#" class="d-inline-flex focus-ring focus-ring-primary py-1 px-2 text-decoration-none border rounded-2">Primary focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2">Secondary focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-tertiary py-1 px-2 text-decoration-none border rounded-2">Tertiary focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-success py-1 px-2 text-decoration-none border rounded-2">Success focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-danger py-1 px-2 text-decoration-none border rounded-2">Danger focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2">Warning focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">Info focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none border rounded-2">Light focus</a></p>
<p><a href="#" class="d-inline-flex focus-ring focus-ring-dark py-1 px-2 text-decoration-none border rounded-2">Dark focus</a></p>
{{< /example >}}

Focus ring utilities are declared in our utilities API in `scss/_utilities.scss`. 
[Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-focus-ring" file="scss/_utilities.scss" >}}
