// Création d'un tableau (et sauvegarde dans une variable)
let t = [1,4,7,8,5,4,7,1];
console.log(t);

// Les cases sont numérotées automatiquement, à partir de 0.
// Je peux accéder à une case en particulier grâce à son numéro.
// t[numero]
// J'affiche dans la console le contenu de la troisième case du tableau :
console.log(t[2]);
// Je veux mettre 77 dans la cinquième case (numéro 4) du tableau :
t[4] = 77;

console.log(t);

// Ajouter une nouvelle case à la fin de t :
t.push(-8);
console.log(t);

// Retirer la dernière case du tableau :
t.pop();
console.log(t);
// La fonction pop retourne une valeur : celle qui était dans la dernière case.
console.log(t.pop());

// Taille du tableau (nombre de cases) :
// t.length
console.log("Le tableau contient", t.length, "cases.");

//------

let age1 = 1;
let age2 = 147;
let age3 = 17;
let age4 = 47;

function displayMessage(age) {
    if(age < 18) {
        console.log("La personne est mineure.");
    } else {
        console.log("La personne est majeure.");
    }
}

displayMessage(age1);
displayMessage(age2);
displayMessage(age3);
displayMessage(age4);

for(let i = 1 ; i < 5 ; i++) {
    // J'aimerais bien faire :
    // displayMessage(agei); 
    // mais ça ne fonctionne pas
}

let ages = [1, 147, 17, 47, 4, 0, 20];

/*
displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);
displayMessage(ages[3]);
displayMessage(ages[4]);
*/
console.log("Avec tableau et boucle");
for(let i = 0 ; i < ages.length ; i++) {
    displayMessage(ages[i]);
}