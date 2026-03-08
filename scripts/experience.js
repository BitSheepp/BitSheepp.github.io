async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

loadData().then((d) => {
  const el = document.getElementById('experience-list');
  el.innerHTML = d.experience.map((e) => `
    <article class="entry">
      <h3>${e.title}</h3>
      <div class="meta">${e.role} | ${e.period} | ${e.location}</div>
      <ul>${(e.highlights || []).map((h) => `<li>${h}</li>`).join('')}</ul>
    </article>
  `).join('');
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
