---
layout: docs
title: Text Fields
group: forms
aliases:
  - "/3.0/forms/"
  - "/forms/"
toc: true
---

# Text Fields

{{< callout info >}}
{{< partial "callout-info-requiresjavascript.md" >}}
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

## Input Group
### Prepend
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

### Append
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
var textFieldList = [].slice.call(document.querySelectorAll('.form-floating'))
var textFields = textFieldList.map(function (textField) {
  return new materialstyle.TextField(textField)
})
```

<br>

### With jQuery
```javascript
$('.form-floating').textfield();
```
