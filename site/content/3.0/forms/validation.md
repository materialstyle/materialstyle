---
layout: docs
title: Validation
group: forms
toc: true
keywords: forms, validation
---

# Validation

{{< example codeId="code1">}}

<form class="needs-validation d-flex flex-wrap gap-2" novalidate>

  <div>
    <div class="form-floating">
      <input type="text" class="form-control" id="textfield" placeholder="textfield" autocomplete="off" required>
      <label for="textfield">Text Field</label>
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div>
    <div class="form-floating form-floating--outlined">
      <input type="text" class="form-control" id="textfield-outlined" placeholder="textfield" autocomplete="off" required>
      <label for="textfield-outlined">Outlined Text Field</label>
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div class="input-group">
    <div class="form-floating">
      <input type="text" class="form-control" id="inputgroup" placeholder="inputgroup" autocomplete="off" required>
      <label for="inputgroup">Input Group</label>
    </div>
    <span class="input-group-text prepend">
      <i class="bi bi-person-circle"></i>
    </span>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div>
    <div class="form-floating">
      <select class="form-select" required>
        <option value=""></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
      <label>Select</label>
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div>
    <div class="form-floating form-floating--outlined">
      <select class="form-select" required>
        <option value=""></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
      <label>Outlined Select</label>
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div class="input-group">
    <div class="form-floating">
      <select class="form-select" required>
        <option value=""></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </select>
      <label>Select with Input Group</label>
    </div>
    <div class="input-group-text prepend">
      <i class="bi bi-star-fill"></i>
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Doesn't look good!</div>
  </div>

  <div class="form-check w-100">
    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
    <label class="form-check-label" for="invalidCheck">
      Agree to terms and conditions
    </label>
    <div class="invalid-feedback">
      You must agree before submitting.
    </div>
  </div>

  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

{{< /example >}}

## Example starter JavaScript for disabling form submissions if there are invalid fields

```javascript
function toggleValidityClasses(input, formFloating) {
  if (input.checkValidity()) {
    formFloating.classList.add("is-valid");
    formFloating.classList.remove("is-invalid");
  } else {
    formFloating.classList.add("is-invalid");
    formFloating.classList.remove("is-valid");
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        // Add is-valid or is-invalid classes to form-floating
        var formFloating = form.querySelectorAll(".form-floating");

        Array.prototype.slice
          .call(formFloating)
          .forEach(function (formFloating) {
            var input = formFloating.querySelector(
              ".form-control, .form-select"
            );

            if (input) {
              toggleValidityClasses(input, formFloating);

              input.addEventListener("keyup", function () {
                toggleValidityClasses(input, formFloating);
              });
              input.addEventListener("change", function () {
                toggleValidityClasses(input, formFloating);
              });
            }
          });
      },
      false
    );
  });
})();
```


<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields

function toggleValidityClasses(input, formFloating) {
  if (input.checkValidity()) {
    formFloating.classList.add("is-valid");
    formFloating.classList.remove("is-invalid");
  } else {
    formFloating.classList.add("is-invalid");
    formFloating.classList.remove("is-valid");
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");

        // Add is-valid or is-invalid classes to form-floating
        var formFloating = form.querySelectorAll(".form-floating");

        Array.prototype.slice
          .call(formFloating)
          .forEach(function (formFloating) {
            var input = formFloating.querySelector(
              ".form-control, .form-select"
            );

            if (input) {
              toggleValidityClasses(input, formFloating);

              input.addEventListener("keyup", function () {
                toggleValidityClasses(input, formFloating);
              });
              input.addEventListener("change", function () {
                toggleValidityClasses(input, formFloating);
              });
            }
          });
      },
      false
    );
  });
})();
</script>
