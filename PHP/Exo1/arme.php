<?php

interface InterfaceArme{
    public function afficher(): void;
    public function attaquer(): int;
    public function getType(): string;
}

class Epee implements InterfaceArme{
    private ?int $durabilite = 5;
    private ?string $type = "Epée";
    private ?int $degat = 10;

    public function __construct(?string $type){
        $this->type = $type;
    }

    public function afficher(): void{
        echo "Je suis une épée\n";
    }

    public function attaquer(): int{
        if($this->durabilite > 0){
            $random = rand(1, 100);
            if($random <= 10){
                $this->durabilite -= 1;
                echo "L'épée inflige {$this->degat} dégâts ! Mais perd un point de durabilité !<br><br>";
            } else {
                echo "L'épée inflige {$this->degat} dégâts !<br><br>";
            }
        } else {
            echo "L'épée est brisée<br><br>";
            return 0;
        }
        return $this->degat;
    }

    public function getType(): string {
        return $this->type;
    }
}

class Arc implements InterfaceArme{
    private ?int $munition = 5;
    private ?string $type = "Arc";
    private ?int $degat = 5;

    public function __construct(?string $type){
        $this->type = $type;
    }

    public function afficher(): void{
        echo "Je suis un arc\n";
    }

    public function attaquer(): int{
        if($this->munition > 0){
            $this->munition -= 1;
            echo "L'arc inflige {$this->degat} dégâts ! Il te reste {$this->munition} flèches !<br><br>";
            return $this->degat;
        } else {
            echo "Il n'y a plus de flèches<br><br>";
            return 0;
        }
    }

    public function getType(): string {
        return $this->type;
    }
}

class ProjectileMagique implements InterfaceArme{
    private ?string $type = "Projectile Magique";
    private ?int $degat = 15;

    public function __construct(?string $type){
        $this->type = $type;
    }

    public function afficher(): void{
        echo "Je suis un projectile magique\n";
    }

    public function attaquer(): int{
        echo "Le projectile magique inflige {$this->degat} dégâts !<br><br>";
        return $this->degat;
    }

    public function getType(): string {
        return $this->type;
    }
}
