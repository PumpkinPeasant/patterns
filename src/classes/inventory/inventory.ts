export class Inventory {
    private currentIndex: number = 0;
    items: InventoryItem[]  = []


    getItems() {
        return this.items
    }

    addItem(item: any) {
        this.items.push(new InventoryItem(this.currentIndex, item));
        this.incrementIndex();
    }

    private incrementIndex() {
        this.currentIndex++;
    }

    public removeItem(id: number) {
        const index = this.items.findIndex(item => item.id === id);

        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

export class InventoryItem {
    id: number;
    item: any;

    constructor(id: number, item: any) {
        this.id = id;
        this.item = item;
    }
}