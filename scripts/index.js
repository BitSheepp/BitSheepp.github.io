async function loadData() {
  const res = await fetch('data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

async function loadPublications() {
  const res = await fetch('data/publications.json');
  if (!res.ok) throw new Error('Failed to load publications data');
  return res.json();
}

let profileData = null;
let publicationData = [];

function pickLangField(field, lang) {
  if (field && typeof field === 'object' && field.en && field.zh) {
    return lang === 'zh' ? field.zh : field.en;
  }
  return field || '';
}

function renderMetrics(metrics, lang) {
  return metrics.map((m) => `
    <div class="metric">
      <span class="metric-label">${lang === 'zh' ? m.label_zh : m.label_en}</span>
      <b>${m.value}</b>
    </div>
  `).join('');
}

function renderFocusTags(items) {
  return items.map((item) => `<span>${item}</span>`).join('');
}

function renderResearchThemes(themes, lang) {
  return themes.map((theme) => {
    const title = pickLangField(theme.title, lang);
    const summary = pickLangField(theme.summary, lang);
    const tags = lang === 'zh' ? (theme.tags_zh || theme.tags || []) : (theme.tags || []);
    return `
      <article class="feature-card">
        <h3>${title}</h3>
        <p>${summary}</p>
        <div class="topic-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
      </article>
    `;
  }).join('');
}

function renderUpdates(updates, lang) {
  return updates.map((item) => `
    <article class="timeline-item">
      <div class="timeline-meta">${item.date || ''}</div>
      <h3>${pickLangField(item.title, lang)}</h3>
      <p>${pickLangField(item.summary, lang)}</p>
      ${item.href ? `<a class="text-link" href="${item.href}"${item.href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${lang === 'zh' ? '\u7ee7\u7eed\u9605\u8bfb' : 'Read more'}</a>` : ''}
    </article>
  `).join('');
}

function publicationSort(a, b) {
  const aPublished = (a.status || '').toLowerCase() === 'published' ? 1 : 0;
  const bPublished = (b.status || '').toLowerCase() === 'published' ? 1 : 0;
  if (aPublished !== bPublished) return bPublished - aPublished;
  return (Number(b.impact_factor) || 0) - (Number(a.impact_factor) || 0);
}

function renderSelectedPublications(publications, lang) {
  return publications
    .slice()
    .sort(publicationSort)
    .slice(0, 3)
    .map((p) => {
      const title = lang === 'zh' ? (p.title_zh || p.title_en || p.title) : (p.title_en || p.title || p.title_zh);
      const venue = lang === 'zh' ? (p.publication_zh || p.publication_en || p.publication) : (p.publication_en || p.publication || p.publication_zh);
      const impactLabel = lang === 'zh' ? '\u5f71\u54cd\u56e0\u5b50' : 'Impact Factor';
      return `
        <article class="pub-card">
          <div>
            <span class="badge">${venue}</span>
            <span class="badge">${p.year || ''}</span>
          </div>
          <h3>${title}</h3>
          <p>${impactLabel}: ${p.impact_factor ?? 0}</p>
          ${p.doi_url ? `<a class="text-link" href="${p.doi_url}" target="_blank" rel="noopener">DOI</a>` : ''}
        </article>
      `;
    }).join('');
}

function render() {
  if (!profileData) return;
  const lang = getLang();
  const d = profileData;

  document.getElementById('name').textContent = d.name;
  document.getElementById('headline').textContent = pickLangField(d.headline, lang);
  document.getElementById('objective').textContent = pickLangField(d.objective, lang);
  document.getElementById('profile-photo').src = d.photo || 'assets/images/profile.jpg';
  document.getElementById('contact').innerHTML = [d.contact.phone, d.contact.email, d.contact.location]
    .filter(Boolean)
    .map((value) => `<span>${value}</span>`)
    .join('');

  const metrics = (d.summary && d.summary.metrics) || [];
  document.getElementById('metrics').innerHTML = renderMetrics(metrics, lang);

  const focus = (d.summary && d.summary.focus) || {};
  const focusList = lang === 'zh' ? (focus.zh || []) : (focus.en || []);
  document.getElementById('focus-tags').innerHTML = renderFocusTags(focusList);

  document.getElementById('research-themes').innerHTML = renderResearchThemes(d.research_themes || [], lang);
  document.getElementById('recent-updates').innerHTML = renderUpdates(d.recent_updates || [], lang);
  document.getElementById('selected-publications').innerHTML = renderSelectedPublications(publicationData, lang);
}

Promise.all([loadData(), loadPublications()]).then(([profile, publications]) => {
  profileData = profile;
  publicationData = publications;
  render();
  document.addEventListener('langchange', render);
}).catch((err) => {
  document.body.innerHTML = `<main class="layout"><section class="section-shell"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
