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

    async insertData(){
        /*fs.appendFile(departmentsPath,)*/
        const existingData = await Department.FetchAllData()
        let id = existingData.length
        const modifiedData = [
        ...existingData,
        {
        id:id+1,
        department : {
            work : this.workType,
            salary : this.salary,
            departmentImg : this.departmentImg
        },
        }
        ];
        fs.writeFile(departmentsPath,
            JSON.stringify(modifiedData,null,2),(err)=>{
            if(err)
            throw err;
        })
    }

    static async FetchAllData(){
        let fetchedData = null;
        return new Promise((resolve,reject)=>{
            fs.readFile(departmentsPath,(err,data)=>{
            if(err && checkFileError(err.message)){
                const defaultData = '';
                fs.writeFile(departmentsPath,defaultData,(err)=>{
                    if(err)
                    reject(err);
                    else 
                    fetchedData = defaultData;
                    resolve(fetchedData)
                })
            }
            else{
                fetchedData = JSON.parse(data.toString('utf-8'))
                resolve(fetchedData);
            }
            })
        });
    }
}

module.exports = Department