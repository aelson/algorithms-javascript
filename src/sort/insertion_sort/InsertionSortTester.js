const Util = require('../../util/Util.js');
const InsertionSort = require('./InsertionSort.js');

class InsertionSortTester {
    static main() {
        const products = Util.getUnsortedProducts();
        Util.printProductsArray("Original array: ", products);

        InsertionSort.execute(products, products.length);
        Util.printProductsArray("Sorted array: ", products);
    }
}

InsertionSortTester.main();