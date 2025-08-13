const express = require('express');

const { GET_depFormsData,POST_depFormsData } = require('../controllers/formsController');

const { Print } = require('../../Utilities/CommonUtil');

const formsRouter = express.Router()

formsRouter.get("/department",GET_depFormsData)

formsRouter.post("/department",POST_depFormsData)

module.exports = formsRouter