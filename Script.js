// Tableau pour stocker toutes les tâches
let listeTaches = [];

// Récupérer les éléments de la page
let formulaire = document.getElementById('taskForm');
let zoneTaches = document.getElementById('taskList');
let champTitre = document.getElementById('titre');
let champSousTitre = document.getElementById('sousTitre');
let champMessage = document.getElementById('message');
let champEmail = document.getElementById('email');
let champDate = document.getElementById('date');

// Fonction pour créer une nouvelle tâche
function creerTache(titre, sousTitre, message, email, date) {
    let nouvelleTache = {
        titre: titre,
        sousTitre: sousTitre,
        message: message,
        email: email,
        date: date,
        completed: false  // par défaut, la tâche n'est pas faite
    };
    return nouvelleTache;
}

// Fonction pour afficher toutes les tâches
function afficherTaches() {
    // On vide la zone d'affichage
    zoneTaches.innerHTML = '';
    
    // Si aucune tâche, on affiche un message
    if (listeTaches.length === 0) {
        zoneTaches.innerHTML = '<p class="no-tasks">Aucune tâche pour le moment. Ajoutez-en une !</p>';
        return;
    }
    
    // On parcourt toutes les tâches
    for (let i = 0; i < listeTaches.length; i++) {
        let tache = listeTaches[i];
        
        // Créer la carte de la tâche
        let carte = document.createElement('div');
        carte.className = 'task-card';
        
        // Si la tâche est complétée, on ajoute une classe
        if (tache.completed === true) {
            carte.classList.add('completed');
        }
        
        // Créer le contenu de la carte
        let contenu = '<div class="task-header">';
        contenu += '<h3 class="task-title">' + tache.titre + '</h3>';
        
        // Afficher le sous-titre seulement s'il existe
        if (tache.sousTitre !== '') {
            contenu += '<h4 class="task-subtitle">' + tache.sousTitre + '</h4>';
        }
        contenu += '</div>';
        
        contenu += '<div class="task-body">';
        
        // Afficher le message seulement s'il existe
        if (tache.message !== '') {
            contenu += '<p class="task-message">' + tache.message + '</p>';
        }
        
        contenu += '<div class="task-details">';
        
        // Afficher l'email seulement s'il existe
        if (tache.email !== '') {
            contenu += '<p class="task-email">📧 ' + tache.email + '</p>';
        }
        
        // Afficher la date seulement si elle existe
        if (tache.date !== '') {
            contenu += '<p class="task-date">📅 ' + tache.date + '</p>';
        }
        
        contenu += '</div>';
        contenu += '</div>';
        
        // Zone des actions (cocher et supprimer)
        contenu += '<div class="task-actions">';
        contenu += '<label class="checkbox-container">';
        contenu += '<input type="checkbox" class="task-checkbox"';
        
        // Cocher la case si la tâche est complétée
        if (tache.completed === true) {
            contenu += ' checked';
        }
        
        contenu += ' data-index="' + i + '">';
        contenu += '<span>Complétée</span>';
        contenu += '</label>';
        contenu += '<button class="btn-delete" data-index="' + i + '">🗑️ Supprimer</button>';
        contenu += '</div>';
        
        // Mettre le contenu dans la carte
        carte.innerHTML = contenu;
        
        // Ajouter la carte à la zone d'affichage
        zoneTaches.appendChild(carte);
    }
    
    // Appeler la fonction pour ajouter les événements
    ajouterEvenements();
}

// Fonction pour gérer les événements (cocher et supprimer)
function ajouterEvenements() {
    // Récupérer toutes les cases à cocher
    let cases = document.querySelectorAll('.task-checkbox');
    
    // Pour chaque case à cocher
    for (let i = 0; i < cases.length; i++) {
        cases[i].addEventListener('change', function() {
            // Récupérer l'index de la tâche
            let index = parseInt(this.getAttribute('data-index'));
            
            // Mettre à jour le statut de la tâche
            if (this.checked === true) {
                listeTaches[index].completed = true;
            } else {
                listeTaches[index].completed = false;
            }
            
            // Réafficher les tâches
            afficherTaches();
        });
    }
    
    // Récupérer tous les boutons supprimer
    let boutonsSupprimer = document.querySelectorAll('.btn-delete');
    
    // Pour chaque bouton supprimer
    for (let i = 0; i < boutonsSupprimer.length; i++) {
        boutonsSupprimer[i].addEventListener('click', function() {
            // Récupérer l'index de la tâche à supprimer
            let index = parseInt(this.getAttribute('data-index'));
            
            // Supprimer la tâche du tableau
            listeTaches.splice(index, 1);
            
            // Réafficher les tâches
            afficherTaches();
        });
    }
}

// Quand on soumet le formulaire
formulaire.addEventListener('submit', function(event) {
    // Empêcher le rechargement de la page
    event.preventDefault();
    
    // Récupérer les valeurs des champs
    let titre = champTitre.value.trim();
    let sousTitre = champSousTitre.value.trim();
    let message = champMessage.value.trim();
    let email = champEmail.value.trim();
    let date = champDate.value;
    
    // Vérifier que le titre est rempli
    if (titre === '') {
        alert('Vous devez remplir le titre !');
        return;
    }
    
    // Créer une nouvelle tâche
    let nouvelleTache = creerTache(titre, sousTitre, message, email, date);
    
    // Ajouter la tâche au tableau
    listeTaches.push(nouvelleTache);
    
    // Afficher toutes les tâches
    afficherTaches();
    
    // Vider le formulaire
    formulaire.reset();
    
    // Message dans la console (pour vérifier que ça marche)
    console.log('Tâche ajoutée !');
});

// Afficher les tâches au chargement de la page
afficherTaches();
