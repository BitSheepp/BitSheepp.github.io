---
title: 简历
permalink: /cn/cv/
layout: page
lang: cn
nav_key: cv
alt_url: /cv/
page_kicker: 学术履历
description: "教育背景、代表经历、技能结构与奖励信息。"
---

{% assign cv = site.data.cv %}

## 教育背景

{% for e in cv.education %}
### {{ e.school_cn }}
**{{ e.degree_cn }}**  
{{ e.period }} | {{ e.place_cn }}

{{ e.notes_cn }}

{% endfor %}

## 代表经历

{% for p in cv.projects_selected %}
### {{ p.title_cn }}
**{{ p.role_cn }}** | {{ p.period }}

{% for b in p.bullets_cn %}
- {{ b }}
{% endfor %}

{% if p.tags %}
标签：{{ p.tags | join: "、" }}
{% endif %}

{% endfor %}

## 技能结构

{% for s in cv.skills %}
### {{ s.group_cn }}
{{ s.items | join: "、" }}

{% endfor %}

## 奖项与荣誉

{% for a in cv.awards %}
- {{ a.cn }}
{% endfor %}