const Product = require('../../model/Product.js');
const FindSmallest = require('../../search/FindSmallest.js');

class SelectionSort {
    static execute(products, numberOfElements) {
        for (let current = 0; current < numberOfElements - 1; current++) {
            console.log("I am in the element " + current);

            let smallest = FindSmallest.execute(products, current, products.length - 1);

            console.log("<-> Swapping element " + current + " with element " + smallest);

            let currentProduct = products[current];
            let smallestProduct = products[smallest];

            console.log("<-> Swapping product " + currentProduct.name + " with product " + smallestProduct.name);

            products[current] = smallestProduct;
            products[smallest] = currentProduct;
            console.log("------------------------------------");
        }
    }
}

module.exports = SelectionSort;