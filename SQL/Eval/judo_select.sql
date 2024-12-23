USE judoka;

SELECT * FROM judoka WHERE id_niveau = (SELECT id_niveau FROM niveau WHERE couleur_ceinture = "verte");
SELECT COUNT(*) FROM judoka_competition WHERE id_cpt = (SELECT id_cpt FROM competition WHERE nom_cpt = "judo31");
SELECT nom_judoka, prenom_judoka, age, sexe FROM judoka AS j INNER JOIN judoka_competition AS jc ON j.id_judoka = jc.id_judoka WHERE id_cpt = (SELECT id_cpt FROM competition WHERE nom_cpt = "judo81");
SELECT * FROM judoka WHERE age > 19 AND id_niveau = (SELECT id_niveau FROM niveau WHERE couleur_ceinture = "marron"); 
SELECT j.*, n.couleur_ceinture FROM judoka AS j INNER JOIN niveau AS n ON j.id_niveau = n.id_niveau ORDER BY nom_judoka ASC;