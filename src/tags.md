---
layout: 'layouts/index.njk'
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
---
{% set posts_set = collections[ tag ] %}

{% include 'components/gridArticle.njk' %}