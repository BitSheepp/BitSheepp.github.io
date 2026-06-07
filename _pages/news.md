---
title: News
permalink: /news/
layout: page
lang: en
nav_key: about
alt_url: /cn/
page_kicker: Update Stream
description: "Short update entries collected from the same structured data used on the homepage."
---

{% for item in site.data.news %}
### {{ item.date }} · {{ item.title_en }}

{{ item.detail_en }}

{% endfor %}
