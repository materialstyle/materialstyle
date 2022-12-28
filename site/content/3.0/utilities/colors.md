---
layout: docs
title: Colors
group: utilities
aliases:
  - "/3.0/utilities/"
  - "/utilities/"
toc: true
keywords: utilities, colors
---

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Body —** Default foreground (color) and background, including components.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="p-3 rounded-2" style="background-color: var(--bs-body-color);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-body-color`<br>`--bs-body-color-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-body-bg);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-body-bg`<br>`--bs-body-bg-rgb`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Secondary —** Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="p-3 rounded-2" style="background-color: var(--bs-secondary-color);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-secondary-color`<br>`--bs-secondary-color-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-secondary-bg`<br>`--bs-secondary-bg-rgb`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Tertiary —** Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="p-3 rounded-2" style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-tertiary-color`<br>`--bs-tertiary-color-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-tertiary-bg`<br>`--bs-tertiary-bg-rgb`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Emphasis —** For higher contrast text. Not applicable for backgrounds.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="p-3 rounded-2" style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-emphasis-color`<br>`--bs-emphasis-color-rgb`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Border —** For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="p-3 rounded-2" style="background-color: var(--bs-border-color);">&nbsp;</div>
    <span>{{< markdown >}}`--bs-border-color`<br>`--bs-border-color-rgb`{{< /markdown >}}</span>
  </li>
</ul>
<br>

## Theme colors
<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Primary —** Main theme color, used for hyperlinks, focus styles, and component and form active states.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-primary">Primary</div>
    <span>{{< markdown >}}`--bs-primary`<br>`--bs-primary-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-primary-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-primary-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-primary-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-primary-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-primary-bg-subtle); --bs-border-color: var(--bs-primary-border-subtle); color: var(--bs-primary-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-primary-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-primary-border-subtle); color: var(--bs-primary-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-primary-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-primary-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-primary-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-primary-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-primary-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-primary); color: var(--bs-dark);">Text on primary background</div>
    <span>{{< markdown >}}`--bs-text-on-primary`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Success —** Theme color used for positive or successful actions and information.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-success">Success</div>
    <span>{{< markdown >}}`--bs-success`<br>`--bs-success-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-success-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-success-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-success-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-success-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-success-bg-subtle); --bs-border-color: var(--bs-success-border-subtle); color: var(--bs-success-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-success-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-success-border-subtle); color: var(--bs-success-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-success-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-success-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-success-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-success-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-success-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-success); color: var(--bs-dark);">Text on success background</div>
    <span>{{< markdown >}}`--bs-text-on-success`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Danger —** Theme color used for errors and dangerous actions.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-danger">Danger</div>
    <span>{{< markdown >}}`--bs-danger`<br>`--bs-danger-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-danger-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-danger-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-danger-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-danger-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-danger-bg-subtle); --bs-border-color: var(--bs-danger-border-subtle); color: var(--bs-danger-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-danger-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-danger-border-subtle); color: var(--bs-danger-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-danger-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-danger-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-danger-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-danger-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-danger-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-danger); color: var(--bs-dark);">Text on danger background</div>
    <span>{{< markdown >}}`--bs-text-on-danger`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Warning —** Theme color used for non-destructive warning messages.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-warning">Warning</div>
    <span>{{< markdown >}}`--bs-warning`<br>`--bs-warning-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-warning-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-warning-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-warning-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-warning-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-warning-bg-subtle); --bs-border-color: var(--bs-warning-border-subtle); color: var(--bs-warning-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-warning-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-warning-border-subtle); color: var(--bs-warning-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-warning-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-warning-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-warning-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-warning-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-warning-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-warning); color: var(--bs-light);">Text on warning background</div>
    <span>{{< markdown >}}`--bs-text-on-warning`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Info —** Theme color used for neutral and informative content.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-info">Info</div>
    <span>{{< markdown >}}`--bs-info`<br>`--bs-info-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-info-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-info-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-info-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-info-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-info-bg-subtle); --bs-border-color: var(--bs-info-border-subtle); color: var(--bs-info-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-info-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
     <div  style="background-color: var(--bs-info-border-subtle); color: var(--bs-info-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-info-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-info-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-info-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
   <div  style="background-color: var(--bs-info-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-info-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-info); color: var(--bs-light);">Text on info background</div>
    <span>{{< markdown >}}`--bs-text-on-info`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Light —** Additional theme option for less contrasting colors.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-light border">Light</div>
    <span>{{< markdown >}}`--bs-light`<br>`--bs-light-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-light-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-light-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-black" style="background-color: var(--bs-light-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-light-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-light-bg-subtle); --bs-border-color: var(--bs-light-border-subtle); color: var(--bs-light-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-light-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
     <div  style="background-color: var(--bs-light-border-subtle); color: var(--bs-light-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-light-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-light-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-light-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
   <div  style="background-color: var(--bs-light-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-light-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-light); color: var(--bs-light);">Text on light background</div>
    <span>{{< markdown >}}`--bs-text-on-light`{{< /markdown >}}</span>
  </li>
</ul>

<ul class="list-group color-list">
  <li class="list-group-item">
    {{< markdown >}}**Dark —** Additional theme option for higher contrasting colors.{{< /markdown >}}
  </li>
  <li class="list-group-item">
    <div class="text-bg-dark border">Dark</div>
    <span>{{< markdown >}}`--bs-dark`<br>`--bs-dark-rgb`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-dark-bg-hover)">Background hover</div>
    <span>{{< markdown >}}`--bs-dark-bg-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="text-white" style="background-color: var(--bs-dark-bg-active)">Background active</div>
    <span>{{< markdown >}}`--bs-dark-bg-active`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-dark-bg-subtle); --bs-border-color: var(--bs-dark-border-subtle); color: var(--bs-dark-text);">Background subtle</div>
    <span>{{< markdown >}}`--bs-dark-bg-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div  style="background-color: var(--bs-dark-border-subtle); color: var(--bs-dark-text);">Border subtle</div>
    <span>{{< markdown >}}`--bs-dark-border-subtle`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div style="background-color: var(--bs-dark-text); color: var(--bs-body-bg);">Text</div>
    <span>{{< markdown >}}`--bs-dark-text`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
   <div  style="background-color: var(--bs-dark-text-hover); color: var(--bs-body-bg);">Text hover</div>
    <span>{{< markdown >}}`--bs-dark-text-hover`{{< /markdown >}}</span>
  </li>
  <li class="list-group-item">
    <div class="border" style="background-color: var(--bs-text-on-dark); color: var(--bs-dark);">Text on dark background</div>
    <span>{{< markdown >}}`--bs-text-on-dark`{{< /markdown >}}</span>
  </li>
</ul>
<br>

## Supported properties

<div class="row">
  <div class="col-md-12">
    <ul class="list-group supported-properties">
      <li class="list-group-item border-0">Background Color <span>(bg-)</span></li>
      <li class="list-group-item border-0">Text Color <span>(text-)</span></li>
      <li class="list-group-item border-0">Border Color <span>(border-)</span></li>
      <li class="list-group-item border-0">Button <span>(btn-, btn-outline-)</span></li>
      <li class="list-group-item border-0">Alert <span>(alert-)</span></li>
      <li class="list-group-item border-0">Badge <span>(bg-, text-bg-)</span></li>
      <li class="list-group-item border-0">List Group Item <span>(list-group-item-)</span></li>
      <li class="list-group-item border-0">Card <span>(border-)</span></li>
      <li class="list-group-item border-0">Spinner <span>(spinner-)</span></li>
      <li class="list-group-item border-0">Table <span>(table-)</span></li>
      <li class="list-group-item border-0">Tab <span>(base-, primary-)</span></li>
      <li class="list-group-item border-0">Select <span>(base-, primary-)</span></li>
      <li class="list-group-item border-0">Text Field <span>(base-, primary-)</span></li>
    </ul>
  </div>
</div>
