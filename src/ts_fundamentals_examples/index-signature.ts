// NOTE: Index Signature
// ISSUE: A record is preferred over an index signature
export const phones: {
    [k: string]: {
        country: string
        area: string
        number: string
    }
} = {}

// NOTE: Record
export const phones2: Record<
    string,
    {
        country: string
        area: string
        number: string
    }
> = {}
