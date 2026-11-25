// No JSX or React imports needed here, we'll provide the component names for rendering
export const servicesData = [
    {
        iconName: "Bot",
        title: "Yapay Zekâ ve LLM Uygulamaları",
        description: "Google Gemini API ile LLM tabanlı uygulamalar geliştiriyorum. Prompt mühendisliği, sistem talimatları ve kısıtlamalarla (guardrails) konu dışına çıkmayan, kurumsal dilde yanıt veren asistanlar kuruyorum. TÜBİTAK projesinde NLP tabanlı bilgi çıkarımı üzerinde çalışıyorum."
    },
    {
        iconName: "Server",
        title: "Backend ve API Geliştirme",
        description: "Python ve FastAPI ile REST API'ler yazıyorum. Pydantic ile veri doğrulama, merkezi hata yönetimi, loglama, pytest testleri ve Swagger/OpenAPI dokümantasyonu ile servisleri canlıya hazır hale getiriyorum."
    },
    {
        iconName: "Globe",
        title: "Web Geliştirme",
        description: "HTML, CSS, JavaScript, React ve Tailwind CSS ile mobil uyumlu web arayüzleri geliştiriyorum. Üniversitemin Mezun ve Kariyer Ağı Platformu'nun baş geliştiricisiyim."
    },
    {
        iconName: "Smartphone",
        title: "Mobil Uygulama",
        description: "React Native, Expo ve TypeScript ile tip güvenli, modüler mobil uygulamalar geliştiriyorum. Yakın çevreye özel sosyal medya uygulaması Nistopia bu alandaki projem."
    },
    {
        iconName: "Database",
        title: "Veritabanı ve Masaüstü Uygulamalar",
        description: "SQL, SQLite, MongoDB ve Firebase ile çalışıyorum. Python (PyQt5/Qt Designer) ve C# ile veritabanı destekli masaüstü uygulamalar geliştirdim."
    },
    {
        iconName: "Network",
        title: "Ağ ve Donanım Temelleri",
        description: "Cisco CCNA: Introduction to Networks sertifikasıyla IP adresleme, Ethernet ve anahtarlama temellerine sahibim. Sayısal tasarım, mikroişlemciler ve Arduino ile donanım tarafında da deneyimliyim."
    }
];

export const skillGroups = [
    {
        title: "Programlama Dilleri",
        items: ["Python", "C#", "Java", "JavaScript", "TypeScript", "SQL"]
    },
    {
        title: "Yapay Zekâ ve Veri",
        items: ["LLM Entegrasyonu (Google Gemini API)", "Prompt Mühendisliği", "Doğal Dil İşleme (NLP)", "Makine Öğrenmesi", "Scikit-learn", "Veri Analizi"]
    },
    {
        title: "Backend",
        items: ["FastAPI", "REST API", "Pydantic", "pytest", "Swagger/OpenAPI"]
    },
    {
        title: "Frontend ve Mobil",
        items: ["HTML5", "CSS3", "React", "Tailwind CSS", "React Native", "Expo"]
    },
    {
        title: "Veritabanları",
        items: ["SQL", "SQLite", "MongoDB", "Firebase"]
    },
    {
        title: "Araçlar ve Diğer",
        items: ["Git", "GitHub", "Render", "Vercel", "PyQt5 / Qt Designer", "MATLAB", "Arduino", "Autodesk Fusion"]
    }
];

