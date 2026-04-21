type RecipeConfig = {
    id: string
    name: string
    image: string

    base: {
        espresso: number
        milk: number
        water: number
    }

    allowedSyrups: string[]
    allowedToppings: string[]
}