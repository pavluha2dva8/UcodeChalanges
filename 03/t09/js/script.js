const validator = {
    get(target, prop) {
        console.log(`Trying to access the property '${prop}'...`)
        return target[prop]
    },
    set(target, prop, value) {
        try {
            if (prop in target && prop == 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer')
                } else if (value < 0 || value > 200) {
                    throw new RangeError('The age is invalid')
                }
            } else {
                console.log(`Setting value '${value}' to '${prop}'`)
                target[prop] = value
            }
        } catch (error) {
            console.log(`Uncaught ${error.name}: ${error.message}`)
        }
    }
}

let person = new Proxy({}, validator)

person.age = 100
// Setting value'100' to 'age'
console.log(person.age)
// Trying to access the property'age'...
// 100
person.gender = "male"
// Setting value'male' to 'gender'
person.age = 'young'
// Uncaught TypeError: The age is not an integer
person.age = 300
// Uncaught RangeError: The age is invalid