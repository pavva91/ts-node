export let myCar: [number, string, string?] = [2020, 'Toyota', 'Corolla']

// NOTE:TypeScript checks type
// myCar = ['tesla', 2, 'ciao']

// NOTE:TypeScript checks length
// myCar = [2, 'asdf', 'tesla', 'ciao']

myCar = [2, 'tesla', 'model t']
