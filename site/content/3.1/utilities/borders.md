---
layout: docs
title: Borders
group: utilities
toc: true
keywords: utilities, borders
description: Use border utilities to quickly style the border and border-radius of an element.
---

## Border
### Add borders
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap gap-4 border-example" >}}

<span class="border"></span>
<span class="border-top"></span>
<span class="border-end"></span>
<span class="border-bottom"></span>
<span class="border-start"></span>

{{< /example >}}

### Remove borders
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap gap-4 border-example" >}}

<span class="border border-0"></span>
<span class="border border-top-0"></span>
<span class="border border-end-0"></span>
<span class="border border-bottom-0"></span>
<span class="border border-start-0"></span>

{{< /example >}}

### Color options
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example-text" >}}

<span class="border border-primary">border-primary</span>
<span class="border border-primary-subtle">border-primary-subtle</span>
<span class="border border-secondary">border-secondary</span>
<span class="border border-secondary-subtle">border-secondary-subtle</span>
<span class="border border-tertiary">border-tertiary</span>
<span class="border border-tertiary-subtle">border-tertiary-subtle</span>
<span class="border border-success">border-success</span>
<span class="border border-success-subtle">border-success-subtle</span>
<span class="border border-danger">border-danger</span>
<span class="border border-danger-subtle">border-danger-subtle</span>
<span class="border border-warning">border-warning</span>
<span class="border border-warning-subtle">border-warning-subtle</span>
<span class="border border-info">border-info</span>
<span class="border border-info-subtle">border-info-subtle</span>
<span class="border border-light">border-light</span>
<span class="border border-light-subtle">border-light-subtle</span>
<span class="border border-dark">border-dark</span>
<span class="border border-dark-subtle">border-dark-subtle</span>
<span class="border border-black">border-black</span>
<span class="border border-white">border-white</span>

{{< /example >}}

### Opacity
border-{color} utilities are generated with Sass using CSS variables. This allows for real-time color changes 
without compilation and dynamic alpha transparency changes.

Consider our default `.border-tertiary` utility.

```css
.border-tertiary {
  --bs-border-opacity: 1;
  border-color: rgba(var(--bs-tertiary-rgb), var(--bs-border-opacity)) !important;
}
```

We used an RGB version of our `--bs-tertiary` (with the value of `214, 51, 132` in light mode and `228, 122, 175` 
in dark mode) CSS variable and attached a second CSS variable, `--bs-border-opacity`, for the alpha transparency 
(with a default value `1` thanks to a local CSS variable). That means anytime you use `.border-tertiary` now, 
your computed color value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.border-*` class avoids 
inheritance issues so nested instances of the utilities don’t automatically have a modified alpha transparency.

To change that opacity, override `--bs-border-opacity` via custom styles or inline styles.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example-text" >}}

<div class="border border-tertiary">This is default tertiary border</div>
<div class="border border-tertiary" style="--bs-border-opacity: .5;">This is 50% opacity tertiary border</div>

{{< /example >}}

Or, choose from any of the `.border-opacity` utilities:

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example-text" >}}

<div class="border border-tertiary">This is default tertiary border</div>
<div class="border border-tertiary border-opacity-75">This is 75% opacity tertiary border</div>
<div class="border border-tertiary border-opacity-50">This is 50% opacity tertiary border</div>
<div class="border border-tertiary border-opacity-25">This is 25% opacity tertiary border</div>
<div class="border border-tertiary border-opacity-10">This is 10% opacity tertiary border</div>

{{< /example >}}

### Width

{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example" >}}

<span class="border border-1"></span>
<span class="border border-2"></span>
<span class="border border-3"></span>
<span class="border border-4"></span>
<span class="border border-5"></span>

{{< /example >}}

## Border Radius

{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example" >}}

<span class="rounded"></span>
<span class="rounded-top"></span>
<span class="rounded-end"></span>
<span class="rounded-bottom"></span>
<span class="rounded-start"></span>
<span class="rounded-circle"></span>
<span class="rounded-pill"></span>

{{< /example >}}

### Sizes

{{< example codeId="code8" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example" >}}

<span class="rounded-0"></span>
<span class="rounded-1"></span>
<span class="rounded-2"></span>
<span class="rounded-3"></span>
<span class="rounded-4"></span>
<span class="rounded-5"></span>

{{< /example >}}

{{< example codeId="code9" class="d-flex justify-content-center align-items-center flex-wrap gap-2 border-example" >}}

<span class="rounded-bottom-1"></span>
<span class="rounded-start-2"></span>
<span class="rounded-end-circle"></span>
<span class="rounded-start-pill"></span>
<span class="rounded-5 rounded-top-0"></span>

{{< /example >}}