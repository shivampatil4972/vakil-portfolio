/* ============================================================
   VAKIL PORTFOLIO — MASTER SCRIPT
   Premium Apple-Inspired Lawyer Portfolio
   ============================================================ */

'use strict';

/* ── Translations ─────────────────────────────────────────── */
const translations = {
  en: {
    /* Nav */
    navHome:'Home', navAbout:'About', navPractice:'Practice Areas',
    navExperience:'Experience', navCases:'Success Stories',
    navTestimonials:'Testimonials', navBlog:'Blog', navContact:'Contact',
    navCTA:'Book Consultation',
    /* Hero */
    heroLabel:'Available for New Cases',
    heroName:'Adv. Ashwanith Chelekar',
    heroDesig:'Senior Advocate | Bombay High Court',
    heroTagline:'Justice Delivered with Integrity & Expertise',
    heroDesc:'With 15+ years of distinguished legal practice, I provide strategic, compassionate, and result-oriented legal representation across civil, criminal, and corporate matters.',
    heroCTA1:'Book Consultation', heroCTA2:'Download Profile',
    /* Stats */
    stat1:'Years Experience', stat2:'Cases Handled', stat3:'Clients Served', stat4:'Client Satisfaction',
    /* Section labels & titles */
    lblAbout:'About Me', titleAbout:'Trusted Advocate,',
    lblPractice:'Practice Areas', titlePractice:'Legal Services',
    lblWhy:'Why Choose Me', titleWhy:'What Sets Me Apart',
    lblExperience:'Career Journey', titleExperience:'Years of Excellence',
    lblCases:'Success Stories', titleCases:'Cases That Defined Justice',
    lblTestimonials:'Testimonials', titleTestimonials:'What Clients Say',
    lblAwards:'Awards', titleAwards:'Honours & Recognition',
    lblGallery:'Gallery', titleGallery:'Legal Journey in Pictures',
    lblProcess:'How It Works', titleProcess:'The Consultation Process',
    lblBlog:'Insights', titleBlog:'Blog & Articles',
    lblFAQ:'FAQs', titleFAQ:'Common Questions',
    lblBooking:'Book Appointment', titleBooking:'Schedule a Consultation',
    lblContact:'Contact', titleContact:'Get in Touch',
    /* About */
    aboutP1:'With over 15 years of dedicated practice at the Bombay High Court, I have built a reputation for delivering justice with integrity, diligence, and uncompromising ethics.',
    aboutP2:'My practice spans criminal defence, civil litigation, family law, corporate advisory, and real estate matters — always keeping the client\'s best interest at the forefront.',
    /* Process steps */
    proc1:'Book Appointment', proc2:'Case Discussion', proc3:'Legal Strategy', proc4:'Active Representation', proc5:'Resolution',
    /* FAQ */
    faq1q:'What are the consultation fees?',
    faq1a:'The initial consultation fee is ₹1,500 for a 30-minute session. Subsequent meetings and case fees are discussed transparently upfront.',
    faq2q:'How long does a case typically take?',
    faq2a:'Duration varies widely by case type. A straightforward civil matter may resolve in 6–18 months, while complex cases at High Court level may take 2–5 years.',
    faq3q:'Do you handle cases outside Mumbai?',
    faq3a:'Yes. While our primary practice is the Bombay High Court and courts in Maharashtra, we handle matters across India and can collaborate with local counsel in other states.',
    faq4q:'Is my information kept confidential?',
    faq4a:'Absolutely. Attorney-client privilege is sacred. All information you share is strictly confidential and protected by professional ethics and Indian law.',
    faq5q:'Can I get a free initial assessment?',
    faq5a:'We offer a complimentary 10-minute phone assessment to determine if your matter falls within our practice areas before scheduling a full paid consultation.',
    /* Contact */
    ctaCall:'Call Now', ctaWhatsApp:'WhatsApp', ctaEmail:'Email Us',
    /* Booking */
    bookSubtitle:'Schedule your consultation today. Fill in the form and we will confirm within 2 hours.',
    bookSubmit:'Book My Consultation',
  },
  mr: {
    /* Nav */
    navHome:'मुख्यपृष्ठ', navAbout:'माझ्याबद्दल', navPractice:'सेवा क्षेत्रे',
    navExperience:'अनुभव', navCases:'यशस्वी प्रकरणे',
    navTestimonials:'प्रशंसापत्रे', navBlog:'ब्लॉग', navContact:'संपर्क',
    navCTA:'सल्लामसलत बुक करा',
    /* Hero */
    heroLabel:'नवीन प्रकरणांसाठी उपलब्ध',
    heroName:'अॅड. राजेश शर्मा',
    heroDesig:'वरिष्ठ अधिवक्ता | मुंबई उच्च न्यायालय',
    heroTagline:'प्रामाणिकता व कौशल्याने न्याय',
    heroDesc:'१५+ वर्षांच्या कायदेशीर सरावाने मी नागरी, फौजदारी व कॉर्पोरेट प्रकरणांमध्ये धोरणात्मक आणि परिणाम-केंद्रित कायदेशीर सेवा देतो.',
    heroCTA1:'सल्लामसलत बुक करा', heroCTA2:'प्रोफाइल डाउनलोड करा',
    /* Stats */
    stat1:'वर्षांचा अनुभव', stat2:'प्रकरणे हाताळली', stat3:'सेवा दिलेले ग्राहक', stat4:'ग्राहक समाधान',
    /* Section labels & titles */
    lblAbout:'माझ्याबद्दल', titleAbout:'विश्वासू अधिवक्ता,',
    lblPractice:'सेवा क्षेत्रे', titlePractice:'कायदेशीर सेवा',
    lblWhy:'माझी निवड का?', titleWhy:'माझी विशेषता',
    lblExperience:'कारकीर्द', titleExperience:'उत्कृष्टतेची वर्षे',
    lblCases:'यशस्वी प्रकरणे', titleCases:'न्याय दिलेली प्रकरणे',
    lblTestimonials:'प्रशंसापत्रे', titleTestimonials:'ग्राहक काय म्हणतात',
    lblAwards:'पुरस्कार', titleAwards:'सन्मान व पुरस्कार',
    lblGallery:'छायाचित्रे', titleGallery:'कायदेशीर प्रवासाची चित्रे',
    lblProcess:'कसे काम करतो', titleProcess:'सल्लामसलत प्रक्रिया',
    lblBlog:'माहिती', titleBlog:'ब्लॉग व लेख',
    lblFAQ:'वारंवार विचारले जाणारे प्रश्न', titleFAQ:'सामान्य प्रश्न',
    lblBooking:'भेट बुक करा', titleBooking:'सल्लामसलत शेड्युल करा',
    lblContact:'संपर्क', titleContact:'संपर्क साधा',
    /* About */
    aboutP1:'मुंबई उच्च न्यायालयात १५+ वर्षांच्या समर्पित सरावाने मी प्रामाणिकता, परिश्रम आणि नैतिकतेने न्याय देण्याची प्रतिष्ठा मिळवली आहे.',
    aboutP2:'माझा सराव फौजदारी बचाव, नागरी खटले, कौटुंबिक कायदा, कॉर्पोरेट सल्ला आणि स्थावर मालमत्ता प्रकरणांमध्ये आहे — नेहमी ग्राहकाचे हित सर्वोपरि ठेवून.',
    /* Process steps */
    proc1:'भेट बुक करा', proc2:'प्रकरण चर्चा', proc3:'कायदेशीर धोरण', proc4:'सक्रिय प्रतिनिधित्व', proc5:'निराकरण',
    /* FAQ */
    faq1q:'सल्लामसलत फी किती आहे?',
    faq1a:'३०-मिनिटांच्या प्रारंभिक सल्लामसलतीसाठी ₹१,५०० फी आहे. पुढील बैठका आणि प्रकरण फी पारदर्शकपणे आधीच सांगितली जाते.',
    faq2q:'प्रकरण सोडवण्यास किती वेळ लागतो?',
    faq2a:'कालावधी प्रकरणाच्या प्रकारानुसार बदलतो. सरळ नागरी प्रकरण ६-१८ महिन्यांत, तर उच्च न्यायालयातील जटिल प्रकरणे २-५ वर्षे लागू शकतात.',
    faq3q:'मुंबईबाहेरची प्रकरणे स्वीकारता का?',
    faq3a:'होय. मुंबई उच्च न्यायालय हे प्राथमिक न्यायालय असले तरी आम्ही संपूर्ण महाराष्ट्र व भारतातील प्रकरणे स्वीकारतो.',
    faq4q:'माझी माहिती गोपनीय राहते का?',
    faq4a:'अवश्य. वकील-अशील विशेषाधिकार पवित्र आहे. तुम्ही दिलेली सर्व माहिती कठोरपणे गोपनीय ठेवली जाते.',
    faq5q:'मोफत प्रारंभिक मूल्यांकन मिळते का?',
    faq5a:'पूर्ण सशुल्क सल्लामसलत बुक करण्यापूर्वी आम्ही १०-मिनिटांचे विनामूल्य फोन मूल्यांकन देतो.',
    /* Contact */
    ctaCall:'आता कॉल करा', ctaWhatsApp:'व्हाट्सअॅप', ctaEmail:'ईमेल करा',
    /* Booking */
    bookSubtitle:'आज आपली सल्लामसलत शेड्युल करा. फॉर्म भरा आणि आम्ही २ तासांत पुष्टी करू.',
    bookSubmit:'माझी सल्लामसलत बुक करा',
  },
  hi: {
    /* Nav */
    navHome:'मुख्य पृष्ठ', navAbout:'मेरे बारे में', navPractice:'सेवा क्षेत्र',
    navExperience:'अनुभव', navCases:'सफलता की कहानियाँ',
    navTestimonials:'प्रशंसापत्र', navBlog:'ब्लॉग', navContact:'संपर्क',
    navCTA:'परामर्श बुक करें',
    /* Hero */
    heroLabel:'नए मामलों के लिए उपलब्ध',
    heroName:'अधिवक्ता अश्वनीथ चेलेकर',
    heroDesig:'वरिष्ठ अधिवक्ता | बॉम्बे हाईकोर्ट',
    heroTagline:'सत्यनिष्ठा और विशेषज्ञता के साथ न्याय',
    heroDesc:'१५+ वर्षों के कानूनी अनुभव के साथ, मैं नागरिक, आपराधिक और कॉर्पोरेट मामलों में रणनीतिक और परिणाम-उन्मुख कानूनी प्रतिनिधित्व प्रदान करता हूँ।',
    heroCTA1:'परामर्श बुक करें', heroCTA2:'प्रोफाइल डाउनलोड करें',
    /* Stats */
    stat1:'वर्षों का अनुभव', stat2:'मामले सुलझाए', stat3:'संतुष्ट ग्राहक', stat4:'ग्राहक संतुष्टि',
    /* Section labels & titles */
    lblAbout:'मेरे बारे में', titleAbout:'विश्वसनीय अधिवक्ता,',
    lblPractice:'सेवा क्षेत्र', titlePractice:'कानूनी सेवाएँ',
    lblWhy:'मुझे क्यों चुनें?', titleWhy:'मेरी विशेषज्ञता',
    lblExperience:'करियर का सफर', titleExperience:'उत्कृष्टता के वर्ष',
    lblCases:'सफलता की कहानियाँ', titleCases:'न्याय दिलाने वाले मामले',
    lblTestimonials:'प्रशंसापत्र', titleTestimonials:'ग्राहक क्या कहते हैं',
    lblAwards:'पुरस्कार', titleAwards:'सम्मान और मान्यता',
    lblGallery:'गैलरी', titleGallery:'कानूनी सफर की तस्वीरें',
    lblProcess:'प्रक्रिया', titleProcess:'परामर्श की प्रक्रिया',
    lblBlog:'ब्लॉग', titleBlog:'लेख और जानकारी',
    lblFAQ:'सामान्य प्रश्न', titleFAQ:'आपके सवालों के जवाब',
    lblBooking:'अपॉइंटमेंट बुक करें', titleBooking:'परामर्श के लिए समय तय करें',
    lblContact:'संपर्क', titleContact:'हमसे संपर्क करें',
    /* About */
    aboutP1:'बॉम्बे हाईकोर्ट में १५+ वर्षों के समर्पित अभ्यास के साथ, मैंने सत्यनिष्ठा, परिश्रम और नैतिकता के साथ न्याय दिलाने की प्रतिष्ठा बनाई है।',
    aboutP2:'मेरा अभ्यास आपराधिक बचाव, नागरिक मुकदमेबाजी, पारिवारिक कानून, कॉर्पोरेट सलाह और रियल एस्टेट मामलों में है — हमेशा ग्राहक के हित को सर्वोपरि रखते हुए।',
    /* Process steps */
    proc1:'अपॉइंटमेंट बुक करें', proc2:'मामले पर चर्चा', proc3:'कानूनी रणनीति', proc4:'सक्रिय प्रतिनिधित्व', proc5:'समाधान',
    /* FAQ */
    faq1q:'परामर्श शुल्क क्या है?',
    faq1a:'३० मिनट के प्रारंभिक परामर्श का शुल्क ₹१,५०० है। बाद की बैठकों और मामले की फीस पहले ही पारदर्शी रूप से बताई जाती है।',
    faq2q:'मामला सुलझने में कितना समय लगता है?',
    faq2a:'अवधि मामले के प्रकार पर निर्भर करती है। एक सीधा नागरिक मामला ६-१८ महीनों में सुलझ सकता है, जबकि उच्च न्यायालय स्तर के जटिल मामलों में २-५ साल लग सकते हैं।',
    faq3q:'क्या आप मुंबई के बाहर के मामले लेते हैं?',
    faq3a:'हाँ। यद्यपि बॉम्बे हाईकोर्ट हमारा प्राथमिक न्यायालय है, हम पूरे महाराष्ट्र और भारत में मामले संभालते हैं।',
    faq4q:'क्या मेरी जानकारी गोपनीय रखी जाती है?',
    faq4a:'बिल्कुल। वकील-मुवक्किल विशेषाधिकार पवित्र है। आपके द्वारा साझा की गई सभी जानकारी पूरी तरह से गोपनीय रखी जाती है।',
    faq5q:'क्या मुझे मुफ्त प्रारंभिक मूल्यांकन मिल सकता है?',
    faq5a:'हाँ, पूर्ण सशुल्क परामर्श बुक करने से पहले हम १० मिनट का मुफ्त फोन मूल्यांकन प्रदान करते हैं।',
    /* Contact */
    ctaCall:'कॉल करें', ctaWhatsApp:'व्हाट्सएप', ctaEmail:'ईमेल करें',
    /* Booking */
    bookSubtitle:'आज ही अपना परामर्श बुक करें। फॉर्म भरें और हम २ घंटे के भीतर पुष्टि करेंगे।',
    bookSubmit:'परामर्श बुक करें',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ── Loading Screen ───────────────────────────────────────── */
  const loader = document.getElementById('loader');
  setTimeout(() => {
    if (loader) { loader.classList.add('hidden'); setTimeout(() => loader.remove(), 600); }
    initGSAP();
  }, 2200);


  /* ── Scroll Progress ──────────────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop    = document.documentElement.scrollTop;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const pct          = (scrollTop / docHeight) * 100;
    if (progressBar) progressBar.style.width = pct + '%';
  }, { passive: true });

  /* ── Sticky Navbar ────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 60);
    if (backTop) backTop.classList.toggle('visible', y > 500);
  }, { passive: true });

  /* ── Active Nav Link ──────────────────────────────────────── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  function setActiveNav() {
    const y = window.scrollY + 120;
    sections.forEach(sec => {
      if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + sec.id));
      }
    });
  }
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ── Mobile Nav ───────────────────────────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav && mobileNav.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      mobileNav && mobileNav.classList.remove('open');
    });
  });

  /* ── Back to Top ──────────────────────────────────────────── */
  backTop && backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ── Dark Mode Toggle ─────────────────────────────────────── */
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle && themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle && themeToggle.querySelector('i');
    if (icon) { icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'; }
  }

  /* ── Language Switcher ────────────────────────────────────── */
  const langs = ['en', 'mr', 'hi'];
  const langLabels = { en: 'मराठी', mr: 'हिंदी', hi: 'English' };
  
  const langBtn = document.querySelector('.lang-btn');
  applyTranslations(currentLang);
  if (langBtn) {
    langBtn.textContent = langLabels[currentLang] || 'मराठी';
    langBtn.addEventListener('click', () => {
      let nextIdx = (langs.indexOf(currentLang) + 1) % langs.length;
      currentLang = langs[nextIdx];
      localStorage.setItem('lang', currentLang);
      langBtn.textContent = langLabels[currentLang];
      applyTranslations(currentLang);
    });
  }

  /* ── AOS Init ─────────────────────────────────────────────── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
  }

  /* ── Swiper Testimonials ──────────────────────────────────── */
  if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-testimonial')) {
    new Swiper('.swiper-testimonial', {
      slidesPerView: 1, spaceBetween: 24,
      loop: true, autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }

  /* ── Animated Counters ────────────────────────────────────── */
  function animateCounter(el, target, suffix) {
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.innerHTML = Math.floor(current) + '<span class="stat-suffix">' + suffix + '</span>';
      if (current >= target) clearInterval(timer);
    }, 16);
  }

  const counters = document.querySelectorAll('[data-counter]');
  let countersStarted = false;
  const counterObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting) && !countersStarted) {
      countersStarted = true;
      counters.forEach(el => {
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
      });
    }
  }, { threshold: 0.3 });
  counters.forEach(el => counterObserver.observe(el));

  /* ── Achievement Counters (separate) ─────────────────────── */
  const achCounters = document.querySelectorAll('[data-ach-counter]');
  let achStarted = false;
  const achObserver = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting) && !achStarted) {
      achStarted = true;
      achCounters.forEach(el => {
        const target = parseInt(el.dataset.achCounter);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 120;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.innerHTML = Math.floor(current) + '<span class="suffix">' + suffix + '</span>';
          if (current >= target) clearInterval(timer);
        }, 16);
      });
    }
  }, { threshold: 0.3 });
  achCounters.forEach(el => achObserver.observe(el));

  /* ── FAQ Accordion ────────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Case Filter Tabs ─────────────────────────────────────── */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const caseCards  = document.querySelectorAll('.case-card');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      caseCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        card.style.animation = show ? 'fadeInUp .4s ease' : '';
      });
    });
  });

  /* ── Gallery Lightbox ─────────────────────────────────────── */
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src; lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  function closeLightbox() {
    if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
  }
  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox && lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ── Gallery Filter ───────────────────────────────────────── */
  const galTabs = document.querySelectorAll('.gallery-filter-tab');
  galTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = filter === 'all' || item.dataset.cat === filter ? '' : 'none';
      });
    });
  });

  /* ── Chat Widget ──────────────────────────────────────────── */
  const chatToggle  = document.querySelector('.chat-toggle-btn');
  const chatWidget  = document.querySelector('.chat-widget');
  const chatInput   = document.querySelector('.chat-input');
  const chatSend    = document.querySelector('.chat-send');
  const chatBody    = document.querySelector('.chat-body');

  chatToggle && chatToggle.addEventListener('click', () => {
    chatWidget && chatWidget.classList.toggle('open');
  });

  const chatResponses = {
    'fees'       : 'Initial consultation fees start at ₹500. Complex matters are discussed during the first meeting. We offer transparent pricing with no hidden charges.',
    'appointment': 'You can book an appointment by filling out the form below, calling +91 98765 43210, or clicking the WhatsApp button on this page.',
    'documents'  : 'Required documents vary by case type. Common documents include ID proof, relevant agreements, court notices, and previous legal communications.',
    'online'     : 'Yes! We offer online video consultations via Zoom or Google Meet for clients unable to visit the office.',
    'timeline'   : 'Case timelines depend on complexity and court schedule. Simple matters may resolve in 2–3 months; complex cases may take 1–3 years.',
    'default'    : 'Thank you for your question! Please call +91 98765 43210 or use the contact form for detailed assistance.',
  };

  function addChatMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (isUser ? 'user-msg' : 'bot-msg');
    div.innerHTML = '<div class="chat-bubble">' + text + '</div>';
    chatBody && chatBody.appendChild(div);
    chatBody && (chatBody.scrollTop = chatBody.scrollHeight);
  }

  function getChatResponse(msg) {
    const m = msg.toLowerCase();
    if (m.includes('fee') || m.includes('cost') || m.includes('charge') || m.includes('price')) return chatResponses.fees;
    if (m.includes('appoint') || m.includes('book') || m.includes('schedule')) return chatResponses.appointment;
    if (m.includes('document') || m.includes('paper') || m.includes('bring')) return chatResponses.documents;
    if (m.includes('online') || m.includes('virtual') || m.includes('video')) return chatResponses.online;
    if (m.includes('time') || m.includes('how long') || m.includes('duration')) return chatResponses.timeline;
    return chatResponses.default;
  }

  function handleChatSend() {
    const msg = chatInput && chatInput.value.trim();
    if (!msg) return;
    addChatMessage(msg, true);
    chatInput.value = '';
    setTimeout(() => addChatMessage(getChatResponse(msg), false), 800);
  }

  chatSend && chatSend.addEventListener('click', handleChatSend);
  chatInput && chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleChatSend(); });

  document.querySelectorAll('.chat-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      addChatMessage(q, true);
      setTimeout(() => addChatMessage(getChatResponse(q), false), 800);
    });
  });

  /* ── Appointment Form (EmailJS) ───────────────────────────── */
  const bookingForm = document.getElementById('booking-form');
  bookingForm && bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.form-submit');
    const successEl = document.querySelector('.form-success');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const formData = new FormData(this);
    formData.append("access_key", "3298fb84-c8f8-4bf8-b868-f801847a0828");
    formData.append("subject", "New Consultation Request: " + this.full_name.value);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = 'Book Consultation';
      btn.disabled = false;
      if (data.success) {
        if (successEl) { successEl.style.display = 'block'; }
        this.reset();
        setTimeout(() => { if (successEl) successEl.style.display = 'none'; }, 5000);
      } else {
        alert('There was an error sending your message. Please try calling us directly.');
      }
    })
    .catch(error => {
      btn.textContent = 'Book Consultation';
      btn.disabled = false;
      alert('There was an error sending your message. Please try calling us directly.');
    });
  });

  /* ── Smooth Scroll for Nav Links ──────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Parallax on hero shapes (mousemove) ─────────────────── */
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    const s1 = document.querySelector('.hero-shape-1');
    const s2 = document.querySelector('.hero-shape-2');
    if (s1) s1.style.transform = `translate(${x}px, ${y}px)`;
    if (s2) s2.style.transform = `translate(${-x}px, ${-y}px)`;
  });

});

