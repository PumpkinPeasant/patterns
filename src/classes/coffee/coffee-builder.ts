import {ICoffeeBuilder} from "@/interfaces/coffee/coffee-builder";
import {Coffee} from "@/classes/coffee/coffee";

export class CoffeeBuilder implements ICoffeeBuilder {
    private coffee: Coffee;

    constructor() {
        this.reset();
    }

    public addEspresso(amount: number) {
        if (!this.coffee.espresso) this.coffee.espresso = amount
        else this.coffee.espresso += amount;
    };

    public addMilk(amount: number) {
        if (!this.coffee.milk) this.coffee.milk = amount
        else this.coffee.milk += amount;
    };

    public addWater(amount: number) {
        if (!this.coffee.water) this.coffee.water = amount
        else this.coffee.water += amount;
    };

    public addSyrup(syrup: string) {
        if (!this.coffee.syrups) this.coffee.syrups = [syrup]
        this.coffee.syrups.push(syrup);
    };

    public addTopping(topping: string) {
        if (!this.coffee.toppings) this.coffee.toppings = [topping]
        this.coffee.toppings.push(topping);
    };

    public reset(): void {
        this.coffee = new Coffee();
    }

    public getCoffee(): Coffee {
        const result = this.coffee;
        this.reset();
        return result;
    }
}