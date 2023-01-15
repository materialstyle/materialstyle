---
layout: docs
title: Floating Action Buttons (FAB)
group: components
toc: true
keywords: buttons, floating action buttons
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  The FAB represents the most important action on a screen. It puts key actions within reach.
</p>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-primary">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Elevated
Add ```.elevated-[1 to 10]``` to create Elevated buttons.

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap gap-3">}}

<button type="button" class="btn btn-fab btn-info elevated-1">
  <i class="bi bi-heart-fill"></i>
</button>
##split##
<button type="button" class="btn btn-fab btn-info elevated-10">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Disabled
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-primary" disabled>
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Ripple effect

{{< callout javascript-ripple >}}
{{< partial "callout-ripplerequiresjavascript.md" >}}
{{< /callout >}}

{{< callout ripple >}}
{{< partial "callout-rippledocs.md" >}}
{{< /callout >}}

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-primary">
  <i class="bi bi-heart-fill"></i>
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

## Leaf FAB
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab btn-danger">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Leaf FAB inverted
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab-inverted btn-danger">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Mini FAB
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab mini-fab btn-success">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Extended Fab / Rounded Button
{{< example codeId="code8" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-success btn-lg rounded-pill">
  <i class="bi bi-heart-fill"></i> Like
</button>
        
{{< /example >}}
