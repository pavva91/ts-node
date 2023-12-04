// NOTE: Union Type + Tuple are used for error handling (a bit like in golang)
export function maybeGetUserInfo():
    | ['error', Error]
    | ['success', { name: string; email: string }] {
    if (flipCoin() === 'heads') {
        return ['success', { name: 'Adam', email: 'adam@example.com' }]
    } else {
        return ['error', new Error('The coin landed on tails')]
    }
}

function flipCoin(): string {
    if (Math.random() > 0.5) {
        return 'heads'
    }
    return 'tails'
}

// NOTE: Uses DISCRIMINATED UNIONS
export function printUsingDiscriminatedUnions(): void {
    const outcome = maybeGetUserInfo()
    if (outcome[0] === 'success') {
        console.log(`name: ${outcome[1].name}, email: ${outcome[1].email}`)
    } else {
        console.error(`error: ${outcome[1].message}`)
    }
}

// NOTE: Uses TYPE GUARDS
export function printUsingTypeGuard(): void {
    const [, value] = maybeGetUserInfo()
    if (value instanceof Error) {
        console.error(`error: ${value.message}`)
    } else {
        console.log(`name: ${value.name}, email: ${value.email}`)
    }
}
