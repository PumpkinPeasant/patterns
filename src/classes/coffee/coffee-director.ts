import {CoffeeBuilder} from "@/classes/coffee/coffee-builder";

export class Director {
    private builder: CoffeeBuilder;

    public setBuilder(builder: CoffeeBuilder): void {
        this.builder = builder;
    }

    public makeEspresso(): void {
        this.builder.addEspresso(0.33);
    }

    public makeAmericano(): void {
        this.builder.addEspresso(0.3);
        this.builder.addWater(0.7);
    }
}