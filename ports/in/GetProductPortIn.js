const productsLogic = require("../../domain/ProductsLogic");

const retreiveProduct = async (productID, currencyCode ) => {
    try{
        const productItem = await productsLogic.retreiveProduct(productID, currencyCode);
        return productItem; 
    }catch(err){
        return err;
    }
}

module.exports = {
    retreiveProduct
}