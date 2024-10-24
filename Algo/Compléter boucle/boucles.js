// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 1; i<=50; i++)
    console.log(i, "Bonjour");

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
for(let i = 0; i < 5; i++){
    console.log("A");
    console.log("B");
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 5; j++){
        console.log("A");
    }
    console.log("B");
}

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Exercice 5 : écrire dans la console :
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
console.log("Exercice 5");
for(let i = 3; i < 13; i++){
    console.log(i);
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
for(let i = 0; i < 10; i++){
    console.log(i%4);
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
for(let i = 0; i < 10; i++){
    if(i >= 5 && i < 8){
        console.log("A");
    } else{console.log(i);}
}

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
for(let i = 0; i < 10; i++){
    if(i%3){
        console.log(i);
    } else{console.log(100+i);}
}
    
// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
for(let i = 0; i < 10; i++){
    if(i%3){
        if((i+1)%3){console.log(100+i);}
        else{console.log(200+i);}
    } else{console.log(i)};
}

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= 6; j++){
        console.log(i, j);
    } 
}

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
for(let i = 1; i <= 6; i++){
    for(let j = i; j <= 6; j++){
        console.log(i, j);
    } 
}

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
let compteur = 0;
for(let i = 1; i <= 20; i++){
    for(let j = i; j <= 20; j++){
        console.log(i, j);
        compteur++;
    } 
}
console.log(compteur);

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
let table = 1;
for(let i = 1; i <= 9; i++){
    console.log(table, "x", i, "=", table*i);
}

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
table = 2;
for(let i = 1; i <= 9; i++){
    console.log(table, "x", i, "=", table*i);
}

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
for(let i = 1; i <= 9; i++){
    table = i;
    console.log("----Table de", table, "----");
    for(let j = 1; j <= 9; j++){
        console.log(table, "x", j, "=", table*j);
    }
}

// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
compteur = 0;
for(let i = 1; i <= 100; i++){
    compteur += i;
}
console.log(compteur);

// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
let n = 0;
compteur = 302253;
while(compteur > 0){
    n++;
    compteur-=n;
}
console.log(n);

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
let fib0 = 0;
let fib1 = 1;
let somme = 1;
for(let i = 2; i <= 11; i++){
    console.log(somme);
    somme = fib0 + fib1;
    fib0 = fib1;
    fib1 = somme;
}

// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
let multiples = 0;
for(let i = 1234; i <= 5678; i++){
    if(i%3 || i%7){
        multiples++;
    }
}  
console.log(multiples);

// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
let etoile = "";
for(let i = 1; i <= 5; i++){
    etoile += "*";
    console.log(etoile);
}

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
for(let i = 1; i <= 5; i++){
    etoile = "";
    for(let j = 0; j < 5-i; j++){
        etoile += " ";
    }
    for(let j = 5-i; j < 5; j++){
        etoile += "*";
    }
    console.log(etoile);
}

// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
for(let i = 1; i <= 5; i++){
    etoile = "";
    for(let j = 0; j < 5-i; j++){
        etoile += " ";
    }
    for(let j = 5-i; j < 5+i-1; j++){
        etoile += "*";
    }
    console.log(etoile);
}

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
for(let i = 1; i <= 5; i++){
    etoile = "";
    for(let j = 0; j < 5-i; j++){
        etoile += " ";
    }
    for(let j = 5-i; j < 5+i-1; j++){
        etoile += "*";
    }
    console.log(etoile);
}

for(let i = 1; i <= 4; i++){
    etoile = "";
    for(let j = 0; j < i; j++){
        etoile += " ";
    }
    for(let j = i; j < 9-i; j++){
        etoile += "*";
    }
    console.log(etoile);
}

