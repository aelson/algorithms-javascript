const Util = require('../../util/Util.js');
const InsertionSort = require('./InsertionSort.js');

class InsertionSortTester {
    static main() {
        const products = Util.getUnsortedProducts();
        Util.printArray("Original array: ", products);

        InsertionSort.execute(products, products.length);
        Util.printArray("Sorted array: ", products);
    }
}

InsertionSortTester.main();