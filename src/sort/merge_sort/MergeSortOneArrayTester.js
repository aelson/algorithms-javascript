const Util = require('../../util/Util.js');
const MergeSort = require('./MergeSort');
const Grade = require('../../model/Grade.js');

class MergeSortOneArrayTester {
    static main() {
        const grades = [
            new Grade("andre", 4),
            new Grade("mariana", 5),
            new Grade("carlos", 8.5),
            new Grade("paulo", 9),
            new Grade("jonas", 3),
            new Grade("juliana", 6.7),
            new Grade("guilherme", 7),
            new Grade("lucia", 9.3),
            new Grade("ana", 10),
        ];

        Util.printGradesArray("Grades array: ", grades);

        const rank = MergeSort.sortOneArrayWithTwoOrderedHalfs(grades, 0, 4, grades.length);
        Util.printGradesArray("Sorted array: ", rank);
    }
}

MergeSortOneArrayTester.main();
