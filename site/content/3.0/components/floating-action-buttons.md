---
layout: docs
title: Floating Action Buttons
group: components
toc: true
---

# Floating Action Buttons (FAB)

The FAB represents the most important action on a screen. It puts key actions within reach.

<br>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Disabled
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-purple" disabled>
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

{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
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

## Leaf FAB
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Leaf FAB inverted
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab-inverted btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Mini FAB
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab mini-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Extended Fab / Rounded Button
{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-purple btn-lg rounded-pill">
  <i class="bi bi-heart-fill"></i> Like
</button>
        
{{< /example >}}
