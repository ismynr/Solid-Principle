class FoodProduct {
    constructor() {
        super();

        if (this.constructor.name === 'FoodProduct') {
            throw new Error(`${this.constructor.name} is abstract class!`);
        }
    }

    getExpiredDate() {
        throw new Error('Method not implemented!');
    }
}

module.exports = FoodProduct;