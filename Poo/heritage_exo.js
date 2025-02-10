// Créer une classe Contact :
// Propriétés :
//     Nom,
//     Prenom,
//     Date de naissance,
// Méthodes :
//     afficher    // Affiche les infos du contact
// Hériter une classe Employe:
// Propriété :
//     Salaire
//     Anciennete (année)
// Méthode :
//     augmenterSalaire
//         Ajoute 10% si anciennete >10
//         Sinon ajoute 5%
//     afficher (avec le salaire et l'ancienneté)

class Contact {
    constructor(nom, prenom, date_naissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;

        // raccourci : Object.assign(this, {nom, prenom, date_naissance});
    }

    // Méthodes :

    toString() {
        console.log(`Contact :\n\n- Nom : ${this.nom}\n- Prénom : ${this.prenom}\n- Date : ${this.date_naissance}`);
    }
}

class Employe extends Contact {
    constructor(salaire, anciennete) {
        super(this.nom, this.prenom, this.date_naissance);

        this.salaire = salaire;
        this.anciennete = anciennete;
    }

    // Méthodes : 

    augmenterSalaire() {
        this.anciennete >= 10 ? this.salaire * 1.1 : this.salaire = 1.05;
    }

    toStringEmploye() {
        console.log(`L'employé ${this.prenom} travaille depuis ${this.anciennete} années. Son salaire est ${this.salaire}€`);
    }
}

let Badr = new Employe("Ounissi", "Badr", "31 juillet 2005", 1643, 11);

Badr.toString();
Badr.augmenterSalaire();
Badr.toStringEmploye();
