USE judoka;

INSERT INTO niveau(id_niveau, couleur_ceinture) VALUES
	(1, "blanche"),
    (2, "jaune"),
    (3, "orange"),
    (4, "verte"),
    (5, "bleu"),
    (6, "marron"),
	(7, "noire");
    
INSERT INTO judoka(id_judoka, nom_judoka, prenom_judoka, age, sexe, id_niveau) VALUES
	(1, "Lachance", "Dominique", 16, "F", 2),
    (2, "Porter", "Gilbert", 18, "H", 3),
	(3, "Lemaître", "Anne", 15, "F", 4),
	(4, "Robert", "Juliette", 12, "F", 1),
	(5, "Montiny", "Pierre", 17, "H", 5),
	(6, "Charrette", "Pascal", 21, "H", 6),
	(7, "Guay", "Émilie", 19, "F", 6),
	(8, "Maheu", "Louise", 14, "F", 4),
	(9, "Poulin", "Raymond", 26, "H", 7),
	(10, "Dupret", "Alain", 20, "H", 6);
    
INSERT INTO competition(id_cpt, nom_cpt, date_debut, date_fin) VALUES
	(1, "judo31", "2021-02-06", "2021-02-07"),
	(2, "Judo11", "2021-02-27", "2021-02-28"),
	(3, "Judo81", "2021-03-20", "2021-03-21"),
	(4, "Judo82", "2021-04-17", "2021-04-18");
    
INSERT INTO judoka_competition(id_cpt, id_judoka) VALUES
	(1, 1),
	(1, 3),
	(1, 4),
	(2, 2),
	(2, 5),
	(2, 6),
	(2, 9),
	(3, 10),
	(3, 9),
	(4, 1),
	(4, 3),
	(4, 8),
	(4, 4);  