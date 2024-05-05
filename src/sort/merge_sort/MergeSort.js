class MergeSort {
    static execute(firstArray, secondArray) {
        const total = firstArray.length + secondArray.length;
        const merged = new Array(total);
        let currentOfFirstArray = 0;
        let currentOfSecondArray = 0;
        let currentOfMerged = 0;
        
        while (currentOfFirstArray < firstArray.length && currentOfSecondArray < secondArray.length) {
            const grade1 = firstArray[currentOfFirstArray];
            const grade2 = secondArray[currentOfSecondArray];

            console.log(`Comparing ${grade1.studentName} (${grade1.result}) with ${grade2.studentName} (${grade2.result})`);

            if (grade1.result < grade2.result) {
                console.log(`-> Inserting ${grade1.studentName} (${grade1.result}) on the position ${currentOfMerged}`);
                merged[currentOfMerged] = grade1;
                currentOfFirstArray++;
            } else {
                console.log(`-> Inserting ${grade2.studentName} (${grade2.result}) on the position ${currentOfMerged}`);
                merged[currentOfMerged] = grade2;
                currentOfSecondArray++;
            }
            console.log("------------------------------------");
            currentOfMerged++;
        }

        while (currentOfFirstArray < firstArray.length) {
            console.log(`-> Inserting ${firstArray[currentOfFirstArray].studentName} (${firstArray[currentOfFirstArray].result}) on the position ${currentOfMerged} because it is left over from the first array`);
            merged[currentOfMerged] = firstArray[currentOfFirstArray];
            currentOfFirstArray++;
            currentOfMerged++;
        }

        while (currentOfSecondArray < secondArray.length) {
            console.log(`-> Inserting ${secondArray[currentOfSecondArray].studentName} (${secondArray[currentOfSecondArray].result}) on the position ${currentOfMerged} because it is left over from the second array`);
            merged[currentOfMerged] = secondArray[currentOfSecondArray];
            currentOfSecondArray++;
            currentOfMerged++;
        }

        return merged;
    }
}

module.exports = MergeSort;