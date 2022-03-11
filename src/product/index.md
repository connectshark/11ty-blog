---
title: 小資好物
layout: layouts/index.njk
description: 小資族好物大全
eleventyExcludeFromCollections: true
pagination:
  data: collections.product
  size: 2
  alias: posts_set
---

<ul class=" p-0 list-none rounded-xl bg-white">
  {%- for page in posts_set -%}
  <li>
    <article class="p-6 rounded-lg bg-white my-4 flex items-start flex-wrap lg:flex-nowrap justify-between">
      {%- if page.data.cover -%}
      <figure class=" shrink-0 w-full lg:w-80">
        <a href="{{ page.url }}">
          <img loading="lazy" class=" rounded-xl object-cover" src="{{ page.data.cover }}" alt="{{ page.title }}">
        </a>
      </figure>
      {%- endif -%}
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


<ul class=" p-0 list-none text-center">
{%- if pagination.href.first -%}
  <li class=" inline-block mx-2">
    <a class="block p-2 border rounded-lg bg-white no-underline hover:text-amber-400 hover:underline" href="{{ pagination.href.first | url }}"><i class='bx bxs-arrow-to-right bx-rotate-180' ></i></a>
  </li>
  {%- endif -%}
{%- if pagination.href.previous -%}
  <li class=" inline-block mx-2">
    <a class="block p-2 border rounded-lg bg-white no-underline hover:text-amber-400 hover:underline" href="{{ pagination.href.previous | url }}"><i class='bx bxs-chevron-right bx-rotate-180' ></i></a>
  </li>
  {%- endif -%}
  {%- set page_index = 1 -%}
  {%- for page in pagination.hrefs -%}
  <li class=" inline-block mx-2">
  <a class="block p-2 border rounded-lg bg-white no-underline hover:text-amber-400 hover:underline" href="{{ page }}">{{ page_index }}</a>
  </li>
  {%- set page_index = page_index + 1 -%}
  {%- endfor -%}
{%- if pagination.href.next -%}
  <li class=" inline-block mx-2">
    <a class="block p-2 border rounded-lg bg-white no-underline hover:text-amber-400 hover:underline" href="{{ pagination.href.next | url }}">
      <i class='bx bxs-chevron-right'></i>
    </a>
  </li>
  {%- endif -%}
{%- if pagination.href.last -%}
  <li class=" inline-block mx-2">
    <a class="block p-2 border rounded-lg bg-white no-underline hover:text-amber-400 hover:underline" href="{{ pagination.href.last | url }}">
      <i class='bx bxs-arrow-to-right' ></i>
    </a>
  </li>
  {%- endif -%}
</ul>