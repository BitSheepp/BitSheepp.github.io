---
title: Blog
permalink: /blog/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  {% include site_nav.html current="blog" %}

  <div class="page-shell">
    <section class="page-panel">
      <div class="page-kicker">Writing Desk</div>
      <h2>Diary notes, quiet updates, and in-progress thoughts</h2>
      <p class="page-intro muted">Anyone can read the posts here without logging in. If someone wants to leave a comment, they sign in with GitHub through the comment box at the bottom of each post.</p>
    </section>

    <section class="section">
      <h2>All Posts</h2>
      <div class="grid">
        {% for post in site.posts %}
        <a class="card card-link" href="{{ post.url | relative_url }}">
          <div class="muted">{{ post.date | date: "%Y-%m-%d" }}</div>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt | strip_html | truncate: 170 }}</p>
          <span class="link-arrow">Read note</span>
        </a>
        {% endfor %}
      </div>
    </section>
  </div>
</div>
