---
layout: docs
title: Navbar
group: components
toc: true
keywords: layout, navbar
description: Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.
---

{{< example codeId="code1" >}}
<nav class="navbar navbar-expand-xl bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/materialstyle/assets/images/MSIconNewColorV2.svg" alt="Logo" style="width:30px; height:30px;">
      Brand
    </a>
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
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" autocomplete="off">
        <button class="btn btn-warning" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

## Fixed Top

{{< example codeId="code2" show_preview="false" link="/materialstyle/3.1/demos/navbar-fixed-top" >}}
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-primary fixed-top">
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}

## Fixed Bottom

{{< example codeId="code3" show_preview="false" link="/materialstyle/3.1/demos/navbar-fixed-bottom" >}}
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-primary fixed-bottom">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
  </div>
</nav>

<div class="container-fluid p-2">

  <!-- Your content here -->

</div>

<!-- Footer -->
<footer class="bg-dark text-white p-3" style="margin-bottom: var(--navbar-fixed-height);">
  Footer
</footer>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}

## Auto hide

{{< example codeId="code4" show_preview="false" link="/materialstyle/3.1/demos/navbar-auto-hide" >}}
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Material Style CSS -->
  <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/css/materialstyle.min.css">

  <title>Material Style</title>
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-sm bg-primary fixed-top auto-hide">
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
<script src="https://cdn.jsdelivr.net/npm/@materialstyle/materialstyle@3.1.1/dist/js/materialstyle.min.js"></script>

</body>
</html>
{{< /example >}}
