// - titre (string)
// - auteur (string)
// - nbPages (number)
// - empruntable (boolean)
// - afficher() qui affiche le titre, l'auteur et le nombre de pages
// - estLong() qui renvoie true si le nombre de pages dépasse 300, false sinon
// - emprunter() qui renvoie "Le livre a été emprunté" si le livre est empruntable, "Le livre ne peut pas être emprunté" sinon
// - rendre() qui renvoie "Le livre a été rendu" si le livre a été emprunté, "Le livre n'a pas été rendu" sinon

let livre = {
    titre: "La belle et la bête",
    auteur: "Gabrielle-Suzanne Barbot de Villeneuve",
    nbPages: 250,
    empruntable: true,

    Afficher: function() {
        console.log('Le titre', this.titre, '\n L\'auteur : ', this.auteur, '\n Le nombre de pages : ', this.nbPages);
    },

    estLong: function() {
        return `Livre long: ${this.nbPages > 300}`;
    },

    emprunter: function() {
        if (this.empruntable === true) {
            this.empruntable = false;
            return "Ce livre est disponible, il a à été emprunté.";
        }
        else return "Ce livre n'est pas empruntable";
    },

    rendre: function() {
        if (this.empruntable === false)
            return "Le livre a été rendu.";
        else return "Le livre n'a pas été rendu";
    }
}

livre.Afficher();
console.log(livre.estLong());
console.log(livre.emprunter());
console.log(livre.rendre());