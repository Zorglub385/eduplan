// ╔══════════════════════════════════════════════════════╗
// ║  EduPlan · config.js                                 ║
// ║  Seul ce fichier est à modifier pour personnaliser   ║
// ╚══════════════════════════════════════════════════════╝

const EDUPLAN = {

  // ── 1. URL iCal Pronote ────────────────────────────────
  // Pronote › Paramètres (⚙) › Agenda › Exporter › Copier le lien
  // Ressemble à : https://votre-etab.index-education.net/pronote/ical/...
  ICS_URL: "https://raw.githubusercontent.com/Zorglub385/eduplan/refs/heads/Example/calendrier_anonymise.ics",

  // ── 2. Identité ────────────────────────────────────────
  NOM:           "Lucas MARTIN",
  CLASSE:        "4ème 5",
  ETABLISSEMENT: "Collège Albert Camus",

  // ── 3. Zone de vacances ────────────────────────────────
  // "AUTO" = détection par IP via ipwhois.app
  // Forcer : "A", "B", ou "C"
  //
  //  Zone A : Besançon, Bordeaux, Clermont, Grenoble, Lyon, Nantes...
  //  Zone B : Amiens, Caen, Lille, Marseille, Rennes, Strasbourg, Nice...
  //  Zone C : Créteil, Montpellier, Paris, Toulouse, Versailles
  ZONE: "AUTO",

  // ── 4. Thème par défaut ────────────────────────────────
  // "dark" ou "light"  (l'utilisateur peut aussi le changer via le bouton ☀️/🌙)
  THEME: "dark",

};
