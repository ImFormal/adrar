USE judoka;

INSERT INTO judoka(nom_judoka, prenom_judoka, age, sexe, id_niveau) VALUES
	("Lagaffe", "Vincent", 45, "H", 2),
    ("Paradis", "Vanessa", 23, "F", 6);

DELETE FROM judoka WHERE (nom_judoka, prenom_judoka) IN(
	("Lagaffe", "Vincent"), 
    ("Paradis", "Vanessa")
);