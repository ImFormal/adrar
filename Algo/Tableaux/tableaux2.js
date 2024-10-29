let tab3 = [144, 202, 216, 216, 222, 64];
console.log("tab3 :", tab3);
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function printLastElement(tab){
    let save = tab.pop();
    tab.push(save);
    console.log(save);
}
printLastElement(tab3);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLastElement(tab){
    let save = tab.pop();
    tab.push(save);
    
    return save;
}
console.log(returnLastElement(tab3));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minTab(tab){
    let min = tab[0];
    for(let i = 0; i < tab.length; i++){
        if(min > tab[i]){
            min = tab[i];
        }
    }
    return min;
}
console.log(minTab(tab3));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxTab(tab){
    let max = 0;
    for(let i = 0; i < tab.length; i++){
        if(max < tab[i]){
            max = tab[i];
        }
    }
    return max;
}
console.log(maxTab(tab3));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function secondMaxTab(tab){
    let max = maxTab(tab);
    let secondmax = 0; 
    for(let i = 0; i < tab.length; i++){
        if(secondmax < tab[i] && tab[i] < max){
            secondmax = tab[i];
        }
    }

    return secondmax;    
}
console.log(secondMaxTab(tab3));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function occElement(tab, n){
    let occ = 0;
    for(let i = 0; i < tab.length; i++){
        if(tab[i] == n){
            occ++;
        }
    }
    return occ;
}
console.log(occElement(tab3, 216));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function elementExists(tab, n){
    for(let i = 0; i < tab.length; i++){
        if(tab[i] == n){
            return true;
        }
    }
    return false;
}
console.log(elementExists(tab3, 216)); 
console.log(elementExists(tab3, 6));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab4 = [];
for(let i = 1; i <= 7777; i++){
    tab4[i] = i;
}
console.log(tab4);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab5 = [];
for(let i = 1; i <= 77770; i++){
    tab5[i] = i*10;
}
console.log(tab5);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
for(let i = 1; i < tab5.length; i++){
    tab5[i] /= 2;
}
console.log(tab5);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function suppUnder50(tab){
    let elt = 0;
    while(elt < 50){
        elt = tab.pop();
    }
    tab.push(elt);

    return tab;
}
console.log(suppUnder50([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]