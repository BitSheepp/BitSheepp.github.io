async function loadData() {
  const res = await fetch('data/profile.json');
  if (!res.ok) throw new Error('Failed to load profile data');
  return res.json();
}

function li(items = []) {
  return items.map((x) => `<li>${x}</li>`).join('');
}

function renderSkills(skills = {}) {
  return Object.entries(skills)
    .map(([k, arr]) => `
      <div class="skill-group">
        <b>${k}</b>
        <div>${arr.map((s) => `<span class="skill-chip">${s}</span>`).join('')}</div>
      </div>
    `)
    .join('');
}

function renderEducation(list = []) {
  return list
    .map(
      (e) => `
      <div class="item">
        <h3>${e.school}</h3>
        <div class="meta">${e.degree} | ${e.period}</div>
        <ul>${li(e.notes || [])}</ul>
      </div>`
    )
    .join('');
}

function renderExperience(list = []) {
  return list
    .map(
      (e) => `
      <div class="item">
        <h3>${e.title}</h3>
        <div class="meta">${e.role} | ${e.period} | ${e.location}</div>
        <ul>${li(e.highlights || [])}</ul>
      </div>`
    )
    .join('');
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  items.forEach((el, idx) => {
    el.style.transitionDelay = `${idx * 60}ms`;
    io.observe(el);
  });
}

loadData()
  .then((d) => {
    document.getElementById('name').textContent = d.name;
    document.getElementById('headline').textContent = d.headline;
    document.getElementById('contact').innerHTML = `
      <span>${d.contact.phone}</span>
      <span>${d.contact.email}</span>
      <span>${d.contact.location}</span>
    `;
    document.getElementById('objective').textContent = d.objective;
    document.getElementById('experience').innerHTML = renderExperience(d.experience);
    document.getElementById('education').innerHTML = renderEducation(d.education);
    document.getElementById('awards').innerHTML = li(d.awards);
    document.getElementById('publications').innerHTML = li(d.publications);
    document.getElementById('skills').innerHTML = renderSkills(d.skills);
    document.getElementById('languages').innerHTML = li(d.languages);
    document.getElementById('interests').innerHTML = li(d.interests);
    setupReveal();
  })
  .catch((err) => {
    document.body.innerHTML = `<main class="container"><section class="card"><h2>Load Error</h2><p>${err.message}</p></section></main>`;
  });
