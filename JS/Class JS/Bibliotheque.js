class Bibliotheque{
  constructor(nom){
    this.nom = nom;
    this.biblio = [];
  }

  ajouterLivre(livre){
    this.biblio.push(livre);
  }

  emprunterLivre(nomLivre){
    const livre = this.biblio.find(livres => livres.nom === nomLivre);
    if(livre){
      if(livre.emprunt){
        livre.emprunt = false;
        console.log("Livre emprunté avec succès");
      } else{
        console.log("Livre plus disponible");
      }
    } else{
      console.log("Livre n'existe pas");
    }
  }

  retournerLivre(nomLivre){
    const livre = this.biblio.find(livres => livres.nom === nomLivre);
    if(livre){
      if(!livre.emprunt){
        livre.emprunt = true;
        console.log("Livre retourné avec succès");
      } else{
        console.log("Livre déjà retourné");
      }
    } else{
      console.log("Livre n'existe pas");
    }
  }
}

class Livre{
  constructor(nom, annee){
    this.nom = nom;
    this.annee = annee;
    this.emprunt = true;
  }
}

// Test du code
const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
const livre1 = new Livre("1984", 1949);
const livre2 = new Livre("Le Gros Petit Prince", 2000);

maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2);

maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Livre plus disponible.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Livre n'existe pas.