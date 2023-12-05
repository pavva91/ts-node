import { UnreachableError } from './unreachable-error'

class CarHere {
    drive(): void {
        console.log('vroom')
    }
}
class Truck {
    tow(): void {
        console.log('towing')
    }
}
class Boat {
    floating(): void {
        console.log("I'm floating")
    }
}

// FAILED: the never throws the unreachable error; (assure that the conditional is exhaustive with a compile-tyme error)
// type Vehicle = CarHere | Truck | Boat

// PASSED: The conditional is exhaustive
type Vehicle = CarHere | Truck

const myVehicle: Vehicle = randomGetVehicle()

// INFO: The Exhaustive Conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow()
} else if (myVehicle instanceof CarHere) {
    myVehicle.drive()
} else {
    throw new UnreachableError(
        myVehicle,
        `Unexpected vehicle type: ${myVehicle}`
    )
}

function randomGetVehicle(): Vehicle {
    const random = Math.random()
    if (random < 0.5) {
        return new Truck()
    } else {
        return new CarHere()
    }
}
