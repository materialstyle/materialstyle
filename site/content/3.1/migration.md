---
layout: docs
title: Migrating to v3
group: migration
toc: true
keywords: migration
---

<p class="fs-4 ms-0 mb-4 page-description">
Review changes in Material Style source files, documentation, and components to 
migrate from v2 to v3.
</p>

## **v3.1.0-alpha2**
*Based on Bootstrap v5.3.1*

### Docs
Added documentation for Layout, Utilities & Helpers

### Forms
Text and Select Fields now use the global `border-width` & `border-radius`

### Theming
We have created <a class="link-pink" href="https://materialstyle.github.io/theme-builder">Theme builder</a>, 
a tool for customizing Material Style. With this tool, you can effortlessly select your theme color, 
set the global `border-width`, and adjust `border-radius`. The tool offers real-time previews on components, making it 
easy to visualize your design choices. Additionally, it automatically generates **CSS variables** based on your 
theme color selection.

---

## **v3.1.0-alpha1**
*Based on Bootstrap v5.3.0-alpha3*

**Follows the following Bootstrap migration guides:**
- <a class="link-pink" href="https://getbootstrap.com/docs/5.3/migration/#v530-alpha1">Bootstrap v5.3.0-alpha1 migration guide</a>
- <a class="link-pink" href="https://getbootstrap.com/docs/5.3/migration/#v530-alpha2">Bootstrap v5.3.0-alpha2 migration guide</a>
- <a class="link-pink" href="https://getbootstrap.com/docs/5.3/migration/#v530">Bootstrap v5.3.0 migration guide</a>

### Docs
- Added Light and Dark modes.
- Added Customization docs.

### Customization
#### Color modes
- Material Style supports Light and Dark color modes. See [the color modes documentation]({{< docsref "/colors/color-modes" >}}) to learn more.
- Theme colors are adaptive to Light and Dark modes by default.

#### Theming
Theme colors can be customized using CSS variables. And the components are updated to use theme colors from the CSS variables. It allows for custom theming using CSS variables. Helpful for CDN users. See [theming]({{< docsref "/colors/theming" >}}) to learn more.

#### Colors
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Colors `red`, `pink`, `purple`, `indigo`, `blue`, `cyan`, `teal`, `green`, `yellow` & `orange`
have been removed in favour of custom theming.

### Components
- Added elevated buttons (Buttons with shadows).
- Added support for Dark Select and Text Fields.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes `.base-[color]` & `.primary-[color]` are depricated from Selects, Text fields & Tabs.

---

## **v3.0.0**
*Based on Bootstrap v5.3.0-alpha3*

Material Style v3.0.0 is a major rewrite of the entire project. The most notable changes are 
summarized below.

**Follows** <a class="link-pink" href="https://getbootstrap.com/docs/5.2/migration/">Bootstrap v5.2.0 migration guide</a>.

<br>

### **Utilities**
#### Colors
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
To avoid increased file sizes, v3 uses only a subset of the v2 color palette. 
It uses Bootstrap's default theme colors + pink, purple, indigo, teal, orange, white & black.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Color shades (Example: ```red-50```, ```blue-500```, ```pink-a100```) have been removed to 
reduce file size.

#### Ripple
- v3 uses the official Material Design Ripple package 
<a class="link-pink" href="https://www.npmjs.com/package/@material/ripple">@material/ripple</a>
for the ripple effects.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> Unlike v2, where the ripple effect is directly 
applied to components, in v3, we need to add an element 
```<span class="ripple-surface"></span>``` to the desired component like a Button and activate 
the effect on the ```ripple-surface```.

#### Shadows
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```raised-*dp``` have been renamed to ```shadow-*dp```
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Class ```unelevated``` has been replaced with ```shadow-none```

### **Components**
#### Buttons
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```btn-text-[color]``` have been dropped. 
```btn-outline-[color] border-0``` can be used for Text Buttons.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
File inputs now use Bootstrap's default styling. 
Classes ```m-file-input``` and ```btn-file``` have been dropped.

#### Floating Action Buttons
<span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Class ```extended-fab``` has been dropped. ```rounded-pill``` can be used.

#### Cards
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```card-outline-[color]``` have been dropped. 
```border border-[color]``` can be used for Cards with border.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```card-actions```, ```card-buttons``` & ```card-icons``` have been dropped as well.

#### Drawer / Sidebar
<span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5’s Offcanvas component for Drawers.

#### Progress bars
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-progress``` has been renamed to ```progress-bar-indeterminate```.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-rainbow``` has been renamed to ```progress-bar-rainbow```.

#### Spinners
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Class ```m-spinner``` has been renamed to ```spinner-material```.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```spinner-[color]``` have been dropped. ```text-[color]``` can be used for colored spinners.

### **Forms**
#### Text Fields
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5's ```.form-floating``` for Text and Select fields.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Text and Select fields.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```m-text-field```, ```m-text-field-outline```, ```static-label``` & ```floating-label``` 
have been removed.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Color class ```primary-[color]``` has been replaced with ```base-[color]```.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Color class ```accent-[color]``` has been replaced with ```primary-[color]```.

#### Select Fields
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap's dropdown component for the Select options.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
v3 uses Bootstrap 5's ```.form-floating``` for Text and Select fields.
- Introduced ```.form-floating-with-icon``` to support icons and spinners on Text and Select fields.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Classes ```m-select```, ```m-select-outline```, ```static-label``` & ```floating-label``` have been removed.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Color class ```primary-[color]``` has been replaced with ```base-[color]```.
- <span class="badge text-bg-danger rounded-pill me-1">Breaking</span> 
Color class ```accent-[color]``` has been replaced with ```primary-[color]```.

#### Input groups
v3 supports ```.input-group``` on Text and Select fields.

#### Form validation
v3 supports form validation.

#### Checkbox, Radio & Switch
<span class="badge text-bg-danger rounded-pill me-1">Breaking</span> Color classes ```input-[color]``` have been dropped.



