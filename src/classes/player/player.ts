import {Inventory} from "@/classes/inventory/inventory";

export class Player {
    energy: number = 100

    inventory = new Inventory()
    wallet: number = 0

    sellItem(id: number) {
        this.inventory.removeItem(id)
        this.wallet += 50
    }

    consumeItem(id: number) {
        this.inventory.removeItem(id)
        this.energy += 10
    }
}