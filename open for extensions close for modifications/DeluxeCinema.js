const Cinema = require('./Cinema');

class DeluxeCinema extends Cinema {
    calculateAdminFee() {
        return (this.price * 12) / 100;
    }
}

module.exports = DeluxeCinema;