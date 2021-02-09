let Printable = {
    print() {
        return console.log([
            `${this.row1}`,
            `${this.row2}`,
            `${this.row3}`,
            `${this.row4}`,
            `${this.row5}`,
            `${this.row6}`
        ].join('\n'))
    }
}

module.exports = Printable
