class Pivot {
    static execute(grades, start, end) {
        const pivot = grades[end - 1];
        let lowerValuesCount = 0;
        for (let index = 0; index < end - 1; index++) {
            const current = grades[index];
            if (current.result <= pivot.result) {
                Pivot.swap(grades, index, lowerValuesCount);
                lowerValuesCount++;
            }
        }
        Pivot.swap(grades, end - 1, lowerValuesCount);
        return lowerValuesCount;
    }

    static swap(grades, from, to) {
        const grade1 = grades[from];
        const grade2 = grades[to];
        grades[to] = grade1;
        grades[from] = grade2;
    }
}

module.exports = Pivot;
