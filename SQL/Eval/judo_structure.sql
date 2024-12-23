CREATE DATABASE IF NOT EXISTS judoka CHARSET utf8mb4;

USE judoka;

CREATE TABLE niveau(
	id_niveau INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	couleur_ceinture VARCHAR(50) UNIQUE NOT NULL
)
ENGINE = InnoDB;

CREATE TABLE judoka(
	id_judoka INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_judoka VARCHAR(50) NOT NULL,
    prenom_judoka VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    sexe VARCHAR(5) NOT NULL,
    id_niveau INT
)
ENGINE = InnoDB;

CREATE TABLE competition(
	id_cpt INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom_cpt VARCHAR(50) NOT NULL,
    date_fin DATE,
    date_debut DATE
)
ENGINE = InnoDB;

CREATE TABLE judoka_competition(
	id_judoka INT,
    id_cpt INT
)
ENGINE = InnoDB;

ALTER TABLE judoka ADD CONSTRAINT fk_id_niveau FOREIGN KEY (id_niveau) REFERENCES niveau(id_niveau);
ALTER TABLE judoka_competition ADD CONSTRAINT fk_id_judoka FOREIGN KEY (id_judoka) REFERENCES judoka(id_judoka);
ALTER TABLE judoka_competition ADD CONSTRAINT fk_id_cpt FOREIGN KEY (id_cpt) REFERENCES competition(id_cpt);