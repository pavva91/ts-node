import { UnreachableError } from "./exhaustive_conditionals_with_never_type/unreachable-error"

let value:
    | Date
    | null
    | undefined
    | 'pineapple'
    | [number]
    | { dateRange: [Date, Date] }

// NOTE: Built-in type-guards
if (value instanceof Date) {
    console.log(value.getDay())
} else if (typeof value === 'string') {
    console.log(value)
} else if (value === null) {
    console.log(value)
} else if (value === undefined) {
    console.log(value)
} else if (!value){
    console.log(value)
} else if (Array.isArray(value)){
    console.log(value.length)
} else if ("dateRange" in value){
    console.log(value.dateRange)
} else {
    throw new UnreachableError(
        value,
        `Unexpected vehicle type: ${value}`
    )
}
