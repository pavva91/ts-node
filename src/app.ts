import { CakeSplit } from './horrible_parent/parent'

const cakeSplit = new CakeSplit()
cakeSplit.splitCake()
console.log(cakeSplit)
cakeSplit.resetSplit()
console.log(cakeSplit)
cakeSplit.daughter = 100.23
console.log(cakeSplit)
