const Cinema = require('./Cinema');

class StandartCinema extends Cinema {
    calculateAdminFee() {
        return (this.price * 10) / 100;
    }
}

module.exports = StandartCinema;