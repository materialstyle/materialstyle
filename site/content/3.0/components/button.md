---
layout: docs
title: Button
group: components
toc: true
---

# Button

{{< callout info >}}
{{< partial "callout-info-requiresjavascript.md" >}}
{{< /callout >}}

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
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-text-green m-1">
  Icon <i class="bi bi-star-fill"></i>
</button>
##split##
<button type="button" class="btn btn-text-green btn-lg m-1">
  Large
</button>
##split##
<button type="button" class="btn btn-text-green btn-sm m-1">
  Small
</button>
##split##
<button type="button" class="btn btn-text-green m-1" disabled>
  Disabled
</button>
        
{{< /example >}}

## Horizontal Button group
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

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
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

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

## Javascript
```javascript
// Add Ripple to buttons
var buttonList = [].slice.call(document.querySelectorAll('.btn'))
buttonList.map(function (button) {
  new materialstyle.Ripple(button)
})
```

<br>

### With jQuery
```javascript
// Add Ripple to buttons
$('.btn').ripple();
```
