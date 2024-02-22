module.exports = class Product {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    offerDiscount() {
        let discountPercent = 0.90;
        if(this.value >= 100){
            return this.value *= discountPercent;
        } else {
            return this.value;
        }
    }
}