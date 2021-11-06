const Battery = require("../../../Storage/Battery");
const Electrons = require("../../../Storage/Battery/Electrons");

class BatteryManagementSystem {
    getBattery() {
        return new Battery(new Electrons());
    }
}

module.exports = BatteryManagementSystem;