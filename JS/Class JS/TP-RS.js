class Utilisateur{
    constructor(nom){
    this.nom = nom;
    this.publications = [];
    this.groupes = [];
    }

    publier(contenu){
        let motcensure = ["fck", "fcked", "stupide"];
        const contientMotInterdit = motcensure.some(mot => contenu.includes(mot));
        try{
            if(contientMotInterdit){
                throw new Error(`Le contenu "${contenu}" est innaproprié !`);
            }
            const publication = new Publication(this, contenu, []);
            this.publications.push(publication);
            return publication;
        } catch(error){
            console.error(error.message);
            return null;
        }
    }
}

class Publication{
    constructor(auteur, contenu){
        this.auteur = auteur;
        this.contenu = contenu;
        this.commentaire = [];
    }

    ajouterCommentaire(message) {
        let motCensure = ["fck", "fcked", "stupide"];
        const contientMotInterdit = motCensure.some(mot => (message.contenu).includes(mot));
        try{
            if(contientMotInterdit){
                throw new Error(`Le commentaire "${message.contenu}" est innaproprié !`);
            }   
            if(message.contenu.trim() === ""){
                throw new Error(`Commentaire vide !`);
            }
            this.commentaire.push(message);
            console.log(`${message.auteur.nom} a commenté ${message.contenu} sur la publication "${this.contenu}" de ${this.auteur.nom}`);
        } catch(error){
            console.error(error.message);
        }
    } 
}   

class Commentaire{
    constructor(auteur, contenu){
        this.auteur = auteur;
        this.contenu = contenu;
    }
}

class Groupe{
    constructor(nom, estPrivé){
        this.nom = nom;
        this.membres = [];
        this.estPrivé = estPrivé;
    }
    
    ajouterMembre(utilisateur){
        const testMembres = this.membres.find(membre => membre.nom === utilisateur.nom);
        if(!testMembres){
            this.membres.push(utilisateur);
            utilisateur.groupes.push(this);
            console.log(`${utilisateur.nom} vient d'être ajouté au groupe ${this.nom} !`)
        }
        else{
            console.error(`${utilisateur.nom} est déjà membre du groupe ${this.nom} !`);
        }
    }
    
    afficherContenu(utilisateur){
        const testMembres = this.membres.find(membre => membre.nom === utilisateur.nom);
        try{
            if(!testMembres && this.estPrivé == true){
                throw new Error(`[${utilisateur.nom}] Vous n'avez pas accès à ce groupe "${this.nom}" !`);
            }
            console.log(`[${utilisateur.nom}] Contenu du groupe "${this.nom}" affiché !`);
        } catch(error){
            console.error(error.message);
        }
    }    
}

// Tests
try {
    const utilisateur1 = new Utilisateur("Alice");
    const utilisateur2 = new Utilisateur("Bob");
    const amandine38 = new Utilisateur("Amandine du 38");
    const charlie = new Utilisateur("Charlie");

    const groupePublic = new Groupe("Voyageurs", false);
    const groupePrivé = new Groupe("Investisseurs", true);
    const justiceLeague = new Groupe("La Justice League", true);

    groupePublic.ajouterMembre(utilisateur1);
    groupePrivé.ajouterMembre(utilisateur2);
    groupePrivé.ajouterMembre(amandine38);
    groupePrivé.ajouterMembre(amandine38);
    
    const publication = utilisateur1.publier("Bienvenue dans mon réseau social !");
    const publicationInvalide = utilisateur2.publier("Bienvenue dans mon réseau social fcked!");
    if (publication) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }
    if (publicationInvalide) {
        console.log(`${utilisateur1.nom} a publié : "${publication.contenu}"`);
    }

    const commentaireValide = new Commentaire(utilisateur2, "Super publication !");
    if (publication) publication.ajouterCommentaire(commentaireValide);

    const commentaireInsultant = new Commentaire(utilisateur2, "C'est stupide !");
    if (publication) publication.ajouterCommentaire(commentaireInsultant);

    groupePublic.afficherContenu(utilisateur1); 
    groupePublic.afficherContenu(utilisateur2);
    groupePrivé.afficherContenu(utilisateur1);
    groupePrivé.afficherContenu(utilisateur2);
    justiceLeague.afficherContenu(charlie);


} catch (error) {
    console.error(`Erreur globale : ${error.message}`);
}