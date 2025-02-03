// Variable de type string, initialisée avec une chaîne de charactère

let etudiant = "Pierre";

// Variable de type tableau, initialisée avec une liste de chaînes de caractères

let etudiants = ["Pierre", "Marie", "Jean", "Luc", "Sophie"];

// Affiche le contenu des variables

console.log("etudiant : ", etudiant);
console.log("etudiants : ", etudiants);

// Affiche la taille du tableau 

console.log("taille du tableau : ", etudiants.length);

// Affiche le premier élément du tableau

console.log("premier élément du tableau : ", etudiants[0]);
console.log("dernier élément du tableau : ", etudiants[etudiants.length- 1]);

// Boucle for pour afficher les éléments du tableau

for (let i = 0; i < etudiants.length; i++) console.log("etudiant : ", etudiants[i]);

// Ajouter un élément au tableau (à la fin)

etudiants.push("Sophie");
console.log("taille du tableau", etudiants.length);
console.log("etudiants", etudiants);

// Supprimer le dernier élément du tableau

etudiants.pop();
console.log("taille du tableau", etudiants.length);
console.log("etudiants", etudiants);

//Ajouter un élément au tableau (au début)

etudiants.unshift("Sophie");
console.log("taille du tableau", etudiants.length);
console.log("etudiants", etudiants);

// Supprimer le premier élément du tableau

etudiants.shift();
console.log("taille du tableau", etudiants.length);
console.log("etudiants", etudiants);