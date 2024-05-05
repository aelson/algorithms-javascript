const Product = require('../model/Product.js');
const SelectionSort = require('./SelectionSort.js');

class SelectionSortTester {
    static main() {
        const products = [
            new Product("Ford Escape", 30000),
            new Product("Toyota Corolla", 20000),
            new Product("Audi Q5", 45000),
            new Product("Honda Civic", 30000),
            new Product("Tesla Model 3", 50000),
        ];
        console.log("Original array: ");
        for (let product of products) {
            console.log(product.name + " costs " + product.price);
        }

        SelectionSort.execute(products, products.length);

        console.log("Sorted array: ");
        for (let product of products) {
            console.log(product.name+ " costs " + product.price);
        }
    }
}

SelectionSortTester.main();