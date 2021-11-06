const EngineInterface = require("./Interface/EngineInterface");

class Car {
    constructor(engine) {
        if (!(engine instanceof EngineInterface)) {
            throw new Error('Engine is not EngineInterface');
        }

        this._engine = engine;
    }

    start() {
        this._engine.start();
    }
}

module.exports = Car;