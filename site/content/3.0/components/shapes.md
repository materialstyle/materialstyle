---
layout: docs
title: Shapes
group: components
toc: true
---

# Shapes

Shapes direct attention, identify components, communicate state, and express brand.

{{< callout info >}}
{{< partial "callout-info-requiresjavascript.md" >}}
{{< /callout >}}

## Button
{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container shape-parent-bg-white">
  <button type="button" class="btn btn-purple">
    Button
  </button>
  <div class="angle-top-left"></div>
  <div class="angle-top-right"></div>
  <div class="angle-bottom-left"></div>
  <div class="angle-bottom-right"></div>
</div>

{{< /example >}}

## Outlined Button
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container shape-parent-bg-white">
  <button type="button" class="btn btn-outline-purple">
    Button
  </button>
  <div class="angle-top-left"></div>
  <div class="angle-top-right"></div>
  <div class="angle-bottom-left"></div>
  <div class="angle-bottom-right"></div>
</div>

{{< /example >}}

## Card
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container shape-parent-bg-white">
  <div class="card bg-purple bg-opacity-10" style="max-width:400px">
    <div class="card-body">
      <h4 class="card-title text-purple">Unlimited Music</h4>
      <p class="card-text">
        Listen to your favourite artists and albums whenever wherever online
        and offline
      </p>
    </div>
    <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
      <button type="button" class="btn btn-text-purple">
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
  <div class="angle-top-right size-50"></div>
</div>

{{< /example >}}

## Card with border
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container shape-parent-bg-white">
  <div class="card border border-purple" style="max-width:400px">
    <div class="card-body">
      <h4 class="card-title text-purple">Unlimited Music</h4>
      <p class="card-text">
        Listen to your favourite artists and albums whenever wherever online
        and offline
      </p>
    </div>
    <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
      <button type="button" class="btn btn-text-purple">
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
  <div class="angle-top-right size-50 border border-bottom border-purple"></div>
</div>

{{< /example >}}

## Div
{{< example codeId="code5" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="m-shape-container shape-parent-bg-white">
  <div class="bg-purple bg-opacity-10 border border-bottom border-2 border-purple"
       style="height: 200px; width: 400px;"></div>
  <div class="angle-top-left size-50 border border-bottom border-2 border-purple"></div>
  <div class="angle-top-right size-50 border border-bottom border-2 border-purple"></div>
  <div class="angle-bottom-left size-50 border border-bottom border-2 border-purple"></div>
  <div class="angle-bottom-right size-50 border border-bottom border-2 border-purple"></div>
</div>

{{< /example >}}
