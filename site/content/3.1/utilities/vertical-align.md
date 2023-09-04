---
layout: docs
title: Vertical align
group: utilities
toc: true
keywords: utilities, vertical align
---

<p class="fs-4 ms-0 mb-4 page-description">
 Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.
</p>

Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align only 
affects inline, inline-block, inline-table, and table cell elements.

Choose from `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, and 
`.align-text-top` as needed.

To vertically center non-inline content (like `<div>`s and more), use our flex box utilities.

## With inline elements

{{< example codeId="code1" class="overflow-x-auto" >}}

<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>

{{< /example >}}

## With table cells

{{< example codeId="code2" class="overflow-x-auto" >}}

<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>

{{< /example >}}
