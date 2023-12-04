interface AnimalLike {
    sleep: (time: number) => void
}

class LivingOrganism {
    name: string

    isAlive(): boolean {
        return true
    }

    constructor(name: string) {
        this.name = name
    }
}

class Dog extends LivingOrganism implements AnimalLike {
    name: string

    bark(): string {
        return 'woof'
    }

    sleep(time: number): void {
        console.log(`${this.name} sleeps ${time} minutes`)
    }
}

class Cane extends Dog {
    bark(): string {
        return 'bau'
    }
}

export function animalsBarking(): void {
    const fedi = new Cane('fedi')
    fedi.sleep(10)
    console.log(`Is alive: ${fedi.isAlive()}`)
    console.log(`Fedi bark: ${fedi.bark()}`)
    const pluto = new Dog('pippo')
    console.log(`Pluto bark: ${pluto.bark()}`)
}
