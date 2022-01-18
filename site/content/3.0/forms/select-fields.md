---
layout: docs
title: Select Fields
group: forms
toc: true
keywords: forms, select-field
---

# Select Fields

Selects allow users to select from a menu. It functions as a wrapper around the browser's native ```<select>``` element.
They come in two types:
- Filled select fields
- Outlined select fields

We have used Bootstrap's ```Dropdown``` component and ```.form-floating``` to create the Select fields.

Note that the ```<select>``` must come first so we can utilize a sibling selector (e.g., ~).

<br>

{{< callout info >}}
{{< partial "callout-info-requiresjavascript.md" >}}
{{< /callout >}}

## Filled
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap">}}

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

{{< /example >}}

## Outlined

{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap">}}

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

{{< /example >}}

## Color options
Make use of ```.base-[color]``` & ```.primary-[color]``` classes to personalize it according to your brand's style.

{{< example codeId="code3" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating base-purple primary-pink">
  <select class="form-select">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined base-purple primary-pink">
  <select class="form-select">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</fieldset>
        
{{< /example >}}

## Searchable
Add class ```searchable``` on ```.form-floating``` to add a search box to the menu.

{{< example codeId="code4" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating searchable">
  <select class="form-select">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined searchable">
  <select class="form-select">
    <option value=""></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</fieldset>
        
{{< /example >}}

## Input Group Prepend
{{< example codeId="code5" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

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
  <div class="input-group-text prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
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
  <div class="input-group-text prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
        
{{< /example >}}

## Input Group Append
{{< example codeId="code6" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

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
##split##
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
        
{{< /example >}}

## Multi Select
Add class ```multi-select``` on ```.form-floating``` to enable multi select.

{{< example codeId="code7" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating multi-select">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined multi-select">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select</label>
</fieldset>

{{< /example >}}

## Multi Select Searchable
{{< example codeId="code8" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<fieldset class="form-floating multi-select searchable">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</fieldset>
##split##
<fieldset class="form-floating form-floating--outlined multi-select searchable">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</fieldset>

{{< /example >}}

## Multi Select Input Group Prepend
{{< example codeId="code9" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group">
  <fieldset class="form-floating multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select</label>
  </fieldset>
  <div class="input-group-text prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="input-group">
  <fieldset class="form-floating form-floating--outlined multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select</label>
  </fieldset>
  <div class="input-group-text prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>

{{< /example >}}

## Multi Select Input Group Append
{{< example codeId="code10" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group">
  <fieldset class="form-floating multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select</label>
  </fieldset>
  <div class="input-group-text append">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="input-group">
  <fieldset class="form-floating form-floating--outlined multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select</label>
  </fieldset>
  <div class="input-group-text append">
    <i class="bi bi-star-fill"></i>
  </div>
</div>

{{< /example >}}

## Javascript
```javascript
var selectList = [].slice.call(document.querySelectorAll('.form-select'))
var selectFields = selectList.map(function (select) {
  return new materialstyle.SelectField(select)
})
```

<br>

### Redraw
If a Select field is not visible at the time of initialization OR if it is within a container that is not visible by default, 
for example, ```Modal```, ```Collapse```, ```Offcanvas```, you need to call the ```redraw()``` function on the instance when it becomes visible.

```javascript
var myModal = document.getElementById('myModal')
myModal.addEventListener('shown.bs.modal', function (event) {
  // Redraw Select Field
  var selectFields = this.querySelectorAll('.form-select');
  for (const [, value] of Object.entries(selectFields)) {
    var selectFieldInstance = materialstyle.SelectField.getOrCreateInstance(value)
    selectFieldInstance.redraw();
  }
});
```

<br>

### With jQuery
```javascript
$('.form-select').selectfield();
```

<br>

```javascript
// Redraw Select fields
$('.form-select').selectfield('redraw');
```
