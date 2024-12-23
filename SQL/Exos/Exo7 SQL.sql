USE caisse_enregistreuse;

SELECT COUNT(nom_vendeur) FROM vendeur;
SELECT COUNT(id_ticket) FROM ticket;
SELECT id_vendeur, COUNT(id_ticket) FROM ticket GROUP BY id_vendeur;
SELECT AVG(quantite) FROM ajouter;
SELECT id_ticket, AVG(quantite) FROM ajouter GROUP BY id_ticket;
SELECT id_categorie, COUNT(nom_produit) FROM produit GROUP BY id_categorie;
SELECT AVG(tarif_produit) FROM produit;
SELECT id_categorie, AVG(tarif_produit) FROM produit GROUP BY id_categorie;
SELECT id_ticket, date_ticket FROM ticket WHERE date_ticket = (SELECT MAX(date_ticket) FROM ticket);
SELECT AVG(age) FROM vendeur;
SELECT SUM(tarif_produit) FROM produit;
SELECT id_ticket, SUM(quantite) FROM ajouter GROUP BY id_ticket;