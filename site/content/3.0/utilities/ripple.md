---
layout: docs
title: Ripple
group: utilities
toc: true
keywords: utilities, ripple
---

# Ripple

Ripples are visual representations used to communicate the status of a component or interactive element.

To add Ripple to your component:
1. Add Ripple surface (```<span class="ripple-surface"></span>```) to your component.
2. Set the position of your component to either ```relative```, ```absolute```, ```fixed```, or ```sticky``` 
(In other words, anything except ```static```), since a Ripple surface is ```absolute``` positioned.
3. Initialize the Ripple surface with Javascript to get the Ripple effect.

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

## On Buttons
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

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

## On Tabs
{{< example codeId="code2" >}}

<ul class="nav nav-tabs nav-justified primary-indigo base-pink" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple">
      Apple
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot">
      Apricot
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado">
      Avocado
      <span class="ripple-surface"></span>
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="apple">Apple</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="apricot">Apricot</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="avocado">Avocado</div>
</div>

{{< /example >}}

## On a div
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="bg-teal p-4 position-relative">
  Ripple on a div
  <span class="ripple-surface"></span>
</div>
 
{{< /example >}}

## Color
Use the custom property ``` --mdc-ripple-color``` to set the color of the Ripple.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="bg-white border p-4 position-relative" style="--mdc-ripple-color: blue;">
  Ripple with custom color
  <span class="ripple-surface"></span>
</div>
 
{{< /example >}}

## Color levels
Use the custom properties:
- ```--mdc-ripple-hover-opacity``` to set hover color opacity.
- ```--mdc-ripple-focus-opacity``` to set focus color opacity.
- ```--mdc-ripple-press-opacity``` to set active color opacity.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="bg-white border p-4 position-relative" 
     style="--mdc-ripple-color: blue; --mdc-ripple-hover-opacity: .3; --mdc-ripple-focus-opacity: .4; --mdc-ripple-press-opacity: .5;">
  Ripple with custom color
  <span class="ripple-surface"></span>
</div>
 
{{< /example >}}

## Javascript
```javascript
// Initialize Ripple
var rippleSurface = [].slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(function (s) {
  new materialstyle.Ripple(s)
})
```

<br>

### With jQuery
```javascript
// Initialize Ripple
$('.ripple-surface').ripple();
```
