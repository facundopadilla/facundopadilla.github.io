const siteDataByLang = {
  es: {
  achievements: [
    {
      title: "TOYP 2025 - JCI Salta",
      organization: "Reconocimiento",
      date: "29 de noviembre del 2025",
      description: "Una iniciativa internacional que reconoce a jóvenes que se destacan por su liderazgo, compromiso social y excelencia en distintos ámbitos del desarrollo provincial.",
      image: "toyp-premio.png",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/p/DRqY11BDKwt/?hl=es-la&img_index=2",
      category: "recognitions",
      pending: false
    },
    {
      title: "XVII Jornadas de Jóvenes Profesionales en Ciencias Económicas de Salta",
      organization: "Reconocimiento",
      date: "1 de noviembre del 2025",
      description: "Desarrollar competencias profesionales exigidas en el mercado laboral, con el fin de lograr una inserción y desempeño diferenciador, ético y actualizado en el ámbito de las ciencias económicas.",
      image: "cpces.png",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/p/DQmEOLeDbrp/?img_index=1",
      category: "recognitions",
      pending: false
    },
    {
      title: "Mención de honor a nivel nacional",
      organization: "Reconocimiento",
      date: "1 de diciembre del 2018",
      description: "Feria Nacional de Innovación Educativa Proyecto: \"IDENTIPS - IDENTIDAD DIGITAL\" EET N° 3117 Maestro Daniel Oscar Reyes.",
      image: "identips.jpg",
      linkLabel: "Ver más",
      link: "https://x.com/CienciaTecSalta/status/1068915403735347200/photo/1",
      category: "recognitions",
      pending: false
    },
    {
      title: "Olimpiadas de Programación Nacional - INET 2018",
      organization: "Reconocimiento",
      date: "10 de noviembre del 2018",
      description: "En conjunto con 3 alumnos (un ex-compañero y dos alumnos de Magdalena) desarrollamos un sistema de feed-lot con Arduino.",
      image: "inet2018.jpg",
      linkLabel: "Ver video",
      link: "https://www.youtube.com/watch?v=8KWX8vs9j3w",
      category: ["recognitions", "competitions"],
      pending: false
    },
    {
      title: "Blockchain Salta",
      organization: "Speaker",
      date: "19 de Septiembre de 2025",
      description: "Seguridad en Blockchain: Protegiendo tus wallets y tu identidad digital. Facundo Padilla y z1ro de @SaltaDev.",
      image: "seed-latam-salta.jpg",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/p/DO9c91Xj29Y/?img_index=1",
      category: ["speaker", "events"],
      pending: false
    },
    {
      title: "Sub0 Symbiosis - Arkiv track",
      organization: "Competencia",
      date: "14 de Noviembre de 2025",
      description: "Participamos en el evento con varios miembros de SaltaDev.",
      image: "sub0-arkiv.jpg",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/p/DO9c91Xj29Y/?img_index=1",
      category: ["competitions", "events"],
      pending: false
    },
    {
      title: "Hackathon del Milagro 2025",
      organization: "Organizador",
      date: "",
      description: "🐶🐱 Creá una mini app web para publicar animales perdidos/encontrados durante la Procesión del Milagro.",
      image: "hackathon-del-milagro.jpg",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/p/DOJVbElDb3M/",
      category: ["events", "hackathon", "competitions"],
      pending: false
    },
    {
      title: "Taller de empleabilidad con IA",
      organization: "Speaker",
      date: "25 de Julio del 2025",
      description: "Dimos un taller de empleabilidad junto a Marinés Diaz, Juan Gutierrez y Veronica Torres a más de 120 personas.",
      image: "taller-empleabilidad.jpg",
      linkLabel: "Ver más",
      link: "https://www.instagram.com/stories/highlights/18173656765337562/",
      category: ["speaker", "events"],
      pending: false
    },
    {
      title: "Feria Tecnológica de Salta y Construyendo mi Futuro (Jujuy)",
      organization: "Speaker",
      date: "2022",
      description: "Éste proyecto fue presentado como trabajo final para los estudiantes de “Construyendo mi futuro” en Jujuy y para la Feria Tecnológica de la Municipalidad de Salta (donde asistieron más de 100 personas).",
      image: "construyendo-mi-futuro.jpg",
      linkLabel: "Ver más",
      link: "https://blimop.tech/taller-construyendo-mi-futuro-edicion-2020/",
      category: ["speaker", "events"],
      pending: false
    }
  ],
  communities: [
    {
      name: "SaltaDev",
      role: "Founder",
      description: "Construcción de comunidad local, networking y espacios de aprendizaje.",
      link: "https://www.salta.dev.ar",
      icon: "saltadev.png"
    },
    {
      name: "Club Chicas Programadoras",
      role: "Mentor",
      description: "Acompañamiento, tutorías y apoyo a quienes inician en tecnología.",
      link: "https://www.chicasprogramadoras.club/",
      icon: "club.png"
    }
  ],
  communityMetrics: {
    members: 1000,
    events: 15,
    workshops: 3,
    sponsors: 15
  },
  experience: [
    {
      company: "Santander Tecnología Argentina",
      dates: "12/2022 - Actual",
      role: "SSR Software Engineer",
      bullets: [
        "Desarrollo de microservicios con FastAPI integrados con SonarQube y GitLab para control y monitoreo de calidad de +1.000 proyectos.",
        "“Botones mágicos 🧙‍♂️”: ejecutar tests (Cypress/Selenium/Newman) y performance (K6) vía pipelines y ver resultados.",
        "Charlas y workshops internos sobre testing y buenas prácticas.",
        "Mentor en Club Chicas Programadoras (13 a 17 años).",
        "Colaboración en app corporativa para Santander España junto a equipo de Brasil."
      ],
      link: "https://www.chicasprogramadoras.club/"
    },
    {
      company: "HealthyTek SpA",
      dates: "06/2023 - 09/2023",
      role: "Consultor y desarrollador",
      bullets: [
        "Freelance/contractor: bugs, refactors, deploys en prod, documentación.",
        "Proyectos: Flask, Django, HTML, CSS, JS, Firebase, Azure, etc."
      ],
      link: "https://www.healthytek.cl/"
    },
    {
      company: "Banza",
      dates: "03/2022 - 12/2022",
      role: "SSR Python Developer",
      bullets: [
        "Reinventamos el producto desde cero con equipos cross-funcionales.",
        "Botón “Dólar MEP a un click 💸” (desarrollo e integración).",
        "Tech: AWS (Cognito, DynamoDB, Lambda, SQS), FastAPI, MySQL, Docker."
      ],
      link: "https://banza.com.ar/"
    },
    {
      company: "Blimop",
      dates: "02/2021 - 03/2022",
      role: "SSR Python Developer (09/2021 - 03/2022) / Desarrollador Python (02/2021 - 09/2021)",
      bullets: [
        "Lideré migración de microservicios de SpringBoot a Python por costos/recursos.",
        "Integración ChatAPI en Beplic para reemplazar VMs que scrapeaban WhatsApp por webhooks.",
        "Taller “Construyendo mi futuro”.",
        "Staffing para cliente telco Uruguay: features en Flask, migración Python 2.7 a 3.6."
      ],
      link: "https://blimop.tech/",
      extraLink: "https://beplic.com/"
    }
  ],
  education: [
    {
      category: "Cursos extracurriculares",
      items: [
        { title: "Curso profesional de Scrum - Platzi", date: "06/2024", link: "" },
        { title: "Scrum Foundation Professional Certification - SFPC™", date: "06/2024", link: "https://www.credly.com/badges/6b3c58dd-e84b-4cde-be09-48871bfbff72/linked_in_profile" },
        { title: "Curso de Blockchain - UBP", date: "09/2023", link: "https://ss.ubp.edu.ar/TramitesCertificadosValidacion.do", note: "ID: A974-EB96-BD32-4034-8709-C603-CB7D-C770" },
        { title: "Gestión de calidad de código con SonarQube - Udemy", date: "01/2023", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3b0265ae-9a1c-49e1-966a-b0d4c5855070.pdf" },
        { title: "Curso profesional de arquitectura de software - Platzi", date: "09/2022", link: "https://platzi.com/p/facundopadilla/curso/1248-course/diploma/detalle/" },
        { title: "Fundamentos de Arquitectura de Software - Platzi", date: "08/2022", link: "https://platzi.com/p/facundopadilla/curso/1247-course/diploma/detalle/" },
        { title: "Curso de Docker, principiante a experto - Udemy", date: "01/2021", link: "https://www.udemy.com/certificate/UC-077efde6-c978-4825-afa4-4f674debbd85/" },
        { title: "Curso de Cloud Computing - Google", date: "12/2018", link: "https://learndigital.withgoogle.com/link/1nur091p2ww" },
        { title: "Mi primera empresa - BBVA", date: "11/2017", link: "https://drive.google.com/file/d/0Bwi253nujvHEdFBXdmZ4OFY3WmFUWFdWN2pQUklabHpDNS1n/view?usp=sharing" }
      ]
    },
    {
      category: "Educación secundaria técnica",
      items: [
        {
          title: "Escuela de educación técnica N 3117 Daniel Oscar Reyes - Salta",
          date: "03/2013 - 12/2018",
          bullets: [
            "Técnico informático profesional y personal",
            "Alumno destacado a nivel nacional (INET)",
            "Medalla de honor a nivel nacional (Feria Nacional de Ciencias, Córdoba)",
            "Primer lugar Feria de Ciencias ONIET (Córdoba)",
            "Reconocimiento Ministerio de Educación de Salta"
          ]
        }
      ]
    }
  ],
  skills: {
    hard: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Tests unitarios",
      "Tests funcionales",
      "Tests de integración",
      "Tests E2E",
      "Test de performance (K6)",
      "Tests automáticos (Playwright)",
      "TDD",
      "BDD (Behave)",
      "MySQL",
      "PostgreSQL",
      "SAST",
      "SonarQube",
      "Ubuntu",
      "Fedora",
      "Gitlab",
      "Github",
      "Docker",
      "OpenShift (client-use)",
      "AWS",
      "Heroku",
      "PythonAnywhere",
      "Bash",
      "PowerShell",
      "HTML",
      "CSS",
      "Javascript",
      "Selenium",
      "Postman",
      "REST",
      "Microservicios",
      "Monorepos",
      "Patrones de diseño",
      "SOLID",
      "Clean architecture",
      "OpenAPI",
      "SwaggerUI",
      "Pre-commit",
      "Devin",
      "Pawn"
    ],
    soft: ["Inglés (B1)", "SCRUM", "Agile", "XRay", "Jira", "Notion Workspaces"]
  },
  contacts: [
    { label: "LinkedIn", link: "https://www.linkedin.com/in/facundopadilla/" },
    { label: "GitHub", link: "https://github.com/facundopadilla" },
    { label: "Email", link: "mailto:facundo.padilla@correo.com" }
  ]
  },
  en: {
    achievements: [
      {
        title: "TOYP 2025 - JCI Salta",
        organization: "Recognition",
        date: "November 29, 2025",
        description: "An international initiative recognizing young leaders for their leadership, social commitment, and excellence across provincial development areas.",
        image: "toyp-premio.png",
        linkLabel: "View more",
        link: "https://www.instagram.com/p/DRqY11BDKwt/?hl=es-la&img_index=2",
        category: "recognitions",
        pending: false
      },
      {
        title: "XVII Conference of Young Professionals in Economic Sciences of Salta",
        organization: "Recognition",
        date: "November 1, 2025",
        description: "Develop professional skills demanded by the market to achieve differentiated, ethical, and up-to-date performance in economic sciences.",
        image: "cpces.png",
        linkLabel: "View more",
        link: "https://www.instagram.com/p/DQmEOLeDbrp/?img_index=1",
        category: "recognitions",
        pending: false
      },
      {
        title: "Honorary mention at national level",
        organization: "Recognition",
        date: "December 1, 2018",
        description: "National Educational Innovation Fair project: \"IDENTIPS - DIGITAL IDENTITY\" EET No. 3117 Maestro Daniel Oscar Reyes.",
        image: "identips.jpg",
        linkLabel: "View more",
        link: "https://x.com/CienciaTecSalta/status/1068915403735347200/photo/1",
        category: "recognitions",
        pending: false
      },
      {
        title: "National Programming Olympiad - INET 2018",
        organization: "Recognition",
        date: "November 10, 2018",
        description: "Together with three students (one former classmate and two students from Magdalena), we developed an Arduino-based feedlot system.",
        image: "inet2018.jpg",
        linkLabel: "Watch video",
        link: "https://www.youtube.com/watch?v=8KWX8vs9j3w",
        category: ["recognitions", "competitions"],
        pending: false
      },
      {
        title: "Blockchain Salta",
        organization: "Speaker",
        date: "September 19, 2025",
        description: "Blockchain security: protecting your wallets and digital identity. Facundo Padilla and z1ro from @SaltaDev.",
        image: "seed-latam-salta.jpg",
        linkLabel: "View more",
        link: "https://www.instagram.com/p/DO9c91Xj29Y/?img_index=1",
        category: ["speaker", "events"],
        pending: false
      },
      {
        title: "Sub0 Symbiosis - Arkiv track",
        organization: "Competition",
        date: "November 14, 2025",
        description: "We joined the event with several SaltaDev members.",
        image: "sub0-arkiv.jpg",
        linkLabel: "View more",
        link: "https://www.instagram.com/p/DO9c91Xj29Y/?img_index=1",
        category: ["competitions", "events"],
        pending: false
      },
      {
        title: "Hackathon del Milagro 2025",
        organization: "Organizer",
        date: "",
        description: "🐶🐱 Build a mini web app to post lost/found pets during the Milagro procession.",
        image: "hackathon-del-milagro.jpg",
        linkLabel: "View more",
        link: "https://www.instagram.com/p/DOJVbElDb3M/",
        category: ["events", "hackathon", "competitions"],
        pending: false
      },
      {
        title: "Employability workshop with AI",
        organization: "Speaker",
        date: "July 25, 2025",
        description: "We delivered an employability workshop with Marinés Diaz, Juan Gutierrez and Veronica Torres to 120+ attendees.",
        image: "taller-empleabilidad.jpg",
        linkLabel: "View more",
        link: "https://www.instagram.com/stories/highlights/18173656765337562/",
        category: ["speaker", "events"],
        pending: false
      },
      {
        title: "Salta Tech Fair and Building my Future (Jujuy)",
        organization: "Speaker",
        date: "2022",
        description: "This project was presented as the final work for students in “Building my future” in Jujuy and at the Salta Municipality Tech Fair (100+ attendees).",
        image: "construyendo-mi-futuro.jpg",
        linkLabel: "View more",
        link: "https://blimop.tech/taller-construyendo-mi-futuro-edicion-2020/",
        category: ["speaker", "events"],
        pending: false
      }
    ],
    communities: [
      {
        name: "SaltaDev",
        role: "Founder",
        description: "Building local community, networking and learning spaces.",
        link: "https://www.salta.dev.ar",
        icon: "saltadev.png"
      },
      {
        name: "Club Chicas Programadoras",
        role: "Mentor",
        description: "Guidance, tutoring and support for people starting in tech.",
        link: "https://www.chicasprogramadoras.club/",
        icon: "club.png"
      }
    ],
    communityMetrics: {
      members: 1000,
      events: 15,
      workshops: 3,
      sponsors: 15
    },
    experience: [
      {
        company: "Santander Tecnología Argentina",
        dates: "12/2022 - Present",
        role: "SSR Software Engineer",
        bullets: [
          "Built FastAPI microservices integrated with SonarQube and GitLab to monitor quality for 1,000+ projects.",
          "“Magic buttons 🧙‍♂️”: run tests (Cypress/Selenium/Newman) and performance (K6) via pipelines and review results.",
          "Internal talks and workshops on testing and best practices.",
          "Mentor at Club Chicas Programadoras (ages 13–17).",
          "Collaboration on corporate app for Santander Spain with Brazil team."
        ],
        link: "https://www.chicasprogramadoras.club/"
      },
      {
        company: "HealthyTek SpA",
        dates: "06/2023 - 09/2023",
        role: "Consultant and developer",
        bullets: [
          "Freelance/contractor: bugs, refactors, production deploys, documentation.",
          "Projects: Flask, Django, HTML, CSS, JS, Firebase, Azure, etc."
        ],
        link: "https://www.healthytek.cl/"
      },
      {
        company: "Banza",
        dates: "03/2022 - 12/2022",
        role: "SSR Python Developer",
        bullets: [
          "Rebuilt the product from scratch with cross‑functional teams.",
          "“MEP Dollar in one click 💸” button (development and integration).",
          "Tech: AWS (Cognito, DynamoDB, Lambda, SQS), FastAPI, MySQL, Docker."
        ],
        link: "https://banza.com.ar/"
      },
      {
        company: "Blimop",
        dates: "02/2021 - 03/2022",
        role: "SSR Python Developer (09/2021 - 03/2022) / Python Developer (02/2021 - 09/2021)",
        bullets: [
          "Led migration of microservices from SpringBoot to Python for cost/resource efficiency.",
          "Integrated ChatAPI into Beplic to replace VM-based WhatsApp scraping with webhooks.",
          "“Building my future” workshop.",
          "Staffing for telco client in Uruguay: Flask features, Python 2.7 to 3.6 migration."
        ],
        link: "https://blimop.tech/",
        extraLink: "https://beplic.com/"
      }
    ],
    education: [
      {
        category: "Extracurricular courses",
        items: [
          { title: "Professional Scrum course - Platzi", date: "06/2024", link: "" },
          { title: "Scrum Foundation Professional Certification - SFPC™", date: "06/2024", link: "https://www.credly.com/badges/6b3c58dd-e84b-4cde-be09-48871bfbff72/linked_in_profile" },
          { title: "Blockchain course - UBP", date: "09/2023", link: "https://ss.ubp.edu.ar/TramitesCertificadosValidacion.do", note: "ID: A974-EB96-BD32-4034-8709-C603-CB7D-C770" },
          { title: "Code quality management with SonarQube - Udemy", date: "01/2023", link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3b0265ae-9a1c-49e1-966a-b0d4c5855070.pdf" },
          { title: "Professional Software Architecture course - Platzi", date: "09/2022", link: "https://platzi.com/p/facundopadilla/curso/1248-course/diploma/detalle/" },
          { title: "Software Architecture Fundamentals - Platzi", date: "08/2022", link: "https://platzi.com/p/facundopadilla/curso/1247-course/diploma/detalle/" },
          { title: "Docker course, beginner to expert - Udemy", date: "01/2021", link: "https://www.udemy.com/certificate/UC-077efde6-c978-4825-afa4-4f674debbd85/" },
          { title: "Cloud Computing course - Google", date: "12/2018", link: "https://learndigital.withgoogle.com/link/1nur091p2ww" },
          { title: "My first company - BBVA", date: "11/2017", link: "https://drive.google.com/file/d/0Bwi253nujvHEdFBXdmZ4OFY3WmFUWFdWN2pQUklabHpDNS1n/view?usp=sharing" }
        ]
      },
      {
        category: "Technical school",
        items: [
          {
            title: "Technical Education School N 3117 Daniel Oscar Reyes - Salta",
            date: "03/2013 - 12/2018",
            bullets: [
              "Professional and personal IT technician",
              "Nationally recognized student (INET)",
              "National honor medal (National Science Fair, Córdoba)",
              "First place Science Fair ONIET (Córdoba)",
              "Recognition from the Ministry of Education of Salta"
            ]
          }
        ]
      }
    ],
    skills: {
      hard: [
        "Python",
        "FastAPI",
        "Django",
        "Flask",
        "Unit tests",
        "Functional tests",
        "Integration tests",
        "E2E tests",
        "Performance test (K6)",
        "Automated tests (Playwright)",
        "TDD",
        "BDD (Behave)",
        "MySQL",
        "PostgreSQL",
        "SonarQube",
        "Ubuntu",
        "Fedora",
        "GitLab",
        "GitHub",
        "Docker",
        "OpenShift (client-use)",
        "AWS",
        "Heroku",
        "PythonAnywhere",
        "Bash",
        "PowerShell",
        "HTML",
        "CSS",
        "Javascript",
        "Selenium",
        "Postman",
        "REST",
        "Microservices",
        "Monorepos",
        "Patterns",
        "SOLID",
        "Clean architecture",
        "OpenAPI",
        "SwaggerUI",
        "Pre-commit"
      ],
      soft: ["English (B1)", "Agile methodologies: SCRUM and Agile"]
    },
    contacts: [
      { label: "LinkedIn", link: "https://www.linkedin.com/in/facundopadilla/" },
      { label: "GitHub", link: "https://github.com/facundopadilla" },
      { label: "Udemy", link: "https://www.udemy.com/user/facundo-padilla/" }
    ]
  }
};

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      achievements: "Actividades",
      communities: "Comunidades",
      skills: "Habilidades",
      contact: "Contacto"
    },
    hero: {
      eyebrow: "Portfolio personal",
      subtitle: "Desarrollador de software backend con foco en calidad, testing y automatización. Activo en comunidad tech de Salta.",
      ctaPrimary: "Ver experiencia",
      ctaSecondary: "Contactar",
      status: "Disponible para nuevos desafíos"
    },
    about: {
      title: "🤓 Sobre mí",
      subtitle: "Un vistazo a mi perfil, intereses y enfoque profesional.",
      body:
        "¡Hola! Soy Facundo, tengo 24 años y vivo en Salta, Argentina.<br />" +
        "Me apasiona la cultura geek, los tatuajes y el buen comer 😁. Trabajo en backend con foco en calidad, testing y automatización, " +
        "y me gusta compartir lo que aprendo en comunidad.<br />" +
        "Si llegaste hasta acá, al final vas a encontrar recursos y tips de programación que pueden ayudarte a aprender nuevas tecnologías.",
      geekTitle: "Cultura geek",
      geekText: "Inspiración diaria, curiosidad constante y comunidad.",
      geekLink: "Ver referencia",
      locationTitle: "Ubicación",
      locationText: "Salta, Argentina.",
      focusTitle: "Enfoque actual",
      focusText: "Backend, testing, calidad y arquitectura limpia."
    },
    experience: {
      title: "💼 Experiencia laboral",
      subtitle: "Resultados medibles, equipos colaborativos y foco en calidad."
    },
    education: {
      title: "🎓 Educación",
      subtitle: "Formación continua, certificaciones y base técnica sólida.",
      certificate: "Ver certificado"
    },
    achievements: {
      title: "🚀 Trayectoria",
      subtitle: "Charlas, eventos, competencias y reconocimientos relevantes.",
      filters: {
        all: "Todos",
        recognitions: "Reconocimientos",
        speaker: "Speaker",
        competitions: "Competencias",
        events: "Eventos"
      },
      pending: "PENDIENTE"
    },
    communities: {
      title: "🤝 Comunidades",
      subtitle: "",
      heroTitle: "Construyamos comunidad y oportunidades en tecnología",
      heroText: "Espacios de aprendizaje, mentoría y colaboración con impacto local.",
      cta: "¿Te interesa colaborar? 🙌",
      view: { cards: "Cards", list: "Lista" },
      linkLabel: "Ver más",
      pending: "PENDIENTE",
      metrics: { members: "Miembros", events: "Eventos", workshops: "Workshops", sponsors: "Sponsors" }
    },
    skills: {
      title: "🔨 Habilidades",
      subtitle: "Stack técnico, prácticas de calidad y habilidades blandas.",
      tabs: { all: "Todas", hard: "Técnicas", soft: "Blandas" }
    },
    contact: {
      title: "📬 Contacto y redes",
      subtitle: "¿Querés colaborar o conversar? Estoy a un mensaje.",
      connectTitle: "Redes sociales",
      connectText: "Puedes contactarme por cualquiera de los siguientes medios."
    },
    footer: {
      copy: "© 2026 Facundo Padilla. Todos los derechos reservados.",
      backToTop: "Volver arriba"
    },
    sectionNav: {
      prev: "Sección anterior",
      next: "Siguiente sección",
      back: "Volver a la sección anterior"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      achievements: "Activities",
      communities: "Communities",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Personal portfolio",
      subtitle: "Backend software engineer focused on quality, testing, and automation. Active in Salta's tech community.",
      ctaPrimary: "View experience",
      ctaSecondary: "Contact",
      status: "Open to new challenges"
    },
    about: {
      title: "🤓 About me",
      subtitle: "A quick look at my profile, interests, and professional focus.",
      body:
        "Hi! I’m Facundo, 24 years old, based in Salta, Argentina.<br />" +
        "I’m passionate about geek culture, tattoos, and good food 😁. I work in backend with a focus on quality, testing, and automation, " +
        "and I enjoy sharing what I learn with the community.<br />" +
        "If you made it this far, you’ll find programming tips and resources at the end to help you learn new technologies.",
      geekTitle: "Geek culture",
      geekText: "Daily inspiration, constant curiosity and community.",
      geekLink: "See reference",
      locationTitle: "Location",
      locationText: "Salta, Argentina.",
      focusTitle: "Current focus",
      focusText: "Backend, testing, quality and clean architecture."
    },
    experience: {
      title: "💼 Work experience",
      subtitle: "Measurable results, collaborative teams and quality focus."
    },
    education: {
      title: "🎓 Education",
      subtitle: "Continuous learning, certifications and a strong technical base.",
      certificate: "View certificate"
    },
    achievements: {
      title: "🚀 Trajectory",
      subtitle: "Talks, events, competitions and relevant recognitions.",
      filters: {
        all: "All",
        recognitions: "Recognitions",
        speaker: "Speaker",
        competitions: "Competitions",
        events: "Events"
      },
      pending: "PENDING"
    },
    communities: {
      title: "🤝 Communities",
      subtitle: "I build community and opportunities in tech.",
      heroTitle: "I build community and opportunities in tech",
      heroText: "Learning spaces, mentoring and collaboration with local impact.",
      cta: "Interested in collaborating? 🙌",
      view: { cards: "Cards", list: "List" },
      linkLabel: "View more",
      pending: "PENDING",
      metrics: { members: "Members", events: "Events", workshops: "Workshops", sponsors: "Sponsors" }
    },
    skills: {
      title: "🔨 Skills",
      subtitle: "Tech stack, quality practices and soft skills.",
      tabs: { all: "All", hard: "Hard", soft: "Soft" }
    },
    contact: {
      title: "📬 Contact & networks",
      subtitle: "Want to collaborate or chat? I’m one message away.",
      connectTitle: "Social networks",
      connectText: "You can reach me through any of the following channels."
    },
    footer: {
      copy: "© 2026 Facundo Padilla. All rights reserved.",
      backToTop: "Back to top"
    },
    sectionNav: {
      prev: "Previous section",
      next: "Next section",
      back: "Back to previous section"
    }
  }
};

