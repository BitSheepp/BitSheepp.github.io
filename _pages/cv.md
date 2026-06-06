---
title: CV
permalink: /pages/cv/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

{% assign cv = site.data.cv %}
<div class="wrapper">
  {% include site_nav.html current="cv" %}

  <div class="page-shell">
    <section class="page-panel">
      <div class="page-kicker">Curriculum Vitae</div>
      <h2>Education, project history, and practical skill set</h2>
      <p class="page-intro muted">This page works as a cleaner academic profile summary rather than a plain resume dump. It keeps the same visual language as the homepage while staying easy to scan.</p>
    </section>

    <section class="section">
      <h2>Education</h2>
      <div class="grid">
        {% for e in cv.education %}
        <div class="card">
          <h3>{{ e.school }} - {{ e.degree }}</h3>
          <div class="muted">{{ e.period }} | {{ e.place }}</div>
          {% if e.notes %}<div class="kv"><b>Notes</b> {{ e.notes }}</div>{% endif %}
        </div>
        {% endfor %}
      </div>
    </section>

    <section class="section">
      <h2>Selected Projects</h2>
      <div class="grid">
        {% for p in cv.projects_selected %}
        <div class="card">
          <h3>{{ p.title }}</h3>
          <div class="muted">{{ p.role }} | {{ p.period }}</div>
          <ul>{% for b in p.bullets %}<li>{{ b }}</li>{% endfor %}</ul>
          {% if p.tags %}<div class="badges">{% for t in p.tags %}<span class="badge">{{ t }}</span>{% endfor %}</div>{% endif %}
        </div>
        {% endfor %}
      </div>
    </section>

    <section class="section">
      <h2>Skills</h2>
      <div class="grid">
        {% for s in cv.skills %}
        <div class="card">
          <h3>{{ s.group }}</h3>
          <div class="badges">{% for i in s.items %}<span class="badge">{{ i }}</span>{% endfor %}</div>
        </div>
        {% endfor %}
      </div>
    </section>

    <section class="section">
      <h2>Awards</h2>
      <ul>{% for a in cv.awards %}<li>{{ a }}</li>{% endfor %}</ul>
    </section>
  </div>
</div>
