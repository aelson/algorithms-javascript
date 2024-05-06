class FindSmallerElements {
    static execute(reference, unsortedGrades) {
        let lowerValuesCount = 0;
        for (const grade of unsortedGrades) {
            if (grade.result < reference.result) {
                lowerValuesCount++;
            }
        }
        return lowerValuesCount;
    }
}

module.exports = FindSmallerElements;