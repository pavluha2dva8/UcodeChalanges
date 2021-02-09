String.prototype.removeDuplicates = function() {
    const strToArray = str.split(' ')
    const uniqueArray = Array.from(new Set(strToArray))
    const uniqueString = uniqueArray.join(' ')
    return uniqueString
}

// test

let str = "Giant Spiders?   What's next? Giant Snakes?"
console.log(str)
// Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates()
console.log(str)
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates()
console.log(str)
// Giant Spiders? What’s next? Snakes?

str = ". . . . ? . . . . . . . . . . . "
console.log(str)
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates()
console.log(str)
// . ?