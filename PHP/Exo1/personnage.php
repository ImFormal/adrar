<?php

include "./arme.php";

abstract class Personnage{
    private ?string $nom;
    private InterfaceArme $arme;
    private ?string $type;

    private ?string $img;

    public function __construct(?string $nom, InterfaceArme $arme, ?string $type, ?string $img){
        $this->nom = $nom;
        $this->arme = $arme;
        $this->type = $type;
        $this->img = $img;
    }

    public function getNom(): ?string{
        return $this->nom;
    }

    public function getArme(): InterfaceArme{
        return $this->arme;
    }

    public function getType(): ?string{
        return $this->type;
    }

    public function getImg(): ?string{
        return $this->img;
    }

    public function afficherImage(): void {
        if ($this->img) {
            echo "<img src='{$this->img}' alt='{$this->nom}' style='width:150px; height:auto;'><br>";
        }
    }

    abstract public function afficher(): void;

    public function attaquer(): void{
        $arme = $this->getArme();
        if($arme->getType() === "Projectile Magique"){
            if($this->getType() !== "Magicien"){
                echo "Seul un magicien peut utiliser un projectile magique !<br><br>";
                return;
            }
        }
        echo $this->nom . " attaque avec son arme !<br>";
        $arme->attaquer();
    }
}

class Guerrier extends Personnage{
    public function afficher(): void{
        $this->afficherImage();
        echo "Je suis un guerrier ! Tu es capable d'accomplir de grandes choses !<br>";
    }
}

class Magicien extends Personnage{
    private ?int $mana = 3;

    public function afficher(): void{
        $this->afficherImage();
        echo "Je suis un magicien !<br>";
    }

    public function attaquer(): void{
        $arme = $this->getArme();
        if($arme->getType() === "Projectile Magique"){
            if($this->mana > 0){
                $this->mana--;
                echo "Mana restant : {$this->mana}<br>";
                $arme->attaquer();
                if($this->mana <= 0){
                    echo "Le magicien tombe inconscient !<br>";
                }
            } else {
                echo "Tu n'as plus de mana !<br>";
            }
        } else {
            $this->attaquer();
        }
    }
}

class Voleur extends Personnage{
    public function afficher(): void{
        $this->afficherImage();
        echo "Je suis un voleur !<br>";
    }
}
