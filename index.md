---
title: Chunyang He
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

{% assign p = site.data.profile %}
{% assign pubs = site.data.publications %}
<div class="wrapper">
  <section class="hero">
    <p class="eyebrow">Genomics, Bioinformatics, and AI</p>
    <h1>{{ p.name }}</h1>
    <div class="subtitle">{{ p.subtitle }}</div>
    <div class="meta">
      {{ p.location }} | <a href="mailto:{{ p.email }}">{{ p.email }}</a> | {{ p.phone }}
    </div>
  </section>

  <section class="section">
    <h2>About</h2>
    <p>{{ p.about }}</p>
    <div class="badges">
      {% for b in p.badges %}<span class="badge">{{ b }}</span>{% endfor %}
    </div>
  </section>

  <section class="section">
    <h2>Research Themes</h2>
    <div class="grid">
      {% for item in p.research_themes %}
      <div class="card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.summary }}</p>
        <div class="badges">{% for t in item.tags %}<span class="badge">{{ t }}</span>{% endfor %}</div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section">
    <h2>Selected Publications</h2>
    <div class="grid">
      {% for pub in pubs limit:3 %}
      <div class="card">
        <div class="muted">{{ pub.venue }} | {{ pub.year }}</div>
        <h3>{{ pub.title }}</h3>
        <p class="muted">{{ pub.authors }}</p>
        <div class="badges">
          <span class="badge">{{ pub.status }}</span>
          <span class="badge">IF {{ pub.impact_factor }}</span>
        </div>
        {% if pub.doi_url %}<div class="kv"><b>DOI</b> <a href="{{ pub.doi_url }}">{{ pub.doi }}</a></div>{% endif %}
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section">
    <h2>Quick Links</h2>
    <div class="grid">
      <a class="card card-link" href="{{ '/pages/cv/' | relative_url }}">
        <h3>CV</h3>
        <div class="muted">Education, selected projects, skills, and awards.</div>
      </a>
      <a class="card card-link" href="{{ '/projects/' | relative_url }}">
        <h3>Projects</h3>
        <div class="muted">Research topics, pipelines, and phenotyping systems.</div>
      </a>
      <a class="card card-link" href="{{ '/publications/' | relative_url }}">
        <h3>Publications</h3>
        <div class="muted">Published papers and current manuscript work.</div>
      </a>
      <a class="card card-link" href="{{ '/news/' | relative_url }}">
        <h3>News</h3>
        <div class="muted">Recent updates across research and the website.</div>
      </a>
    </div>
  </section>
</div>
