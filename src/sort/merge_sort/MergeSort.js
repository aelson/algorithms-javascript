class MergeSort {
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
    
        while (firstPartIndex < middle) {
            console.log(`-> Inserting ${array[firstPartIndex].studentName} (${array[firstPartIndex].result}) on the position ${sortedIndex} because it is left over from the first part of the array`);
            sorted[sortedIndex] = array[firstPartIndex];
            firstPartIndex++;
            sortedIndex++;
        }
    
        while (secondPartIndex < end) {
            console.log(`-> Inserting ${array[secondPartIndex].studentName} (${array[secondPartIndex].result}) on the position ${sortedIndex} because it is left over from the second part of the array`);
            sorted[sortedIndex] = array[secondPartIndex];
            secondPartIndex++;
            sortedIndex++;
        }
    
        if (start > 0) {
            console.log("Rebuilding the original array keeping the initial object(s) not ordered (because the start is greater then 0)");
            for (let indexOfMerged = 0; indexOfMerged < sortedIndex; indexOfMerged++) {
                console.log(`-> Inserting ${sorted[indexOfMerged].studentName} (${sorted[indexOfMerged].result}) on the position ${start + indexOfMerged}`);
                array[start + indexOfMerged] = sorted[indexOfMerged];
            }
        }
        return array;
    }
    
}

module.exports = MergeSort;