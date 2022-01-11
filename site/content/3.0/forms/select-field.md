---
layout: docs
title: Select Field
group: forms
toc: true
---

# Select Field

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

## Input Group
### Prepend
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

### Append
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

### Searchable
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

### Input Group
#### Prepend
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

#### Append
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
var selectList = [].slice.call(document.querySelectorAll('.form-floating'))
var selectFields = selectList.map(function (select) {
  return new materialstyle.SelectField(select)
})
```

<br>

### With jQuery
```javascript
$('.form-floating').selectfield();
```
