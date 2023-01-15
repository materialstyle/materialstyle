---
layout: docs
title: Progress Bars
group: components
toc: true
keywords: progress, progress bars
---

<p class="fs-4 ms-0 mb-4 page-description">
  Progress bars express an unspecified wait time or display the length of a process.
</p>

{{< example codeId="code1" >}}

<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

{{< /example >}}

## Striped
{{< example codeId="code2" >}}

<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

{{< /example >}}

## Animated
{{< example codeId="code3" >}}

<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

{{< /example >}}

## Custom height
{{< example codeId="code4" >}}

<div class="progress" style="height: 5px;">
  <div class="progress-bar bg-danger" role="progressbar" style="width: 75%; height: 5px;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>

{{< /example >}}

## Multiple progress
{{< example codeId="code5" >}}

<div class="progress">
  <div class="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-danger" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

{{< /example >}}

## Indeterminate
{{< example codeId="code6" >}}

<div class="progress">
  <div class="progress-bar bg-danger progress-bar-indeterminate"></div>
</div>

{{< /example >}}

## Indeterminate rainbow

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

{{< example codeId="code7" >}}

<div class="progress">
  <div class="progress-bar progress-bar-rainbow">
    <div class="color-bar bg-danger"></div>
    <div class="color-bar bg-success"></div>
    <div class="color-bar bg-warning"></div>
    <div class="color-bar bg-primary"></div>
  </div>
</div>

{{< /example >}}

## Javascript
Only required for ```.progress-bar-rainbow``` variant.
```javascript
var rainbowList = [].slice.call(document.querySelectorAll('.progress-bar-rainbow'))
var progressList = rainbowList.map(function (rainbow) {
  return new materialstyle.Rainbow(rainbow)
})
```

<br>

### With jQuery
```javascript
$('.progress-bar-rainbow').rainbow();
```
