// NOTE: Run this file directly with: node src/concurrency/threads-example.js
const {
    Worker,
    isMainThread,
    parentPort,
    workerData,
} = require('worker_threads')
const { sayHello } = require('./say-hello')

if (isMainThread) {
    // This code is executed in the main thread and not in the worker.

    // Create the worker.
    const worker1 = new Worker(__filename)
    // Listen for messages from the worker and print them.
    worker1.on('message', msg => {
        // console.log(msg)
    })

    const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const threads = new Set()
    for (let i = 0; i < inputs.length; i++) {
        const e = inputs[i]
        // const workerI = new Worker('./src/concurrency/say-hello.js', {
        //     workerData: {
        //         greetMessage: e,
        //     },
        // })
        const worker2 = new Worker(__filename)
        // Listen for messages from the worker and print them.
        worker2.on('message', msg => {
            console.log(i)
            // console.log(msg)
        })
        threads.add(worker2)
    }
    threads.forEach(worker => {
        worker.on('message', msg => {
            console.log(msg)
        })
    })
} else {
    // This code is executed in the worker and not in the main thread.
    const message = Date.now().toString()

    // sayHello(workerData.greetMessage)

    // Send a message to the main thread.
    // parentPort.postMessage('Hello world!')

    const timeout = 5000 * Math.random()
    new Promise(r => setTimeout(r, timeout)).then(() => {
        // Send a message to the main thread.
        // parentPort.postMessage('Hello world!')

        parentPort.postMessage(message)
    })
}
