// ====================== إعداد اللغة ======================
// اللغة الحالية – يتم تحميلها من التخزين المحلي أو تعيينها كعربية افتراضيًا
let currentLang = localStorage.getItem("language") || "en";

// نصوص الترجمة
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_schedule: "الجدول",
    nav_location: "الموقع",
    
    nav_about: "من نحن",
    about_title: "من نحن",
    about_text:
    " يعد هذا المؤتمر رفيع المستوى استجابة عاجلة للحاجة الملحة في اليمن إلى إصلاح هيكلي في قطاع الطاقة، وانتقال وطني نحو مصادر طاقة نظيفة وفعالة من حيث التكلفة. ويهدف إلى إقامة حوار استراتيجي بين المؤسسات الحكومية والجهات المانحة الدولية وقطاع الأعمال ومنظمات المجتمع المدني. كما يسعى المؤتمر إلى ترسيخ نهج متكامل لمعالجة الاحتياجات الخاصة بقطاع الطاقة في اليمن، والاستفادة من الخبرات العالمية وفرص التمويل المناخي، مما يمهد الطريق نحو التعافي الأخضر على المدى الطويل، وبناء بنية تحتية مرنة وقادرة على الصمود. ",

    nav_register: "التسجيل",
    hero_title: "مرحبًا بكم في مؤتمر الطاقة الوطني",
    hero_text: "نحو يمن متعافٍ بطاقة مستدامة",
    hero_btn: "تواصل معنا",
    schedule_title: "جدول المؤتمر",
    col_date: "التاريخ",
    col_period: "الفترة",
    col_title: "عنوان الفقرة",
    location_title: "موقع المؤتمر",
    location_text: "يقام المؤتمر في مركز عدن مول – كريتر، عدن، بجوار مستشفى عدن العام. يتميز الموقع بسهولة الوصول، وبتوفّر خدمات مواقف السيارات، والمطاعم، ومرافق الراحة.",
    location_btn_text: "عرض الخريطة",
    supporters_title: "الداعمين",
    register_title: "التسجيل في المؤتمر",
    register_desc: "انضم إلينا الآن وسجّل للمشاركة في المؤتمر الوطني للطاقة، حيث يلتقي الخبراء وصنّاع القرار لبحث مستقبل الطاقة في اليمن.",
    register_btn: "سجل الآن",
    footer_text: "© 2025 المؤتمر الوطني للطاقة - جميع الحقوق محفوظة",
  },
  en: {
    nav_home: "Home",
    nav_schedule: "Schedule",
    nav_location: "Location",
    
    nav_about: "About",
    about_title: "About",
    about_text:
     "This high-level conference is an urgent response to Yemen’s pressing need for structural reform in the energy sector and a national transition towards clean, cost-effective energy sources. It aims to establish a strategic dialogue between government institutions, international donors, the business sector, and civil society organizations.\n\nThe conference also seeks to promote an integrated approach to addressing the specific needs of Yemen’s energy sector while leveraging global expertise and climate finance opportunities, paving the way for long-term green recovery and resilient energy infrastructure.",
    

    nav_register: "Register",
    hero_title: "Welcome to Yemen Energy Conference",
    hero_text: "Towards a Recovered Yemen with Sustainable Energy",
    hero_btn: "Contact Us",
    schedule_title: "Conference Agenda",
    col_date: "Date",
    col_period: "Period",
    col_title: "Session Title",
    location_title: "Location",
    location_text: "The conference will be held at Aden Mall, Crater - Aden, near Aden General Hospital. The location offers easy access, parking services, restaurants, and facilities for convenience.",
    location_btn_text: "View Map",
    supporters_title: "Supporters",
    register_title: "Conference Registration",
    register_desc: "Join us now and register to participate in the National Energy Conference, where experts and decision-makers discuss Yemen's energy future.",
    register_btn: "Register Now",
    footer_text: "© 2025 National Energy Conference - All Rights Reserved",
  }
};

// ====================== تطبيق الترجمة ======================
function applyLanguage(lang) {
  // ضبط اللغة واتجاه الصفحة العامة
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("language", lang);

  const t = translations[lang];

  // تحديث النصوص العامة
  setText("nav-home", t.nav_home);
  setText("nav-schedule", t.nav_schedule);
  setText("nav-location", t.nav_location);
  setText("nav-register", t.nav_register);
  setText("navhome", t.nav_home);
  setText("navschedule", t.nav_schedule);
  setText("navlocation", t.nav_location);
  setText("navregister", t.nav_register);
  setText("hero-title", t.hero_title);
  setText("hero-text", t.hero_text);
  setText("hero-btn", t.hero_btn);
  setText("schedule-title", t.schedule_title);
  setText("col-date", t.col_date);
  setText("col-period", t.col_period);
  setText("col-title", t.col_title);
  setText("location-title", t.location_title);
  setText("location-btn-text", t.location_btn_text);
  setText("supporters-title", t.supporters_title);
  setText("nav-about", t.nav_about);
  setText("navabout", t.nav_about);
  setText("about-title", t.about_title);
  setText("about-text", t.about_text);
  setText("register-title", t.register_title);
  setText("register-desc", t.register_desc);
  setText("register-btn", t.register_btn);
  setText("footer-text", t.footer_text);

  // تحديث نص موقع المؤتمر
  const locationTextEl = document.getElementById("location-text");
  if (locationTextEl) locationTextEl.querySelector("p").textContent = t.location_text;

  // ترجمة محتوى الجدول
  translateScheduleCells(lang);

  // ✅ ضبط اتجاه الجدول حسب اللغة
  const scheduleTable = document.getElementById("scheduleTable");
  if (scheduleTable) {
    scheduleTable.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }
}

