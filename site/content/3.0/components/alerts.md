---
layout: docs
title: Alerts
group: components
toc: true
---

<p class="fs-4 ms-0 mb-4 text-secondary">Alerts provide contextual feedback messages for typical user actions.</p>

## Color options
{{< example codeId="code1" >}}

<div class="alert alert-primary" role="alert">
  Primary | Blue
</div>
##split##
<div class="alert alert-secondary" role="alert">
  Secondary | Gray
</div>
##split##
<div class="alert alert-success" role="alert">
  Success | Green
</div>
##split##
<div class="alert alert-info" role="alert">
  Info | Cyan
</div>
##split##
<div class="alert alert-warning" role="alert">
  Warning | Yellow
</div>
##split##
<div class="alert alert-danger" role="alert">
  Danger | Red
</div>
##split##
<div class="alert alert-light" role="alert">
  Light
</div>
##split##
<div class="alert alert-dark" role="alert">
  Dark
</div>
##split##
<div class="alert alert-indigo" role="alert">
  Indigo
</div>
##split##
<div class="alert alert-purple" role="alert">
  Purple
</div>
##split##
<div class="alert alert-pink" role="alert">
  Pink
</div>
##split##
<div class="alert alert-orange" role="alert">
  Orange
</div>
##split##
<div class="alert alert-teal" role="alert">
  Teal
</div>

{{< /example >}}

## With a link
{{< example codeId="code2" >}}

<div class="alert alert-info" role="alert" role="alert">
  A simple info alert with <a href="#" class="alert-link">a link</a>.
</div>

{{< /example >}}

## With an icon
{{< example codeId="code3" >}}

<div class="alert alert-danger d-flex align-items-center" role="alert">
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
      class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img"
      aria-label="Warning:">
   <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
 </svg>
 <div>An alert with an icon.</div>
</div>

{{< /example >}}

## Dismissible
{{< example codeId="code4" >}}

<div class="alert alert-pink alert-dismissible" role="alert">
  Dismissible alert.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

{{< /example >}}

## Dismissible with fade effect
{{< example codeId="code5" >}}

<div class="alert alert-purple alert-dismissible fade show" role="alert">
  Dismissible alert with fade effect.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

{{< /example >}}

## With heading, paragraph and divider
{{< example codeId="code6" >}}

<div class="alert alert-success" role="alert" role="alert">
  <h4 class="alert-heading">Alert with heading, paragraph and divider.</h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
    so that you can see how spacing within an alert works with this kind of content.
  </p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>

{{< /example >}}
