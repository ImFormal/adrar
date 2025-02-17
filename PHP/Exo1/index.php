<?php

include './maison.php';
include './vehicule.php';
include './personnage.php';

$lavilladescoeursbrises = new Maison("La Villa des Coeurs Brisés", 30, 10, 3);
$lavilladescoeursbrises->surface();

$voiture = new Vehicule("Mercedes CLK", 4, 250);
$moto = new Vehicule("Honda CBR", 2, 280);
$moto2 = new Vehicule("Vroum", 2, 300);

echo $voiture->detect();
echo "<br>";
echo $moto->detect();
echo "<br><br>";

echo "La vitesse de la {$voiture->getNom()} est de {$voiture->getVitesseMax()}<br>";
$voiture->boost();
echo "Ajout de 50 de boost<br>";
echo "La nouvelle vitesse de la {$voiture->getNom()} est de {$voiture->getVitesseMax()}<br>";

echo "<br>";
echo $voiture->plusRapide($moto);
echo "<br>";
echo $voiture->plusRapide($moto2);
echo "<br><br>";

$epee = new Epee("Epée");
$arc = new Arc("Arc");
$projectile = new ProjectileMagique("Projectile Magique");
$guerrier = new Guerrier("Jean-Eude", $epee, "Guerrier", "./assets/guerrier.jpg");
$guerrier2 = new Guerrier("Jean-Quentin", $projectile, "Guerrier", "./assets/guerrier.jpg");
$magicien = new Magicien("Jean-Kévin", $projectile, "Magicien", "./assets/magicien.jpg");
$voleur = new Voleur("Jean-Florian", $arc, "Voleur", "./assets/voleur.jpg");

$guerrier->afficher();
$guerrier->attaquer();

$guerrier2->afficher();
$guerrier2->attaquer();

$magicien->afficher();
$magicien->attaquer();

$voleur->afficher();
$voleur->attaquer();