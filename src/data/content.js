export const profile = {
  name: "Mekontso Olivier Steve",
  firstName: "Mekontso",
  lastName: "Olivier Steve",
  role: "Développeur Full Stack",
  subrole: "Technicien IT — Réseaux & Sécurité",
  location: "Yaoundé, Cameroun",
  birthDate: "10 Juillet 2003",
  school: "ESTLC — Ambam",
  filiere: "GSI — Génie Informatique des Systèmes Logistiques et Intelligents",
  email: "leroisdejesus@gmail.com",
  phone: "+237 654 862 989",
  linkedin: "Seve Moffo",
  linkedinUrl: "#",
  photo: "/photo.jpg",
  cv: "/CV_Mekontso.png",
  bio: [
    "Étudiant en Cycle Ingénieur à l'ESTLC d'Ambam, filière GSI (Génie Informatique des Systèmes Logistiques et Intelligents). Futur ingénieur spécialisé en Systèmes Embarqués, Intelligence Artificielle et IoT.",
    "Titulaire d'un BTS Réseaux & Sécurité Informatique (ESMATA, Yaoundé), Responsable Technique du Corps de Cybersécurité à l'ESTLC — supervision de simulations d'attaques réseau et administration de systèmes Linux.",
    "Développeur Full Stack & Mobile (Web, React Native, Flutter, Android natif), actuellement en stage chez Flysoft Engineering SAS (Yaoundé) sur la plateforme logistique FretCorridor (Spring Boot, Docker). Disponible en freelance pour des missions de développement.",
  ],
  status: "Freelance disponible · Actuellement en stage — Flysoft Engineering SAS",
};

// Each skill category is tagged with a "zone" that maps to a visual state
// of the persistent 3D network in the background.
export const skillZones = [
  { id: "code", label: "Code" },
  { id: "network", label: "Réseau" },
  { id: "data", label: "Données" },
];

// Chaque tag porte un "icon" = slug Simple Icons (cdn.simpleicons.org/<slug>)
// pour affichage automatique du logo de la techno/outil.
export const skills = [
  {
    zone: "code",
    title: "Développement Mobile",
    tags: [
      { name: "React Native", icon: "react", level: 60 },
      { name: "Flutter", icon: "flutter", level: 65 },
      { name: "Android Natif (Kotlin)", icon: "kotlin", level: 45 },
      { name: "Java", icon: "openjdk", level: 55 },
      { name: "Play Store / App Store", icon: "googleplay", level: 40 },
    ],
  },
  {
    zone: "code",
    title: "Développement Web",
    tags: [
      { name: "PHP", icon: "php", level: 80 },
      { name: "Laravel", icon: "laravel", level: 78 },
      { name: "Python", icon: "python", level: 70 },
      { name: "Django", icon: "django", level: 55 },
      { name: "JavaScript", icon: "javascript", level: 72 },
      { name: "React", icon: "react", level: 65 },
      { name: "Node.js", icon: "nodedotjs", level: 60 },
      { name: "Spring Boot", icon: "springboot", level: 68 },
      { name: "Angular", icon: "angular", level: 55 },
      { name: "HTML/CSS", icon: "html5", level: 85 },
    ],
  },
  {
    zone: "data",
    title: "IA & Prompt Engineering",
    tags: [
      { name: "Claude / Anthropic", icon: "anthropic", level: 80 },
      { name: "ChatGPT / OpenAI", icon: "openai", level: 75 },
      { name: "GitHub Copilot", icon: "githubcopilot", level: 70 },
      { name: "Prompt Engineering", icon: "openai", level: 78 },
      { name: "Cursor", icon: "cursor", level: 72 },
      { name: "Windsurf", icon: "windsurf", level: 65 },
    ],
  },
  {
    zone: "network",
    title: "Cybersécurité",
    tags: [
      { name: "Kali Linux", icon: "kalilinux", level: 75 },
      { name: "Pentesting", icon: "hackthebox", level: 65 },
      { name: "IDS/IPS", icon: "wireshark", level: 60 },
      { name: "Investigation Numérique", icon: "gnuprivacyguard", level: 55 },
      { name: "GNS3", icon: "gns3", level: 70 },
      { name: "EveNg", icon: "eventstore", level: 60 },
    ],
  },
  {
    zone: "network",
    title: "Réseaux & Systèmes",
    tags: [
      { name: "Cisco", icon: "cisco", level: 70 },
      { name: "Switch/Routeur", icon: "ubiquiti", level: 72 },
      { name: "VLAN", icon: "checkpoint", level: 68 },
      { name: "Pare-feu", icon: "pfsense", level: 62 },
      { name: "VPN", icon: "openvpn", level: 60 },
      { name: "Câblage RJ45", icon: "ethernet", level: 85 },
    ],
  },
  {
    zone: "data",
    title: "Systèmes, Cloud & Virtualisation",
    tags: [
      { name: "Linux", icon: "linux", level: 82 },
      { name: "Docker", icon: "docker", level: 70 },
      { name: "Proxmox", icon: "proxmox", level: 65 },
      { name: "VirtualBox", icon: "virtualbox", level: 75 },
      { name: "VMware", icon: "vmware", level: 65 },
      { name: "IoT", icon: "arduino", level: 55 },
      { name: "Firebase", icon: "firebase", level: 60 },
      { name: "Render", icon: "render", level: 55 },
      { name: "Supabase", icon: "supabase", level: 55 },
    ],
  },
  {
    zone: "data",
    title: "Data & Bases de données",
    tags: [
      { name: "SQL", icon: "mysql", level: 78 },
      { name: "PostgreSQL / PostGIS", icon: "postgresql", level: 65 },
      { name: "MongoDB", icon: "mongodb", level: 55 },
      { name: "Analyse de données", icon: "pandas", level: 60 },
      { name: "Jupyter", icon: "jupyter", level: 55 },
    ],
  },
  {
    zone: "code",
    title: "DevOps & Outils",
    tags: [
      { name: "Docker Compose", icon: "docker", level: 70 },
      { name: "Git / GitHub", icon: "github", level: 80 },
      { name: "GitHub Actions", icon: "githubactions", level: 65 },
      { name: "Tailwind CSS", icon: "tailwindcss", level: 80 },
      { name: "Bootstrap", icon: "bootstrap", level: 78 },
    ],
  },
];

