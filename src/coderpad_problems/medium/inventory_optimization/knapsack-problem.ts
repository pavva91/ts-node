import { Item } from "./item"

export function doLooting(): void {
    const items: Item[] = [
        new Item('Potion of Potionentiality', 1, 1, 30),
        new Item('Jeweled Dog Draught Excluder', 3, 1, 150),
        new Item('Spartan Shield', 2, 2, 300),
        new Item('Palindromic Sword o’Drows', 1, 3, 120),
        new Item('Unobsidian Armor', 2, 3, 540),
        new Item('Wardrobe of Infinite Lions', 20, 10, 1337),
    ]

    const inventory: number[][] = [
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1],
    ]

    console.log(inventory)
    const allocation = maximizeInventory(inventory, items)
    console.log(allocation)
    console.log(lootingTotalValue(inventory))
    console.log(inventory)
}

function fillGoldPerTile(items: Item[]): Array<[number, number]> {
    const goldPerTile: Array<[number, number]> = []
    for (let i = 0; i < items.length; i++) {
        goldPerTile.push([items[i].gold, i])
    }
    return goldPerTile.sort((a: [number, number], b: [number, number]) => {
        return a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1
    })
}

function isItemFitting(
    inventory: number[][],
    X0: number,
    X1: number,
    Y0: number,
    Y1: number
): boolean {
    for (let i = X0; i < X1; i++) {
        if (i === inventory.length) {
            return false
        }
        const row = inventory[i]
        for (let j = Y0; j < Y1; j++) {
            if (i === row.length) {
                return false
            }
            if (inventory[i][j] >= 0) {
                return false
            }
        }
    }
    return true
}

function fitItem(
    inventory: number[][],
    X0: number,
    X1: number,
    Y0: number,
    Y1: number,
    indexItem: number
): boolean {
    for (let i = X0; i < X1; i++) {
        for (let j = Y0; j < Y1; j++) {
            inventory[i][j] = indexItem
        }
    }
    return true
}

function maximizeInventory(inventory: number[][], items: Item[]): Map<number, number> {
    const allocation = new Map()
    const goldPerTileOrdered = fillGoldPerTile(items)
    let X0 = 0
    let Y0 = 0
    for (let i = 0; i < goldPerTileOrdered.length; i++) {
        const [, indexItem] = goldPerTileOrdered[i]
        allocation.set(indexItem, 0)
        let isItemFit: boolean = true
        while (isItemFit) {
            const X1 = X0 + items[indexItem].width
            const Y1 = Y0 + items[indexItem].height
            if (isItemFitting(inventory, X0, X1, Y0, Y1)) {
                fitItem(inventory, X0, X1, Y0, Y1, indexItem)
                let counter = allocation.get(i)
                allocation.set(i, ++counter)
                X0 = X0 + items[indexItem].width
                Y0 = Y0 + items[indexItem].height
            } else {
                isItemFit = false
            }
        }
    }
    return allocation
}

function lootingTotalValue(inventory: number[][]): number {
    let totalValue: number = 0
    inventory.forEach(row => {
        row.forEach(tile => {
            if (tile >= 0) {
                totalValue += tile
                console.log(totalValue)
            }
        })
    })
    return totalValue
}
