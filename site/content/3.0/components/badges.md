---
layout: docs
title: Badges
group: components
toc: true
keywords: badges
---

# Badges

Badges scale to match the size of the immediate parent element by using relative font sizing and ```em``` units.

{{< example codeId="code1" class="badge-example-headings">}}

<h1>Example heading <span class="badge bg-secondary">New</span></h1>
##split##
<h2>Example heading <span class="badge bg-secondary">New</span></h2>
##split##
<h3>Example heading <span class="badge bg-secondary">New</span></h3>
##split##
<h4>Example heading <span class="badge bg-secondary">New</span></h4>
##split##
<h5>Example heading <span class="badge bg-secondary">New</span></h5>
##split##
<h6>Example heading <span class="badge bg-secondary">New</span></h6>

{{< /example >}}

## On buttons

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-indigo">
  Notifications <span class="badge bg-yellow text-dark">4</span>
</button>

{{< /example >}}

## Position

Use utilities to modify a ```.badge``` and position it in the corner of a link or button.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-teal position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        
{{< /example >}}

You can also replace the ```.badge``` class with a few more utilities without a count 
for a more generic indicator.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-yellow position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
        
{{< /example >}}

## Color options

{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<span class="badge bg-primary">Primary | Blue</span>
##split##
<span class="badge bg-secondary">Secondary | Gray</span>
##split##
<span class="badge bg-success">Success | Green</span>
##split##
<span class="badge bg-info text-dark">Info | Cyan</span>
##split##
<span class="badge bg-warning text-dark">Warning | Yellow</span>
##split##
<span class="badge bg-danger">Danger | Red</span>
##split##
<span class="badge bg-light text-dark">Light</span>
##split##
<span class="badge bg-dark">Dark</span>
##split##
<span class="badge bg-indigo">Indigo</span>
##split##
<span class="badge bg-purple">Purple</span>
##split##
<span class="badge bg-pink">Pink</span>
##split##
<span class="badge bg-orange text-dark">Orange</span>
##split##
<span class="badge bg-teal text-dark">Teal</span>

{{< /example >}}

## Pill badges

Use the ```.rounded-pill``` utility class to make badges more rounded 
with a larger ```border-radius```.

{{< example codeId="code7" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<span class="badge rounded-pill bg-primary">Primary | Blue</span>
##split##
<span class="badge rounded-pill bg-secondary">Secondary | Gray</span>
##split##
<span class="badge rounded-pill bg-success">Success | Green</span>
##split##
<span class="badge rounded-pill bg-info text-dark">Info | Cyan</span>
##split##
<span class="badge rounded-pill bg-warning text-dark">Warning | Yellow</span>
##split##
<span class="badge rounded-pill bg-danger">Danger | Red</span>
##split##
<span class="badge rounded-pill bg-light text-dark">Light</span>
##split##
<span class="badge rounded-pill bg-dark">Dark</span>
##split##
<span class="badge rounded-pill bg-indigo">Indigo</span>
##split##
<span class="badge rounded-pill bg-purple">Purple</span>
##split##
<span class="badge rounded-pill bg-pink">Pink</span>
##split##
<span class="badge rounded-pill bg-orange text-dark">Orange</span>
##split##
<span class="badge rounded-pill bg-teal text-dark">Teal</span>

{{< /example >}}
