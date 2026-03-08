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

function render() {
  const isZh = getLang() === 'zh';
  const el = document.getElementById('publication-list');
  el.innerHTML = pubs.map((p) => {
    const title = isZh ? (p.title_zh || p.title_en || p.title) : (p.title_en || p.title || p.title_zh);
    const venue = isZh ? (p.publication_zh || p.publication_en || p.publication) : (p.publication_en || p.publication || p.publication_zh);
    return `
      <article class="entry">
        <div>
          <span class="badge">${p.id || ''}</span>
          <span class="badge">${statusLabel(p.status)}</span>
          <span class="badge">${t('if_label')}: ${p.impact_factor ?? 0}</span>
        </div>
        <h3>${title}</h3>
        <div class="meta">${venue} | ${p.year || ''}</div>
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
