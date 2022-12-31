const porductDB = require("../../adapters/ProductsDB")

const postProductData = async (product) => {
    try {
        const productItem = await porductDB.postProduct(product);
        return productItem; 
    } catch (err) {
        return err;
    }
}

module.exports = {
    postProductData
}