---
title: Publications
permalink: /publications/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

{% assign pubs = site.data.publications | sort: "year" | reverse %}
<div class="wrapper">
  {% include site_nav.html current="publications" %}

  <div class="page-shell">
    <section class="page-panel">
      <div class="page-kicker">Publication Record</div>
      <h2>Selected papers presented in a cleaner research-facing format</h2>
      <p class="page-intro muted">This page is designed to feel closer to a polished lab or PI site, with clear metadata and easy DOI access.</p>
    </section>

    <section class="section">
      <h2>Publications</h2>
      <div class="grid">
        {% for pub in pubs %}
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
  </div>
</div>
