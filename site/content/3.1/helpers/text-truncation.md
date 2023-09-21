---
layout: docs
title: Text truncation
group: helpers
toc: true
keywords: helpers, text truncation
description: Truncate long strings of text with an ellipsis.
---

For longer content, you can add a `.text-truncate` class to truncate the text with an ellipsis. **Requires `display: inline-block` or `display: block`.**

{{< example codeId="code1" >}}
<!-- Block level -->
<div class="row">
  <div class="col-2 text-truncate">
    This text is quite long, and will be truncated once displayed.
  </div>
</div>

<!-- Inline level -->
<span class="d-inline-block text-truncate" style="max-width: 150px;">
  This text is quite long, and will be truncated once displayed.
</span>
{{< /example >}}