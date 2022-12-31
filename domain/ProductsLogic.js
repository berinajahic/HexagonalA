const getPortOut = require("../ports/out/GetProductsPortOut");
const postPortOut = require("../ports/out/PostProductsPortOut");
const curencyConverter  = require("../ports/out/ChangePriceCurrency")

const retreiveProduct = async (productID, currencyCode ) => {

    try{ //getting product from database
        const productItem = await getPortOut.getProductData(productID);

        //checking if product needs currency conversion
        if (!
        currencyCode || (currencyCode == productItem.currencyCode)) {
            return productItem;

        } else {
            //data needed by currencyConverter
            const product = {
                "price": productItem.price,
                "currencyCode": productItem.currencyCode
            }

            //getting converted price
            const convertedPrice = await curencyConverter.getProductPrice(product, currencyCode); 	

            //redefing products code and price
            productItem.currencyCode = currencyCode;
            productItem.price = convertedPrice;

            //returning product
            return productItem;
        } 
    }catch(err){
        return err;
    }

}

const addProduct = async (product) => {

    try {
        const productItem = await postPortOut.postProductData(product);
        return productItem; 
    } catch (err) {
        return err;
    }
}

module.exports = {
    retreiveProduct,
    addProduct
}