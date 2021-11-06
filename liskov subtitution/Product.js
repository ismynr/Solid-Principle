class Product {
    constructor() {
        if (this.constructor.name === 'Product') {
            throw new Error(`${this.constructor.name} is abstract class!`);
        }
    }

    getName() {
        throw new Error('Method not implemented!')
    }

    getProductInfo() {

    }
}

module.exports = Product;