let currentLang = "es";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


const getData = () => siteDataByLang[currentLang];

const createExperience = () => {
  const siteData = getData();
  const container = document.getElementById("experience-timeline");
  container.innerHTML = siteData.experience
    .map((item, index) => {
      const link = item.link ? `<a class="inline-link" href="${item.link}" target="_blank" rel="noreferrer">${item.link}</a>` : "";
      const extra = item.extraLink
        ? `<a class="inline-link" href="${item.extraLink}" target="_blank" rel="noreferrer">${item.extraLink}</a>`
        : "";
      const openClass = index === 0 ? " open" : "";
      const expanded = index === 0 ? "true" : "false";
      const maxHeight = index === 0 ? "style=\"max-height: 600px;\"" : "";
      return `
        <article class="card timeline-item">
          <button class="timeline-header" type="button" aria-expanded="${expanded}" data-index="${index}">
            <div class="timeline-header-text">
              <h3>${item.company}</h3>
              <small>${item.dates}</small>
              <p><strong>${item.role}</strong></p>
            </div>
            <span class="timeline-toggle">${index === 0 ? "−" : "+"}</span>
          </button>
          <div class="timeline-panel${openClass}" ${maxHeight}>
            <ul>
              ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="card-links">
              ${link}
              ${extra}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
};

const setupExperienceAccordion = () => {
  const container = document.getElementById("experience-timeline");
  if (!container || container.dataset.bound === "true") return;
  container.dataset.bound = "true";

  const closeAll = () => {
    container.querySelectorAll(".timeline-panel").forEach((el) => {
      el.classList.remove("open");
      el.style.maxHeight = null;
    });
    container.querySelectorAll(".timeline-header").forEach((header) => {
      header.setAttribute("aria-expanded", "false");
      header.querySelector(".timeline-toggle").textContent = "+";
    });
  };

  const openPanel = (btn, panel) => {
    panel.classList.add("open");
    panel.style.maxHeight = panel.scrollHeight + "px";
    btn.setAttribute("aria-expanded", "true");
    btn.querySelector(".timeline-toggle").textContent = "−";
  };

  container.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    const item = event.target.closest(".timeline-item");
    if (!item) return;
    const header = item.querySelector(".timeline-header");
    const panel = item.querySelector(".timeline-panel");
    if (!header || !panel) return;
    const isOpen = panel.classList.contains("open");
    closeAll();
    if (!isOpen) {
      openPanel(header, panel);
    }
  });
};

const createEducation = () => {
  const siteData = getData();
  const container = document.getElementById("education-accordion");
  container.innerHTML = siteData.education
    .map((section, index) => {
      const listItems = section.items
        .map((item) => {
          const listBullets = item.bullets
            ? `<ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
            : "";
          const note = item.note ? `<p class="note">${item.note}</p>` : "";
          const link = item.link
            ? `<a class="inline-link" href="${item.link}" target="_blank" rel="noreferrer">${translations[currentLang].education.certificate}</a>`
            : "";
          const iconKey = (item.title || "").toLowerCase();
          const iconLabel =
            iconKey.includes("platzi") ? "platzi" :
            iconKey.includes("scrum foundation") || iconKey.includes("sfpc") ? "certiprof" :
            iconKey.includes("blockchain") || iconKey.includes("ubp") ? "ubp" :
            iconKey.includes("udemy") ? "udemy" :
            iconKey.includes("google") ? "google" :
            iconKey.includes("bbva") ? "bbva" :
            iconKey.includes("arquitectura") ? "platzi" :
            iconKey.includes("docker") ? "udemy" :
            iconKey.includes("cloud") ? "google" :
            iconKey.includes("sonarqube") ? "udemy" :
            iconKey.includes("scrum") ? "platzi" :
            "";
          const icon = iconLabel
            ? `<span class="edu-icon" aria-hidden="true"><img src="assets/images/${iconLabel}.png" alt="" /></span>`
            : `<span class="edu-icon" aria-hidden="true"></span>`;
          return `
            <li>
              <div class="edu-item">
                <div class="edu-content">
                  <h4>${item.title} <small>${item.date || ""}</small></h4>
                  ${note}
                  ${listBullets}
                  ${link}
                </div>
                ${icon}
              </div>
            </li>
          `;
        })
        .join("");
      return `
        <div class="accordion-item">
          <button class="accordion-header" type="button" aria-expanded="${index === 0}" data-index="${index}">
            <span>${section.category}</span>
            <span>${index === 0 ? "−" : "+"}</span>
          </button>
          <div class="accordion-panel${index === 0 ? " open" : ""}" ${index === 0 ? "style=\"max-height: 600px;\"" : ""}>
            <ul>${listItems}</ul>
          </div>
        </div>
      `;
    })
    .join("");
};

