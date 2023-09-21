---
layout: docs
title: Tabs
group: components
toc: true
description: Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
---

{{< callout >}}
{{< partial "callout-requiresjavascript.md" >}}
{{< /callout >}}

{{< example codeId="code1" >}}

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

{{< /example >}}

## Icon top
{{< example codeId="code2" >}}

<ul class="icon-top nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
   <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#movies">
     <i class="bi bi-film"></i> Movies
   </button>
  </li>
  <li class="nav-item" role="presentation">
   <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#music">
     <i class="bi bi-music-note-beamed"></i> Music
   </button>
  </li>
  <li class="nav-item" role="presentation">
   <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#pictures">
     <i class="bi bi-image"></i> Pictures
   </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
 <div class="tab-pane container-fluid fade" role="tabpanel" id="movies">Movies</div>
 <div class="tab-pane container-fluid active" role="tabpanel" id="music">Music</div>
 <div class="tab-pane container-fluid fade" role="tabpanel" id="pictures">Pictures</div>
</div>

{{< /example >}}

## Icon right
{{< example codeId="code3" >}}

<ul class="icon-right nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#movies2">
      <i class="bi bi-film m-1"></i> Movies
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#music2">
      <i class="bi bi-music-note-beamed m-1"></i> Music
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#pictures2">
      <i class="bi bi-image m-1"></i> Pictures
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="movies2">Movies</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="music2">Music</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="pictures2">Pictures</div>
</div>

{{< /example >}}

## Icon bottom
{{< example codeId="code4" >}}

<ul class="icon-bottom nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#movies3">
      <i class="bi bi-film"></i> Movies
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#music3">
      <i class="bi bi-music-note-beamed"></i> Music
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#pictures3">
      <i class="bi bi-image"></i> Pictures
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="movies3">Movies</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="music3">Music</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="pictures3">Pictures</div>
</div>

{{< /example >}}

## Icon left
{{< example codeId="code5" >}}

<ul class="icon-left nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#movies4">
      <i class="bi bi-film m-1"></i> Movies
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#music4">
      <i class="bi bi-music-note-beamed m-1"></i> Music
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#pictures4">
      <i class="bi bi-image m-1"></i> Pictures
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="movies4">Movies</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="music4">Music</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="pictures4">Pictures</div>
</div>

{{< /example >}}

## Color options

Make use of `--bs-nav-tabs-link-color`, `--bs-nav-tabs-link-hover-bg`, `--bs-nav-tabs-link-active-color` & 
`--bs-nav-tabs-link-active-hover-bg` css variables to personalize it according to your brand's style.

<div class="d-flex align-items-center bg-danger bg-opacity-25 my-4 rounded-3 overflow-hidden">
  <div class="d-flex align-items-center align-self-stretch text-bg-danger bg-opacity-100 p-3 fs-4">
    <i class="bi bi-info-circle-fill"></i>
  </div>
  <div class="flex-grow-1 p-3 text-body">
    Classes <b>.base-[color]</b> & <b>.primary-[color]</b> are depricated in v3.1.0
  </div>
</div>

{{< example codeId="code6" >}}

<ul class="nav nav-tabs nav-justified" role="tablist" 
    style="--bs-nav-tabs-link-color: var(--bs-success-active); 
           --bs-nav-tabs-link-hover-bg: var(--bs-success-subtle);
           --bs-nav-tabs-link-active-color: var(--bs-tertiary-hover); 
           --bs-nav-tabs-link-active-hover-bg: var(--bs-tertiary-subtle); ">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple1">Apple</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot1">Apricot
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado1">Avocado</button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="apple1">Apple</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="apricot1">Apricot</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="avocado1">Avocado</div>
</div>

{{< /example >}}

## Tabs split to multiple rows when there are too many to fit on a row
{{< example codeId="code7" >}}

<ul class="nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple2">Apple</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot2">Apricot
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado2">Avocado</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#banana2">Banana</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#blackberry2">Blackberry
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#blackcurrant2">
      Blackcurrant
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#blueberry2">Blueberry
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#boysenberry2">
      Boysenberry
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#cherry2">Cherry</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#coconut2">Coconut</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#grape2">Grape</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#kiwi2">Kiwi</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#lychee2">Lychee</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#mango2">Mango</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#melon2">Melon</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#orange2">Orange</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#peach2">Peach</button>
  </li>
</ul>

{{< /example >}}

## Javascript
```javascript
// Initialize tabs
var tabs = [].slice.call(document.querySelectorAll('.nav-tabs'))
tabs.map(function (tab) {
  new materialstyle.MaterialTab(tab)
})
```

<br>

### Redraw
If a Tab is not visible at the time of initialization OR if it is within a container that is not visible by default, 
for example, ```Modal```, ```Collapse```, ```Offcanvas```, you need to call the ```redraw()``` function on the instance when it becomes visible.

```javascript
var myModal = document.getElementById('myModal')
myModal.addEventListener('shown.bs.modal', function (event) {
  // Redraw Tabs
  var tabs = this.querySelectorAll('.nav-tabs');
  for (const [, value] of Object.entries(tabs)) {
    var tabInstance = materialstyle.MaterialTab.getOrCreateInstance(value)
    tabInstance.redraw();
  }
});
```

<br>

### With jQuery
```javascript
// Initialize tabs
$('.nav-tabs').materialtab();
```

<br>

```javascript
// Redraw Tab
$('.nav-tabs').materialtab('redraw');
```

<br>

## Ripple effect

{{< callout javascript-ripple >}}
{{< partial "callout-ripplerequiresjavascript.md" >}}
{{< /callout >}}

{{< callout ripple >}}
{{< partial "callout-rippledocs.md" >}}
{{< /callout >}}

{{< example codeId="code8" >}}

<ul class="nav nav-tabs nav-justified" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple3">
      Apple
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot3">
      Apricot
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado3">
      Avocado
      <span class="ripple-surface"></span>
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="apple3">Apple</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="apricot3">Apricot</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="avocado3">Avocado</div>
</div>

{{< /example >}}

## Ripple effect on tabs with custom color

{{< example codeId="code9" >}}

<ul class="nav nav-tabs nav-justified" role="tablist" 
    style="--bs-nav-tabs-link-color: var(--bs-success-active); 
           --bs-nav-tabs-link-hover-bg: var(--bs-success-subtle);
           --bs-nav-tabs-link-active-color: var(--bs-tertiary-hover); 
           --bs-nav-tabs-link-active-hover-bg: var(--bs-tertiary-subtle); ">
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#apple4">
      Apple
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#apricot4">
      Apricot
      <span class="ripple-surface"></span>
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#avocado4">
      Avocado
      <span class="ripple-surface"></span>
    </button>
  </li>
</ul>
<!-- Tab Panes -->
<div class="tab-content">
  <div class="tab-pane container-fluid fade" role="tabpanel" id="apple4">Apple</div>
  <div class="tab-pane container-fluid active" role="tabpanel" id="apricot4">Apricot</div>
  <div class="tab-pane container-fluid fade" role="tabpanel" id="avocado4">Avocado</div>
</div>

{{< /example >}}

## Javascript for ripple
```javascript
// Initialize Ripple
const rippleSurface = Array.prototype.slice.call(document.querySelectorAll('.ripple-surface'))
rippleSurface.map(s => {
  return new mdc.ripple.MDCRipple(s)
})
```
