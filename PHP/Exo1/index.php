<?php

include './maison.php';
include './vehicule.php';

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