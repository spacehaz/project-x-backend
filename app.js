const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { SERVER_PORT, DB } = require('./configs/config');
const errorHandler = require('./middlewares/error-handler');
const app = express();
const router = require('./routes')
const cors = require('cors')

mongoose.connect(DB, _ => console.log(`DB was connected with url ${DB}`))
app.use(cors())
app.use(bodyParser.json())

app.use(router)

// Обработчик ошибок celebrate
app.use(errors())

// Централизованный обработчик ошибок
app.use(errorHandler)

app.listen(SERVER_PORT, _ => console.log(`Server was connected to port ${SERVER_PORT}`))
