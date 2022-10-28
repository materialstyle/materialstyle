---
layout: docs
title: Drawer / Sidebar
group: components
toc: true
keywords: layout, drawer
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  Drawers provide access to destinations and app functionality, such as switching accounts.
</p>

<div class="d-flex align-items-center justify-content-center my-4">
  <img class="lazy border border-purple" style="width:100%;max-width:800px;"
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

{{< example codeId="code1" show_preview="false" link="/materialstyle/3.0/demos/drawer" >}}
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}

### Drawer End

{{< example codeId="code2" show_preview="false" link="/materialstyle/3.0/demos/drawer-end" >}}
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}

## Drawer Responsive

Use Breakpoints ```.offcanvas{-sm|-md|-lg|-xl|-xxl}``` to create a responsive drawer.

{{< example codeId="code3" show_preview="false" link="/materialstyle/3.0/demos/drawer-responsive" >}}
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
    
      <!-- Drawer toggler -->
      <button class="drawer-toggler d-md-none me-2"
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
<aside class="offcanvas-start offcanvas-md offcanvas-light offcanvas-fixed" data-bs-scroll="true" tabindex="-1" id="drawer">
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}

### Drawer Responsive End

{{< example codeId="code4" show_preview="false" link="/materialstyle/3.0/demos/drawer-responsive-end" >}}
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
    
    <!-- Drawer toggler -->
    <button class="drawer-toggler d-md-none ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#drawer">
      <span class="drawer-toggler-icon"></span>
    </button>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas-end offcanvas-md offcanvas-light offcanvas-fixed" data-bs-scroll="true" tabindex="-1" id="drawer">
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}
