const EngineInterface = require("../Interface/EngineInterface");

class PetrolEngine extends EngineInterface {
    constructor(oilPipe, piston) {
        super();
        this._oilPipe = oilPipe;
        this._piston = piston;
    }

    move() {
        const oil = this._oilPipe.suckOil();
        const energy = oil.burn();
        energy.push(this._piston);
    }
}

module.exports = PetrolEngine;