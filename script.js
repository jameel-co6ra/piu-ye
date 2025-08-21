let currentLang = localStorage.getItem("lang") || "ar";

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_objectives: "الاهداف",
    nav_more: "المزيد",
    nav_conference: "المؤتمر",
    nav_contact: "تواصل معنا",
    hero_title: "مرحبًا بكم في الوحدة التنفيذية للمشاريع الممولة دوليًا",
    hero_text: "نعمل من أجل مستقبل طاقة مستدام ومزدهر لليمن",
     // من نحن
     about_title: "من نحن",
     about_text1: "الوحدة التنفيذية للمشاريع الممولة دوليًا (PIU) تعمل تحت إشراف وزارة الكهرباء والطاقة، وهي مسؤولة عن إدارة المشاريع الممولة دوليًا والتي تهدف إلى تعزيز الوصول إلى الطاقة والبنية التحتية والاستدامة. وتركّز على الطاقة المتجددة، والتنمية الريفية، وبناء القدرات المؤسسية. تلعب PIU دورًا محوريًا في تطوير قطاع الطاقة في اليمن وتعزيز النمو والمرونة على المدى الطويل. \"تعزيز الوصول إلى الطاقة، موثوقية البنية التحتية، الحلول المتجددة، التنمية الريفية، وبناء القدرات المؤسسية، محطات الطاقة بالغاز، وتوسيع شبكات النقل والتوزيع\".",
     about_text2:" نحن نركز باستمرار على بناء شراكات قوية وتعاونية مع المانحين الدوليين، مع التأكيد على الشفافية والتوافق مع الأولويات العالمية لدفع حلول الطاقة المستدامة والتنمية التحويلية في اليمن.",

    
     goals_title: "الإنجازات",
    achv1: "+4.7M مستفيد",
    achv2: "20% نمو",
    achv3: "153.8M$ مشروع",
    goal1_title: "توسيع الوصول للكهرباء",
    goal2_title: "تعزيز موثوقية البنية التحتية",
    goal3_title: "الترويج للطاقة المتجددة",
    goal4_title: "تطوير المبادرات الريفية",
    goal5_title: "بناء القدرات المؤسسية",
    
     projects_title: "المشاريع",
  project_summary: "هناك مشروع حالي يقام وهو عبارة عن مؤتمر يتحدث عن مواضيع الطاقة وعرض مشاريع.",
  project_details: "هذا المؤتمر يسلط الضوء على الابتكارات في مجال الطاقة، ويجمع خبراء محليين ودوليين لمناقشة التحديات والحلول المستقبلية.",
  project_mobile: "هناك مؤتمر حالي يتحدث عن مشاريع الطاقة ويجمع الخبراء لمناقشة الحلول المستقبلية.",
  project_btn: "المزيد من التفاصيل",
  obj_title: "الأهداف",
    obj_intro: "تعمل الوحدة التنفيذية (PIU) تحت إشراف وزارة الكهرباء والطاقة وقد حققت نجاحات بارزة في إدارة المشاريع الممولة دوليًا لتحسين البنية التحتية للطاقة في اليمن. ويهدف هذا الملخص إلى مواءمة الوصف الوظيفي وقوة الإدارات مع الأهداف المطلوبة.",
    obj1_title: "تحسين تسليم المشاريع",
    obj1_text: "تركز PIU على الاستخدام الأمثل للموارد الممولة دوليًا...",
    obj2_title: "ضمان الامتثال",
    obj2_text: "تضمن PIU توافق عملياتها مع المعايير الدولية ومتطلبات المانحين...",
    obj3_title: "تعزيز القدرات المؤسسية",
    obj3_text: "تلتزم PIU ببناء أنظمة وعمليات قوية تعزز الحوكمة...",
    obj4_title: "توسيع الوصول إلى الطاقة",
    obj4_text: "تهدف PIU إلى تقديم حلول طاقة تحولية للمجتمعات المحرومة...",


    dept_title: "الأقسام",
    dept1_title: "الإدارة المالية والإدارية",
    dept1_text: "تشرف على إعداد الميزانيات...",
    dept2_title : "الأقسام الفنية والهندسية والرقابية",
    dept2_text  :"تدير تصاميم المشاريع...",
    dept3_title:  "قسم المشتريات",
    dept3_text: "يدير المناقصات...",
    dept4_title: "قسم الاستدامة البيئية والاجتماعية",
    dept4_text: "يشرف على الامتثال البيئي...",

    nav_co2: "CO2",
    co2_title: "أثر الطاقة الشمسية",
