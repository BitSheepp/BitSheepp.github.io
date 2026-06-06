---
title: Projects
permalink: /projects/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  <h2>Projects</h2>
  <div class="grid">
    {% assign items = site.data.projects | sort: 'title' %}
    {% for p in items %}
    <div class="card">
      <h3>{{ p.title }}</h3>
      <div class="muted">{{ p.role }} | {{ p.period }}</div>
      {% if p.tags %}<div class="badges">{% for t in p.tags %}<span class="badge">{{ t }}</span>{% endfor %}</div>{% endif %}
      <p>{{ p.summary }}</p>
    </div>
    {% endfor %}
  </div>
</div>
