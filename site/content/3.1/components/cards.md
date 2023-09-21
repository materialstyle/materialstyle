---
layout: docs
title: Cards
group: components
toc: true
description: Cards contain content and actions that relate information about a subject.
---

{{< example codeId="code1" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="card bg-danger bg-opacity-10" style="max-width:400px">
  <div class="card-body">
    <h4 class="card-title text-danger">Unlimited Music</h4>
    <p class="card-text">
      Listen to your favourite artists and albums whenever wherever online
      and offline
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
    <button type="button" class="btn btn-outline-danger border-0">
      Listen Now
    </button>

    <div>
      <button type="button" class="btn btn-fab mini-fab btn-danger m-1">
        <i class="bi bi-heart-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-danger m-1">
        <i class="bi bi-share-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-danger m-1">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</div>

{{< /example >}}

## With border
{{< example codeId="code2" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="card border border-primary" style="max-width:400px">
  <div class="card-body">
    <h4 class="card-title text-primary">Unlimited Music</h4>
    <p class="card-text">
      Listen to your favourite artists and albums whenever wherever online
      and offline
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
    <button type="button" class="btn btn-outline-primary border-0">
      Listen Now
    </button>

    <div>
      <button type="button" class="btn btn-fab mini-fab btn-primary m-1">
        <i class="bi bi-heart-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-primary m-1">
        <i class="bi bi-share-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-primary m-1">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</div>

{{< /example >}}

## With image
{{< example codeId="code3" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="card bg-success bg-opacity-10 m-3" style="max-width: 400px;">
  <img class="card-img-top" src="/materialstyle/assets/images/suv.jpg" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">SUV</h4>
    <p class="card-text">
      An SUV is a powerful vehicle with four-wheel drive that can be
      driven over rough ground. SUV is an abbreviation for 'sport utility
      vehicle'.
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2">
    <div>
      <button type="button" class="btn btn-outline-success border-0">Read</button>
      <button type="button" class="btn btn-outline-success border-0">Bookmark</button>
    </div>
    <div>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-heart-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-share-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</div>

{{< /example >}}

## With image overlay
{{< example codeId="code4" class="d-flex justify-content-center align-items-center flex-wrap" >}}

<div class="card m-3" style="max-width:400px">
  <img class="card-img-top" src="/materialstyle/assets/images/butterfly.jpg" alt="Card image">
  <div class="card-img-overlay">
    <h4 class="card-title text-light">Butterfly</h4>
    <p class="card-text text-light">
      Just when the caterpillar thought the world was over, it became a Butterfly.
    </p>
  </div>
  <div class="d-flex justify-content-between align-items-center flex-wrap p-2 bg-warning bg-opacity-10 rounded-bottom">
    <div>
      <button type="button" class="btn btn-outline-danger border-0">Read</button>
      <button type="button" class="btn btn-outline-danger border-0">Bookmark</button>
    </div>
    <div>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-heart-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-share-fill"></i>
      </button>
      <button type="button" class="btn btn-fab mini-fab btn-outline-dark border-0 m-1">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  </div>
</div>

{{< /example >}}
