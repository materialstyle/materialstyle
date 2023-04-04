---
layout: docs
title: Carousel
group: components
toc: true
---

<p class="fs-4 ms-0 mb-4 page-description">
The carousel is a slideshow for cycling through a series of images, text, or custom markup.
</p>

## How it works
 - In browsers where the 
<a class="link-pink" href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a> 
is supported, the carousel will avoid sliding when the webpage is not visible to the user 
(such as when the browser tab is inactive, the browser window is minimized, etc.).

 - Please be aware that nested carousels are not supported, and carousels are generally not 
compliant with accessibility standards.

 - Carousels don’t automatically normalize slide dimensions. As such, you may need to use 
additional utilities or custom styles to appropriately size content.

- **The ```.active``` class needs to be added to one of the slides** otherwise the carousel 
will not be visible. Also be sure to set a unique ```id``` on the ```.carousel``` for 
optional controls, especially if you’re using multiple carousels on a single page. 
Control and indicator elements must have a ```data-bs-target``` attribute 
(or ```href``` for links) that matches the ```id``` of the ```.carousel``` element.
  
## Slides only
{{< example codeId="code1" >}}

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>

    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
</div>

{{< /example >}}

## With controls
Adding in the previous and next controls. We recommend using ```<button>``` elements, 
but you can also use ```<a>``` elements with ```role="button"```.

{{< example codeId="code2" >}}

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## With indicators

{{< example codeId="code3" >}}

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## With captions
Add captions to your slides easily with the ```.carousel-caption``` element within any 
```.carousel-item```. They can be easily hidden on smaller viewports, as shown below, 
with optional display utilities. We hide them initially with ```.d-none``` and bring 
them back on medium-sized devices with ```.d-md-block```.

{{< example codeId="code4" >}}

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" aria-current="true" class="active"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## Crossfade
Add ```.carousel-fade``` to your carousel to animate slides with a fade transition instead of a slide.

{{< example codeId="code5" >}}

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## Individual ```.carousel-item``` interval
Add ```data-bs-interval``` to a ```.carousel-item``` to change the amount of time to delay between automatically cycling to the next item.

{{< example codeId="code6" >}}

<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## Disable touch swiping
Carousels support swiping left/right on touchscreen devices to move between slides. 
This can be disabled using the ```data-bs-touch``` attribute. The example below also 
does not include the ```data-bs-ride``` attribute and has ```data-bs-interval="false"``` 
so it doesn’t autoplay.

{{< example codeId="code7" >}}

<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#fff" dy=".3em">First slide</text></svg>
      
    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#fff" dy=".3em">Second slide</text></svg>
      
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#fff" dy=".3em">Third slide</text></svg>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}

## Dark variant
Add ```.carousel-dark``` to the ```.carousel``` for darker controls, indicators, and captions. 
Controls have been inverted from their default white fill with the ```filter``` CSS property. 
Captions and controls have additional Sass variables that customize the ```color``` and 
```background-color```.

{{< example codeId="code8" >}}

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" aria-current="true" class="active"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6610f2"/><text x="50%" y="50%" fill="#000" dy=".3em">First slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#EB46B4"/><text x="50%" y="50%" fill="#000" dy=".3em">Second slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item active">
      <svg class="ms-placeholder-img ms-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"/><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
      
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

{{< /example >}}
