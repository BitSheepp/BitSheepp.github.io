async function loadData() {
  const res = await fetch('../data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

let profileData = null;

function pickLangField(field, lang) {
  if (field && typeof field === 'object' && field.en && field.zh) {
    return lang === 'zh' ? field.zh : field.en;
  }
  return field || '';
}

function render() {
  if (!profileData) return;
  const lang = getLang();
  const isZh = lang === 'zh';
  const d = profileData;

  document.getElementById('education-list').innerHTML = (d.education || []).map((e) => {
    const notes = e.notes && e.notes[lang] ? e.notes[lang] : (e.notes || []);
    return `
      <article class="entry">
        <h3>${e.school}</h3>
        <div class="meta">${pickLangField(e.degree, lang)} | ${e.period}</div>
        <ul>${(notes || []).map((n) => `<li>${n}</li>`).join('')}</ul>
      </article>
    `;
  }).join('');

  const awards = isZh ? (d.awards_zh || d.awards || []) : (d.awards || []);
  const langs = isZh ? (d.languages_zh || d.languages || []) : (d.languages || []);
  const interests = isZh ? (d.interests_zh || d.interests || []) : (d.interests || []);

  document.getElementById('awards-list').innerHTML = awards.map((a) => `<li>${a}</li>`).join('');
  document.getElementById('languages-list').innerHTML = langs.map((l) => `<li>${l}</li>`).join('');
  document.getElementById('interests-list').innerHTML = interests.map((i) => `<li>${i}</li>`).join('');

  document.getElementById('skills-list').innerHTML = Object.entries(d.skills || {}).map(([k, arr]) => `
    <article class="entry">
      <h3>${k}</h3>
      <div>${arr.map((x) => `<span class="skill-chip">${x}</span>`).join('')}</div>
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
