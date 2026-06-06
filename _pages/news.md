---
title: News
permalink: /news/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  <h2>News</h2>
  <div class="grid">
    {% for item in site.data.news %}
    <div class="card">
      <div class="muted">{{ item.date }}</div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.detail }}</p>
    </div>
    {% endfor %}
  </div>
</div>
