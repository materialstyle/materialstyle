---
layout: demo
title: Drawer Responsive
---

<!-- Navbar -->
<nav class="navbar navbar-expand-md bg-primary">
  <div class="container-fluid">
    <div class="d-flex align-items-center">
      <!-- Drawer toggler -->
      <button class="navbar-toggler d-md-none me-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#drawer-responsive">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand d-flex align-items-center" href="javascript:">
        <i class="bi bi-star me-2"></i>Brand
      </a>
    </div>
  </div>
</nav>

<!-- Sidebar / Drawer -->
<aside class="offcanvas-start offcanvas-md offcanvas-fixed" data-bs-scroll="true" tabindex="-1" id="drawer-responsive">
  <div class="offcanvas-header bg-primary">
    <a class="offcanvas-title text-white" href="javascript:">
      <i class="bi bi-star me-2"></i>Brand
    </a>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#drawer-responsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-primary bg-opacity-10">
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="javascript:">
          Link A
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="javascript:">
          Link B
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
    </ul>
  </div>
</aside>

<!-- Offcanvas pushed content -->
<div class="offcanvas-pushed-content">
  <div class="container-fluid p-2">
    <!-- Your content here -->
    <label class="text-center fs-1 p-5">
      S<br>O<br>M<br>E<br><br>
      I<br>N<br>T<br>E<br>R<br>E<br>S<br>T<br>I<br>N<br>G<br><br>
      S<br>T<br>U<br>F<br>F
    </label>
  </div>

  <!-- Footer -->
  <footer class="border-top border-3 p-3">
    Footer
  </footer>
</div>
