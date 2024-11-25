class IMC {
    constructor(nom, poids, taille) {
    this.name = nom;
    this.weight = poids;
    this.size = taille;
    }
    calculIMC(){
        return (this.weight/(this.size**2)).toFixed(2);
    }
    display(){
        console.log(`${this.name} (${this.weight}kg, ${this.size}m) a un IMC de : ${this.calculIMC()}`);
    }
}

let list = [
    new IMC("Sébastien Chabal", 135, 1.7),
    new IMC("Escaladeuse", 45, 1.68),
    new IMC("J0J0", 300, 2),
    new IMC("Gontrand", 90, 1.75),
    new IMC("Colonel Clock", 200, 1.75),
    new IMC("J0siane de la Vega", 99, 1.55)
];

for(let i = 0; i < list.length; i++) 
    list[i].display();