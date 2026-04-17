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

    deleteItem(id: number) {
        this.items.filter(item => item.id !== id);
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