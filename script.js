(function () {
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = savedTheme || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);

  const lang = localStorage.getItem('lang') || 'en';
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
})();

const I18N = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_badge: "Hello, I'm",
    hero_name: 'Aser Mohamed Nassar',
    hero_desc: "A first-year Computer Science student at the Egyptian Chinese University. I love building clean, animated web interfaces and solving problems with code.",
    btn_projects: 'View My Work',
    btn_contact: 'Get In Touch',
    btn_view_resume: 'View Resume',
    btn_download_resume: 'Download Resume',
    stat_projects: 'Projects',
    stat_skills: 'Core Skills',
    stat_tech: 'Technologies',
    about_kicker: 'Who I am',
    about_title: 'About Me',
    about_p1: "I'm Aser Mohamed Nassar, a first-year Computer Science student at the Egyptian Chinese University in Cairo. I'm passionate about web development and software engineering — I love turning ideas into interactive, animated interfaces using HTML, CSS and JavaScript.",
    about_p2: "Alongside the web, I build a strong foundation in programming logic with C++, and I keep practicing problem solving and writing clean, readable code.",
    edu_title: 'Education',
    edu_school: 'Egyptian Chinese University',
    edu_degree: 'Computer Science Student — First Year',
    skills_kicker: 'What I know',
    skills_title: 'My Skills',
    skills_sub: "The technologies and fundamentals I've learned and work with.",
    projects_kicker: 'My work',
    projects_title: 'Projects',
    projects_sub: "A selection of projects I've designed and built.",
    project_live: 'Live Demo',
    project_code: 'Code',
    contact_kicker: "Let's talk",
    contact_title: 'Get In Touch',
    contact_sub: 'Got an idea or an opportunity? Feel free to reach out anytime.',
    contact_email: 'Email',
    contact_phone: 'Phone',
    contact_github: 'GitHub',
    contact_linkedin: 'LinkedIn',
    form_title: 'Send Me a Message',
    form_sub: "I'll get back to you as soon as possible.",
    form_name: 'Your Name',
    form_email: 'Your Email',
    form_message: 'Message',
    form_send: 'Send Message',
    form_name_ph: 'Mohamed Nassar',
    form_email_ph: 'Mohamed@example.com',
    form_message_ph: "Hello Aser, I'd like to...",
    form_sending: 'Sending...',
    form_ok: '✅ Message sent successfully! I will get back to you soon.',
    form_err: '❌ Something went wrong. Please try again or email me at aserm898@gmail.com',
    footer: 'Designed & built with'
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'عني',
    nav_skills: 'مهاراتي',
    nav_projects: 'مشاريعي',
    nav_contact: 'تواصل',
    hero_badge: 'أهلاً، أنا',
    hero_name: 'اسر محمد نصار',
    hero_desc: 'طالب في سنة اولى بكلية الحاسبات والمعلومات في الجامعة المصرية الصينية. بحب أبني واجهات ويب نظيفة ومتحركة، وأحل المشكلات بالكود.',
    btn_projects: 'شوف شغلي',
    btn_contact: 'تواصل معي',
    btn_view_resume: 'عرض السيرة الذاتية',
    btn_download_resume: 'تحميل السيرة الذاتية',
    stat_projects: 'مشروع',
    stat_skills: 'مهارة أساسية',
    stat_tech: 'تقنيات',
    about_kicker: 'مين أنا',
    about_title: 'عني',
    about_p1: 'أنا اسر محمد نصار، طالب في سنة أولى بكلية الحاسبات والمعلومات في الجامعة المصرية الصينية. مهتم بتطوير الويب وهندسة البرمجيات، وبحب أحوّل الأفكار لواجهات تفاعلية متحركة باستخدام HTML و CSS و JavaScript.',
    about_p2: 'بجانب الويب، ببني أساس قوي في منطق البرمجة باستخدام C++، وبتدرب على حل المشكلات وكتابة كود منظم وسهل القراءة.',
    edu_title: 'التعليم',
    edu_school: 'الجامعة المصرية الصينية',
    edu_degree: 'طالب حاسبات ومعلومات — سنة أولى',
    skills_kicker: 'اللي بعرفه',
    skills_title: 'مهاراتي',
    skills_sub: 'التقنيات والأساسيات اللي اتعلمتها وبشتغل بيها.',
    projects_kicker: 'شغلي',
    projects_title: 'مشاريعي',
    projects_sub: 'مجموعة من مشاريع الويب اللي صممتها وبنيتها.',
    project_live: 'تجربة مباشرة',
    project_code: 'الكود',
    contact_kicker: 'خلينا نتكلم',
    contact_title: 'تواصل معي',
    contact_sub: 'عندك فكرة أو فرصة؟ ابعتلي في أي وقت.',
    contact_email: 'الإيميل',
    contact_phone: 'الموبايل',
    contact_github: 'جيت هاب',
    contact_linkedin: 'لينكد إن',
    form_title: 'ابعتلي رسالة',
    form_sub: 'هرد عليك في أقرب وقت.',
    form_name: 'اسمك',
    form_email: 'إيميلك',
    form_message: 'الرسالة',
    form_send: 'ابعت الرسالة',
    form_name_ph: 'محمد نصار',
    form_email_ph: 'Mohamed@example.com',
    form_message_ph: 'أهلاً اسر، عايز أقولك...',
    form_sending: 'جاري الإرسال...',
    form_ok: '✅ تم إرسال رسالتك بنجاح! هرد عليك في أقرب وقت.',
    form_err: '❌ حصلت مشكلة، جرب تاني أو ابعتلي على aserm898@gmail.com',
    footer: 'تم التصميم والتطوير بـ'
  }
};

