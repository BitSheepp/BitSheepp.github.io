const I18N = {
  en: {
    portfolio: 'Research Portfolio',
    home: 'Home',
    quick_summary: 'Quick Summary',
    explore_sections: 'Explore Sections',
    sec_experience: 'Academic Experience',
    sec_experience_desc: 'Projects, roles, timeline, and key outcomes.',
    sec_publications: 'Publications',
    sec_publications_desc: 'Sorted by status and impact factor, with DOI links.',
    sec_education_skills: 'Education & Skills',
    sec_education_skills_desc: 'Education history, awards, technical stack, and interests.',
    pub_hint: 'Published papers are shown first, then unpublished. Within each group, higher impact factor comes first.',
    education: 'Education',
    awards: 'Awards',
    skills: 'Skills',
    languages_interests: 'Languages & Interests',
    doi: 'DOI',
    pending: 'pending',
    if_label: 'Impact Factor',
    status_published: 'Published',
    status_unpublished: 'Unpublished',
    authors: 'Authors',
    et_al: 'et al.'
  },
  zh: {
    portfolio: '\u4e2a\u4eba\u5b66\u672f\u4e3b\u9875',
    home: '\u8fd4\u56de\u9996\u9875',
    quick_summary: '\u4e2a\u4eba\u6458\u8981',
    explore_sections: '\u677f\u5757\u5bfc\u822a',
    sec_experience: '\u5b66\u672f\u7ecf\u5386',
    sec_experience_desc: '\u67e5\u770b\u9879\u76ee\u7ecf\u5386\u3001\u89d2\u8272\u5206\u5de5\u3001\u65f6\u95f4\u7ebf\u4e0e\u5173\u952e\u7ed3\u679c\u3002',
    sec_publications: '\u8bba\u6587\u6210\u679c',
    sec_publications_desc: '\u6309\u53d1\u8868\u72b6\u6001\u548c\u5f71\u54cd\u56e0\u5b50\u6392\u5e8f\uff0c\u652f\u6301 DOI \u94fe\u63a5\u3002',
    sec_education_skills: '\u6559\u80b2\u4e0e\u6280\u80fd',
    sec_education_skills_desc: '\u67e5\u770b\u6559\u80b2\u80cc\u666f\u3001\u83b7\u5956\u3001\u6280\u672f\u6808\u4e0e\u5174\u8da3\u65b9\u5411\u3002',
    pub_hint: '\u5df2\u53d1\u8868\u8bba\u6587\u4f18\u5148\u5c55\u793a\uff0c\u672a\u53d1\u8868\u5728\u540e\uff1b\u540c\u7ec4\u5185\u6309\u5f71\u54cd\u56e0\u5b50\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f\u3002',
    education: '\u6559\u80b2\u80cc\u666f',
    awards: '\u8363\u8a89\u5956\u9879',
    skills: '\u6280\u80fd',
    languages_interests: '\u8bed\u8a00\u4e0e\u5174\u8da3',
    doi: 'DOI',
    pending: '\u5f85\u8865\u5145',
    if_label: '\u5f71\u54cd\u56e0\u5b50',
    status_published: '\u5df2\u53d1\u8868',
    status_unpublished: '\u672a\u53d1\u8868',
    authors: '\u4f5c\u8005',
    et_al: '\u7b49'
  }
};

function getLang() {
  return localStorage.getItem('site_lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('site_lang', lang);
  applyI18n();
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyI18n() {
  const lang = getLang();
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
});

applyI18n();
