#!/bin/bash
echo "Où voulez-vous stocker le projet ?"
read emplacement
echo "Choisir le nom de votre projet"
read projet
cd c:users/nom/desktop/git/ADRAR/$emplacement
if [ -d $projet ]
then 
    echo 'Le dossier existe déja'
# sinon si le dossier n'existe pas
else
    mkdir $projet
    cd $projet
    mkdir asset asset/js asset/css asset/images
    touch index.html
    touch asset/js/script.js asset/css/main.css asset/images/profil.png
    echo '<!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mon profil</title>
    </head>
    <body>
        <h1>Bienvenue sur mon super site</h1>
    </body>
    </html>'>index.html
fi