export class CakeSplit {
    private sonPart: number
    private daughterPart: number
    constructor() {
        this.sonPart = 0
        this.daughterPart = 0
    }

    resetSplit(): void {
        this.sonPart = 0
        this.daughterPart = 0
    }

    splitCake(): void {
        for (let i = 0; i < 20; i++) {
            if (this.flipCoin()) {
                this.sonPart++
            } else {
                this.daughterPart++
            }
        }
    }

    private flipCoin(): boolean {
        return Math.random() < 0.5
    }
}
