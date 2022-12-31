const getProductPort = require("../ports/in/GetProductPortIn")

const getProduct = async(productID, currencyCode ) => {
    let res;

    try{
        const product = "product";

        res = await getProductPort.retreiveProduct(productID, currencyCode );

    } catch (err) {
        console.log(err);
        return err;
    }
    return res;
}

module.exports = getProduct