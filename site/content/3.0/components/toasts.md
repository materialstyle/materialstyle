---
layout: docs
title: Toasts
group: components
toc: true
keywords: snackbar, toast
---

<p class="fs-4 ms-0 mb-4 text-secondary">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button class="btn btn-success" id="show-toast">Show Toast</button>
##split##
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="live-toast" class="toast bg-dark text-white" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-dark">
      <img src="https://materialstyle.github.io/assets/images/MSIconNewColorV2.svg" class="rounded me-2"
           alt="Material Style Icon" width="20">
      <strong class="me-auto text-white">Material Style</strong>
      <small class="text-white">just now</small>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

{{< /example >}}

## Stacking
You can stack toasts by wrapping them in a ```.toast-container```, which will vertically add 
some spacing.

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button class="btn btn-success" id="show-stacked-toasts">Show stacked toasts</button>
##split##
<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="stacked-toast-1" class="toast bg-white" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-bg-green">
      <img src="https://materialstyle.github.io/assets/images/MSIconNewColorV2.svg" 
           class="rounded me-2" alt="Material Style Icon" width="20">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-white">just now</small>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div id="stacked-toast-2" class="toast bg-white" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header text-bg-indigo">
      <img src="https://materialstyle.github.io/assets/images/MSIconNewColorV2.svg" 
           class="rounded me-2" alt="Material Style Icon" width="20">
      <strong class="me-auto">Bootstrap</strong>
      <small class="text-white">just now</small>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>

{{< /example >}}

## Javascript
```javascript
var toastTrigger = document.getElementById('show-toast')
var toastLiveExample = document.getElementById('live-toast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new materialstyle.Toast(toastLiveExample)

    toast.show()
  })
}
```

<br>

### With jQuery
```javascript
$('#show-toast').on('click', function () {
  $('.toast').toast('show');
});
```
