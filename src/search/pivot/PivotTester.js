const Grade = require('../../model/Grade.js');
const Pivot = require('./Pivot.js');
const Util = require('../../util/Util.js');

class PivotTester {
    static main() {
        const guilherme = new Grade("guilherme", 7);
        const unsortedGrades = Util.getUnsortedGrades(guilherme);

        const pivotPosition = Pivot.execute(unsortedGrades, unsortedGrades.length);
        console.log("The Pivot is in the position " + pivotPosition);
        for (const grade of unsortedGrades) {
            console.log(grade.studentName + " " + grade.result);
        }
    }
}

PivotTester.main();
