---
layout: docs
title: Color modes
group: colors
toc: true
keywords: colors, color modes
---

<p class="fs-4 ms-0 mb-4 page-description">
Material Style supports color modes, or themes, as of v3.1.0. Explore our default light color mode and the new dark mode, or create your own using our styles as your template. 
</p>

## Dark mode
**Material Style supports color modes, starting with dark mode!** As of v3.1.0 you can implement 
your own color mode toggler and apply the different color modes as you see fit. 
We support a light mode (default) and dark mode. 
Color modes can be toggled globally on the ```<html>``` element, or on specific components 
and elements, thanks to the ```data-bs-theme``` attribute.

Alternatively, you can also switch to a media query implementation thanks to our color mode 
mixin—see <a href="#building-with-sass">the usage section for details</a>. 
Heads up though—this eliminates your ability to change themes on a per-component basis as 
shown below.

### Example
For example, to change the color mode of a dropdown menu, add ```data-bs-theme="light"``` or 
```data-bs-theme="dark"``` to the parent ```.dropdown```. Now, no matter the global color mode, 
these dropdowns will display with the specified theme value.

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}

<div class="dropdown" data-bs-theme="light">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown in light mode
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
##split##
<div class="dropdown" data-bs-theme="dark">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown in dark mode
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

{{< /example >}}

## How it works
- As shown above, color mode styles are controlled by the ```data-bs-theme``` attribute. 
This attribute can be applied to the ```<html>``` element, or to any other element or 
Material Style component. If applied to the ```<html>``` element, it will apply to everything. 
If applied to a component or element, it will be scoped to that specific component or element.

- For each color mode you wish to support, you'll need to add new overrides for the shared 
global CSS variables. We do this already in our ```_root.scss``` stylesheet for dark mode, 
with light mode being the default values. In writing color mode specific styles, use the mixin:

```scss
// Color mode variables in _root.scss
@include color-mode(dark) {
  // CSS variable overrides here...
}
```
<br>

- We use a custom ```_variables-dark.scss``` to power those shared global CSS variable overrides 
for dark mode. This file isn't required for your own custom color modes, but it's required for 
our dark mode for two reasons. First, it's better to have a single place to reset global colors. 
Second, some Sass variables had to be overridden for background images embedded in our CSS for 
accordions, form components, and more.

## Usage

### Enable dark mode
Enable the built in dark color mode across your entire project by adding the 
```data-bs-theme="dark"``` attribute to the ```<html>``` element. This will apply the dark 
color mode to all components and elements, other than those with a specific ```data-bs-theme``` 
attribute applied.

```html
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.0/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <button class="navbar-toggler me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawerAutoHide">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star-fill me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas offcanvas-start offcanvas-md offcanvas-light" tabindex="-1"
       id="drawerAutoHide">
  <div class="offcanvas-header bg-primary">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-primary bg-opacity-10">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="javascript:">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:">
          Link
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link"
           data-bs-toggle="collapse"
           href="#menuA"
           role="button"
           aria-expanded="false"
           aria-controls="menuA">
          Menu A
        </a>
        <div class="collapse" id="menuA">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link ps-4" href="javascript:">
                Menu Item
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ps-4" href="javascript:">
                Menu Item
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</aside>

<div class="offcanvas-pushed-content">
  <div class="container">

    <!-- Your content here -->

  </div>

  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

Material Style does not yet ship with a built-in color mode picker, but you can use the one 
from our own documentation if you like. <a href="#javascript">Learn more in the JavaScript section.</a>

<br>

### Building with Sass

Our new dark mode option is available to use for all users of Material Style, but it's controlled via 
data attributes instead of media queries and does not automatically toggle your project's 
color mode. You can disable our dark mode entirely via Sass by changing ```$enable-dark-mode``` to 
```false```.

We use a custom Sass mixin, ```color-mode()```, to help you control how color modes are applied. 
By default, we use a ```data``` attribute approach, allowing you to create more user-friendly 
experiences where your visitors can choose to have an automatic dark mode or control their 
preference (like in our own docs here). This is also an easy and scalable way to add different 
themes and more custom color modes beyond light and dark.

In case you want to use media queries and only make color modes automatic, you can change 
the mixin’s default type via Sass variable. Consider the following snippet and it’s compiled 
CSS output.

```scss
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

Outputs to:

```css
[data-bs-theme="dark"] .element {
  color: var(--bs-primary-text);
  background-color: var(--bs-primary-bg-subtle);
}
```

