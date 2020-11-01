# Material Style
Material Style is an easy to use UI Library based on Bootstrap 4.5 that lets you add Material Design styles and animations to Bootstrap components.

## Components
https://materialstyle.github.io/docs/2.0/components/alert/

## Get Started
https://materialstyle.github.io/docs/2.0/getting-started/installation/

### 1. CDN
#### Styles
```
<!-- Material Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<!-- Material Style CSS -->
<link rel="stylesheet" href="https://unpkg.com/@materialstyle/materialstyle@2.0.2/dist/css/materialstyle.min.css">
```
#### Scripts
```
<!-- JQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<!-- Material Style JS -->
<script src="https://unpkg.com/@materialstyle/materialstyle@2.0.2/dist/js/materialstyle.min.js"></script>
```

### 2. NPM
#### Install
```
npm i @materialstyle/materialstyle
```
#### Import Material Style JS
```
import '@materialstyle/materialstyle';
```
#### Alternatively, you may import plugins individually as needed
```
import '@materialstyle/materialstyle/js/dist/util';
import '@materialstyle/materialstyle/js/dist/alert';
```
#### Import Material Style CSS in your SCSS/CSS file
```
@import '@materialstyle/materialstyle/dist/css/materialstyle.min.css';
```
#### Material Style depends on jQuery and Popper, which are specified in the peerDependencies property; this means that you will have to make sure to add both of them to your package.json using:
```
npm i jquery popper.js
```

### 3. Download the latest release
https://materialstyle.github.io/store/materialstyle-2.0.2.zip
