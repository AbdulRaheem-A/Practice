import styled from "styled-components"
import { flexCenter, StyledButton, StyledInput, StyledLabel, StyledOption, StyledSelect, Title } from "../users/User"
import { useReducer } from "react";
import { FormsBackEndUrl } from "../../../Utilities/CommonUtil";

const departmentWorkTypeArr = ['union leader','employee','manager']

const departmentInitState = {
    departmentLoader:false,
    departmentWorkType:departmentWorkTypeArr[0],
    departmentSalary:"",
    departmentImg : {
        file:"",
        fileName:""
    }
};

function Reducer(currState,action){

    const {type,payload} = action;

    switch(type){
        case "departmentWorkTypeChange":
            return {
                ...currState,
                departmentWorkType:payload
            }
        case "departmentSalaryChange":
            return {
                ...currState,
                departmentSalary:payload
            }
        case "departmentImgChange":
            return {
                ...currState,
                departmentImg:payload
            }
        default :
            return departmentInitState;
    }
}

function DepartmentForm(){

    const [departmentState,departmentDispatch] = useReducer(Reducer,departmentInitState);
    
    const {departmentWorkType,departmentSalary,departmentImg:{file,fileName}} = departmentState;

    function handleSubmit(e){
        e.preventDefault();

        async function convertToString64(img){

            return new Promise((resolve,reject)=>{
                const reader = new FileReader()
                reader.readAsDataURL(img)
                reader.onload = (e) => resolve(e.target.result)
                reader.onerror = (error) =>  reject(error);
            })

        }

        async function PostFetch(){

            const departmentData = {
                work : departmentWorkType,
                salary : departmentSalary,
                img : {
                    base64img :  file.length ? await convertToString64(file[0]) : "",
                    name : file[0].name,
                }
            };

            const res = await fetch( `${FormsBackEndUrl}/department`,{
                method:"POST",
                body:JSON.stringify(departmentData),
                headers:{
                    ["Content-Type"] : "application/json"
                }
            });
            
            const data = await res.json();

            console.log(data)
        }

        PostFetch();
    }
    
    return <>
      <FormContainer method="POST" onSubmit={handleSubmit}>
        <Title>
            department
        </Title>
      <StyledForm>
        
        <FormFields>
            <FirstFieldContainer>
                <StyledLabel htmlFor="workType">
                work type
                </StyledLabel>
                <StyledSelect 
                id="workType"
                value={departmentWorkType}
                onChange={(e)=>departmentDispatch({
                    type:"departmentWorkTypeChange",
                    payload:e.target.value
                })}
                >
                    {
                    departmentWorkTypeArr.map((each,i)=>
                    <StyledOption key={i} >
                        {each}
                    </StyledOption>)
                    }
                </StyledSelect>
            </FirstFieldContainer>

            <SecondFieldContainer>
                <StyledLabel htmlFor="salary">
                    salary
                </StyledLabel>
                <StyledInput 
                type="text" 
                id="salary"
                value={departmentSalary}
                onChange={(e)=>departmentDispatch({
                    type:"departmentSalaryChange",
                    payload:e.target.value
                })}/>
            </SecondFieldContainer>

            <StyledButton type="submit">
                        Submit
            </StyledButton>
        </FormFields>
        
        <ImgField>
            <OuterPhotoContainer>
                <OuterImgContainer>
                    <StyledImg src="/imgs/profile.png" />
                </OuterImgContainer>
                <ImgInputContainer>
                    <StyledInput 
                    type="file" 
                    id="img" 
                    accept="image/*"
                    value={fileName}
                    onChange={(e)=>departmentDispatch({
                        type:"departmentImgChange",
                        payload:{
                            fileName:e.target.value,
                            file:e.target.files
                        }
                    })}
                    />
                </ImgInputContainer>
            </OuterPhotoContainer>
        </ImgField>

      </StyledForm>
      </FormContainer>
    </>
}

export default DepartmentForm

const StyledForm = styled.form`
    display: grid;
    grid-template-columns:1fr 1fr;
    padding-left: 10px;
`

const FormFields = styled.div`
    display:flex;
    flex-direction: column;
    row-gap: 15%;
`

const FirstFieldContainer = styled.div`
`

const SecondFieldContainer = styled.div`
`

const ImgField = styled.div``

const FormContainer = styled.div`
    display: grid;
    grid-template-rows:0.2fr 1fr;
    height: 100%;
`

const OuterPhotoContainer = styled.div`
    ${flexCenter};
    flex-direction: column;
`
const OuterImgContainer = styled.div`
    width: 5rem;
    height: 6rem;
    margin: 10px 0 20px;
    align-self:center;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:10px;
`

const ImgInputContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
`

