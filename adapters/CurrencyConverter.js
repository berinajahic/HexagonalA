const { default: axios } = require("axios");

const convertPrice = async(product, currencyCode) => {

    try {
        const responseAxois = await axios({
                    method: 'get',
                    url: 'https://anyapi.io/api/v1/exchange/convert?apiKey=a9jsl8s8nlopede2cb27bge59fpmi2fuo04jditut6fp5okasgam7&base=' + product.currencyCode + '&to=' + currencyCode + '&amount=' + product.price
                  })
            
                  const convertedPrice = responseAxois.data.converted;
                  
                  return convertedPrice;
    } catch (err) {
        return err;
    }
}

module.exports = {
    convertPrice
}