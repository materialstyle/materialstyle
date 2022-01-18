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

          <div class="col-sm-6">
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
          
          <div class="col-sm-6">
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
        
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}

