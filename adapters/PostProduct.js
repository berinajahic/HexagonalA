const postPort = require("../ports/in/PostProductPortIn");

const postProduct = async(product) => {
    let res;

    try{

        res = postPort.addProduct(product)

    } catch (err) {
        console.log(err);
        return err;
    }
    return res;
}

module.exports = postProduct;