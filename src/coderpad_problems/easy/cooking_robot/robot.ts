import { Ingredient } from './ingredient'

export class BurgerStore {
    public readonly bread: Ingredient
    public readonly cheese: Ingredient
    public readonly ham: Ingredient
    public createdBurgers: number
    constructor(
        breadCapacity: number,
        cheeseCapacity: number,
        hamCapacity: number
    ) {
        this.bread = new Ingredient(breadCapacity)
        this.cheese = new Ingredient(cheeseCapacity)
        this.ham = new Ingredient(hamCapacity)
        this.createdBurgers = 0
    }

    createBurgers(ingredientsSequence: string[]): void {
        for (let i = 0; i < ingredientsSequence.length; i++) {
            const incomingIngredient = ingredientsSequence[i]
            // NOTE: We take advantage of the cheese hypotesy of 0 storing capacity
            if (incomingIngredient === 'cheese') {
                if (this.ham.storedItems > 0) {
                    if (this.bread.storedItems > 0) {
                        this.createdBurgers++
                        console.log(`Cook a Burger! ${this.createdBurgers}`)
                        this.ham.removeItem()
                        this.bread.removeItem()
                    }
                }
            }
            if (incomingIngredient === 'bread') {
                this.bread.addItem()
            }
            if (incomingIngredient === 'ham') {
                this.ham.addItem()
            }
        }
    }
}
