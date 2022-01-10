---
layout: docs
title: Spinner
group: components
toc: true
---

# Spinner

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="m-spinner"></div>

{{< /example >}}

## Colored
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="m-spinner spinner-blue"></div>

{{< /example >}}

## Bootstrap Spinner
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="spinner-border text-teal"></div>

{{< /example >}}

## Bootstrap Spinner Grow
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<div class="spinner-grow text-primary"></div>
        
{{< /example >}}

## Javascript
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
