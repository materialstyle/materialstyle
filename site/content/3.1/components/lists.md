---
layout: docs
title: Lists
group: components
toc: true
---

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item active">First item</li>
  <li class="list-group-item">Second item</li>
  <li class="list-group-item">Third item</li>
</ul>

{{< /example >}}

## Color options
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item list-group-item-success">Success</li>
  <li class="list-group-item list-group-item-primary">Primary</li>
  <li class="list-group-item list-group-item-danger">Danger</li>
</ul>

{{< /example >}}

## With Link
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="list-group">
  <a href="javascript:" class="list-group-item list-group-item-action">First item</a>
  <a href="javascript:" class="list-group-item list-group-item-action">Second item</a>
  <a href="javascript:" class="list-group-item list-group-item-action">Third item</a>
</div>

{{< /example >}}

## With Ripple

{{< callout javascript-ripple >}}
{{< partial "callout-ripplerequiresjavascript.md" >}}
{{< /callout >}}

{{< callout ripple >}}
{{< partial "callout-rippledocs.md" >}}
{{< /callout >}}

{{< example codeId="code10" class="d-flex justify-content-center align-items-center flex-wrap gap-2">}}

<div class="list-group">
  <a href="javascript:" class="list-group-item list-group-item-action">
    <span class="ripple-surface"></span>First item
  </a>
  <a href="javascript:" class="list-group-item list-group-item-action">
    <span class="ripple-surface"></span>Second item
  </a>
  <a href="javascript:" class="list-group-item list-group-item-action">
    <span class="ripple-surface"></span>Third item
  </a>
</div>
##split##
<ul class="list-group">
  <li class="list-group-item list-group-item-danger">
    <span class="ripple-surface"></span>Danger
  </li>  
  <li class="list-group-item list-group-item-warning">
    <span class="ripple-surface"></span>Warning
  </li>
  <li class="list-group-item list-group-item-success">
    <span class="ripple-surface"></span>Success
  </li>
</ul>

{{< /example >}}

## With Checkbox
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
    <label class="form-check-label stretched-link" for="firstCheckbox">First checkbox</label>
  </li>
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
    <label class="form-check-label stretched-link" for="secondCheckbox">Second checkbox</label>
  </li>
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
    <label class="form-check-label stretched-link" for="thirdCheckbox">Third checkbox</label>
  </li>
</ul>

{{< /example >}}

## With Radio
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
    <label class="form-check-label stretched-link" for="firstRadio">First radio</label>
  </li>
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
    <label class="form-check-label stretched-link" for="secondRadio">Second radio</label>
  </li>
  <li class="list-group-item list-group-item-action">
    <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
    <label class="form-check-label stretched-link" for="thirdRadio">Third radio</label>
  </li>
</ul>

{{< /example >}}

## With Icon
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item d-flex gap-3">
    <i class="bi bi-heart-fill"></i>
    Love It
  </li>
  <li class="list-group-item d-flex gap-3">
    <i class="bi bi-hand-thumbs-up-fill"></i>
    Like It
  </li>
  <li class="list-group-item d-flex gap-3">
    <i class="bi bi-hand-thumbs-down-fill"></i>
    Hate It
  </li>
</ul>

{{< /example >}}

## With secondary text
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item">
    Line item
    <small class="d-block text-muted">Secondary text</small>
  </li>
  <li class="list-group-item">
    Line item
    <small class="d-block text-muted">Secondary text</small>
  </li>
  <li class="list-group-item">
    Line item
    <small class="d-block text-muted">Secondary text</small>
  </li>
</ul>

{{< /example >}}

## With Icon and secondary text
{{< example codeId="code8" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span>
      Landscape
      <small class="d-block text-muted">29 Aug 2018</small>
    </span>
  </li>
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span>
      Wildlife
      <small class="d-block text-muted">18 Aug 2018</small>
    </span>
  </li>
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span>
      Fashion
      <small class="d-block text-muted">22 Aug 2018</small>
    </span>
  </li>
</ul>

{{< /example >}}

## With Icons, secondary text and divider
{{< example codeId="code9" class="d-flex justify-content-center align-items-center flex-wrap">}}

<ul class="list-group">
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span class="flex-grow-1">
      Landscape
      <small class="d-block text-muted">29 Aug 2018</small>
    </span>
    <i class="bi bi-info-circle-fill"></i>
  </li>
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span class="flex-grow-1">
      Wildlife
      <small class="d-block text-muted">18 Aug 2018</small>
    </span>
    <i class="bi bi-info-circle-fill"></i>
  </li>
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span class="flex-grow-1">
      Fashion
      <small class="d-block text-muted">22 Aug 2018</small>
    </span>
    <i class="bi bi-info-circle-fill"></i>
  </li>

  <li class="list-group-item list-divider"></li>

  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span class="flex-grow-1">
      4K
      <small class="d-block text-muted">21 Aug 2018</small>
    </span>
    <i class="bi bi-info-circle-fill"></i>
  </li>
  <li class="list-group-item d-flex align-items-center gap-3">
    <i class="bi bi-folder-fill"></i>
    <span class="flex-grow-1">
      HD
      <small class="d-block text-muted">15 Aug 2018</small>
    </span>
    <i class="bi bi-info-circle-fill"></i>
  </li>
</ul>

{{< /example >}}

## Javascript for ripple
```javascript
// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
})
```
