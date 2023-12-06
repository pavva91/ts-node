function getQuadruplet(
    numbers: number[],
    target: number
): number[] {
    const quadruplet = new Array<number>(4)
    let allocated: number = 0
    // INFO: Hypotesis numbers is decrescent by one for each
    let i = 0
    let n = numbers[i]
    while (n >= 0 && allocated < 4) {
        n = numbers[i]
        if ((n * 4) % target === 0) {
            quadruplet.forEach(m => {
                m = n
                allocated++
            })
        }
        if (n * 4 < target) {
            const subtraction = target - n * 4
            if (subtraction < n && subtraction > -1) {
                for (let j = 0; j < quadruplet.length - 1; j++) {
                    quadruplet[j] = n
                    allocated++
                }
            }
        }
        i++
    }
    return quadruplet
}

export function executeGetQuadruplet(): void {
    const numbers = [5, 4, 3, 2, 1, 0]
    const target = 11
    console.log(getQuadruplet(numbers, target))
}
