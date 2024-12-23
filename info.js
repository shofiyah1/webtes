let info = {
  name: "Shofiyah",
  logo_name: "Shofiyah",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "hey there, I am a fresh graduate of Informatics Engineering from Politeknik Negeri Bandung, passionate about making impactful contributions as a software developer. My primary interest lies in web development, with a strong focus on Front-End development. I enjoy creating intuitive and visually appealing user interfaces and have hands-on experience. While my focus is on Front-End development, I am also keenly interested in exploring other areas including Back-End development, System Quality Assurance, System Analysis, UI/UX Design, Database Engineering, and IT Support. This broad interest allows me to understand and contribute to various facets of software development and IT solutions.",
  links: {
    linkedin: "https://www.linkedin.com/in/shofiyah-1b5412329/",
    github: "https://github.com/shofiyah1",
    resume: "https://drive.google.com/file/d/1LrIihNVvomlXVWNz_B0jMRI--Mv2KBGf/view?usp=sharing",
  },
  education: [
    {
      name: "Politeknik Negeri Bandung",
      place: "Bandung",
      date: "aug, 2021 - jul, 2024",
      degree: "associate degree in Informatics Engineering",
      gpa: "3.45/4.00",
      description:
        "",
      skills: [
        "Software Engineering",
        "Web Programming",
        "UI/UX Design",
        "Front-End Developer",
        "Software Quality Assurance",
        "Web Tester",
      ]
    },
  ],
  experience: [
    {
      name: "Velocite Technology",
      place: "Bandung",
      date: "jun, 2023 - sep, 2023",
      position: "Front-End Web Developer Intern",
      description:
        "",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Json", "JavaSript", "TypeSript","VueJS", "Vue 3", "Vue 2", "Tailwind CSS", "Nuxt.js","Nuxt 3"]
    }
  ],
  skills: [
    {
      title: "Tools",
      info: ["UML (Draw.io)", "Visual Studio Code","Git","Github","Gitlab","Figma","Trello","Godot Engine","Blender","Android Studio","Postman","Selenium","Photoshop", "Ms. Office"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Language",
      info: [
        "C","C++","PHP","Python","JavaScript","TypeScript","Java","Dart","GDScript","Ruby"],
      icon: "fa fa-code"
    },
    {
      title: "Databases",
      info: [
        "MySQL","PostgreSQL","OracleDB","MongoDB"],
      icon: "fa fa-cubes"
    },
    {
      title: "Frameworks",
      info: ["Node.js", "Vue.js", "React","Spring","Laravel","CodeIgniter","Ruby on Rails","Flutter"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio: [
    {
      name: "Kuisioner Kinerja Jawa Barat",
      pictures: [
        {
          img: require("./src/assets/portfolio/kuesioner/kuesioner1.png")
        },
        {
          img: require("./src/assets/portfolio/kuesioner/kuesioner2.png")
        },
        {
          img: require("./src/assets/portfolio/kuesioner/kuesioner3.png")
        },
      ],
      technologies: ["Vue.js", "Nuxt 3", "Tailwind CSS"],
      category: "Web App",
      date: "Jun, 2023 - 2 Months",
      description:
        "Aplikasi ini untuk memantau dan menilai kinerja Aparatur Sipil Negara (ASN) di lingkungan Pemerintah Provinsi Jawa Barat. Melalui TRK, ASN dapat mengisi kuisioner terkait aktivitas harian, penilaian perilaku, dan review sejawat, yang berpengaruh pada penentuan tunjangan kinerja mereka."
    },
    {
      name: "E-Penghargaan Jawa Barat",
      pictures: [
        {
          img: require("./src/assets/portfolio/penghargaan/penghargaan1.png")
        },
        {
          img: require("./src/assets/portfolio/penghargaan/penghargaan2.png")
        },
        {
          img: require("./src/assets/portfolio/penghargaan/penghargaan3.png")
        },
        {
          img: require("./src/assets/portfolio/penghargaan/penghargaan4.png")
        },
        
      ],
      technologies: ["Vue.js", "Nuxt 3", "Tailwind CSS"],
      category: "Web App",
      date: "Aug, 2023 - 2 Months",
      github: "https://github.com/shofiyah1/e-penghargaan-fe",
      description:
        "Aplikasi yang digunakan untuk seleksi dan penilaian Pegawai Negeri Sipil (PNS) berprestasi di lingkungan Pemerintah Provinsi Jawa Barat. Melalui aplikasi ini, PNS dapat mendaftar dan mengikuti seleksi penghargaan"
    },
    {
      name: "Lolos Pendanaan PKM 2023",
      pictures: [
        {
          img: require("./src/assets/portfolio/pkm/pkm.png")
        },
      ],
      technologies: ["Flutter", "Dart", "Android Studio"],
      category: "Mobile App",
      date: "2023",
      github:
        "https://github.com/shofiyah1/beauthree-fe",
      description:
        "Penerapan Sistem Tugas pada Aplikasi Mobile menggunakan Teknologi Flutter untuk Meningkatkan Efektivitas Pengaturan dan Penyelesaian Tugas Mingguan."
    },
    {
      name: "Tugas Akhir D3",
      pictures: [
        {
          img: require("./src/assets/portfolio/tugasakhir/duta1.png")
        },
        {
          img: require("./src/assets/portfolio/tugasakhir/duta2.png")
        },
        {
          img: require("./src/assets/portfolio/tugasakhir/duta3.png")
        },
        {
          img: require("./src/assets/portfolio/tugasakhir/duta4.png")
        },
      ],
      technologies: ["Laravel", "PHP", "TriPay", "MySQL"],
      category: "Web App",
      date: "Jan, 2024 - 4 Months",
      description:
        "Aplikasi Penjualan Voucher Wifi RT/RW Net Menggunakan Payment Gateway TriPay"
    },
    {
      name: "Restaurant App",
      pictures: [
        {
          img: require("./src/assets/portfolio/restaurant/resto.png")
        },
      ],
      technologies: ["Vue 3", "CSS", "Vuetify"],
      category: "Web App",
      date: "2022",
      github:
        "https://github.com/shofiyah1/FrontEnd-Geopark-Vue",
      description:
        "Aplikasi Restaurant"
    },
    {
      name: "Konsolidasi Data Kominfo",
      pictures: [
        {
          img: require("./src/assets/portfolio/konsolidasi/konsolidasi.png")
        },
      ],
      technologies: ["Vue 2","CSS"],
      category: "Web App",
      date: "Juni, 2023 - 7 days",
      description:
        "Dashboard Konsolidasi Data Kominfo"
    },
    {
      name: "Galaxy Attack Game",
      pictures: [
        {
          img: require("./src/assets/portfolio/godot/godot1.png")
        },
        {
          img: require("./src/assets/portfolio/godot/godot2.png")
        },
        {
          img: require("./src/assets/portfolio/godot/godot3.png")
        },
        {
          img: require("./src/assets/portfolio/godot/godot4.png")
        },
      ],
      technologies: ["GDScript", "Godot Engine", "Blender"],
      category: "Game",
      date: "2022",
      github:
        "https://github.com/shofiyah1/GalaxyAttack-Godot",
      visit: "https://www.youtube.com/watch?v=g5AuOKo5qXc&t=111s",
      description:
        "Game yang bertema mengendalikan pesawat dan melindungi galaksi dari kawanan alien dan musuh lainnya."
    },
  ],
};

export default info;
