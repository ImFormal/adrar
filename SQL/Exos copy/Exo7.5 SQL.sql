USE caisse_enregistreuse;

SELECT nom_vendeur, prenom_vendeur, id_ticket FROM vendeur INNER JOIN ticket ON vendeur.id_vendeur = ticket.id_vendeur;
SELECT nom_categorie, nom_produit FROM categorie INNER JOIN produit ON categorie.id_categorie = produit.id_categorie;
SELECT nom_produit, tarif_produit, quantite FROM produit INNER JOIN ajouter ON produit.id_produit = ajouter.id_produit WHERE ajouter.id_ticket = 1;
SELECT nom_produit, tarif_produit, nom_categorie FROM ajouter INNER JOIN produit ON ajouter.id_produit = produit.id_produit INNER JOIN categorie ON produit.id_categorie = categorie.id_categorie WHERE ajouter.id_ticket = 1;
SELECT nom_produit, tarif_produit, nom_vendeur, prenom_vendeur FROM ajouter INNER JOIN produit ON ajouter.id_produit = produit.id_produit INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur WHERE vendeur.id_vendeur = 4;
SELECT nom_produit, tarif_produit, nom_categorie FROM produit INNER JOIN categorie ON produit.id_categorie = categorie.id_categorie WHERE categorie.nom_categorie = 'Animal';