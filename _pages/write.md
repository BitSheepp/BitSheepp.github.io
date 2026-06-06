---
title: Write
permalink: /write/
layout: default
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

<div class="wrapper">
  {% include site_nav.html current="write" %}

  <div class="page-shell reading-wrap">
    <section class="page-panel">
      <div class="page-kicker">Writing Guide</div>
      <h2>The easiest way to publish a new diary note</h2>
      <p class="page-intro muted">You do not need a password from me or a special backend. You just log into your own GitHub account, create a new Markdown file in the repository, and GitHub Pages will publish it automatically a minute later.</p>
      <div class="hero-cta">
        <a class="button" href="https://github.com/BitSheepp/BitSheepp.github.io/new/main/_posts">Open New Post Page</a>
        <a class="button-secondary" href="https://github.com/BitSheepp/BitSheepp.github.io/tree/main/_posts">Open Posts Folder</a>
      </div>
    </section>

    <section class="section">
      <h2>Quick Steps</h2>
      <ol>
        <li>Open the new post page on GitHub and log in.</li>
        <li>Name the file like <code>2026-06-06-my-note.md</code>.</li>
        <li>Paste the template below, replace the title and content, then commit directly to <code>main</code>.</li>
        <li>Wait about 1 to 2 minutes and refresh the blog page.</li>
      </ol>
    </section>

    <section class="section">
      <h2>Post Template</h2>
      <div class="template-box">
<pre>---
title: "A short title"
layout: post
description: "One-line summary"
tags: [diary, life]
---

Write here.

You can use normal Markdown, including:

- lists
- **bold**
- [links](https://example.com)
</pre>
      </div>
    </section>

    <section class="section">
      <h2>Small Tips</h2>
      <ul>
        <li>If you want it to feel like a diary, keep tags simple, such as <code>diary</code>, <code>lab-note</code>, <code>idea</code>, or <code>travel</code>.</li>
        <li>If you do not want comments on one post, tell me later and I can add a switch to hide them per article.</li>
        <li>Readers do not need to log in to read. Only commenting requires GitHub login.</li>
      </ul>
    </section>
  </div>
</div>
