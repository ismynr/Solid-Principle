const Cinema = require('./Cinema');

class PremiumCinema extends Cinema {
    calculateAdminFee() {
        return (this.price * 20) / 100;
    }
}

module.exports = PremiumCinema;