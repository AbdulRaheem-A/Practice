const GET_depFormsData = (req,res,next) => {
    console.log(req)
    return res.end();
}

const POST_depFormsData = (req,res,next) => {

    // console.log(req,'----',res);

    return res.json(req.body).status(200);
}

module.exports = {
    GET_depFormsData,
    POST_depFormsData
}