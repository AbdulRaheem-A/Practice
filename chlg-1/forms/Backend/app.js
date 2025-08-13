const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const formsRouter = require('./routes/forms')

const { Print } = require('../Utilities/CommonUtil')

const PORT_NO = 8080

const app = express()

app.use(cors())

app.use(bodyParser.json({'limit':'350kb'}))

app.use("/forms",formsRouter)

app.use((err, req, res, next)=>{

    console.log(err);

    return res.status(err.status || 500).json({
        error: {
            details : err,
            message: err.message || 'Internal Server Error'
        }
    })
})

app.listen(PORT_NO,()=>{Print("Listening on 8080")})