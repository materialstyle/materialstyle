---
layout: docs
title: Background color
group: utilities
toc: true
keywords: utilities, colors, background color
---

{{< example codeId="code1" class="d-flex flex-column gap-2" >}}

<div class="p-3 bg-body text-body">.bg-body</div>
##split##
<div class="p-3 bg-white text-black">.bg-white</div>
##split##
<div class="p-3 bg-black text-white">.bg-black</div>
##split##
<div class="p-3 bg-transparent text-body">.bg-transparent</div>

{{< /example >}}

## Theme colored background

{{< example codeId="code2" class="d-flex flex-column gap-2" >}}

<div class="p-3 bg-primary" style="color: var(--bs-text-on-primary);">.bg-primary</div>
##split##
<div class="p-3 bg-primary-subtle text-primary-emphasis">.bg-primary-subtle</div>
##split##
<div class="p-3 bg-secondary" style="color: var(--bs-text-on-secondary);">.bg-secondary</div>
##split##
<div class="p-3 bg-secondary-subtle text-secondary-emphasis">.bg-secondary-subtle</div>
##split##
<div class="p-3 bg-tertiary" style="color: var(--bs-text-on-tertiary);">.bg-tertiary</div>
##split##
<div class="p-3 bg-tertiary-subtle text-tertiary-emphasis">.bg-tertiary-subtle</div>
##split##
<div class="p-3 bg-success" style="color: var(--bs-text-on-success);">.bg-success</div>
##split##
<div class="p-3 bg-success-subtle text-success-emphasis">.bg-success-subtle</div>
##split##
<div class="p-3 bg-danger" style="color: var(--bs-text-on-danger);">.bg-danger</div>
##split##
<div class="p-3 bg-danger-subtle text-danger-emphasis">.bg-danger-subtle</div>
##split##
<div class="p-3 bg-warning" style="color: var(--bs-text-on-warning);">.bg-warning</div>
##split##
<div class="p-3 bg-warning-subtle text-warning-emphasis">.bg-warning-subtle</div>
##split##
<div class="p-3 bg-info" style="color: var(--bs-text-on-info);">.bg-info</div>
##split##
<div class="p-3 bg-info-subtle text-info-emphasis">.bg-info-subtle</div>
##split##
<div class="p-3 bg-light" style="color: var(--bs-text-on-light);">.bg-light</div>
##split##
<div class="p-3 bg-light-subtle text-light-emphasis">.bg-light-subtle</div>
##split##
<div class="p-3 bg-dark" style="color: var(--bs-text-on-dark);">.bg-dark</div>
##split##
<div class="p-3 bg-dark-subtle text-dark-emphasis">.bg-dark-subtle</div>

{{< /example >}}

## Gradients

By adding a ```.bg-gradient``` class, a linear gradient is added as background image to the 
backgrounds. This gradient starts with a semi-transparent white which fades out to the bottom.

Do you need a gradient in your custom CSS? Just add ```background-image: var(--bs-gradient);```.

{{< example codeId="code3" class="d-flex flex-column gap-2" >}}

<div class="p-3 bg-primary bg-gradient" style="color: var(--bs-text-on-primary);">.bg-primary.bg-gradient</div>
##split##
<div class="p-3 bg-secondary bg-gradient" style="color: var(--bs-text-on-secondary);">.bg-secondary.bg-gradient</div>
##split##
<div class="p-3 bg-tertiary bg-gradient" style="color: var(--bs-text-on-tertiary);">.bg-tertiary.bg-gradient</div>
##split##
<div class="p-3 bg-success bg-gradient" style="color: var(--bs-text-on-success);">.bg-success.bg-gradient</div>
##split##
<div class="p-3 bg-danger bg-gradient" style="color: var(--bs-text-on-danger);">.bg-danger.bg-gradient</div>
##split##
<div class="p-3 bg-warning bg-gradient" style="color: var(--bs-text-on-warning);">.bg-warning.bg-gradient</div>
##split##
<div class="p-3 bg-info bg-gradient" style="color: var(--bs-text-on-info);">.bg-info.bg-gradient</div>
##split##
<div class="p-3 bg-light bg-gradient" style="color: var(--bs-text-on-light);">.bg-light.bg-gradient</div>
##split##
<div class="p-3 bg-dark bg-gradient" style="color: var(--bs-text-on-dark);">.bg-dark.bg-gradient</div>

{{< /example >}}

## Opacity
Consider our default ```.bg-success``` utility.

```css
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```
We use an RGB version of our ```--bs-success``` (with the value of ```55, 178, 77```) CSS variable 
and attached a second CSS variable, ```--bs-bg-opacity```, for the alpha transparency 
(with a default value ```1``` thanks to a local CSS variable). That means anytime you use 
```.bg-success``` now, your computed ```color``` value is ```rgba(55, 178, 77, 1)```. 
The local CSS variable inside each ```.bg-*``` class avoids inheritance issues so nested 
instances of the utilities don’t automatically have a modified alpha transparency.

To change that opacity, override --bs-bg-opacity via custom styles or inline styles.

{{< example codeId="code4" class="d-flex flex-column" >}}

<div class="bg-success p-2 text-black">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>

{{< /example >}}

Or, choose from any of the .bg-opacity utilities:

{{< example codeId="code5" class="d-flex flex-column" >}}

<div class="bg-success p-2 text-black">This is default success background</div>
<div class="bg-success p-2 text-black bg-opacity-75">This is 75% opacity success background</div>
<div class="bg-success p-2 text-black bg-opacity-50">This is 50% opacity success background</div>
<div class="bg-success p-2 text-black bg-opacity-25">This is 25% opacity success background</div>
<div class="bg-success p-2 text-black bg-opacity-10">This is 10% opacity success background</div>

{{< /example >}}

## Background color with contrasting foreground color

{{< example codeId="code6" class="d-flex flex-column gap-2" >}}

<div class="p-3 text-bg-primary">.text-bg-primary</div>
##split##
<div class="p-3 text-bg-secondary">.text-bg-secondary</div>
##split##
<div class="p-3 text-bg-tertiary">.text-bg-tertiary</div>
##split##
<div class="p-3 text-bg-success">.text-bg-success</div>
##split##
<div class="p-3 text-bg-danger">.text-bg-danger</div>
##split##
<div class="p-3 text-bg-warning">.text-bg-warning</div>
##split##
<div class="p-3 text-bg-info">.text-bg-info</div>
##split##
<div class="p-3 text-bg-light">.text-bg-light</div>
##split##
<div class="p-3 text-bg-dark">.text-bg-dark</div>

{{< /example >}}
