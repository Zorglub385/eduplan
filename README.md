# EduPlan ✦ Emploi du temps Pronote

> Une application web légère, belle et rapide pour votre emploi du temps Pronote.  
> Zéro serveur · Zéro installation · Double-clic et c'est parti.

---

## Démo rapide

**1.** [Télécharger le ZIP](../../releases/latest) → extraire  
**2.** Ouvrir `config.js` → coller votre URL iCal Pronote  
**3.** Double-cliquer sur `index.html`

---

## Fonctionnalités

| | |
|--|--|
| 📅 | Emploi du temps en temps réel depuis Pronote |
| 🌙 ☀️ | Mode sombre et mode clair |
| 📅 🗓 | Vue semaine et vue jour (clic sur l'en-tête) |
| ⚠️ | Badge et toast si cours annulés cette semaine |
| 🌴 | Message vacances avec dates de début/fin et bouton de reprise |
| 🔴 | Ligne "maintenant" + cours en cours mis en surbrillance |
| 🔔 | Notifications navigateur (5 min avant chaque cours) |
| 🖨️ | Impression / Export PDF en A4 paysage |
| ⌨️ | Raccourcis clavier complets |
| 📍 | Détection automatique de la zone scolaire (A/B/C) par IP |
| ↔️ | Animations de navigation fluides |
| 💾 | Thème persistant (localStorage) |

---

## Installation

### Prérequis
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)
- Votre URL iCal Pronote

### Étapes

```bash
# Cloner
git clone https://github.com/Zorglub385/eduplan.git
cd eduplan

# Configurer
# Ouvrez config.js et collez votre URL Pronote

# Lancer
# Double-cliquez sur index.html
```

---

## Configuration

Ouvrez **`config.js`** — c'est le seul fichier à modifier :

```js
const EDUPLAN = {

  // Votre URL iCal Pronote (Pronote › ⚙ Paramètres › Agenda › Exporter)
  ICS_URL: "https://votre-etab.index-education.net/pronote/ical/...",

  NOM:           "Prénom NOM",
  CLASSE:        "3ème B",
  ETABLISSEMENT: "Collège ...",

  ZONE:  "AUTO",   // ou "A", "B", "C"
  THEME: "dark",   // ou "light"
};
```

### Où trouver l'URL iCal ?

1. Connectez-vous sur **Pronote** (espace élève ou parent)
2. Icône **⚙ Paramètres** → onglet **Agenda**
3. Cliquez sur **Exporter le calendrier**
4. Copiez le lien iCal

> ⚠️ L'URL contient un token personnel (`icalsecurise=...`).  
> Ne la commitez pas publiquement — ajoutez `config.js` à votre `.gitignore`.

---

## Raccourcis clavier

| Touche | Action |
|--------|--------|
| `←` | Semaine/jour précédent |
| `→` | Semaine/jour suivant |
| `Entrée` | Aujourd'hui |
| `W` | Vue semaine |
| `D` | Vue jour |
| `Échap` | Fermer la modal |

---

## Zones de vacances 2025-2026

| Zone | Académies |
|------|-----------|
| **A** | Besançon, Bordeaux, Clermont-Fd, Grenoble, Limoges, Lyon, Nantes, Poitiers |
| **B** | Aix-Marseille, Amiens, Caen, Lille, Nancy-Metz, Nice, Orléans-Tours, Reims, Rennes, Rouen, Strasbourg |
| **C** | Créteil, Montpellier, Paris, Toulouse, Versailles |

Avec `ZONE: "AUTO"`, la zone est détectée automatiquement via [ipwhois.app](https://ipwhois.app).

---

## Structure

```
eduplan/
├── index.html   — Application complète (HTML + CSS + JS)
├── config.js    — ⭐ Configuration (seul fichier à modifier)
└── README.md
```

---

## Partager / Contribuer

### Utiliser sans toucher au code
Téléchargez la [dernière release](../../releases/latest), modifiez `config.js`, ouvrez `index.html`.

### Mettre sur GitHub Pages
1. Forkez ce repo
2. Modifiez `config.js` avec votre URL (ou utilisez une variable d'environnement)
3. Settings → Pages → Source: `main`, `/ (root)`
4. Accédez à `https://USER.github.io/eduplan/`

> ⚠️ Si vous hébergez publiquement, ne commitez **jamais** votre URL iCal personnelle.  
> Utilisez un fichier `config.local.js` ignoré par git.

### Idées d'amélioration
- Support d'autres ENT (Espace Numérique de Travail)
- Synchronisation multi-utilisateur
- Export .ics personnalisé
- Widget mobile

---

## Vie privée

- Aucune donnée n'est envoyée à un tiers sauf :
  - Votre URL iCal vers les serveurs Pronote (via proxy CORS public)
  - Une requête IP anonyme vers ipwhois.app pour détecter la zone
- Aucun cookie, aucun analytics, aucun tracker

---


*EduPlan est un projet indépendant, non affilié à Pronote / Index Éducation.*
