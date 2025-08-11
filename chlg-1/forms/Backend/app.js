const express = require('express')

const formsRouter = require('./routes/forms')
const { Print } = require('../Utilities/CommonUtil')

const PORT_NO = 8080

const app = express()

app.use("/forms",formsRouter)

app.listen(PORT_NO,()=>{Print("Listening on 8080")})