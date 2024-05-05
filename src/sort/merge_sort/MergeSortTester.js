const Util = require('../../util/Util.js');
const MergeSort = require('./MergeSort');
const Grade = require('../../model/Grade.js');

class MergeSortTester {
    static main() {
        const firstArray = [
            new Grade("andre", 4),
            new Grade("mariana", 5),
            new Grade("carlos", 8.5),
            new Grade("paulo", 9),
        ];

        const secondArray = [
            new Grade("jonas", 3),
            new Grade("juliana", 6.7),
            new Grade("guilherme", 7),
            new Grade("lucia", 9.3),
            new Grade("ana", 10),
        ];

        Util.printGradesArray("First array: ", firstArray);
        Util.printGradesArray("Second array: ", secondArray);

        const rank = MergeSort.execute(firstArray, secondArray);
        Util.printGradesArray("Merged array: ", rank);
    }
}

MergeSortTester.main();