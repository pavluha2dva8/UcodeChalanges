/*
Task: 07 (index.js)
Name: Anonymous
*/

class Anonymous {
    constructor(name, alias, affiliation) {
        this.name = name
        this.alias = alias
        this.affiliation = affiliation
    }
}

function getAnonymous(name, alias, affiliation) {
    return new Anonymous(name, alias, affiliation)
}

module.exports = { getAnonymous }