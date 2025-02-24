// On crée un objet mysql à partir de la librairie nodejs mysql

const mysql = require('mysql');

const connexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbtest'
});

connexion.connect((err) => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

// A partir d'ici, on est connecté à la base de données MySQL

connexion.query('SELECT * FROM users', 
    (err, rows) => {
        if(err) throw err;
        console.log('Données reçues de dbtest : \n');
        // console.log(rows);
        // meilleur moyen d'affichage : 
        rows.array.forEach(row => {
            console.log(row['id'], row['name'], row['email'])
        });
    }
);