---
layout: docs
title: Position
group: utilities
toc: true
keywords: utilities, position
---

<p class="fs-4 ms-0 mb-4 page-description">
 Use these shorthand utilities for quickly configuring the position of an element.
</p>

## Position
Quick positioning classes are available, though they are not responsive.

- `position-static`
- `position-relative`
- `position-absolute`
- `position-fixed`
- `position-sticky`

## Arrange elements
Arrange elements easily with the edge positioning utilities. The format is `{property}-{position}`.

Where *property* is one of:

- `top` - for the vertical `top` position
- `start` - for the horizontal `left` position (in LTR)
- `bottom` - for the vertical `bottom` position
- `end` - for the horizontal `right` position (in LTR)

Where *position* is one of:

- `0` - for `0` edge position
- `50` - for `50%` edge position
- `100` - for `100%` edge position

(You can add more position values by adding entries to the `$position-values` Sass map variable.)

{{< example codeId="code1" >}}

<div class="position-relative" style="height: 200px;">
  <div class="position-absolute top-0 start-0 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-0 end-0 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-50 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-50 end-50 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-0 start-0 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-0 end-0 bg-success rounded" style="width: 2rem; height: 2rem;"></div>
</div>

{{< /example >}}

## Center elements
In addition, you can also center the elements with the transform utility class `.translate-middle`.

This class applies the transformations `translateX(-50%)` and `translateY(-50%)` to the element which, 
in combination with the edge positioning utilities, allows you to absolute center an element.

{{< example codeId="code2" >}}

<div class="position-relative" style="height: 200px;">
  <div class="position-absolute top-0 start-0 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-0 start-50 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-0 start-100 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-0 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-50 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-100 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-100 start-0 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-100 start-50 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-100 start-100 translate-middle bg-primary rounded" style="width: 2rem; height: 2rem;"></div>
</div>

{{< /example >}}

By adding `.translate-middle-x` or `.translate-middle-y` classes, elements can be positioned only in 
horizontal or vertical direction.

{{< example codeId="code3" >}}

<div class="position-relative" style="height: 200px;">
  <div class="position-absolute top-0 start-0 bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-0 start-50 translate-middle-x bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-0 end-0 bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-0 translate-middle-y bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 start-50 translate-middle bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute top-50 end-0 translate-middle-y bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-0 start-0 bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-0 start-50 translate-middle-x bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
  <div class="position-absolute bottom-0 end-0 bg-tertiary rounded" style="width: 2rem; height: 2rem;"></div>
</div>

{{< /example >}}

## Examples
Here are some real life examples of these classes:

{{< example codeId="code4" class="d-flex flex-wrap justify-content-center align-items-center gap-3 overflow-x-auto" >}}

<button type="button" class="btn btn-success position-relative">
  Mails <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 <span class="visually-hidden">unread messages</span></span>
</button>

<div class="position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill">
  Marker <svg width="1em" height="1em" viewBox="0 0 16 16" class="position-absolute top-100 start-50 translate-middle mt-1" fill="var(--bs-secondary)" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</div>

<button type="button" class="btn btn-success position-relative">
  Alerts <span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="visually-hidden">unread messages</span></span>
</button>

{{< /example >}}

You can use these classes with existing components to create new ones. Remember that you can extend its 
functionality by adding entries to the `$position-values` variable.

{{< example codeId="code5" >}}

<div class="position-relative m-4">
  <div class="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="height: 1px;">
    <div class="progress-bar bg-success" style="width: 50%"></div>
  </div>
  <button type="button" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-success rounded-pill" style="width: 2rem; height:2rem;">1</button>
  <button type="button" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-success rounded-pill" style="width: 2rem; height:2rem;">2</button>
  <button type="button" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;">3</button>
</div>

{{< /example >}}