USE judoka;

UPDATE judoka 
SET id_niveau = id_niveau + 1 
WHERE id_judoka IN (
    SELECT id_judoka FROM (SELECT id_judoka FROM judoka ORDER BY id_judoka ASC LIMIT 5) AS five
);