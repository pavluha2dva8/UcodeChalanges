// new lol sos

const houseMixin = {
    wordReplace(word, newWord) { return this.description = this.description.replace(word, newWord) },
    wordInsertAfter(word, newWord) { return this.description = this.description.replace(word, word + ' '+ newWord )},
    wordDelete(delWord) { return this.description = this.description.replace(delWord, '')},
    wordEncrypt() {
        let str = this.description
        function rot13Fast (str) { 
            return str.split('').map(x => rot13Fast.lookup[x] || x).join('')
          }
          rot13Fast.input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
          rot13Fast.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
          rot13Fast.lookup = rot13Fast.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13Fast.output[i]}), {})
          return this.description = rot13Fast(str)
    },
    wordDecrypt() {
        let str = this.description
        function rot13Fast (str) { 
            return str.split('').map(x => rot13Fast.lookup[x] || x).join('')
          }
          rot13Fast.input  = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
          rot13Fast.output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
          rot13Fast.lookup = rot13Fast.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13Fast.output[i]}), {})
          return this.description = rot13Fast(str)
    }
}

const house = new HouseBuilder('88 Crescent Avenue',
     'Spacious town house with wood flooreng, 2-car garage, and a back patio.', 
     'J. Smith', 110, 5)

     Object.assign(house, houseMixin)
     console.log(house.getDaysToBuild())
     // 220
     console.log(house.description)
     // Spacious town house with wood flooring, 2-car garage, and a back patio.
     house.wordReplace('wood', 'tile')
     console.log(house.description)
    //  Spacious town house with tile flooring, 2-car garage, and a back patio.
     house.wordDelete("town ")
     console.log(house.description)
     // Spacious house with tile flooring, 2-car garage, and a back patio.
     house.wordInsertAfter("with", "marble")
     console.log(house.description)
     // Spacious house with marble tile flooring, 2-car garage, and a back patio.
     house.wordEncrypt()
     console.log(house.description)
     // Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
     house.wordDecrypt()
     console.log(house.description)
     // Spacious house with marble tile flooring, 2-car garage, and a back patio.