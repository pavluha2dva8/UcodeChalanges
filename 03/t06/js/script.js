function* stepGenerator() {
    let i = 1

    while (isNaN(i) == false) {
        i += +prompt(`Previous result: ${i}. Enter a new number:`)
        if (i > 10000) {
            i = 1
        } else if (isNaN(i) == true) {
            console.log('Invalid number!')
        }
    }
}

let gen = stepGenerator()

let startGen = gen.next().value
