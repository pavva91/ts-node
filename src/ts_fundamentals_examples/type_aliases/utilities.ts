import type { UserContactInfo } from './type-aliases'

function printContactInfo(info: UserContactInfo): void {
    console.log(info)
    console.log(info.email)
}

export function printAll(): void {
    const painter1 = {
        name: 'robert',
        email: 'robert@example.com',
        age: 34,
    }
    const painter2: UserContactInfo = {
        name: 'bob',
        email: 'bob@example.com',
    }
    printContactInfo(painter1) // NOTE: totally fine
    printContactInfo(painter2)
}
