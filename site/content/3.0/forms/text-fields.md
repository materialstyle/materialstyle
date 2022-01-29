---
layout: docs
title: Text Fields
group: forms
aliases:
  - "/3.0/forms/"
  - "/forms/"
toc: true
keywords: forms, text-field
---

# Text Fields

<p class="fs-4 ms-0 mb-4 text-secondary">Text fields allow users to enter text into a UI.</p> 

They come in two types:
- Filled text fields
- Outlined text fields

We have used Bootstrap's ```.form-floating``` to create the Text fields.

A placeholder is required on each ```<input>``` as a floating label uses the ```:placeholder-shown``` pseudo-element to determine its position.

Also note that the ```<input>``` must come first so we can utilize a sibling selector (e.g., ~).

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

## Filled
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

<fieldset class="form-floating">
  <input type="text" class="form-control" id="firstname"
         placeholder="firstname" autocomplete="off">
  <label for="firstname">Firstname</label>
</fieldset>

{{< /example >}}

## Outlined

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

<fieldset class="form-floating form-floating--outlined">
  <input type="text" class="form-control" id="firstname-outline"
         placeholder="firstname" autocomplete="off">
  <label for="firstname-outline">Firstname</label>
</fieldset>

{{< /example >}}

## Color options
Make use of ```.base-[color]``` & ```.primary-[color]``` classes to personalize it according to your brand's style.

{{< example codeId="code3" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating base-purple primary-pink">
  <input type="text" class="form-control" id="lastname"
         placeholder="lastname" autocomplete="off">
  <label for="lastname">Lastname</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined base-purple primary-pink">
  <input type="text" class="form-control" id="lastname-outline"
         placeholder="lastname" autocomplete="off">
  <label for="lastname-outline">Lastname</label>
</fieldset>
        
{{< /example >}}

## Input Group Prepend
{{< example codeId="code4" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

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
##split##
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
        
{{< /example >}}

## Input Group Append
{{< example codeId="code5" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group">
  <fieldset class="form-floating">
    <input type="password" class="form-control" id="password"
           placeholder="Password" autocomplete="off">
    <label for="password">Password</label>
  </fieldset>
  <span class="input-group-text append">
      <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
##split##
<div class="input-group">
  <fieldset class="form-floating form-floating--outlined">
    <input type="password" class="form-control" id="password-outline"
           placeholder="Password" autocomplete="off">
    <label for="password-outline">Password</label>
  </fieldset>
  <span class="input-group-text append">
      <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
        
{{< /example >}}

## Text Area
To set a custom height on your ```<textarea>```, do not use the rows attribute. Instead, set an explicit height (either inline or via custom CSS).

{{< example codeId="code6" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating">
  <textarea class="form-control" placeholder="address"
            id="address" style="height: 100px"></textarea>
  <label for="address">Address</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined">
  <textarea class="form-control" id="address-outline"
            placeholder="address" style="height: 100px"></textarea>
  <label for="address-outline">Address</label>
</fieldset>

{{< /example >}}

## Javascript
```javascript
// Initialize Text fields
var textFieldList = [].slice.call(document.querySelectorAll('.form-control'))
var textFields = textFieldList.map(function (textField) {
  return new materialstyle.TextField(textField)
})
```

<br>

### Redraw
If a Text field is not visible at the time of initialization OR if it is within a container that is not visible by default, 
for example, ```Modal```, ```Collapse```, ```Offcanvas```, you need to call the ```redraw()``` function on the instance when it becomes visible.

```javascript
var myModal = document.getElementById('myModal')
myModal.addEventListener('shown.bs.modal', function (event) {
  // Redraw Text Field
  var textFields = this.querySelectorAll('.form-control');
  for (const [, value] of Object.entries(textFields)) {
    var textFieldInstance = materialstyle.TextField.getOrCreateInstance(value)
    textFieldInstance.redraw();
  }
});
```

<br>

### With jQuery
```javascript
// Initialize Text fields
$('.form-control').textfield();
```

<br>

```javascript
// Redraw Text fields
$('.form-control').textfield('redraw');
```