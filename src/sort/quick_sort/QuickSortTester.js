const Grade = require('../../model/Grade.js');
const Util = require('../../util/Util.js');
const QuickSort = require('./QuickSort.js');

class QuickSortTester {
    static main() {
        const guilherme = new Grade("guilherme", 7);
        const unsortedGrades = Util.getUnsortedGrades(guilherme);

        QuickSort.execute(unsortedGrades, 0, unsortedGrades.length);
        Util.printGradesArray("Sorted array: ", unsortedGrades);
    }
}

QuickSortTester.main();