export const formations = [
  {
    date: "2025 → En cours",
    title: "Cycle Ingénieur — GSI",
    school: "ESTLC — École Supérieure de Transport, Logistique et Commerce, Ambam",
    desc: "Génie Informatique des Systèmes Logistiques et Intelligents. Orienté IoT, Systèmes Embarqués et Intelligence Artificielle. Diplôme d'ingénieur en 5 ans.",
  },
  {
    date: "2025",
    title: "BTS Réseaux & Sécurité Informatique",
    school: "ESMATA — École Supérieure de Management et de Technologie Appliquée, Yaoundé",
    desc: "Formation avancée en administration réseaux, cybersécurité, virtualisation et gestion des systèmes d'information.",
  },
  {
    date: "2021",
    title: "Baccalauréat Scientifique — Série C",
    school: "Cameroun",
    desc: "Mention obtenue avec spécialisation en mathématiques et sciences physiques.",
  },
];

export const experiences = [
  {
    date: "2026 (en cours)",
    title: "Développeur Full Stack — Stagiaire",
    company: "Flysoft Engineering SAS",
    location: "Yaoundé, Cameroun",
    icon: "https://cdn.simpleicons.org/spring/94D82D",
    desc: "Backend, architecture système et développement full-stack pour FretCorridor, plateforme de corridor logistique B2B2G (zone CEMAC). Conception du Moteur Périmètre (GEO, MAT, OPT, TRK) en Spring Boot/Java, communication inter-services REST synchrone, événements sortants asynchrones via Kafka, conteneurisation Docker/Docker Compose (services séparés par microservice), intégration du moteur de routage Valhalla.",
    tags: ["Spring Boot", "Docker", "Kafka", "REST", "PostGIS"],
  },
  {
    date: "2025",
    title: "Développeur — Gestion de Stock Bureau",
    company: "Tea Sea Incubator",
    location: "Cameroun",
    icon: "https://cdn.simpleicons.org/rocket/F59E0B",
    desc: "Stage en incubateur de startups : conception et développement d'une application de gestion de stock de fournitures de bureau (entrées/sorties, alertes de seuil, suivi des mouvements).",
    tags: ["PHP", "Laravel", "MySQL"],
  },
  {
    date: "2025 — 2026",
    title: "Responsable Technique — Corps de Cybersécurité",
    company: "ESTLC, Ambam",
    location: "Cameroun",
    icon: "https://cdn.simpleicons.org/kalilinux/557C94",
    desc: "Simulation d'attaques réseau, protection de machines (IDS/IPS), pentesting sous Kali Linux. Administration Linux, hyperviseurs (Proxmox, VirtualBox, VMware), investigation numérique. Configuration Switch Cisco, routeurs, pare-feu, VLAN, sertissage câbles RJ45.",
    tags: ["Kali Linux", "Cisco", "Proxmox"],
  },
  {
    date: "Juin — Septembre 2024",
    title: "Stagiaire Technicien Réseaux",
    company: "PPHSARL",
    location: "Cameroun",
    icon: "https://cdn.simpleicons.org/cisco/1BA0D7",
    desc: "Installation de réseau local sécurisé, configuration systèmes (Linux, macOS, Windows).",
    tags: ["Réseaux", "Linux"],
  },
  {
    date: "En continu",
    title: "Développeur Freelance",
    company: "Indépendant",
    location: "À distance / Cameroun",
    icon: "https://cdn.simpleicons.org/upwork/6FDA44",
    desc: "Disponible pour missions freelance en développement Web, Mobile (Flutter, React Native) et Backend, avec usage intensif d'outils IA (Claude Code, Cursor, Windsurf) pour accélérer la livraison.",
    tags: ["Freelance", "Mobile", "Web", "IA"],
  },
];

