---
layout: docs
title: Range
group: forms
toc: true
keywords: forms, range
---

{{< example codeId="code1">}}

<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">

{{< /example >}}

## Disabled
{{< example codeId="code2">}}

<label for="disabledRange" class="form-label">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled>

{{< /example >}}

## Min and max
{{< example codeId="code3">}}

<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">

{{< /example >}}

## Steps

By default, range inputs “snap” to integer values. To change this, you can specify a step value. 
In the example below, we double the number of steps by using ```step="0.5"```.

{{< example codeId="code4" >}}

<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">

{{< /example >}}
