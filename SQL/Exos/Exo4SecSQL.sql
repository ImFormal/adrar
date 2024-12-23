USE caisse;

DELIMITER $$
CREATE PROCEDURE ajouterproduit(
	IN new_nom_produit VARCHAR(50),
    IN new_description VARCHAR(255),
    IN new_tarif DECIMAL(10, 2),
    IN new_id_categorie INT
)
BEGIN
    START TRANSACTION;
    IF (SELECT nom_produit FROM produit WHERE nom_produit = new_nom_produit) > 0
    THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Attention, le produit existe déjà';
    ELSE
        INSERT INTO produit(nom_produit, description, tarif, id_categorie) 
        VALUES (new_nom_produit, new_description, new_tarif, new_id_categorie);
        SELECT p.id_produit AS id, p.nom_produit AS produit 
        FROM produit AS p
        WHERE p.nom_produit = new_nom_produit;
        COMMIT;
    END IF;
END; $$

CALL ajouterproduit("Tasse", "Ceci est une tasse", 10, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Alimentation"));

DELIMITER $$
CREATE PROCEDURE ajouterticket(
    IN new_date_creation DATETIME,
    IN new_id_vendeur INT
)
BEGIN
    START TRANSACTION;
    IF new_date_creation > NOW() 
    THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Attention, le ticket a une date invalide';
    ELSE
        INSERT INTO ticket(date_creation, id_vendeur) 
        VALUES (new_date_creation, new_id_vendeur);
        SELECT t.id_ticket, t.date_creation, t.id_vendeur
        FROM ticket AS t
        WHERE t.date_creation = new_date_creation AND t.id_vendeur = new_id_vendeur;
        COMMIT;
    END IF;
END;$$

CALL ajouterticket('2023-11-10', 1);
CALL ajouterticket('2025-10-10', 1);

DROP PROCEDURE ajouterticket_produit;

DELIMITER $$
CREATE PROCEDURE ajouterticket_produit(
    IN new_date_creation DATETIME,
    IN new_id_vendeur INT,
    IN produit1_id INT,
    IN quantite_produit1 INT,
    IN quantite_produit2 INT,
    IN produit2_id INT
)
BEGIN    
    DECLARE new_ticket_id INT;
    START TRANSACTION;
    IF NOT EXISTS (SELECT id_vendeur FROM vendeur WHERE id_vendeur = new_id_vendeur) THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Le vendeur spécifié n\'existe pas.';
    END IF;
    IF NOT EXISTS (SELECT id_produit FROM produit WHERE id_produit = produit1_id) THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Le produit 1 spécifié n\'existe pas.';
    END IF;
    IF NOT EXISTS (SELECT id_produit FROM produit WHERE id_produit = produit2_id) THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Le produit 2 spécifié n\'existe pas.';
    END IF;
    INSERT INTO ticket(date_creation, id_vendeur)
    VALUES (new_date_creation, new_id_vendeur);
    SET new_ticket_id = LAST_INSERT_ID();
    INSERT INTO produit_ticket(id_ticket, id_produit, quantite) VALUES (new_ticket_id, produit1_id, quantite_produit1);
    INSERT INTO produit_ticket(id_ticket, id_produit, quantite) VALUES (new_ticket_id, produit2_id, quantite_produit2);
    SELECT t.id_ticket, t.date_creation, t.id_vendeur, p.id_produit, p.nom_produit, quantite
    FROM ticket t
    JOIN produit_ticket pt ON t.id_ticket = pt.id_ticket
    JOIN produit p ON pt.id_produit = p.id_produit
    WHERE t.id_ticket = new_ticket_id;
    COMMIT;
END;$$

CALL ajouterticket_produit('2024-10-10', 1, 2, 3, 3, 5);

DROP PROCEDURE ajoutervendeur;
DELIMITER $$
CREATE PROCEDURE ajoutervendeur(
    IN new_prenom VARCHAR(50),
    IN new_nom VARCHAR(50)
)
BEGIN
    START TRANSACTION;
    IF EXISTS (SELECT nom_vendeur, prenom_vendeur FROM vendeur WHERE nom_vendeur = new_nom AND prenom_vendeur = new_prenom) THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Attention, ce vendeur existe déjà (nom et prénom).';
    END IF;
    INSERT INTO vendeur(nom_vendeur, prenom_vendeur) 
    VALUES (new_nom, new_prenom);
    SELECT v.nom_vendeur AS nom, v.prenom_vendeur AS prenom
    FROM vendeur AS v
    WHERE v.nom_vendeur = new_nom AND v.prenom_vendeur = new_prenom;
    COMMIT;
END;$$

CALL ajoutervendeur("Quentin", "Petit");

CREATE TABLE IF NOT EXISTS utilisateur (
	id_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    email_user VARCHAR(50) UNIQUE NOT NULL, 
    mdp_user VARCHAR(50) NOT NULL
)
ENGINE = InnoDB;

INSERT INTO utilisateur(email_user, mdp_user) VALUES("quentintoutpetitpetitbikini@gmail.com", "mollypug");
DROP PROCEDURE verif_compte;
DELIMITER $$
CREATE PROCEDURE verif_compte(
	IN new_email VARCHAR(50)
)
BEGIN
    START TRANSACTION;
    IF EXISTS (SELECT email_user FROM utilisateur WHERE email_user = new_email)
    THEN
        ROLLBACK;
        SIGNAL SQLSTATE '10000' SET MESSAGE_TEXT = 'Attention, le compte existe déjà';
    END IF;
END;$$

CALL verif_compte("kevinlebgdu31@gmail.com");
CALL verif_compte("quentintoutpetitpetitbikini@gmail.com");



/*
Créer une procédure qui va créer le compte et hasher son mot de passe en MD5,
Créer une procédure qui va vérifier si le compte est valide et le mot de passe est correct (vérifier le hash MD5),
Créer une procédure qui va permettre de mettre à jour le mot de passe en vérifiant l'ancien mot de passe (Hash md5) et le remplacer par le nouveau (hasher également en MD5).
*/