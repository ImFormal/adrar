USE caisse_enregistreuse; 

SELECT id_ticket, date_ticket FROM ticket WHERE YEAR(date_ticket) = 2024;
SELECT id_produit, nom_produit, tarif_produit, id_categorie FROM produit WHERE id_categorie = 1;
SELECT id_produit, nom_produit, tarif_produit FROM produit WHERE tarif_produit > 2;
SELECT id_produit, nom_produit, tarif_produit FROM produit ORDER BY tarif_produit DESC;
SELECT id_produit, nom_produit, tarif_produit FROM produit WHERE nom_produit < 'J' AND tarif_produit > 30;
SELECT id_ticket, date_ticket FROM ticket ORDER BY date_ticket DESC LIMIT 1;
SELECT id_vendeur, prenom_vendeur, nom_vendeur  FROM vendeur ORDER BY id_vendeur ASC LIMIT 1;