---
layout: page
permalink: /books/
title: Books by Janessa Suderman
---

<ul class="books">
{% for book in site.books %}
  {% if book.series == 'sisters-in-the-west' %}
  <li>
    <a href="{{ book.url }}" title="{{ book.title }}">
      <img src="{{ book.cover }}" alt="{{ book.title }}">
      <h4>{{ book.title }}</h4>
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>

<ul class="books">
{% for book in site.books %}
  {% if book.series == 'summer-trails' %}
  <li>
    <a href="{{ book.url }}" title="{{ book.title }}">
      <img src="{{ book.cover }}" alt="{{ book.title }}">
      <h4>{{ book.title }}</h4>
    </a>
  </li>
  {% endif %}
{% endfor %}
</ul>
