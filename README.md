# A K Boulangerie

Landing page d'une boulangerie artisanale fictive à Strasbourg. Projet d'entraînement pour réviser les fondamentaux de JavaScript, HTML/CSS et Svelte 5 : une page unique, quelques interactions simples, aucune dépendance superflue.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) avec [Svelte 5](https://svelte.dev) en mode runes (`$state`, `$derived`, `$props`)
- [Tailwind CSS v4](https://tailwindcss.com) (tokens de couleur et polices dans `src/routes/layout.css`)
- JavaScript uniquement (pas de TypeScript)
- `adapter-static` : le site est pré-rendu en HTML statique
- Prettier et ESLint

Polices : Manrope et Instrument Serif, chargées depuis Google Fonts (`src/app.html`).

## Démarrage

Prérequis : [Node.js](https://nodejs.org) 22 ou plus récent.

```sh
npm install
npm run dev
```

Le site est servi sur http://localhost:5173.

## Commandes

| Commande          | Rôle                                             |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Serveur de développement                         |
| `npm run build`   | Build de production, écrit le site dans `build/` |
| `npm run preview` | Prévisualise le build de production              |
| `npm run lint`    | Vérifie le formatage (Prettier) puis ESLint      |
| `npm run format`  | Reformate tout le projet avec Prettier           |

## Structure

```text
src/
├── app.html                 # Gabarit HTML (langue, polices, classes du <body>)
├── lib/
│   ├── assets/              # Images et favicon (importées dans les composants)
│   ├── components/          # Header, Hero, Products, Craft, Visit, Footer, ...
│   └── data/                # Données : produits, étapes du savoir-faire, horaires
└── routes/
    ├── +layout.svelte       # Header, contenu, Footer, bouton « retour en haut »
    ├── +layout.js           # prerender = true (requis par adapter-static)
    ├── +page.svelte         # Assemble les sections de la page + titre et description
    └── layout.css           # Tailwind et tokens (@theme)
```

## Sections de la page

| Section      | Composant  | Ancre           | Ce qu'elle montre                                          |
| ------------ | ---------- | --------------- | ---------------------------------------------------------- |
| Accueil      | `Hero`     | `#accueil`      | Titre, texte d'accroche, photo, pastille « Sorti du four » |
| Produits     | `Products` | `#produits`     | Grille de produits avec filtre par catégorie               |
| Savoir-faire | `Craft`    | `#savoir-faire` | Trois étapes de fabrication                                |
| Horaires     | `Visit`    | `#horaires`     | Horaires, adresse, plan et lien vers l'itinéraire          |

Le menu et les boutons de la page pointent vers ces ancres. Comme le site est pré-rendu, une ancre sans cible fait échouer `npm run build` : en cas de renommage d'une section, mettre à jour son `id` et les liens qui y mènent.

## Modifier le contenu

- **Produits** : `src/lib/data/products.js`. Chaque produit a `name`, `category`, `image`, `alt` et `description`. Les catégories du filtre sont déduites des produits.
- **Étapes du savoir-faire** : `src/lib/data/craft-steps.js`.
- **Horaires** : `src/lib/data/opening-hours.js`. Une valeur `hours: null` affiche « Fermé ».
- **Images** : à placer dans `src/lib/assets/` puis à importer (Vite leur ajoute un nom unique au build).
- **Couleurs et polices** : tokens `--color-bakery-*` et `--font-*` dans `src/routes/layout.css`, utilisables en classes (`bg-bakery-cream`, `font-serif`, ...).

## Déploiement

`npm run build` produit un site statique dans `build/`, déployable sur n'importe quel hébergeur de fichiers statiques.

## Limites connues

- La mise en page est calée sur un affichage bureau (maquette de 1440 px). Le responsive mobile n'est pas fait.
- Les images ne sont pas optimisées (environ 2,4 Mo au total).
- `npm run lint` signale une erreur ESLint (`svelte/no-navigation-without-resolve`) sur les liens d'ancres du menu, laissée volontairement : le site tient sur une sfeule page à la racine.
- Les liens « Mentions légales », « Confidentialité » et Instagram sont des liens de remplissage.
