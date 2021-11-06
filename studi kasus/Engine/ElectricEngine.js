const EngineInterface = require("../Interface/EngineInterface");

class ElectricEngine extends EngineInterface {
    constructor(speedController) {
        super();
        this._speedController = speedController;
    }

    move() {
        this._speedController.control();
    }
}

module.exports = ElectricEngine;