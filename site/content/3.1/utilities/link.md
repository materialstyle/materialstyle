---
layout: docs
title: Link
group: utilities
toc: true
keywords: utilities, colors, link
---

<p class="fs-4 ms-0 mb-4 page-description">
 Link utilities are used to stylize your anchors to adjust their color, opacity, underline offset, 
 underline color, and more.
</p>

## Default link
{{< example codeId="code1" class="d-flex justify-content-center" >}}

<a href="#">Default link</a>

{{< /example >}}

## Colored links
You can use the ```.link-*``` classes to colorize links.

{{< example codeId="code2" class="d-flex justify-content-center flex-wrap gap-3" >}}

<a href="#" class="link-primary">Primary link</a>
##split##
<a href="#" class="link-secondary">Secondary link</a>
##split##
<a href="#" class="link-tertiary">Tertiary link</a>
##split##
<a href="#" class="link-success">Success link</a>
##split##
<a href="#" class="link-danger">Danger link</a>
##split##
<a href="#" class="link-warning">Warning link</a>
##split##
<a href="#" class="link-info">Info link</a>
##split##
<a href="#" class="link-light">Light link</a>
##split##
<a href="#" class="link-dark">Dark link</a>

{{< /example >}}

## Link opacity

Change the alpha opacity of the link `rgba()` color value with utilities. Please be aware that changes to a 
color's opacity can lead to links with *insufficient* contrast.

{{< example codeId="code3" >}}
<p><a class="link-opacity-10" href="#">Link opacity 10</a></p>
<p><a class="link-opacity-25" href="#">Link opacity 25</a></p>
<p><a class="link-opacity-50" href="#">Link opacity 50</a></p>
<p><a class="link-opacity-75" href="#">Link opacity 75</a></p>
<p><a class="link-opacity-100" href="#">Link opacity 100</a></p>
{{< /example >}}

You can even change the opacity level on hover.

{{< example codeId="code4" >}}
<p><a class="link-opacity-10-hover" href="#">Link hover opacity 10</a></p>
<p><a class="link-opacity-25-hover" href="#">Link hover opacity 25</a></p>
<p><a class="link-opacity-50-hover" href="#">Link hover opacity 50</a></p>
<p><a class="link-opacity-75-hover" href="#">Link hover opacity 75</a></p>
<p><a class="link-opacity-100-hover" href="#">Link hover opacity 100</a></p>
{{< /example >}}

## Link underlines

### Underline color

Change the underline's color independent of the link text color.

{{< example codeId="code5" >}}
<p><a href="#" class="link-underline-primary">Primary underline</a></p>
<p><a href="#" class="link-underline-secondary">Secondary underline</a></p>
<p><a href="#" class="link-underline-success">Success underline</a></p>
<p><a href="#" class="link-underline-danger">Danger underline</a></p>
<p><a href="#" class="link-underline-warning">Warning underline</a></p>
<p><a href="#" class="link-underline-info">Info underline</a></p>
<p><a href="#" class="link-underline-light">Light underline</a></p>
<p><a href="#" class="link-underline-dark">Dark underline</a></p>
{{< /example >}}

### Underline offset

Change the underline's distance from your text. Offset is set in `em` units to automatically scale with the element's current `font-size`.

{{< example codeId="code6" >}}
<p><a href="#">Default link</a></p>
<p><a class="link-offset-1" href="#">Offset 1 link</a></p>
<p><a class="link-offset-2" href="#">Offset 2 link</a></p>
<p><a class="link-offset-3" href="#">Offset 3 link</a></p>
{{< /example >}}

### Underline opacity

Change the underline's opacity. Requires adding `.link-underline` to first set an `rgba()` color we use to then modify the alpha opacity.

{{< example codeId="code7" >}}
<p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-10" href="#">Underline opacity 10</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-25" href="#">Underline opacity 25</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-50" href="#">Underline opacity 50</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-75" href="#">Underline opacity 75</a></p>
<p><a class="link-offset-2 link-underline link-underline-opacity-100" href="#">Underline opacity 100</a></p>
{{< /example >}}

### Hover variants

Just like the `.link-opacity-*-hover` utilities, `.link-offset` and `.link-underline-opacity` utilities include `:hover` variants by default. Mix and match to create unique link styles.

{{< example codeId="code8" >}}
<a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
  Underline opacity 0
</a>
{{< /example >}}
