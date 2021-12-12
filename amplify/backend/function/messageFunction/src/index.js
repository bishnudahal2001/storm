const aws = require("aws-sdk");
const ses = new aws.SES({ region: "us-east-2" });
exports.handler = async function (event) {
  const {  email, name, message, plan } = JSON.parse(event.body)
  const data = `
    <h1>${plan} Message from ${name}</h1>
    <h2>From ${email}</h2>
    <br/>
    <p>${message}</p>
    <br/>
  `
  var params = {
    Destination: {
      ToAddresses: ["bdahal17@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: message },
        Html: {
          Data: data
        }
      },

      Subject: { Data: plan },
    },
    Source: "bishnud2001@gmail.com",
  };

 const emailSend = await ses.sendEmail(params, (err, data)=> {
    if(err) {
      console.log(err)
    } else {
      console.log(data)
    }
  }).promise()
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(emailSend),
  };
  return response;
};
