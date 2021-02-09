/*
Task: 04 (str-frequency.js)
Name: String frequency
*/

class StrFrequency {
    constructor(str) {
        this.str = str
    }
    letterFrequencies() {
        let uchars = {};
        this.str.replace(/[a-zA-Z]/g,
            function (l) {
                uchars[l.toUpperCase()] = (isNaN(uchars[l.toUpperCase()]) ? 1
                    : uchars[l.toUpperCase()] + 1);
            });
        return uchars;
    }
    wordFrequencies() {
        let uchars = {};
        this.str.replace(/\S[a-zA-Z]\w*/g,
            function (l) {
                uchars[l.toUpperCase()] = (isNaN(uchars[l.toUpperCase()]) ? 1
                    : uchars[l.toUpperCase()] + 1);
            });
        return uchars
    }
    reverseString() {
        return this.str.split('').reverse().join('')
    }
}


module.exports = StrFrequency