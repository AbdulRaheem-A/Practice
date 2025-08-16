const path = require('path')
const fs = require('fs')

const {Print} = require("../../Utilities/CommonUtil")

const p = path.join(__dirname,'data')

const departmentsPath = path.join(__dirname,'../','data','departments.json')

function checkFileError(message){
    return message.split(',')[0].split(': ')[1].split(' ')[0] === 'no'
}

class Department{
    constructor(workType,salary,departmentImg){
        this.workType      = workType,
        this.salary        = salary,
        this.departmentImg = departmentImg
    }

    static InsertData(){
        // console.log(this);
        // fs.readFile()
        // fs.writeFile(p)
    }

    static FetchAllData(){
        const data = fs.readFile(departmentsPath,(err,data)=>{
            if(err && checkFileError(err.message)){
                const defaultData = JSON.stringify([]);
                fs.writeFile(departmentsPath,defaultData,(err)=>{
                    if(err)
                    throw err;
                    else 
                    return defaultData;
                })
            }
            else{
                console.log(data);
                return JSON.parse(data)
            }
        })
        // console.log(data);
    }
}

module.exports = Department