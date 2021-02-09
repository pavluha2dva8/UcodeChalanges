// ==============================================
let guestList = new WeakSet()

let pavl = {name: 'pavl'}
let dimich = {name: 'dimich'}
let valeria = {name: 'valeria'}
let ashot = {name: 'ashot'}
let joka = {name: 'joka'}

guestList.add(pavl)
guestList.add(dimich)
guestList.add(valeria)
guestList.add(ashot)
guestList.add(joka)

console.log(guestList.has(pavl)) // true
guestList.delete(dimich) // delete dimich
console.log('dimich deleted')
// ==============================================
let menu = new WeakMap()

let cake1 = {}
let cake2 = {}
let cake3 = {}
let cake4 = {}
let cake5 = {}

menu.set(cake1, {name: 'cake1', price: 10})
menu.set(cake2, {name: 'cake2', price: 20})
menu.set(cake3, {name: 'cake3', price: 30})
menu.set(cake4, {name: 'cake4', price: 40})
menu.set(cake5, {name: 'cake5', price: 50})

console.log(menu.get(cake1))
console.log(menu.get(cake3))
console.log(menu.get(cake5))
// ==============================================
let bankVault = new Map()

let cell1 = {inside: 'smth1'}
let cell2 = {inside: 'smth2'}
let cell3 = {inside: 'smth3'}
let cell4 = {inside: 'smth4'}
let cell5 = {inside: 'smth5'}

bankVault.set('pass1', cell1);
bankVault.set('pass2', cell2);
bankVault.set('pass3', cell3);
bankVault.set('pass4', cell4);
bankVault.set('pass5', cell5);

cell1 = null

console.log(bankVault.get('pass1'))
// ==============================================
const coinsSet = [1, 2, 5, 10, 25, 50]

let coinCollection = new Set(coinsSet)
for (let val of coinsSet){
    console.log(val)
}