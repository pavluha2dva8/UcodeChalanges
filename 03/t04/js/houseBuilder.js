class HouseBlueprint {
    constructor(adress, description, owner, size, roomCount) {
        this.adress = adress,
        this.description = description,
        this.owner = owner,
        this.size = size,
        this.roomCount = roomCount,
        this._avaregeBuildSpeed = 0.5,
        this.date = new Date()
    }
    getDaysToBuild() {
        return this.size / this._avaregeBuildSpeed
    }
}

class HouseBuilder extends HouseBlueprint {}

// test
// const house = new HouseBuilder('88 Crescent Avenue',
//     'Spacious town house with wood flooreng, 2-car garage, and a back patio.', 
//     'J. Smith', 110, 5)

// console.log(house.adress)
// console.log(house.description)
// console.log(house.size)
// console.log(house.date.toDateString())
// console.log(house.owner)
// console.log(house._avaregeBuildSpeed)
// console.log(house.getDaysToBuild())
// console.log(house.roomCount)