// ====================== ترجمة محتوى الجدول ======================
// ====================== ترجمة محتوى الجدول ======================
// ====================== ترجمة محتوى الجدول ======================
// ====================== ترجمة محتوى الجدول ======================
function translateScheduleCells(lang) {
  const dayTitles = document.querySelectorAll(".schedule-day-title");
  const periodHeaders = document.querySelectorAll("#col-period, #col-period-2");
  const titleHeaders = document.querySelectorAll("#col-title, #col-title-2");
  const rows = document.querySelectorAll(".schedule-row:not(.header)");

  if (lang === "ar") {
    // عناوين الأيام
    dayTitles[0].textContent = "26 نوفمبر – القيادة والرؤية والتنسيق";
    dayTitles[1].textContent = "27 نوفمبر – القطاع الخاص وكهربة المجتمع الشاملة";

    // رؤوس الأعمدة
    periodHeaders.forEach(h => (h.textContent = "الفترة"));
    titleHeaders.forEach(h => (h.textContent = "عنوان الجلسة"));

    // صفوف اليوم الأول
    rows[0].children[0].textContent = "جلسة صباحية";
    rows[0].children[1].textContent = "حفل الافتتاح الرسمي وكلمات كبار الشخصيات";
    rows[1].children[0].textContent = "جلسة مسائية";
    rows[1].children[1].textContent = "الطاقة لتعافي اليمن: بناء المؤسسات وتنسيق الدعم الدولي";

    // صفوف اليوم الثاني
    rows[2].children[0].textContent = "جلسة صباحية";
    rows[2].children[1].textContent = "الشراكات بين القطاعين العام والخاص وإعلانات الاستثمار";
    rows[3].children[0].textContent = "جلسة مسائية";
    rows[3].children[1].textContent = "كهرباء الريف وربطها بالتنمية المستدامة";
  } else {
    // English version
    dayTitles[0].textContent = "26 Nov. – Leadership, Vision & Coordination";
    dayTitles[1].textContent = "27 Nov. – Private Sector and Inclusive Electrification";

    // Column headers
    periodHeaders.forEach(h => (h.textContent = "Period"));
    titleHeaders.forEach(h => (h.textContent = "Session Title"));

    // Day 1 sessions
    rows[0].children[0].textContent = "Morning Session";
    rows[0].children[1].textContent = "Opening Ceremony and High-Level Speeches";
    rows[1].children[0].textContent = "Afternoon Session";
    rows[1].children[1].textContent = "Energy for Yemen’s Recovery, Building Institutions, and Donor Coordination";

    // Day 2 sessions
    rows[2].children[0].textContent = "Morning Session";
    rows[2].children[1].textContent = "Public-Private Partnerships and Investment Announcements";
    rows[3].children[0].textContent = "Afternoon Session";
    rows[3].children[1].textContent = "Rural Electrification and Development Nexus";
  }
}


// ====================== تبديل اللغة ======================
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(currentLang);
}

// ====================== القائمة في الجوال ======================
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
  navbar.classList.remove("hide");
}

// ====================== إخفاء / إظهار Navbar عند التمرير ======================
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSection = document.getElementById("home");
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  const mobileMenu = document.getElementById("mobileMenu");

  const shouldHide = scrollTop > lastScrollTop && scrollTop > heroBottom && mobileMenu.style.display !== "flex";
  const isMobile = window.innerWidth <= 768;

  if (!isMobile && shouldHide) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

  clearTimeout(window.navTimer);
  if (!mobileMenu.style.display || mobileMenu.style.display === "none") {
    window.navTimer = setTimeout(() => {
      if (window.pageYOffset > heroBottom) {
        navbar.classList.add("hide");
      }
    }, 4000);
  }
});

// ====================== عند تحميل الصفحة ======================
window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});

// ====================== تفعيل اللغة المخزنة ======================
window.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
});

// ====================== أنيميشن ظهور الجدول مرة واحدة ======================
window.addEventListener("DOMContentLoaded", () => {
  const schedule = document.querySelector(".fade-in-once");
  if (!schedule) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        schedule.classList.add("visible");
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(schedule);
});

// ====================== دالة مساعدة ======================
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
      overlay.style.display = "none";
  } else {
      mobileMenu.style.display = "flex";
      overlay.style.display = "block";
  }
}

// زر الإغلاق
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close-btn") || e.target.id === "menuOverlay") {
      document.getElementById("mobileMenu").style.display = "none";
      document.getElementById("menuOverlay").style.display = "none";
  }
});


window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in-once");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // يتوقف عن المراقبة بعد الظهور
          }
      });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => observer.observe(el));
});

// منع الرجوع للخلف
history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    history.go(1);
};



