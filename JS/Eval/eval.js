/*
Exo 1 : déclarer des variables de différents types (string, number, boolean) et d'afficher leur contenu dans la console.
Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.
Conditions et boucles :
Exo 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.
Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.
Fonctions :
Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.
Tableaux et objets :
Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)
Manipulation de DOM :
Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte
*/


//Exo 1
console.log("-----EXO1-----");
let prenom = "Sébastien";
let age = 6;
let majeur = false;
console.log("Prénom :", prenom, "\nAge :", age, "\nMajeur ? :", majeur);

//Exo 2
console.log("-----EXO2-----");
let celcius = 0;
let fahrenheit = (celcius * 9/5) + 32 + "F°";
console.log(fahrenheit);

//Exo 3
console.log("-----EXO3-----");
let nombre1 = 134;
let nombre2 = 231;

console.log("Ce nombre est : " + (nombre1%2==0 ? "pair" : "impair"));
console.log("Ce nombre est : " + (nombre2%2==0 ? "pair" : "impair"));

//Exo 4
console.log("-----EXO4-----");
console.log("Boucle 1->10");
for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("Boucle 10->1");
for(let i = 10; i >= 1; i--){
    console.log(i);
}

//Exo 5
console.log("-----EXO5-----");
function sum(nb1, nb2){
    return nb1+nb2;
}
console.log(sum(5, 4));

//Exo 6
console.log("-----EXO6-----");
function wordIn(chaine, mot){
    let longueurmot = 0;
    for(let i = 0; i < chaine.length; i++){
        if(chaine[i] == mot[0]){
            longueurmot = 1;
            for(let j = 1; j <= mot.length; j++){
                if(chaine[i+j] == mot[j]){
                    longueurmot++;
                }
                if(longueurmot == mot.length){
                    console.log("Le mot :", mot, "est dans la chaine :", chaine);
                    return 1;
                }
            }
        }
    }
    console.log("Le mot :", mot, "n'est pas dans la chaine :", chaine);
    return 0;
}    

wordIn("probleme", "obl");
wordIn("Bonjour à tous", "à t");
wordIn("Test faux", "vraie");

//Exo 7
console.log("-----EXO7-----");
let prenoms = ["Lucile", "Jordan", "Maxime M", "Maxime T", "Romaric", "Apolline", "Sophie", "Yassine", "Marjorie", "Vincent", "Quentin", "Florian", "Kévin", "Alexandre"];
for(let i = 0; i < prenoms.length; i++){
    console.log(prenoms[i]);
}

//Exo 8
console.log("-----EXO8-----");
let personne = {
    nom : "Maxime",
    age : 22,
    ville : "Toulouse"
};
console.log("Prénom :", personne.nom, "\nÂge :", personne.age, "\nVille :", personne.ville);    

//Exo 9
console.log("-----EXO9-----");
document.write("Ne clique surtout pas sur ce bouton !");

//Exo 10
console.log("-----EXO10-----");
let bouton = document.createElement("button");
bouton.textContent = "Clique";
document.body.appendChild(bouton);
bouton.addEventListener("click", function(){
    alert("J'ai dis quoi ?");
});

//Exo 11 (API)
console.log("-----EXO11-----");
const url = "https://api.chucknorris.io/jokes/random";
fetch(url)
.then(response => response.json())
.then(data => {
    let jokeElement = document.createElement('p');
    jokeElement.innerHTML = `Blague Chuck Norris : "${data.value}"`;
    document.body.appendChild(jokeElement);
})

//Exo 12
console.log("-----EXO12-----");
let bouton2 = document.createElement("button");
bouton2.textContent = "Switch mode";
document.body.appendChild(bouton2);
bouton2.addEventListener("click", function(){
    if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "#7FFF00";
    }else{
        document.body.style.backgroundColor = "white";
    }
});