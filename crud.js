const { log } = require('console');
const fs = require('fs');

module.exports = class Crud{

    constructor(products){
        this.products = products;
        this.file = './productData.txt';
    }

    create(){
        if(!fs.existsSync(this.file)){
            fs.writeFileSync(this.file, '');
        }else{
            log("Arquivo já existe");
        }
    }

    read(){
        if(fs.existsSync(this.file)){
            return fs.readFileSync(this.file, 'utf-8');
        }else{
            log("Não existe arquivo para ser lido");
        }
    }

    update(){
        let formattedProduct = 'Produtos:\n';
        const products = this.products.getProducts();

        products.forEach(product => {
            formattedProduct += `Nome: ${product.name} Preço: R$${product.value}\n`
        });

        fs.writeFileSync(this.file, formattedProduct);
    }

    delete(){
        if(fs.existsSync(this.file)){
            fs.unlinkSync(this.file);
        }else{
            log("Não existe arquivo para ser deletado");
        }
    }
}