const AWS = require('aws-sdk')
AWS.config.update({region: "us-east-2"})
const db = new AWS.DynamoDB({apiVersion: "2012-10-08"});
const dc= new AWS.DynamoDB.DocumentClient();
exports.handler = async (event) => {
    if(event.path === "/" && event.httpMethod === 'GET') {
        const params = {
            TableName: "messagedb",
            Key: {
                id: "123445"
                }   
            }

            try {
                const data = await dc.get(params).promise()
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers" : "*",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                    }, 
                    body: JSON.stringify(data),
                };    
                return response;
            } catch (err) {
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers" : "*",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                    }, 
                    body: JSON.stringify(err),
                };    
                return response;
            }


    }
    if(event.path === "/" && event.httpMethod === 'POST') {
        const { id, firstname, lastname, message } = JSON.parse(event.body)
        try {
            
            const params = {
                    TableName: "messagedb",
                    Item: {
                        id: id,
                        firstname: firstname,
                        lastname: lastname,
                        message: message  
                     }
                    }
                await dc.put(params).promise()
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Headers" : "*",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                    }, 
                };    
                return response;
            
        } catch(err) {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers" : "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                }, 
                body: JSON.stringify(err),
            };    
            return response;
        }
       
    }
    

 
}