co2_text: "يتيح تسجيل مشروع الطاقة الشمسية الكهروضوئية ضمن برنامج معترف به لائتمان الكربون لوزارة الكهرباء الحصول على تمويل مهم لدعم مبادرات الطاقة المتجددة، بما يتماشى مع رؤية الدولة للتنمية المستدامة ويعزز مكانتها في مكافحة التغير المناخي عالميًا. تمت دراسة تأثير المشروع في ثلاثة سيناريوهات مختلفة لانبعاثات الشبكة: شبكات تعتمد بشكل رئيسي على الديزل، وأخرى على الغاز، وأخرى مختلطة (فحم، وغاز، وديزل). أظهرت شبكة الديزل أعلى نسبة خفض في انبعاثات CO₂ بنسبة 43.5%، تليها الشبكة المختلطة بنسبة 33.6%، ثم الشبكة المعتمدة على الغاز بنسبة 27.9%، مما يوضح فعالية الطاقة الشمسية في تقليل الانبعاثات من مصادر طاقة متنوعة. كما تم تحليل أداء المحطة خلال أكتوبر 2024 باستخدام بيانات حقيقية، مما يؤكد دور الطاقة الشمسية في الحد من الغازات الدفيئة. وتُنتج المحطة سنويًا 242,717.52 ميغاواط ساعة، ومن المتوقع أن تولد أكثر من 6 ملايين ميغاواط ساعة خلال عمر المشروع البالغ 25 عامًا، مما يبرز مساهمتها الكبيرة والطويلة الأمد في توليد الطاقة النظيفة.",


    facility_title: "مرافقنا التي تم تقييمها بعناية",
    facility_text1: "أجرت شركة أفكار لصالح UNOPS تقييماً شاملاً لقدرات الوحدة التنفيذية، شمل الإدارة المالية وعمليات المشتريات وأطر المتابعة للمشاريع، بهدف مواءمة الممارسات مع المعايير الدولية وتعزيز القدرة على إدارة المشاريع الممولة دولياً بكفاءة.",
    facility_text2: "بعد التقييم، عززت الوحدة التنفيذية تعاونها مع البنك الدولي وUNOPS عبر دراسات استراتيجية مثل دراسة الشبكات المصغرة للطاقة الشمسية، ودراسة فرص مشاركة القطاع الخاص، إضافة إلى مراجعة تقييم سوق الطاقة الشمسية خارج الشبكة لدعم التوسع في الحلول المتجددة في اليمن.",

    more_title: "المزيد عنا",
    more_text: "لمعرفة المزيد عن الوحدة التنفيذية (PIU)، يمكنك الاطلاع على ملفنا التعريفي الذي يوضح مهامنا وإنجازاتنا ورؤيتنا لمستقبل قطاع الطاقة في اليمن.",
    more_btn: "تحميل الملف",

    contact_title: "تواصل معنا",
  contact_intro: "للاستفسارات أو أي تواصل، يمكنكم الاتصال بنا عبر الطرق التالية:",
  contact_email: "info@piu-ye.org",
  contact_phone: "00967-773691525",
  contact_location: "كابوتا, المنصوره, عدن, اليمن",
    

    footer_text: "جميع الحقوق محفوظة © 2025 PIU",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_objectives: "Objectives",
    nav_more: "More",
    nav_conference: "Conference",
    nav_contact: "Contact",
    hero_title: "Welcome to the Project Implementation Unit",
    hero_text: "Working for a sustainable and prosperous energy future for Yemen",
     // about
     about_title: "About Us",
     about_text1: "The Project Implementation Unit (PIU), operating under Yemen's Ministry of Electricity and Energy, is responsible for managing internationally funded projects aimed at enhancing energy access, infrastructure, and sustainability. With a focus on renewable energy, rural development, and institutional capacity building, the PIU plays a pivotal role in advancing Yemen’s energy sector and fostering long-term growth and resilience. “Enhancing energy access, infrastructure reliability, renewable solutions, rural development, and institutional capacity, gas power stations and the expansion of transmission and distribution networks”.",
     about_text2: "We have consistently focused on building strong, collaborative partnerships with international donors, emphasizing transparency and alignment with global priorities to drive sustainable energy solutions and transformative development in Yemen.",
 
     goals_title: "Achievements",
     achv1: "+4.7M Beneficiaries",
     achv2: "20% Growth",
     achv3: "153.8M$ Projects",
     goal1_title: "Expand Electricity Access",
     goal2_title: "Strengthen Infrastructure Reliability",
     goal3_title: "Promote Renewable Energy Solutions",
     goal4_title: "Enhance Rural Development Initiatives",
     goal5_title: "Foster Institutional Growth",

     projects_title: "Projects",
    project_summary: "There is a current project: a conference discussing energy topics and showcasing projects.",
    project_details: "This conference highlights innovations in the energy sector, bringing together local and international experts to discuss challenges and future solutions.",
    project_mobile: "A current conference discusses energy projects and gathers experts to explore future solutions.",
    project_btn: "More Details",
    
    obj_title: "Objectives",
    obj_intro: "The Project Implementation Unit (PIU), under the Ministry of Electricity and Energy...",
    obj1_title: "Optimize Project Delivery",
    obj1_text: "The PIU focuses on maximizing the efficient use of resources...",
    obj2_title: "Ensure Compliance",
    obj2_text: "The PIU ensures its operations align with international standards...",
    obj3_title: "Strengthen Institutional Capacity",
    obj3_text: "The PIU is dedicated to building robust systems and processes...",
    obj4_title: "Expand Access to Energy",
    obj4_text: "The PIU aims to deliver transformative energy solutions...",


    dept_title: "Departments",
    dept1_title: "Administrative and Finance Departments",
    dept1_text: "Oversees budgeting, financial reporting...",
    dept2_title: "Technical Engineering and Monitoring Departments",
    dept2_text: "Manages project designs, supervision...",
    dept3_title:  "Procurement Department",
    dept3_text: "Handles tenders, vendor selection...",
    dept4_title: "Environmental and Social Sustainability Department",
    dept4_text: "Oversees environmental compliance...",

    nav_co2: "CO2",
    co2_title: "Solar PV Impact",
