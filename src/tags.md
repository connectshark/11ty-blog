---
layout: 'layouts/index.njk'
title: 標籤頁面
pagination:
  data: collections
  size: 5
  alias: tag
permalink: /tags/{{ tag }}/
---

<h1>Tagged “{{ tag }}”</h1>

<ol>
{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ol>