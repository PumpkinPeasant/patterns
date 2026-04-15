export interface ICoffee {
    espresso: number,
    milk?:  number | null,
    water?: number | null,
    syrups?: string[],
    toppings?: string[]
}
