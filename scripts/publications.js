async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

function renderAction(label, url) {
  if (!url) return `<span class="action-link disabled">${label}: pending</span>`;
  return `<a class="action-link" href="${url}" target="_blank" rel="noopener">${label}</a>`;
}

loadData().then((d) => {
  const el = document.getElementById('publication-list');
  el.innerHTML = (d.publications || []).map((p) => `
    <article class="entry">
      <div>
        <span class="badge">${p.id}</span>
        <span class="badge">${p.status}</span>
      </div>
      <h3>${p.title}</h3>
      <div class="meta">${p.venue} | ${p.year}</div>
      <div>
        ${renderAction('DOI', p.doi)}
        ${renderAction('PDF Download', p.pdf_url)}
      </div>
    </article>
  `).join('');
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
