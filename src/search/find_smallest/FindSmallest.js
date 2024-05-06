class FindSmallest {
    static execute(products, start, end) {
        let smallest = start;
        for (let atual = start; atual <= end; atual++) {
            if (products[atual].price < products[smallest].price) {
                smallest = atual;
            }
        }
        return smallest;
    }
}

module.exports = FindSmallest;