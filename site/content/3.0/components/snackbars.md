---
layout: docs
title: Snackbars
group: components
toc: true
keywords: snackbar, toast
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  Snackbars provide brief messages at the bottom of the screen.<br>
  They appear temporarily and shouldn’t interrupt the user experience.<br>
  Only one snackbar may be displayed at a time.
</p>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar" id="default-snackbar">This is a Snackbar.</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar">Show Snackbar</button>
##split##
<script>
document.querySelector('#show-snackbar').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#default-snackbar'));
});
</script>

{{< /example >}}

## Snackbar Start
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar snackbar-start" id="snackbar-start-example">This is a Snackbar</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-start">Show snackbar to the Start</button>
##split##
<script>
document.querySelector('#show-snackbar-start').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-start-example'));
});
</script>

{{< /example >}}

## Snackbar End
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar snackbar-end" id="snackbar-end-example">This is a Snackbar</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-end">Show snackbar to the End</button>
##split##
<script>
document.querySelector('#show-snackbar-end').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-end-example'));
});
</script>
        
{{< /example >}}

## Custom visible duration
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar" id="snackbar-5000">This is a Snackbar with visible duration of 5000ms.</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-5000">Show Snackbar for 5000ms</button>
##split##
<script>
document.querySelector('#show-snackbar-5000').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-5000'), {
    'visibleDuration': 5000
  });
});
</script>

{{< /example >}}

## Dismissible
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar" id="snackbar-close">
  Close this snackbar
  <button type="button" class="btn btn-outline-yellow border-0 ms-2" data-bs-dismiss="snackbar">
    Dismiss
  </button>
</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-dismissible">Dismissible snackbar</button>
##split##
<script>
document.querySelector('#show-snackbar-dismissible').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-close'), {
    'autoClose': false
  });
});
</script>

{{< /example >}}


