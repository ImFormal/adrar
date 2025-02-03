CREATE DATABASE IF NOT EXISTS site_vitrine CHARSET utf8mb4;

USE site_vitrine;

CREATE TABLE IF NOT EXISTS `role` (
    id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    libele VARCHAR(50) NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS media (
    id_media INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_fichier VARCHAR(50) NOT NULL,
    url VARCHAR(255) NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS utilisateur (
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(50) NOT NULL,
    login VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    mdp VARCHAR(100) NOT NULL,
    date_creation DATETIME NOT NULL,
    statut TINYINT(1) NOT NULL,
    id_media INT NOT NULL,
    id_role INT NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS actualite (
    id_actualite INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titre VARCHAR(50) NOT NULL,
    contenu TEXT NOT NULL,
    date_creation DATETIME NOT NULL,
    activation TINYINT(1) NOT NULL,
    auteur_id INT NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS actualite_media (
    id_actualite INT,
    id_media INT
)
ENGINE = InnoDB;


ALTER TABLE utilisateur ADD CONSTRAINT fk_media_utilisateur FOREIGN KEY (id_media) REFERENCES media(id_media) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE utilisateur ADD CONSTRAINT fk_role_utilisateur FOREIGN KEY (id_role) REFERENCES `role`(id_role) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE actualite ADD CONSTRAINT fk_auteur_actualite FOREIGN KEY (auteur_id) REFERENCES utilisateur(id_utilisateur) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE actualite_media ADD CONSTRAINT fk_actualite_actumedia FOREIGN KEY (id_actualite) REFERENCES actualite(id_actualite);
ALTER TABLE actualite_media ADD CONSTRAINT fk_media_actumedia FOREIGN KEY (id_media) REFERENCES media(id_media);