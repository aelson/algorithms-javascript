const Product = require('../model/Product.js');
const FindSmallest = require('./FindSmallest.js');

class FindSmallestTester {
    static main() {
        const products = [
            new Product("Tesla Model 3", 50000),
            new Product("Toyota Corolla", 20000),
            new Product("Ford Escape", 30000),
            new Product("Honda Civic", 30000),
            new Product("Audi Q5", 45000)
        ];

        const smallest = FindSmallest.execute(products, 0, 4);
        console.log(smallest);
        console.log("The car " + products[smallest].name + " costs " + products[smallest].price);
    }
}

FindSmallestTester.main();