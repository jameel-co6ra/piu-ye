let currentLang = localStorage.getItem("lang") || "en";

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
     about_text1: "تعمل الوحدة التنفيذية للمشاريع الممولة دوليًا (PIU) تحت إشراف وزارة الكهرباء والطاقة ككيان متخصص مسؤول عن إدارة وتنسيق المشاريع الممولة دوليًا في قطاع الطاقة على مستوى اليمن. وقد أنشئت بهدف تعزيز البنية التحتية للطاقة في البلاد وبناء القدرات المؤسسية، حيث تلعب دورًا محوريًا في التخطيط والإشراف وتنفيذ البرامج التي تركز على توسيع الوصول إلى الطاقة، وتحديث البنية التحتية الحيوية، ودعم التنمية المستدامة. ومن خلال إطار منظم وفِرق فنية عالية الكفاءة، تضمن الوحدة الامتثال للمعايير الدولية مع الحفاظ على الشفافية التشغيلية والتميز في الحوكمة.",
     about_text2:"مدفوعة برؤية تسعى لتقديم حلول طاقة موثوقة وميسورة التكلفة ومستدامة، تعمل الوحدة التنفيذية كمنصة استراتيجية تربط بين الأولويات الوطنية وأفضل الممارسات العالمية. ومن خلال تبني الحلول المبتكرة، وبناء الخبرات الفنية المحلية، وتعزيز التعاون بين المؤسسات الحكومية والشركاء الدوليين والقطاع الخاص، تضع الوحدة نفسها في قلب تحول قطاع الطاقة في اليمن. وتتمثل مهمتها في تمكين أنظمة طاقة مرنة، وتوسيع نطاق تقنيات الطاقة المتجددة، وضمان استفادة المجتمعات — الحضرية والريفية — من خدمات طاقة محسّنة ونمو اقتصادي مستدام.",
 
     
    
     goals_title: "الإنجازات",
    achv1: "+4.7M مستفيد",
    achv2: "20% نمو",
    achv3: "153.8M$ مشروع",
    achievements_text: "على مر السنوات، أدارت الوحدة التنفيذية (PIU) بنجاح مجموعة متنوعة من المبادرات المتعلقة بالطاقة المصممة لتلبية احتياجات اليمن المتزايدة من الطاقة وتحديات البنية التحتية. ومن خلال نهج قائم على النتائج، ساهمت PIU في توسيع نطاق الكهرباء في المناطق المحرومة، وتحديث شبكات النقل والتوزيع، وإدخال حلول مبتكرة للطاقة المتجددة. كما ساهم عملها في تعزيز الإصلاحات المؤسسية، وتبسيط الأطر التشغيلية، وتعزيز قدرات تنفيذ المشاريع، مما يضمن أن جميع المبادرات تلبي المعايير الدولية للجودة والشفافية والمساءلة. وتُظهر هذه الإنجازات دور PIU كقوة دافعة وراء تحول قطاع الطاقة في اليمن، بما يمكّن من الوصول الشامل إلى الطاقة مع تعزيز المرونة على المدى الطويل.",
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
    obj_intro: "تعمل الوحدة التنفيذية (PIU) تحت إشراف وزارة الكهرباء والطاقة على تعزيز قطاع الطاقة في اليمن من خلال تطوير البنية التحتية، وتوسيع نطاق الطاقة المتجددة، وتحسين فرص الوصول عبر التخطيط الاستراتيجي، والابتكار، والحوكمة الشفافة.", 
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
    co2_title: "التزامنا بخفض انبعاثات الكربون",
co2_text: "تلتزم الوحدة التنفيذية (PIU) التزامًا عميقًا بدعم انتقال اليمن نحو مستقبل منخفض الكربون وأكثر مرونة في مواجهة التغير المناخي. ومن خلال دمج حلول الطاقة المتجددة مثل تقنيات الطاقة الشمسية والرياح، والترويج لممارسات كفاءة الطاقة، تسهم الوحدة في تقليل الاعتماد على الوقود الأحفوري وخفض انبعاثات غازات الدفيئة. كما تعمل الوحدة بنشاط على تطوير استراتيجيات ودعم مشاريع تتماشى مع الأهداف العالمية للاستدامة، بما يضمن أن تصبح تقنيات الطاقة النظيفة جزءًا أساسيًا من مشهد الطاقة في اليمن. ومن خلال التخطيط المستقبلي، والحلول المبتكرة، وبناء الشراكات مع الأطراف الوطنية والدولية، تسعى الوحدة إلى تحقيق التوازن بين تلبية احتياجات الطاقة وحماية البيئة، مما يمهد الطريق لمستقبل أكثر استدامة ووعيًا بالمناخ.",


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
     about_text1: "The Project Implementation Unit (PIU) operates under the Ministry of Electricity and Energy as a specialized entity responsible for managing and coordinating internationally funded energy projects across Yemen. Established to strengthen the country’s energy infrastructure and enhance institutional capacity, the PIU plays a pivotal role in planning, supervising, and implementing programs that focus on expanding energy access, modernizing critical infrastructure, and supporting sustainable development. Through a structured framework and highly skilled technical teams, the PIU ensures compliance with international standards while maintaining operational transparency and governance excellence.",
     about_text2: "Driven by a vision of delivering reliable, affordable, and sustainable energy solutions, the PIU acts as a strategic platform that bridges national priorities with global best practices. By leveraging innovative solutions, building local technical expertise, and fostering collaboration between government institutions, development partners, and private-sector stakeholders, the PIU positions itself at the center of Yemen’s energy transformation. Its mandate focuses on enabling resilient energy systems, scaling up renewable energy technologies, and ensuring that communities — both urban and rural — benefit from improved energy services and sustainable economic growth.",

     goals_title: "Achievements",
     achv1: "+4.7M Beneficiaries",
     achv2: "20% Growth",
     achv3: "153.8M$ Projects",
     achievements_text: "Over the years, the PIU has successfully managed and overseen a diverse portfolio of energy-related initiatives designed to address Yemen’s growing power demands and infrastructure challenges. Through a results-driven approach, the PIU has contributed to expanding electrification in underserved areas, upgrading transmission and distribution networks, and introducing innovative renewable energy solutions. Its work has also advanced institutional reforms, streamlined operational frameworks, and strengthened project delivery capacities, ensuring that all initiatives meet international standards of quality, transparency, and accountability. These achievements demonstrate the PIU’s role as a driving force behind the transformation of Yemen’s energy sector, enabling inclusive access to energy while fostering long-term resilience.",
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
    obj_intro:  "The PIU works under the Ministry of Electricity and Energy to strengthen Yemen’s energy sector by advancing infrastructure, scaling renewable energy, and improving access through strategic planning, innovation, and transparent governance.",
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
    co2_title: "Our Commitment to Reducing Carbon Emissions",
co2_text: "The PIU is deeply committed to supporting Yemen’s transition toward a low-carbon and climate-resilient energy future. By integrating renewable energy solutions, such as solar and wind technologies, and promoting energy-efficient practices, the PIU contributes to reducing dependence on fossil fuels and lowering greenhouse gas emissions. The unit actively develops strategies and supports projects that align with global sustainability goals, ensuring that clean energy technologies become central to Yemen’s energy landscape. Through forward-looking planning, innovative solutions, and partnerships with national and international stakeholders, the PIU seeks to balance energy demands with environmental protection, paving the way for a more sustainable and climate-conscious future.",


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
document.getElementById("achievements-text").textContent = t.achievements_text;

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


