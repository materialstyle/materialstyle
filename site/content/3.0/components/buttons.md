---
layout: docs
title: Buttons
group: components
toc: true
keywords: buttons
---

# Buttons

<p class="fs-4 ms-0 mb-4 text-secondary">Buttons allow users to take actions, and make choices, with a single tap.</p>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-purple m-1">
  Default
</button>
##split##
<button type="button" class="btn btn-purple m-1">
  With Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-purple btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-purple btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-purple m-1" disabled>
  Disabled
</button>

{{< /example >}}

## Color options

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-primary m-1">
  Primary | Blue
</button>
##split##
<button type="button" class="btn btn-secondary m-1">
  Secondary | Gray
</button>
##split##
<button type="button" class="btn btn-success m-1">
  Success | Green
</button>
##split##
<button type="button" class="btn btn-info m-1">
  Info | Cyan
</button>
##split##
<button type="button" class="btn btn-warning m-1">
  Warning | Yellow
</button>
##split##
<button type="button" class="btn btn-danger m-1">
  Danger | Red
</button>
##split##
<button type="button" class="btn btn-light m-1">
  Light
</button>
##split##
<button type="button" class="btn btn-dark m-1">
  Dark
</button>
##split##
<button type="button" class="btn btn-indigo m-1">
  Indigo
</button>
##split##
<button type="button" class="btn btn-purple m-1">
  Purple
</button>
##split##
<button type="button" class="btn btn-pink m-1">
  Pink
</button>
##split##
<button type="button" class="btn btn-orange m-1">
  Orange
</button>
##split##
<button type="button" class="btn btn-teal m-1">
  Teal
</button>

{{< /example >}}

## Button Link
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-link m-1">
  Link
</button>
        
{{< /example >}}

## Outlined Buttons
Add ```.btn-outline-[color]``` to create Outlined buttons.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-pink m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-outline-pink btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-outline-pink btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-outline-pink m-1" disabled>
  Disabled
</button>
        
{{< /example >}}

## Text Buttons
Add ```.border-0``` to Outlined buttons to create Text buttons.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-outline-green border-0 m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-outline-green border-0 btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-outline-green border-0 btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-outline-green border-0 m-1" disabled>
  Disabled
</button>
        
{{< /example >}}

## Ripple effect

{{< callout javascript-ripple >}}
{{< partial "callout-ripplerequiresjavascript.md" >}}
{{< /callout >}}

{{< callout ripple >}}
{{< partial "callout-rippledocs.md" >}}
{{< /callout >}}

{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

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
<button type="button" class="btn btn-outline-purple m-1">
  Outlined Button
  <span class="ripple-surface"></span>
</button>
##split##
<button type="button" class="btn btn-outline-pink border-0 m-1">
  Text Button
  <span class="ripple-surface"></span>
</button>

{{< /example >}}

## Javascript for ripple
```javascript
// Initialize Ripple
var rippleSurface = [].slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(function (s) {
  new materialstyle.Ripple(s)
})
```

<br>

### jQuery
```javascript
// Initialize Ripple
$('.ripple-surface').ripple();
```

<br>

## Horizontal Button group
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="btn-group m-1">
  <button type="button" class="btn btn-indigo">Button</button>
  <button type="button" class="btn btn-indigo">Button</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-indigo">
    Icon <i class="bi bi-star-fill"></i>
  </button>
  <button type="button" class="btn btn-indigo">
    Icon <i class="bi bi-star-fill"></i>
  </button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-indigo btn-lg">Large</button>
  <button type="button" class="btn btn-indigo btn-lg">Large</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-indigo btn-sm">Small</button>
  <button type="button" class="btn btn-indigo btn-sm">Small</button>
</div>
##split##
<div class="btn-group m-1">
  <button type="button" class="btn btn-indigo" disabled>Disabled</button>
  <button type="button" class="btn btn-indigo" disabled>Disabled</button>
</div>

{{< /example >}}

## Vertical Button group
{{< example codeId="code8" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-indigo">Button</button>
  <button type="button" class="btn btn-indigo">Button</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-indigo">
    Icon <i class="bi bi-star-fill"></i>
  </button>
  <button type="button" class="btn btn-indigo">
    Icon <i class="bi bi-star-fill"></i>
  </button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-indigo btn-lg">Large</button>
  <button type="button" class="btn btn-indigo btn-lg">Large</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-indigo btn-sm">Small</button>
  <button type="button" class="btn btn-indigo btn-sm">Small</button>
</div>
##split##
<div class="btn-group-vertical m-1">
  <button type="button" class="btn btn-indigo" disabled>Disabled</button>
  <button type="button" class="btn btn-indigo" disabled>Disabled</button>
</div>
        
{{< /example >}}
