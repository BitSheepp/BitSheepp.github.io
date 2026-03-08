async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

loadData().then((d) => {
  document.getElementById('education-list').innerHTML = (d.education || []).map((e) => `
    <article class="entry">
      <h3>${e.school}</h3>
      <div class="meta">${e.degree} | ${e.period}</div>
      <ul>${(e.notes || []).map((n) => `<li>${n}</li>`).join('')}</ul>
    </article>
  `).join('');

  document.getElementById('awards-list').innerHTML = (d.awards || []).map((a) => `<li>${a}</li>`).join('');
  document.getElementById('languages-list').innerHTML = (d.languages || []).map((l) => `<li>${l}</li>`).join('');
  document.getElementById('interests-list').innerHTML = (d.interests || []).map((i) => `<li>${i}</li>`).join('');

  document.getElementById('skills-list').innerHTML = Object.entries(d.skills || {}).map(([k, arr]) => `
    <article class="entry">
      <h3>${k}</h3>
      <div>${arr.map((x) => `<span class="skill-chip">${x}</span>`).join('')}</div>
    </article>
  `).join('');
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
