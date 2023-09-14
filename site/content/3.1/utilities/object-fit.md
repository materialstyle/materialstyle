---
layout: docs
title: Object fit
group: utilities
toc: true
keywords: utilities, object fit
---

<p class="fs-4 ms-0 mb-4 page-description">
 Use the object fit utilities to modify how the content of a 
 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">replaced element</a>, 
 such as an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code>, should be resized to fit its container.
</p>

## How it works
Change the value of the [object-fit property](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) with our 
responsive `object-fit` utility classes. This property tells the content to fill the parent container in a variety 
of ways, such as preserving the aspect ratio or stretching to take up as much space as possible.

Classes for the value of `object-fit` are named using the format `.object-fit-{value}`. Choose from the `
following values:
- `contain`
- `cover`
- `fill`
- `scale` (for scale-down)
- `none`

## Examples
Add the object-fit-{value} class to the [replaced element](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element):

{{< example codeId="code1" class="d-flex flex-wrap justify-content-center align-items-center gap-2" >}}

<img class="border object-fit-contain" alt="Object fit contain" width="140" height="120" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EObject%20fit%20contain%3C/text%3E%3C/svg%3E">
<img class="border object-fit-cover" alt="Object fit cover" width="140" height="120" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EObject%20fit%20cover%3C/text%3E%3C/svg%3E">
<img class="border object-fit-fill" alt="Object fit fill" width="140" height="120" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EObject%20fit%20fill%3C/text%3E%3C/svg%3E">
<img class="border object-fit-scale" alt="Object fit scale down" width="140" height="120" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EObject%20fit%20scale%20down%3C/text%3E%3C/svg%3E">
<img class="border object-fit-none" alt="Object fit none" width="140" height="120" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EObject%20fit%20none%3C/text%3E%3C/svg%3E">

{{< /example >}}

## Responsive
Responsive variations also exist for each object-fit value using the format `.object-fit-{breakpoint}-{value}`, 
for the following breakpoint abbreviations: `sm`, `md`, `lg`, `xl`, and `xxl`. Classes can be combined for 
various effects as you need.

{{< example codeId="code2" class="d-flex flex-wrap justify-content-center align-items-center gap-2" >}}

<img class="border object-fit-sm-contain" alt="Contain on sm" width="140" height="80" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EContain%20on%20sm%3C/text%3E%3C/svg%3E">
<img class="border object-fit-md-contain" alt="Contain on md" width="140" height="80" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EContain%20on%20md%3C/text%3E%3C/svg%3E">
<img class="border object-fit-lg-contain" alt="Contain on lg" width="140" height="80" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EContain%20on%20lg%3C/text%3E%3C/svg%3E">
<img class="border object-fit-xl-contain" alt="Contain on xl" width="140" height="80" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EContain%20on%20xl%3C/text%3E%3C/svg%3E">
<img class="border object-fit-xxl-contain" alt="Contain on xxl" width="140" height="80" src="data:image/svg+xml,%3Csvg%20style='font-size:%201.125rem;%20font-family:system-ui,-apple-system,%22Segoe%20UI%22,Roboto,%22Helvetica%20Neue%22,%22Noto%20Sans%22,%22Liberation%20Sans%22,Arial,sans-serif,%22Apple%20Color%20Emoji%22,%22Segoe%20UI%20Emoji%22,%22Segoe%20UI%20Symbol%22,%22Noto%20Color%20Emoji%22;%20-webkit-user-select:%20none;%20-moz-user-select:%20none;%20user-select:%20none;%20text-anchor:%20middle;'%20width='200'%20height='200'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPlaceholder%3C/title%3E%3Crect%20width='100%25'%20height='100%25'%20fill='%23dee2e6'%3E%3C/rect%3E%3Ctext%20x='50%25'%20y='50%25'%20fill='%23868e96'%20dy='.3em'%3EContain%20on%20xxl%3C/text%3E%3C/svg%3E">

{{< /example >}}

The `.object-fit-{value}` and responsive `.object-fit-{breakpoint}-{value}` utilities also work on `<video>` elements.