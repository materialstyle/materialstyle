---
layout: docs
title: Input Groups
group: forms
toc: true
keywords: forms, input-group
---

# Input Groups

## On Text Fields

{{< example codeId="code1" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <i class="bi bi-person-circle"></i>
  </span>
  <div class="form-floating">
    <input type="email" class="form-control" id="email"
           placeholder="Email" autocomplete="off">
    <label for="email">Email</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <i class="bi bi-person-circle"></i>
  </span>
  <div class="form-floating form-floating-outlined">
    <input type="email" class="form-control" id="email-outline"
           placeholder="Email" autocomplete="off">
    <label for="email-outline">Email</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <input type="password" class="form-control" id="password"
           placeholder="Password" autocomplete="off">
    <label for="password">Password</label>
  </div>
  <span class="input-group-text">
    <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <input type="password" class="form-control" id="password-outline"
           placeholder="Password" autocomplete="off">
    <label for="password-outline">Password</label>
  </div>
  <span class="input-group-text">
    <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
        
{{< /example >}}

### With Buttons
{{< example codeId="code2" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="form-floating">
    <input type="text" class="form-control" id="example-1"
           placeholder="example" autocomplete="off">
    <label for="example-1">Label</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="form-floating form-floating-outlined">
    <input type="text" class="form-control" id="example-2"
           placeholder="example" autocomplete="off">
    <label for="example-2">Label</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <input type="text" class="form-control" id="example-3"
           placeholder="example" autocomplete="off">
    <label for="example-3">Label</label>
  </div>
  <button class="btn btn-secondary" type="button">Button</button>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <input type="text" class="form-control" id="example-4"
           placeholder="example" autocomplete="off">
    <label for="example-4">Label</label>
  </div>
  <button class="btn btn-secondary" type="button">Button</button>
</div>
        
{{< /example >}}

### With Checkbox and Radio
{{< example codeId="code3" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox">
  </span>
  <div class="form-floating">
    <input type="text" class="form-control" id="example-5"
           placeholder="example" autocomplete="off">
    <label for="example-5">Label</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox">
  </span>
  <div class="form-floating form-floating-outlined">
    <input type="text" class="form-control" id="example-6"
           placeholder="example" autocomplete="off">
    <label for="example-6">Label</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <input type="text" class="form-control" id="example-7"
           placeholder="example" autocomplete="off">
    <label for="example-7">Label</label>
  </div>
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="radio">
  </span>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <input type="text" class="form-control" id="example-8"
           placeholder="example" autocomplete="off">
    <label for="example-8">Label</label>
  </div>
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="radio">
  </span>
</div>
        
{{< /example >}}

## On Select Fields

{{< example codeId="code4" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <i class="bi bi-person-circle"></i>
  </span>
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <i class="bi bi-person-circle"></i>
  </span>
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <span class="input-group-text">
    <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <span class="input-group-text">
    <i class="bi bi-keyboard-fill"></i>
  </span>
</div>
        
{{< /example >}}

### With Buttons
{{< example codeId="code5" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <button class="btn btn-secondary" type="button">Button</button>
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <button class="btn btn-secondary" type="button">Button</button>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <button class="btn btn-secondary" type="button">Button</button>
</div>
        
{{< /example >}}

### With Checkbox and Radio
{{< example codeId="code6" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox">
  </span>
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox">
  </span>
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="radio">
  </span>
</div>
##split##
<div class="input-group flex-nowrap">
  <div class="form-floating form-floating-outlined">
    <select class="form-select">
      <option value=""></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <option value="4">Option 4</option>
    </select>
    <label>Select One</label>
  </div>
  <span class="input-group-text">
    <input class="form-check-input mt-0" type="radio">
  </span>
</div>
        
{{< /example >}}
