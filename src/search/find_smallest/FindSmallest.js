class FindSmallest {
    static execute(products, start, end) {
        let smallest = start;
        for (let index = start; index <= end; index++) {
            if (products[index].price < products[smallest].price) {
                smallest = index;
            }
        }
        return smallest;
    }
}

module.exports = FindSmallest;