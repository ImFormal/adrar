USE caisse_enregistreuse;
SET SQL_SAFE_UPDATES = 0;

DELETE FROM categorie WHERE nom_categorie IN ('Beauté', 'Cuisine');
DELETE FROM vendeur WHERE id_vendeur = 1;
DELETE FROM ticket WHERE date_ticket < '2024-12-10 00:00:00';
DELETE FROM ajouter WHERE quantite > 5;