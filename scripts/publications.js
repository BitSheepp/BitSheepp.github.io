async function loadPublications() {
  const res = await fetch('../data/publications.json');
  if (!res.ok) throw new Error('Failed to load publications data');
  return res.json();
}

let pubs = [];

function renderAction(label, url) {
  if (!url) return `<span class="action-link disabled">${label}: ${t('pending')}</span>`;
  return `<a class="action-link" href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

function statusLabel(status) {
  if ((status || '').toLowerCase() === 'published') return t('status_published');
  return t('status_unpublished');
}

function authorToken(a) {
  const raw = (a || '').trim();
  return raw;
}

function emphasizeName(name) {
  const n = name.toLowerCase();
  if (n === 'he, chunyang' || n === 'chunyang he' || n.includes('he, chunyang')) {
    return `<strong>${name}</strong>`;
  }
  return name;
}

function renderAuthors(authorsRaw) {
  const parts = (authorsRaw || '')
    .split(';')
    .map((x) => authorToken(x))
    .filter(Boolean);

  const limited = parts.slice(0, 10).map(emphasizeName);
  const suffix = parts.length > 10 ? `, ${t('et_al')}` : '';
  return `${t('authors')}: ${limited.join(', ')}${suffix}`;
}

function render() {
  const isZh = getLang() === 'zh';
  const el = document.getElementById('publication-list');
  el.innerHTML = pubs.map((p) => {
    const title = isZh ? (p.title_zh || p.title_en || p.title) : (p.title_en || p.title || p.title_zh);
    const venue = isZh ? (p.publication_zh || p.publication_en || p.publication) : (p.publication_en || p.publication || p.publication_zh);
    return `
      <article class="entry">
        <div>
          <span class="badge">${statusLabel(p.status)}</span>
          <span class="badge">${t('if_label')}: ${p.impact_factor ?? 0}</span>
        </div>
        <h3>${title}</h3>
        <div class="meta">${venue} | ${p.year || ''}</div>
        <div class="meta">${renderAuthors(p.authors)}</div>
        <div>${renderAction(t('doi'), p.doi_url || '')}</div>
      </article>
    `;
  }).join('');
}

loadPublications().then((d) => {
  pubs = d;
  render();
  document.addEventListener('langchange', render);
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
