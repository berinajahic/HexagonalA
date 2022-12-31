const porductDB = require("../../adapters/ProductsDB")

const getProductData = async (productID) => {

    try{
        const productItem = await porductDB.getProduct(productID);
        return productItem;
    }catch(err){
        return err;
    }
}

module.exports = {
    getProductData
}