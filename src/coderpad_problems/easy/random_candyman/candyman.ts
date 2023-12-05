// candyStick
// various sizes
// 2 colors
// get random candyStick
//
//
// const bag :Candy[]
// average size of candies remaining in the bag
//

import { Candy, type CandyColors } from './candy'

export class CandyMan {
    candies: Candy[] = []
    countCandies: number
    countRedCandies: number
    totalSizes: number
    constructor() {
        this.countCandies = 0
        this.countRedCandies = 0
        this.totalSizes = 0
    }

    addCandy(size: number, color: CandyColors): void {
        const candy = new Candy(size, color)
        this.candies.push(candy)
        this.totalSizes += size
        this.countCandies++
        if (color === 'RED') {
            this.countRedCandies++
        }
    }

    getRandomCandy(): Candy | undefined {
        if (this.candies.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.candies.length)
            const candy = this.candies.splice(randomIndex, 1)[0]
            this.totalSizes -= candy.size
            this.countCandies--
            if (candy.color === 'RED') {
                this.countRedCandies--
            }
            return candy
        }
    }

    getAverageSize(): number {
        return this.totalSizes / this.countCandies
    }

    getRedCandyChance(): number {
        return this.countRedCandies / this.countCandies
    }
}
