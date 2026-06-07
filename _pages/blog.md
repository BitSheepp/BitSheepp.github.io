---
title: Blog
permalink: /blog/
layout: page
lang: en
nav_key: blog
alt_url: /cn/blog/
page_kicker: Writing
description: "A light space for notes, diary-like entries, and short reflections."
---

This page is kept intentionally simple in V2.

It is a secondary writing space for:

- research notes
- short reflections
- diary-style posts
- material that does not belong on the main academic pages

## Current status

- public reading is open to everyone
- comments use GitHub login through utterances
- new posts should be written directly in `_posts/` with Markdown

## Existing posts

{% assign posts_en = site.posts | where: "lang", "en" %}
{% if posts_en.size > 0 %}
{% for post in posts_en %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
No English posts have been added yet.
{% endif %}