const ROLES = {
  en: ['Computer Science Student', 'Front-End Developer', 'C++ Programmer', 'Problem Solver'],
  ar: ['طالب حاسبات ومعلومات', 'مطوّر واجهات أمامية', 'مبرمج C++', 'محلّل مشكلات']
};

const SKILLS = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 95,
    name: { en: 'HTML', ar: 'HTML' }
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 70,
    name: { en: 'CSS', ar: 'CSS' }
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    level: 85,
    name: { en: 'C++ Fundamentals', ar: 'أساسيات C++' }
  },
  {
    icon: '🧠',
    level: 80,
    name: { en: 'Programming Fundamentals', ar: 'أساسيات البرمجة' }
  },
  {
    icon: '🧩',
    level: 75,
    name: { en: 'Problem Solving', ar: 'حل المشكلات' }
  }
];

const PROJECTS = [
  {
    emoji: '🚗',
    image: 'imgs/Screenshot 2026-09-15 163554.png',
    title: { en: 'Na2ili Khrooga', ar: 'نقيلي خروجة' },
    desc: {
      en: 'A web for planning and organizing outings with friends, with a smooth interactive UI.',
      ar: 'تطبيق ويب لتنظيم الخروجات مع الأصدقاء بواجهة تفاعلية سلسة.'
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://na2ili-khrooga.aserm898.workers.dev/',
    code: 'https://github.com/asermohameddd/na2ili-khrooga.git'
  },
  {
    emoji: '🎯',
    image: 'imgs/Screenshot 2026-09-15 163616.png',
    title: { en: 'Asemha Aalena', ar: 'قسمها علينا' },
    desc: {
      en: 'A responsive bill-splitting web that users could divide equally or by custom amounts.',
      ar: 'تطبيق ويب لتقسيم فلوس الخروجة مع الأصدقاء بالتساوي أو حسب طلب كل شخص.'
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://asemha-aalena.aserm898.workers.dev/',
    code: 'https://github.com/asermohameddd/asemha-aalena.git'
  },
  {
    emoji: '🛒',
    image: 'imgs/Screenshot 2026-09-15 163645.png',
    title: { en: 'Tech Store', ar: 'متجر أجهزة إلكترونية' },
    desc: {
      en: 'A modern electronics storefront with product cards, cart and a fully responsive layout.',
      ar: 'واجهة متجر إلكترونيات حديثة بكروت المنتجات وسلة الشراء وتصميم متجاوب.'
    },
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://asermohameddd.github.io/techstore/',
    code: 'https://github.com/asermohameddd/techstore.git'
  },
  {
    emoji: '📚',
    image: 'imgs/Screenshot 2026-09-15 163707.png',
    title: { en: 'Study Platform', ar: 'منصة المذاكرة' },
    desc: {
      en: 'An educational platform that helps students organize their study materials and daily tasks.',
      ar: 'منصة تعليمية تساعد الطلاب على تنظيم موادهم ومهامهم الدراسية.'
    },
    tags: ['HTML', 'CSS'],
    url: 'https://asermohameddd.github.io/Study-platform/',
    code: 'https://github.com/asermohameddd/Study-platform.git'
  },
  {
    emoji: '🏥',
    image: 'imgs/Screenshot 2026-09-15 163728.png',
    title: { en: 'Medicare — Hospital Simulation', ar: 'ميديكير — محاكاة مستشفى' },
    desc: {
      en: 'A hospital management simulation website with a clean, well-organized interface.',
      ar: 'موقع يحاكي إدارة المستشفى بواجهة منظمة وبسيطة.'
    },
    tags: ['HTML', 'CSS'],
    url: 'https://asermohameddd.github.io/Hospital-simulation-website-medicare-/',
    code: 'https://github.com/asermohameddd/Hospital-simulation-website-medicare-.git'
  },
  {
    emoji: '📱',
    image: 'imgs/Screenshot 2026-09-15 163748.png',
    title: { en: 'Smart Devices Shop', ar: 'متجر الأجهزة الذكية' },
    desc: {
      en: 'An e-commerce front-end for smart devices, built with a modern responsive design.',
      ar: 'متجر إلكتروني للأجهزة الذكية بتصميم عصري متجاوب.'
    },
    tags: ['HTML', 'CSS'],
    url: 'https://asermohameddd.github.io/E-commerce-smart-devices-shop/',
    code: 'https://github.com/asermohameddd/E-commerce-smart-devices-shop.git'
  },
  {
    emoji: '🍕',
    image: 'imgs/Screenshot 2026-09-15 172453.png',
    title: { en: 'Primos Pizza', ar: 'بريموز بيتزا' },
    desc: {
      en: 'A modern pizza restaurant website with an appetizing animated menu and a fully responsive layout.',
      ar: 'موقع لمطعم بيتزا عصري بقائمة طعام متحركة وتصميم متجاوب بالكامل.'
    },
    tags: ['HTML', 'CSS'],
    url: 'https://asermohameddd.github.io/primos-pizza/',
    code: 'https://github.com/asermohameddd/primos-pizza.git'
  }
];

const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'dark'
};

const t = (key) => (I18N[state.lang] && I18N[state.lang][key]) || key;

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  state.theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
});

