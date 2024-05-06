class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `${this.name} $${this.price}`;
    }
}

module.exports = Product;