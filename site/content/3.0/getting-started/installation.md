---
layout: docs
title: Installation
group: getting-started
aliases:
  - "/3.0/getting-started/"
  - "/getting-started/"
toc: true
keywords: getting-started, installation
---

# Installation

## CDN

Styles

```html
<!-- Material Style CSS -->
<link rel="stylesheet"
      href="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/css/materialstyle.min.css">
```

Scripts

```html
<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" 
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" 
        crossorigin="anonymous"></script>

<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@3.0.0/dist/js/materialstyle.min.js">
</script>
```

<br>

## npm

Install

```console
npm i @materialstyle/materialstyle
```

Import Material Style

```javascript
import '@materialstyle/materialstyle';
```

Alternatively, you may import plugins individually as needed

```javascript
import '@materialstyle/materialstyle/js/dist/util';
import '@materialstyle/materialstyle/js/dist/alert';
```

Import Material Style CSS in your SCSS/CSS file

```css
@import '@materialstyle/materialstyle/dist/css/materialstyle.min.css';
```

Material Style depends on Popper, which is specified in the peerDependencies property; this means that you will have to make sure to add both of them to your package.json using:

```console
npm i popper.js
```

<br>

## Download

<a class="btn btn-purple btn-lg rounded-pill" 
   href="https://github.com/materialstyle/materialstyle.github.io/raw/main/store/3.0.0.zip" download>
  Download v3.0.0
</a>

<br>
    
## Next steps
For the next steps, check our <a class="link-purple text-decoration-none" href="/materialstyle/3.0/getting-started/starter-templates/">Starter Templates</a> to start laying out your site’s content and components.
