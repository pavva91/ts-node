export class Ingredient {
    public storedItems: number
    constructor(readonly storingCapacity: number) {
        this.storedItems = 0
    }

    addItem(): boolean {
        if (this.storedItems < this.storingCapacity) {
            this.storedItems++
            return true
        }
        return false
    }

    removeItem(): boolean {
        if (this.storedItems > 0) {
            this.storedItems--
            return true
        }
        return false
    }
}

