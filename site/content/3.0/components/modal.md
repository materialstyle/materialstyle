---
layout: docs
title: Modal
group: components
toc: true
---

<p class="fs-4 ms-0 mb-4 text-secondary">
A Modal appears in front of app content to provide critical information or ask for a decision. 
Modals remain on screen until confirmed, dismissed, or a required action has been taken.
</p>

## How it works
- Modals are positioned over everything else in the document and remove scroll from 
the ```<body>``` so that modal content scrolls instead.
- By default, clicking on the modal “backdrop” will automatically close the modal.
- Modals use ```position: fixed```, which can sometimes be a bit particular about its 
rendering. Whenever possible, place your modal HTML in a top-level position to avoid 
potential interference from other elements. You’ll likely run into issues when nesting 
a ```.modal``` within another fixed element.
- Once again, due to position: fixed, there are some caveats with using modals on mobile devices. 
<a class="link-pink" href="/materialstyle/3.0/getting-started/browsers-and-devices/#modals-and-dropdowns-on-mobile">
See our browser support docs</a> for details.
- Due to how HTML5 defines its semantics, 
<a class="link-pink" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus">
the autofocus HTML attribute</a> has no effect in Bootstrap modals. 
To achieve the same effect, use some custom JavaScript:

```javascript
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
```
<br>

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>
##split##
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">Modal Heading</h4>
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

## With Forms, Popover and Tooltip

Tooltips and popovers can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#myModalWithForms">
  Open modal
</button>
##split##
<div class="modal fade" id="myModalWithForms" tabindex="-1" aria-labelledby="myModalWithFormsLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalWithFormsLabel">Modal Heading</h4>
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
              <fieldset class="form-floating form-floating-outlined">
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
                  <option value="" label="blank option"></option>
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
              <fieldset class="form-floating form-floating-outlined">
                <select class="form-select">
                  <option value="" label="blank option"></option>
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
          <div class="col-sm-12 my-5">
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
          
          <div class="col-sm-6 my-2 mb-2">
            <h5>Popover</h5>
            <button type="button" class="btn btn-primary" data-bs-toggle="popover"
                    title="Popover Header" data-bs-content="Some content inside the Popover">
              Click to toggle popover
            </button>
          </div>
          <div class="col-sm-6 my-2">
            <h5>Tooltip</h5>
            <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
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

## Static backdrop

When backdrop is set to static, the modal will not close when clicking outside of it. 

{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#staticBackdropModal">
  Open static backdrop modal
</button>
##split##
<div class="modal fade" id="staticBackdropModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="staticBackdropModalLabel">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        I will not close if you click outside of me. Don't even try to press escape key.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}

## Vertically centered

Add ```.modal-dialog-centered``` to ```.modal-dialog``` to vertically center the modal.

{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#verticallyCenteredModal">
  Open vertically centered modal
</button>
##split##
<div class="modal fade" id="verticallyCenteredModal" tabindex="-1" aria-labelledby="centeredModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="centeredModalLabel">Modal Heading</h4>
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

## Scrolling long content

When modals become too long for the user’s viewport or device, they scroll independent of the page itself.

{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#longContentModal">
  Open long content modal
</button>
##split##
<div class="modal fade" id="longContentModal" tabindex="-1" aria-labelledby="longContentModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="longContentModalLabel">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        This content should appear at the bottom after you scroll.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}

You can also create a scrollable modal that allows you to scroll the modal body by 
adding ```.modal-dialog-scrollable``` to ```.modal-dialog```.

{{< example codeId="code6" class="d-flex justify-content-center align-items-center flex-wrap">}}

<button type="button" class="btn btn-pink rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#bodyScrollModal">
  Open body scrollable modal
</button>
##split##
<div class="modal fade" id="bodyScrollModal" tabindex="-1" aria-labelledby="bodyScrollModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="bodyScrollModalLabel">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        This content should appear at the bottom after you scroll.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

{{< /example >}}
