-- REQUETE DE STRUCTURE
-- CREATE DATABASE : créer une bdd
-- IF NOT EXISTS : lève un warning si la bdd existe déjà
-- CHARSET : permet de définir la manière d'encoder les symboles alphanum
CREATE DATABASE IF NOT EXISTS test2 CHARSET utf8mb4;

-- USE : permet de dire à MYSQL sur quelle bdd travailler 
USE test2;

-- CREATE TABLE : permet de créer une table dans ma bdd
-- ENGINE : permet de définir le moteur qui va gérer les relations entre table
-- INT, VARCHAR, DATE : les typages d'un champ
-- PRIMARY KEY : définit le champ en clé primaire
-- AUTO_INCREMENT : définit que le champ va s'auto-incrémenter à chaque enregistrement
-- NOT NULL : définit que le champ doit être rempli lors d'un nouvel enregistrement
-- UNIQUE : définit que le champ ne contiendra pas de doublon dans ses valeurs
-- DEFAULT : permet de donner une valeur par défaut si aucune valeur n'a été donné lors de l'enregistrement
-- NOW() / CURRENT_DATE: permet de retourner la date courrante
CREATE TABLE IF NOT EXISTS users(
	id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name_user VARCHAR(50),
    firstname_user VARCHAR(50),
    email_user VARCHAR(50) UNIQUE NOT NULL,
    password_user VARCHAR(100) NOT NULL,
    date_creation DATE NOT NULL DEFAULT (CURRENT_DATE)
)
ENGINE = InnoDB;

-- FOREIGN KEY : permet de définir un champ qui sert de clé étrangère
-- REFERENCES : permet de dire à quel clé est reliée la clé étrangère 
-- ON DELETE CASCADE : permet de définir la suppression en cascade (si le user est supprimé, l'article est supprimé)
-- ON UPDATE CASCADE : permet de définir la mise à jour en cascade
CREATE TABLE IF NOT EXISTS articles(
	id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    date_creation DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS be(
	id_article INT,
    id_category INT,
    PRIMARY KEY (id_article, id_category)
)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS categories(
	id_category INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name_category VARCHAR(50) NOT NULL UNIQUE
) 
ENGINE = InnoDB;

-- CREACTION DE CLE ETRANGERE APRES-COUP :
-- ALTER TABLE : commande permettant de modifier la structure de mes tables
-- ADD : je veux ajouter quelque chose à ma table
-- CONSTRAINT : permet de donner un nom à la contrainte de clé étrangère
ALTER TABLE be ADD FOREIGN KEY (id_article) REFERENCES articles(id_article) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE be ADD CONSTRAINT fk_be_categories FOREIGN KEY (id_category) REFERENCES categories(id_category) ON DELETE CASCADE ON UPDATE CASCADE;
