class Livre {
    constructor(titre, auteur, nbPages, empruntable) {
    this.titre = titre;
    this.auteur = auteur;
    this.nbPages = nbPages;
    this.empruntable = empruntable;
    }

    Afficher() {
        console.log('Le titre', this.titre, '\nL\'auteur : ', this.auteur, '\nLe nombre de pages : ', this.nbPages);
    }
}

let l1 = new Livre("Le livre de la Jungle", "Jsp", 453, false);
let l2 = new Livre("La belle et la bête", "Gabrielle-Suzanne Barbot de Villeneuve", 250, true);

l1.Afficher();
l2.Afficher();

// Vieille méthode : la méthode boucle for :

// const bibliothèque = [l1 , l2];
// for (let i = 0; i < bibliothèque.length; i++)
//     bibliothèque[i].Afficher();

//Nouvelle méthode : les boucles forEach : 

// bibliothèque.forEach(function(Livre) {Livre.Afficher()});

// forEach fléché :

bibliothèque.forEach(Livre => Livre.Afficher());