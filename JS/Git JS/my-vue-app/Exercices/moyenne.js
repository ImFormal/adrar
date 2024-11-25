function calcMoy(tab){
    let moy = 0;
    for(let i = 0; i < tab.length; i++)
        moy += tab[i]/tab.length;

    console.log(moy >= 15 ? 'Très bien' : moy >= 10 ? 'Assez bien' : 'Refus');
}

let notesRefus = [5, 7, 3];
let notesAssezBien = [11, 13, 12];
let notesTresBien = [20, 18, 15, 14];
calcMoy(notesRefus);
calcMoy(notesAssezBien);
calcMoy(notesTresBien);