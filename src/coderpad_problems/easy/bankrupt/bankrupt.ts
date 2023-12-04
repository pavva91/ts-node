export function findMaxLoss(stockPricesOrderedByDate: number[]): number {
    let loss = 0
    for (let i = 0; i < stockPricesOrderedByDate.length - 1; i++) {
        const buy = stockPricesOrderedByDate[i]
        console.log(`BUY: ${buy}`)
        const min = findMinFromIndex(stockPricesOrderedByDate, i)
        const localLoss = min - buy
        if (localLoss < loss) {
            loss = localLoss
            console.log(`New loss value: ${loss}`)
        }
    }
    console.log(`Max loss value: ${loss}`)
    return loss
}

function findMinFromIndex(array: number[], startIndex: number): number {
    let min = 2147483649

    for (let i = startIndex + 1; i < array.length; i++) {
        const num = array[i]
        if (min > num) {
            min = num
        }
    }
    return min
}