let achievementsResizeBound = false;

const equalizeAchievementHeights = () => {
  const container = document.getElementById("achievements-grid");
  if (!container) {
    return;
  }
  const cards = Array.from(container.querySelectorAll(".achievement-card"));
  if (!cards.length) {
    return;
  }
  const images = Array.from(container.querySelectorAll(".achievement-image"));
  const waitForImages = images.map((img) => (
    img.complete
      ? Promise.resolve()
      : new Promise((resolve) => {
        img.addEventListener("load", resolve, { once: true });
        img.addEventListener("error", resolve, { once: true });
      })
  ));

  Promise.all(waitForImages).then(() => {
    requestAnimationFrame(() => {
      cards.forEach((card) => {
        card.style.height = "auto";
      });
      const maxHeight = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    });
  });
};

const createAchievements = (filter = "all") => {
  const siteData = getData();
  const container = document.getElementById("achievements-grid");
  const items = filter === "all"
    ? siteData.achievements
    : siteData.achievements.filter((item) => {
      const categories = Array.isArray(item.category)
        ? item.category
        : item.category
          ? [item.category]
          : [];
      return categories.includes(filter);
    });

  const shouldMarquee = items.length >= 3;
  const renderedItems = shouldMarquee ? items.concat(items) : items;
  const carouselClass = shouldMarquee ? "achievements-carousel" : "achievements-carousel no-marquee";

  container.innerHTML = `
    <div class="${carouselClass}">
      <div class="achievements-track">
        ${renderedItems
          .map((item) => {
            const image = item.image
              ? `<img src="assets/images/${item.image}" alt="" class="achievement-image" />`
              : "";
            const button = item.link
              ? `<a class="btn ghost" href="${item.link}" target="_blank" rel="noreferrer">${item.linkLabel || translations[currentLang].communities.linkLabel}</a>`
              : "";
            return `
              <article class="card hoverable achievement-card">
                ${image}
                <div class="achievement-body">
                  <h3>${item.title}</h3>
                  <p><strong>${item.organization || ""}</strong></p>
                  <small>${item.date || ""}</small>
                  <p>${item.description}</p>
                  ${button}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
  `;

  equalizeAchievementHeights();
  if (!achievementsResizeBound) {
    achievementsResizeBound = true;
    window.addEventListener("resize", equalizeAchievementHeights, { passive: true });
  }
};

const createCommunities = () => {
  const siteData = getData();
  const container = document.getElementById("communities-grid");
  container.innerHTML = siteData.communities
    .map((community) => {
      const link = community.link
        ? `<a class="btn ghost" href="${community.link}" target="_blank" rel="noreferrer">${translations[currentLang].communities.linkLabel}</a>`
        : "";
      const icon = community.icon
        ? `<span class="community-icon" aria-hidden="true"><img src="assets/images/${community.icon}" alt="" /></span>`
        : `<span class="community-icon" aria-hidden="true"></span>`;
      return `
        <article class="card hoverable community-item">
          <div class="community-content">
            <h3>${community.name} — ${community.role}</h3>
            <p>${community.description}</p>
          </div>
          <div class="community-actions">
            ${icon}
            ${link}
          </div>
        </article>
      `;
    })
    .join("");
};

const createCommunityMetrics = () => {
  const siteData = getData();
  const labels = translations[currentLang].communities.metrics;
  const metrics = [
    { key: "members", label: labels.members },
    { key: "events", label: labels.events },
    { key: "workshops", label: labels.workshops },
    { key: "sponsors", label: labels.sponsors }
  ];
  const container = document.getElementById("community-metrics");
  container.innerHTML = metrics
    .map((metric) => {
      const value = siteData.communityMetrics[metric.key];
      const display = typeof value === "number" ? `+${value}` : "—";
      const disabled = typeof value === "number" ? "" : "disabled";
      const dataValue = typeof value === "number" ? `data-value="${value}"` : "";
      return `
        <div class="metric-card ${disabled}" data-metric="${metric.key}">
          <strong ${dataValue}>${display}</strong>
          <span>${metric.label}</span>
        </div>
      `;
    })
    .join("");
};

const interleaveSkills = (hardSkills, softSkills) => {
  const mixed = [];
  const max = Math.max(hardSkills.length, softSkills.length);
  for (let i = 0; i < max; i += 1) {
    if (hardSkills[i]) mixed.push(hardSkills[i]);
    if (softSkills[i]) mixed.push(softSkills[i]);
  }
  return mixed;
};

const createSkills = (activeType = "all") => {
  const siteData = getData();
  const container = document.getElementById("skills-chips");
  const hard = siteData.skills.hard.map((skill) => ({ label: skill, type: "hard" }));
  const soft = siteData.skills.soft.map((skill) => ({ label: skill, type: "soft" }));
  const mixed = interleaveSkills(hard, soft);
  container.innerHTML = mixed
    .map((skill) => {
      const isAll = activeType === "all";
      const isActive = isAll || skill.type === activeType;
      const classes = ["chip", isActive ? "chip-active" : "chip-inactive"];
      if (!isAll && !isActive) {
        classes.push("chip-blurred");
      }
      return `<span class="${classes.join(" ")}" data-skill-type="${skill.type}">${skill.label}</span>`;
    })
    .join("");
};

const createContacts = () => {
  const siteData = getData();
  const container = document.getElementById("contact-links");
  container.innerHTML = siteData.contacts
    .map((contact) => {
      const key = (contact.label || "").toLowerCase();
      const iconName =
        key.includes("linkedin") ? "linkedin" :
        key.includes("github") ? "github" :
        key.includes("email") ? "email" :
        "";
      return `
        <a class="contact-item" href="${contact.link}" target="_blank" rel="noreferrer">
          <span class="contact-icon" aria-hidden="true">
            ${iconName ? `<img src="assets/images/${iconName}.png" alt="" />` : ""}
          </span>
          <span class="contact-label">${contact.label}</span>
        </a>
      `;
    })
    .join("");
};

const setupAccordion = () => {
  document.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const isOpen = panel.classList.contains("open");
      document.querySelectorAll(".accordion-panel").forEach((el) => {
        el.classList.remove("open");
        el.style.maxHeight = null;
      });
      document.querySelectorAll(".accordion-header").forEach((header) => {
        header.setAttribute("aria-expanded", "false");
        header.lastElementChild.textContent = "+";
      });
      if (!isOpen) {
        panel.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
        btn.lastElementChild.textContent = "−";
      }
    });
  });
};

const setupTabs = () => {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      createSkills(tab.dataset.skill);
    });
  });
};

const setupAchievementsFilter = () => {
  document.querySelectorAll(".chip-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chip-filter").forEach((chip) => {
        chip.classList.remove("active");
        chip.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      createAchievements(btn.dataset.filter);
      if (!prefersReducedMotion && window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });
};


const setupScrollSpy = () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".nav-menu a, .nav-dropdown-menu a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLinks = document.querySelectorAll(`.nav-menu a[href="#${entry.target.id}"], .nav-dropdown-menu a[href="#${entry.target.id}"]`);
          activeLinks.forEach((link) => link.classList.add("active"));
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupNavDropdowns = () => {
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  if (!dropdowns.length) return;
  const navMenu = document.querySelector(".nav-menu");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileQuery = window.matchMedia("(max-width: 900px)");

  const closeNavMenu = () => {
    if (navMenu && navToggle) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        closeNavMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!mobileQuery.matches) return;
      const target = event.target;
      if (!navMenu.contains(target) && !navToggle.contains(target)) {
        closeNavMenu();
      }
    });
  }

  const closeAll = () => {
    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector(".nav-link");
      const menu = dropdown.querySelector(".nav-dropdown-menu");
      if (button && menu) {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  };

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".nav-link");
    const menu = dropdown.querySelector(".nav-dropdown-menu");
    if (!button || !menu) return;
    let closeTimeout;

    const openMenu = () => {
      clearTimeout(closeTimeout);
      closeAll();
      menu.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    };

    const scheduleClose = () => {
      clearTimeout(closeTimeout);
      closeTimeout = setTimeout(() => {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }, 120);
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (mobileQuery.matches) {
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
          menu.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("open");
          button.setAttribute("aria-expanded", "true");
        }
      } else {
        const isOpen = menu.classList.contains("open");
        if (isOpen) {
          menu.classList.remove("open");
          button.setAttribute("aria-expanded", "false");
        } else {
          openMenu();
        }
      }
    });

    dropdown.addEventListener("mouseenter", () => {
      if (!mobileQuery.matches) {
        openMenu();
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (!mobileQuery.matches) {
        scheduleClose();
      }
    });

    menu.addEventListener("mouseenter", () => {
      if (!mobileQuery.matches) {
        clearTimeout(closeTimeout);
      }
    });

    menu.addEventListener("mouseleave", () => {
      if (!mobileQuery.matches) {
        scheduleClose();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeAll();
        closeNavMenu();
      });
    });
  });

  document.addEventListener("click", closeAll);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
};

const setupBackToTop = () => {
  const button = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
};

const setupSectionNav = () => {
  const sections = Array.from(document.querySelectorAll("main section"));
  const upBtn = document.querySelector(".section-arrow[data-direction='up']");
  const downBtn = document.querySelector(".section-arrow[data-direction='down']");
  if (!sections.length || !upBtn || !downBtn) return;

  let currentIndex = 0;

  const updateButtons = () => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === sections.length - 1;
    upBtn.classList.toggle("hidden", isFirst);
    downBtn.classList.toggle("hidden", isLast);
    if (isLast) {
      downBtn.textContent = "↑";
      downBtn.setAttribute("aria-label", translations[currentLang].sectionNav.back);
    } else {
      downBtn.textContent = "↓";
      downBtn.setAttribute("aria-label", translations[currentLang].sectionNav.next);
    }
    upBtn.setAttribute("aria-label", translations[currentLang].sectionNav.prev);
  };

  const scrollToIndex = (index) => {
    const target = sections[index];
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    if (!prefersReducedMotion && window.gsap) {
      const panel = target.querySelector(".container");
      if (panel) {
        gsap.fromTo(
          panel,
          { opacity: 0.6, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.15 }
        );
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((section) => section.id === entry.target.id);
          if (index !== -1) {
            currentIndex = index;
            updateButtons();
          }
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  upBtn.addEventListener("click", () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  });

  downBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else {
      scrollToIndex(currentIndex - 1);
    }
  });

  updateButtons();
};

const setupCursorDot = () => {
  const halo = document.querySelector(".cursor-halo");
  if (!halo || prefersReducedMotion) return;
  const update = (x, y) => {
    halo.style.setProperty("--cursor-x", `${x}px`);
    halo.style.setProperty("--cursor-y", `${y}px`);
  };

  update(window.innerWidth / 2, window.innerHeight / 2);

  window.addEventListener("pointermove", (event) => {
    update(event.clientX, event.clientY);
  });
};

const createHeroMarquee = () => {
  const container = document.getElementById("hero-marquee");
  if (!container) return;
  const siteData = getData();
  const items = siteData.skills.hard;
  const duplicated = items.concat(items);
  container.innerHTML = duplicated.map((item) => `<span class="marquee-item">${item}</span>`).join("");
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach((key) => {
      value = value ? value[key] : undefined;
    });
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const keys = el.dataset.i18nHtml.split(".");
    let value = translations[lang];
    keys.forEach((key) => {
      value = value ? value[key] : undefined;
    });
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });
};

const setupLanguageToggle = () => {
  const toggle = document.querySelector(".lang-toggle");
  if (!toggle) return;
  const saved = localStorage.getItem("site-lang");
  currentLang = saved && translations[saved] ? saved : "es";
  toggle.textContent = currentLang === "es" ? "EN" : "ES";
  toggle.setAttribute("data-lang", currentLang);

  const rerender = () => {
    applyTranslations(currentLang);
    createHeroMarquee();
    createExperience();
    setupExperienceAccordion();
    createEducation();
    createAchievements();
    createCommunities();
    createCommunityMetrics();
    createSkills(document.querySelector(".tab.active")?.dataset.skill || "all");
    createContacts();
    if (!prefersReducedMotion && window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  };

  toggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("site-lang", currentLang);
    toggle.textContent = currentLang === "es" ? "EN" : "ES";
    toggle.setAttribute("data-lang", currentLang);
    rerender();
  });

  rerender();
};

const setupSmoothScroll = () => {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    });
  });
};

const setupAnimations = () => {
  if (prefersReducedMotion || !window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-text > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
  });

  gsap.from(".hero-visual", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2
  });

  document.querySelectorAll(".section").forEach((section) => {
    const targets = section.querySelectorAll(".card, .timeline-item, .accordion-item, .chip");
    if (!targets.length) return;
    gsap.from(targets, {
      scrollTrigger: {
        trigger: section,
        start: "top 75%"
      },
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power2.out"
    });
  });

  const metrics = document.querySelectorAll(".metric-card strong[data-value]");
  metrics.forEach((metric) => {
    const value = Number(metric.dataset.value);
    if (!metric.dataset.value || Number.isNaN(value)) return;
    const counter = { val: 0 };
    ScrollTrigger.create({
      trigger: metric,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: value,
          duration: 1.2,
          ease: "power2.out",
          onUpdate: () => {
            metric.textContent = Math.floor(counter.val);
          }
        });
      }
    });
  });
};

setupLanguageToggle();
setupAccordion();
setupExperienceAccordion();
setupTabs();
setupAchievementsFilter();
setupScrollSpy();
setupNavDropdowns();
setupBackToTop();
setupSmoothScroll();
setupSectionNav();
setupCursorDot();
setupAnimations();
