const Pivot = require('../../search/pivot/Pivot.js');

class QuickSort {
    static execute(grades, start, end) {
        console.log("Executing for " + start + " - " + end);
        const numberOfElements = end - start;
        if (numberOfElements > 1) {
            const pivotIndex = Pivot.execute(grades, end);
            QuickSort.execute(grades, start, pivotIndex);
            QuickSort.execute(grades, pivotIndex + 1, end);
        }
    }
}

module.exports = QuickSort;
