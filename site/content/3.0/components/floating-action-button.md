---
layout: docs
title: Floating Action Button
group: components
toc: true
---

# Floating Action Button (FAB)

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

## Leaf FAB
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>

{{< /example >}}

## Leaf FAB inverted
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab leaf-fab-inverted btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Mini FAB
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-fab mini-fab btn-purple">
  <i class="bi bi-heart-fill"></i>
</button>
        
{{< /example >}}

## Extended Fab / Rounded Button
{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-purple btn-lg rounded-pill">
  <i class="bi bi-heart-fill"></i> Like
</button>
        
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
