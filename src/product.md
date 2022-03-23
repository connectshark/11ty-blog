---
title: 小資好物
layout: 'layouts/index.njk'
pagination:
  data: collections.product
  size: 6
  alias: posts_set
---
{% include 'components/gridArticle.njk' %}

{% include 'components/pagination.njk' %}