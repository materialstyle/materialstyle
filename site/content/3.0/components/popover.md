---
layout: docs
title: Popover
group: components
toc: true
---

# Popover

{{< callout info >}}
{{< partial "callout-info-requiresjavascript.md" >}}
{{< /callout >}}

{{< example codeId="code1" class="d-flex justify-content-evenly align-items-center flex-wrap gap-1">}}

<a href="#" data-bs-toggle="popover" title="Popover Header"
   data-bs-content="Some content inside the Popover">
  Popover Link
</a>
##split##
<button type="button" class="btn btn-purple" data-bs-toggle="popover"
        title="Popover Header" data-bs-content="Some content inside the Popover">
  Popover Button
</button>

{{< /example >}}

## Placement
{{< example codeId="code2" class="d-flex justify-content-evenly align-items-center flex-wrap gap-1">}}

<button type="button" class="btn btn-purple m-2" data-bs-toggle="popover"
        data-bs-placement="top" title="Popover Header"
        data-bs-content="Some content inside the Popover">
  Top
</button>
##split##
<button type="button" class="btn btn-purple m-2" data-bs-toggle="popover"
        data-bs-placement="right" title="Popover Header"
        data-bs-content="Some content inside the Popover">
  Right
</button>
##split##
<button type="button" class="btn btn-purple m-2" data-bs-toggle="popover"
        data-bs-placement="bottom" title="Popover Header"
        data-bs-content="Some content inside the Popover">
  Bottom
</button>
##split##
<button type="button" class="btn btn-purple m-2" data-bs-toggle="popover"
        data-bs-placement="left" title="Popover Header"
        data-bs-content="Some content inside the Popover">
  Left
</button>

{{< /example >}}

## Dismissible
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<a href="#" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible Popover"
   data-bs-content="Click anywhere in the document to close this Popover">
  Dismissible Popover
</a>

{{< /example >}}

## Toggle on hover
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<a href="#" data-bs-toggle="popover" data-bs-trigger="hover" title="Popover on Hover"
   data-bs-content="Move away from the link to hide this Popover">
  Toggle Popover on hover
</a>

{{< /example >}}

## Javascript
```javascript
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new materialstyle.Popover(popoverTriggerEl)
})
```

<br>

### With jQuery
```javascript
$('[data-bs-toggle="popover"]').popover();
```
