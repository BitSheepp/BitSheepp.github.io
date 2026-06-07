---
title: 博客
permalink: /cn/blog/
layout: page
lang: cn
nav_key: blog
alt_url: /blog/
page_kicker: 博客
description: "用于研究随笔、阶段性记录与日常写作的轻量页面。"
---

这个页面收录相对轻量的写作内容，作为研究主页之外的补充记录。

## 当前中文文章

{% assign posts_cn = site.posts | where: "lang", "cn" %}
{% if posts_cn.size > 0 %}
{% for post in posts_cn %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
当前还没有单独的中文博客文章。
{% endif %}
