---
layout: docs
title: Validation
group: forms
toc: true
keywords: forms, validation
---

# Validation

## How it works in Bootstrap

- HTML form validation is applied via CSS’s two pseudo-classes, ```:invalid``` and ```:valid```. 
It applies to ```<input>```, ```<select>```, and ```<textarea>``` elements.
- Bootstrap scopes the ```:invalid``` and ```:valid``` styles to parent ```.was-validated``` class, 
usually applied to the ```<form>```. Otherwise, any required field without a value shows up as 
invalid on page load. This way, you may choose when to activate them (typically after 
form submission is attempted).
- To reset the appearance of the form (for instance, in the case of dynamic form submissions using 
AJAX), remove the ```.was-validated``` class from the ```<form>``` again after submission.
- As a fallback, ```.is-invalid``` and ```.is-valid``` classes may be used instead of the 
pseudo-classes for server-side validation. They do not require a ```.was-validated``` parent class.
- Due to constraints in how CSS works, Bootstrap cannot (at present) apply styles to a ```<label>``` 
that comes before a form control in the DOM without the help of custom JavaScript.
- All modern browsers support the 
[constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), 
a series of JavaScript methods for validating form controls.
- Feedback messages may utilize the browser defaults (different for each browser, and unstylable 
via CSS) or our custom feedback styles with additional HTML and CSS.
- You may provide custom validity messages with ```setCustomValidity``` in JavaScript.

## What's changed in Material Style

- Since we use ```.form-floating``` for our Text and Select fields, feedback messages 
```.valid-feedback``` and ```.invalid-feedback``` must be kept outside the ```.form-floating``` block.
- To apply the styles on feeback messages, we apply the ```.is-invalid``` and ```.is-valid``` 
classes on ```.form-floating``` and ```.was-validated``` class is also required.
- To reset the appearance of the form, classes ```.is-valid``` and ```.is-invalid``` have to be removed
as well, along with ```.was-validated```.
- As the ```<label>``` comes after a form control in ```.form-floating```, styling the 
```<label>``` is no longer a constraint.

## Validation styles

For custom form validation messages, you’ll need to add the ```novalidate``` boolean attribute to your 
```<form>```. This disables the browser default feedback tooltips, but still provides access to 
the form validation APIs in JavaScript. 

Try to submit the form below; our JavaScript (provided after the demo) will intercept the 
submit button and relay feedback to you. When attempting to submit, you’ll see the 
```:invalid``` and ```:valid``` styles applied to your form controls.

Custom feedback styles apply custom colors, borders, focus styles, and background icons to 
better communicate feedback.

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
    <div class="form-floating form-floating-outlined">
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
    <div class="form-floating form-floating-outlined">
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

## Javascript

Example starter Javascript to disable form submission if there are invalid fields and 
to add the required classes ```.was-validated```, ```.is-valid``` and ```.is-invalid```.

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
