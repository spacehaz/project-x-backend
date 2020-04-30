const { NotFoundError, BadRequestError } = require('../errors')
const Ebay = require('ebay-node-api');
const { NOT_FOUND, BAD_REQUEST } = require('../configs/constants')
const Filter = require('../models/filter')
const { getCategoriesFromAnswers, mergeKeywords } = require('../modules')
const { DEFAULT_KEYWORDS } = require('../configs/config')

const {
  EBAY_SCOPE,
  EBAY_CLIENT_SECRET,
  EBAY_ENV,
  EBAY_CLIENT_ID
} = require('../configs/config')

const ebay = new Ebay({
  clientID: EBAY_CLIENT_ID,
  env: EBAY_ENV,
  clientSecret: EBAY_CLIENT_SECRET,
  body: {
    grant_type: 'client_credentials',
    scope: EBAY_SCOPE
  }
});

const { ITEM_NOT_FOUND } = require('../configs/constants')

const ebayRequest = ({ keywords, min, max }) => {
  return new Promise((resolve, reject) => {
    ebay.getAccessToken()
      .then((data) => {
        ebay.searchItems({
          keyword: keywords,
          limit: 200,
          filter: `price:[${min || 0}..${max || 10000}]`
        }).then(data => {
          resolve(data)
        }, (error) => {
          reject(error)
        })
      })
  })
}

const defineKeywords = ({ categories, primary }) => {
  const keywords = mergeKeywords({ categories })
  return keywords
    .split(' ')
    .filter(keyword => {
      if (!primary) { return true }
      return keyword.indexOf('1_') > -1 || keyword === DEFAULT_KEYWORDS
    })
    .map(keyword => {
      if (keyword.indexOf('_') === -1) { return keyword.replace('-', ' ') }
      return (keyword.split('_')[1].replace('-', ' '))
    }).join(' ')

}

const getItems = async (req, res, next) => {
  // const { access_token: accessToken } = await getAuthToken({
  //   clientID: 'HazretBa-BuymeApp-SBX-919766d65-ddae58b1',
  //   clientSecret: 'SBX-19766d651b16-7058-4bb5-a849-a6c8'
  // })

  const { answers, keywords: keywordsFromUser, maxPrice } = req.query

  try {
    const answersParsed = answers && JSON.parse(answers)
    const { categories, min, max } = getCategoriesFromAnswers({ answers: answersParsed, maxPrice, keywordsFromUser })
    const currentKeywords = defineKeywords({ categories })
    const data = await ebayRequest({ keywords: currentKeywords, min, max })
    const { itemSummaries } = data && JSON.parse(data)
    if (!itemSummaries) {
      return res.send({ data: [], success: false, keywords: currentKeywords })
    }
    // if (!itemSummaries) {
    //   const currentKeywords = defineKeywords({ categories, primary: true })
    //   const data = await ebayRequest({ keywords: currentKeywords, min, max })
    //   const { itemSummaries: ultimateSummary } = JSON.parse(data)
    //   if (!ultimateSummary) {
    //     return res.send({ data: [], success: false, keywords: currentKeywords })
    //   }
    //   return res.send({ data: ultimateSummary, success: true, keywords: currentKeywords })
    // }
    return res.send({ data: itemSummaries, success: true, keywords: currentKeywords })
  } catch (e) {
    console.log({ e })
    next(new BadRequestError(BAD_REQUEST))
  }
  // request('https://api.sandbox.ebay.com/services/search/FindingService/v1?SECURITY-APPNAME=HazretBa-BuymeApp-SBX-919766d65-ddae58b1&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&keywords=iphone&outputSelector(0)=SellerInfo', {
  //   json: true,
  //   headers: {
  //     'authorization': `Bearer ${accessToken}`,
  //     'content-type': 'application/json'
  //   }
  // }, (err, res) => {
  //   if (err) { return console.log(err); }
  // });
}

module.exports = { getItems }
