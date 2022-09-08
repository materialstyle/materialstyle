---
layout: docs
title: Breadcrumb
group: components
toc: true
keywords: breadcrumb
---

<p class="fs-4 ms-0 mb-4 text-secondary">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>

{{< example codeId="code1" >}}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>
##split##
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
##split##
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

{{< /example >}}

## Changing Dividers

Dividers are automatically added in CSS through 
<a class="link-pink" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">::before</a> 
and <a class="link-pink" href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">content</a>. 

They can be changed by:
1. Modifying a CSS custom property ```--bs-breadcrumb-divider```.
2. Modifying the ```$breadcrumb-divider``` Sass variable and ```$breadcrumb-divider-flipped``` 
for its RTL counterpart, if needed. 

Bootstrap defaults to the Sass variable, which is set as a fallback to the custom property. 
This way, you get a global divider that you can override without recompiling CSS at any time.

<br>

### Via custom poperty

{{< example codeId="code2" >}}

<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

{{< /example >}}

### Via Sass

When modifying via Sass, the 
<a class="link-pink" href="https://sass-lang.com/documentation/modules/string#quote">quote</a> 
function is required to generate the quotes around a string. 
For example, using ```>``` as the divider, you can use this:

```scss
$breadcrumb-divider: quote(">");
```

<br>

## Using an SVG as divider

### Via custom poperty

{{< example codeId="code4">}}

<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

{{< /example >}}

### Via Sass

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

<br>

## Removing divider

### Via custom poperty

Remove the divider by setting ```--bs-breadcrumb-divider: '';``` (empty strings in CSS custom properties counts as a value).

{{< example codeId="code5">}}

<nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

{{< /example >}}

### Via Sass

Remove the divider by setting the Sass variable ```$breadcrumb-divider``` to ```none```.

```scss
$breadcrumb-divider: none;
```
