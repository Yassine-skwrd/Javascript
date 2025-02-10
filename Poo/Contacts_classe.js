const { cpuUsage } = require('node:process');
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Contact {
    constructor (name, firstname, birthday, genre, adress, cp, city, phone, email,) {
        this.nom = name;
        this.prenom = firstname;
        this.date_de_naissance = birthday;
        this.genre = genre;
        this.adresse = adress;
        this.cp = cp;
        this.ville = city;
        this.tel = phone;
        this.courriel = email;
    }

    toString() {
        console.log(`Contact :\n\n- Nom : ${this.nom}\n- Prénom : ${this.prenom}\n- Date : ${this.date_de_naissance}`);
        console.log(`- Genre : ${this.genre}\n- Adresse : ${this.adresse}\n- Code postal : ${this.cp}`);
        console.log(`- Ville : ${this.ville}\n- Téléphone : ${this.tel}\n- Courriel : ${this.courriel}\n\n`);
    }
    email() {
        console.log("Un courriel à bien été envoyé à : ", this.courriel);
    }
}

let contact1 = new Contact(
    "Dupont", 
    "Jean", 
    "1985-04-12", 
    "Homme", 
    "12 Rue des Fleurs", 
    "75001", 
    "Paris", 
    "0102030405", 
    "jean.dupont@email.com"
);

let contact2 = new Contact(
    "Martin", 
    "Sophie", 
    "1992-08-21", 
    "Femme", 
    "23 Boulevard Saint-Germain", 
    "75005", 
    "Paris", 
    "0203040506", 
    "sophie.martin@email.com"
);

let contact3 = new Contact(
    "Durand", 
    "Michel", 
    "1978-11-30", 
    "Homme", 
    "58 Rue de la République", 
    "69002", 
    "Lyon", 
    "0304050607", 
    "michel.durand@email.com"
);

// Affichage des informations des contacts
contact1.toString();
contact2.toString();
contact3.toString();

contact2.email();