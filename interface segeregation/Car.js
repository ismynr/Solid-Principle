const doorMixins = require("./Interface/DoorInterface");
const VehicleInterface = require("./Interface/VehicleInterface")

class Car extends doorMixins(VehicleInterface) {
    drive() {
        
    }

    stop() {

    }

    refuel() {

    }

    openDoors() {
        
    }
}

module.exports = Car;