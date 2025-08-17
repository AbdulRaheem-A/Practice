const Department = require("../models/department");

const GET_depFormsData = (req,res,next) => {
    console.log(req)
    return res.end();
}

const POST_depFormsData = (req,res,next) => {

    const {work,salary,img} = req.body;

    const department = new Department(work,salary,img);

    department.insertData();

    // Department.FetchAllData((departments)=>console.log(departments));

    return res.json(req.body).status(200);
}

module.exports = {
    GET_depFormsData,
    POST_depFormsData
}