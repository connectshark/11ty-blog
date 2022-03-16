---
title: 小資美食
layout: layouts/index.njk
description: 小資族美食大全
eleventyExcludeFromCollections: true
pagination:
  data: collections.foods
  size: 5
  alias: posts_set
---
{% include 'components/gridArticle.njk' %}
{% include 'components/pagination.njk' %}