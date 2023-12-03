export interface User {
    name: string
    age: number
}
function isAdult(user: User): boolean {
    return user.age >= 18
}
export const justine: User = {
    name: 'Justine',
    age: 30,
}
export const isJustineAnAdult: boolean = isAdult(justine)
