---
layout: docs
title: Migrating to v3
group: migration
toc: true
keywords: migration
---

<p class="fs-4 ms-0 mb-4 text-secondary migration-intro">
Material Style 3 is a major rewrite of the entire project. The most notable changes are 
summarized below.
</p>

**Follows <a class="link-pink" href="https://getbootstrap.com/docs/5.2/migration/">Bootstrap v5 migration guide</a>.**

## **Utilities**
### Colors
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
To avoid increased file sizes, v3 uses only a subset of the v2 color palette. 
It uses Bootstrap's default theme colors + pink, purple, indigo, teal, orange, white & black.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Color shades (Example: ```red-50```, ```blue-500```, ```pink-a100```) have been removed to 
reduce file size.

### Ripple
- v3 uses the official Material Design Ripple package 
<a class="link-pink" href="https://www.npmjs.com/package/@material/ripple">@material/ripple</a>
for the ripple effects.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> Unlike v2, where the ripple effect is directly 
applied to components, in v3, we need to add an element 
```<span class="ripple-surface"></span>``` to the desired component like a Button and activate 
the effect on the ```ripple-surface```.

### Shadows
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```raised-*dp``` have been renamed to ```shadow-*dp```
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Class ```unelevated``` has been replaced with ```shadow-none```

## **Components**
### Buttons
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```btn-text-[color]``` have been dropped. 
```btn-outline-[color] border-0``` can be used for Text Buttons.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
File inputs now use Bootstrap's default styling. 
Classes ```m-file-input``` and ```btn-file``` have been dropped.

### Floating Action Buttons
<span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Class ```extended-fab``` has been dropped. ```rounded-pill``` can be used.

### Cards
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```card-outline-[color]``` have been dropped. 
```border border-[color]``` can be used for Cards with border.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```card-actions```, ```card-buttons``` & ```card-icons``` have been dropped as well.

### Drawer / Sidebar
<span class="badge bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5’s Offcanvas component for Drawers.

### Progress bars
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-progress``` has been renamed to ```progress-bar-indeterminate```.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-rainbow``` has been renamed to ```progress-bar-rainbow```.

### Spinners
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-spinner``` has been renamed to ```spinner-material```.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```spinner-[color]``` have been dropped. ```text-[color]``` can be used for colored spinners.

## **Forms**
### Text Fields
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5's ```.form-floating``` for Text and Select fields.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Text and Select fields.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```m-text-field```, ```m-text-field-outline```, ```static-label``` & ```floating-label``` 
have been removed.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Color class ```primary-[color]``` has been replaced with ```base-[color]```.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Color class ```accent-[color]``` has been replaced with ```primary-[color]```.

### Select Fields
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap's dropdown component for the Select options.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5's ```.form-floating``` for Text and Select fields.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Text and Select fields.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Classes ```m-select```, ```m-select-outline```, ```static-label``` & ```floating-label``` have been removed.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Color class ```primary-[color]``` has been replaced with ```base-[color]```.
- <span class="badge bg-danger rounded-pill me-1">Breaking</span> 
Color class ```accent-[color]``` has been replaced with ```primary-[color]```.

### Input groups
v3 supports ```.input-group``` on Text and Select fields.

### Form validation
v3 supports form validation.

### Checkbox, Radio & Switch
<span class="badge bg-danger rounded-pill me-1">Breaking</span> Color classes ```input-[color]``` have been dropped.



