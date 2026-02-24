// ╔══════════════════════════════════════════════════════╗
// ║  EduPlan · config.js                                 ║
// ║  Seul ce fichier est à modifier pour personnaliser   ║
// ╚══════════════════════════════════════════════════════╝

const EDUPLAN = {

  // ── 1. URL iCal Pronote ────────────────────────────────
  // Pronote › Paramètres (⚙) › Agenda › Exporter › Copier le lien
  // Ressemble à : https://votre-etab.index-education.net/pronote/ical/...
  ICS_URL: "COLLEZ_VOTRE_URL_ICS_ICI",

  // ── 2. Identité ────────────────────────────────────────
  NOM:           "Prénom NOM",
  CLASSE:        "4ème A",
  ETABLISSEMENT: "Collège ou Lycée ...",

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
