---
layout: docs
title: Scrollspy
group: components
toc: true
keywords: scrollspy
---

# Scrollspy

<p class="fs-4 ms-0 mb-4 text-secondary">
Automatically update navigation or list group components based on scroll position to 
indicate which link is currently active in the viewport.
</p>

## How it works
<a class="link-pink" href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a> 
Scrollspy toggles the ```.active``` class on anchor (```<a>```) elements when the element with 
the ```id``` referenced by the anchor’s ```href``` is scrolled into view. Here’s how it works.

- To start, scrollspy requires two things: a navigation, list group, or a simple set of links, 
plus a scrollable container. The scrollable container can be the ```<body>``` or a custom 
element with a set ```height``` and ```overflow-y: scroll```.

- On the scrollable container, add ```data-bs-spy="scroll"``` and ```data-bs-target="#navId"``` 
where ```navId``` is the unique ```id``` of the associated navigation. Be sure to also include 
a ```tabindex="0"``` to ensure keyboard access.

- As you scroll the "spied" container, an ```.active``` class is added and removed from anchor 
links within the associated navigation. Links must have resolvable ```id``` targets, otherwise 
they’re ignored. For example, a ```<a href="#home">home</a>``` must correspond to something 
in the DOM like ```<div id="home"></div>```

- Target elements that are not visible will be ignored.

## In Navbar
Scroll the area below the navbar and watch the active class change. Open the dropdown menu 
and watch the dropdown items be highlighted as well.

{{< example codeId="code1">}}

<nav id="navbar-example" class="navbar bg-light px-3 mb-3">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0" style="height:200px;overflow:auto;">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
  page, the appropriate navigation link is highlighted. It's repeated throughout the component 
  example. We keep adding some more example copy here to emphasize the scrolling and 
  highlighting.</p>

  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
  page, the appropriate navigation link is highlighted. It's repeated throughout the component 
  example. We keep adding some more example copy here to emphasize the scrolling and 
  highlighting.</p>
  
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
  page, the appropriate navigation link is highlighted. It's repeated throughout the component 
  example. We keep adding some more example copy here to emphasize the scrolling and 
  highlighting.</p>
  
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
  page, the appropriate navigation link is highlighted. It's repeated throughout the component 
  example. We keep adding some more example copy here to emphasize the scrolling and 
  highlighting.</p>
  
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
  page, the appropriate navigation link is highlighted. It's repeated throughout the component 
  example. We keep adding some more example copy here to emphasize the scrolling and 
  highlighting.</p>
</div>

{{< /example >}}

## Nested nav
Scrollspy also works with nested ```.nav```s. If a nested ```.nav``` is ```.active```, its 
parents will also be ```.active```. Scroll the area next to the navbar and watch the active 
class change.

{{< example codeId="code2">}}

<div class="row">
  <div class="col-4">
    <nav id="navbar-example2" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0" style="height:350px;overflow:auto;">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-1-1">
        <h5>Item 1-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-1-2">
        <h5>Item 1-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-3">
        <h4>Item 3</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-3-1">
        <h5>Item 3-1</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
      <div id="item-3-2">
        <h5>Item 3-2</h5>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the 
        page, the appropriate navigation link is highlighted. It's repeated throughout the component 
        example. We keep adding some more example copy here to emphasize the scrolling and 
        highlighting.</p>
      </div>
    </div>
  </div>
</div>

{{< /example >}}
