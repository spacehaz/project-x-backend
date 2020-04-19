const { NotFoundError, BadRequestError } = require('../errors')
const Ebay = require('ebay-node-api');
const { NOT_FOUND, BAD_REQUEST } = require('../configs/constants')
const Filter = require('../models/filter')
const { DEFAULT_KEYWORDS } = require('../configs/config')
const { getCategoriesFromAnswers } = require('../modules')



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

const getItems = async (req, res, next) => {
  // const { access_token: accessToken } = await getAuthToken({
  //   clientID: 'HazretBa-BuymeApp-SBX-919766d65-ddae58b1',
  //   clientSecret: 'SBX-19766d651b16-7058-4bb5-a849-a6c8'
  // })

  const { answers, keywords: keywordsFromUser } = req.query
  try {
    const answersParsed = answers && JSON.parse(answers)
    const keywords = getCategoriesFromAnswers({ answers: answersParsed }) || keywordsFromUser || DEFAULT_KEYWORDS
    ebay.getAccessToken()
      .then((data) => {
        ebay.searchItems({
          keyword: keywords,
          limit: 200
          // entriesPerPage: 500,
          // filter: 'price:[300..800],priceCurrency:USD,conditions{NEW}'
        }).then(data => {
          const { total, itemSummaries } = JSON.parse(data)
          if (Number(total) === 0) {
            return next(new NotFoundError(NOT_FOUND))
          }
          if (!itemSummaries) {
            return res.send({ data: [], success: true, keywords })
          }
          res.send({ data: itemSummaries, success: true, keywords: keywords === DEFAULT_KEYWORDS ? '' : keywords })
        }, (error) => {
          next(error)
        })
      })
  } catch (e) {
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
