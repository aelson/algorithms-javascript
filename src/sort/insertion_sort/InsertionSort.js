const Util = require('../../util/Util.js');

class InsertionSort {
    static execute(products, numberOfElements) {
        for (let current = 1; current < numberOfElements; current++) {
            console.log("I am in the element " + current);
            let elementBeingAnalysed = current;
            while (elementBeingAnalysed > 0 && products[elementBeingAnalysed].price < products[elementBeingAnalysed - 1].price) {
                Util.swap(products, elementBeingAnalysed, elementBeingAnalysed - 1);
                elementBeingAnalysed--;
            }
        }
    }
}

module.exports = InsertionSort;