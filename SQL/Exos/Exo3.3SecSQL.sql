USE caisse;
-- Création de la Vue
-- CREATE VIEW vw_article_categorie AS 
(SELECT p.nom_produit AS nom, p.tarif, c.nom_categorie AS categorie FROM produit AS p
INNER JOIN categorie AS c ON p.id_categorie = c.id_categorie);

-- Utilisation de la vue
SELECT nom, tarif, categorie FROM vw_article_categorie WHERE categorie = 'Alimentation'
AND tarif > 2;

CREATE VIEW vw_affiche_ticket AS
SELECT t.id_ticket, v.nom_vendeur, v.prenom_vendeur, SUM(p.tarif * pt.quantite)
FROM ticket t
INNER JOIN vendeur v ON t.id_vendeur = v.id_vendeur
INNER JOIN produit_ticket pt ON t.id_ticket = pt.id_ticket
INNER JOIN produit p ON pt.id_produit = p.id_produit
GROUP BY t.id_ticket, v.nom_vendeur, v.prenom_vendeur;

CREATE VIEW vw_5_bestsellers AS
SELECT p.nom_produit, SUM(pt.quantite) AS total_vendu
FROM produit p
INNER JOIN produit_ticket pt ON p.id_produit = pt.id_produit
GROUP BY p.id_produit
ORDER BY total_vendu DESC
LIMIT 5;

CREATE VIEW vw_CA_vendeur AS
SELECT v.nom_vendeur, v.prenom_vendeur, SUM(p.tarif * pt.quantite) AS chiffre_affaire
FROM vendeur v
INNER JOIN ticket t ON v.id_vendeur = t.id_vendeur
INNER JOIN produit_ticket pt ON t.id_ticket = pt.id_ticket
INNER JOIN produit p ON pt.id_produit = p.id_produit
GROUP BY v.id_vendeur, v.nom_vendeur, v.prenom_vendeur;

CREATE VIEW vw_CA_month AS
SELECT MONTH(t.date_creation), SUM(p.tarif * pt.quantite) AS chiffre_affaire
FROM ticket t
INNER JOIN produit_ticket pt ON t.id_ticket = pt.id_ticket
INNER JOIN produit p ON pt.id_produit = p.id_produit
WHERE YEAR(t.date_creation) = 2024
GROUP BY MONTH(t.date_creation) ORDER BY MONTH(t.date_creation);

/*CREATE VIEW vw_best_cat_vendeur AS
SELECT v.nom_vendeur, v.prenom_vendeur, c.nom_categorie, SUM(pt.quantite * p.tarif) AS total_vendu
FROM vendeur v
INNER JOIN ticket t ON v.id_vendeur = t.id_vendeur
INNER JOIN produit_ticket pt ON t.id_ticket = pt.id_ticket
INNER JOIN produit p ON pt.id_produit = p.id_produit
INNER JOIN categorie c ON p.id_categorie = c.id_categorie
GROUP BY v.id_vendeur, c.id_categorie
HAVING total_vendu = (
    SELECT MAX(SUM(pt2.quantite * p2.tarif))
    FROM produit_ticket pt2
    INNER JOIN produit p2 ON pt2.id_produit = p2.id_produit
    INNER JOIN ticket t2 ON pt2.id_ticket = t2.id_ticket
    WHERE t2.id_vendeur = t.id_vendeur
    GROUP BY p2.id_categorie
)
ORDER BY v.nom_vendeur, v.prenom_vendeur;

*/

SELECT * FROM vw_affiche_ticket;
SELECT * FROM vw_5_bestsellers;
SELECT * FROM vw_CA_vendeur;
SELECT * FROM vw_CA_month;
SELECT * FROM vw_best_cat_vendeur;