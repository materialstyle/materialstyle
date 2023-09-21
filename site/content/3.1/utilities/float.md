---
layout: docs
title: Float
group: utilities
toc: true
keywords: utilities, float
description: Toggle floats on any element, across any breakpoint, using our responsive float utilities.
---

## Overview
These utility classes float an element to the left or right, or disable floating, based on the current viewport 
size using the [CSS `float` property](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` is 
included to avoid specificity issues. These use the same viewport breakpoints as our grid system. Please be aware 
float utilities have no effect on flex items.

{{< example codeId="code1" >}}

<div class="float-start">Float start on all viewport sizes</div><br>
<div class="float-end">Float end on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>

{{< /example >}}

## Responsive
Responsive variations also exist for each `float` value.

{{< example codeId="code2" >}}

<div class="float-sm-end">Float end on viewports sized SM (small) or wider</div><br>
<div class="float-md-end">Float end on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-end">Float end on viewports sized LG (large) or wider</div><br>
<div class="float-xl-end">Float end on viewports sized XL (extra large) or wider</div><br>
<div class="float-xxl-end">Float end on viewports sized XXL (extra extra large) or wider</div><br>

{{< /example >}}

Here are all the support classes:

- `.float-start`
- `.float-end`
- `.float-none`
- `.float-sm-start`
- `.float-sm-end`
- `.float-sm-none`
- `.float-md-start`
- `.float-md-end`
- `.float-md-none`
- `.float-lg-start`
- `.float-lg-end`
- `.float-lg-none`
- `.float-xl-start`
- `.float-xl-end`
- `.float-xl-none`
- `.float-xxl-start`
- `.float-xxl-end`
- `.float-xxl-none`
