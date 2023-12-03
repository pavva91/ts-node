import { findMaxLoss } from "./bankrupt/bankrupt"

const stockPricesOrderedByDate: number[] = [3, 2, 7, 2, 1, 11]
const loss = findMaxLoss(stockPricesOrderedByDate)
console.log(loss)
