---
layout: docs
title: Tab
group: components
toc: true
---

# Tab

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
{{< example codeId="code6" >}}

<ul class="nav nav-tabs nav-justified accent-pink primary-purple" role="tablist">
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

<ul class="nav nav-tabs nav-justified primary-purple accent-pink" role="tablist">
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
// Add Ripple to tabs
var navLinks = [].slice.call(document.querySelectorAll('.nav-tabs .nav-link'))
navLinks.map(function (navLink) {
  new materialstyle.Ripple(navLink)
})

// Initialize tabs
var tabs = [].slice.call(document.querySelectorAll('.nav-tabs'))
tabs.map(function (tab) {
  new materialstyle.Tab(tab)
})
```

<br>

### With jQuery
```javascript
// Add Ripple to tabs
$('.nav-tabs .nav-link').ripple();

// Initialize tabs
$('.nav-tabs').tab();
```
