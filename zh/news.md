---
layout: page
title: 新闻动态
lang: zh
permalink: /news/
nav_order: 5
---
<ul class="post-list">
  {% assign news_list = site.posts | where: "lang", "zh" | sort: "date" | reverse %}
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
