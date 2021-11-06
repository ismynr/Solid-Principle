const Cinema = require('./Cinema');

class CoupleCinema extends Cinema{
    calculateAdminFee() {
        return (this.price * 15) / 100;
    }
}

module.exports = CoupleCinema;