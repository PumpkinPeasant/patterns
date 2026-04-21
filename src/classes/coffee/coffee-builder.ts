import {ICoffeeBuilder} from "@/interfaces/coffee/coffee-builder";
import {Coffee} from "@/classes/coffee/coffee";
import {CoffeeDictionary} from "@/dictionaries/coffee.dictionary";

export class CoffeeBuilder implements ICoffeeBuilder {
    protected coffee: Coffee;
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
        const type = this.validateCoffeeRecipe();

        if (type) {
            const result = this.coffee;
            this.reset();
            return result;
        }
    }

    validateCoffeeRecipe() {
        if (!this.coffee.espresso) throw new Error("Espresso not found");

        let result = [...CoffeeDictionary];

        for (const [key, value] of Object.entries(this.coffee)) {
            console.log(key, value)
            if (Array.isArray(value)) {

            }
            else {
                result = result.filter(item => item[key] === value);
            }
            if(!result.length) throw new Error("No recipe match for this drink");
        }
        console.log(result)

        return result[0]
    }
}