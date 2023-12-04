export function findMissingPage1(pageNumbers: number[]): number {
    let missingPage: number = 0
    const arr = new Array<number>(pageNumbers.length)
    pageNumbers.forEach(pageNumber => {
        arr[pageNumber - 1] = pageNumber
    })

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        if (element === undefined) {
            missingPage = i + 1
        }
    }
    return missingPage
}

export function findMissingPage2(pageNumbers: number[]): number {
    // sum from 1 to n : (n^2 + n)/2
    // sum from 1 to 10 : 55
    const bookSize = pageNumbers.length + 1
    const totalSum = (bookSize * bookSize + bookSize) / 2
    let partialSum = 0
    let missingPage: number = 0

    pageNumbers.forEach(pageNumber => {
        partialSum = partialSum + pageNumber
    })

    missingPage = totalSum - partialSum

    return missingPage
}
