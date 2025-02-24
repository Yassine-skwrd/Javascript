SET NAMES 'utf8mb4';
DROP DATABASE IF EXISTS dbtest;

USE dbtest;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

INSERT INTO users (name, email, password, created_at, updated_at) VALUES
('Alice Dupont', 'alice.dupont@example.com', SHA2('password123', 256), NOW(), NOW()),
('Bob Martin', 'bob.martin@example.com', SHA2('password123', 256), NOW(), NOW()),
('Charlie Bernard', 'charlie.bernard@example.com', SHA2('password123', 256), NOW(), NOW()),
('David Leroy', 'david.leroy@example.com', SHA2('password123', 256), NOW(), NOW()),
('Emma Roux', 'emma.roux@example.com', SHA2('password123', 256), NOW(), NOW()),
('François Morel', 'francois.morel@example.com', SHA2('password123', 256), NOW(), NOW()),
('Gabrielle Simon', 'gabrielle.simon@example.com', SHA2('password123', 256), NOW(), NOW()),
('Hugo Lefebvre', 'hugo.lefebvre@example.com', SHA2('password123', 256), NOW(), NOW()),
('Isabelle Fontaine', 'isabelle.fontaine@example.com', SHA2('password123', 256), NOW(), NOW()),
('Jules Durand', 'jules.durand@example.com', SHA2('password123', 256), NOW(), NOW()),
('Karine Petit', 'karine.petit@example.com', SHA2('password123', 256), NOW(), NOW()),
('Lucas Girard', 'lucas.girard@example.com', SHA2('password123', 256), NOW(), NOW()),
('Manon Richard', 'manon.richard@example.com', SHA2('password123', 256), NOW(), NOW()),
('Nicolas Robert', 'nicolas.robert@example.com', SHA2('password123', 256), NOW(), NOW()),
('Ophélie Dubois', 'ophelie.dubois@example.com', SHA2('password123', 256), NOW(), NOW()),
('Paul Lambert', 'paul.lambert@example.com', SHA2('password123', 256), NOW(), NOW()),
('Quentin Blanchard', 'quentin.blanchard@example.com', SHA2('password123', 256), NOW(), NOW()),
('Raphaël Fournier', 'raphael.fournier@example.com', SHA2('password123', 256), NOW(), NOW()),
('Sophie Garnier', 'sophie.garnier@example.com', SHA2('password123', 256), NOW(), NOW()),
('Thomas Renaud', 'thomas.renaud@example.com', SHA2('password123', 256), NOW(), NOW()),
('Ulysse Baron', 'ulysse.baron@example.com', SHA2('password123', 256), NOW(), NOW()),
('Valérie Perrot', 'valerie.perrot@example.com', SHA2('password123', 256), NOW(), NOW()),
('William Marchand', 'william.marchand@example.com', SHA2('password123', 256), NOW(), NOW()),
('Xavier Leclerc', 'xavier.leclerc@example.com', SHA2('password123', 256), NOW(), NOW()),
('Yasmine Aubert', 'yasmine.aubert@example.com', SHA2('password123', 256), NOW(), NOW()),
('Zacharie Colin', 'zacharie.colin@example.com', SHA2('password123', 256), NOW(), NOW()),
('Élodie Giraud', 'elodie.giraud@example.com', SHA2('password123', 256), NOW(), NOW()),
('Émile Bonnet', 'emile.bonnet@example.com', SHA2('password123', 256), NOW(), NOW()),
('Adrien Tessier', 'adrien.tessier@example.com', SHA2('password123', 256), NOW(), NOW()),
('Camille Renard', 'camille.renard@example.com', SHA2('password123', 256), NOW(), NOW());