co2_text: "Registering the solar photovoltaic (PV) project under a recognized carbon credit program allows the Ministry of Electricity to secure crucial funding for renewable energy initiatives, aligning with national sustainability goals and elevating the country's position in global climate leadership. The project’s impact was analyzed across three grid emission scenarios: diesel-dominated, gas-dominated, and mixed-source grids (coal, gas, and diesel). The diesel-dominated grid showed the highest CO₂ reduction at 43.5%, followed by the mixed-source grid at 33.6%, and the gas-dominated grid at 27.9%, reflecting the effectiveness of solar PV in displacing emissions from various energy sources. A detailed performance review of October 2024, using real operational data, further confirms solar PV's vital role in reducing greenhouse gases. Additionally, the solar PV plant, with an annual energy production of 242,717.52 MWh, is projected to generate over 6 million MWh over a 25-year lifespan, underscoring its long-term contribution to clean energy generation.",


    facility_title: "Our Well Evaluated Facility",
    facility_text1: "AFKAR Consultant for UNOPS conducted a comprehensive assessment of the PIU’s capacity, covering financial management, procurement processes, and project monitoring frameworks to align practices with international standards and strengthen donor-funded project management.",
    facility_text2: "Following the assessment, the PIU collaborated with the World Bank and UNOPS on key studies such as the Mini-Grid Solar Study, private sector opportunities in the power sector, and the Off-Grid Solar Market Assessment to support renewable energy expansion in Yemen.",

    more_title: "More About Us",
    more_text: "To learn more about the PIU, you can check our profile document which highlights our mission, achievements, and vision for Yemen’s energy future.",
    more_btn: "Download File",

    contact_title: "Contact Us",
  contact_intro: "For inquiries or communication, you can reach us through the following:",
  contact_email: "info@piu-ye.org",
  contact_phone: "00967-773691525",
  contact_location: "Kabuta Area, Al-Mansoura, Aden, Yemen",
    
    footer_text: "All rights reserved © 2025 PIU",
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", lang);

  const t = translations[lang];

  

  // ===== روابط القائمة (كمبيوتر) =====
  document.getElementById("nav-home").querySelector("span").textContent = t.nav_home;
  document.getElementById("nav-about").querySelector("span").textContent = t.nav_about;
  document.getElementById("nav-more").textContent = t.nav_more;
document.getElementById("nav-conference").textContent = t.nav_conference;
  document.getElementById("nav-contact").querySelector("span").textContent = t.nav_contact;

  // ===== روابط القائمة (جوال) =====
  document.getElementById("nav-home-mobile").textContent = t.nav_home;
  document.getElementById("nav-about-mobile").textContent = t.nav_about;
  document.getElementById("nav-more-mobile").textContent = t.nav_more;
document.getElementById("nav-conference-mobile").textContent = t.nav_conference;
  document.getElementById("nav-contact-mobile").textContent = t.nav_contact;

  // ===== الصفحة الرئيسية =====
  document.getElementById("hero-title").textContent = t.hero_title;
  document.getElementById("hero-text").textContent = t.hero_text;

  // ===== من نحن =====
document.getElementById("about-title").textContent = t.about_title;
document.getElementById("about-text1").textContent = t.about_text1;
document.getElementById("about-text2").textContent = t.about_text2;

// ===== الإنجازات =====
document.getElementById("achievements-title").textContent = t.goals_title;
document.getElementById("achv1").textContent = t.achv1;
document.getElementById("achv2").textContent = t.achv2;
document.getElementById("achv3").textContent = t.achv3;

