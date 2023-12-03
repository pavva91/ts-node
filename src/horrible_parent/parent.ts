export class CakeSplit {
    private son: number
    private daughter: number
    constructor() {
        this.son = 0
        this.daughter = 0
    }

    resetSplit(): void {
        this.son = 0
        this.daughter = 0
    }

    splitCake(): void {
        for (let i = 0; i < 20; i++) {
            if (this.flipCoin()) {
                this.son++
            } else {
                this.daughter++
            }
        }
    }

    private flipCoin(): boolean {
        return Math.random() < 0.5
    }
}
