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
      <div class="hero-cta">
        <a class="button" href="{{ '/write/' | relative_url }}">How To Write</a>
        <a class="button-secondary" href="https://github.com/BitSheepp/BitSheepp.github.io/new/main/_posts">Create New Post On GitHub</a>
      </div>
    </section>

    <div class="split-grid">
      <section class="section">
        <h2>All Posts</h2>
        <div class="archive-list">
          {% for post in site.posts %}
          <a class="archive-item card-link" href="{{ post.url | relative_url }}">
            <div class="archive-date">{{ post.date | date: "%Y-%m-%d" }}</div>
            <div>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt | strip_html | truncate: 170 }}</p>
              {% if post.tags %}<div class="badges">{% for tag in post.tags %}<span class="badge">{{ tag }}</span>{% endfor %}</div>{% endif %}
            </div>
          </a>
          {% endfor %}
        </div>
      </section>

      <section class="section">
        <h2>Tags</h2>
        <div class="tag-cloud">
          {% assign tags = site.tags | sort %}
          {% for tag in tags %}
          <a class="badge" href="{{ '/blog/' | relative_url }}#tag-{{ tag[0] | slugify }}">{{ tag[0] }} ({{ tag[1].size }})</a>
          {% endfor %}
        </div>

        {% for tag in tags %}
        <div id="tag-{{ tag[0] | slugify }}" class="card" style="margin-top: 1rem;">
          <h3>{{ tag[0] }}</h3>
          <ul>
            {% for post in tag[1] %}
            <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span class="muted">({{ post.date | date: "%Y-%m-%d" }})</span></li>
            {% endfor %}
          </ul>
        </div>
        {% endfor %}
      </section>
    </div>
  </div>
</div>
