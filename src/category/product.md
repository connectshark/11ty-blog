---
title: 小資好物
description: 每個好物紀錄
---
## {{title}}文章一覽

<main class="tdbc-container">
  <div class="tdbc-section">
    <ul class="tdbc-column-container">
{%- for page in collections.product -%}
<li class="tdbc-card">
  <div class="tdbc-card__content">
    <a href="{{ page.url }}" class="tdbc-card__title">{{ page.data.title }}</a>
    <p>{{ page.data.description }}</p>
  </div>
</li>
{%- endfor -%}
</ul>
</div>
</div>