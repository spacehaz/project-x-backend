const request = require('request');

const base64Encode = (encodeData) => {
    const buff = Buffer.from(encodeData);;
    return buff.toString('base64');
}

const getAuthToken = ({ clientID, clientSecret }) => {
  const encodedStr = base64Encode(`${clientID}:${clientSecret}`)
  const auth = 'Basic ' + encodedStr;
  return new Promise((resolve, reject) => {
    request({
      url: 'https://api.sandbox.ebay.com/identity/v1/oauth2/token',
      method: 'POST',
      body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'authorization': auth,
        'cache-control': 'no-cache'
      }
    }, (err, res, body) => {
      if (err) {
        return reject(err)
      }
      resolve(JSON.parse(body))
    })
    // .then((result) => {
    //   const resultJSON = JSON.parse(result);
    //   resolve(resultJSON);
    // }).catch(err => {
      
    // })
  })
  
}

module.exports = getAuthToken