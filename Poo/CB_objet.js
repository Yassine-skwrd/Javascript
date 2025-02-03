let compte_bancaire = {
    Client: 'Yassine',
    Numero: '4054 3255 5643 3452',
    Solde: 302,

    Afficher: function() {
        console.log(this.Client, '\n', this.Numero, '\n', this.Solde);
    },
    Crediter: function(add) {
        this.Solde += add;
        console.log('Un montant de : ', add, '€ a été crédité. Solde actuel : ', this.Solde);
    },
    Debiter: function(rem) {
        if(rem > this.Solde) {
            console.log('Vôtre solde restant est insufisant.');
            return "Err : solde insuf";
        }
        this.Solde -= rem;
        console.log('Un montant de : ', rem, '€ a été débité. Solde actuel : ', this.Solde);
    }
};

// compte_bancaire.Afficher();
// compte_bancaire.Crediter(320);
// compte_bancaire.Crediter(11);
// compte_bancaire.Debiter(30);

// Version optimisé par l'IA de mon code : 

let compte_bancaire_v2 = {
    Client: 'Yassine',
    Numero: '4054 3255 5643 3452',
    Solde: 302,

    Afficher() {
        console.log(this.Client, '\n', this.Numero, '\n', 'Solde: ', this.Solde, '€');
    },

    Crediter(add) {
        if (typeof add !== 'number' || add <= 0) {
            console.log('Montant invalide pour un crédit.');
            return;
        }
        this.Solde += add;
        console.log(`Un montant de : ${add}€ a été crédité. Solde actuel : ${this.Solde}€`);
    },

    Debiter(rem) {
        if (typeof rem !== Number || rem <= 0) {
            console.log('Montant invalide pour un débit.');
            return;
        }
        if (rem > this.Solde) {
            console.log('Votre solde restant est insuffisant.');
            return;
        }
        this.Solde -= rem;
        console.log(`Un montant de : ${rem}€ a été débité. Solde actuel : ${this.Solde}€`);
    }
};

// Test du compte bancaire
compte_bancaire_v2.Afficher();
compte_bancaire_v2.Crediter(320);
compte_bancaire_v2.Crediter(11);
compte_bancaire_v2.Debiter(30);
compte_bancaire_v2.Debiter(700);  // Test d'un débit qui dépasse le solde
