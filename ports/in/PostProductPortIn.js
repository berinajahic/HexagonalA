const productsLogic = require("../../domain/ProductsLogic");


const addProduct = async (product) => {
    try{
        const productItem = await productsLogic.addProduct(product);
        return productItem; 
    }catch(err){
        return err;
    }
}

module.exports = {
    addProduct
}