class Animal {

    constructor(nom) {
        this.nom = nom;
    }

    NbPattes(n) {
        this.NbPattes = n;
    }

    parler() {
        console.log(this.nom + ' fait du bruit.');
    }

    afficher() {
        console.log('Nom : ', this.nom);
        console.log('Nombre de pattes : ', this.NbPattes);
    }
}

// Possibilité de créer des classes qui héritent une classe existante tout en redefinissant ses méthodes.

class Chien extends Animal {
    NbPattes = 3;
    parler() {
        console.log(this.nom + ' fait woof woof.');
    }
}

class Chat extends Animal {
    constructor(nom) {
        super(nom);
        this.NbPattes = 4;
    }
    parler() {
        console.log(this.nom + ' fait miaou.');
    }
}

let medor = new Animal('Medor');
medor.NbPattes(4);
medor.afficher();
medor.parler();

let rex = new Chien('Rex');
rex.afficher();
rex.parler();

let felix = new Chat('Felix');
felix.afficher();
felix.parler();

