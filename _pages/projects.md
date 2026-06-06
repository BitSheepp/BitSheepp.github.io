---
title: Projects
permalink: /projects/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  {% include site_nav.html current="projects" %}

  <div class="page-shell">
    <section class="page-panel">
      <div class="page-kicker">Project Portfolio</div>
      <h2>Research directions that can keep growing into tools, datasets, and papers</h2>
      <p class="page-intro muted">Instead of feeling like disconnected cards, these project entries now read more like a professional roadmap for your work.</p>
    </section>

    <section class="section">
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
    </section>
  </div>
</div>
