const Product = require('./product.js');
const Crud = require('./crud.js');
const { log } = require('console');
const ProductList = require('./productList.js');

let productList = new ProductList();
let product = new Product('Coca', 100);
let product2 = new Product('Cola', 100);
productList.addProduct(product, product2);

let crud = new Crud(productList);

crud.create();
crud.update();
log(crud.read());
