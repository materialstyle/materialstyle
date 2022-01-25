---
layout: docs
title: Spinners
group: components
toc: true
---

# Spinners

## Material Design Spinner

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="m-spinner"></div>

{{< /example >}}

### Single color Material Design Spinner
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="m-spinner spinner-blue"></div>

{{< /example >}}

### Javascript
Only required for ```.m-spinner``` variant (Material Design Spinner).
```javascript
var spinnerList = [].slice.call(document.querySelectorAll('.m-spinner'))
var spinners = spinnerList.map(function (s) {
  return new materialstyle.Spinner(s)
})
```

<br>

### With jQuery
```javascript
$('.m-spinner').spinner();
```

<br>

## Bootstrap Spinner
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="spinner-border text-teal"></div>

{{< /example >}}

### Bootstrap Spinner Grow
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="spinner-grow text-primary"></div>

{{< /example >}}
