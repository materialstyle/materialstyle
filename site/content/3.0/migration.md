---
layout: docs
title: Migrating to v3
group: migration
toc: true
keywords: migration
---

<p class="fs-4 ms-0 mb-4 text-secondary migration-intro">
Material Style 3 is a major rewrite of the entire project.
</p>

Follows <a class="link-pink" href="https://getbootstrap.com/docs/5.2/migration/">Bootstrap v5 migration guide</a>.

## **Utilities**
### Colors
To avoid increased file sizes, now we only use a subset of the v2 color palette.

### Ripple
Unlike v2, where the ripple effect can be activated just by calling the JS function, 
in v3, we need to add an element with the class ```.ripple-surface``` to the desired element.

### Shadows
- Shadow classes ```.raised-*dp``` has been renamed to ```.shadow-*dp```
- Class ```.unelevated``` has been replaced with ```.shadow-none```

## **Components**
### Buttons
- Classes ```btn-text-[color]``` have been dropped. ```btn-outline-[color] border-0``` can be used for Text Buttons.
- File inputs now use Bootstrap's default styling. Classes ```m-file-input``` and ```btn-file``` have been dropped.

### Floating Action Buttons
Class ```extended-fab``` has been dropped. ```rounded-pill``` can be used.

### Cards
- Classes ```card-outline-[color]``` have been dropped. ```border border-[color]``` can be used for Cards with border.
- Classes ```card-actions```, ```card-buttons``` & ```card-icons``` have been dropped as well.

### Drawer / Sidebar
We are using Bootstrap 5’s Offcanvas component for Drawers.

### Progress bars
- Class ```m-progress``` has been renamed to ```progress-bar-indeterminate```.
- Class ```m-rainbow``` has been renamed to ```progress-bar-rainbow```.

### Spinners
- Class ```m-spinner``` has been renamd to ```spinner-material```.
- Classes ```spinner-[color]``` have been dropped. ```text-[color]``` can be used for colored spinners.

## **Forms**
### Text Fields
- We are using Bootstrap 5's ```.form-floating``` for Text fields.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Text fields.

### Select Fields
- We are using Bootstrap 5's ```.form-floating``` for Select fields.
- Bootstrap's dropdowns are being used for the Select options.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Select fields.

### Input groups
Added support for ```.input-group``` on Text and Select fields.

### Form validation
Added form validation support on forms.



