---
layout: docs
title: Theme colors
group: utilities
aliases:
  - "/3.0/utilities/"
  - "/utilities/"
toc: true
keywords: utilities, colors
---

## Primary
Main theme color, used for hyperlinks, focus styles, and component and form active states.
{{< theme-color-palette theme="primary" >}}

## Success
Theme color used for positive or successful actions and information.
{{< theme-color-palette theme="success" >}}

## Danger
Theme color used for errors and dangerous actions.
{{< theme-color-palette theme="danger" >}}

## Warning
Theme color used for non-destructive warning messages.
{{< theme-color-palette theme="warning" >}}

## Info
Theme color used for neutral and informative content.
{{< theme-color-palette theme="info" >}}

## Light
Additional theme option for less contrasting colors.
{{< theme-color-palette theme="light" >}}

## Dark
Additional theme option for higher contrasting colors.
{{< theme-color-palette theme="dark" >}}

<br>

## Body
Default foreground (color) and background, including components.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div class="border" style="background-color: var(--bs-body-bg);">&nbsp</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Background color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-body-bg`<br>`--bs-body-bg-rgb`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-body-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Text color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-body-color`<br>`--bs-body-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

## Secondary
Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Background color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-secondary-bg`<br>`--bs-secondary-bg-rgb`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-secondary-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Text color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-secondary-color`<br>`--bs-secondary-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

## Tertiary
Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Background color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-tertiary-bg`<br>`--bs-tertiary-bg-rgb`{{< /markdown >}}</span>
    </div>
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Text color</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-tertiary-color`<br>`--bs-tertiary-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

## Emphasis
For higher contrast text. Not applicable for backgrounds.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Emphasis</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-emphasis-color`<br>`--bs-emphasis-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>

## Border
For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.
<div class="color-list py-3 mb-4">
  <div class="d-flex flex-wrap gap-3">
    <div class="theme-color-palette">
      <div style="background-color: var(--bs-border-color)">&nbsp;</div>
      <span class="d-block p-2 text-capitalize" style="color: var(--bs-secondary-color);">Border</span>
      <span class="d-block px-2">{{< markdown >}}`--bs-border-color`<br>`--bs-border-color-rgb`{{< /markdown >}}</span>
    </div>
  </div>
</div>
