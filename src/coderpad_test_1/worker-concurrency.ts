export function executeTestWorker(): void {
    const workerPath = '/tmp/deps/worker'
    const inputs = ['aaa', 'aAa', 'aab']
    const promise = doCalculations(inputs, workerPath)
}

async function doCalculations(
    inputs,
    workerPath = '/tmp/deps/worker'
): Promise<Array<string | number>> {
    // Your code goes here
    const result = [] // calculate(inputs)
    inputs.forEach(input => {
        const worker = new Worker(workerPath)
        // TODO: How to use Worker
        // result.push(worker.onmessage())
    })

    return result
}
