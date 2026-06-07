---
title: 博客
permalink: /cn/blog/
layout: page
lang: cn
nav_key: blog
alt_url: /blog/
page_kicker: 写作模块
description: "用于日记、随笔与阶段性记录的可选模块。"
---

博客在第一版中仍然是 **附加模块**，而不是网站主线。

它适合承载：

- 日常研究记录
- 简短随笔
- 阶段性总结
- 不适合放进正式论文页面的灵感片段

## 当前状态

- 任何人都可以直接阅读
- 评论通过 GitHub 登录完成
- 后续文章建议直接写入 `_posts/`，使用 Markdown 维护

## 当前中文文章

{% assign posts_cn = site.posts | where: "lang", "cn" %}
{% if posts_cn.size > 0 %}
{% for post in posts_cn %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
当前还没有单独的中文博客文章。
{% endif %}
