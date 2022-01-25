---
layout: docs
title: Snackbars
group: components
toc: true
keywords: snackbar, toast
---

# Snackbars

Snackbars provide brief messages at the bottom of the screen.
They appear temporarily and shouldn’t interrupt the user experience.
Only one snackbar may be displayed at a time.

<br>

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

## Snackbar Left
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar snackbar-left" id="snackbar-left-example">This is a Snackbar</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-left">Show snackbar to the Left</button>
##split##
<script>
document.querySelector('#show-snackbar-left').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-left-example'));
});
</script>

{{< /example >}}

## Snackbar Right
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<!-- Snackbar -->
<div class="snackbar snackbar-right" id="snackbar-right-example">This is a Snackbar</div>
##split##
<!-- Button to trigger a Snackbar -->
<button type="button" class="btn btn-indigo" id="show-snackbar-right">Show snackbar to the Right</button>
##split##
<script>
document.querySelector('#show-snackbar-right').addEventListener('click', function () {
  new materialstyle.Snackbar(document.querySelector('#snackbar-right-example'));
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
  <button type="button" class="btn btn-text-yellow ms-2" data-bs-dismiss="snackbar">
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