export const experienceData = [
    {
        iconName: "Briefcase",
        title: "Yazılım Geliştirme Stajyeri",
        organization: "Tinus Technologies",
        date: "Temmuz 2026 – Eylül 2026",
        points: [
            "FEA (Sonlu Elemanlar Analizi), mühendislik simülasyonları ve şirketin hizmetleri hakkındaki müşteri sorularını yanıtlayan LLM tabanlı destek chatbotunu Python, FastAPI ve Google Gemini API ile geliştirdim.",
            "Soruları önce yerel SSS veri setinde arayıp bulunamazsa LLM'e yönlendiren hibrit bir yapı kurarak API kullanımını azalttım ve ücretsiz kota sınırları içinde kaldım.",
            "Servisi GitHub tabanlı sürekli dağıtımla Render'da canlıya aldım; pytest testleri, Swagger/OpenAPI dokümantasyonu ve UptimeRobot izlemesi kurup ekibe canlı demo ile sundum."
        ]
    },
    {
        iconName: "FlaskConical",
        title: "Proje Araştırmacısı",
        organization: "TÜBİTAK Araştırma Projesi – Merkezi Hücre Hattı Bilgi Merkezi",
        date: "Devam ediyor",
        points: [
            "Hücre hattı verilerini toplayan, standartlaştıran ve yöneten web tabanlı sistemin geliştirilmesinde görev alıyorum.",
            "NLP tabanlı bilgi çıkarımını manuel veri girişiyle birleştirerek MIAB standartlarına uygun yapılandırılmış kayıtlar oluşturulması üzerinde çalışıyorum."
        ]
    },
    {
        iconName: "Users",
        title: "Baş Geliştirici",
        organization: "Balıkesir Üniversitesi Mezun ve Kariyer Ağı Platformu",
        date: "Devam ediyor",
        points: [
            "Öğrencileri ve mezunları buluşturan web platformunun geliştirilmesine liderlik ediyorum.",
            "7+1 ve zorunlu staj ilanları için duyuru özelliklerini ve öğrenci–mezun arasında e-posta ile doğrudan iletişimi geliştirdim."
        ]
    }
];

export const activitiesData = [
    "Başkan Yardımcısı – Yörük Türkmen Kültürünü Araştırma Topluluğu, Balıkesir Üniversitesi",
    "Üye – Balıkesir Üniversitesi Yapay Zekâ Takımı",
    "İçerik Üreticisi – Huawei Student Developers (HSD) Medium Komitesi; teknik makaleler yazıyorum"
];

export const certificatesData = [
    "CCNA: Introduction to Networks – Cisco Networking Academy (Nisan 2026)",
    "Arduino ile temel elektronik ve programlama eğitimi sertifikası"
];

export const portfolioCategories = ['Hepsi', 'Yapay Zekâ', 'Web', 'Mobil', 'Görsel Programlama', 'Araştırmalar'];

