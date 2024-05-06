const Product = require('../model/Product.js');
const Grade = require('../model/Grade.js');

class Util {
    static swap(array, first, second) {
        console.log("<-> Swapping element " + first + " with " + second);

        let firstObject = array[first];
        let secondObject = array[second];

        console.log("<-> Swapping object " + firstObject + " with " + secondObject);

        array[first] = secondObject;
        array[second] = firstObject;

        console.log("------------------------------------");
    }

    static printProductsArray(arrayTitle, products) {
        console.log(arrayTitle);
        for (let product of products) {
            console.log(product.name + " costs " + product.price);
        }
    }

    static printGradesArray(arrayTitle, grades) {
        console.log(arrayTitle);
        for (let grade of grades) {
            console.log(grade.studentName + " " + grade.result);
        }
    }

    static getUnsortedProducts() {
        return [
            new Product("Ford Escape", 30000),
            new Product("Toyota Corolla", 20000),
            new Product("Audi Q5", 45000),
            new Product("Honda Civic", 30000),
            new Product("Tesla Model 3", 50000),
        ];
    }

    static getUnsortedGrades(specialGrade) {
        return [
            new Grade("andre", 4),
            new Grade("carlos", 8.5),
            new Grade("ana", 10),
            new Grade("jonas", 3),
            new Grade("juliana", 6.7),
            new Grade("lucia", 9.3),
            new Grade("paulo", 9),
            new Grade("mariana", 5),
            specialGrade,
        ];
    }
    
}

module.exports = Util;