And when setting to ```media-query```:

```scss
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--bs-primary-text);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

Outputs to:

```css
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--bs-primary-text);
    background-color: var(--bs-primary-bg-subtle);
  }
}
```

<br>

## Custom color modes

While the primary use case for color modes is light and dark mode, custom color modes are also 
possible. Create your own ```data-bs-theme``` selector with a custom value as the name of your 
color mode, then modify our Sass and CSS variables as needed. We opted to create a separate 
```_variables-dark.scss``` stylesheet to house Material Style's dark mode specific Sass variables, 
but that's not required for you.

For example, you can create a “purple theme” with the selector ```data-bs-theme="purple"```. 
In your custom Sass or CSS file, add the new selector and override any global or component 
CSS variables as needed. If you’re using Sass, you can also use Sass’s functions within your 
CSS variable overrides.

{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap gap-2" >}}
<style>
  [data-bs-theme="purple"] {
    --bs-body-color: #fff;
    --bs-body-color-rgb: 255, 255, 255;
    --bs-body-bg: #8c68cd;
    --bs-body-bg-rgb: 140, 104, 205;
  }
  
  [data-bs-theme="purple"] .dropdown-menu {
    --bs-dropdown-bg: #432874;
    --bs-dropdown-link-active-bg: #59359a;
    --bs-dropdown-link-hover-bg: #6f42c1;
  }
  
  [data-bs-theme="purple"] .btn-purple {
    --bs-btn-color: #fff;
    --bs-btn-bg: #6f42c1;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #59359a;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #432874;
  }
</style>
##split##
<div class="text-body bg-body p-3" data-bs-theme="purple">
  <div class="h4">Example purple theme</div>
  <p>Some paragraph text to show how the purple theme might look with written copy.</p>
  <hr class="my-4">
  <div class="dropdown">
    <button class="btn btn-purple dropdown-toggle" type="button" id="dropdownMenuButtonCustom" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonCustom">
      <li><a class="dropdown-item active" href="javascript:">Action</a></li>
      <li><a class="dropdown-item" href="javascript:">Action</a></li>
      <li><a class="dropdown-item" href="javascript:">Another action</a></li>
      <li><a class="dropdown-item" href="javascript:">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="javascript:">Separated link</a></li>
    </ul>
  </div>
</div>

{{< /example >}}

<br>

## Javascript

To allow visitors or users to toggle color modes, you’ll need to create a toggle element to 
control the ```data-bs-theme``` attribute on the root element, ```<html>```. We’ve built a 
toggler in our documentation that initially defers to a user’s current system color mode, 
but provides an option to override that and pick a specific color mode.

Here’s a look at the JavaScript that powers it. Feel free to inspect our own documentation navbar 
to see how it’s implemented using HTML and CSS from our own components. Note that if you decide 
to use media queries for your color modes, your JavaScript may need to be modified or removed if 
you prefer an implicit control.

```javascript
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive.classList.add('active')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()
```

<br>

## CSS

### Variables

Dozens of root level CSS variables are repeated as overrides for dark mode. These are scoped to 
the color mode selector, which defaults to ```data-bs-theme``` but 
<a href="#building-with-sass">can be configured</a> to use a ```prefers-color-scheme``` media 
query. Use these variables as a guideline for generating your own new color modes.

```scss
--#{$prefix}body-color: #{$body-color-dark};
--#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};
--#{$prefix}body-bg: #{$body-bg-dark};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};

--#{$prefix}surface-color: #{$surface-color-dark};
--#{$prefix}surface-color-rgb: #{to-rgb($surface-color-dark)};
--#{$prefix}surface-bg: #{$surface-bg-dark};
--#{$prefix}surface-bg-rgb: #{to-rgb($surface-bg-dark)};
--#{$prefix}surface-bg-hover: #{$surface-bg-dark-hover};

--#{$prefix}emphasis-color: #{$emphasis-color-dark};
--#{$prefix}emphasis-color-rgb: #{to-rgb($emphasis-color-dark)};

--#{$prefix}muted-color: #{$muted-color-dark};

