export class Candy {
    private readonly size: number
    private readonly color: string
    constructor(size: number, color: string) {
        this.size = size
        this.color = color
    }

    getSize(): number {
        return this.size
    }

    getColor(): string {
        return this.color
    }
}
