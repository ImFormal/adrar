USE site_vitrine;

CREATE USER 'visiteur'@'%' IDENTIFIED BY '1234';
CREATE USER 'redacteur'@'%' IDENTIFIED BY '1234';
CREATE USER 'administrateur'@'%' IDENTIFIED BY '1234';

GRANT SELECT ON site_vitrine.`role` TO 'visiteur';
GRANT SELECT, INSERT ON site_vitrine.utilisateur TO 'visiteur';
GRANT SELECT ON site_vitrine.actualite TO 'visiteur';
GRANT SELECT, INSERT ON site_vitrine.media TO 'visiteur';
GRANT SELECT ON site_vitrine.actualite_media TO 'visiteur';

GRANT SELECT ON site_vitrine.`role` TO 'redacteur';
GRANT SELECT, INSERT ON site_vitrine.utilisateur TO 'redacteur';
GRANT SELECT, INSERT, UPDATE ON site_vitrine.actualite TO 'redacteur';
GRANT SELECT, INSERT, UPDATE ON site_vitrine.media TO 'redacteur';
GRANT SELECT, INSERT, UPDATE ON site_vitrine.actualite_media TO 'redacteur';

GRANT SELECT, INSERT, UPDATE, DELETE ON site_vitrine.`role` TO 'administrateur';
GRANT SELECT, UPDATE, DELETE ON site_vitrine.utilisateur TO 'administrateur';
GRANT SELECT, UPDATE, DELETE ON site_vitrine.actualite TO 'administrateur';
GRANT SELECT, INSERT, UPDATE, DELETE ON site_vitrine.media TO 'administrateur';
GRANT SELECT, DELETE ON site_vitrine.actualite_media TO 'administrateur';

FLUSH PRIVILEGES;