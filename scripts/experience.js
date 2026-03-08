async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

let profileData = null;

function render() {
  if (!profileData) return;
  const el = document.getElementById('experience-list');
  el.innerHTML = profileData.experience.map((e) => `
    <article class="entry">
      <h3>${e.title}</h3>
      <div class="meta">${e.role} | ${e.period} | ${e.location}</div>
      <ul>${(e.highlights || []).map((h) => `<li>${h}</li>`).join('')}</ul>
    </article>
  `).join('');
}

loadData().then((d) => {
  profileData = d;
  render();
  document.addEventListener('langchange', render);
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
