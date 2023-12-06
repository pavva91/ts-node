interface Vehicle {
    spot: ParkSpot
}

export class Motorcicle implements Vehicle {
    constructor(public readonly spot: ParkSpot) {
    }
}

export class Car implements Vehicle {
    constructor(public readonly spot: ParkSpot) {
    }
}

export class Van implements Vehicle {
    constructor(public readonly spot: ParkSpot) {
    }
}

// type ParkSpot = MotorcicleSpot | CarSpot | VanSpot
type ParkSpot = string
