export function runUnknown(): void {
    let myUnknown: unknown
    myUnknown = 12
    myUnknown = 'hello'
    myUnknown = 13
    if (typeof myUnknown === 'string') {
        console.log(myUnknown, 'is a string')
    }
    if (typeof myUnknown === 'number') {
        console.log(myUnknown, 'is a number')
    }
}
