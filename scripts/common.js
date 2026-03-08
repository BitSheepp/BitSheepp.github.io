const I18N = {
  en: {
    portfolio: 'Research Portfolio',
    quick_summary: 'Quick Summary',
    explore_sections: 'Explore Sections',
    sec_experience: 'Academic Experience',
    sec_experience_desc: 'Projects, roles, timeline, and key outcomes.',
    sec_publications: 'Publications',
    sec_publications_desc: 'Sorted by status and impact factor, with DOI/PDF links.',
    sec_education_skills: 'Education & Skills',
    sec_education_skills_desc: 'Education history, awards, technical stack, and interests.',
    home: 'Home',
    pub_hint: 'Published papers are shown first, then unpublished. Within each group, higher impact factor comes first.',
    education: 'Education',
    awards: 'Awards',
    skills: 'Skills',
    languages_interests: 'Languages & Interests',
    doi: 'DOI',
    pdf_download: 'PDF Download',
    pending: 'pending',
    if_label: 'Impact Factor'
  },
  zh: {
    portfolio: '个人学术主页',
    quick_summary: '个人摘要',
    explore_sections: '板块导航',
    sec_experience: '学术经历',
    sec_experience_desc: '查看项目经历、角色分工、时间线与关键结果。',
    sec_publications: '论文成果',
    sec_publications_desc: '按发表状态和影响因子排序，支持 DOI/PDF 链接。',
    sec_education_skills: '教育与技能',
    sec_education_skills_desc: '查看教育背景、获奖、技术栈与兴趣方向。',
    home: '返回首页',
    pub_hint: '已发表论文优先展示，未发表在后；同组内按影响因子从高到低排序。',
    education: '教育背景',
    awards: '荣誉奖项',
    skills: '技能',
    languages_interests: '语言与兴趣',
    doi: 'DOI',
    pdf_download: 'PDF 下载',
    pending: '待补充',
    if_label: '影响因子'
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
