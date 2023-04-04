---
layout: docs
title: Installation
group: getting-started
aliases:
  - "/3.1/"
  - "/3.1/getting-started/"
  - "/getting-started/"
toc: true
keywords: getting-started, installation
---

## CDN

<ul class="nav nav-tabs" id="cdn-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="jsdelivr-tab" data-bs-toggle="tab" data-bs-target="#jsdelivr" type="button" role="tab" aria-controls="jsdelivr" aria-selected="true">
    jsDelivr
    <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="unpkg-tab" data-bs-toggle="tab" data-bs-target="#unpkg" type="button" role="tab" aria-controls="unpkg" aria-selected="false">
    unpkg
    <span class="ripple-surface"></span>
    </button>
  </li>
</ul>
<div class="tab-content" id="cdn-tab-content">
  <div class="tab-pane fade show active pt-2" id="jsdelivr" role="tabpanel" aria-labelledby="jsdelivr-tab" tabindex="0">
  
  Styles
  ```html
  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.0/dist/css/materialstyle.min.css" 
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
  <script src="https://cdn.jsdelivr.net/npm/@material/ripple@14.0.0/dist/mdc.ripple.min.js"
          integrity="sha384-9QANVmWxL3S8VRs8x1Q+bF1Zzogpy7P/Qw1+y5qHLdC1ig0EuoHg9VbB1SXyecdZ"
          crossorigin="anonymous"></script>
  
  <!-- Material Style JS -->
  <script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.0/dist/js/materialstyle.min.js" 
          integrity="sha384-Q5hpQ5oxjAOFZ4FCVYZ679rhwdssrUFlQuc38BExagMP+344TVLBb/3zKGhMBSES" 
          crossorigin="anonymous"></script>
  ```
  </div>
  
  <div class="tab-pane fade pt-2" id="unpkg" role="tabpanel" aria-labelledby="unpkg-tab" tabindex="0">
  
  Styles
  ```html
  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@materialstyle/materialstyle@3.1.0/dist/css/materialstyle.min.css" 
        integrity="sha384-Lnu1KIAOFhyJWM4oUSzwxyStv1OD4B2ZiTZts6q+0kEuYbz7owWW1K4zyMFI8Kb5" 
        crossorigin="anonymous">
  ```
  
  Scripts
  ```html
  <!-- Popper JS -->
  <script src="https://unpkg.com/@popperjs/core@2.10.2/dist/umd/popper.min.js" 
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" 
          crossorigin="anonymous"></script>
          
  <!-- MDC Ripple JS (Only for Ripple effects) -->
  <script src="https://unpkg.com/@material/ripple@14.0.0/dist/mdc.ripple.min.js"
          integrity="sha384-9QANVmWxL3S8VRs8x1Q+bF1Zzogpy7P/Qw1+y5qHLdC1ig0EuoHg9VbB1SXyecdZ"
          crossorigin="anonymous"></script>
  
  <!-- Material Style JS -->
  <script src="https://unpkg.com/@materialstyle/materialstyle@3.1.0/dist/js/materialstyle.min.js" 
          integrity="sha384-Q5hpQ5oxjAOFZ4FCVYZ679rhwdssrUFlQuc38BExagMP+344TVLBb/3zKGhMBSES" 
          crossorigin="anonymous"></script>
  ```
  </div>
</div>

<br>

## npm

<a target="_blank" href="https://github.com/materialstyle/materialstyle-examples" class="text-decoration-none text-dark">
  <div class="d-flex align-items-center callout primary my-4 rounded-3 overflow-hidden">
    <div class="d-flex align-items-center align-self-stretch callout-icon p-3 fs-4">
      <i class="bi bi-box-arrow-up-right"></i>
    </div>
    <div class="flex-grow-1 p-3 text-body">
      Head over to our <b>Material Style Examples</b> repository for examples on Webpack, Parcel & Vite.
    </div>
  </div>
</a>

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

<a class="btn btn-tertiary btn-lg rounded-pill" 
   href="https://github.com/materialstyle/materialstyle/releases/download/v3.1.0/materialstyle-3.1.0-dist.zip" download>
  Download v3.1.0
</a>

<br>
    
## Next steps
Check our <a class="link-theme text-decoration-none" href="/materialstyle/3.1/getting-started/starter-templates/">Starter Templates</a> to start laying out your site’s content and components.
