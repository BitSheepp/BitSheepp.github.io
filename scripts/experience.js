async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

let profileData = null;

function render() {
  if (!profileData) return;
  const lang = getLang();
  const isZh = lang === 'zh';
  const el = document.getElementById('experience-list');
  el.innerHTML = profileData.experience.map((e) => {
    const title = isZh ? (e.title_zh || e.title) : e.title;
    const role = isZh ? (e.role_zh || e.role) : e.role;
    const location = isZh ? (e.location_zh || e.location) : e.location;
    const highlights = isZh ? (e.highlights_zh || e.highlights || []) : (e.highlights || []);
    return `
      <article class="entry">
        <h3>${title}</h3>
        <div class="meta">${role} | ${e.period} | ${location}</div>
        <ul>${highlights.map((h) => `<li>${h}</li>`).join('')}</ul>
      </article>
    `;
  }).join('');
}

loadData().then((d) => {
  profileData = d;
  render();
  document.addEventListener('langchange', render);
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
