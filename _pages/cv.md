---
title: CV
permalink: /cv/
layout: page
lang: en
nav_key: cv
alt_url: /cn/cv/
page_kicker: Curriculum Vitae
description: "Education, selected experience, technical profile, and awards."
---

{% assign cv = site.data.cv %}

## Education

{% for e in cv.education %}
### {{ e.school_en }}
**{{ e.degree_en }}**  
{{ e.period }} · {{ e.place_en }}

{{ e.notes_en }}

{% endfor %}

## Selected Experience

{% for p in cv.projects_selected %}
### {{ p.title_en }}
**{{ p.role_en }}** · {{ p.period }}

{% for b in p.bullets_en %}
- {{ b }}
{% endfor %}

{% if p.tags %}
Tags: {{ p.tags | join: ", " }}
{% endif %}

{% endfor %}

## Skills

{% for s in cv.skills %}
### {{ s.group_en }}
{{ s.items | join: ", " }}

{% endfor %}

## Awards

{% for a in cv.awards %}
- {{ a.en }}
{% endfor %}
