---
title: Publications
permalink: /publications/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

{% assign pubs = site.data.publications | sort: "year" | reverse %}
<div class="wrapper">
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
</div>
