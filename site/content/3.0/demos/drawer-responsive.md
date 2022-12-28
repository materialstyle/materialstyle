---
layout: demo
title: Drawer Responsive
---

<nav class="navbar navbar-expand-md bg-primary navbar-dark">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <button class="navbar-toggler d-md-none me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawer-responsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star-fill me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<aside class="offcanvas-start offcanvas-md offcanvas-light offcanvas-fixed" data-bs-scroll="true" tabindex="-1" id="drawer-responsive">
  <div class="offcanvas-header bg-primary">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star-fill me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#drawer-responsive" aria-label="Close"></button>
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
      <li class="nav-item">
        <a class="nav-link"
           data-bs-toggle="collapse"
           href="#menuB"
           role="button"
           aria-expanded="false"
           aria-controls="menuB">
          Menu B
        </a>
        <div class="collapse" id="menuB">
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
      <li class="nav-item">
        <a class="nav-link"
           data-bs-toggle="collapse"
           href="#menuC"
           role="button"
           aria-expanded="false"
           aria-controls="menuC">
          Menu C
        </a>
        <div class="collapse" id="menuC">
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
    </ul>
  </div>
</aside>

<div class="offcanvas-pushed-content">
  <div class="container-fluid p-2">
    <label class="bg-primary text-white text-center fs-1 p-5">
      S<br>O<br>M<br>E<br><br>
      I<br>N<br>T<br>E<br>R<br>E<br>S<br>T<br>I<br>N<br>G<br><br>
      S<br>T<br>U<br>F<br>F
    </label>
  </div>

  <footer class="bg-dark text-white p-3">
    Footer
  </footer>
</div>
