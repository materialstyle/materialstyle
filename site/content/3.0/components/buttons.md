---
layout: docs
title: Buttons
group: components
toc: true
keywords: buttons
---

<p class="fs-4 ms-0 mb-4 page-description">Buttons allow users to take actions, and make choices, with a single tap.</p>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-primary m-1">
  Default
</button>
##split##
<button type="button" class="btn btn-primary m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-primary btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-primary btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-primary m-1" disabled>
  Disabled
</button>

{{< /example >}}

## Elevated buttons
Add ```.elevated-[1 to 10]``` to create Elevated buttons.

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap gap-3">}}

<button type="button" class="btn btn-primary elevated-1">
  Elevated 1
</button>
##split##
<button type="button" class="btn btn-primary elevated-10">
  Elevated 10
</button>

{{< /example >}}

## Button Link
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-link m-1">
  Link
</button>
##split##
<button type="button" class="btn btn-link m-1" disabled>
  Disabled Link
</button>

{{< /example >}}

## Outlined Buttons
Add ```.btn-outline-[color]``` to create Outlined buttons.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-primary m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-outline-primary btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-outline-primary btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-outline-primary m-1" disabled>
  Disabled
</button>
        
{{< /example >}}

## Text Buttons
Add ```.border-0``` to Outlined buttons to create Text buttons.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-primary border-0 m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-outline-primary border-0 btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-outline-primary border-0 btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-outline-primary border-0 m-1" disabled>
  Disabled
</button>
        
{{< /example >}}

## Color options
### Default
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-primary m-1">
  Primary
</button>
##split##
<button type="button" class="btn btn-secondary m-1">
  Secondary
</button>
##split##
<button type="button" class="btn btn-success m-1">
  Success
</button>
##split##
<button type="button" class="btn btn-danger m-1">
  Danger
</button>
##split##
<button type="button" class="btn btn-warning m-1">
  Warning
</button>
##split##
<button type="button" class="btn btn-info m-1">
  Info
</button>
##split##
<button type="button" class="btn btn-light m-1">
  Light
</button>
##split##
<button type="button" class="btn btn-dark m-1">
  Dark
</button>

{{< /example >}}

### Outlined
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-primary m-1">
  Primary
</button>
##split##
<button type="button" class="btn btn-outline-secondary m-1">
  Secondary
</button>
##split##
<button type="button" class="btn btn-outline-success m-1">
  Success
</button>
##split##
<button type="button" class="btn btn-outline-danger m-1">
  Danger
</button>
##split##
<button type="button" class="btn btn-outline-warning m-1">
  Warning
</button>
##split##
<button type="button" class="btn btn-outline-info m-1">
  Info
</button>
##split##
<button type="button" class="btn btn-outline-light m-1">
  Light
</button>
##split##
<button type="button" class="btn btn-outline-dark m-1">
  Dark
</button>

{{< /example >}}

### Text
{{< example codeId="code8" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-primary border-0 m-1">
  Primary
</button>
##split##
<button type="button" class="btn btn-outline-secondary border-0 m-1">
  Secondary
</button>
##split##
<button type="button" class="btn btn-outline-success border-0 m-1">
  Success
</button>
##split##
<button type="button" class="btn btn-outline-danger border-0 m-1">
  Danger
</button>
##split##
<button type="button" class="btn btn-outline-warning border-0 m-1">
  Warning
</button>
##split##
<button type="button" class="btn btn-outline-info border-0 m-1">
  Info
</button>
##split##
<button type="button" class="btn btn-outline-light border-0 m-1">
  Light
</button>
##split##
<button type="button" class="btn btn-outline-dark border-0 m-1">
  Dark
</button>

{{< /example >}}

## Ripple effect

{{< callout javascript-ripple >}}
{{< partial "callout-ripplerequiresjavascript.md" >}}
{{< /callout >}}

{{< callout ripple >}}
{{< partial "callout-rippledocs.md" >}}
{{< /callout >}}

{{< example codeId="code9" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-success m-1">
  Success | Green
  <span class="ripple-surface"></span>
</button>
##split##
<button type="button" class="btn btn-warning m-1">
  Warning | Yellow
  <span class="ripple-surface"></span>
</button>
##split##
<button type="button" class="btn btn-outline-danger m-1">
  Outlined Button
  <span class="ripple-surface"></span>
</button>
##split##
<button type="button" class="btn btn-outline-primary border-0 m-1">
  Text Button
  <span class="ripple-surface"></span>
</button>

{{< /example >}}

## Javascript for ripple
```javascript
// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
})
```

<br>

## Horizontal Button group
{{< example codeId="code10" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="btn-group m-1">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-primary">
    Icon <i class="bi bi-star-fill"></i>
  </button>
  <button type="button" class="btn btn-primary">
    Icon <i class="bi bi-star-fill"></i>
  </button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-primary btn-lg">Large</button>
  <button type="button" class="btn btn-primary btn-lg">Large</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-primary btn-sm">Small</button>
  <button type="button" class="btn btn-primary btn-sm">Small</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-primary" disabled>Disabled</button>
  <button type="button" class="btn btn-primary" disabled>Disabled</button>
</div>

{{< /example >}}

## Vertical Button group
{{< example codeId="code11" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-primary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-primary">
    Icon <i class="bi bi-star-fill"></i>
  </button>
  <button type="button" class="btn btn-primary">
    Icon <i class="bi bi-star-fill"></i>
  </button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-primary btn-lg">Large</button>
  <button type="button" class="btn btn-primary btn-lg">Large</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-primary btn-sm">Small</button>
  <button type="button" class="btn btn-primary btn-sm">Small</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-primary" disabled>Disabled</button>
  <button type="button" class="btn btn-primary" disabled>Disabled</button>
</div>
        
{{< /example >}}