// ===== الكروت =====
document.getElementById("achievement1-title").textContent = t.goal1_title;
document.getElementById("achievement2-title").textContent = t.goal2_title;
document.getElementById("achievement3-title").textContent = t.goal3_title;
document.getElementById("achievement4-title").textContent = t.goal4_title;
document.getElementById("achievement5-title").textContent = t.goal5_title;


// ===== الأهداف =====
document.getElementById("nav-objectives").querySelector("span").textContent = t.nav_objectives;
document.getElementById("nav-objectives-mobile").textContent = t.nav_objectives;

document.getElementById("obj-title").textContent = t.obj_title;
document.getElementById("obj-intro").textContent = t.obj_intro;
document.getElementById("obj1-title").textContent = t.obj1_title;
document.getElementById("obj1-text").textContent = t.obj1_text;
document.getElementById("obj2-title").textContent = t.obj2_title;
document.getElementById("obj2-text").textContent = t.obj2_text;
document.getElementById("obj3-title").textContent = t.obj3_title;
document.getElementById("obj3-text").textContent = t.obj3_text;
document.getElementById("obj4-title").textContent = t.obj4_title;
document.getElementById("obj4-text").textContent = t.obj4_text;



document.getElementById("dept-title").textContent = t.dept_title;
document.getElementById("dept1-title").textContent = t.dept1_title;
document.getElementById("dept1-text").textContent = t.dept1_text;
document.getElementById("dept2-title").textContent = t.dept2_title;
document.getElementById("dept2-text").textContent = t.dept2_text;
document.getElementById("dept3-title").textContent = t.dept3_title;
document.getElementById("dept3-text").textContent = t.dept3_text;
document.getElementById("dept4-title").textContent = t.dept4_title;
document.getElementById("dept4-text").textContent = t.dept4_text;




  document.getElementById("facility-title").textContent = t.facility_title;
  document.getElementById("facility-text1").textContent = t.facility_text1;
  document.getElementById("facility-text2").textContent = t.facility_text2;

  document.getElementById("more-title").textContent = t.more_title;
document.getElementById("more-text").textContent = t.more_text;
document.querySelector(".download-btn").textContent = t.more_btn;

document.getElementById("footer-text").textContent = t.footer_text;

document.getElementById("contact-title").textContent = t.contact_title;
document.getElementById("contact-intro").textContent = t.contact_intro;
document.getElementById("contact-email").textContent = t.contact_email;
document.getElementById("contact-phone").textContent = t.contact_phone;
document.getElementById("contact-location").textContent = t.contact_location;

document.getElementById("co2-title").textContent = t.co2_title;
document.getElementById("co2-text").textContent = t.co2_text;

}


function toggleLanguage(){
  currentLang = currentLang === "ar" ? "en" : "ar";
  applyLang(currentLang);
}

function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

window.addEventListener("DOMContentLoaded", ()=>applyLang(currentLang));

// كشف العناصر مع أول ظهور وإضافة كلاس visible
window.addEventListener("DOMContentLoaded", () => {
    const revealEls = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // تشغيل مرة واحدة لكل عنصر
        }
      });
    }, { threshold: 0.3 });
  
    revealEls.forEach(el => observer.observe(el));
  });



  // Counter Animation for Achievements
// Counter Animation for Achievements
function animateCounters() {
  const counters = document.querySelectorAll(".achievement .count");
  const speed = 100; // سرعة العد

  counters.forEach(counter => {
    const parent = counter.closest(".achievement");
    const target = parseFloat(parent.getAttribute("data-target"));
    const suffix = parent.getAttribute("data-suffix") || "";
    const fixed = parseInt(parent.getAttribute("data-fixed")) || 0;

    let count = 0;
    const step = target / speed;

    const updateCount = () => {
      count += step;
      if (count < target) {
        counter.innerText = count.toFixed(fixed) + suffix;
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toFixed(fixed) + suffix;
      }
    };

    updateCount();
  });
}

  
  // تشغيل عند ظهور القسم
  window.addEventListener("DOMContentLoaded", () => {
    const achievementsSection = document.querySelector("#achievements");
    let started = false;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          animateCounters();
          started = true;
        }
      });
    }, { threshold: 0.4 });
  
    if (achievementsSection) observer.observe(achievementsSection);
  });
  
  

  // === fade-in reveal ===
window.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => observer.observe(el));
});


// ===== Fade In Observer =====
window.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.3});
  revealEls.forEach(el => observer.observe(el));
});

function openPDF() {
  // فتح ملف PDF من مجلد PIU_Profile
  window.open("PIU_Profile/PIU_Profile.pdf", "_blank");
}







// منع الرجوع للخلف
history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    history.go(1);
};





// دالة للتمرير إلى الأقسام
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}



window.addEventListener("load", () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
});


