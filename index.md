---
title: Chunyang He
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

{% assign p = site.data.profile %}
{% assign pubs = site.data.publications %}
{% assign latest_post = site.posts | first %}

<div class="wrapper">
  {% include site_nav.html current="home" %}

  <section class="hero">
    <div class="hero-main">
      <p class="eyebrow">Genomics, Bioinformatics, and AI</p>
      <h1>{{ p.name }}</h1>
      <div class="subtitle">{{ p.subtitle }}</div>
      <div class="meta">
        {{ p.location }} | <a href="mailto:{{ p.email }}">{{ p.email }}</a> | {{ p.phone }}
      </div>
      <p class="hero-copy">{{ p.about }}</p>
      <div class="badges">
        {% for b in p.badges %}<span class="badge">{{ b }}</span>{% endfor %}
      </div>
      <div class="hero-cta">
        <a class="button" href="{{ '/publications/' | relative_url }}">View Publications</a>
        <a class="button-secondary" href="{{ '/blog/' | relative_url }}">Read Blog Notes</a>
      </div>
    </div>

    <aside class="hero-side">
      <div class="hero-stats">
        <div class="stat-card">
          <div class="stat-label">Published Papers</div>
          <div class="stat-value">{{ pubs.size }}</div>
          <div class="stat-note">Current published outputs highlighted on the site.</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Research Themes</div>
          <div class="stat-value">{{ p.research_themes.size }}</div>
          <div class="stat-note">Trait genetics, AI phenotyping, and reproducible bioinformatics.</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Blog Status</div>
          <div class="stat-value">Live</div>
          <div class="stat-note">Public reading for everyone, GitHub login only when commenting.</div>
        </div>
      </div>
    </aside>
  </section>

  <section class="feature-panel">
    <div>
      <div class="feature-kicker">Featured Publication</div>
      <h3>{{ pubs.first.title }}</h3>
      <p class="muted">{{ pubs.first.authors }}</p>
      <p>{{ pubs.first.venue }} published this work in {{ pubs.first.year }}, connecting molecular biology and trait-oriented crop research.</p>
      <div class="badges">
        <span class="badge">{{ pubs.first.status }}</span>
        <span class="badge">IF {{ pubs.first.impact_factor }}</span>
        {% if pubs.first.doi_url %}<a class="badge" href="{{ pubs.first.doi_url }}">DOI</a>{% endif %}
      </div>
    </div>
    <div class="feature-metrics">
      <div class="metric-box">
        <span class="feature-kicker">Focus</span>
        <strong>Multimodal Biology</strong>
      </div>
      <div class="metric-box">
        <span class="feature-kicker">Method Stack</span>
        <strong>AI + Omics</strong>
      </div>
    </div>
  </section>

  <section class="section">
    <h2>Research Themes</h2>
    <p class="section-intro">The site now foregrounds the big questions behind the work, not just a resume list. Each theme can grow into papers, tools, datasets, and diary-style lab notes.</p>
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
    <p class="section-intro">A compact entry point for your strongest recent papers, with the full list collected on the publications page.</p>
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
    <h2>Writing Desk</h2>
    <p class="section-intro">This section is for ongoing notes, diary-style entries, and short reflections. Anyone can read them; comments use GitHub login.</p>
    <div class="grid grid-tight">
      {% if latest_post %}
      <a class="card card-link" href="{{ latest_post.url | relative_url }}">
        <div class="muted">{{ latest_post.date | date: "%Y-%m-%d" }}</div>
        <h3>{{ latest_post.title }}</h3>
        <p>{{ latest_post.excerpt | strip_html | truncate: 130 }}</p>
        <span class="link-arrow">Open latest note</span>
      </a>
      {% endif %}
      <a class="card card-link" href="{{ '/blog/' | relative_url }}">
        <h3>Blog Archive</h3>
        <p>One place for personal notes, research snapshots, and quiet in-between updates.</p>
        <span class="link-arrow">Browse all posts</span>
      </a>
      <a class="card card-link" href="{{ '/news/' | relative_url }}">
        <h3>Recent News</h3>
        <p>Shorter milestone updates across the site, publications, and projects.</p>
        <span class="link-arrow">See updates</span>
      </a>
    </div>
  </section>

  <section class="section">
    <h2>Explore the Site</h2>
    <div class="grid grid-tight">
      <a class="card card-link" href="{{ '/pages/cv/' | relative_url }}">
        <h3>CV</h3>
        <div class="muted">Education, selected projects, skills, and awards.</div>
        <span class="link-arrow">Open page</span>
      </a>
      <a class="card card-link" href="{{ '/projects/' | relative_url }}">
        <h3>Projects</h3>
        <div class="muted">Research topics, pipelines, and phenotyping systems.</div>
        <span class="link-arrow">Open page</span>
      </a>
      <a class="card card-link" href="{{ '/publications/' | relative_url }}">
        <h3>Publications</h3>
        <div class="muted">Published papers and current manuscript work.</div>
        <span class="link-arrow">Open page</span>
      </a>
      <a class="card card-link" href="{{ '/blog/' | relative_url }}">
        <h3>Blog</h3>
        <div class="muted">Daily notes, diary entries, and reflections.</div>
        <span class="link-arrow">Open page</span>
      </a>
    </div>
  </section>
</div>
