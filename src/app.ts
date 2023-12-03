import { BurgerStore } from './cooking_robot/robot'

const log = ['bread', 'bread', 'bread', 'ham', 'cheese', 'ham', 'ham', 'cheese']

const store = new BurgerStore(3, 0, 2)
console.log(store)
store.createBurgers(log)
console.log(store)
