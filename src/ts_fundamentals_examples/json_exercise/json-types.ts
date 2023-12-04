/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
// INFO: Index Signature
type JSONObject = { [k: string]: JSONValue }
type JSONArray = JSONValue[]
// INFO: Union Type
type JSONPrimitive = number | string | boolean | null
type JSONValue = JSONPrimitive | JSONArray | JSONObject

export function isJSON(arg: JSONValue): void {
    console.log(arg)
}

// PASSED: positive test cases
isJSON('hello')
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: 'hello' })
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, 'foo'] } })

// FAILED: negative test cases

// @ts-expect-error I'm testing JSONValue
isJSON(() => '')

// @ts-expect-error I'm testing JSONValue
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
isJSON(class {})

// @ts-expect-error I'm testing JSONValue
isJSON(undefined)

// @ts-expect-error I'm testing JSONValue
isJSON(new Screen())

// @ts-expect-error I'm testing JSONValue
isJSON(isJSON)
