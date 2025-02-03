console.log('tableau.js');

// Déclaration d'un tableau
let tableau = [1, 22, 13, 42, 45];
// Variante
// let tableau = new aray('a', 'b', 'c', 'd', 'e');

// Taille d'un tableau
let taille = tableau.length;
console.log('Taille = ', taille);

// Accéder à un élément du tableau (ATTENTION les indices commencent à 0)

let a = tableau[0]; // a = 1
let b = tableau[1]; // b = 22

// Boucle for
console.log('Boucle for :');
for (let i = 0; i < tableau.length; i++) console.log(tableau[i]);

// Supprimer le premier élément du tableau
tableau.shift();
tableau.splice(2, 1); // Supprime un élément à partir de l'indice 2

// Supprimer le dernier élément du tableau
tableau.pop();

// Ajouter un élément au début et a la fin du tableau
tableau.unshift(25);
tableau.push(99);

// Boucle forEach
console.log('Boucle forEach :');
tableau.forEach(
    function(element, index) {
        console.log(index, element);
    }
);

// Boucle forEach avec fonction fléchée
console.log('Boucle forEach avec fonction fléchée :');
tableau.forEach((element, index) => console.log(index, element));

let eleves = new Array('Nawel', 'Yoann', 'Badr', 'Anas', 'Yassine', 'Ulysse', 'Bryan');
// Ma version de l'exo 1
eleves.unshift(eleves[6]);
// Version amélioré
eleves.unshift(eleves.pop());

// Ma version de l'exo 2
eleves.push(eleves[0]);
eleves.shift();
//Version amélioré
eleves.shift(eleves.push());

//eleves.pop();
eleves.forEach((eleve, i) => console.log(' \n',i+1, eleve));