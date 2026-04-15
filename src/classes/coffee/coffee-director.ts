import {CoffeeBuilder} from "@/classes/coffee/coffee-builder";

export class Director {
    private builder: CoffeeBuilder;

    constructor(builder: CoffeeBuilder)
    {
        this.builder = builder;
    }

    public makeEspresso(): void {
        this.builder.addEspresso(33);
    }

    public makeDoubleEspresso(): void {
        this.builder.addEspresso(66);
    }

    public makeAmericano(): void {
        this.builder.addEspresso(30).addWater(70);
    }

    public makeCappuccino(): void {
        this.builder.addEspresso(30).addMilk(70);
    }
}