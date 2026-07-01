const companyEmail = "epmmarketing2818@gmail.com";

const translations = {
  en: {
    navProducts: "Products",
    navLocation: "Location",
    navContact: "Contact",
    eyebrow: "Penang car battery supplier",
    heroTitle: "Car batteries for wholesale and retail customers.",
    heroText: "Ever Progress Marketing supplies reliable car batteries in Bukit Mertajam, Penang, with practical support for workshops, dealers, and drivers.",
    callNow: "Call +60 17-539 9915",
    viewBrands: "View brands",
    introKicker: "About us",
    introTitle: "Local battery supply with dependable brand options.",
    introText: "We supply good-performance car batteries with complete model choices for cars and lorries, backed by friendly service for wholesale and retail customers.",
    productsKicker: "Battery brands",
    productsTitle: "Brands we carry",
    epmDesc: "Car batteries for everyday replacement and trade supply.",
    camelDesc: "Reliable battery options for passenger cars and common vehicle needs.",
    durocomDesc: "Practical battery choices for workshops, dealers, and retail customers.",
    maxtecDesc: "Battery supply for drivers looking for dependable replacement options.",
    serviceKicker: "What we do",
    serviceTitle: "Wholesale and retail battery support.",
    serviceOne: "Bulk supply for automotive trade customers",
    serviceTwo: "Retail battery replacement enquiries",
    serviceThree: "Brand selection across multiple battery lines",
    locationKicker: "Visit us",
    locationTitle: "Located in Bukit Mertajam, Penang.",
    openMap: "Open in Google Maps",
    contactKicker: "Contact",
    contactTitle: "Talk to us about battery supply.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    emailPending: "epmmarketing2818@gmail.com",
    companyLabel: "Company",
    footerText: "Car battery wholesale and retail in Penang, Malaysia."
  },
  zh: {
    navProducts: "产品",
    navLocation: "地址",
    navContact: "联系",
    eyebrow: "槟城汽车电池供应商",
    heroTitle: "汽车电池批发与零售供应。",
    heroText: "Ever Progress Marketing（圣昌市场营销）位于槟城大山脚，为修车厂、经销商和车主供应可靠的汽车电池。",
    callNow: "致电 +60 17-539 9915",
    viewBrands: "查看品牌",
    introKicker: "关于我们",
    introTitle: "本地汽车电池供应，多品牌选择更灵活。",
    introText: "我们供应性能稳定的汽车电池，型号齐全，涵盖各类轿车和 lorry 电池，并为批发与零售客户提供良好服务。",
    productsKicker: "电池品牌",
    productsTitle: "我们经营的品牌",
    epmDesc: "适合日常更换和批发供应的汽车电池。",
    camelDesc: "适合乘用车和常见车型需求的可靠电池选择。",
    durocomDesc: "为修车厂、经销商和零售客户提供实用电池选择。",
    maxtecDesc: "为需要可靠更换电池的车主提供供应选择。",
    serviceKicker: "服务范围",
    serviceTitle: "汽车电池批发与零售支持。",
    serviceOne: "面向汽车行业客户的批量供应",
    serviceTwo: "零售客户电池更换咨询",
    serviceThree: "多条电池品牌线可供选择",
    locationKicker: "欢迎到访",
    locationTitle: "我们位于槟城大山脚。",
    openMap: "在 Google Maps 打开",
    contactKicker: "联系方式",
    contactTitle: "欢迎咨询汽车电池供应。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    emailPending: "epmmarketing2818@gmail.com",
    companyLabel: "公司",
    footerText: "马来西亚槟城汽车电池批发与零售。"
  },
  ms: {
    navProducts: "Produk",
    navLocation: "Lokasi",
    navContact: "Hubungi",
    eyebrow: "Pembekal bateri automotif di Pulau Pinang",
    heroTitle: "Bateri automotif untuk pelanggan borong dan runcit.",
    heroText: "Ever Progress Marketing membekalkan bateri kereta di Bukit Mertajam, Pulau Pinang untuk bengkel, peniaga, dan pemandu.",
    callNow: "Telefon +60 17-539 9915",
    viewBrands: "Lihat jenama",
    introKicker: "Tentang kami",
    introTitle: "Bekalan bateri tempatan dengan pilihan jenama yang dipercayai.",
    introText: "Kami membekalkan bateri kereta berprestasi baik dengan pilihan model lengkap untuk kereta dan lori, serta perkhidmatan mesra untuk pelanggan borong dan runcit.",
    productsKicker: "Jenama bateri",
    productsTitle: "Jenama yang kami bekalkan",
    epmDesc: "Bateri automotif untuk penggantian harian dan bekalan perdagangan.",
    camelDesc: "Pilihan bateri yang sesuai untuk kereta penumpang dan keperluan biasa.",
    durocomDesc: "Pilihan praktikal untuk bengkel, peniaga, dan pelanggan runcit.",
    maxtecDesc: "Bekalan bateri untuk pemandu yang mencari pilihan penggantian yang boleh diharap.",
    serviceKicker: "Perkhidmatan",
    serviceTitle: "Sokongan bateri secara borong dan runcit.",
    serviceOne: "Bekalan pukal untuk pelanggan automotif",
    serviceTwo: "Pertanyaan penggantian bateri runcit",
    serviceThree: "Pilihan jenama merentasi beberapa rangkaian bateri",
    locationKicker: "Lawati kami",
    locationTitle: "Berada di Bukit Mertajam, Pulau Pinang.",
    openMap: "Buka dalam Google Maps",
    contactKicker: "Hubungi",
    contactTitle: "Hubungi kami untuk bekalan bateri.",
    phoneLabel: "Telefon",
    emailLabel: "E-mel",
    emailPending: "epmmarketing2818@gmail.com",
    companyLabel: "Syarikat",
    footerText: "Borong dan runcit bateri automotif di Pulau Pinang, Malaysia."
  }
};

const languageNames = {
  en: "English",
  zh: "简体中文",
  ms: "Bahasa Melayu"
};

function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.setAttribute("title", languageNames[button.dataset.lang]);
  });
  applyEmail();
  localStorage.setItem("epm-language", lang);
}

function applyEmail() {
  const email = companyEmail.trim();
  document.querySelectorAll("[data-email-display]").forEach((element) => {
    if (email) {
      element.textContent = email;
    }
  });
  document.querySelectorAll("[data-email-link]").forEach((element) => {
    if (email) {
      element.setAttribute("href", `mailto:${email}`);
    } else {
      element.removeAttribute("href");
    }
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(localStorage.getItem("epm-language") || "en");
