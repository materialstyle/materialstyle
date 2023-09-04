---
layout: docs
title: Visibility
group: utilities
toc: true
keywords: utilities, visibility
---

<p class="fs-4 ms-0 mb-4 page-description">
 Control the visibility of elements, without modifying their display, with visibility utilities.
</p>

Set the `visibility` of elements with our visibility utilities. These utility classes do not modify the `display` value 
at all and do not affect layout – `.invisible` elements still take up space in the page.

Elements with the `.invisible` class will be hidden *both* visually and for assistive technology/screen reader users.

Apply `.visible` or `.invisible` as needed.

```html
<div class="visible">...</div>
<div class="invisible">...</div>
```
<br>

```css
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
```
