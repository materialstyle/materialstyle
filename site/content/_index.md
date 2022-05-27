---
layout: redirect
sitemap_exclude: true
{{ if eq (getenv "NETLIFY") "true" }}
redirect: "/3.0/getting-started/installation/"
{{ else }}
redirect: "/materialstyle/3.0/getting-started/installation/"
{{ end }}
---