@each $color, $value in $theme-colors {
  $theme: tint-color($value, $theme-dark-tint-amount);

  --#{$prefix}#{$color}: #{$theme};
  --#{$prefix}#{$color}-rgb: #{to-rgb($theme)};
  --#{$prefix}#{$color}-hover: #{if(color-contrast($theme) == $color-contrast-light, shade-color($theme, $theme-dark-hover-shade-amount), tint-color($theme, $theme-dark-hover-tint-amount))};
  --#{$prefix}#{$color}-active: #{if(color-contrast($theme) == $color-contrast-light, shade-color($theme, $theme-dark-active-shade-amount), tint-color($theme, $theme-dark-active-tint-amount))};
  --#{$prefix}#{$color}-subtle: #{shade-color($value, $theme-dark-subtle-shade-amount)};
  --#{$prefix}#{$color}-subtle-hover: #{shade-color($value, $theme-dark-subtle-hover-shade-amount)};
  --#{$prefix}#{$color}-subtle-active: #{shade-color($value, $theme-dark-subtle-active-shade-amount)};
  --#{$prefix}#{$color}-emphasis: #{tint-color($value, $theme-dark-emphasis-tint-amount)};
  --#{$prefix}#{$color}-emphasis-hover: #{tint-color($value, $theme-dark-emphasis-hover-tint-amount)};
  --#{$prefix}text-on-#{$color}: #{color-contrast($theme)};
  --#{$prefix}#{$color}-border-subtle: #{shade-color($value, $theme-dark-border-subtle-shade-amount)};
}

--#{$prefix}heading-color: #{$headings-color-dark};

--#{$prefix}border-color: #{$border-color-dark};
--#{$prefix}border-color-translucent: #{$border-color-translucent-dark};
```

<br>

### Sass variables

CSS variables for our dark color mode are partially generated from dark mode specific Sass 
variables in ```_variables-dark.scss```. This also includes some custom overrides for changing 
the colors of embedded SVGs used throughout our components.

```scss
$theme-dark-tint-amount:                35% !default;
$theme-dark-hover-shade-amount:         20% !default;
$theme-dark-hover-tint-amount:          20% !default;
$theme-dark-active-shade-amount:        30% !default;
$theme-dark-active-tint-amount:         30% !default;
$theme-dark-subtle-shade-amount:        60% !default;
$theme-dark-subtle-hover-shade-amount:  55% !default;
$theme-dark-subtle-active-shade-amount: 40% !default;
$theme-dark-emphasis-tint-amount:       55% !default;
$theme-dark-emphasis-hover-tint-amount: 50% !default;
$theme-dark-border-subtle-shade-amount: 40% !default;

$body-bg-dark:                      $gray-10 !default;
$body-color-dark:                   $gray-4 !default;

$surface-bg-dark:                   $gray-9 !default;
$surface-bg-dark-hover:             tint-color($surface-bg-dark, 2%) !default;
$surface-color-dark:                $gray-3 !default;

$emphasis-color-dark:               $white !default;
$muted-color-dark:                  $gray-6 !default;

$border-color-dark:                 $gray-7 !default;
$border-color-translucent-dark:     rgba($white, .15) !default;
$headings-color-dark:               $white !default;


//
// Forms
//

$form-select-checkmark-dark:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$body-color-dark}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>") !default;

$form-select-indicator-color-dark:  $body-color-dark !default;
$form-select-indicator-dark:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color-dark}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/></svg>") !default;

$form-switch-color-dark:            rgba($white, .25) !default;
$form-switch-bg-image-dark:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color-dark}'/></svg>") !default;
$form-switch-square-bg-image-dark:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 8 8'><rect width='6' height='6' fill='#{$form-switch-color-dark}'/></svg>") !default;

$form-check-input-checked-bg-image-dark: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='#{$body-bg-dark}' stroke-width='3.5' d='M1.73,12.91 8.1,19.28 22.79,4.59'/></svg>") !default;
$form-check-radio-checked-bg-image-dark: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='none' stroke='#{$body-bg-dark}' stroke-width='1.5'/></svg>") !default;

//
// Accordion
//

$accordion-button-icon-dark:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$body-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;
$accordion-button-active-icon-dark:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$emphasis-color-dark}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !default;

$navbar-dark-toggler-icon-bg:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{rgba($black, .55)}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
```

<br>

### Sass mixin

Styles for dark mode, and any custom color modes you create, can be scoped appropriately to the 
```data-bs-theme``` attribute selector or media query with the customizable ```color-mode()``` 
mixin. See the <a href="#building-with-sass">Sass usage section</a> for more details.

```scss
@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root {
          @content;
        }
      }
    } @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  } @else {
    [data-bs-theme="#{$mode}"] {
      @content;
    }
  }
}
```