export const portfolioData = [
    {
        image: "",
        iconName: "Bot",
        title: "Tinus Destek Asistanı",
        categories: ["Yapay Zekâ", "Web", "Python", "FastAPI", "Google Gemini API"],
        link: "",
        description: "Tinus Technologies stajımda geliştirdiğim, müşteri sorularını yanıtlayan LLM tabanlı destek chatbotu. Hibrit SSS + LLM yapısı, guardrails, Pydantic doğrulama, pytest testleri ve Render üzerinde canlı dağıtım içerir."
    },
    {
        image: "",
        iconName: "Smartphone",
        title: "Nistopia",
        categories: ["Mobil", "React Native", "Expo", "TypeScript"],
        link: "",
        description: "Davet koduyla katılınan gruplarda (arkadaş, aile) fotoğraf ve video paylaşımı ile sohbet sunan, yakın çevreye özel sosyal medya mobil uygulaması."
    },
    {
        image: "",
        iconName: "Users",
        title: "Mezun ve Kariyer Ağı Platformu",
        categories: ["Web"],
        link: "",
        description: "Balıkesir Üniversitesi öğrencilerini ve mezunlarını buluşturan web platformu. 7+1 ve zorunlu staj ilanı duyuruları ile öğrenci–mezun e-posta iletişimi içerir. Baş geliştirici olarak liderlik ediyorum."
    },
    {
        image: "",
        iconName: "FlaskConical",
        title: "Merkezi Hücre Hattı Bilgi Merkezi",
        categories: ["Yapay Zekâ", "Web", "Araştırmalar", "TÜBİTAK"],
        link: "",
        description: "TÜBİTAK destekli araştırma projesi. Hücre hattı verilerini NLP tabanlı bilgi çıkarımı ve manuel veri girişiyle MIAB standartlarına uygun yapılandırılmış kayıtlara dönüştüren web tabanlı sistem."
    },
    {
        image: "https://static-cse.canva.com/blob/1349047/portfolyo-hazirlama-Canva.jpg",
        title: "Portfolyo Sitesi",
        categories: ["Web", "React", "Tailwind CSS"],
        link: "https://github.com/nisaulucay/portfolio_project",
        description: "React ve Tailwind CSS kullanılarak geliştirilen kişisel portfolyo sitesi. Mobil uyumlu ve modern tasarımlıdır."
    },
    {
        image: "",
        iconName: "Home",
        title: "Prefabrik Ev Tanıtım Web Uygulaması",
        categories: ["Web"],
        link: "",
        description: "Prefabrik ev modellerini ve proje detaylarını dinamik içerik yönetimiyle sunan, mobil uyumlu web uygulaması."
    },
    {
        image: "https://r.resimlink.com/qc9LaD0iF.jpg",
        title: "Shopping App",
        categories: ["Python", "Qt Designer", "Database", "Görsel Programlama"],
        link: "https://github.com/nisaulucay/shopping_app",
        description: "PyQt5 ile geliştirilen alışveriş uygulaması. SQLite veritabanı desteği ve kullanıcı dostu arayüz içerir."
    },
    {
        image: "https://i.sozcu.com.tr/wp-content/uploads/2019/12/12/20.jpg",
        title: "Soru Bankası Uygulaması",
        categories: ["Python", "Qt Designer", "Database", "Excel", "Görsel Programlama"],
        link: "https://github.com/nisaulucay/question_book_app",
        description: "Konu bazlı soru ekleme, Excel'den veri alma ve kullanıcıya özel sınav hazırlama özellikleri içerir."
    },
    {
        image: "https://www.scribbr.co.uk/wp-content/uploads//2020/02/simple-linear-regression-in-r-graph-example.png",
        title: "Linear Regression",
        categories: ["Kaggle", "Yapay Zekâ", "Machine Learning"],
        link: "https://github.com/nisaulucay/linear_regression",
        description: "Kaggle veri setiyle tek değişkenli lineer regresyon modeli eğitildi. Python ve Scikit-learn kullanıldı."
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1120/1*nDmyGg7JbDQJlfkR13hkKw.png",
        title: "Multiple Linear Regression",
        categories: ["Kaggle", "Yapay Zekâ", "Machine Learning"],
        link: "https://github.com/nisaulucay/multiple_linear_regression",
        description: "Çoklu değişkenli regresyon projeleri, performans karşılaştırmaları ve model görselleştirmeleri içerir."
    },
    {
        image: "https://help.solidworks.com/2019/turkish/SolidWorks/cworks/fet1450460443243.image",
        title: "Newton-Raphson Yöntemi Araştırması",
        categories: ["Numerical Analysis", "MATLAB", "Araştırmalar"],
        link: "/numerik_analiz.pdf",
        description: "Düzeltilmiş Newton-Raphson yöntemi MATLAB ile araştırıldı ve uygulandı. Karşılaştırmalı analiz içerir."
    }
];


export const contactInfo = [
    {
        iconName: "MapPin",
        title: "Konum",
        value: "Balıkesir, Türkiye"
    },
    {
        iconName: "Mail",
        title: "Email",
        value: "hayrunnisaulucay@gmail.com",
        href: "mailto:hayrunnisaulucay@gmail.com"
    },
    {
        iconName: "Phone",
        title: "Telefon",
        value: "+90 05** *** ** **"
    }
];

export const socialMediaLinks = [
    {
        iconName: "Linkedin",
        link: "https://www.linkedin.com/in/nisa-ulu%C3%A7ay-49515b388",
        label: "LinkedIn"
    },
    {
        iconName: "Github",
        link: "https://github.com/nisaulucay",
        label: "GitHub"
    },
    {
        iconName: "PenLine",
        link: "https://medium.com/@hayrunnisaulucay",
        label: "Medium"
    },
    {
        iconName: "Instagram",
        link: "https://www.instagram.com/nisaulucay1/?next=%2F",
        label: "Instagram"
    },
    {
        iconName: "Twitter",
        link: "https://x.com/NisaUlucay1",
        label: "Twitter"
    }
];
