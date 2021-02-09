/*
Task: 06 (tower.js)
Name: Tower
*/

class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`
        ].join('\n');
    }
};

class Tower extends Building {
    constructor(floors, material, address, hasElevator, arcCapacity, height) {
        super(floors, material, address)
        this.hasElevator = hasElevator
        this.arcCapacity = arcCapacity
        this.height = height
    }
    get hasElevator() {
        return this._hasElevator
    }
    set hasElevator(value) {
        if(value === true) {
            this._hasElevator = '+'
        } else if (value === false) {
            this._hasElevator = '-'
        }
        return
    }
    get arcCapacity() {
        return this._arcCapacity
    }
    set arcCapacity(value) {
        if (Number.isInteger(value)) {
            this._arcCapacity = value
        }
        return
    }
    get height() {
        return this._height
    }
    set height(value) {
        if (Number.isInteger(value)) {
            this._height = value
        }
        return
    }
    getFloorHeight() {
        let floorHeight = this.height / this.floors
        return floorHeight
    }
}

module.exports = Tower