class Employee{
    constructor(nom, prenom, age, salaire){
    this.name = nom;
    this.firstname = prenom;
    this.age = age;
    this.salary = salaire;
    }
}

class PME{
    constructor(nom, salarie, revenu, fraisFixe, fraisAchat){
    this.name = nom;
    this.salarie= salarie;
    this.revenu = revenu;
    this.fraisFixe = fraisFixe;
    this.fraisAchat = fraisAchat;
    this.frais = this.fraisFixe+this.fraisAchat;
    }

    calculFraisHomme(){
        let cout = 0;
        for(let i = 0; i < this.salarie.length; i++){
            cout+=this.salarie[i].salary;
        }
        cout *= 12;
        cout *= 1.9;
        return cout;
    }

    calculBilan(){
        return this.revenu - (this.frais+this.calculFraisHomme());
    }


    bilanCalculed(){
        console.log("------------MA PME-------------");
        console.log(`${this.name} : Cout Initial : ${this.frais}`);
        console.log(`${this.name} : Cout Total Equipe : ${this.calculFraisHomme()}`);
        console.log(`${this.name} : VENTES : ${this.revenu}`);
        console.log(`${this.name} : BILAN : ${this.calculBilan()}`);
    }
}

// // Scénario
const PME1 = new PME(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

PME1.bilanCalculed();