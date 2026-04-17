import {ICoffee} from "@/interfaces/coffee/coffee";

export class Coffee implements ICoffee{
    espresso: number = 0
    milk: number = 0
    water: number = 0
    syrups: string[] = []
    toppings: string[] = []
}

export class Cappuccino extends Coffee{
    name=  "Cappuccino"
    espresso: number = 30
    milk: number = 70
    water: number = 0
    syrups: string[] = []
    toppings: string[] = []

    constructor(syrups: string[] = [], toppings: string[] = []) {
        super();
        this.syrups = syrups;
        this.toppings = toppings;
    }
}
