class Car {
    make: string
    model: string
    year: number
    isElectric: boolean
}
class Truck {
    make: string
    model: string
    year: number
    towingCapacity: number
}
const vehicle = {
    make: 'honda',
    model: 'civic',
    year: 2019,
}

function printCar(car: { make: string; model: string; year: number }): void {
    console.log(`${car.make} ${car.model} ${car.year}`)
}

export function typeScriptIsStructuralTypeSystem(): void {
    console.log("Car Class Object:")
    printCar(new Car())
    console.log("Truck Class Object:")
    printCar(new Truck())
    console.log("Old Plain Object:")
    printCar(vehicle)
    console.log("With Java this stuff is not possible, Java is a Nominal Type System. To do that you need a Factory")
}
