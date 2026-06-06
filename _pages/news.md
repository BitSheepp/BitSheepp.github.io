---
title: News
permalink: /news/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  {% include site_nav.html current="news" %}

  <div class="page-shell">
    <section class="page-panel">
      <div class="page-kicker">Timeline</div>
      <h2>Recent milestones across the website and research</h2>
      <p class="page-intro muted">This page keeps short updates lightweight, while the blog is reserved for fuller diary-style writing.</p>
    </section>

    <section class="section">
      <h2>News</h2>
      <div class="timeline">
        {% for item in site.data.news %}
        <div class="timeline-item">
          <div class="timeline-year">{{ item.date }}</div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
    </section>
  </div>
</div>
