# Portfolio 3D — Mekontso Olivier Steve

Portfolio immersif construit avec **React (Vite)**, **Three.js / React Three Fiber**, **GSAP + ScrollTrigger** et **Lenis** (scroll fluide). Le fond est un réseau de nœuds 3D vivant qui change de couleur selon la section — clin d'œil direct à ta spécialité réseaux/systèmes.

## ⚠️ À faire avant de pousser sur GitHub

Ce projet référence 4 fichiers qui existent déjà sur ton hébergement o2switch mais qui ne sont **pas inclus ici** (je n'y ai pas accès). **Copie-les dans `public/`** avant de pousser, sinon ils seront supprimés du serveur au prochain déploiement (le `--delete` du rsync synchronise exactement ce qu'il y a dans le repo) :

```
public/
├── photo.jpg
├── CV_Mekontso.png
├── certifpix.pdf
└── certif_sql.pdf
```

Tu peux les récupérer directement depuis o2switch (Gestionnaire de fichiers ou scp) si tu ne les as plus en local.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Build de production

```bash
npm run build
```

Génère le dossier `dist/` — ce sont ces fichiers statiques qui doivent être envoyés sur o2switch (pas le code source).

## Structure

```
src/
├── data/content.js          # Toutes tes infos (bio, compétences, formation, projets...)
├── components/
│   ├── canvas/               # Scène 3D (réseau de nœuds, formes flottantes, caméra)
│   ├── sections/              # Hero, About, Skills, Formation, Projects, Contact
│   └── ui/                    # Navbar, HUD (indicateur de section en bas à droite), Reveal
```

Pour modifier ton contenu (bio, compétences, projets, certifications...), tout se passe dans `src/data/content.js` — pas besoin de toucher aux composants.

## Déploiement CI/CD

Ce projet a maintenant une étape de build (npm install && npm run build) avant l'envoi sur le serveur. Utilise le workflow GitHub Actions fourni séparément (deploy.yml), qui remplace celui du portfolio HTML statique précédent : il installe les dépendances, build, puis rsync le dossier dist/ (et non plus la racine du repo) vers o2switch.
