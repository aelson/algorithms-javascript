class MergeSort {
    static addRemainingElementsToEndOfArray(array, arrayEnd, arrayIndex, merged, mergedArrayIndex) {
        while (arrayIndex < arrayEnd) {
            console.log(`-> Inserting ${array[arrayIndex].studentName} (${array[arrayIndex].result}) on the position ${mergedArrayIndex} because it is left over from the first array`);
            merged[mergedArrayIndex] = array[arrayIndex];
            arrayIndex++;
            mergedArrayIndex++;
        }
        return mergedArrayIndex;
    }

    static rebuildArray(array, start, sortedIndex, sorted) {
        console.log("Rebuilding the original array");
        for (let indexOfMerged = 0; indexOfMerged < sortedIndex; indexOfMerged++) {
            console.log(`-> Inserting ${sorted[indexOfMerged].studentName} (${sorted[indexOfMerged].result}) on the position ${indexOfMerged}`);
            array[start + indexOfMerged] = sorted[indexOfMerged];
        }
    }

    static mergeTwoArrays(firstArray, secondArray) {
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

        currentOfMerged = this.addRemainingElementsToEndOfArray(firstArray, firstArray.length, currentOfFirstArray, merged, currentOfMerged);
        this.addRemainingElementsToEndOfArray(secondArray, secondArray.length, currentOfSecondArray, merged, currentOfMerged);

        return merged;
    }

    static sortOneArray(array, start, middle, end) {
        const total = array.length;
        const sorted = new Array(total - start);
        let sortedIndex = 0;
        let firstPartIndex = start;
        let secondPartIndex = middle;
        
        while (firstPartIndex < middle && secondPartIndex < end) {
            console.log(`Comparing ${array[firstPartIndex].studentName} (${array[firstPartIndex].result}) with ${array[secondPartIndex].studentName} (${array[secondPartIndex].result})`);
    
            if (array[firstPartIndex].result < array[secondPartIndex].result) {
                console.log(`-> Inserting ${array[firstPartIndex].studentName} (${array[firstPartIndex].result}) on the position ${sortedIndex}`);
                sorted[sortedIndex] = array[firstPartIndex];
                firstPartIndex++;
            } else {
                console.log(`-> Inserting ${array[secondPartIndex].studentName} (${array[secondPartIndex].result}) on the position ${sortedIndex}`);
                sorted[sortedIndex] = array[secondPartIndex];
                secondPartIndex++;
            }
            console.log("------------------------------------");
            sortedIndex++;
        }
    
        sortedIndex = this.addRemainingElementsToEndOfArray(array, middle, firstPartIndex, sorted, sortedIndex);
        this.addRemainingElementsToEndOfArray(array, end, secondPartIndex, sorted, sortedIndex);
        if (start + end < array.length) {
            this.rebuildArray(array, start, sortedIndex, sorted);
        }
        return array;
    }   
}

module.exports = MergeSort;