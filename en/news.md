---
layout: page
title: News
lang: en
permalink: /en/news/
nav_order: 5
---
<ul class="post-list">
  {% assign news_list = site.posts | where: "lang", "en" | sort: "date" | reverse %}
  {% for post in news_list %}
    <li>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
