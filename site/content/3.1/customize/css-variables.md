---
layout: docs
title: CSS variables
group: customize
toc: true
keywords: customize, css variables
---

<p class="fs-4 ms-0 mb-4 page-description">
  Embrace Forward-Looking Design and Development with Material Style's CSS Custom Properties for Speed and Flexibility.
</p>

Material Style includes many [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS for real-time customization without the need to recompile Sass. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or general prototyping.

**All our custom properties are prefixed with `bs-`** to avoid conflicts with third party CSS.

## Root variables

Here are the variables we include (note that the `:root` is required) that can be accessed anywhere Material Style's CSS is loaded. They're located in our `_root.scss` file and included in our compiled dist files.

### Default

These CSS variables are available everywhere, regardless of color mode.

```css
:root,
[data-bs-theme=light] {
  --bs-gray-0: #f8f9fa;
  --bs-gray-1: #f1f3f5;
  --bs-gray-2: #e9ecef;
  --bs-gray-3: #dee2e6;
  --bs-gray-4: #ced4da;
  --bs-gray-5: #adb5bd;
  --bs-gray-6: #868e96;
  --bs-gray-7: #495057;
  --bs-gray-8: #343a40;
  --bs-gray-9: #212529;
  --bs-gray-10: #16191d;
  --bs-gray-11: #0d0f12;
  --bs-gray-12: #030507;
  --bs-primary: #0d6efd;
  --bs-primary-hover: #0b5ed7;
  --bs-primary-active: #0a58ca;
  --bs-primary-subtle: #cfe2ff;
  --bs-primary-subtle-hover: #aaccfe;
  --bs-primary-subtle-active: #9ec5fe;
  --bs-primary-emphasis: #084298;
  --bs-primary-emphasis-hover: #063272;
  --bs-text-on-primary: #fff;
  --bs-primary-border-subtle: #9ec5fe;
  --bs-secondary: #71767b;
  --bs-secondary-hover: #606469;
  --bs-secondary-active: #5a5e62;
  --bs-secondary-subtle: #e3e4e5;
  --bs-secondary-subtle-hover: #cdcfd1;
  --bs-secondary-subtle-active: #c6c8ca;
  --bs-secondary-emphasis: #44474a;
  --bs-secondary-emphasis-hover: #333537;
  --bs-text-on-secondary: #fff;
  --bs-secondary-border-subtle: #c6c8ca;
  --bs-tertiary: #d63384;
  --bs-tertiary-hover: #b62b70;
  --bs-tertiary-active: #ab296a;
  --bs-tertiary-subtle: #f7d6e6;
  --bs-tertiary-subtle-hover: #f1b8d4;
  --bs-tertiary-subtle-active: #efadce;
  --bs-tertiary-emphasis: #801f4f;
  --bs-tertiary-emphasis-hover: #60173b;
  --bs-text-on-tertiary: #fff;
  --bs-tertiary-border-subtle: #efadce;
  --bs-success: #198754;
  --bs-success-hover: #157347;
  --bs-success-active: #146c43;
  --bs-success-subtle: #d1e7dd;
  --bs-success-subtle-hover: #afd5c3;
  --bs-success-subtle-active: #a3cfbb;
  --bs-success-emphasis: #0f5132;
  --bs-success-emphasis-hover: #0b3d26;
  --bs-text-on-success: #fff;
  --bs-success-border-subtle: #a3cfbb;
  --bs-info: #0dcaf0;
  --bs-info-hover: #31d2f2;
  --bs-info-active: #3dd5f3;
  --bs-info-subtle: #cff4fc;
  --bs-info-subtle-hover: #aaecfa;
  --bs-info-subtle-active: #9eeaf9;
  --bs-info-emphasis: #087990;
  --bs-info-emphasis-hover: #065b6c;
  --bs-text-on-info: #000;
  --bs-info-border-subtle: #9eeaf9;
  --bs-warning: #ffc107;
  --bs-warning-hover: #ffca2c;
  --bs-warning-active: #ffcd39;
  --bs-warning-subtle: #fff3cd;
  --bs-warning-subtle-hover: #ffe9a8;
  --bs-warning-subtle-active: #ffe69c;
  --bs-warning-emphasis: #997404;
  --bs-warning-emphasis-hover: #735703;
  --bs-text-on-warning: #000;
  --bs-warning-border-subtle: #ffe69c;
  --bs-danger: #dc3545;
  --bs-danger-hover: #bb2d3b;
  --bs-danger-active: #b02a37;
  --bs-danger-subtle: #f8d7da;
  --bs-danger-subtle-hover: #f3b8be;
  --bs-danger-subtle-active: #f1aeb5;
  --bs-danger-emphasis: #842029;
  --bs-danger-emphasis-hover: #63181f;
  --bs-text-on-danger: #fff;
  --bs-danger-border-subtle: #f1aeb5;
  --bs-light: #f8f9fa;
  --bs-light-hover: #f9fafb;
  --bs-light-active: #f9fafb;
  --bs-light-subtle: #fefefe;
  --bs-light-subtle-hover: #fdfdfd;
  --bs-light-subtle-active: #fcfdfd;
  --bs-light-emphasis: #959596;
  --bs-light-emphasis-hover: #707071;
  --bs-text-on-light: #000;
  --bs-light-border-subtle: #fcfdfd;
  --bs-dark: #212529;
  --bs-dark-hover: #1c1f23;
  --bs-dark-active: #1a1e21;
  --bs-dark-subtle: #d3d3d4;
  --bs-dark-subtle-hover: #b1b3b4;
  --bs-dark-subtle-active: #a6a8a9;
  --bs-dark-emphasis: #141619;
  --bs-dark-emphasis-hover: #0f1112;
  --bs-text-on-dark: #fff;
  --bs-dark-border-subtle: #a6a8a9;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 113, 118, 123;
  --bs-tertiary-rgb: 214, 51, 132;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #343a40;
  --bs-body-color-rgb: 52, 58, 64;
  --bs-body-bg: #fff;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-surface-color: #212529;
  --bs-surface-color-rgb: 33, 37, 41;
  --bs-surface-bg: #f1f3f5;
  --bs-surface-bg-rgb: 241, 243, 245;
  --bs-surface-bg-hover: #eceef0;
  --bs-emphasis-color: #000;
  --bs-emphasis-color-rgb: 0, 0, 0;
  --bs-muted-color: #868e96;
  --bs-link-color: var(--bs-primary);
  --bs-link-decoration: underline;
  --bs-link-hover-color: var(--bs-primary-hover);
  --bs-code-color: var(--bs-tertiary);
  --bs-highlight-bg: #fff3cd;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #e9ecef;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-2xl: var(--bs-border-radius-xxl);
  --bs-border-radius-pill: 50rem;
  --bs-box-shadow: var(--bs-shadow-8dp);
  --bs-box-shadow-sm: var(--bs-shadow-1dp);
  --bs-box-shadow-lg: var(--bs-shadow-18dp);
  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-form-control-bg: var(--bs-body-bg);
  --bs-form-control-disabled-bg: var(--bs-surface-bg);
  --bs-breakpoint-xs: 0;
  --bs-breakpoint-sm: 576px;
  --bs-breakpoint-md: 768px;
  --bs-breakpoint-lg: 992px;
  --bs-breakpoint-xl: 1200px;
  --bs-breakpoint-xxl: 1400px;
  --bs-shadow-1dp: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  --bs-shadow-2dp: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  --bs-shadow-3dp: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
  --bs-shadow-4dp: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  --bs-shadow-5dp: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
  --bs-shadow-6dp: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  --bs-shadow-7dp: 0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);
  --bs-shadow-8dp: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  --bs-shadow-9dp: 0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12);
  --bs-shadow-10dp: 0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);
  --bs-shadow-11dp: 0 6px 7px -4px rgba(0,0,0,.2), 0 11px 15px 1px rgba(0,0,0,.14), 0 4px 20px 3px rgba(0,0,0,.12);
  --bs-shadow-12dp: 0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12);
  --bs-shadow-13dp: 0 7px 8px -4px rgba(0,0,0,.2), 0 13px 19px 2px rgba(0,0,0,.14), 0 5px 24px 4px rgba(0,0,0,.12);
  --bs-shadow-14dp: 0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12);
  --bs-shadow-15dp: 0 8px 9px -5px rgba(0,0,0,.2), 0 15px 22px 2px rgba(0,0,0,.14), 0 6px 28px 5px rgba(0,0,0,.12);
  --bs-shadow-16dp: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);
  --bs-shadow-17dp: 0 8px 11px -5px rgba(0,0,0,.2), 0 17px 26px 2px rgba(0,0,0,.14), 0 6px 32px 5px rgba(0,0,0,.12);
  --bs-shadow-18dp: 0 9px 11px -5px rgba(0,0,0,.2), 0 18px 28px 2px rgba(0,0,0,.14), 0 7px 34px 6px rgba(0,0,0,.12);
  --bs-shadow-19dp: 0 9px 12px -6px rgba(0,0,0,.2), 0 19px 29px 2px rgba(0,0,0,.14), 0 7px 36px 6px rgba(0,0,0,.12);
  --bs-shadow-20dp: 0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12);
  --bs-shadow-21dp: 0 10px 13px -6px rgba(0,0,0,.2), 0 21px 33px 3px rgba(0,0,0,.14), 0 8px 40px 7px rgba(0,0,0,.12);
  --bs-shadow-22dp: 0 10px 14px -6px rgba(0,0,0,.2), 0 22px 35px 3px rgba(0,0,0,.14), 0 8px 42px 7px rgba(0,0,0,.12);
  --bs-shadow-23dp: 0 11px 14px -7px rgba(0,0,0,.2), 0 23px 36px 3px rgba(0,0,0,.14), 0 9px 44px 8px rgba(0,0,0,.12);
  --bs-shadow-24dp: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
  --bs-focus-ring-width: 0.25rem;
  --bs-focus-ring-opacity: 0.25;
  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), 0.25);
}
```
<br>

### Dark mode

These variables are scoped to our built-in dark mode.

```css
[data-bs-theme=dark] {
  color-scheme: dark;
  --bs-body-color: #ced4da;
  --bs-body-color-rgb: 206, 212, 218;
  --bs-body-bg: #16191d;
  --bs-body-bg-rgb: 22, 25, 29;
  --bs-surface-color: #dee2e6;
  --bs-surface-color-rgb: 222, 226, 230;
  --bs-surface-bg: #212529;
  --bs-surface-bg-rgb: 33, 37, 41;
  --bs-surface-bg-hover: #25292d;
  --bs-emphasis-color: #fff;
  --bs-emphasis-color-rgb: 255, 255, 255;
  --bs-muted-color: #868e96;
  --bs-primary: #62a1fe;
  --bs-primary-rgb: 98, 161, 254;
  --bs-primary-hover: #81b4fe;
  --bs-primary-active: #91bdfe;
  --bs-primary-subtle: #052c65;
  --bs-primary-subtle-hover: #063272;
  --bs-primary-subtle-active: #084298;
  --bs-primary-emphasis: #92befe;
  --bs-primary-emphasis-hover: #86b7fe;
  --bs-text-on-primary: #000;
  --bs-primary-border-subtle: #084298;
  --bs-secondary: #a3a6a9;
  --bs-secondary-rgb: 163, 166, 169;
  --bs-secondary-hover: #b5b8ba;
  --bs-secondary-active: #bfc1c3;
  --bs-secondary-subtle: #2d2f31;
  --bs-secondary-subtle-hover: #333537;
  --bs-secondary-subtle-active: #44474a;
  --bs-secondary-emphasis: #bfc1c4;
  --bs-secondary-emphasis-hover: #b8bbbd;
  --bs-text-on-secondary: #000;
  --bs-secondary-border-subtle: #44474a;
  --bs-tertiary: #e47aaf;
  --bs-tertiary-rgb: 228, 122, 175;
  --bs-tertiary-hover: #e995bf;
  --bs-tertiary-active: #eca2c7;
  --bs-tertiary-subtle: #561435;
  --bs-tertiary-subtle-hover: #60173b;
  --bs-tertiary-subtle-active: #801f4f;
  --bs-tertiary-emphasis: #eda3c8;
  --bs-tertiary-emphasis-hover: #eb99c2;
  --bs-text-on-tertiary: #000;
  --bs-tertiary-border-subtle: #801f4f;
  --bs-success: #6ab190;
  --bs-success-rgb: 106, 177, 144;
  --bs-success-hover: #88c1a6;
  --bs-success-active: #97c8b1;
  --bs-success-subtle: #0a3622;
  --bs-success-subtle-hover: #0b3d26;
  --bs-success-subtle-active: #0f5132;
  --bs-success-emphasis: #98c9b2;
  --bs-success-emphasis-hover: #8cc3aa;
  --bs-text-on-success: #000;
  --bs-success-border-subtle: #0f5132;
  --bs-info: #62ddf5;
  --bs-info-rgb: 98, 221, 245;
  --bs-info-hover: #81e4f7;
  --bs-info-active: #91e7f8;
  --bs-info-subtle: #055160;
  --bs-info-subtle-hover: #065b6c;
  --bs-info-subtle-active: #087990;
  --bs-info-emphasis: #92e7f8;
  --bs-info-emphasis-hover: #86e5f8;
  --bs-text-on-info: #000;
  --bs-info-border-subtle: #087990;
  --bs-warning: #ffd75e;
  --bs-warning-rgb: 255, 215, 94;
  --bs-warning-hover: #ffdf7e;
  --bs-warning-active: #ffe38e;
  --bs-warning-subtle: #664d03;
  --bs-warning-subtle-hover: #735703;
  --bs-warning-subtle-active: #997404;
  --bs-warning-emphasis: #ffe38f;
  --bs-warning-emphasis-hover: #ffe083;
  --bs-text-on-warning: #000;
  --bs-warning-border-subtle: #997404;
  --bs-danger: #e87c86;
  --bs-danger-rgb: 232, 124, 134;
  --bs-danger-hover: #ed969e;
  --bs-danger-active: #efa3aa;
  --bs-danger-subtle: #58151c;
  --bs-danger-subtle-hover: #63181f;
  --bs-danger-subtle-active: #842029;
  --bs-danger-emphasis: #efa4ab;
  --bs-danger-emphasis-hover: #ee9aa2;
  --bs-text-on-danger: #000;
  --bs-danger-border-subtle: #842029;
  --bs-light: #fafbfc;
  --bs-light-rgb: 250, 251, 252;
  --bs-light-hover: #fbfcfd;
  --bs-light-active: #fcfcfd;
  --bs-light-subtle: #636464;
  --bs-light-subtle-hover: #707071;
  --bs-light-subtle-active: #959596;
  --bs-light-emphasis: #fcfcfd;
  --bs-light-emphasis-hover: #fcfcfd;
  --bs-text-on-light: #000;
  --bs-light-border-subtle: #959596;
  --bs-dark: #6f7174;
  --bs-dark-rgb: 111, 113, 116;
  --bs-dark-hover: #595a5d;
  --bs-dark-active: #4e4f51;
  --bs-dark-subtle: #0d0f10;
  --bs-dark-subtle-hover: #0f1112;
  --bs-dark-subtle-active: #141619;
  --bs-dark-emphasis: #9b9d9f;
  --bs-dark-emphasis-hover: #909294;
  --bs-text-on-dark: #fff;
  --bs-dark-border-subtle: #141619;
  --bs-heading-color: #fff;
  --bs-border-color: #495057;
  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);
}
```
<br>

## Component variables

Material Style is making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of our components after Sass compilation.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `bs-` (note the trailing dash).

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables.

```css
body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-tertiary);
}
```
<br>

## Focus variables

Material Style provides custom `:focus` styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all `:focus` styles.

In our Sass, we set default values that can be customized before compiling.

{{< scss-docs name="focus-ring-variables" file="scss/_variables.scss" >}}

Those variables are then reassigned to `:root` level CSS variables that can be customized in real-time, including with options for `x` and `y` offsets (which default to their fallback value of `0`).

{{< scss-docs name="root-focus-variables" file="scss/_root.scss" >}}
<br>

## Grid breakpoints

While we include our grid breakpoints as CSS variables (except for `xs`), be aware that **CSS variables do not work in media queries**. This is by design in the CSS spec for variables, but may change in coming years with support for `env()` variables. Check out [this Stack Overflow answer](https://stackoverflow.com/a/47212942) for some helpful links. In the meantime, you can use these variables in other CSS situations, as well as in your JavaScript.
