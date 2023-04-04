---
layout: docs
title: Tooltips
group: components
toc: true
keywords: tooltips, popovers
---

Things to know when using the tooltip plugin:

 - Tooltips rely on the 3rd party library 
 <a class="link-pink" href="https://popper.js.org/">Popper</a> for positioning. You must include 
 <a class="link-pink" href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js">popper.min.js</a> 
 before 
 <a class="link-pink" href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.0-alpha1/dist/js/materialstyle.min.js">materialstyle.min.js</a> 
 in order for tooltips to work!
 
 - Tooltips are opt-in for performance reasons, so you must initialize them yourself.
 - Tooltips with zero-length titles are never displayed.
 - Specify ```container: 'body'``` to avoid rendering problems in more complex components (like our input groups, button groups, etc).
 - Triggering tooltips on hidden elements will not work.
 - Tooltips for ```.disabled``` or ```disabled``` elements must be triggered on a wrapper element.
 - When triggered from hyperlinks that span multiple lines, tooltips will be centered. 
 Use ```white-space: nowrap;``` on your ```<a>```s to avoid this behavior.
 - Tooltips must be hidden before their corresponding elements have been removed from the DOM.
 - Tooltips can be triggered thanks to an element inside a shadow DOM.

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

## Placement
{{< example codeId="code1" class="d-flex justify-content-evenly align-items-center flex-wrap gap-1">}}

<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
##split##
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
##split##
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
##split##
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

{{< /example >}}

## With custom HTML
{{< example codeId="code2" class="d-flex justify-content-evenly align-items-center flex-wrap gap-1">}}

<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>

{{< /example >}}

## Javascript
```javascript
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new materialstyle.Tooltip(tooltipTriggerEl)
})
```

<br>

### With jQuery
```javascript
$('[data-bs-toggle="tooltip"]').tooltip();
```
