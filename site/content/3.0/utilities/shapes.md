---
layout: docs
title: Shapes
group: utilities
toc: true
keywords: utilities, shapes
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  Shapes direct attention, identify components, communicate state, and express brand.
</p>

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

## Button
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container">
  <button type="button" class="btn btn-pink">
    Button
  </button>
  <div class="angle-top-left bg-body"></div>
  <div class="angle-top-right bg-body"></div>
  <div class="angle-bottom-left bg-body"></div>
  <div class="angle-bottom-right bg-body"></div>
</div>

{{< /example >}}

## Outlined Button
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container">
  <button type="button" class="btn btn-outline-pink">
    Button
  </button>
  <div class="angle-top-left bg-body border border-bottom border-pink"></div>
  <div class="angle-top-right bg-body border border-bottom border-pink"></div>
  <div class="angle-bottom-left bg-body border border-bottom border-pink"></div>
  <div class="angle-bottom-right bg-body border border-bottom border-pink"></div>
</div>

{{< /example >}}

## Card
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container">
  <div class="card bg-pink bg-opacity-10" style="max-width:400px">
    <div class="card-body">
      <h4 class="card-title text-pink">Unlimited Music</h4>
      <p class="card-text">
        Listen to your favourite artists and albums whenever wherever online
        and offline
      </p>
    </div>
    <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
      <button type="button" class="btn btn-outline-pink border-0">
        Listen Now
      </button>

      <div>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-heart-fill"></i>
        </button>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-share-fill"></i>
        </button>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="angle-top-right bg-body size-50"></div>
</div>

{{< /example >}}

## Card with border
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container">
  <div class="card border border-pink" style="max-width:400px">
    <div class="card-body">
      <h4 class="card-title text-pink">Unlimited Music</h4>
      <p class="card-text">
        Listen to your favourite artists and albums whenever wherever online
        and offline
      </p>
    </div>
    <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
      <button type="button" class="btn btn-outline-pink border-0">
        Listen Now
      </button>

      <div>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-heart-fill"></i>
        </button>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-share-fill"></i>
        </button>
        <button type="button" class="btn btn-fab mini-fab btn-pink m-1">
          <i class="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="angle-top-right bg-body size-50 border border-bottom border-pink"></div>
</div>

{{< /example >}}

## Div
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container">
  <div class="bg-pink bg-opacity-10 border border-bottom border-2 border-pink"
       style="height: 200px; width: 200px;"></div>
  <div class="angle-top-left bg-body size-50 border border-bottom border-2 border-pink"></div>
  <div class="angle-top-right bg-body size-50 border border-bottom border-2 border-pink"></div>
  <div class="angle-bottom-left bg-body size-50 border border-bottom border-2 border-pink"></div>
  <div class="angle-bottom-right bg-body size-50 border border-bottom border-2 border-pink"></div>
</div>

{{< /example >}}

## Javascript
```javascript
// Initialize Shapes
var shapes = [].slice.call(document.querySelectorAll('.m-shape-container'))
shapes.map(function (s) {
  new materialstyle.Shape(s)
})
```

<br>

### With jQuery
```javascript
// Initialize Shapes
$('.m-shape-container').shape();
```
