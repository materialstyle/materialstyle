---
layout: docs
title: Select Fields
group: forms
toc: true
keywords: forms, select-field
---

<p class="fs-4 ms-0 mb-4 text-secondary">
  Selects allow users to select from a menu. It functions as a wrapper around the browser's native select element.
</p>

They come in two types:
- Filled select fields
- Outlined select fields

We have used Bootstrap's ```Dropdown``` component and ```.form-floating``` to create the Select fields.

Note that the ```<select>``` must come first so we can utilize a sibling selector (e.g., ~).

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

## Filled
{{< example codeId="code1" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</div>
##split##
<div class="form-floating">
  <select class="form-select" disabled>
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Disabled Select</label>
</div>

{{< /example >}}

## Outlined

{{< example codeId="code2" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating form-floating-outlined">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</div>
##split##
<div class="form-floating form-floating-outlined">
  <select class="form-select" disabled>
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Disabled Select</label>
</div>

{{< /example >}}

## Color options
Make use of ```.base-[color]``` & ```.primary-[color]``` classes to personalize it according to your brand's style.

{{< example codeId="code3" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating base-purple primary-pink">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</div>
##split##
<div class="form-floating form-floating-outlined base-purple primary-pink">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select One</label>
</div>
        
{{< /example >}}

## Searchable
Add class ```searchable``` on ```.form-floating``` to add a search box to the menu.

{{< example codeId="code4" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating searchable">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</div>
##split##
<div class="form-floating form-floating-outlined searchable">
  <select class="form-select">
    <option value="" label="blank option"></option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</div>
        
{{< /example >}}

## With Icon
{{< example codeId="code5" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating-with-icon">
  <div class="form-floating">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="append">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="append">
    <i class="bi bi-star-fill"></i>
  </div>
</div>

{{< /example >}}

## With Spinner
{{< example codeId="code6" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating-with-icon">
  <div class="form-floating">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="prepend">
    <div class="spinner-material spinner-rainbow">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </div>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="prepend">
    <div class="spinner-material text-blue">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </div>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="append">
    <div class="spinner-border text-blue"></div>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value="" label="blank option"></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <div class="append">
    <div class="spinner-grow text-primary"></div>
  </div>
</div>
        
{{< /example >}}

## Multi Select
Add class ```multi-select``` on ```.form-floating``` to enable multi select.

{{< example codeId="code7" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating multi-select">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select Multiple</label>
</div>
##split##
<div class="form-floating form-floating-outlined multi-select">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Select Multiple</label>
</div>

{{< /example >}}

## Multi Select Searchable
{{< example codeId="code8" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating multi-select searchable">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</div>
##split##
<div class="form-floating form-floating-outlined multi-select searchable">
  <select class="form-select" name="cars[]" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
  </select>
  <label>Searchable</label>
</div>

{{< /example >}}

## Multi Select With Icon
{{< example codeId="code9" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating-with-icon">
  <div class="form-floating multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select Multiple</label>
  </div>
  <div class="prepend">
    <i class="bi bi-star-fill"></i>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select Multiple</label>
  </div>
  <div class="append">
    <i class="bi bi-star-fill"></i>
  </div>
</div>

{{< /example >}}

## Multi Select With Spinner
{{< example codeId="code10" class="d-flex justify-content-evenly align-items-center flex-wrap gap-3">}}

<div class="form-floating-with-icon">
  <div class="form-floating multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select Multiple</label>
  </div>
  <div class="prepend">
    <div class="spinner-material text-blue">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </div>
  </div>
</div>
##split##
<div class="form-floating-with-icon">
  <div class="form-floating form-floating-outlined multi-select">
    <select class="form-select" name="cars[]" multiple>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select Multiple</label>
  </div>
  <div class="append">
    <div class="spinner-grow text-primary"></div>
  </div>
</div>

{{< /example >}}

## Javascript
```javascript
// Initialize
var selectList = [].slice.call(document.querySelectorAll('.form-select'))
var selectFields = selectList.map(function (select) {
  return new materialstyle.SelectField(select)
})
```

<br>

### Change
If the value of a ```<select>``` is changed dynamically, ```change``` event must be triggered.

```javascript
var select = document.getElementById('mySelect')
// Change value
select.value = 2;
// Trigger "change" event
select.dispatchEvent(new Event('change'))
```

<br>

### Redraw
If a Select field is not visible at the time of initialization OR if it is within a container that is not visible by default, 
for example, ```Modal```, ```Collapse```, ```Offcanvas```, ```redraw()``` function must be called on the instance when it becomes visible.

```javascript
var myModal = document.getElementById('myModal')
myModal.addEventListener('shown.bs.modal', function (event) {
  // Redraw Select Field
  var selectFields = this.querySelectorAll('.form-select')
  for (const [, value] of Object.entries(selectFields)) {
    var selectFieldInstance = materialstyle.SelectField.getOrCreateInstance(value)
    selectFieldInstance.redraw()
  }
});
```

<br>

### Rebuild
If options of a select field are changed after initialization, ```rebuild()``` function must be called on the instance.

```javascript
// Rebuild Select Field
var selectFields = this.querySelectorAll('.form-select')
for (const [, value] of Object.entries(selectFields)) {
  var selectFieldInstance = materialstyle.SelectField.getOrCreateInstance(value)
  selectFieldInstance.rebuild()
}
```

<br>

### With jQuery
```javascript
// Initialize
$('.form-select').selectfield();
```

<br>

```javascript
// Redraw Select fields
$('.form-select').selectfield('redraw');
```

<br>

```javascript
// Rebuild Select fields
$('.form-select').selectfield('rebuild');
```

<br>

```javascript
// Change select's value and trigger "change" event
$('#mySelect').val(2).trigger('change');
```
