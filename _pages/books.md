---
layout: page
permalink: /books/
title: Books by Janessa Suderman
---

<ul class="books">
{% for book in site.books %}
  <li>
    <a href="{{ book.url }}" title="{{ book.title }}">
      <img src="{{ book.cover }}" alt="{{ book.title }}">
      <h4>{{ book.title }}</h4>
    </a>
  </li>
{% endfor %}
</ul>
