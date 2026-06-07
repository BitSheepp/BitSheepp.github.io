---
title: Blog
permalink: /blog/
layout: page
lang: en
nav_key: blog
alt_url: /cn/blog/
page_kicker: Writing Module
description: "A light writing area for notes, diary-like entries, and short reflections."
---

This route exists as an **optional writing module** rather than the center of the site.
It is kept intentionally light in V1 so the academic profile remains the main focus.

## Current status

- public reading is open to everyone
- comments use GitHub login through utterances
- future posts should be written directly in `_posts/` using Markdown

## Existing posts

{% assign posts_en = site.posts | where: "lang", "en" %}
{% if posts_en.size > 0 %}
{% for post in posts_en %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
No English posts have been added yet.
{% endif %}
