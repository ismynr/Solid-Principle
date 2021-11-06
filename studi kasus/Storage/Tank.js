const StorageInterface = require("../Interface/StorageInterface");

class Tank extends StorageInterface {
    constructor(oil) {
        super();
        this._oil = oil;
    }

    fill(source) {
        this._oil = source;
    }

    getSource() {
        return this._oil;
    }
}

module.exports = Tank;