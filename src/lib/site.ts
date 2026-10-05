export const WHATSAPP_URL = "https://wa.me/22965291352";
export const EMAIL = "ange@jrcdigit.com";
export const MAILTO = `mailto:${EMAIL}`;

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#realisations", label: "Réalisations", activePrefix: "/projets" },
  { href: "/#formules", label: "Formules" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceIcon = "globe" | "cart" | "phone" | "grid" | "rocket" | "plug";

export const services: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: "globe",
    title: "Sites web modernes",
    text: "Sites vitrines, portfolios et landing pages rapides, responsive et optimisés pour le référencement.",
  },
  {
    icon: "cart",
    title: "E-commerce & boutiques",
    text: "Boutiques en ligne connectées à WhatsApp ou avec passerelle de paiement, pensées pour vendre.",
  },
  {
    icon: "phone",
    title: "Applications mobiles",
    text: "Applications cross-platform pour iOS et Android, avec une expérience fluide sur tous les écrans.",
  },
  {
    icon: "grid",
    title: "Dashboards & SaaS",
    text: "Tableaux de bord sur mesure et plateformes SaaS pour piloter votre activité et vos équipes.",
  },
  {
    icon: "rocket",
    title: "Stratégie digitale",
    text: "Conseil et mise en place d’une présence digitale efficace, du positionnement à la mise en ligne.",
  },
  {
    icon: "plug",
    title: "APIs & intégrations",
    text: "Connexion de vos outils via des APIs : paiement, messagerie, CRM, analytics et automatisations.",
  },
];

export const reasons = [
  {
    title: "Full-stack réel",
    text: "Frontend, backend, data et déploiement — une seule tête de projet.",
  },
  {
    title: "Orienté résultats",
    text: "Chaque écran sert une action : conversion, inscription, paiement, suivi.",
  },
  {
    title: "Design soigné",
    text: "UI sombre premium, typographie forte, micro-détails d’agence.",
  },
  {
    title: "Basé au Bénin",
    text: "Disponible à Cotonou, à l’aise en français, réactif sur WhatsApp.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Découverte",
    text: "On clarifie objectifs, audience et contraintes pour cadrer le bon périmètre.",
  },
  {
    n: "02",
    title: "Conception",
    text: "Wireframes, design system et architecture technique alignés sur votre marque.",
  },
  {
    n: "03",
    title: "Développement",
    text: "Itérations courtes, démos régulières, code propre et livrables testés.",
  },
  {
    n: "04",
    title: "Livraison",
    text: "Mise en ligne, formation, documentation et suivi post-lancement.",
  },
];

export type PricingPlan = {
  name: string;
  popular?: boolean;
  text: string;
  checks: string[];
  primary?: boolean;
};

export const plans: PricingPlan[] = [
  {
    name: "Essentiel",
    text: "Site vitrine clair et rapide pour présenter votre activité avec une identité soignée.",
    checks: ["Cadrage du besoin", "Design responsive", "Jusqu’à 5 pages", "Optimisation SEO de base"],
  },
  {
    name: "Business",
    popular: true,
    primary: true,
    text: "Site sur mesure avec fonctionnalités dynamiques : formulaires, blog, back-office.",
    checks: [
      "Design sur mesure",
      "Fonctionnalités dynamiques",
      "Intégrations (paiement, WhatsApp…)",
      "SEO avancé et formation",
    ],
  },
  {
    name: "Plateforme",
    text: "Boutique en ligne, SaaS ou application web complète pour scaler votre offre.",
    checks: ["Boutique ou dashboard", "Comptes utilisateurs", "Base de données & API", "Déploiement & monitoring"],
  },
  {
    name: "Sur mesure",
    text: "Projet entièrement calibré sur vos contraintes, votre stack et votre équipe.",
    checks: ["Conseil technique", "Développement full-stack", "Intégrations sur mesure", "Accompagnement long terme"],
  },
];

export const faqs = [
  {
    q: "Combien de temps pour un site vitrine ?",
    a: "En général 2 à 4 semaines selon le contenu et le nombre de pages, après validation du cadrage.",
  },
  {
    q: "Travaillez-vous à distance ?",
    a: "Oui — majoritairement à distance, avec points réguliers (visio ou WhatsApp) et livraisons itératives.",
  },
  {
    q: "Puis-je faire évoluer mon projet plus tard ?",
    a: "Oui. Les formules Business et Plateforme sont conçues pour s’étendre (modules, API, mobile).",
  },
  {
    q: "Proposez-vous la formation ?",
    a: "Oui — formation courte à la prise en main du back-office, et ateliers techniques sur demande.",
  },
];

export const skills = [
  { name: "Frontend", pct: 92, detail: "React, Next.js, Tailwind, Framer Motion" },
  { name: "Backend", pct: 88, detail: "Node.js, APIs REST, Auth, Postgres" },
  { name: "Produit & UI", pct: 85, detail: "Design systems, wireframes, conversion" },
  { name: "Formation", pct: 80, detail: "Ateliers, documentation, handoff" },
];

