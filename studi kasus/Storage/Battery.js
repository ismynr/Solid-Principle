const StorageInterface = require("../Interface/StorageInterface");
const Electrons = require("./Battery/Electrons");

class Battery extends StorageInterface {
    constructor(electrons) {
        super(); // jika implementasikan interface
        this._electrons = electrons;
    }

    fill() {
        return new Electrons();
    }

    getSource() {
        return this._electrons;
    }
}

module.exports = Battery;