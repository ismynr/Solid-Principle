const Vehicle = require("./Interface/Vehicle");

class Car extends Vehicle {
    constructor(engine, storage) {
        super();
        this._engine = engine;
        this._storage = storage;
    }

    accelerate() {
        this._engine.move();
    }

    brake() {
        
    }

    refill(source) {
        this._storage.fill(source);
    }
}

module.exports = Car;