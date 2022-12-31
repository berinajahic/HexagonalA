const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

const BERINA_TABLE = process.env.BERINA_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const getProduct = async (productID) => {
    let params = {
            TableName: BERINA_TABLE,
            Key: {
              productID: productID,
            },
        };

        try{
            const { Item } = await dynamoDbClient.get(params).promise();
            // const Item = {
            //     "productId": 1,
            //     "title": "test3",
            //     "price": 20,
            //     "currencyCode": "EUR"
            // };
            return Item;
        }catch(err){
            return err;
        }
}

const postProduct = async (product) => {
  let res;

  let params = {
    TableName: BERINA_TABLE,
    Item: {
      productId: product.productId,
      title: product.title,
      price: product.price,
      currencyCode: product.currencyCode
    },
  };    

  try {
        await dynamoDbClient.put(params).promise();
        return  {
            "productId": params.Item.productId, 
            "title": params.Item.title} ;
    } catch (error) { 
        return err;
    }
}

module.exports = {
    getProduct,
    postProduct
}