// No JSX or React imports needed here, we'll provide the component names for rendering
export const servicesData = [
    {
        iconName: "Paintbrush",
        title: "Göresel Programlama/Qt Designer",
        description: "Görsel programlama ve QT Designer ile uygulamalar geliştiriyorum."
    },
    {
        iconName: "Code",
        title: "Arduino ve Gömülü Sistemler",
        description: "Donanım ve yazılımın birleştiği projelerde çalışmaktan keyif alıyorum. Arduino ile temel seviye devre tasarımı, sensör kullanımı eğitimi aldım. "
    },
    {
        iconName: "Zap",
        title: "Elektrik Devreleri ve Sayısal Tasarım",
        description: "Temel ve ileri düzey elektrik devreleri analizinde teorik ve uygulamalı bilgiye sahibim. Sayısal elektronik, mantık devreleri, kombinasyonel ve ardışıl devre tasarımı konularında deneyimliyim.Devre şemaları çizimi, simülasyon ve devre oluşturma konularında da yetkinliğim bulunmaktadır."

    },
    {
        iconName: "Palette",
        title: "Frontend",
        description: "Modern teknolojilerle kullanıcı dostu ve dinamik web arayüzleri geliştirmekten keyif alıyorum. Gerçek projelerle deneyim kazanarak, hem kullanıcı deneyimini hem de tasarım detaylarını ön planda tutan uygulamalar oluşturmaya özen gösteriyorum."
    },
    {
        iconName: "Cpu",
        title: "Yapay Zeka",
        description: "Yapay zeka alanında lineer regresyon, çoklu regresyon ve farklı algoritmalar üzerinde çalışmalar yaparak bu alandaki bilgi ve becerilerimi sürekli geliştiriyorum. "
    },
    {
        iconName: "BarChart3",
        title: "Mühendislik Matematiği ve Analitik Düşünme",
        description: "Lineer cebir, diferansiyel denklemler, istatistik, olasılık ve regresyon analizi gibi mühendislik matematiği konularında sağlam bir altyapıya sahibim. Bu bilgi birikimini, yazılım projelerinde algoritma geliştirme, veri analizi ve problem çözme süreçlerinde etkin bir şekilde kullanıyorum. Matematiksel modelleme ve analitik düşünme yeteneğim sayesinde, teknik problemlere sistematik ve çözüm odaklı yaklaşmayı benimsiyorum."
    }
];

export const skillsData = [
    {
        name: "C#",
        percentage: 75
    },
    {
        name: "Python",
        percentage: 65

    },
    {
        name: "HTML/CSS",
        percentage: 60
    },
    {
        name: "JavaScript",
        percentage: 55
    },

    {
        name: "Arduino",
        percentage: 55
    },
    {
        name: "AutoDesk Fusion",
        percentage: 90
    }
];

export const portfolioCategories = ['Hepsi', 'Görsel Programlama', 'Web', 'Regresyon', 'Araştırmalar'];

export const portfolioData = [
    {
        image: "https://static-cse.canva.com/blob/1349047/portfolyo-hazirlama-Canva.jpg",
        title: "Portfolyo Sitesi",
        categories: ["Web", "React", "Öğrenci Projesi"],
        link: "https://github.com/nisaulucay/portfolio_project",
        description: "React ve Tailwind CSS kullanılarak geliştirilen kişisel portfolyo sitesi. Mobil uyumlu ve modern tasarımlıdır."
    },
    {
        image: "https://segwitz.com/wp-content/uploads/2023/09/shopping-mobile-apps-scaled-1.jpg",
        title: "Shopping App",
        categories: ["Python", "Qt Designer", "Database","Görsel Programlama"],
        link: "https://github.com/nisaulucay/shopping_app",
        description: "PyQt5 ile geliştirilen alışveriş uygulaması. SQLite veritabanı desteği ve kullanıcı dostu arayüz içerir."
    },
    {
        image: "https://help.solidworks.com/2019/turkish/SolidWorks/cworks/fet1450460443243.image",
        title: "Newton-Raphson Yöntemi Araştırması",
        categories: ["Numerical Analysis", "MATLAB","Araştırmalar"],
        link: "/numerik_analiz.pdf",
        description: "Düzeltilmiş Newton-Raphson yöntemi MATLAB ile araştırıldı ve uygulandı. Karşılaştırmalı analiz içerir."
    },
    {
        image: "https://www.scribbr.co.uk/wp-content/uploads//2020/02/simple-linear-regression-in-r-graph-example.png",
        title: "Linear Regression",
        categories: ["Kaggle", "Yapay Zeka", "Machine Learning","Regresyon"],
        link: "https://github.com/nisaulucay/linear_regression",
        description: "Kaggle veri setiyle tek değişkenli lineer regresyon modeli eğitildi. Python ve Scikit-learn kullanıldı."
    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1120/1*nDmyGg7JbDQJlfkR13hkKw.png",
        title: "Multiple Linear Regression",
        categories: ["Kaggle", "Yapay Zeka", "Machine Learning","Regresyon"],
        link: "https://github.com/nisaulucay/multiple_linear_regression",
        description: "Çoklu değişkenli regresyon projeleri, performans karşılaştırmaları ve model görselleştirmeleri içerir."
    },
    {
        image: "https://i.sozcu.com.tr/wp-content/uploads/2019/12/12/20.jpg",
        title: "Soru Bankası Uygulaması",
        categories: ["Python", "Qt Designer", "Database", "Excel","Görsel Programlama"],
        link: "https://github.com/nisaulucay/question_book_app",
        description: "Konu bazlı soru ekleme, Excel'den veri alma ve kullanıcıya özel sınav hazırlama özellikleri içerir."
    }
];


export const contactInfo = [
    {
        iconName: "MapPin",
        title: "Konum",
        value: "Balıkesir,Türkiye"
    },
    {
        iconName: "Mail",
        title: "Email",
        value: "hayrunnisaulucay@gmail.com"
    },
    {
        iconName: "Phone",
        title: "Telefon",
        value: "+90 0553 913 67 37"
    }
];

export const socialMediaLinks = [
    {
        iconName: "Linkedin",
        link: "https://linkedin.com",
        label: "LinkedIn"
    },
    {
        iconName: "Facebook",
        link: "https://www.facebook.com/",
        label: "Facebook"
    },
    {
        iconName: "Instagram",
        link: "https://www.instagram.com/nisaulucay1/?next=%2F",
        label: "Instagram"
    },
    {
        iconName: "Github",
        link: "https://github.com/nisaulucay",
        label: "GitHub"
    },
    {
        iconName: "Twitter",
        link: "https://x.com/NisaUlucay1",
        label: "Twitter"
    }
];