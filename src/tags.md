---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - post
    - posts
    - tagList
  addAllPagesToCollections: true
layout: layouts/index.njk
eleventyComputed:
  title: Tagged “{{ tag }}”
permalink: /tags/{{ tag | slug }}/
---
{% set posts_set = collections[ tag ] %}

{% include 'components/gridArticle.njk' %}

{% include 'components/pagination.njk' %}