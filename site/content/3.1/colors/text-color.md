---
layout: docs
title: Text color
group: colors
toc: true
keywords: colors, text color
---

{{< example codeId="code1" class="d-flex flex-column gap-2" >}}

<label class="text-body">.text-body</label>
##split##
<label class="text-white bg-black">.text-white</label>
##split##
<label class="text-black bg-white">.text-black</label>

{{< /example >}}

## Theme colored text
You can use the ```.text-*``` classes to colorize links.

{{< example codeId="code2" class="d-flex flex-column gap-2" >}}

<label class="text-primary">.text-primary</label>
##split##
<label class="text-primary-emphasis">.text-primary-emphasis</label>
##split##
<label class="text-secondary">.text-secondary</label>
##split##
<label class="text-secondary-emphasis">.text-secondary-emphasis</label>
##split##
<label class="text-tertiary">.text-tertiary</label>
##split##
<label class="text-tertiary-emphasis">.text-tertiary-emphasis</label>
##split##
<label class="text-success">.text-success</label>
##split##
<label class="text-success-emphasis">.text-success-emphasis</label>
##split##
<label class="text-danger">.text-danger</label>
##split##
<label class="text-danger-emphasis">.text-danger-emphasis</label>
##split##
<label class="text-warning">.text-warning</label>
##split##
<label class="text-warning-emphasis">.text-warning-emphasis</label>
##split##
<label class="text-info">.text-info</label>
##split##
<label class="text-info-emphasis">.text-info-emphasis</label>
##split##
<label class="text-light">.text-light</label>
##split##
<label class="text-light-emphasis">.text-light-emphasis</label>
##split##
<label class="text-dark">.text-dark</label>
##split##
<label class="text-dark-emphasis">.text-dark-emphasis</label>

{{< /example >}}

## Opacity
Consider our default ```.text-primary``` utility.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

We use an RGB version of our ```--bs-primary``` (with the value of ```66, 99, 235```) CSS variable 
and attached a second CSS variable, ```--bs-text-opacity```, for the alpha transparency 
(with a default value ```1``` thanks to a local CSS variable). That means anytime you use 
```.text-primary``` now, your computed ```color``` value is ```rgba(66, 99, 235, 1)```. 
The local CSS variable inside each ```.text-*``` class avoids inheritance issues so nested 
instances of the utilities don’t automatically have a modified alpha transparency.

To change that opacity, override ```--bs-text-opacity``` via custom styles or inline styles.

{{< example codeId="code3" class="d-flex flex-column" >}}

<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>

{{< /example >}}

Or, choose from any of the ```.text-opacity``` utilities:

{{< example codeId="code4" class="d-flex flex-column" >}}

<div class="text-primary">This is default primary text</div>
<div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div class="text-primary text-opacity-25">This is 25% opacity primary text</div>

{{< /example >}}
