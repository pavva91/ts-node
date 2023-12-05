import { BurgerStore } from "./coderpad_problems/easy/cooking_robot/robot";

const ingredientsSequence = [
    "ham",
    "bread",
    "cheese",
    "bread",
    "bread",
    "ham",
    "ham",
    "bread",
    "cheese",
    "cheese",
]
const burgerStore = new BurgerStore(3,0,2);
burgerStore.createBurgers(ingredientsSequence)
console.log(burgerStore)
