import {ICoffee} from "@/interfaces/coffee/coffee";

export class Coffee implements ICoffee{
    espresso: number = 0
    milk: number = 0
    water: number = 0
    syrups: string[] = []
    toppings: string[] = []
}
