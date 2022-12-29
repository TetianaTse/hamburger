class Hamburger {
    constructor(sizeHamb, stuffHamb, topingHamb) {
        this.sizeHamb = sizeHamb;
        this.stuffHamb = stuffHamb;
        this.topingHamb = topingHamb;
        this.showBurger();
        this.calculatePrice();
        this.calculateCalories();
    }

    static size = [
        {name: "Small", price: 50, calories: 20,},
        {name: "Big", price: 100, calories: 40,}
    ];
 
    static stuffing = [
        {name: 'Cheese', price: 10, calories: 20,},
        {name: 'Salad', price: 20, calories: 5,},
        {name: 'Potato', price: 15, calories: 10,}
    ];
    
    static toping = [
        {name: "Mayonez", price: 20, calories: 5,},
        {name: "Sauce", price: 15, calories: 0,}
    ];

    #totalPrice = 0;
    #staffing =[];
    #toping = [];

    showBurger() {
        if (this.stuffHamb !== undefined && this.stuffHamb !== null) {
            this.#staffing.push(this.stuffHamb);
        }
        if (this.topingHamb !== undefined && this.topingHamb !== null) {
            this.#toping.push(this.topingHamb);
        }
        return console.log(`Name: ${this.sizeHamb.name}`);
    }

    addStuff(stuffHamb) {
        this.#staffing.push(stuffHamb);
        console.log(`${stuffHamb.name} added`);
        let newPrice = this.calculatePrice();
    }

    addToping(topingHamb) {
        this.#toping.push(topingHamb);
        console.log(`${topingHamb.name} added`);
        let newPrice = this.calculatePrice();
    } 

    calculatePrice() {
        let stuffPrice = 0;
        if (this.stuffHamb !== undefined && this.#staffing.length !== 0) {
            for(let key in this.#staffing) {
                stuffPrice += this.#staffing[key].price;
            }
        }
        let topingPrice = 0;
        if (this.topingHamb !== undefined && this.#toping.length !== 0) {
            for(let key in this.#toping) {
                topingPrice += this.#toping[key].price;
            }
        }
        this.#totalPrice = this.sizeHamb.price + stuffPrice + topingPrice;
        console.log(`Price: ${this.#totalPrice}`);
        return this.#totalPrice;
    }
    
    calculateCalories() {
        let stuffCalories = 0;
        if (this.stuffHamb !== undefined && this.#staffing.length !== 0) {
            for(let key in this.#staffing) {
                stuffCalories += this.#staffing[key].calories;
            }
        }
        let topingCalories = 0;
        if (this.topingHamb !== undefined && this.#toping.length !== 0) {
            for(let key in this.#toping) {
                topingCalories += this.#toping[key].calories;
            }
        }
        let sumCalories = this.sizeHamb.calories + stuffCalories + topingCalories;
        console.log(`Calories: ${sumCalories}`);
    }
}

// Проверка 
/*
let bur = new Hamburger(Hamburger.size[1], Hamburger.stuffing[2], Hamburger.toping[0]);//135
bur.addStuff(Hamburger.stuffing[0]);//145
bur.addToping(Hamburger.toping[1]);//160
bur.addToping(Hamburger.toping[0]);//180


let bur2 = new Hamburger(Hamburger.size[0], null, null);//75
bur2.addStuff(Hamburger.stuffing[0]);
bur2.addStuff(Hamburger.toping[1]);
*/


