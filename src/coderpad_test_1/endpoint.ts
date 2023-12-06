export function executeTest(): void {
    const startNodeId = 2
    const fromIds = [1, 7, 3, 4, 2, 6, 9]
    // NOTE: Network with no loops
    const toIds =   [3, 3, 4, 6, 6, 9, 5]
    
    // NOTE: Self calling node (node 5, index 4)
    // const toIds =   [3, 3, 4, 6, 4, 9, 5]

    console.log(findNetworkEndpoint(startNodeId, fromIds, toIds))
}

function findNetworkEndpoint(
    startNodeId: number,
    fromIds: number[],
    toIds: number[]
): number {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let endpointId = startNodeId
    let jumpCounter = 0
    let foundEndpoint = false
    let isLoop = false
    while (!foundEndpoint && !isLoop) {
        const index = fromIds.indexOf(endpointId)
        jumpCounter++
        if (jumpCounter > fromIds.length) {
            isLoop = true
            break
        }
        if (index === -1) {
            foundEndpoint = true
            break
        }
        endpointId = toIds[index]
        if (endpointId === index) {
            isLoop = true
            console.log("LOOP")
            break
        }
    }

    return endpointId
}
