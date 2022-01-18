---
layout: docs
title: Modal
group: components
toc: true
---

# Modal

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-black" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>
##split##
<div class="modal fade" id="myModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        Modal body...
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}

## With Forms

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-black" data-bs-toggle="modal" data-bs-target="#myModal2">
  Open modal
</button>
##split##
<div class="modal fade" id="myModal2">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <div class="row">

          <!-- Text field -->
          <div class="col-sm-6 my-2">
            <div class="input-group">
              <fieldset class="form-floating">
                <input type="email" class="form-control" id="email"
                       placeholder="Email" autocomplete="off">
                <label for="email">Email</label>
              </fieldset>
              <span class="input-group-text prepend">
                  <i class="bi bi-person-circle"></i>
              </span>
            </div>
          </div>
          
          <!-- Text field outlined -->
          <div class="col-sm-6 my-2">
            <div class="input-group">
              <fieldset class="form-floating form-floating--outlined">
                <input type="email" class="form-control" id="email-outline"
                       placeholder="Email" autocomplete="off">
                <label for="email-outline">Email</label>
              </fieldset>
              <span class="input-group-text prepend">
                  <i class="bi bi-person-circle"></i>
              </span>
            </div>
          </div>
          
          <!-- Select field -->
          <div class="col-sm-6 my-2">
            <div class="input-group">
              <fieldset class="form-floating">
                <select class="form-select">
                  <option value=""></option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
                <label>Select One</label>
              </fieldset>
              <div class="input-group-text append">
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          
          <!-- Select field outlined -->
          <div class="col-sm-6 my-2">
            <div class="input-group">
              <fieldset class="form-floating form-floating--outlined">
                <select class="form-select">
                  <option value=""></option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
                <label>Select One</label>
              </fieldset>
              <div class="input-group-text append">
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          
          <!-- Tab -->
          <div class="col-sm-12 my-2">
            <ul class="nav nav-tabs nav-justified" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple">Apple</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot">Apricot
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado">Avocado</button>
              </li>
            </ul>
            <!-- Tab Panes -->
            <div class="tab-content">
              <div class="tab-pane container-fluid fade" role="tabpanel" id="apple">Apple</div>
              <div class="tab-pane container-fluid active" role="tabpanel" id="apricot">Apricot</div>
              <div class="tab-pane container-fluid fade" role="tabpanel" id="avocado">Avocado</div>
            </div>
          </div>
        
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}

