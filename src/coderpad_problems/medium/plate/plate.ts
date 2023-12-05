export class Plate {
    constructor(public readonly type: PlateTypes) { }
}

export type PlateTypes =
    | 'flower-decorated plate'
    | 'light green plate'
    | 'big blue plate'
