const Grade = require('../../model/Grade.js');
const FindSmallerElements = require('./FindSmallerElements.js');

class FindSmallerElementsTester {
    static main() {
        const guilherme = new Grade("guilherme", 7);
        const unsortedGrades = [
            new Grade("andre", 4),
            new Grade("carlos", 8.5),
            new Grade("ana", 10),
            new Grade("jonas", 3),
            new Grade("juliana", 6.7),
            guilherme,
            new Grade("paulo", 9),
            new Grade("mariana", 5),
            new Grade("lucia", 9.3),
        ];

        const lowerValuesCount = FindSmallerElements.execute(guilherme, unsortedGrades);
        console.log("Lower values count: " + lowerValuesCount);
    }
}

FindSmallerElementsTester.main();
