export class Candy {
    constructor(
        public readonly size: number,
        public readonly color: CandyColors
    ) { }
}

export type CandyColors = 'RED' | 'GREEN'
