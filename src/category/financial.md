---
title: 小資理財
description: 每個理財紀錄
---
## {{title}}文章一覽

<main class="tdbc-container">
  <div class="tdbc-section">
    <ul class="tdbc-column-container">
{%- for page in collections.financial -%}
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