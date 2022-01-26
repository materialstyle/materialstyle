---
layout: docs
title: Drawer / Sidebar
group: components
toc: true
keywords: layout, drawer
---

# Drawer / Sidebar

<p class="fs-4 ms-0 mb-4 text-secondary">
  Drawers provide access to destinations and app functionality, such as switching accounts.
</p>

<div class="d-flex align-items-center justify-content-center my-4">
  <img class="lazy border border-purple" width="100%" style="max-width:800px;"
       src="/materialstyle/assets/images/default.jpg"
       data-src="/materialstyle/assets/images/with_drawer.jpg"
       data-srcset="/materialstyle/assets/images/with_drawer.jpg"
       alt="with drawer">
</div>

We use Bootstrap's Offcanvas component for Drawers which come in two types:
1. Drawer - Hidden by default and can be toggled using the drawer toggler.
2. Drawer Responsive - Visible by default on large screens, transforms automatically into a standard Drawer on small screens.

<br>

## Drawer

<div class="border rounded-3">
  <div class="p-4 d-flex justify-content-center">
    <a class="btn btn-success rounded-pill px-4" href="/materialstyle/3.0/demo/drawer">
      View Demo <i class="bi bi-box-arrow-up-right"></i>
      <span class="ripple-surface"></span>
    </a>
  </div>

  <div class="d-flex justify-content-end">
    <btn class="btn btn-sm btn-outline-purple border-0 rounded-0 d-flex align-items-center" data-bs-toggle="collapse" href="#code1">
      <i class="bi bi-code-slash fs-5 me-1"></i> CODE
      <span class="ripple-surface"></span>
    </btn>
  </div>

  <div class="collapse" id="code1">

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-purple navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
    
      <!-- Drawer toggler -->
      <button class="drawer-toggler me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawer">
        <span class="drawer-toggler-icon"></span>
      </button>
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star-fill me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas offcanvas-start offcanvas-light" data-bs-scroll="true" tabindex="-1" id="drawer">
  <div class="offcanvas-header bg-purple">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

<!-- Offcanvas pushed content -->
<div class="offcanvas-pushed-content">
  <div class="container">

    <!-- Your content here -->

  </div>

 <!-- Footer -->
  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

  </div>
</div>

<br>

### Drawer End

<div class="border rounded-3">
  <div class="p-4 d-flex justify-content-center">
    <a class="btn btn-success rounded-pill px-4" href="/materialstyle/3.0/demo/drawer-end">
      View Demo <i class="bi bi-box-arrow-up-right"></i>
      <span class="ripple-surface"></span>
    </a>
  </div>

  <div class="d-flex justify-content-end">
    <btn class="btn btn-sm btn-outline-purple border-0 rounded-0 d-flex align-items-center" data-bs-toggle="collapse" href="#code2">
      <i class="bi bi-code-slash fs-5 me-1"></i> CODE
      <span class="ripple-surface"></span>
    </btn>
  </div>

  <div class="collapse" id="code2">

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

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
    
    <!-- Drawer toggler -->
    <button class="drawer-toggler ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#drawer">
      <span class="drawer-toggler-icon"></span>
    </button>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas offcanvas-end offcanvas-light" data-bs-scroll="true" tabindex="-1" id="drawer">
  <div class="offcanvas-header bg-purple">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

<!-- Offcanvas pushed content -->
<div class="offcanvas-pushed-content">
  <div class="container">

    <!-- Your content here -->

  </div>

 <!-- Footer -->
  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

  </div>
</div>

<br>

## Drawer Responsive

Use Breakpoints ```.offcanvas-expand{-sm|-md|-lg|-xl|-xxl}``` to create a responsive drawer.

<div class="border rounded-3">
  <div class="p-4 d-flex justify-content-center">
    <a class="btn btn-success rounded-pill px-4" href="/materialstyle/3.0/demo/drawer-responsive">
      View Demo <i class="bi bi-box-arrow-up-right"></i>
      <span class="ripple-surface"></span>
    </a>
  </div>

  <div class="d-flex justify-content-end">
    <btn class="btn btn-sm btn-outline-purple border-0 rounded-0 d-flex align-items-center" data-bs-toggle="collapse" href="#code3">
      <i class="bi bi-code-slash fs-5 me-1"></i> CODE
      <span class="ripple-surface"></span>
    </btn>
  </div>

  <div class="collapse" id="code3">

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-purple navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
    
      <!-- Drawer toggler -->
      <button class="drawer-toggler me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawer">
        <span class="drawer-toggler-icon"></span>
      </button>
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star-fill me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas offcanvas-start show offcanvas-expand-md offcanvas-light" data-bs-scroll="true" tabindex="-1" id="drawer">
  <div class="offcanvas-header bg-purple">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

<!-- Offcanvas pushed content -->
<div class="offcanvas-pushed-content">
  <div class="container">

    <!-- Your content here -->

  </div>

 <!-- Footer -->
  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

  </div>
</div>

<br>

### Drawer Responsive End

<div class="border rounded-3">
  <div class="p-4 d-flex justify-content-center">
    <a class="btn btn-success rounded-pill px-4" href="/materialstyle/3.0/demo/drawer-responsive-end">
      View Demo <i class="bi bi-box-arrow-up-right"></i>
      <span class="ripple-surface"></span>
    </a>
  </div>

  <div class="d-flex justify-content-end">
    <btn class="btn btn-sm btn-outline-purple border-0 rounded-0 d-flex align-items-center" data-bs-toggle="collapse" href="#code4">
      <i class="bi bi-code-slash fs-5 me-1"></i> CODE
      <span class="ripple-surface"></span>
    </btn>
  </div>

  <div class="collapse" id="code4">

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">

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
    
    <!-- Drawer toggler -->
    <button class="drawer-toggler ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#drawer">
      <span class="drawer-toggler-icon"></span>
    </button>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas offcanvas-end show offcanvas-expand-md offcanvas-light" data-bs-scroll="true" tabindex="-1" id="drawer">
  <div class="offcanvas-header bg-purple">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

<!-- Offcanvas pushed content -->
<div class="offcanvas-pushed-content">
  <div class="container">

    <!-- Your content here -->

  </div>

 <!-- Footer -->
  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
```

  </div>
</div>
