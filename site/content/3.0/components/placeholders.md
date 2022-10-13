---
layout: docs
title: Placeholders
group: components
toc: true
---

<p class="fs-4 ms-0 mb-4 text-secondary">Use loading placeholders for your components or pages to indicate something may still be loading.</p>

## How it works
Create placeholders with the ```.placeholder``` class and a grid column class (e.g., ```.col-6```) 
to set the width. They can replace the text inside an element or be added as a modifier class to 
an existing component.

We apply additional styling to ```.btn```s via ```::before``` to ensure the ```height``` is 
respected. You may extend this pattern for other situations as needed, or add a ```&nbsp;``` 
within the element to reflect the height when actual text is rendered in its place.

{{< example codeId="code1" >}}

<p aria-hidden="true">
  <span class="placeholder col-6"></span>
</p>
##split##
<a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-4" aria-hidden="true"></a>

{{< /example >}}

The use of aria-hidden="true" only indicates that the element should be hidden to screen readers. 
The loading behavior of the placeholder depends on how authors will actually use the placeholder 
styles, how they plan to update things, etc. Some JavaScript code may be needed to swap the state 
of the placeholder and inform AT users of the update.

## Width
You can change the width through grid column classes, width utilities, or inline styles.

{{< example codeId="code2" >}}

<span class="placeholder col-6"></span>
##split##
<span class="placeholder w-75"></span>
##split##
<span class="placeholder" style="width: 25%;"></span>

{{< /example >}}

## Color options
By default, the ```placeholder``` uses ```currentColor```. This can be overridden with a custom 
color or utility class.

{{< example codeId="code3" >}}

<span class="placeholder col-12 bg-primary"></span>
##split##
<span class="placeholder col-12 bg-secondary"></span>
##split##
<span class="placeholder col-12 bg-success"></span>
##split##
<span class="placeholder col-12 bg-info"></span>
##split##
<span class="placeholder col-12 bg-warning"></span>
##split##
<span class="placeholder col-12 bg-danger"></span>
##split##
<span class="placeholder col-12 bg-light"></span>
##split##
<span class="placeholder col-12 bg-dark"></span>
##split##
<span class="placeholder col-12 bg-indigo"></span>
##split##
<span class="placeholder col-12 bg-purple"></span>
##split##
<span class="placeholder col-12 bg-pink"></span>
##split##
<span class="placeholder col-12 bg-orange"></span>
##split##
<span class="placeholder col-12 bg-teal"></span>

{{< /example >}}

## Sizing
The size of ```.placeholders``` are based on the typographic style of the parent element. 
Customize them with sizing modifiers: ```.placeholder-lg```, ```.placeholder-sm```, 
or ```.placeholder-xs```.

{{< example codeId="code4" >}}

<span class="placeholder col-12 placeholder-lg"></span>
##split##
<span class="placeholder col-12"></span>
##split##
<span class="placeholder col-12 placeholder-sm"></span>
##split##
<span class="placeholder col-12 placeholder-xs"></span>

{{< /example >}}

## Animation
Animate placeholders with ```.placeholder-glow``` or ```.placeholder-wave``` to better convey 
the perception of something being <i>actively</i> loaded.

{{< example codeId="code5" >}}

<p class="placeholder-glow">
  <span class="placeholder col-12"></span>
</p>
##split##
<p class="placeholder-wave">
  <span class="placeholder col-12"></span>
</p>

{{< /example >}}

## On Cards
In the example below, we take a typical card component and recreate it with placeholders applied to create a “loading card”. Size and proportions are the same between the two.

{{< example codeId="code6" class="d-flex justify-content-evenly align-items-center flex-wrap gap-2">}}

<div class="card bg-purple bg-opacity-10" style="width:400px">
  <div class="card-body">
    <h4 class="card-title text-purple">Unlimited Music</h4>
    <p class="card-text">
      Listen to your favourite artists and albums whenever wherever online
      and offline
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
    <button type="button" class="btn btn-outline-purple border-0">
      Listen Now
    </button>

    <div>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1">
        <i class="bi bi-heart-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1">
        <i class="bi bi-share-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</div>
##split##
<div class="card bg-purple bg-opacity-10" style="width:400px">
  <div class="card-body">
    <h4 class="card-title text-purple placeholder-glow">
      <span class="placeholder col-6">&nbsp;</span>
    </h4>
    <p class="card-text placeholder-glow">
      <span class="placeholder col-12"></span>
      <span class="placeholder col-4"></span>
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
    <button type="button" class="btn btn-outline-purple border-0 placeholder disabled col-4 ms-2">
    </button>

    <div>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1 placeholder disabled">
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1 placeholder disabled">
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-purple m-1 placeholder disabled">
      </button>
    </div>
  </div>
</div>

{{< /example >}}