export const values = [
  { title: "Clarté", text: "Interfaces lisibles, devis transparents, livrables nommés." },
  { title: "Craft", text: "Détails typographiques, états vides, perf, accessibilité de base." },
  { title: "Proximité", text: "Points WhatsApp, démos fréquentes, français natif." },
];

export type ProjectStat = {
  label: string;
  display: string;
  count?: number;
  prefix?: string;
  suffix?: string;
  text?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  gradient: string;
  previewEyebrow: string;
  previewTitle: string;
  previewText: string;
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string;
  deliverables: { n: string; title: string; text: string }[];
  stats: ProjectStat[];
  cta: string;
  phoneKicker: string;
  phoneTitle: string;
  phoneLight?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ocd-app",
    title: "OCD App",
    category: "Santé",
    year: "2025",
    kind: "Application",
    summary:
      "Application d’accompagnement pour routines, suivi et rappels — une interface calme, utilisable au quotidien, y compris hors connexion.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    gradient: "linear-gradient(160deg,#1a3a2a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "Suivi quotidien",
    previewText: "Routines, humeur et rappels dans un flux simple, sans surcharge visuelle.",
    challengeTitle: "Le défi",
    challenge:
      "Les outils existants étaient trop cliniques ou trop génériques. Il fallait un compagnon discret, rassurant, et rapide à ouvrir.",
    solutionTitle: "La solution",
    solution:
      "Une app web progressive : checklists, journal court, rappels et un tableau de bord personnel synchronisé.",
    deliverables: [
      { n: "01", title: "Journal guidé", text: "Saisie courte, historique lisible, export." },
      { n: "02", title: "Rappels", text: "Notifications douces, sans culpabiliser." },
      { n: "03", title: "Tableau de bord", text: "Tendances hebdomadaires, accès privé." },
    ],
    stats: [
      { label: "Écrans clés", display: "12", count: 12 },
      { label: "Du cadrage au MVP", display: "6 sem." },
    ],
    cta: "Discutons de votre application",
    phoneKicker: "PROJET",
    phoneTitle: "OCD APP",
  },
  {
    slug: "oschool",
    title: "O’School",
    category: "Éducation",
    year: "2025",
    kind: "Plateforme",
    summary:
      "Plateforme de gestion scolaire pour établissements au Bénin — notes, absences, communication parents & enseignants, dans une interface claire et mobile-first.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Supabase"],
    gradient: "linear-gradient(160deg,#1a2a3a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "Dashboard établissement",
    previewText: "Vue synthétique : effectifs, notes du trimestre, messages parents, paiements.",
    challengeTitle: "Le défi",
    challenge:
      "Les établissements jonglaient entre cahiers, Excel et groupes WhatsApp. Besoin d’un outil unique, fiable hors fibre optimale, utilisable par des non-tech.",
    solutionTitle: "La solution",
    solution:
      "Une app web progressive : rôles (admin, enseignant, parent), saisie de notes, bulletins PDF, notifications, et back-office léger pour la direction.",
    deliverables: [
      { n: "01", title: "Portail direction", text: "Effectifs, finances, rapports trimestriels." },
      { n: "02", title: "Espace enseignant", text: "Notes, absences, cahier de texte digital." },
      { n: "03", title: "Espace parents", text: "Suivi enfant, messages, paiements." },
    ],
    stats: [
      { label: "Rôles utilisateurs", display: "3", count: 3 },
      { label: "Du cadrage à la prod", display: "8 sem." },
    ],
    cta: "Discutons de votre plateforme",
    phoneKicker: "ÉDUCATION",
    phoneTitle: "O’SCHOOL",
    phoneLight: true,
  },
  {
    slug: "fashlink",
    title: "FASHLINK",
    category: "Mode",
    year: "2025",
    kind: "Produit",
    summary:
      "Des rendez-vous qui font ressentir, pas seulement matcher — une expérience mode, plus humaine que le swipe classique.",
    stack: ["React", "Tailwind", "Supabase"],
    gradient: "linear-gradient(160deg,#2a1a3a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "Rencontres stylées",
    previewText: "Profils, intentions et rendez-vous pensés comme une expérience, pas un catalogue.",
    challengeTitle: "Le défi",
    challenge:
      "Les apps de rencontre généralistes diluent l’identité mode. Il fallait une esthétique forte et un parcours qui mène à un vrai rendez-vous.",
    solutionTitle: "La solution",
    solution:
      "Un produit web : profils visuels, matching léger, prise de rendez-vous et une identité graphique assumée.",
    deliverables: [
      { n: "01", title: "Profils", text: "Look, intentions, galerie courte." },
      { n: "02", title: "Matching", text: "Suggestions, pas un flux infini." },
      { n: "03", title: "Rendez-vous", text: "Proposition, confirmation, rappel." },
    ],
    stats: [
      { label: "Parcours clés", display: "4", count: 4 },
      { label: "Design → beta", display: "5 sem." },
    ],
    cta: "Discutons de votre produit",
    phoneKicker: "MODE",
    phoneTitle: "FASHLINK",
  },
  {
    slug: "zeno-finanzen",
    title: "Zeno Finanzen",
    category: "Fintech",
    year: "2025",
    kind: "Dashboard",
    summary:
      "Tableau de bord financier clair pour suivre flux, objectifs et lectures — une UI dense mais lisible.",
    stack: ["Next.js", "TypeScript", "API"],
    gradient: "linear-gradient(160deg,#1a2a1a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "Lecture des flux",
    previewText: "Soldes, mouvements et objectifs dans une grille calme, pensée pour décider vite.",
    challengeTitle: "Le défi",
    challenge:
      "Les exports bancaires et tableurs rendaient la lecture pénible. Besoin d’une vue unique, fiable, sans jargon inutile.",
    solutionTitle: "La solution",
    solution:
      "Un dashboard Next.js branché sur une API : agrégation, filtres, et états vides soignés pour les premiers jours.",
    deliverables: [
      { n: "01", title: "Vue d’ensemble", text: "Soldes, variations, alertes." },
      { n: "02", title: "Mouvements", text: "Filtres, recherche, catégories." },
      { n: "03", title: "Objectifs", text: "Suivi simple, sans gamification bruyante." },
    ],
    stats: [
      { label: "Vues principales", display: "5", count: 5 },
      { label: "Intégration API", display: "API" },
    ],
    cta: "Discutons de votre dashboard",
    phoneKicker: "FINTECH",
    phoneTitle: "ZENO",
  },
  {
    slug: "africa-fashion-awards",
    title: "Africa Fashion Awards",
    category: "Événement",
    year: "2025",
    kind: "Site",
    summary:
      "Site d’événement pour présenter l’édition, les nominés et l’inscription — une présence nette, à la hauteur de la scène.",
    stack: ["Next.js", "Framer", "CMS"],
    gradient: "linear-gradient(160deg,#2a2a1a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "La scène, en ligne",
    previewText: "Édition, catégories, nominés et appel à participation dans un récit visuel.",
    challengeTitle: "Le défi",
    challenge:
      "L’information vivait dans des posts et des PDF. Il fallait un lieu unique, éditable, qui tienne jusqu’au soir de la cérémonie.",
    solutionTitle: "La solution",
    solution:
      "Un site Next.js au contenu piloté : pages édition, nominés, partenaires, et un formulaire d’inscription.",
    deliverables: [
      { n: "01", title: "Page édition", text: "Récit, dates, lieu, programme." },
      { n: "02", title: "Nominés", text: "Grille, catégories, fiches." },
      { n: "03", title: "Inscription", text: "Formulaire, confirmation, relance." },
    ],
    stats: [
      { label: "Pages livrées", display: "7", count: 7 },
      { label: "Mise en ligne", display: "3 sem." },
    ],
    cta: "Discutons de votre événement",
    phoneKicker: "ÉVÉNEMENT",
    phoneTitle: "AFA",
  },
  {
    slug: "proafrik",
    title: "ProAfrik",
    category: "Communauté",
    year: "2025",
    kind: "Plateforme",
    summary:
      "Plateforme communautaire pour relier talents, opportunités et conversations — un espace utile, pas un réseau de plus.",
    stack: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(160deg,#1a1a2a,#151515)",
    previewEyebrow: "Aperçu produit",
    previewTitle: "La communauté",
    previewText: "Profils, annonces et échanges dans une interface directe, mobile d’abord.",
    challengeTitle: "Le défi",
    challenge:
      "Les groupes dispersaient les opportunités. Il fallait un lieu identifiable, modérable, et simple à rejoindre.",
    solutionTitle: "La solution",
    solution:
      "Une plateforme React + API : comptes, fils d’annonces, profils et une modération légère côté admin.",
    deliverables: [
      { n: "01", title: "Profils", text: "Présentation courte, liens, ville." },
      { n: "02", title: "Annonces", text: "Publication, filtres, réponses." },
      { n: "03", title: "Admin", text: "Modération et mise en avant." },
    ],
    stats: [
      { label: "Modules", display: "3", count: 3 },
      { label: "Stack", display: "MERN" },
    ],
    cta: "Discutons de votre communauté",
    phoneKicker: "COMMUNAUTÉ",
    phoneTitle: "PROAFRIK",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const projectTypes = [
  "Site vitrine",
  "Application web",
  "E-commerce",
  "Mobile",
  "Autre / sur mesure",
] as const;
