require('dotenv').config()

const {
  NODE_ENV,
  JWT_SECRET,
  DB_HOST,
  PORT,
  PROD_EBAY_CLIENT_ID,
  PROD_EBAY_ENV,
  PROD_EBAY_CLIENT_SECRET,
  PROD_EBAY_SCOPE
} = process.env

const DEV_SECRET = 'SECRETSECRETSECRET'
const DEV_DB_HOST = 'mongodb://localhost:27017/buyme'
const DEV_PORT = 3000
const DEV_EBAY_CLIENT_ID = 'HazretBa-BuymeApp-SBX-919766d65-ddae58b1'
const DEV_EBAY_ENV = 'SANDBOX'
const DEV_EBAY_CLIENT_SECRET = 'SBX-19766d651b16-7058-4bb5-a849-a6c8'
const DEV_EBAY_SCOPE = 'https://api.ebay.com/oauth/api_scope'



const DB = NODE_ENV === 'production' && DB_HOST ? DB_HOST : DEV_DB_HOST
const SERVER_PORT = NODE_ENV === 'production' && PORT ? PORT : DEV_PORT
const EBAY_SCOPE = NODE_ENV === 'production' && PROD_EBAY_SCOPE ? PROD_EBAY_SCOPE : DEV_EBAY_SCOPE
const EBAY_CLIENT_SECRET = NODE_ENV === 'production' && PROD_EBAY_CLIENT_SECRET ? PROD_EBAY_CLIENT_SECRET : DEV_EBAY_CLIENT_SECRET
const EBAY_ENV = NODE_ENV === 'production' && PROD_EBAY_ENV ? PROD_EBAY_ENV : DEV_EBAY_ENV
const EBAY_CLIENT_ID = NODE_ENV === 'production' && PROD_EBAY_CLIENT_ID ? PROD_EBAY_CLIENT_ID : DEV_EBAY_CLIENT_ID

module.exports = {
  DB,
  SERVER_PORT,
  EBAY_SCOPE,
  EBAY_CLIENT_SECRET,
  EBAY_ENV,
  EBAY_CLIENT_ID
}