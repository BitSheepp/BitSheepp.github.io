async function loadData() {
  const res = await fetch('data/profile.json');
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
  const d = profileData;

  document.getElementById('name').textContent = d.name;
  document.getElementById('headline').textContent = pickLangField(d.headline, lang);
  document.getElementById('objective').textContent = pickLangField(d.objective, lang);
  document.getElementById('profile-photo').src = d.photo || 'assets/images/profile.jpg';
  document.getElementById('contact').innerHTML = [d.contact.phone, d.contact.email, d.contact.location].map((v) => `<span>${v}</span>`).join('');

  const metrics = (d.summary && d.summary.metrics) || [];
  document.getElementById('metrics').innerHTML = metrics.map((m) => `<div class="metric"><b>${m.value}</b><span>${lang === 'zh' ? m.label_zh : m.label_en}</span></div>`).join('');

  const focus = (d.summary && d.summary.focus) || {};
  const focusList = lang === 'zh' ? (focus.zh || []) : (focus.en || []);
  document.getElementById('focus').innerHTML = focusList.map((x) => `<li>${x}</li>`).join('');
}

loadData().then((d) => {
  profileData = d;
  render();
  document.addEventListener('langchange', render);
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
