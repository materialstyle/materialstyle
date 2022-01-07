---
layout: docs
title: Toast
group: components
toc: true
---

# Toast

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button class="btn btn-pink" id="show-toast">Show Toast</button>
##split##
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
  <div id="live-toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-dark">
      <img src="https://materialstyle.github.io/assets/images/MSIconNewColorV2.svg" class="rounded me-2"
           alt="Material Style Icon" width="20">
      <strong class="me-auto text-white">Material Style</strong>
      <small class="text-white">5 mins ago</small>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close">
      </button>
    </div>
    <div class="toast-body bg-dark text-white">
      Hello, world! This is a toast message.
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
