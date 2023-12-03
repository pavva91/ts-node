export class CakeSplit {
    son: number
    daughter: number
    constructor() {
        this.son = 0
        this.daughter = 0
    }

    resetSplit() :void {
        this.son = 0
        this.daughter = 0
    }

    splitCake(): void {
        for (let i = 0; i < 20; i++) {
            if (flipCoin()) {
                this.son++
            } else {
                this.daughter++
            }
        }
    }
}

function flipCoin(): boolean {
    return Math.random() < 0.5
}
