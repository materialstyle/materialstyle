---
layout: docs
title: Navbar
group: components
toc: true
keywords: layout, navbar
---

# Navbar

<p class="fs-4 ms-0 mb-4 text-secondary">
  Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.
</p>

{{< example codeId="code1" >}}
<nav class="navbar navbar-expand-lg navbar-dark bg-green">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
             data-bs-toggle="dropdown"
             aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" autocomplete="off">
        <button class="btn btn-yellow" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

## Auto hide

<div class="border rounded-3">
  <div class="p-4 d-flex justify-content-center">
    <a class="btn btn-success rounded-pill px-4" href="/materialstyle/3.0/demos/navbar-auto-hide">
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
<nav class="navbar navbar-expand-sm bg-purple navbar-dark fixed-top auto-hide">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
  </div>
</nav>

<div class="container-fluid p-2" style="margin-top: var(--navbar-fixed-height);">

  <!-- Your content here -->

</div>

<!-- Footer -->
<footer class="bg-dark text-white p-3">
  Footer
</footer>

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
