---
layout: docs
title: Collapse
group: components
toc: true
---

<p class="fs-4 ms-0 mb-4 page-description">
A collase toggles the visibility of content.
</p>

## How it works
The collapse JavaScript plugin is used to show and hide content. Buttons or anchors 
are used as triggers that are mapped to specific elements you toggle. Collapsing an 
element will animate the ```height``` from its current value to ```0```. Given how CSS handles 
animations, you cannot use ```padding``` on a ```.collapse``` element. Instead, use the 
class as an independent wrapping element.

Click the buttons below to show and hide another element via class changes:
 - ```.collapse``` hides content
 - ```.collapsing``` is applied during transitions
 - ```.collapse.show``` shows content
 
Generally, we recommend using a button with the ```data-bs-target``` attribute. While not 
recommended from a semantic point of view, you can also use a link with the ```href``` 
attribute (and a ```role="button"```). In both cases, the ```data-bs-toggle="collapse"``` 
is required.

{{< example codeId="code1" class="d-flex justify-content-start align-items-center flex-wrap gap-2">}}
<a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-bs-target
</button>

<div class="collapse" id="collapseExample">
  <div class="card card-body border">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

{{< /example >}}

## Horizontal
The collapse plugin also supports horizontal collapsing. Add the ```.collapse-horizontal``` 
modifier class to transition the ```width``` instead of ```height``` and set a ```width``` 
on the immediate child element.

{{< example codeId="code2">}}

<p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>

<div class="collapse collapse-horizontal" id="collapseWidthExample">
  <div class="card card-body border" style="width: 300px;">
    This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
  </div>
</div>

{{< /example >}}
