require('dotenv').config()

const { NODE_ENV, JWT_SECRET, DB_HOST, PORT } = process.env
const DEV_SECRET = 'SECRETSECRETSECRET'
const DEV_DB_HOST = 'mongodb://localhost:27017/buyme'
const DEV_PORT = 3000
const DB = NODE_ENV === 'production' && DB_HOST ? DB_HOST : DEV_DB_HOST
const SERVER_PORT = NODE_ENV === 'production' && PORT ? PORT : DEV_PORT


module.exports = {
  DB,
  SERVER_PORT
}