/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// every plate of the same type is grouped
// 1 || 2 plates at a a time
// When 2 are neighbouring groups (not in the same order as the pile)
// never from unknown group
// insert in one action (1 for)
// pile changes while you add plates
// lower index
// mustReverse: boolean
//

import { Plate, type PlateTypes } from './plate'

export function cleanPlates(): void {
    const pile: Plate[] = []
    const startingPile: PlateTypes[] = [
        'flower-decorated plate',
        'light green plate',
        'light green plate',
        'big blue plate',
        'big blue plate',
    ]

    startingPile.forEach(type => {
        pile.push(new Plate(type))
    })

    let cousin: [PlateTypes, PlateTypes?] = [
        'light green plate',
        'light green plate',
    ]

    console.log(pile)
    insertPlates(pile, cousin)
    console.log(pile)

    cousin = ['big blue plate', 'light green plate']
    insertPlates(pile, cousin)
    console.log(pile)

    cousin = ['big blue plate']
    insertPlates(pile, cousin)
    console.log(pile)

    cousin = ['flower-decorated plate']
    insertPlates(pile, cousin)
    console.log(pile)

    cousin = ['light green plate', 'flower-decorated plate']
    insertPlates(pile, cousin)
    console.log(pile)
}

function insertPlates(
    pile: Plate[],
    [firstPlate, secondPlate]: [PlateTypes, PlateTypes?]
): void {
    if (secondPlate !== undefined) {
        let [index, shouldSwap] = getLowestIndex(pile, [
            firstPlate,
            secondPlate,
        ])
        if (shouldSwap) {
            pile.splice(++index, 0, new Plate(secondPlate))
            pile.splice(++index, 0, new Plate(firstPlate))
        } else {
            pile.splice(++index, 0, new Plate(firstPlate))
            pile.splice(++index, 0, new Plate(secondPlate))
        }
    } else {
        for (let i = 0; i < pile.length; i++) {
            const p = pile[i]
            if (firstPlate === p.type) {
                pile.splice(i, 0, new Plate(firstPlate))
                break
            }
        }
    }
}

function getLowestIndex(
    pile: Plate[],
    incomingPlates: [PlateTypes, PlateTypes]
): [number, boolean] {
    let shouldSwap: boolean = false
    let index: number = -1
    if (incomingPlates[1] !== undefined) {
        for (let i = 0; i < pile.length; i++) {
            const p = pile[i]
            if (incomingPlates[1] === p.type) {
                shouldSwap = true
                index = i
                break
            }
            if (incomingPlates[0] === p.type) {
                index = i
                break
            }
        }
        for (let j = index + 1; j < pile.length; j++) {
            const p = pile[j]
            if (shouldSwap) {
                if (incomingPlates[0] === p.type) {
                    index = j - 1
                    break
                }
            } else {
                if (incomingPlates[1] === p.type) {
                    index = j - 1
                    break
                }
            }
        }
    } else {
        for (let i = 0; i < pile.length; i++) {
            const p = pile[i]
            if (incomingPlates[0] === p.type) {
                index = i
                break
            }
        }
    }
    return [index, shouldSwap]
}
