const Grade = require('../../model/Grade.js');
const FindSmallerElements = require('./FindSmallerElements.js');
const Util = require('../../util/Util.js');

class FindSmallerElementsTester {
    static main() {
        const guilherme = new Grade("guilherme", 7);
        const unsortedGrades = Util.getUnsortedGrades(guilherme);

        const lowerValuesCount = FindSmallerElements.execute(guilherme, unsortedGrades);
        console.log("Lower values count: " + lowerValuesCount);
    }
}

FindSmallerElementsTester.main();