export const certifications = [
  {
    title: "Certification PIX — Niveau Avancé 1",
    info: "AUF DR Afrique Centrale — CEF de Douala · 12/03/2026",
    score: "555 / 895 pix",
    file: "/certifpix.pdf",
  },
  {
    title: "Introduction to SQL",
    info: "DataCamp · 24 mai 2026",
    score: "Code : 10262001",
    file: "/certif_sql.pdf",
  },
];

export const projets = [
  {
    type: "Stage",
    title: "FretCorridor — App Mobile Chargeur",
    desc: "Application mobile Flutter connectee a un backend Spring Boot/PostGIS conteneurise Docker : publication de demandes de transport, reception d'offres, paiement et suivi de livraison en temps reel sur le corridor logistique CEMAC. Frontend deploye sur Firebase, backend sur Render, base de donnees sur Supabase.",
    stack: ["Flutter", "Spring Boot", "PostgreSQL/PostGIS", "Docker", "JWT", "Firebase", "Render", "Supabase"],
  },
  {
    type: "Académique",
    title: "Gestion de Contrats Immobiliers",
    desc: "Application web complète avec authentification, CRUD et tableaux de bord pour la gestion des contrats immobiliers.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    type: "Académique",
    title: "BureauStock — Gestion de Stock",
    desc: "Suivi des entrées/sorties de matériel, alertes de seuil automatiques et génération de rapports.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    type: "Personnel",
    title: "Mini Jeu de Combat",
    desc: "Jeu de combat avec logique back-end PHP et animations front-end JavaScript fluides.",
    stack: ["PHP", "JavaScript", "HTML/CSS"],
  },
  {
    type: "En développement",
    title: "Plateforme de Paiement Scolaire",
    desc: "Système de paiement en ligne des frais de scolarité avec passerelle de paiement, reçus et suivi des transactions.",
    stack: ["Laravel", "MySQL", "API Paiement"],
  },
];

export const sections = [
  { id: "accueil", label: "Accueil", code: "00" },
  { id: "apropos", label: "Profil", code: "01" },
  { id: "competences", label: "Compétences", code: "02" },
  { id: "experience", label: "Expérience", code: "03" },
  { id: "formation", label: "Formation", code: "04" },
  { id: "projets", label: "Projets", code: "05" },
  { id: "contact", label: "Contact", code: "06" },
];
