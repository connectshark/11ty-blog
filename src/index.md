---
title: 首頁
layout: 'layouts/index.njk'
pagination:
  data: collections.post
  size: 6
  alias: posts_set
---
{% include 'components/gridArticle.njk' %}

{% include 'components/pagination.njk' %}