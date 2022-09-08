---
layout: docs
title: Installation
group: getting-started
aliases:
  - "/3.0/"
  - "/3.0/getting-started/"
  - "/getting-started/"
toc: true
keywords: getting-started, installation
---

## CDN

Styles

```html
<!-- Material Style CSS -->
<link rel="stylesheet"
      href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css" 
      integrity="sha384-Lnu1KIAOFhyJWM4oUSzwxyStv1OD4B2ZiTZts6q+0kEuYbz7owWW1K4zyMFI8Kb5" 
      crossorigin="anonymous">
```

Scripts

```html
<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" 
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" 
        crossorigin="anonymous"></script>
        
<!-- MDC Ripple JS (Only for Ripple effects) -->
<script src="https://unpkg.com/@material/ripple@14.0.0/dist/mdc.ripple.min.js"
        integrity="sha384-9QANVmWxL3S8VRs8x1Q+bF1Zzogpy7P/Qw1+y5qHLdC1ig0EuoHg9VbB1SXyecdZ"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js" 
        integrity="sha384-Q5hpQ5oxjAOFZ4FCVYZ679rhwdssrUFlQuc38BExagMP+344TVLBb/3zKGhMBSES" 
        crossorigin="anonymous"></script>
```

<br>

## npm

Install

```console
npm i @materialstyle/materialstyle
```

Our Select Fields, Dropdowns, Popovers, and Tooltips depend on Popper, install it using:

```console
npm i @popperjs/core
```

For ripple effects, install @material/ripple:

```console
npm i @material/ripple@14.0.0
```

Import Material Style

```javascript
import * as materialstyle from '@materialstyle/materialstyle'
import { MDCRipple } from '@material/ripple';
```

Alternatively, you may import plugins individually as needed

```javascript
import { Util, Dropdown, Offcanvas, Popover } from '@materialstyle/materialstyle';
import { MDCRipple } from '@material/ripple';
```

Import Material Style SCSS in your SCSS file

```scss
@import "~@materialstyle/materialstyle/scss/materialstyle";
```

<br>

## Download

<a class="btn btn-purple btn-lg rounded-pill" 
   href="https://github.com/materialstyle/materialstyle.github.io/raw/main/store/3.0.0.zip" download>
  Download v3.0.0
</a>

<br>
    
## Next steps
For the next steps, check our <a class="link-purple text-decoration-none" href="/materialstyle/3.0/getting-started/starter-templates/">Starter Templates</a> to start laying out your site’s content and components.
