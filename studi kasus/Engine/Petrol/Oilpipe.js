const Oil = require("../../Storage/Tank/Oil");

class Oilpipe {
    suckOil() {
        return new Oil();
    }
}

module.exports = Oilpipe;