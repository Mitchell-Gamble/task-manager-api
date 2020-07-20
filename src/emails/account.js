var AWS = require('aws-sdk')

AWS.config.update({region: 'us-east-2'})
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const senderEmail = 'diztro.91@googlemail.com'


const sendWelcomeEmail = (email, name) => {
  let params = {
  Destination: {
    CcAddresses: [
      senderEmail,
    ],
    ToAddresses: [
      email
    ]
  },
  Message: {
    Body: {
      Html: {
      Charset: "UTF-8",
      Data: `Welcome to the app, ${name}. Let me know how you get along with the app`
      },
      Text: {
      Charset: "UTF-8",
      Data: ``
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Thanks for joining in'
    }
    },
  Source: senderEmail,
  ReplyToAddresses: [
    senderEmail,
  ],
}
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()

  sendPromise.then(
    data => {
      console.log(data.MessageId);
    }).catch(
      err => {
      console.error(err, err.stack);
    });
}

const sendLeavingEmail = (email, name) => {
  let params = {
    Destination: {
      CcAddresses: [
        senderEmail,
      ],
      ToAddresses: [
        email
      ]
    },
    Message: {
      Body: {
        Html: {
        Charset: "UTF-8",
        Data: `Sorry to see you go, ${name}. Let me know what I could of done better to keep you.`
        },
        Text: {
        Charset: "UTF-8",
        Data: ``
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Sorry to see you go!'
      }
      },
    Source: senderEmail,
    ReplyToAddresses: [
      senderEmail,
    ],
  }
  
  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()

  sendPromise.then(
    data => {
      console.log(data.MessageId);
    }).catch(
      err => {
      console.error(err, err.stack);
    });
}

  module.exports = {
    sendWelcomeEmail,
    sendLeavingEmail
  }