class Utilisateur {
    constructor(nom, publications = [], groupes = []) {
        this.nom = nom;
        this.publications = publications;
        this.groupes = groupes;
    }

    publier(contenu) {
        try {
            if (contenu.includes("fck") || contenu.includes("fcked")) {
                throw new Error(`Erreur : Contenu inapproprié détecté.`);
            }
            const publication = new Publication(this, contenu, []);
            this.publications.push(publication);
            return publication;
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }
}

class Publication {
    constructor(auteur, contenu, commentaires = []) {
        this.auteur = auteur;
        this.contenu = contenu;
        this.commentaires = commentaires;
    }

    ajouterCommentaire(commentaire) {
        if (commentaire && commentaire.contenu.trim() !== "") {
            this.commentaires.push(commentaire);
        } else {
            console.error("Erreur : Commentaire vide !");
        }
    }
}

class Commentaire {
    constructor(auteur, contenu) {
        this.auteur = auteur;
        this.contenu = contenu;
    }
}

class Groupe {
    constructor(nom, membres = [], estPrivé = false) {
        this.nom = nom;
        this.membres = membres;
        this.estPrivé = estPrivé;
    }

    ajouterMembre(utilisateur) {
        const estDejaMembre = this.membres.find(membre => membre.nom === utilisateur.nom);
        if (!estDejaMembre) {
            this.membres.push(utilisateur);
            utilisateur.groupes.push(this);
        }
    }

    afficherContenu(utilisateur) {
        const estMembre = this.membres.find(membre => membre.nom === utilisateur.nom);
        try {
            if (!estMembre && this.estPrivé) {
                throw new Error(`Erreur : Vous n'avez pas accès à ce groupe.`);
            }
            console.log(`Contenu du groupe "${this.nom}" : [accessible à ${utilisateur.nom}]`);
        } catch (error) {
            console.error(error.message);
        }
    }
}

// Tests
try {
    // Création des utilisateurs
    const utilisateur1 = new Utilisateur("Alice");
    const utilisateur2 = new Utilisateur("Bob");

    // Création des groupes
    const groupePublic = new Groupe("Voyageurs", [], false);
    const groupePrivé = new Groupe("Investisseurs", [], true);

    // Ajout des utilisateurs aux groupes
    groupePublic.ajouterMembre(utilisateur1);
    groupePrivé.ajouterMembre(utilisateur2);

    // Publications valides et invalides
    const publicationValide = utilisateur1.publier("Bienvenue dans mon réseau social !");
    const publicationInvalide = utilisateur2.publier("Bienvenue dans mon réseau social fcked!");

    if (publicationValide) {
        console.log(`${utilisateur1.nom} a publié : "${publicationValide.contenu}"`);
    }
    if (publicationInvalide) {
        console.log(`${utilisateur2.nom} a publié : "${publicationInvalide.contenu}"`);
    }

    // Ajout de commentaires
    if (publicationValide) {
        const commentaireValide = new Commentaire(utilisateur2, "Super publication !");
        publicationValide.ajouterCommentaire(commentaireValide);

        const commentaireVide = new Commentaire(utilisateur2, "");
        publicationValide.ajouterCommentaire(commentaireVide);
    }

    // Vérification des accès aux groupes
    groupePublic.afficherContenu(utilisateur1); // Accessible
    groupePublic.afficherContenu(utilisateur2); // Accessible
    groupePrivé.afficherContenu(utilisateur1); // Non accessible
    groupePrivé.afficherContenu(utilisateur2); // Accessible

} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}
