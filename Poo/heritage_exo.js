// Créer une classe Contact avec nom , prénom et date de naissance
// Hériter une classe Employé avec un salaire et une ancienneté
// Ajouter différentes méthodes (voir le discord pour une consigne plus précise)

class Contact {
    constructor(nom, prenom, date_naissance) {
        // this.nom = nom;
        // this.prenom = prenom;
        // this.date_naissance = date_naissance;
        Object.assign(this, {nom, prenom, date_naissance});
        
        // raccourci : Object.assign(this, {nom, prenom, date_naissance});
    }

    // Méthodes :

    toString() {
        console.log(`Contact :\n\n- Nom : ${this.nom}\n- Prénom : ${this.prenom}\n- Date : ${this.date_naissance}`);
    }
}

class Employe extends Contact {
    constructor(nom, prenom, date_naissance, salaire, anciennete) {
        super(nom, prenom, date_naissance);

        this.salaire = salaire;
        this.anciennete = anciennete;
    }

    // Méthodes : 

    augmenterSalaire() {
        this.anciennete >= 10 ? this.salaire *= 1.1 : this.salaire *= 1.05;
    }

    toStringEmploye() {
        console.log(`L'employé ${this.prenom} travaille depuis ${this.anciennete} années. Son salaire est ${Math.round(this.salaire, 2)}€`);
    }
}

let Badr = new Employe("Ounissi", "Badr", "31 juillet 2005", 1643, 11);

Badr.toString();
Badr.augmenterSalaire();
Badr.toStringEmploye();
