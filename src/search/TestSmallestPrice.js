const Product = require('../model/Product.js');
const SearchSmallest = require('./SearchSmallest.js');

class TestSmallestPrice {
    static main() {
        const products = [
            new Product("Tesla Model 3", 50000),
            new Product("Toyota Corolla", 20000),
            new Product("Ford Escape", 30000),
            new Product("Honda Civic", 30000),
            new Product("Audi Q5", 45000)
        ];

        const smallest = SearchSmallest.findSmallest(products, 0, 4);
        console.log(smallest);
        console.log("The car " + products[smallest].name + " costs " + products[smallest].price);
    }
}

TestSmallestPrice.main();