const converter = require("../../adapters/CurrencyConverter");

//expects only product price and codecurrency
const getProductPrice = async (product, newCurrency) => {

    try{
        const productItem = await converter.convertPrice(product, newCurrency);
        return productItem;
    }catch(err){
        return err;
    }
}

module.exports = {
    getProductPrice
}