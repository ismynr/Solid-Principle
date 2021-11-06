class Cinema {
    constructor(price) {
        if(this.constructor.name === 'Cinema') {
            throw new Error(`${this.constructor.name} is abstract class!`);
        }

        this.price = price;
    }

    calculateAdminFee() {
        throw new Error('Method not implement!');
    }
}

module.exports = Cinema;