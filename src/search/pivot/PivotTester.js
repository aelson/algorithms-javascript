const Grade = require('../../model/Grade.js');
const Pivot = require('./Pivot.js');

class PivotTester {
    static main() {
        const guilherme = new Grade("guilherme", 7);
        const unsortedGrades = [
            new Grade("andre", 4),
            new Grade("carlos", 8.5),
            new Grade("ana", 10),
            new Grade("jonas", 3),
            new Grade("juliana", 6.7),
            new Grade("lucia", 9.3),
            new Grade("paulo", 9),
            new Grade("mariana", 5),
            guilherme,
        ];

        const pivotPosition = Pivot.execute(unsortedGrades, 0, unsortedGrades.length);
        console.log("The Pivot is in the position " + pivotPosition);
        for (const grade of unsortedGrades) {
            console.log(grade.studentName + " " + grade.result);
        }
    }
}

PivotTester.main();
