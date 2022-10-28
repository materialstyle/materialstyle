---
layout: docs
title: Starter Templates
group: getting-started
toc: true
keywords: getting-started, layout, starter-template
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  Be sure to have your pages set up with the latest design and development standards. 
  That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.
</p>

## HTML5 doctype
Bootstrap requires the use of the HTML5 doctype. 
Without it, you’ll see some funky incomplete styling, 
but including it shouldn’t cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">

</html>
```

<br>

## Responsive meta tag
Bootstrap is developed mobile first, a strategy in which it optimizes code for mobile devices first 
and then scales up components as necessary using CSS media queries. 
To ensure proper rendering and touch zooming for all devices, 
add the responsive viewport meta tag to your ```<head>```.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

<br>

## Box-sizing
For more straightforward sizing in CSS, Bootstrap switches the global ```box-sizing``` value 
from ```content-box``` to ```border-box```. This ensures ```padding``` does not affect the final 
computed width of an element, but it can cause problems with some third-party software like 
Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

<br>

For your convenience, we have created two starter templates:
1. <a class="link-purple text-decoration-none" href="#template-with-sidebardrawer">With Sidebar/Drawer</a>
2. <a class="link-purple text-decoration-none" href="#template-without-sidebardrawer">Without Sidebar/Drawer</a>

<br>

## Template with Sidebar/Drawer

<div class="d-flex align-items-center justify-content-center my-4">
  <img class="lazy border border-purple" style="width:100%;max-width:800px;"
       src="/materialstyle/assets/images/default.jpg"
       data-src="/materialstyle/assets/images/with_drawer.jpg"
       data-srcset="/materialstyle/assets/images/with_drawer.jpg"
       alt="with drawer">
</div>

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-purple navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <button class="drawer-toggler me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawerAutoHide">
        <span class="drawer-toggler-icon"></span>
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
  <div class="offcanvas-header bg-purple">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-purple bg-opacity-10">
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

<br>

## Template without Sidebar/Drawer

<div class="d-flex align-items-center justify-content-center my-4">
  <img class="lazy border border-purple" style="width:100%;max-width:800px;"
       src="/materialstyle/assets/images/default.jpg"
       data-src="/materialstyle/assets/images/without_drawer.jpg"
       data-srcset="/materialstyle/assets/images/without_drawer.jpg"
       alt="without drawer">
</div>

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-purple navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star-fill me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<div class="container">

  <!-- Your content here -->

</div>

<footer class="bg-dark text-white p-3">
  Footer
</footer>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```
