---
title: 首頁
layout: 'layouts/index.njk'
pagination:
  data: collections.post
  size: 5
---

<ul class=" p-0 list-none">
  {%- for page in collections.post -%}
  <li>
    <article class="p-6 rounded-lg bg-white my-4 flex items-start flex-wrap lg:flex-nowrap justify-between">
      <figure class=" shrink-0 w-full lg:w-80">
        <a href="{{ page.url }}">
          <img loading="lazy" class=" rounded-xl object-cover" src="{{ page.data.cover }}" alt="{{ page.title }}">
        </a>
      </figure>
      <div class=" px-4">
        <h2 class=" text-2xl">
          <a class=" no-underline hover:underline hover:text-amber-400" href="{{ page.url }}">{{ page.data.title }}</a>
        </h2>
        <p>{{ page.data.description }}</p>
      </div>
    </article>
  </li>
  {%- endfor -%}
</ul>