const langBtn = document.getElementById('langBtn');
const langLabel = document.getElementById('langLabel');

langBtn.addEventListener('click', () => {
  state.lang = state.lang === 'en' ? 'ar' : 'en';
  localStorage.setItem('lang', state.lang);
  applyLanguage();
});

function applyI18nText() {
  const dict = I18N[state.lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  langLabel.textContent = state.lang === 'en' ? 'ع' : 'EN';

  applyI18nText();
  renderSkills();
  renderProjects();
  restartTyping();
}

const typedEl = document.getElementById('typed');
let typeTimer = null;
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const list = ROLES[state.lang];
  const word = list[roleIndex % list.length];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = word.slice(0, charIndex);

    if (charIndex === word.length) {
      deleting = true;
      typeTimer = setTimeout(typeLoop, 1600);
      return;
    }
    typeTimer = setTimeout(typeLoop, 75);
  } else {
    charIndex--;
    typedEl.textContent = word.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      roleIndex++;
      typeTimer = setTimeout(typeLoop, 350);
      return;
    }
    typeTimer = setTimeout(typeLoop, 38);
  }
}

function restartTyping() {
  clearTimeout(typeTimer);
  roleIndex = 0;
  charIndex = 0;
  deleting = false;
  typedEl.textContent = '';
  typeTimer = setTimeout(typeLoop, 400);
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');

  grid.innerHTML = SKILLS.map((skill, i) => {
    const iconMarkup = skill.icon.startsWith('http')
      ? `<img src="${skill.icon}" alt="${skill.name.en}" loading="lazy">`
      : skill.icon;

    return `
      <article class="skill-card reveal" style="--d:${i * 0.08}s">
        <div class="skill-top">
          <span class="skill-icon">${iconMarkup}</span>
          <span class="skill-name">${skill.name[state.lang]}</span>
          <span class="skill-pct">${skill.level}%</span>
        </div>
        <div class="bar">
          <div class="bar-fill" style="--w:${skill.level}%"></div>
        </div>
      </article>
    `;
  }).join('');

  observeReveals();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');

  grid.innerHTML = PROJECTS.map((project, i) => `
    <article class="project-card reveal" style="--d:${i * 0.08}s">
      <div class="project-cover">
        <span class="project-emoji">${project.emoji}</span>
        ${project.image ? `<img class="project-img" src="${project.image}" alt="${project.title[state.lang]} preview" loading="lazy">` : ''}
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title[state.lang]}</h3>
        <p class="project-desc">${project.desc[state.lang]}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a class="btn btn-primary btn-small" href="${project.url}" target="_blank" rel="noopener">${t('project_live')}</a>
          <a class="btn btn-ghost btn-small" href="${project.code}" target="_blank" rel="noopener">${t('project_code')}</a>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });

  observeReveals();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');
const progressBar = document.getElementById('progress');
const toTop = document.getElementById('toTop');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

function onScroll() {
  const scrollY = window.scrollY;

  nav.classList.toggle('scrolled', scrollY > 40);

  const height = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (height > 0 ? (scrollY / height) * 100 : 0) + '%';

  toTop.classList.toggle('show', scrollY > 500);

  let current = 'home';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 140) current = sec.id;
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const photoImg = document.getElementById('photoImg');
const photoFallback = document.getElementById('photoFallback');

function showPhotoFallback() {
  photoImg.style.display = 'none';
  photoFallback.style.display = 'grid';
}

photoImg.addEventListener('error', showPhotoFallback);
if (photoImg.complete && photoImg.naturalWidth === 0) showPhotoFallback();

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Contact form (Web3Forms) ---------- */
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');

    btn.disabled = true;
    btn.textContent = t('form_sending');
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });

      const data = await res.json();

      if (data.success) {
        contactForm.reset();
        formStatus.textContent = t('form_ok');
        formStatus.classList.add('ok');
      } else {
        formStatus.textContent = t('form_err');
        formStatus.classList.add('err');
      }
    } catch (err) {
      formStatus.textContent = t('form_err');
      formStatus.classList.add('err');
    } finally {
      btn.disabled = false;
      btn.textContent = t('form_send');
    }
  });
}

applyLanguage();
observeReveals();
onScroll();
