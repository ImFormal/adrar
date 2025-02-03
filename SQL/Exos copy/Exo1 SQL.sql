CREATE DATABASE IF NOT EXISTS caisse_enregistreuse CHARSET utf8mb4;

USE caisse_enregistreuse;

CREATE TABLE IF NOT EXISTS categorie (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    nom_categorie VARCHAR(50) UNIQUE NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS produit (
    id_produit INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    nom_produit VARCHAR(50) NOT NULL,
    description_produit VARCHAR(255) NOT NULL,
    tarif_produit DECIMAL(4,2) NOT NULL,
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS vendeur (
    id_vendeur INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    prenom_vendeur VARCHAR(50) NOT NULL,
    nom_vendeur VARCHAR(50) NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ticket (
    id_ticket INT PRIMARY KEY AUTO_INCREMENT UNIQUE NOT NULL,
    date_ticket DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_vendeur INT,
    FOREIGN KEY (id_vendeur) REFERENCES vendeur(id_vendeur) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ajouter (
    id_produit INT,
    id_ticket INT,
    quantite INT NOT NULL,
    PRIMARY KEY (id_produit, id_ticket),
    FOREIGN KEY (id_produit) REFERENCES produit(id_produit) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_ticket) REFERENCES ticket(id_ticket) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;
