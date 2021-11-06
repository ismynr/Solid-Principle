const Energy = require("./Energy");

class Oil {
    burn() {
        return new Energy();
    }
}

module.exports = Oil;