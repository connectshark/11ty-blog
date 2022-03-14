---
title: 小資好物
layout: layouts/index.njk
description: 小資族好物大全
eleventyExcludeFromCollections: true
pagination:
  data: collections.product
  size: 5
  alias: posts_set
---
<ul class=" p-4 mb-4 list-none rounded-xl bg-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
  {%- for page in posts_set -%}
  <li class=" group ">
    <a href="{{ page.url }}" class="block no-underline text-inherit">
      <article class="p-6 rounded-lg bg-white transition-colors group-hover:bg-amber-200 border group-hover:border-amber-200">
        {%- if page.data.cover -%}
        <figure>
          <img loading="lazy" class=" w-full mx-auto rounded-xl object-cover" src="{{ page.data.cover }}" alt="{{ page.title }}">
        </figure>
        {%- endif -%}
        <div class=" px-4">
          <h2 class=" group-hover:text-sky-700 text-xl 2xl:text-2xl">{{ page.data.title }}</h2>
          <p class=" truncate mb-8">{{ page.data.description }}</p>
          <p class=" text-right ">
            <span class=" group-hover:underline inline-block py-2 px-6 text-white rounded-lg bg-sky-700">閱讀</span>
          </p>
        </div>
      </article>
    </a>
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