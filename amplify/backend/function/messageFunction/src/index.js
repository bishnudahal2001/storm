const { createServer } = require("http");

const app = require('../src/app')
const server = createServer(app)
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
     }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
