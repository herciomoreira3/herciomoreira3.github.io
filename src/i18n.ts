export const languageOptions = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Indonesia", short: "ID" },
  { code: "tet", label: "Tetun", short: "TET" },
] as const;

export type LanguageCode = (typeof languageOptions)[number]["code"];

export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      resume: "Resume",
      tools: "Tools",
      contact: "Contact",
    },
    hero: {
      status: "Open to collaboration",
      bio: "Informatics Engineering undergraduate at the National University of Timor-Leste, focused on practical software, IoT, and IT support solutions for real community problems.",
      roles: ["IT Support Engineer", "Mobile Apps Developer", "Software Engineer", "IoT Developer"],
      viewProjects: "View Projects",
      github: "GitHub",
      whatsapp: "WhatsApp",
      cv: "CV",
      verified: "Verified profile",
    },
    stats: ["Projects", "Focus Area", "Support Depth"],
    tech: {
      kicker: "Tech Stack",
    },
    projects: {
      kicker: "Work",
      title: "Projects",
      subtitle: "Selected systems across IoT, mobile apps, IT support, civic software, and community tools.",
      githubRepo: "GitHub Repo",
      auto: "Auto",
      viewCaseStudy: "View Case Study",
    },
    resume: {
      kicker: "Resume",
      title: "Experience & Education",
      subtitle: "Hands-on work across IT support, IoT deployments, software systems, and media production.",
      languagesTitle: "Languages",
      items: {
        "soi-cbr-iot": {
          period: "2025 - Present",
          title: "IT Support & IoT Project Contributor",
          organization: "SOI Asia - Community-Based Research IoT Project Team Timor-Leste",
          description:
            "Contributor to an international IoT project focused on practical water-management solutions for Timor-Leste communities.",
          highlights: [
            "Added Tetun and Portuguese language support to improve accessibility for local users.",
            "Supported IoT device deployment, sensor configuration, and communication module setup.",
            "Troubleshot real-time data communication, connectivity, and transmission issues.",
            "Worked with mobile, cloud, and embedded components during prototype testing.",
          ],
        },
        "ratalolo-secoms": {
          period: "2022 - 2023",
          title: "Producer & Editor",
          organization: "Ratalolo Team for Secretario Estado Comunicacao Social (SECOMS)",
          description:
            "Led documentary production and editing work with a focus on cultural storytelling and timely delivery.",
          highlights: [
            "Coordinated project concepts, scripts, and shooting schedules.",
            "Managed editing, sound mixing, color correction, and subtitles.",
            "Improved video quality and narrative flow through post-production.",
          ],
        },
        "untl-engineering": {
          period: "2020 - 2026",
          title: "Bachelor's Degree of Engineering",
          organization: "National University of Timor-Leste (UNTL)",
          description:
            "Undergraduate Informatics Engineering student focused on information systems, IoT, mobile apps, and applied technical problem-solving.",
          highlights: [
            "Built a Workshop Management Information System in semesters 4 and 5.",
            "Developed a Public Complaint Information System and performed student-grade predictive analysis in semesters 6 and 7.",
            "Designed an IoT-based water quality monitoring system for Nile tilapia ponds as a final-year capstone.",
          ],
        },
        "eti-baucau": {
          period: "2016 - 2018",
          title: "High School",
          organization: "ETI - Baucau",
          description: "Completed high school education with a focus on informatics and technical studies.",
          highlights: [
            "Built an online voting information system for student council president election.",
            "Developed foundational skills in computer science, software development, and technical problem-solving.",
          ],
        },
      },
      languageRows: [
        { label: "Tetun", value: "Native" },
        { label: "English", value: "Proficient" },
        { label: "Bahasa Indonesia", value: "Proficient" },
      ],
    },
    toolbox: {
      kicker: "Toolbox",
      title: "Tools",
      subtitle: "Useful entry points for live projects, repository updates, and app downloads.",
      sipolaiTitle: "SIPOLAI Live Demo",
      sipolaiText:
        "Population data management system for Suku Laisorolai de Baixo, built with CodeIgniter 4 and hosted on Render.",
      openDemo: "Open Live Demo",
      testoraTitle: "Testora Android App",
      testoraText:
        "Download the online exam mobile app release from GitHub. Choose the APK that matches the Android device architecture.",
      android32: "Android 32-bit",
      android32Hint: "Android 1.0 to 4.4",
      android64: "Android 64-bit",
      android64Hint: "Android 5.0 and newer",
      repoTitle: "Repository Pulse",
      repoText: (count: number, date: string) => `${count} public repositories are indexed. Latest refresh: ${date}.`,
      notSynced: "Not synced yet",
    },
    contact: {
      kicker: "Get In Touch",
      title: "Let's Build Together",
      subtitle: "Open to collaborations, freelance projects, IT support work, and IoT/software discussions.",
      emailMe: "Email Me",
      whatsapp: "WhatsApp",
    },
    dialog: {
      close: "Close project details",
      problem: "Problem",
      features: "Key Features",
      technical: "Technical Implementation",
      benefits: "Benefits",
    },
    footer: {
      rights: "All Rights Reserved.",
      built: "Built with React, TypeScript, and GitHub-powered content.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      projects: "Proyek",
      resume: "Resume",
      tools: "Tools",
      contact: "Kontak",
    },
    hero: {
      status: "Terbuka untuk kolaborasi",
      bio: "Mahasiswa Informatics Engineering di National University of Timor-Leste, berfokus pada software praktis, IoT, dan solusi IT support untuk masalah nyata di komunitas.",
      roles: ["IT Support Engineer", "Pengembang Aplikasi Mobile", "Software Engineer", "Pengembang IoT"],
      viewProjects: "Lihat Proyek",
      github: "GitHub",
      whatsapp: "WhatsApp",
      cv: "CV",
      verified: "Profil terverifikasi",
    },
    stats: ["Proyek", "Fokus", "Level Support"],
    tech: {
      kicker: "Tech Stack",
    },
    projects: {
      kicker: "Karya",
      title: "Proyek",
      subtitle: "Sistem pilihan di bidang IoT, aplikasi mobile, IT support, civic software, dan tools komunitas.",
      githubRepo: "Repo GitHub",
      auto: "Auto",
      viewCaseStudy: "Lihat Case Study",
    },
    resume: {
      kicker: "Resume",
      title: "Pengalaman & Pendidikan",
      subtitle: "Pengalaman langsung di IT support, deployment IoT, sistem software, dan produksi media.",
      languagesTitle: "Bahasa",
      items: {
        "soi-cbr-iot": {
          period: "2025 - Sekarang",
          title: "IT Support & Kontributor Proyek IoT",
          organization: "SOI Asia - Tim Community-Based Research IoT Timor-Leste",
          description:
            "Berkontribusi dalam proyek IoT internasional yang berfokus pada solusi manajemen air praktis untuk komunitas di Timor-Leste.",
          highlights: [
            "Menambahkan dukungan bahasa Tetun dan Portugis agar aplikasi lebih mudah digunakan oleh pengguna lokal.",
            "Mendukung deployment perangkat IoT, konfigurasi sensor, dan setup modul komunikasi.",
            "Menangani troubleshooting komunikasi data real-time, masalah konektivitas, dan kegagalan transmisi.",
            "Bekerja dengan komponen mobile, cloud, dan embedded selama pengujian prototipe.",
          ],
        },
        "ratalolo-secoms": {
          period: "2022 - 2023",
          title: "Produser & Editor",
          organization: "Tim Ratalolo untuk Secretario Estado Comunicacao Social (SECOMS)",
          description:
            "Memimpin produksi dan editing dokumenter dengan fokus pada storytelling budaya dan penyelesaian tepat waktu.",
          highlights: [
            "Mengkoordinasikan konsep proyek, script, dan jadwal pengambilan gambar.",
            "Mengelola editing, sound mixing, color correction, dan subtitle.",
            "Meningkatkan kualitas video dan alur cerita melalui proses post-production.",
          ],
        },
        "untl-engineering": {
          period: "2020 - 2026",
          title: "Sarjana Teknik",
          organization: "National University of Timor-Leste (UNTL)",
          description:
            "Mahasiswa Informatics Engineering yang fokus pada sistem informasi, IoT, aplikasi mobile, dan pemecahan masalah teknis secara praktis.",
          highlights: [
            "Membangun Workshop Management Information System pada semester 4 dan 5.",
            "Mengembangkan Public Complaint Information System dan melakukan analisis prediktif nilai mahasiswa pada semester 6 dan 7.",
            "Merancang sistem monitoring kualitas air berbasis IoT untuk kolam ikan nila sebagai proyek akhir.",
          ],
        },
        "eti-baucau": {
          period: "2016 - 2018",
          title: "Sekolah Menengah",
          organization: "ETI - Baucau",
          description: "Menyelesaikan pendidikan sekolah menengah dengan fokus pada informatika dan studi teknis.",
          highlights: [
            "Membangun sistem informasi voting online untuk pemilihan ketua OSIS/dewan siswa.",
            "Mengembangkan dasar ilmu komputer, pengembangan software, dan pemecahan masalah teknis.",
          ],
        },
      },
      languageRows: [
        { label: "Tetun", value: "Native" },
        { label: "Inggris", value: "Mahir" },
        { label: "Bahasa Indonesia", value: "Mahir" },
      ],
    },
    toolbox: {
      kicker: "Toolbox",
      title: "Tools",
      subtitle: "Akses cepat ke live project, update repository, dan download aplikasi.",
      sipolaiTitle: "Live Demo SIPOLAI",
      sipolaiText:
        "Sistem manajemen data populasi untuk Suku Laisorolai de Baixo, dibuat dengan CodeIgniter 4 dan dihosting di Render.",
      openDemo: "Buka Live Demo",
      testoraTitle: "Aplikasi Android Testora",
      testoraText:
        "Unduh rilis aplikasi ujian online dari GitHub. Pilih APK sesuai arsitektur perangkat Android.",
      android32: "Android 32-bit",
      android32Hint: "Android 1.0 sampai 4.4",
      android64: "Android 64-bit",
      android64Hint: "Android 5.0 dan lebih baru",
      repoTitle: "Repository Pulse",
      repoText: (count: number, date: string) => `${count} repository public sudah terindeks. Refresh terakhir: ${date}.`,
      notSynced: "Belum tersinkron",
    },
    contact: {
      kicker: "Kontak",
      title: "Mari Bangun Sesuatu",
      subtitle: "Terbuka untuk kolaborasi, freelance, pekerjaan IT support, dan diskusi IoT/software.",
      emailMe: "Email Saya",
      whatsapp: "WhatsApp",
    },
    dialog: {
      close: "Tutup detail proyek",
      problem: "Masalah",
      features: "Fitur Utama",
      technical: "Implementasi Teknis",
      benefits: "Manfaat",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      built: "Dibuat dengan React, TypeScript, dan konten dari GitHub.",
    },
  },
  tet: {
    nav: {
      home: "Uma",
      projects: "Projetu",
      resume: "Resume",
      tools: "Tools",
      contact: "Kontaktu",
    },
    hero: {
      status: "Disponivel ba kolaborasaun",
      bio: "Estudante Informatics Engineering iha National University of Timor-Leste, fokus ba software praktiku, IoT, no solusaun IT support ba problema real iha komunidade.",
      roles: ["IT Support Engineer", "Dezenvolvedor Aplikasaun Mobile", "Software Engineer", "Dezenvolvedor IoT"],
      viewProjects: "Haree Projetu",
      github: "GitHub",
      whatsapp: "WhatsApp",
      cv: "CV",
      verified: "Perfil verifikadu",
    },
    stats: ["Projetu", "Foku", "Nivel Support"],
    tech: {
      kicker: "Tech Stack",
    },
    projects: {
      kicker: "Servisu",
      title: "Projetu",
      subtitle: "Sistema sira iha IoT, aplikasaun mobile, IT support, civic software, no tools ba komunidade.",
      githubRepo: "Repo GitHub",
      auto: "Auto",
      viewCaseStudy: "Haree Case Study",
    },
    resume: {
      kicker: "Resume",
      title: "Esperiensia & Edukasaun",
      subtitle: "Servisu praktiku iha IT support, deployment IoT, sistema software, no produsaun media.",
      languagesTitle: "Lian",
      items: {
        "soi-cbr-iot": {
          period: "2025 - Agora",
          title: "IT Support & Kontributor Projetu IoT",
          organization: "SOI Asia - Ekipa Community-Based Research IoT Timor-Leste",
          description:
            "Kontribui ba projetu IoT internasionál ne'ebe foku ba solusaun jestaun bee praktiku ba komunidade sira iha Timor-Leste.",
          highlights: [
            "Aumenta suporte lian Tetun no Portugues atu aplikasaun fasil liu ba uza-na'in lokál.",
            "Suporta deployment dispozitivu IoT, konfigurasaun sensor, no setup modulu komunikasaun.",
            "Halo troubleshooting ba komunikasaun dadus tempu-real, problema konektividade, no falla transmisaun.",
            "Servisu ho komponente mobile, cloud, no embedded durante teste prototipu.",
          ],
        },
        "ratalolo-secoms": {
          period: "2022 - 2023",
          title: "Produtor & Editor",
          organization: "Ekipa Ratalolo ba Secretario Estado Comunicacao Social (SECOMS)",
          description:
            "Lidera produsaun no edisaun dokumentariu ho foku ba storytelling kultura no entrega iha tempu.",
          highlights: [
            "Koordena konseitu projetu, script, no kalendariu filmagem.",
            "Jere edisaun, sound mixing, color correction, no subtitle.",
            "Hadiae kualidade video no fluxo istoria liu husi prosesu post-production.",
          ],
        },
        "untl-engineering": {
          period: "2020 - 2026",
          title: "Licensiatura iha Engenharia",
          organization: "National University of Timor-Leste (UNTL)",
          description:
            "Estudante Informatics Engineering ne'ebe foku ba sistema informasaun, IoT, aplikasaun mobile, no rezolusaun problema tekniku ho pratika.",
          highlights: [
            "Harii Workshop Management Information System iha semestre 4 no 5.",
            "Dezenvolve Public Complaint Information System no halo analize prediktivu ba nota estudante iha semestre 6 no 7.",
            "Projeta sistema monitorizasaun kualidade bee bazeia ba IoT ba kolam ikan nila hanesan projetu final.",
          ],
        },
        "eti-baucau": {
          period: "2016 - 2018",
          title: "Eskola Sekundaria",
          organization: "ETI - Baucau",
          description: "Kompleta edukasaun eskola sekundaria ho foku ba informatika no estudu tekniku.",
          highlights: [
            "Harii sistema votasaun online ba eleisaun prezidente konsellu estudante.",
            "Dezenvolve fundasaun iha computer science, dezenvolvimentu software, no rezolusaun problema tekniku.",
          ],
        },
      },
      languageRows: [
        { label: "Tetun", value: "Native" },
        { label: "Ingles", value: "Proficient" },
        { label: "Bahasa Indonesia", value: "Proficient" },
      ],
    },
    toolbox: {
      kicker: "Toolbox",
      title: "Tools",
      subtitle: "Dalan lalais ba live project, update repository, no download aplikasaun.",
      sipolaiTitle: "Live Demo SIPOLAI",
      sipolaiText:
        "Sistema manajementu dadus populasaun ba Suku Laisorolai de Baixo, harii ho CodeIgniter 4 no host iha Render.",
      openDemo: "Loke Live Demo",
      testoraTitle: "Aplikasaun Android Testora",
      testoraText:
        "Download release aplikasaun ezame online husi GitHub. Hili APK tuir arkitetura dispozitivu Android.",
      android32: "Android 32-bit",
      android32Hint: "Android 1.0 to'o 4.4",
      android64: "Android 64-bit",
      android64Hint: "Android 5.0 no foun liu",
      repoTitle: "Repository Pulse",
      repoText: (count: number, date: string) => `${count} repository publiku indexadu ona. Refresh ikus: ${date}.`,
      notSynced: "Seidauk sync",
    },
    contact: {
      kicker: "Kontaktu",
      title: "Mai Ita Harii Hamutuk",
      subtitle: "Disponivel ba kolaborasaun, projetu freelance, IT support, no diskusaun IoT/software.",
      emailMe: "Haruka Email",
      whatsapp: "WhatsApp",
    },
    dialog: {
      close: "Taka detalle projetu",
      problem: "Problema",
      features: "Fitur Prinsipal",
      technical: "Implementasaun Tekniku",
      benefits: "Benefisiu",
    },
    footer: {
      rights: "Direitu hotu rezervadu.",
      built: "Harii ho React, TypeScript, no konteudu husi GitHub.",
    },
  },
};

export type Translation = (typeof translations)["en"];
