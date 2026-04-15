import {ICoffeeBuilder} from "@/interfaces/coffee/coffee-builder";
import {Coffee} from "@/classes/coffee/coffee";

export class CoffeeBuilder implements ICoffeeBuilder {
    private coffee: Coffee;
    private fill: number = 0;

    constructor() {
        this.reset();
    }

    public addEspresso(amount: number) {
        if (this.isFull(amount)) return;
        this.fill += amount;
        this.coffee.espresso += amount;
        return this;
    };

    public addMilk(amount: number) {
        if (this.isFull(amount)) return;
        this.fill += amount;
        this.coffee.milk += amount;
        return this;
    };

    public addWater(amount: number) {
        if (this.isFull(amount)) return;
        this.fill += amount;
        this.coffee.water += amount;
        return this;
    };

    public addSyrup(syrup: string) {
        this.coffee.syrups.push(syrup);
        return this;
    };

    public addTopping(topping: string) {
        this.coffee.toppings.push(topping);
        return this;
    };

    isFull(amount: number): boolean {
        return this.fill + amount > 100;
    }

    public reset(): void {
        this.coffee = new Coffee();
        this.fill = 0;
    }

    public getCoffee(): Coffee {
        const result = this.coffee;
        this.reset();
        return result;
    }
}