/* ── GSAP Animations ──────────────────────────────────────── */
function initGSAP() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.hero-badge',       { y: 30, opacity: 0, duration: .7 })
    .from('.hero-name',        { y: 40, opacity: 0, duration: .8 }, '-=.4')
    .from('.hero-designation', { y: 30, opacity: 0, duration: .7 }, '-=.5')
    .from('.hero-tagline',     { y: 30, opacity: 0, duration: .7 }, '-=.5')
    .from('.hero-description', { y: 30, opacity: 0, duration: .7 }, '-=.5')
    .from('.hero-btns',        { y: 30, opacity: 0, duration: .6 }, '-=.4')
    .from('.hero-stats .stat-item', { y: 20, opacity: 0, duration: .5, stagger: .1 }, '-=.3')
    .from('.hero-image-card',  { x: 60, opacity: 0, duration: 1 },  '-=.8')
    .from('.hero-float-card',  { scale: .8, opacity: 0, duration: .6, stagger: .2 }, '-=.4');

  // Scroll-triggered section reveals
  gsap.utils.toArray('.section-label, .section-title, .section-subtitle').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      y: 30, opacity: 0, duration: .7, ease: 'power3.out'
    });
  });

  // Timeline items
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' },
      x: i % 2 === 0 ? -40 : 40,
      opacity: 0, duration: .8, ease: 'power3.out'
    });
  });
}

/* ── Keyframe for fadeInUp ─────────────────────────────────── */
const styleTag = document.createElement('style');
styleTag.textContent = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(styleTag);

