import {ICoffee} from "@/interfaces/coffee/coffee";

export class Coffee implements ICoffee{
    espresso: number
    milk: number
    water: number
    syrups: string[]
    toppings: string[]


    public listParts(): void {
        console.log(`Product parts: ${this}\n`);
    }
}
