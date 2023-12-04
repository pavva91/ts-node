// INFO: Interfaces are OPEN, means that we can do INTERFACE AUGMENTING
// INFO: Very useful to modify stuff on a global (e.g. window interface)
interface AnimalLike2 {
    isAlive: () => boolean
}

function feedBread(animal: AnimalLike2): void {
    animal.isAlive()
    animal.eat('bread')
}

// NOTE: Here I AUGMENT the interface
interface AnimalLike2 {
    eat: (food: string) => void
}

export function printAllAnimals(): void {
    const animal1: AnimalLike2 = {
        isAlive() {
            return true
        },

        eat(food: string): void {
            console.log(`I'm eating ${food}`)
        },
    }
    feedBread(animal1)
    feedBread({
        isAlive() {
            return false
        },
        eat(food: string): void {
            console.log(`${food} was too much`)
        },
    })
}
