async function loadData() {
  const res = await fetch('data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

function renderContact(contact) {
  return [contact.phone, contact.email, contact.location].map((v) => `<span>${v}</span>`).join('');
}

function renderMetrics(metrics = []) {
  return metrics.map((m) => `<div class="metric"><b>${m.value}</b><span>${m.label}</span></div>`).join('');
}

loadData().then((d) => {
  document.getElementById('name').textContent = d.name;
  document.getElementById('headline').textContent = d.headline;
  document.getElementById('objective').textContent = d.objective;
  document.getElementById('profile-photo').src = d.photo || 'assets/images/profile.jpg';
  document.getElementById('contact').innerHTML = renderContact(d.contact);
  document.getElementById('metrics').innerHTML = renderMetrics((d.summary && d.summary.metrics) || []);
  document.getElementById('focus').innerHTML = ((d.summary && d.summary.focus) || []).map((x) => `<li>${x}</li>`).join('');
}).catch((err) => {
  document.body.innerHTML = `<main class="wrap"><section class="panel"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
});
