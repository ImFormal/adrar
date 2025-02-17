<?php
class Vehicule{
    private ?string $nom;
    private ?int $nbrRoue;
    private ?int $vitesseMax;

    public function __construct(?string $nom, ?int $nbrRoue, ?int $vitesseMax){
        $this->nom = $nom;
        $this->nbrRoue = $nbrRoue;
        $this->vitesseMax = $vitesseMax;
    }

    public function getNom():?string{
        return $this->nom;
    }
    public function getNbrRoue():?int{
        return $this->nbrRoue;
    }
    public function getVitesseMax():?int{
        return $this->vitesseMax;
    }

    public function setNom(?string $newNom):Vehicule{
        $this->nom = $newNom;
        return $this;
    }
    public function setNbrRoue(?int $newNbrRoue):Vehicule{
        $this->nbrRoue = $newNbrRoue;
        return $this;
    }
    public function setVitesseMax(?int $newVitesseMax):Vehicule{
        $this->vitesseMax = $newVitesseMax;
        return $this;
    }
    public function detect():string{
        return ($this->nbrRoue === 2) ? "Moto" : "Voiture";
    }
    public function boost():void{
        $this->vitesseMax += 50;
    }
    public function plusRapide(Vehicule $vehicule):Vehicule|string{
        if($vehicule->getVitesseMax() === $this->getVitesseMax())
            return "Les 2 véhicules ont la même vitesse";
        return ($vehicule->getVitesseMax() > $this->getVitesseMax()) ? $vehicule->getNom() : $this->getNom();
    }
}