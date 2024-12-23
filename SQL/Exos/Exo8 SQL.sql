USE caisse_enregistreuse;

SELECT id_ticket, SUM(tarif_produit * quantite) AS total_ticket FROM ajouter JOIN produit ON ajouter.id_produit = produit.id_produit GROUP BY id_ticket
HAVING total_ticket > 10;

SELECT categorie.id_categorie, nom_categorie FROM categorie INNER JOIN produit ON categorie.id_categorie = produit.id_categorie GROUP BY categorie.id_categorie
HAVING COUNT(produit.id_produit) > 2;

SELECT produit.id_produit, nom_produit, MAX(quantite) AS quantite_max_ticket FROM ajouter INNER JOIN produit ON ajouter.id_produit = produit.id_produit GROUP BY ajouter.id_produit
HAVING quantite_max_ticket = 1;

SELECT vendeur.id_vendeur, prenom_vendeur, nom_vendeur FROM vendeur INNER JOIN ticket ON vendeur.id_vendeur = ticket.id_vendeur INNER JOIN ajouter ON ticket.id_ticket = ajouter.id_ticket INNER JOIN produit ON ajouter.id_produit = produit.id_produit GROUP BY vendeur.id_vendeur
HAVING SUM(produit.tarif_produit * ajouter.quantite) >= 50;
