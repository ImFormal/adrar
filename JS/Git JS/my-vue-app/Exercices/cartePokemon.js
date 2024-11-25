let maCarte = "Ronflex";
let taCarte = "Magmar";
let stockTemporaire = maCarte;
maCarte = taCarte;
taCarte = stockTemporaire;
console.log('maCarte',maCarte); // Magmar
console.log('taCarte',taCarte); // Ronflex

[maCarte, taCarte] = [taCarte, maCarte]; // Échange les valeurs de maCarte et taCarte
console.log('maCarte',maCarte); // Affiche 'Ronflex' après l'échange
console.log('taCarte',taCarte);