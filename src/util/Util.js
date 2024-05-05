const Product = require('../model/Grade.js');
const Product = require('../model/Product.js');

class Util {
    static swap(products, first, second) {
        console.log("<-> Swapping element " + first + " with " + second);

        let firstProduct = products[first];
        let secondProduct = products[second];

        console.log("<-> Swapping product " + firstProduct.name + " with " + secondProduct.name);

        products[first] = secondProduct;
        products[second] = firstProduct;

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
}

module.exports = Util;