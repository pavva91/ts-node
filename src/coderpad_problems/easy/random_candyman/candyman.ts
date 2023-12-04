// candyStick
// various sizes
// 2 colors
// get random candyStick
//
//
// const bag :Candy[]
// average size of candies remaining in the bag
//

import { Candy } from './candy'

export class CandyMan {
    candies: Candy[] = []

    addCandy(size: number, color: string): void {
        const candy = new Candy(size, color)
        this.candies.push(candy)
    }

    // getRandomCandy(): Candy {
    // }
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
