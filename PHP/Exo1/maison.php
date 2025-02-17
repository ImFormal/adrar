<!--
Bonus :
1) Ajouter un attribut nbrEtage à la classe Maison.
2) Modifier la méthode surface pour qu’elle prenne en compte le paramètre nbrEtage.
-->

<?php
class Maison{
    private ?string $nom;
    private ?float $longueur;
    private ?float $largeur;
    private ?float $surface;
    private ?int $nbEtage;

    public function __construct(?string $nom, float $longueur, float $largeur, ?int $nbEtage){
        $this->nom = $nom;
        $this->longueur = $longueur;
        $this->largeur = $largeur;
        $this->nbEtage = $nbEtage;
    }

    public function getNom():?string{
        return $this->nom;
    }

    public function getLongueur():?float{
        return $this->longueur;
    }

    public function getLargeur():?float{
        return $this->largeur;
    }

    public function getSurface():?float{
        return $this->surface;
    }

    public function getNbEtage():?int{
        return $this->nbEtage;
    }

    public function setNom(?string $newNom):Maison{
        $this->nom = $newNom;
        return $this;
    }

    public function setLongueur(?float $newLongueur):Maison{
        $this->longueur = $newLongueur;
        return $this;
    }

    public function setLargeur(?float $newLargeur):Maison{
        $this->largeur = $newLargeur;
        return $this;
    }
    public function surface():void{
        $this->surface = $this->longueur*$this->largeur*$this->nbEtage;
        echo "<p>La surface de {$this->getNom()} est égale à : {$this->surface} m2</p>";
    }

    public function setNbEtage(?int $nbEtage):Maison{
        $this->nbEtage = $nbEtage;
        return $this;
    }
}