USE caisse_enregistreuse;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE vendeur ADD age INT NOT NULL DEFAULT 16 CHECK (age >= 16);
ALTER TABLE ajouter MODIFY quantite INT NOT NULL DEFAULT 1 CHECK (quantite > 0);
UPDATE vendeur SET nom_vendeur = 'Albert' WHERE id_vendeur = 2;
UPDATE produit SET tarif_produit = tarif_produit + 1 WHERE tarif_produit < 2;
UPDATE ticket SET id_vendeur = 5 WHERE id_vendeur = 2;
UPDATE categorie SET nom_categorie = 'nouveau' WHERE nom_categorie < 'C';
UPDATE ajouter SET quantite = quantite + 3 WHERE id_ticket IN (
    SELECT id_ticket FROM ticket WHERE id_vendeur = (
        SELECT id_vendeur 
        FROM vendeur 
        WHERE nom_vendeur = 'Man' AND prenom_vendeur = 'Super'
    )
);
UPDATE produit SET tarif_produit = tarif_produit * 0.9 WHERE id_categorie = (
    SELECT id_categorie 
    FROM categorie 
    WHERE nom_categorie = 'Animal'
);
UPDATE ticket SET date_ticket = DATE_ADD(date_ticket, INTERVAL 2 DAY) WHERE date_ticket > '2024-01-01 00:00:00';


