/*
Task: 05 (hard-worker.js)
Name: Hard worker
*/

class HardWorker {
    constructor(name, age, salary) {
        this.name = name
        this.age = age
        this.salary = salary
    }
    get age() {
        return this._age
    }
    set age(value) {
        if (value < 1 || value > 100) {
            return
        }
        this._age = value
    }
    get salary() {
        return this._salary
    }
    set salary(value) {
        if (value < 100 || value > 10000) {
            return
        }
        this._salary = value
    }
    toObject() {
       return {
           name: this.name,
           age: this.age,
           salary: this.salary
       }
    }
}


module.exports = HardWorker