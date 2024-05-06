const Product = require('../../model/Product.js');
const SelectionSort = require('./SelectionSort.js');
const Util = require('../../util/Util.js');

class SelectionSortTester {
    static main() {
        const products = [
            new Product("Ford Escape", 30000),
            new Product("Toyota Corolla", 20000),
            new Product("Audi Q5", 45000),
            new Product("Honda Civic", 30000),
            new Product("Tesla Model 3", 50000),
        ];
        Util.printProductsArray("Original array: ", products);

        SelectionSort.execute(products, products.length);

        Util.printProductsArray("Sorted array: ", products);
    }
}

SelectionSortTester.main();