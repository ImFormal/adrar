USE caisse_enregistreuse;

INSERT INTO categorie (nom_categorie) VALUES 
("Beauté"), ("Cuisine"), ("Jardin"), ("Bricolage"), ("Animal");

INSERT INTO produit (nom_produit, description_produit, tarif_produit, id_categorie) VALUES
("Croquette", "Ceci est une croquette", 10, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Animal")),
("Marteau", "Ceci est un marteau", 5, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Bricolage")),
("Assiette", "Ceci est une assiette", 2, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Cuisine")),
("Rouge à lèvres", "Ceci est un rouge à lèvre", 1, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Beauté")),
("Tondeuse à gazon", "Ceci est une tondeuse à gazon", 100, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Jardin")),
("Brosse à chien", "Ceci est une brosse à chien", 5, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Animal")),
("Tuyau d'arrosage", "Ceci est un tuyau d'arrosage", 10, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Jardin")),
("Mascara", "Ceci est un mascara", 0.99, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Beauté")),
("Fourchette", "Ceci est une fourchette", 0.1, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Cuisine")),
("Tournevis", "Ceci est un tournevis", 3, (SELECT id_categorie FROM categorie WHERE nom_categorie = "Bricolage"));

INSERT INTO vendeur (nom_vendeur, prenom_vendeur) VALUES 
("Dupuis", "Carl"),
("Martin", "Martin"),
("Garcia", "Sergent"),
("Man", "Super"),
("Thubert", "Maxime");

INSERT INTO ticket (date_ticket, id_vendeur) VALUES
("2024-01-01 14:52:12", 1),
("2024-01-02 10:15:30", 2),
("2024-01-03 11:45:50", 3),
("2024-01-04 13:22:15", 4),
("2024-01-05 16:37:42", 5),
("2024-01-06 09:10:00", 6),
("2024-01-07 14:20:25", 7),
("2024-01-08 18:05:55", 8),
("2024-01-09 19:30:10", 9),
("2024-01-10 20:45:33", 10);

INSERT INTO ajouter (quantite, id_produit, id_ticket) VALUES
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Croquette"), 1),
(2, (SELECT id_produit FROM produit WHERE nom_produit = "Marteau"), 1),
(5, (SELECT id_produit FROM produit WHERE nom_produit = "Assiette"), 1),

(1, (SELECT id_produit FROM produit WHERE nom_produit = "Rouge à lèvres"), 2),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Tondeuse à gazon"), 2),
(4, (SELECT id_produit FROM produit WHERE nom_produit = "Mascara"), 2),

(2, (SELECT id_produit FROM produit WHERE nom_produit = "Brosse à chien"), 3),
(1, (SELECT id_produit FROM produit WHERE nom_produit = "Tuyau d'arrosage"), 3),
(6, (SELECT id_produit FROM produit WHERE nom_produit = "Fourchette"), 3),

(5, (SELECT id_produit FROM produit WHERE nom_produit = "Tournevis"), 4),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Mascara"), 4),
(2, (SELECT id_produit FROM produit WHERE nom_produit = "Assiette"), 4),

(7, (SELECT id_produit FROM produit WHERE nom_produit = "Croquette"), 5),
(4, (SELECT id_produit FROM produit WHERE nom_produit = "Mascara"), 5),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Marteau"), 5),

(1, (SELECT id_produit FROM produit WHERE nom_produit = "Tuyau d'arrosage"), 6),
(2, (SELECT id_produit FROM produit WHERE nom_produit = "Fourchette"), 6),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Croquette"), 6),

(2, (SELECT id_produit FROM produit WHERE nom_produit = "Tournevis"), 7),
(1, (SELECT id_produit FROM produit WHERE nom_produit = "Brosse à chien"), 7),
(5, (SELECT id_produit FROM produit WHERE nom_produit = "Marteau"), 7),

(4, (SELECT id_produit FROM produit WHERE nom_produit = "Rouge à lèvres"), 8),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Fourchette"), 8),
(1, (SELECT id_produit FROM produit WHERE nom_produit = "Tuyau d'arrosage"), 8),

(3, (SELECT id_produit FROM produit WHERE nom_produit = "Croquette"), 9),
(2, (SELECT id_produit FROM produit WHERE nom_produit = "Marteau"), 9),
(6, (SELECT id_produit FROM produit WHERE nom_produit = "Mascara"), 9),

(1, (SELECT id_produit FROM produit WHERE nom_produit = "Tondeuse à gazon"), 10),
(2, (SELECT id_produit FROM produit WHERE nom_produit = "Mascara"), 10),
(3, (SELECT id_produit FROM produit WHERE nom_produit = "Fourchette"), 10);
