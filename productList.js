module.exports = class ProductList {
    constructor() {
        this.products = [];
    }

      addProduct(...product) {
          this.products.push(...product);
      }

      getProducts(){
        return this.products;
      }
}