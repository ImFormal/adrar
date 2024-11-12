let nomPizzeria = '"La Pizzeria Raffinata"';
let taille = "XL";
let nomPizza = "Pizza Texan";
let base = "Crème"; 
let heureCommande = "21:04:03";
let heureLivraison = "21:45:00";
let supplement = "Aucun";
let elementAEnlever = "Olives";
let nomClient = "Martin Martin";
let adresseClient = "3 rue des martins, Martinville";
let prix = "14€";
let blague = 'Qu\'est-ce qu\'une pizza dit à une autre pizza qui lui fait de l\'ombre\n?"Arrête de me trancher la route!"'

let SumUpOrderPhraseConcat = "[" + heureCommande + "]\nVous venez de commander une " + nomPizza + " " + taille + " base " + base + " à " + prix + " avec en supplément : " + supplement + " et sans : " + elementAEnlever + ".\n\nVous serez livré à " + heureLivraison + " à l'adresse : " + adresseClient + " au nom de " + nomClient + "\n\nPetite blague : " + blague + "\n\nMerci d'avoir commandé chez " + nomPizzeria;
console.log(SumUpOrderPhraseConcat);

console.log("----");

let SumUpOrderPhrase = `[${heureCommande}]\nVous venez de commander une ${nomPizza}, taille ${taille}, base ${base} à ${prix} avec en supplément : ${supplement} et sans : ${elementAEnlever}.\n\nVous serez livré à ${heureLivraison} à l'adresse : ${adresseClient}, au nom de ${nomClient}.\n\nPetite blague : ${blague}\n\nMerci d'avoir commandé chez ${nomPizzeria}`;
console.log(SumUpOrderPhrase);