const express = require('express');

const { GET_formsData } = require('../controllers/formsController');

const { Print } = require('../../Utilities/CommonUtil');

const formsRouter = express.Router()

formsRouter.get("/",GET_formsData)

module.exports = formsRouter