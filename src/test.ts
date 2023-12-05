export function computeClosestToZero(ts: number[]): number {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let closestToZero: number = Math.max()
    if (ts.length === 0) {
        return 0
    }

    for (let i = 0; i < ts.length; i++) {
        const temp = ts[i]
        if (temp < 0) {
            const absTemp = Math.abs(temp)
            if (absTemp < Math.abs(closestToZero)) {
                closestToZero = temp
            }
        } else {
            if (temp < Math.abs(closestToZero)) {
                closestToZero = temp
            } else if (temp === Math.abs(closestToZero) && closestToZero < 0) {
                closestToZero = temp
            }
        }
    }
    return closestToZero
}
