export interface ICoffeeBuilder {
    addEspresso(amount: number): void;
    addMilk(amount: number): void;
    addWater(amount: number): void;
    addSyrup(syrup: string): void;
    addTopping(syrup: string): void;
}