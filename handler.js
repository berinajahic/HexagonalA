const AWS = require("aws-sdk");
const getProduct = require("./adapters/GetProduct")
const postProduct = require("./adapters/PostProduct")

module.exports.handler = async function(event){
  let response = '';

  switch(true){

    case event.requestContext?.http?.method === 'GET':
      const productID = event.pathParameters?.id;
      const currencyCode = event?.queryStringParameters?.currencyCode;
      response = await getProduct(productID, currencyCode );
      break;

    case event?.requestContext?.http?.method === 'POST':
      const product = await JSON.parse(event.body);
      response = await postProduct(product);
      break;

    default:
      console.log('Method unknown!'); 

  }

  return response;
}
