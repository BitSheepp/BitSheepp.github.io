---
title: Blog
permalink: /blog/
layout: page
lang: en
nav_key: blog
alt_url: /cn/blog/
page_kicker: Blog
description: "Short-form writing, research notes, and diary-style entries kept alongside the main academic pages."
---

This page collects lighter writing that sits beside the main research and publication pages.

## Existing posts

{% assign posts_en = site.posts | where: "lang", "en" %}
{% if posts_en.size > 0 %}
{% for post in posts_en %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
No English posts have been added yet.
{% endif %}
