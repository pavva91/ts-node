// NOTE: Callable type in interface
interface TwoNumberCalculation {
    (x: number, y: number): number
}

// NOTE: Callable type in function type (is equivalent)
type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a, b) => a + b

const subtract: TwoNumberCalc = (a, b) => a - b

export function printCalculations(a: number, b: number): void {
    console.log(add(a,b))
    console.log(subtract(a,b))
}
