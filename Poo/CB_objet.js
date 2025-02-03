let compte_bancaire = {
    Client: 'Yassine',
    Numero: '4054 3255 5643 3452',
    Solde: 302,

    Afficher: () => {console.log(this.Client, '\n', this.Numero, '\n', this.Numero)
    },
    Crediter: () => {this.Solde += 106; console.log('Un montant de : 156€ à été crédité. Solde actuel : ', this.Solde)
    },
    Debiter: () => {this.Solde -= 46; console.log('Un montant de : 46€ à été débité. Solde actuel : ', this.Solde)
    }
};

compte_bancaire.Afficher();
compte_bancaire.Crediter();
compte_bancaire.Crediter();
compte_bancaire.Debiter();