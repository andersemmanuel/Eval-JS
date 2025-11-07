# 📋 Gestionnaire de Tâches - BTS SIO

Application web simple pour gérer vos tâches quotidiennes. Création, affichage, validation et suppression de tâches avec une interface moderne en dark mode.

## 🎯 Objectif du projet

Créer une application web dynamique permettant de :
- Ajouter des tâches avec plusieurs informations (titre, sous-titre, message, email, date)
- Afficher les tâches sous forme de cartes
- Marquer une tâche comme complétée
- Supprimer une tâche

## 🚀 Fonctionnalités

### ✅ Gestion des tâches
- **Ajout de tâches** : Formulaire avec 5 champs (titre, sous-titre, message, email, date)
- **Affichage dynamique** : Les tâches s'affichent sous forme de cartes dans une grille responsive
- **Marquer comme complétée** : Case à cocher pour indiquer qu'une tâche est terminée
- **Suppression** : Bouton pour supprimer une tâche de la liste

### 🎨 Interface utilisateur
- **Dark mode élégant** : Design moderne avec fond sombre et cartes claires
- **Responsive** : Adaptation automatique aux écrans mobiles et tablettes
- **Animations douces** : Effets de survol et transitions fluides
- **Bouton avec effet glow** : Bouton "Ajouter" avec effet lumineux violet

## 📁 Structure du projet

```
Eval-JS/
│
├── index.html      # Structure HTML de l'application
├── styles.css      # Styles CSS (dark mode)
├── script.js       # Logique JavaScript
└── README.md       # Documentation du projet
```

## 🛠️ Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Styles et design (dark mode, animations, responsive)
- **JavaScript (Vanilla)** : Manipulation du DOM et gestion des tâches

## 📖 Utilisation

### Installation

1. Téléchargez ou clonez le projet
2. Ouvrez le fichier `index.html` dans un navigateur web moderne (Chrome, Firefox, Edge, Safari)

### Comment utiliser l'application

1. **Ajouter une tâche** :
   - Remplissez le formulaire avec les informations de votre tâche
   - Le champ "Titre" est obligatoire
   - Cliquez sur le bouton "➕ Ajouter"

2. **Marquer une tâche comme complétée** :
   - Cochez la case "Complétée" sur la carte de la tâche
   - La tâche sera visuellement modifiée (texte barré, fond grisé)

3. **Supprimer une tâche** :
   - Cliquez sur le bouton "🗑️ Supprimer" sur la carte de la tâche
   - La tâche sera retirée de la liste

## 💻 Structure du code

### HTML (`index.html`)
- Structure sémantique avec `<header>`, `<section>`, `<form>`
- Formulaire avec les champs : titre, sous-titre, message, email, date
- Zone d'affichage `<div id="taskList">` pour les cartes de tâches

### CSS (`styles.css`)
- Dark mode avec dégradé sombre (bleu/noir)
- Cartes claires avec ombres pour le contraste
- Design responsive avec media queries
- Animations et effets de survol

### JavaScript (`script.js`)
- **Variables globales** : `listeTaches` (tableau des tâches)
- **Fonction `creerTache()`** : Crée un objet tâche
- **Fonction `afficherTaches()`** : Génère dynamiquement les cartes de tâches
- **Fonction `ajouterEvenements()`** : Gère les événements (cocher, supprimer)
- **Événement submit** : Ajoute une nouvelle tâche au formulaire

## 📝 Structure d'une tâche

Chaque tâche est un objet JavaScript avec les propriétés suivantes :

```javascript
{
    titre: "Titre de la tâche",
    sousTitre: "Sous-titre optionnel",
    message: "Message détaillé",
    email: "email@example.com",
    date: "2024-01-15",
    completed: false  // true si la tâche est complétée
}
```

## 🎨 Caractéristiques du design

### Dark Mode
- Fond dégradé sombre (bleu/noir)
- Cartes blanches pour le contraste
- Texte clair pour la lisibilité
- Accents colorés (violet, bleu) pour les éléments importants

### Responsive Design
- Adaptation automatique aux petits écrans
- Grille flexible pour les cartes de tâches
- Formulaire optimisé pour mobile

## 🔧 Améliorations possibles

- Sauvegarde des tâches dans le localStorage
- Filtrage des tâches (complétées, non complétées)
- Recherche de tâches
- Modification d'une tâche existante
- Tri des tâches par date
- Catégories/tags pour les tâches

## 👨‍💻 Auteur

Projet réalisé dans le cadre du BTS SIO (Services Informatiques aux Organisations).

## 📄 Licence

Ce projet est un travail pédagogique.

---

**Note** : Cette application fonctionne entièrement côté client (front-end). Les données ne sont pas sauvegardées de manière persistante et seront perdues lors du rechargement de la page.

