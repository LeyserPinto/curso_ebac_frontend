class Human {
    constructor(nome, humaType, health) {
        this.health = health;
        this.nome = nome;
        this.humaType = humaType;
    }
}
class Hero extends Human {
    constructor(nome, humanType, typeSuperPower, health = 100) {
        super(nome,humanType, health);
        this.typeSuperPower = typeSuperPower;
    }   

    protectOurWorld() {
        console.log("defeat evil");
    }
}

class Villain extends Human {
    constructor(nome, humanType, typeSuperPower, health = 100) {
        super(nome,humanType, health);
        this.typeSuperPower = typeSuperPower;
    }   
    destroyYourWorld() {
        console.log("Kill everything");
    }
}
class Civil extends Human {
    constructor(nome,humanType, workArea, health = 50) {
        super(nome,humanType, health);
        this.workArea = workArea;
    }   

    obtainMoney() {
        console.log("Produce a Lot o Money");
    }
    beatufillWork() {
        console.log("Improve the work");
    }
    MoreClient() {
        console.log("get More Clients");
    }
}

//instancias de Classes
const kaoBoy = new Hero("KaoBoy", "Hero", "Super Strength");
const nekeGhost = new Villain("Neke", "Villian", "Acid fluid", 80);
const joe = new Civil("Joe", "Farmer", "Farm");
const alice = new Civil("Alice", "Needlewoman", "Needlework");

console.log(kaoBoy);
console.log(nekeGhost);
console.log(joe.obtainMoney());
console.log(alice.MoreClient());



