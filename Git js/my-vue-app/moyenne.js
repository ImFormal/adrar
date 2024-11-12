function calcMoy(tab){
    console.log((tab[0]+tab[1]+tab[2])/3 >= 15 ? 'Très bien' : (tab[0]+tab[1]+tab[2])/3 >= 10 ? 'Assez bien' : 'Refus');
}

let notesRefus = [5, 7, 3];
let notesAssezBien = [11, 13, 12];
let notesTresBien = [20, 18, 15];
calcMoy(notesRefus);
calcMoy(notesAssezBien);
calcMoy(notesTresBien);